export default {
    editor: {
        label: {
            en: "AG Grid Table",
        },
        icon: "table",
        customStylePropertiesOrder: [
            ["height", "borderColor"],
            ["headerBackgroundColor", "headerTextColor", "headerFontWeight", "headerFontSize", "headerFontFamily"],
            ["rowAlternateColor", "rowHoverColor", "selectedRowBackgroundColor"],
            ["cellColor", "cellFontFamily", "cellFontSize"],
        ],
    },

    properties: {
        height: {
            label: { en: "Grid Height" },
            type: "Length",
            section: "style",
            options: {
                noRange: true,
            },
            bindable: true,
            classes: true,
            responsive: true,
            states: true,
            defaultValue: "400px",
            /* wwEditor:start */
            bindingValidation: {
                type: "string",
                tooltip: "Height of the grid (e.g., 400px)",
            },
            /* wwEditor:end */
        },
        headerBackgroundColor: {
            type: "Color",
            label: "Header Background Color",
            options: {
                nullable: true,
            },
            responsive: true,
            bindable: true,
            states: true,
            classes: true,
        },
        headerTextColor: {
            type: "Color",
            label: "Header Text Color",
            options: {
                nullable: true,
            },
            responsive: true,
            bindable: true,
            states: true,
            classes: true,
        },
        headerFontWeight: {
            label: "Header Font weight",
            type: "TextSelect",
            category: "text",
            options: {
                options: [
                    { value: null, label: "Default", default: true },
                    { value: 100, label: "100 - Thin" },
                    { value: 200, label: "200 - Extra Light" },
                    { value: 300, label: "300 - Light" },
                    { value: 400, label: "400 - Normal" },
                    { value: 500, label: "500 - Medium" },
                    { value: 600, label: "600 - Semi Bold" },
                    { value: 700, label: "700 - Bold" },
                    { value: 800, label: "800 - Extra Bold" },
                    { value: 900, label: "900 - Black" },
                ],
            },
            responsive: true,
            states: true,
            classes: true,
            bindable: true,
            bindingValidation: { markdown: "font-weight", type: "string", cssSupports: "font-weight" },
        },
        headerFontSize: {
            label: "Header Font Size",
            type: "Length",
            options: {
                unitChoices: [
                    { value: "px", label: "px", min: 1, max: 100, default: true },
                    { value: "em", label: "em", min: 0, max: 10, digits: 3, step: 0.1 },
                    { value: "rem", label: "rem", min: 0, max: 10, digits: 3, step: 0.1 },
                ],
                noRange: true,
            },
            responsive: true,
            states: true,
            classes: true,
            bindable: true,
            bindingValidation: { markdown: "font-size", type: "string", cssSupports: "font-size" },
        },
        headerFontFamily: {
            label: "Header Font family",
            type: "FontFamily",
            category: "text",
            responsive: true,
            states: true,
            classes: true,
            bindable: true,
            bindingValidation: { markdown: "font-family", type: "string", cssSupports: "font-family" },
        },
        borderColor: {
            type: "Color",
            label: "Border Color",
            options: {
                nullable: true,
            },
            responsive: true,
            bindable: true,
            states: true,
            classes: true,
        },
        cellColor: {
            type: "Color",
            label: "Cell Color",
            options: {
                nullable: true,
            },
            responsive: true,
            bindable: true,
            states: true,
            classes: true,
        },
        cellFontFamily: {
            label: "Cell Font family",
            type: "FontFamily",
            category: "text",
            responsive: true,
            states: true,
            classes: true,
            bindable: true,
            bindingValidation: { markdown: "font-family", type: "string", cssSupports: "font-family" },
        },
        cellFontSize: {
            type: "Length",
            label: "Cell Font Size",
            options: {
                unitChoices: [
                    { value: "px", label: "px", min: 1, max: 100, default: true },
                    { value: "em", label: "em", min: 0, max: 10, digits: 3, step: 0.1 },
                    { value: "rem", label: "rem", min: 0, max: 10, digits: 3, step: 0.1 },
                ],
                noRange: true,
            },
            responsive: true,
            states: true,
            classes: true,
            bindable: true,
            bindingValidation: { markdown: "font-size", type: "string", cssSupports: "font-size" },
        },
        rowAlternateColor: {
            type: "Color",
            label: "Row Alternate Color",
            options: {
                nullable: true,
            },
            responsive: true,
            bindable: true,
            states: true,
            classes: true,
        },
        rowHoverColor: {
            type: "Color",
            label: "Row Hover Color",
            options: {
                nullable: true,
            },
            responsive: true,
            bindable: true,
            states: true,
            classes: true,
        },
        selectedRowBackgroundColor: {
            type: "Color",
            label: "Selected Row Background Color",
            options: {
                nullable: true,
            },
            responsive: true,
            bindable: true,
            states: true,
            classes: true,
        },
        rowsData: {
            label: { en: "Data" },
            type: "Array",
            section: "settings",
            bindable: true,
            defaultValue: [],
            /* wwEditor:start */
            bindingValidation: {
                validations: [
                    {
                        type: "array",
                    },
                    {
                        type: "object",
                    },
                ],
                tooltip: "A collection or an array of data: \n\n`myCollection` or `[{}, {}, ...]`",
            },
            /* wwEditor:end */
        },
        idFormula: {
            type: "Formula",
            label: "ID (per row)",
            options: (content) => ({
                template: wwLib.wwUtils.getDataFromCollection(content.rowsData)?.[0],
            }),
            section: "settings",
            propertyHelp: {
                tooltip: "A unique id per row. Very useful for performance optimization.",
            },
        },
        rowSelection: {
            label: { en: "Row Selection" },
            type: "TextSelect",
            section: "settings",
            bindable: true,
            options: {
                options: [
                    { value: "none", label: "None", default: true },
                    { value: "single", label: "Single" },
                    { value: "multiple", label: "Multiple" },
                ],
            },
            /* wwEditor:start */
            bindingValidation: {
                type: "string",
                tooltip: "Type of row selection: none or single or multiple",
            },
            /* wwEditor:end */
        },
        toggleState: {
            type: "Button",
            options: {
                text: "Generate columns",
                color: "blue",
                action: "generateColumns",
            },
            section: "settings",
            editorOnly: true,
        },
        columns: {
            label: {
                en: "Columns",
            },
            type: "Array",
            options: {
                item: {
                    type: "Object",
                    options: {
                        item: {
                            headerName: {
                                label: "Header Name",
                                type: "Text",
                            },
                            field: {
                                label: "Key",
                                type: "Text",
                            },
                            cellDataType: {
                                label: "Type",
                                type: "TextSelect",
                                options: {
                                    options: [
                                        { value: undefined, label: "Auto", default: true },
                                        { value: "text", label: "Text" },
                                        { value: "number", label: "Number" },
                                        { value: "boolean", label: "Boolean" },
                                        { value: "date", label: "Date" },
                                        { value: "dateString", label: "Date as string" },
                                        { value: "object", label: "Object" },
                                    ],
                                },
                            },
                            filter: {
                                label: "Filter",
                                type: "OnOff",
                            },
                            sortable: {
                                label: "Sortable",
                                type: "OnOff",
                            },
                            // valueFormula: {
                            //     type: "Formula",
                            //     label: "Mapping value",
                            //     options: (content) => ({
                            //         template: Array.isArray(content.rows)
                            //             ? { row: content.rows[0], index: 0 }
                            //             : { row: null, index: 0 },
                            //     }),
                            //     propertyHelp: {
                            //         tooltip: "Value formula for the cell. Will be used to populate the cell with data.",
                            //     },
                            // },
                        },
                    },
                },
                defaultValue: {
                    filter: false,
                    sortable: false,
                },
                movable: true,
                expandable: true,
                getItemLabel(item, index) {
                    return item?.headerName?.length
                        ? item?.headerName
                        : item?.field?.length
                        ? item?.field
                        : `Column ${index + 1}`;
                },
            },
            defaultValue: [],
            section: "settings",
            bindable: true,
        },
        // showSelectionColumn: {
        //     label: { en: "Show Selection Column" },
        //     type: "OnOff",
        //     section: "settings",
        //     bindable: true,
        //     defaultValue: false,
        //     /* wwEditor:start */
        //     bindingValidation: {
        //         type: "boolean",
        //         tooltip: "Show/hide a checkbox column for row selection",
        //     },
        //     propertyHelp: {
        //         tooltip: "Add a column with checkboxes for selecting rows",
        //     },
        //     /* wwEditor:end */
        // },

        // columnDefs: {
        //     label: { en: "Column Definitions" },
        //     type: "Array",
        //     section: "settings",
        //     bindable: true,
        //     defaultValue: [
        //         { field: "name", headerName: "Name", type: "text" },
        //         { field: "age", headerName: "Age", type: "number" },
        //         { field: "city", headerName: "City", type: "text" },
        //         { field: "active", headerName: "Active", type: "boolean" },
        //         { field: "photo", headerName: "Photo", type: "image" },
        //     ],
        //     options: {
        //         expandable: true,
        //         getItemLabel(_, index) {
        //             return `Column ${index + 1}`;
        //         },
        //         item: {
        //             type: "Object",
        //             defaultValue: {
        //                 field: "",
        //                 headerName: "",
        //                 type: "text",
        //             },
        //             options: {
        //                 item: {
        //                     field: {
        //                         label: "Field",
        //                         type: "Text",
        //                         options: { placeholder: "Enter field name" },
        //                     },
        //                     headerName: {
        //                         label: "Header",
        //                         type: "Text",
        //                         options: { placeholder: "Enter header name" },
        //                     },
        //                     type: {
        //                         label: "Type",
        //                         type: "TextSelect",
        //                         options: {
        //                             options: [
        //                                 { value: "text", label: "Text" },
        //                                 { value: "number", label: "Number" },
        //                                 { value: "boolean", label: "Boolean" },
        //                                 { value: "image", label: "Image" },
        //                                 { value: "date", label: "Date" },
        //                             ],
        //                         },
        //                     },
        //                 },
        //             },
        //         },
        //     },
        //     /* wwEditor:start */
        //     bindingValidation: {
        //         type: "Array",
        //         tooltip: "Array of column definitions with type support",
        //     },
        //     propertyHelp: {
        //         tooltip: "Define the columns and their types to display in the grid",
        //     },
        //     /* wwEditor:end */
        // },
        // enableSorting: {
        //     label: { en: "Enable Sorting" },
        //     type: "OnOff",
        //     section: "settings",
        //     bindable: true,
        //     defaultValue: true,
        //     /* wwEditor:start */
        //     bindingValidation: {
        //         type: "boolean",
        //         tooltip: "Enable or disable column sorting",
        //     },
        //     propertyHelp: {
        //         tooltip: "Allow users to sort columns by clicking headers",
        //     },
        //     /* wwEditor:end */
        // },
        // enableFilter: {
        //     label: { en: "Enable Filtering" },
        //     type: "OnOff",
        //     section: "settings",
        //     bindable: true,
        //     defaultValue: true,
        //     /* wwEditor:start */
        //     bindingValidation: {
        //         type: "boolean",
        //         tooltip: "Enable or disable column filtering",
        //     },
        //     propertyHelp: {
        //         tooltip: "Allow users to filter data in columns",
        //     },
        //     /* wwEditor:end */
        // },
        // paginationPageSize: {
        //     label: { en: "Rows Per Page" },
        //     type: "Number",
        //     section: "settings",
        //     bindable: true,
        //     defaultValue: 10,
        //     options: {
        //         min: 1,
        //         max: 100,
        //         step: 1,
        //     },
        //     /* wwEditor:start */
        //     bindingValidation: {
        //         type: "number",
        //         tooltip: "Number of rows to display per page",
        //     },
        //     propertyHelp: {
        //         tooltip: "Set how many rows appear on each page",
        //     },
        //     /* wwEditor:end */
        // },
        // headerBackgroundColor: {
        //     label: { en: "Header Background Color" },
        //     type: "Color",
        //     section: "style",
        //     bindable: true,
        //     defaultValue: "#f8f9fa",
        //     /* wwEditor:start */
        //     bindingValidation: {
        //         type: "string",
        //         tooltip: "Color value for header background",
        //     },
        //     propertyHelp: {
        //         tooltip: "Set the background color of the table headers",
        //     },
        //     /* wwEditor:end */
        // },
        // headerTextColor: {
        //     label: { en: "Header Text Color" },
        //     type: "Color",
        //     section: "style",
        //     bindable: true,
        //     defaultValue: "#000000",
        //     /* wwEditor:start */
        //     bindingValidation: {
        //         type: "string",
        //         tooltip: "Color value for header text",
        //     },
        //     propertyHelp: {
        //         tooltip: "Set the text color of the table headers",
        //     },
        //     /* wwEditor:end */
        // },
        // rowBackgroundColor: {
        //     label: { en: "Row Background Color" },
        //     type: "Color",
        //     section: "style",
        //     bindable: true,
        //     defaultValue: "#ffffff",
        //     /* wwEditor:start */
        //     bindingValidation: {
        //         type: "string",
        //         tooltip: "Color value for row background",
        //     },
        //     propertyHelp: {
        //         tooltip: "Set the background color of table rows",
        //     },
        //     /* wwEditor:end */
        // },
        // rowTextColor: {
        //     label: { en: "Row Text Color" },
        //     type: "Color",
        //     section: "style",
        //     bindable: true,
        //     defaultValue: "#000000",
        //     /* wwEditor:start */
        //     bindingValidation: {
        //         type: "string",
        //         tooltip: "Color value for row text",
        //     },
        //     propertyHelp: {
        //         tooltip: "Set the text color of table rows",
        //     },
        //     /* wwEditor:end */
        // },
        // alternateRowColor: {
        //     label: { en: "Alternate Row Color" },
        //     type: "Color",
        //     section: "style",
        //     bindable: true,
        //     defaultValue: "#f8f9fa",
        //     /* wwEditor:start */
        //     bindingValidation: {
        //         type: "string",
        //         tooltip: "Color value for alternate rows",
        //     },
        //     propertyHelp: {
        //         tooltip: "Set the background color of alternate rows",
        //     },
        //     /* wwEditor:end */
        // },
        // selectedRowColor: {
        //     label: { en: "Selected Row Color" },
        //     type: "Color",
        //     section: "style",
        //     bindable: true,
        //     defaultValue: "#e7f5ff",
        //     /* wwEditor:start */
        //     bindingValidation: {
        //         type: "string",
        //         tooltip: "Color value for selected rows",
        //     },
        //     propertyHelp: {
        //         tooltip: "Set the background color of selected rows",
        //     },
        //     /* wwEditor:end */
        // },
        // hoverRowColor: {
        //     label: { en: "Hover Row Color" },
        //     type: "Color",
        //     section: "style",
        //     bindable: true,
        //     defaultValue: "#f0f0f0",
        //     /* wwEditor:start */
        //     bindingValidation: {
        //         type: "string",
        //         tooltip: "Color value for row hover state",
        //     },
        //     propertyHelp: {
        //         tooltip: "Set the background color when hovering over rows",
        //     },
        //     /* wwEditor:end */
        // },
        // borderColor: {
        //     label: { en: "Border Color" },
        //     type: "Color",
        //     section: "style",
        //     bindable: true,
        //     defaultValue: "#dde2eb",
        //     /* wwEditor:start */
        //     bindingValidation: {
        //         type: "string",
        //         tooltip: "Color value for table borders",
        //     },
        //     propertyHelp: {
        //         tooltip: "Set the color of table borders",
        //     },
        //     /* wwEditor:end */
        // },
        // fontSize: {
        //     label: { en: "Font Size" },
        //     type: "Length",
        //     section: "style",
        //     bindable: true,
        //     defaultValue: "14px",
        //     /* wwEditor:start */
        //     bindingValidation: {
        //         type: "string",
        //         tooltip: "Font size value (e.g., 14px)",
        //     },
        //     propertyHelp: {
        //         tooltip: "Set the font size for table content",
        //     },
        //     /* wwEditor:end */
        // },
        // headerFontSize: {
        //     label: { en: "Header Font Size" },
        //     type: "Length",
        //     section: "style",
        //     bindable: true,
        //     defaultValue: "14px",
        //     /* wwEditor:start */
        //     bindingValidation: {
        //         type: "string",
        //         tooltip: "Font size value for headers (e.g., 14px)",
        //     },
        //     propertyHelp: {
        //         tooltip: "Set the font size for table headers",
        //     },
        //     /* wwEditor:end */
        // },
        // rowHeight: {
        //     label: { en: "Row Height" },
        //     type: "Length",
        //     section: "style",
        //     bindable: true,
        //     defaultValue: "48px",
        //     /* wwEditor:start */
        //     bindingValidation: {
        //         type: "string",
        //         tooltip: "Height value for rows (e.g., 48px)",
        //     },
        //     propertyHelp: {
        //         tooltip: "Set the height of table rows",
        //     },
        //     /* wwEditor:end */
        // },
        // headerHeight: {
        //     label: { en: "Header Height" },
        //     type: "Length",
        //     section: "style",
        //     bindable: true,
        //     defaultValue: "56px",
        //     /* wwEditor:start */
        //     bindingValidation: {
        //         type: "string",
        //         tooltip: "Height value for headers (e.g., 56px)",
        //     },
        //     propertyHelp: {
        //         tooltip: "Set the height of table headers",
        //     },
        //     /* wwEditor:end */
        // },
    },
    // triggerEvents: [
    //     {
    //         name: 'rowSelected',
    //         label: { en: 'On row selected' },
    //         event: { value: null }
    //     },
    //     {
    //         name: 'rowClicked',
    //         label: { en: 'On row clicked' },
    //         event: { value: null }
    //     },
    //     {
    //         name: 'cellClicked',
    //         label: { en: 'On cell clicked' },
    //         event: { value: null }
    //     }
    // ],
    // actions: [
    //     {
    //         name: 'selectRow',
    //         label: { en: 'Select row' },
    //         action: 'selectRow',
    //         args: [
    //             {
    //                 name: 'index',
    //                 type: 'number',
    //                 label: { en: 'Row index' }
    //             }
    //         ]
    //     },
    //     {
    //         name: 'clearSelection',
    //         label: { en: 'Clear selection' },
    //         action: 'clearSelection'
    //     },
    //     {
    //         name: 'refreshData',
    //         label: { en: 'Refresh data' },
    //         action: 'refreshData'
    //     }
    // ]
};
