<template>
    <div class="ag-grid-table">
        <ag-grid-vue :class="gridThemeClass" :style="gridStyle" :rowData="safeRowData" :columnDefs="processedColumnDefs"
            :defaultColDef="defaultColDef" :pagination="true" :paginationPageSize="content?.paginationPageSize || 10"
            :rowSelection="content?.rowSelection || 'single'" :suppressRowClickSelection="content?.showSelectionColumn"
            :checkboxSelection="content?.showSelectionColumn"
            :headerCheckboxSelection="content?.showSelectionColumn && content?.rowSelection === 'multiple'"
            :headerHeight="content?.headerHeight ? parseInt(content?.headerHeight) : 56"
            :rowHeight="content?.rowHeight ? parseInt(content?.rowHeight) : 48" @grid-ready="onGridReady"
            @row-selected="onRowSelected" @row-clicked="onRowClicked" @cell-clicked="onCellClicked"
            @filter-changed="onFilterChanged" @sort-changed="onSortChanged" />
    </div>
</template>

<script>
import { computed, ref, watch } from 'vue';
import { AgGridVue } from 'ag-grid-vue3';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import ImageCellRenderer from './components/ImageCellRenderer.vue';
import BooleanCellRenderer from './components/BooleanCellRenderer.vue';

export default {
    components: {
        AgGridVue,
        ImageCellRenderer,
        BooleanCellRenderer
    },
    props: {
        content: {
            type: Object,
            required: true
        },
        uid: {
            type: String,
            required: true
        }
    },
    emits: ['trigger-event'],
    setup(props, { emit }) {
        const gridApi = ref(null);
        const gridColumnApi = ref(null);
        const isRefreshing = ref(false);

        // Internal variables setup using wwLib
        const { value: selectedRows, setValue: setSelectedRows } = wwLib.wwVariable.useComponentVariable({
            uid: props.uid,
            name: 'selectedRows',
            type: 'array',
            defaultValue: []
        });

        const { value: filterModel, setValue: setFilterModel } = wwLib.wwVariable.useComponentVariable({
            uid: props.uid,
            name: 'filterModel',
            type: 'object',
            defaultValue: {}
        });

        const { value: sortModel, setValue: setSortModel } = wwLib.wwVariable.useComponentVariable({
            uid: props.uid,
            name: 'sortModel',
            type: 'array',
            defaultValue: []
        });

        const safeRowData = computed(() => {
            return Array.isArray(props.content?.rowData) ? props.content.rowData : [];
        });

        const gridThemeClass = computed(() => ({
            'ag-theme-alpine': true,
            'custom-grid': true
        }));

        const gridStyle = computed(() => ({
            height: props.content?.height || '400px',
            width: '100%',
            '--ag-header-background-color': props.content?.headerBackgroundColor || '#f8f9fa',
            '--ag-header-foreground-color': props.content?.headerTextColor || '#000000',
            '--ag-background-color': props.content?.rowBackgroundColor || '#ffffff',
            '--ag-foreground-color': props.content?.rowTextColor || '#000000',
            '--ag-odd-row-background-color': props.content?.alternateRowColor || '#f8f9fa',
            '--ag-selected-row-background-color': props.content?.selectedRowColor || '#e7f5ff',
            '--ag-row-hover-color': props.content?.hoverRowColor || '#f0f0f0',
            '--ag-border-color': props.content?.borderColor || '#dde2eb',
            '--ag-font-size': props.content?.fontSize || '14px',
            '--ag-header-font-size': props.content?.headerFontSize || '14px'
        }));

        // Safe refresh function with setTimeout
        function refreshGrid() {
            if (!gridApi.value || isRefreshing.value) return;

            isRefreshing.value = true;
            setTimeout(() => {
                try {
                    gridApi.value.refreshCells({ force: true });
                } catch (error) {
                    console.warn('Grid refresh failed:', error);
                } finally {
                    isRefreshing.value = false;
                }
            }, 0);
        }

        // Watch for style changes and refresh grid safely
        watch(() => props.content?.headerBackgroundColor, refreshGrid);
        watch(() => props.content?.headerTextColor, refreshGrid);
        watch(() => props.content?.rowBackgroundColor, refreshGrid);
        watch(() => props.content?.rowTextColor, refreshGrid);
        watch(() => props.content?.alternateRowColor, refreshGrid);
        watch(() => props.content?.selectedRowColor, refreshGrid);
        watch(() => props.content?.hoverRowColor, refreshGrid);
        watch(() => props.content?.borderColor, refreshGrid);
        watch(() => props.content?.fontSize, refreshGrid);
        watch(() => props.content?.headerFontSize, refreshGrid);

        watch(() => props.content?.rowData, (newVal) => {
            if (!gridApi.value || !Array.isArray(newVal)) return;

            setTimeout(() => {
                try {
                    gridApi.value.setRowData(newVal);
                } catch (error) {
                    console.warn('Setting row data failed:', error);
                }
            }, 0);
        }, { deep: true });

        const processedColumnDefs = computed(() => {
            const columns = (props.content?.columnDefs || []).map(col => ({
                ...col,
                cellRenderer: getCellRenderer(col.type),
                valueFormatter: getValueFormatter(col.type),
            }));

            if (props.content?.showSelectionColumn) {
                const checkboxColumn = {
                    headerName: '',
                    field: 'selection',
                    width: 40,
                    minWidth: 40,
                    maxWidth: 40,
                    checkboxSelection: true,
                    headerCheckboxSelection: props.content?.rowSelection === 'multiple',
                    pinned: 'left',
                    lockPosition: true,
                    sortable: false,
                    filter: false,
                };
                return [checkboxColumn, ...columns];
            }

            return columns;
        });

        const getCellRenderer = (type) => {
            switch (type) {
                case 'image':
                    return 'ImageCellRenderer';
                case 'boolean':
                    return 'BooleanCellRenderer';
                default:
                    return undefined;
            }
        };

        const getValueFormatter = (type) => {
            switch (type) {
                case 'number':
                    return (params) => params.value?.toLocaleString() ?? '';
                case 'date':
                    return (params) => params.value ? new Date(params.value).toLocaleDateString() : '';
                default:
                    return undefined;
            }
        };

        const defaultColDef = computed(() => ({
            sortable: props.content?.enableSorting ?? true,
            filter: props.content?.enableFilter ?? true,
            resizable: true,
            flex: 1,
            minWidth: 100,
        }));

        const onGridReady = (params) => {
            gridApi.value = params.api;
            gridColumnApi.value = params.columnApi;

            if (params.api) {
                setTimeout(() => {
                    params.api.setRowData(safeRowData.value);
                    params.api.sizeColumnsToFit();
                }, 0);
            }
        };

        const onRowSelected = (event) => {
            if (!gridApi.value) return;

            const selected = gridApi.value.getSelectedRows() || [];
            setSelectedRows(selected);
            emit('trigger-event', {
                name: 'rowSelected',
                event: { value: selected }
            });
        };

        const onRowClicked = (event) => {
            if (event?.data) {
                emit('trigger-event', {
                    name: 'rowClicked',
                    event: { value: event.data }
                });
            }
        };

        const onCellClicked = (event) => {
            if (event?.data && event?.column) {
                emit('trigger-event', {
                    name: 'cellClicked',
                    event: {
                        value: {
                            data: event.data,
                            colId: event.column.getColId()
                        }
                    }
                });
            }
        };

        const onFilterChanged = () => {
            if (!gridApi.value) return;

            const model = gridApi.value.getFilterModel() || {};
            setFilterModel(model);
        };

        const onSortChanged = () => {
            if (!gridColumnApi.value) return;

            const sort = gridColumnApi.value.getColumnState()
                .filter(col => col.sort)
                .map(col => ({
                    colId: col.colId,
                    sort: col.sort
                }));
            setSortModel(sort);
        };

        const selectRow = (index) => {
            if (!gridApi.value || typeof index !== 'number' || index < 0 || index >= safeRowData.value.length) return;

            setTimeout(() => {
                gridApi.value.forEachNode((node, nodeIndex) => {
                    if (nodeIndex === index) {
                        node.setSelected(true);
                    }
                });
            }, 0);
        };

        const clearSelection = () => {
            if (!gridApi.value) return;

            setTimeout(() => {
                gridApi.value.deselectAll();
            }, 0);
        };

        const refreshData = () => {
            if (!gridApi.value) return;

            setTimeout(() => {
                gridApi.value.refreshCells({ force: true });
            }, 0);
        };

        return {
            gridStyle,
            gridThemeClass,
            safeRowData,
            processedColumnDefs,
            defaultColDef,
            onGridReady,
            onRowSelected,
            onRowClicked,
            onCellClicked,
            onFilterChanged,
            onSortChanged,
            selectRow,
            clearSelection,
            refreshData
        };
    }
};
</script>

<style lang="scss" scoped>
.ag-grid-table {
    width: 100%;
    min-height: 200px;

    :deep(.custom-grid.ag-theme-alpine) {
        --ag-grid-size: 6px;
        --ag-list-item-height: var(--ag-grid-size * 4);
        --ag-cell-horizontal-padding: calc(var(--ag-grid-size) * 2);
        --ag-borders: solid 1px;
        --ag-borders-critical: solid 1px;
        --ag-borders-secondary: solid 1px;
        --ag-secondary-border-color: var(--ag-border-color);

        .ag-root-wrapper {
            border: none;
        }

        .ag-header-cell {
            font-weight: 600;
        }

        .ag-cell {
            display: flex;
            align-items: center;
        }

        .ag-header-cell-label {
            display: flex;
            align-items: center;
        }

        .ag-row-hover {
            background-color: var(--ag-row-hover-color) !important;
        }

        .ag-row-selected {
            background-color: var(--ag-selected-row-background-color) !important;
        }
    }
}
</style>