<template>
    <div class="ww-datagrid" :class="{ editing: isEditing }" :style="cssVars">
        <ag-grid-vue
            :rowData="rowData"
            :columnDefs="columnDefs"
            :defaultColDef="defaultColDef"
            :domLayout="content.layout === 'auto' ? 'autoHeight' : 'normal'"
            :style="style"
            :rowSelection="rowSelection"
            :theme="theme"
            :getRowId="getRowId"
            :pagination="content.pagination"
            :paginationPageSize="content.paginationPageSize || 10"
            :paginationPageSizeSelector="false"
            :suppressMovableColumns="!content.movableColumns"
            :columnHoverHighlight="content.columnHoverHighlight"
            @grid-ready="onGridReady"
            @row-selected="onRowSelected"
            @cell-value-changed="onCellValueChanged"
        >
        </ag-grid-vue>
    </div>
</template>

<script>
import { shallowRef } from "vue";
import { AgGridVue } from "ag-grid-vue3";
import { AllCommunityModule, ModuleRegistry, themeQuartz } from "ag-grid-community";
import ActionCellRenderer from "./components/ActionCellRenderer.vue";
import ImageCellRenderer from "./components/ImageCellRenderer.vue";

// TODO: maybe register less modules
// TODO: maybe register modules per grid instead of globally
ModuleRegistry.registerModules([AllCommunityModule]);

export default {
    components: {
        AgGridVue,
        ActionCellRenderer,
        ImageCellRenderer,
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
    setup(props) {
        const { resolveMappingFormula } = wwLib.wwFormula.useFormula();

        const gridApi = shallowRef(null);
        const { value: selectedRows, setValue: setSelectedRows } = wwLib.wwVariable.useComponentVariable({
            uid: props.uid,
            name: "selectedRows",
            type: "array",
            defaultValue: [],
            readonly: true,
        });

        const onGridReady = (params) => {
            gridApi.value = params.api;
        };
        const onRowSelected = (event) => {
            if (!gridApi.value) return;
            const selected = gridApi.value.getSelectedRows() || [];
            setSelectedRows(selected);
        };

        return {
            resolveMappingFormula,
            onGridReady,
            onRowSelected,
            gridApi,
        };
    },
    computed: {
        rowData() {
            const data = wwLib.wwUtils.getDataFromCollection(this.content.rowData);
            return Array.isArray(data) ? data ?? [] : [];
        },
        defaultColDef() {
            return {
                editable: false,
                resizable: this.content.resizableColumns,
            };
        },
        columnDefs() {
            return this.content.columns.map((col) => {
                const minWidth =
                    !col.minWidth || col.minWidth === "auto"
                        ? undefined
                        : wwLib.wwUtils.getLengthUnit(col.minWidth)?.[0];
                const maxWidth =
                    !col.maxWidth || col.maxWidth === "auto"
                        ? undefined
                        : wwLib.wwUtils.getLengthUnit(col.maxWidth)?.[0];
                const width =
                    !col.width || col.width === "auto" || this.content.widthAlgo === "flex"
                        ? undefined
                        : wwLib.wwUtils.getLengthUnit(col.width)?.[0];
                const flex = this.content.widthAlgo === "flex" ? col.flex : undefined;
                const commonProperties = {
                    minWidth,
                    maxWidth,
                    pinned: col.pinned === "none" ? undefined : col.pinned,
                };
                if (width) {
                    commonProperties.width = width;
                }
                if (flex) {
                    commonProperties.flex = flex;
                }
                switch (col.cellDataType) {
                    case "action": {
                        return {
                            ...commonProperties,
                            headerName: col.headerName,
                            cellRenderer: "ActionCellRenderer",
                            cellRendererParams: {
                                name: col.actionName,
                                label: col.actionLabel,
                                trigger: this.onActionTrigger,
                                withFont: !!this.content.actionFont,
                            },
                            sortable: false,
                            filter: false,
                        };
                    }
                    case "image": {
                        return {
                            ...commonProperties,
                            headerName: col.headerName,
                            field: col.field,
                            cellRenderer: "ImageCellRenderer",
                            cellRendererParams: {
                                width: col.imageWidth,
                                height: col.imageHeight,
                            },
                        };
                    }
                    default: {
                        const result = {
                            ...commonProperties,
                            headerName: col.headerName,
                            field: col.field,
                            sortable: col.sortable,
                            filter: col.filter,
                            editable: col.editable,
                        };
                        if (col.useCustomLabel) {
                            result.valueFormatter = (params) => {
                                return this.resolveMappingFormula(col.displayLabelFormula, params.value);
                            };
                        }
                        return result;
                    }
                }
            });
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
            if (this.content.layout === "auto") return {};
            return {
                height: this.content.height || "400px",
            };
        },
        cssVars() {
            return {
                "--ww-data-grid_action-backgroundColor": this.content.actionBackgroundColor,
                "--ww-data-grid_action-color": this.content.actionColor,
                "--ww-data-grid_action-padding": this.content.actionPadding,
                "--ww-data-grid_action-border": this.content.actionBorder,
                "--ww-data-grid_action-borderRadius": this.content.actionBorderRadius,
                ...(this.content.actionFont
                    ? { "--ww-data-grid_action-font": this.content.actionFont }
                    : {
                          "--ww-data-grid_action-fontSize": this.content.actionFontSize,
                          "--ww-data-grid_action-fontFamily": this.content.actionFontFamily,
                          "--ww-data-grid_action-fontWeight": this.content.actionFontWeight,
                          "--ww-data-grid_action-fontStyle": this.content.actionFontStyle,
                          "--ww-data-grid_action-lineHeight": this.content.actionLineHeight,
                      }),
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
                backgroundColor: this.content.rowBackgroundColor,
                rowHoverColor: this.content.rowHoverColor,
                selectedRowBackgroundColor: this.content.selectedRowBackgroundColor,
                rowVerticalPaddingScale: this.content.rowVerticalPaddingScale || 1,
                menuBackgroundColor: this.content.menuBackgroundColor,
                menuTextColor: this.content.menuTextColor,
                columnHoverColor: this.content.columnHoverColor,
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
        onActionTrigger(event) {
            this.$emit("trigger-event", {
                name: "action",
                event,
            });
        },
        onCellValueChanged(event) {
            this.$emit("trigger-event", {
                name: "cellValueChanged",
                event: {
                    oldValue: event.oldValue,
                    newValue: event.newValue,
                    columnId: event.column.getColId(),
                    row: event.data,
                },
            });
        },
        /* wwEditor:start */
        generateColumns() {
            this.$emit("update:content", {
                columns: this.rowData?.[0]
                    ? Object.keys(this.rowData[0]).map((key) => ({ field: key, sortable: true, filter: true }))
                    : [],
            });
        },
        getOnActionTestEvent() {
            const data = this.rowData;
            if (!data || !data[0]) throw new Error("No data found");
            return { actionName: "actionName", row: data[0], id: 0, index: 0, displayIndex: 0 };
        },
        getOnCellValueChangedTestEvent() {
            const data = this.rowData;
            if (!data || !data[0]) throw new Error("No data found");
            return { oldValue: "oldValue", newValue: "newValue", columnId: "columnId", row: data[0] };
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
