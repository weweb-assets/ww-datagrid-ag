export default {
    editor: {
        label: {
            en: "Datagrid",
        },
        icon: "table",
        customStylePropertiesOrder: [
            ["layout", "height", "textColor", "borderColor"],
            [
                "headerTitle",
                "headerBackgroundColor",
                "headerTextColor",
                "headerFontWeight",
                "headerFontSize",
                "headerFontFamily",
            ],
            [
                "rowBackgroundColor",
                "rowTitle",
                "rowAlternateColor",
                "rowHoverColor",
                "rowVerticalPaddingScale",
                "selectedRowBackgroundColor",
            ],
            ["columnTitle", "columnHoverHighlight", "columnHoverColor"],
            ["cellTitle", "cellColor", "cellFontFamily", "cellFontSize"],
            ["menuTitle", "menuTextColor", "menuBackgroundColor"],
            [
                "actionTitle",
                "actionColor",
                "actionBackgroundColor",
                "actionPadding",
                "actionBorder",
                "actionBorderRadius",
                "actionFont",
                "actionFontSize",
                "actionFontFamily",
                "actionFontWeight",
                "actionFontStyle",
                "actionLineHeight",
            ],
        ],
    },
    triggerEvents: [
        {
            name: "action",
            label: { en: "On Action" },
            event: { actionName: "", row: null, id: 0, index: 0, displayIndex: 0 },
            getTestEvent: "getOnActionTestEvent",
            default: true,
        },
        {
            name: "cellValueChanged",
            label: { en: "On Cell Value Changed" },
            event: {
                oldValue: null,
                newValue: null,
                columnId: "id",
                row: null,
            },
            getTestEvent: "getOnCellValueChangedTestEvent",
        },
        {
            name: "rowSelected",
            label: { en: "On Row Selected" },
            event: {
                row: null,
            },
            getTestEvent: "getSelectionTestEvent",
        },
        {
            name: "rowDeselected",
            label: { en: "On Row Deselected" },
            event: {
                row: null,
            },
            getTestEvent: "getSelectionTestEvent",
        }
    ],
    properties: {
        headerTitle: {
            type: "Title",
            label: "Header",
            editorOnly: true,
        },
        rowTitle: {
            type: "Title",
            label: "Row",
            editorOnly: true,
        },
        columnTitle: {
            type: "Title",
            label: "Column",
            editorOnly: true,
        },
        cellTitle: {
            type: "Title",
            label: "Cell",
            editorOnly: true,
        },
        menuTitle: {
            type: "Title",
            label: "Menu",
            editorOnly: true,
        },
        actionTitle: {
            type: "Title",
            label: "Action",
            editorOnly: true,
        },
        layout: {
            type: "TextSelect",
            label: "Height Mode",
            options: {
                options: [
                    { value: "fixed", label: "Fixed", default: true },
                    { value: "auto", label: "Auto" },
                ],
            },
            bindable: true,
            responsive: true,
            propertyHelp: {
                tooltip:
                    "Be cautious when using auto mode with a large number of rows, as it may slow down page rendering",
            },
            bindingValidation: {
                type: 'string',
                tooltip: 'fixed | auto',
            },
        },
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
            hidden: (content) => content.layout === "auto",
            /* wwEditor:end */
        },
        headerBackgroundColor: {
            type: "Color",
            label: "Background Color",
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
            label: "Text Color",
            options: {
                nullable: true,
            },
            responsive: true,
            bindable: true,
            states: true,
            classes: true,
        },
        headerFontWeight: {
            label: "Font weight",
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
            label: "Font Size",
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
        textColor: {
            label: "Text Color",
            type: "Color",
            category: "text",
            options: { nullable: true },
            bindable: true,
            bindingValidation: { markdown: "color", type: "string", cssSupports: "color" },
            responsive: true,
            states: true,
            classes: true,
        },
        headerFontFamily: {
            label: "Font family",
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
            label: "Text Color",
            options: {
                nullable: true,
            },
            responsive: true,
            bindable: true,
            states: true,
            classes: true,
        },
        cellFontFamily: {
            label: "Font family",
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
            label: "Font Size",
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
        columnHoverHighlight: {
            type: "OnOff",
            label: "Hover Highlight",
            responsive: true,
            bindable: true,
            states: true,
            classes: true,
        },
        columnHoverColor: {
            type: "Color",
            label: "Hover Color",
            options: {
                nullable: true,
            },
            responsive: true,
            bindable: true,
            states: true,
            classes: true,
            propertyHelp: {
                tooltip: `Should be a semi-transparent color to allow the background color to show through.`,
            },
            hidden: (content) => !content.columnHoverHighlight,
        },
        rowBackgroundColor: {
            type: "Color",
            label: "Background Color",
            options: {
                nullable: true,
            },
            responsive: true,
            bindable: true,
            states: true,
            classes: true,
        },
        rowAlternateColor: {
            type: "Color",
            label: "Alternate Color",
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
            label: "Hover Color",
            options: {
                nullable: true,
            },
            responsive: true,
            bindable: true,
            states: true,
            classes: true,
            propertyHelp: {
                tooltip: `Should be a semi-transparent color to allow the background color to show through.`,
            },
        },
        selectedRowBackgroundColor: {
            type: "Color",
            label: "Selected Background Color",
            options: {
                nullable: true,
            },
            responsive: true,
            bindable: true,
            states: true,
            classes: true,
            propertyHelp: {
                tooltip: `Should be a semi-transparent color to allow the background color to show through.`,
            },
        },
        rowVerticalPaddingScale: {
            type: "Number",
            label: "Vertical Padding Scale",
            options: {
                min: 0,
                max: 5,
                step: 0.1,
                default: 1,
            },
            responsive: true,
            bindable: true,
            states: true,
            classes: true,
        },
        menuTextColor: {
            label: "Text color",
            type: "Color",
            category: "text",
            options: { nullable: true },
            bindable: true,
            bindingValidation: { markdown: "color", type: "string", cssSupports: "color" },
            responsive: true,
            states: true,
            classes: true,
        },
        menuBackgroundColor: {
            label: "Background color",
            type: "Color",
            category: "background",
            options: { nullable: true },
            bindable: true,
            bindingValidation: { markdown: "background-color", type: "string", cssSupports: "background-color" },
            responsive: true,
            states: true,
            classes: true,
        },
        actionColor: {
            label: "Text color",
            type: "Color",
            category: "text",
            options: { nullable: true },
            bindable: true,
            bindingValidation: { markdown: "color", type: "string", cssSupports: "color" },
            responsive: true,
            states: true,
            classes: true,
        },
        actionBackgroundColor: {
            label: "Background color",
            type: "Color",
            category: "background",
            options: { nullable: true },
            bindable: true,
            bindingValidation: { markdown: "background-color", type: "string", cssSupports: "background-color" },
            responsive: true,
            states: true,
            classes: true,
        },
        actionPadding: {
            label: "Padding",
            type: "Spacing",
            responsive: true,
            bindable: true,
            states: true,
            classes: true,
            bindingValidation: {
                markdown: "padding",
                type: "string",
                cssSupports: "padding",
            },
        },
        actionBorder: {
            label: "Border",
            type: "Border",
            responsive: true,
            bindable: true,
            states: true,
            classes: true,
            bindingValidation: {
                markdown: "border",
                type: "string",
                cssSupports: "border",
            },
        },
        actionBorderRadius: {
            label: "Border radius",
            type: "Spacing",
            options: {
                isCorner: true,
                unitChoices: [
                    { value: "px", label: "px", min: 0, max: 50, default: true },
                    { value: "%", label: "%", min: 0, max: 100, digits: 2, step: 1 },
                ],
            },
            responsive: true,
            bindable: true,
            states: true,
            classes: true,
            bindingValidation: {
                markdown: "border-radius",
                type: "string",
                cssSupports: "border-radius",
            },
        },
        actionFont: {
            label: "Typography",
            type: "Typography",
            category: "text",
            options: (content, sidepanelContent, boundProperties) => ({
                initialValue: {
                    fontSize: content["actionFontSize"],
                    fontFamily: content["actionFontFamily"],
                    fontWeight: content["actionFontWeight"],
                    fontStyle: content["actionFontStyle"],
                    lineHeight: content["actionLineHeight"],
                },
                creationDisabled:
                    boundProperties["actionFontSize"] ||
                    boundProperties["actionFontFamily"] ||
                    boundProperties["actionFontWeight"] ||
                    boundProperties["actionFontStyle"] ||
                    boundProperties["actionLineHeight"],
                creationDisabledMessage: "Cannot create typography from bound properties",
            }),
            bindable: true,
            responsive: true,
            states: true,
            classes: true,
        },
        actionFontSize: {
            label: "Size",
            type: "Length",
            category: "text",
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
            hidden: (content, _, boundProps) => content["actionFont"] || boundProps["actionFont"],
            bindingValidation: { markdown: "font-size", type: "string", cssSupports: "font-size" },
        },
        actionFontFamily: {
            label: "Font family",
            type: "FontFamily",
            category: "text",
            responsive: true,
            states: true,
            classes: true,
            bindable: true,
            hidden: (content, _, boundProps) => content["actionFont"] || boundProps["actionFont"],
            bindingValidation: { markdown: "font-family", type: "string", cssSupports: "font-family" },
        },
        actionFontWeight: {
            label: "Font weight",
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
            hidden: (content, _, boundProps) => content["actionFont"] || boundProps["actionFont"],
            bindingValidation: { markdown: "font-weight", type: "string", cssSupports: "font-weight" },
        },
        actionFontStyle: {
            label: "Font Style",
            type: "TextRadioGroup",
            category: "text",
            options: {
                choices: [
                    { value: null, title: "Default", icon: "typo-default", default: true },
                    { value: "italic", title: "Italic", icon: "typo-italic" },
                ],
            },
            responsive: true,
            states: true,
            bindable: true,
            classes: true,
            hidden: (content, _, boundProps) => content["actionFont"] || boundProps["actionFont"],
            bindingValidation: { markdown: "font-style", type: "string", cssSupports: "font-style" },
        },
        actionLineHeight: {
            label: "Line height",
            type: "Length",
            category: "text",
            options: {
                unitChoices: [
                    { value: "normal", label: "auto", default: true },
                    { value: "px", label: "px", min: 0, max: 100 },
                    { value: "%", label: "%", min: 0, max: 100 },
                    { value: "em", label: "em", min: 0, max: 10, digits: 3, step: 0.1 },
                    { value: "rem", label: "rem", min: 0, max: 10, digits: 3, step: 0.1 },
                    { value: "unset", label: "none" },
                ],
                noRange: true,
            },
            responsive: true,
            states: true,
            classes: true,
            bindable: true,
            hidden: (content, _, boundProps) => content["actionFont"] || boundProps["actionFont"],
            bindingValidation: { markdown: "line-height", type: "string", cssSupports: "line-height" },
        },

        rowData: {
            label: { en: "Data" },
            type: "ObjectList",
            options: {
                useSchema: true,
            },
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
            label: "Unique Row Id",
            options: (content) => ({
                template: wwLib.wwUtils.getDataFromCollection(content.rowData)?.[0],
            }),
            section: "settings",
            propertyHelp: {
                tooltip: "A unique id per row. Very useful for performance optimization.",
            },
        },
        generateColumns: {
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
                    options: (content, sidePanelContent, boundProperties, wwProps, array) => ({
                        item: {
                            headerName: {
                                label: "Header Name",
                                type: "Text",
                                bindable: true,
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
                                        { value: "dateString", label: "Date" },
                                        { value: "image", label: "Image" },
                                        { value: "action", label: "Action" },
                                        { value: "custom", label: "Custom" },
                                    ],
                                },
                            },
                            info: {
                                type: 'InfoBox',
                                options: {
                                    variant: 'warning',
                                    content: 'To select your custom cell, use the Layout view',
                                },
                                editorOnly: true,
                                hidden:  array?.item?.cellDataType !== 'custom',
                            },
                            field: {
                                label: "Key",
                                type: "Text",
                                hidden: array?.item?.cellDataType === "action",
                            },
                            useCustomLabel: {
                                label: "Custom display value",
                                type: "OnOff",
                                hidden:
                                    array?.item?.cellDataType === "action" ||
                                    array?.item?.cellDataType === "image" ||
                                    array?.item?.cellDataType === "custom",
                            },
                            displayLabelFormula: {
                                label: "Display value",
                                type: "Formula",
                                options: {
                                    template: _.get(
                                        wwLib.wwUtils.getDataFromCollection(content.rowData)?.[0],
                                        array?.item?.field
                                    ),
                                },
                                hidden:
                                    array?.item?.cellDataType === "action" ||
                                    array?.item?.cellDataType === "image" ||
                                    !array?.item?.useCustomLabel ||
                                    array?.item?.cellDataType === "custom",
                            },
                            widthAlgo: {
                                type: "TextRadioGroup",
                                label: "Width",
                                options: {
                                    choices: [
                                        { value: "fixed", label: "Fixed", default: true },
                                        { value: "flex", label: "Flex" },
                                    ],
                                },
                            },
                            flex: {
                                label: "Flex",
                                type: "Number",
                                options: {
                                    min: 1,
                                    max: 10,
                                    step: 1,
                                    noRange: true,
                                    defaultValue: 1,
                                },
                                hidden: array?.item?.widthAlgo !== "flex",
                            },
                            width: {
                                type: "Length",
                                options: {
                                    noRange: true,
                                    unitChoices: [
                                        { value: "px", label: "px", min: 0, max: 1300 },
                                        { value: "auto", label: "auto" },
                                    ],
                                },
                                hidden: array?.item?.widthAlgo === "flex",
                            },
                            minWidth: {
                                label: "Min Width",
                                type: "Length",
                                options: {
                                    noRange: true,
                                    unitChoices: [
                                        { value: "px", label: "px", min: 0, max: 1300 },
                                        { value: "auto", label: "auto" },
                                    ],
                                },
                            },
                            maxWidth: {
                                label: "Max Width",
                                type: "Length",
                                options: {
                                    noRange: true,
                                    unitChoices: [
                                        { value: "px", label: "px", min: 0, max: 1300 },
                                        { value: "auto", label: "auto" },
                                    ],
                                },
                            },
                            pinned: {
                                label: "Pinned",
                                type: "TextRadioGroup",
                                options: {
                                    choices: [
                                        { value: "none", label: "None", default: true },
                                        { value: "left", label: "Left" },
                                        { value: "right", label: "Right" },
                                    ],
                                },
                            },
                            editable: {
                                label: "Editable",
                                type: "OnOff",
                                hidden:
                                    array?.item?.cellDataType === "action" ||
                                    array?.item?.cellDataType === "image" ||
                                    array?.item?.cellDataType === "custom",
                            },
                            filter: {
                                label: "Filter",
                                type: "OnOff",
                                hidden: array?.item?.cellDataType === "action" || array?.item?.cellDataType === "image",
                            },
                            sortable: {
                                label: "Sortable",
                                type: "OnOff",
                                hidden: array?.item?.cellDataType === "action" || array?.item?.cellDataType === "image",
                            },
                            actionName: {
                                label: "Action Name",
                                type: "Text",
                                hidden: array?.item?.cellDataType !== "action",
                            },
                            actionLabel: {
                                label: "Action Label",
                                type: "Text",
                                hidden: array?.item?.cellDataType !== "action",
                            },
                            imageWidth: {
                                label: "Image width",
                                type: "Length",
                                options: {
                                    noRange: true,
                                },
                                hidden: array?.item?.cellDataType !== "image",
                            },
                            imageHeight: {
                                label: "Image height",
                                type: "Length",
                                options: {
                                    noRange: true,
                                },
                                hidden: array?.item?.cellDataType !== "image",
                            },
                        },
                    }),
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
        pagination: {
            label: { en: "Pagination" },
            type: "OnOff",
            section: "settings",
            bindable: true,
            defaultValue: false,
            /* wwEditor:start */
            bindingValidation: {
                type: "boolean",
                tooltip: "Enable or disable pagination",
            },
            /* wwEditor:end */
        },
        paginationPageSize: {
            label: { en: "Rows Per Page" },
            type: "Number",
            section: "settings",
            bindable: true,
            defaultValue: 10,
            options: {
                noRange: true,
            },
            /* wwEditor:start */
            bindingValidation: {
                type: "number",
                tooltip: "Number of rows to display per page",
            },
            hidden: (content) => !content.pagination,
            /* wwEditor:end */
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
        movableColumns: {
            label: { en: "Movable Columns" },
            type: "OnOff",
            section: "settings",
            bindable: true,
            /* wwEditor:start */
            bindingValidation: {
                type: "boolean",
                tooltip: "Enable or disable movable columns",
            },
            /* wwEditor:end */
        },
        resizableColumns: {
            label: { en: "Resizable Columns" },
            type: "OnOff",
            section: "settings",
            bindable: true,
            defaultValue: true,
            /* wwEditor:start */
            bindingValidation: {
                type: "boolean",
                tooltip: "Enable or disable resizable columns",
            },
            /* wwEditor:end */
        },
        initialFilters: {
            label: { en: "Initial Filters" },
            type: "Object",
            section: "settings",
            bindable: true,
            defaultValue: null,
        }
    },
};
