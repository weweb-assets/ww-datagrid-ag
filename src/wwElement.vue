<template>
    <!-- <div class="ag-grid-table">
        <ag-grid-vue
            :class="gridThemeClass"
            :style="gridStyle"
            :rowData="safeRowData"
            :columnDefs="processedColumnDefs"
            :defaultColDef="defaultColDef"
            :pagination="true"
            :paginationPageSize="content?.paginationPageSize || 10"
            :rowSelection="content?.rowSelection || 'single'"
            :suppressRowClickSelection="content?.showSelectionColumn"
            :checkboxSelection="content?.showSelectionColumn"
            :headerCheckboxSelection="content?.showSelectionColumn && content?.rowSelection === 'multiple'"
            :headerHeight="content?.headerHeight ? parseInt(content?.headerHeight) : 56"
            :rowHeight="content?.rowHeight ? parseInt(content?.rowHeight) : 48"
            @grid-ready="onGridReady"
            @row-selected="onRowSelected"
            @row-clicked="onRowClicked"
            @cell-clicked="onCellClicked"
            @filter-changed="onFilterChanged"
            @sort-changed="onSortChanged"
        />
    </div> -->
    <div class="ww-datagrid" :class="{ editing: isEditing }">
        <ag-grid-vue
            :rowData="rowData"
            :columnDefs="columnDefs"
            :defaultColDef="defaultColDef"
            :style="style"
            :rowSelection="rowSelection"
            :theme="theme"
            :getRowId="getRowId"
        >
        </ag-grid-vue>
    </div>
</template>

<script>
import { ref } from "vue";
import { AgGridVue } from "ag-grid-vue3";
import { AllCommunityModule, ModuleRegistry, themeQuartz } from "ag-grid-community";

// TODO: maybe register less modules
// TODO: maybe register modules per grid instead of globally
ModuleRegistry.registerModules([AllCommunityModule]);

export default {
    components: {
        AgGridVue,
    },
    props: {
        content: {
            type: Object,
            required: true,
        },
        uid: {
            type: String,
            required: true,
        },
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
    },
    emits: ["trigger-event"],
    setup() {
        const { resolveMappingFormula } = wwLib.wwFormula.useFormula();

        return {
            resolveMappingFormula,
        };
        //     const gridApi = ref(null);
        //     const gridColumnApi = ref(null);
        //     const isRefreshing = ref(false);
        //     // Internal variables setup using wwLib
        //     const { value: selectedRows, setValue: setSelectedRows } = wwLib.wwVariable.useComponentVariable({
        //         uid: props.uid,
        //         name: "selectedRows",
        //         type: "array",
        //         defaultValue: [],
        //     });
        //     const { value: filterModel, setValue: setFilterModel } = wwLib.wwVariable.useComponentVariable({
        //         uid: props.uid,
        //         name: "filterModel",
        //         type: "object",
        //         defaultValue: {},
        //     });
        //     const { value: sortModel, setValue: setSortModel } = wwLib.wwVariable.useComponentVariable({
        //         uid: props.uid,
        //         name: "sortModel",
        //         type: "array",
        //         defaultValue: [],
        //     });
        //     const safeRowData = computed(() => {
        //         return Array.isArray(props.content?.rowData) ? props.content.rowData : [];
        //     });
        //     const gridThemeClass = computed(() => ({
        //         "ag-theme-alpine": true,
        //         "custom-grid": true,
        //     }));
        //     const gridStyle = computed(() => ({
        //         height: props.content?.height || "400px",
        //         width: "100%",
        //         "--ag-header-background-color": props.content?.headerBackgroundColor || "#f8f9fa",
        //         "--ag-header-foreground-color": props.content?.headerTextColor || "#000000",
        //         "--ag-background-color": props.content?.rowBackgroundColor || "#ffffff",
        //         "--ag-foreground-color": props.content?.rowTextColor || "#000000",
        //         "--ag-odd-row-background-color": props.content?.alternateRowColor || "#f8f9fa",
        //         "--ag-selected-row-background-color": props.content?.selectedRowColor || "#e7f5ff",
        //         "--ag-row-hover-color": props.content?.hoverRowColor || "#f0f0f0",
        //         "--ag-border-color": props.content?.borderColor || "#dde2eb",
        //         "--ag-font-size": props.content?.fontSize || "14px",
        //         "--ag-header-font-size": props.content?.headerFontSize || "14px",
        //     }));
        //     // Safe refresh function with setTimeout
        //     function refreshGrid() {
        //         if (!gridApi.value || isRefreshing.value) return;
        //         isRefreshing.value = true;
        //         setTimeout(() => {
        //             try {
        //                 gridApi.value.refreshCells({ force: true });
        //             } catch (error) {
        //                 console.warn("Grid refresh failed:", error);
        //             } finally {
        //                 isRefreshing.value = false;
        //             }
        //         }, 0);
        //     }
        //     // Watch for style changes and refresh grid safely
        //     watch(() => props.content?.headerBackgroundColor, refreshGrid);
        //     watch(() => props.content?.headerTextColor, refreshGrid);
        //     watch(() => props.content?.rowBackgroundColor, refreshGrid);
        //     watch(() => props.content?.rowTextColor, refreshGrid);
        //     watch(() => props.content?.alternateRowColor, refreshGrid);
        //     watch(() => props.content?.selectedRowColor, refreshGrid);
        //     watch(() => props.content?.hoverRowColor, refreshGrid);
        //     watch(() => props.content?.borderColor, refreshGrid);
        //     watch(() => props.content?.fontSize, refreshGrid);
        //     watch(() => props.content?.headerFontSize, refreshGrid);
        //     watch(
        //         () => props.content?.rowData,
        //         (newVal) => {
        //             if (!gridApi.value || !Array.isArray(newVal)) return;
        //             setTimeout(() => {
        //                 try {
        //                     gridApi.value.setRowData(newVal);
        //                 } catch (error) {
        //                     console.warn("Setting row data failed:", error);
        //                 }
        //             }, 0);
        //         },
        //         { deep: true }
        //     );
        //     const processedColumnDefs = computed(() => {
        //         const columns = (props.content?.columnDefs || []).map((col) => ({
        //             ...col,
        //             cellRenderer: getCellRenderer(col.type),
        //             valueFormatter: getValueFormatter(col.type),
        //         }));
        //         if (props.content?.showSelectionColumn) {
        //             const checkboxColumn = {
        //                 headerName: "",
        //                 field: "selection",
        //                 width: 40,
        //                 minWidth: 40,
        //                 maxWidth: 40,
        //                 checkboxSelection: true,
        //                 headerCheckboxSelection: props.content?.rowSelection === "multiple",
        //                 pinned: "left",
        //                 lockPosition: true,
        //                 sortable: false,
        //                 filter: false,
        //             };
        //             return [checkboxColumn, ...columns];
        //         }
        //         return columns;
        //     });
        //     const getCellRenderer = (type) => {
        //         switch (type) {
        //             case "image":
        //                 return "ImageCellRenderer";
        //             case "boolean":
        //                 return "BooleanCellRenderer";
        //             default:
        //                 return undefined;
        //         }
        //     };
        //     const getValueFormatter = (type) => {
        //         switch (type) {
        //             case "number":
        //                 return (params) => params.value?.toLocaleString() ?? "";
        //             case "date":
        //                 return (params) => (params.value ? new Date(params.value).toLocaleDateString() : "");
        //             default:
        //                 return undefined;
        //         }
        //     };
        //     const defaultColDef = computed(() => ({
        //         sortable: props.content?.enableSorting ?? true,
        //         filter: props.content?.enableFilter ?? true,
        //         resizable: true,
        //         flex: 1,
        //         minWidth: 100,
        //     }));
        //     const onGridReady = (params) => {
        //         gridApi.value = params.api;
        //         gridColumnApi.value = params.columnApi;
        //         if (params.api) {
        //             setTimeout(() => {
        //                 params.api.setRowData(safeRowData.value);
        //                 params.api.sizeColumnsToFit();
        //             }, 0);
        //         }
        //     };
        //     const onRowSelected = (event) => {
        //         if (!gridApi.value) return;
        //         const selected = gridApi.value.getSelectedRows() || [];
        //         setSelectedRows(selected);
        //         emit("trigger-event", {
        //             name: "rowSelected",
        //             event: { value: selected },
        //         });
        //     };
        //     const onRowClicked = (event) => {
        //         if (event?.data) {
        //             emit("trigger-event", {
        //                 name: "rowClicked",
        //                 event: { value: event.data },
        //             });
        //         }
        //     };
        //     const onCellClicked = (event) => {
        //         if (event?.data && event?.column) {
        //             emit("trigger-event", {
        //                 name: "cellClicked",
        //                 event: {
        //                     value: {
        //                         data: event.data,
        //                         colId: event.column.getColId(),
        //                     },
        //                 },
        //             });
        //         }
        //     };
        //     const onFilterChanged = () => {
        //         if (!gridApi.value) return;
        //         const model = gridApi.value.getFilterModel() || {};
        //         setFilterModel(model);
        //     };
        //     const onSortChanged = () => {
        //         if (!gridColumnApi.value) return;
        //         const sort = gridColumnApi.value
        //             .getColumnState()
        //             .filter((col) => col.sort)
        //             .map((col) => ({
        //                 colId: col.colId,
        //                 sort: col.sort,
        //             }));
        //         setSortModel(sort);
        //     };
        //     const selectRow = (index) => {
        //         if (!gridApi.value || typeof index !== "number" || index < 0 || index >= safeRowData.value.length) return;
        //         setTimeout(() => {
        //             gridApi.value.forEachNode((node, nodeIndex) => {
        //                 if (nodeIndex === index) {
        //                     node.setSelected(true);
        //                 }
        //             });
        //         }, 0);
        //     };
        //     const clearSelection = () => {
        //         if (!gridApi.value) return;
        //         setTimeout(() => {
        //             gridApi.value.deselectAll();
        //         }, 0);
        //     };
        //     const refreshData = () => {
        //         if (!gridApi.value) return;
        //         setTimeout(() => {
        //             gridApi.value.refreshCells({ force: true });
        //         }, 0);
        //     };
        //     return {
        //         gridStyle,
        //         gridThemeClass,
        //         safeRowData,
        //         processedColumnDefs,
        //         defaultColDef,
        //         onGridReady,
        //         onRowSelected,
        //         onRowClicked,
        //         onCellClicked,
        //         onFilterChanged,
        //         onSortChanged,
        //         selectRow,
        //         clearSelection,
        //         refreshData,
        //     };
    },
    computed: {
        rowData() {
            return wwLib.wwUtils.getDataFromCollection(this.content.rowsData);
        },
        columnDefs() {
            return this.content.columns;
        },
        rowSelection() {
            if (this.content.rowSelection === "multiple") {
                return { mode: "multiRow" };
            } else if (this.content.rowSelection === "single") {
                return { mode: "singleRow" };
            } else {
                return null;
            }
        },
        style() {
            return {
                height: this.content.height || "400px",
            };
        },
        theme() {
            return themeQuartz.withParams({
                headerBackgroundColor: this.content.headerBackgroundColor,
                headerTextColor: this.content.headerTextColor,
                headerFontSize: this.content.headerFontSize,
                headerFontFamily: this.content.headerFontFamily,
                headerFontWeight: this.content.headerFontWeight,
                borderColor: this.content.borderColor,
                cellTextColor: this.content.cellColor,
                cellFontFamily: this.content.cellFontFamily,
                dataFontSize: this.content.cellFontSize,
                oddRowBackgroundColor: this.content.rowAlternateColor,
                rowHoverColor: this.content.rowHoverColor,
                selectedRowBackgroundColor: this.content.selectedRowBackgroundColor,
                // selectCellBackgroundColor: this.content.selectedCellBackgroundColor,
                // selectCellBorder: this.content.selectedCellBorder,
            });
        },
        isEditing() {
            /* wwEditor:start */
            return this.wwEditorState.editMode === wwLib.wwEditorHelper.EDIT_MODES.EDITION;
            /* wwEditor:end */
            // eslint-disable-next-line no-unreachable
            return false;
        },
    },
    methods: {
        getRowId(params) {
            return this.resolveMappingFormula(this.content.idFormula, params.data);
        },
        /* wwEditor:start */
        generateColumns() {
            this.$emit("update:content", {
                columns: this.rowData?.[0]
                    ? Object.keys(this.rowData[0]).map((key) => ({ field: key, sortable: true, filter: true }))
                    : [],
            });
        },
        /* wwEditor:end */
    },
};
</script>

<style scoped>
.ww-datagrid {
    position: relative;
    /* wwEditor:start */
    &.editing {
        &::before {
            content: "";
            position: absolute;
            inset: 0;
            display: block;
            pointer-events: initial;
            z-index: 10;
        }
    }
    /* wwEditor:end */
}
</style>
