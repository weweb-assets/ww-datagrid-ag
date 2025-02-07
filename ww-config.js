export default {
    editor: {
        label: {
            en: 'AG Grid Table',
        },
        icon: 'table',
    },
    properties: {
        showSelectionColumn: {
            label: { en: 'Show Selection Column' },
            type: 'OnOff',
            section: 'settings',
            bindable: true,
            defaultValue: false,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'Show/hide a checkbox column for row selection'
            },
            propertyHelp: {
                tooltip: 'Add a column with checkboxes for selecting rows'
            }
            /* wwEditor:end */
        },
        rowData: {
            label: { en: 'Row Data' },
            type: 'Array',
            section: 'settings',
            bindable: true,
            defaultValue: [
                { name: 'John', age: 25, city: 'New York', active: true, photo: 'https://picsum.photos/100' },
                { name: 'Jane', age: 30, city: 'London', active: false, photo: 'https://picsum.photos/101' },
                { name: 'Bob', age: 35, city: 'Paris', active: true, photo: 'https://picsum.photos/102' }
            ],
            /* wwEditor:start */
            bindingValidation: {
                type: 'Array',
                tooltip: 'Bind an array of objects to display in the grid'
            },
            propertyHelp: {
                tooltip: 'The data to display in the grid. Each object represents a row.'
            }
            /* wwEditor:end */
        },
        columnDefs: {
            label: { en: 'Column Definitions' },
            type: 'Array',
            section: 'settings',
            bindable: true,
            defaultValue: [
                { field: 'name', headerName: 'Name', type: 'text' },
                { field: 'age', headerName: 'Age', type: 'number' },
                { field: 'city', headerName: 'City', type: 'text' },
                { field: 'active', headerName: 'Active', type: 'boolean' },
                { field: 'photo', headerName: 'Photo', type: 'image' }
            ],
            options: {
                expandable: true,
                getItemLabel(_, index) {
                    return `Column ${index + 1}`;
                },
                item: {
                    type: 'Object',
                    defaultValue: {
                        field: '',
                        headerName: '',
                        type: 'text'
                    },
                    options: {
                        item: {
                            field: {
                                label: 'Field',
                                type: 'Text',
                                options: { placeholder: 'Enter field name' }
                            },
                            headerName: {
                                label: 'Header',
                                type: 'Text',
                                options: { placeholder: 'Enter header name' }
                            },
                            type: {
                                label: 'Type',
                                type: 'TextSelect',
                                options: {
                                    options: [
                                        { value: 'text', label: 'Text' },
                                        { value: 'number', label: 'Number' },
                                        { value: 'boolean', label: 'Boolean' },
                                        { value: 'image', label: 'Image' },
                                        { value: 'date', label: 'Date' }
                                    ]
                                }
                            }
                        }
                    }
                }
            },
            /* wwEditor:start */
            bindingValidation: {
                type: 'Array',
                tooltip: 'Array of column definitions with type support'
            },
            propertyHelp: {
                tooltip: 'Define the columns and their types to display in the grid'
            }
            /* wwEditor:end */
        },
        enableSorting: {
            label: { en: 'Enable Sorting' },
            type: 'OnOff',
            section: 'settings',
            bindable: true,
            defaultValue: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'Enable or disable column sorting'
            },
            propertyHelp: {
                tooltip: 'Allow users to sort columns by clicking headers'
            }
            /* wwEditor:end */
        },
        enableFilter: {
            label: { en: 'Enable Filtering' },
            type: 'OnOff',
            section: 'settings',
            bindable: true,
            defaultValue: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'Enable or disable column filtering'
            },
            propertyHelp: {
                tooltip: 'Allow users to filter data in columns'
            }
            /* wwEditor:end */
        },
        rowSelection: {
            label: { en: 'Row Selection' },
            type: 'TextSelect',
            section: 'settings',
            bindable: true,
            defaultValue: 'single',
            options: {
                options: [
                    { value: 'single', label: 'Single' },
                    { value: 'multiple', label: 'Multiple' }
                ]
            },
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Type of row selection: single or multiple'
            },
            propertyHelp: {
                tooltip: 'Choose how users can select rows'
            }
            /* wwEditor:end */
        },
        paginationPageSize: {
            label: { en: 'Rows Per Page' },
            type: 'Number',
            section: 'settings',
            bindable: true,
            defaultValue: 10,
            options: {
                min: 1,
                max: 100,
                step: 1
            },
            /* wwEditor:start */
            bindingValidation: {
                type: 'number',
                tooltip: 'Number of rows to display per page'
            },
            propertyHelp: {
                tooltip: 'Set how many rows appear on each page'
            }
            /* wwEditor:end */
        },
        height: {
            label: { en: 'Grid Height' },
            type: 'Length',
            section: 'style',
            bindable: true,
            defaultValue: '400px',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Height of the grid (e.g., 400px)'
            },
            propertyHelp: {
                tooltip: 'Set the height of the grid container'
            }
            /* wwEditor:end */
        },
        headerBackgroundColor: {
            label: { en: 'Header Background Color' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#f8f9fa',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Color value for header background'
            },
            propertyHelp: {
                tooltip: 'Set the background color of the table headers'
            }
            /* wwEditor:end */
        },
        headerTextColor: {
            label: { en: 'Header Text Color' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#000000',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Color value for header text'
            },
            propertyHelp: {
                tooltip: 'Set the text color of the table headers'
            }
            /* wwEditor:end */
        },
        rowBackgroundColor: {
            label: { en: 'Row Background Color' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#ffffff',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Color value for row background'
            },
            propertyHelp: {
                tooltip: 'Set the background color of table rows'
            }
            /* wwEditor:end */
        },
        rowTextColor: {
            label: { en: 'Row Text Color' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#000000',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Color value for row text'
            },
            propertyHelp: {
                tooltip: 'Set the text color of table rows'
            }
            /* wwEditor:end */
        },
        alternateRowColor: {
            label: { en: 'Alternate Row Color' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#f8f9fa',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Color value for alternate rows'
            },
            propertyHelp: {
                tooltip: 'Set the background color of alternate rows'
            }
            /* wwEditor:end */
        },
        selectedRowColor: {
            label: { en: 'Selected Row Color' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#e7f5ff',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Color value for selected rows'
            },
            propertyHelp: {
                tooltip: 'Set the background color of selected rows'
            }
            /* wwEditor:end */
        },
        hoverRowColor: {
            label: { en: 'Hover Row Color' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#f0f0f0',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Color value for row hover state'
            },
            propertyHelp: {
                tooltip: 'Set the background color when hovering over rows'
            }
            /* wwEditor:end */
        },
        borderColor: {
            label: { en: 'Border Color' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#dde2eb',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Color value for table borders'
            },
            propertyHelp: {
                tooltip: 'Set the color of table borders'
            }
            /* wwEditor:end */
        },
        fontSize: {
            label: { en: 'Font Size' },
            type: 'Length',
            section: 'style',
            bindable: true,
            defaultValue: '14px',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Font size value (e.g., 14px)'
            },
            propertyHelp: {
                tooltip: 'Set the font size for table content'
            }
            /* wwEditor:end */
        },
        headerFontSize: {
            label: { en: 'Header Font Size' },
            type: 'Length',
            section: 'style',
            bindable: true,
            defaultValue: '14px',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Font size value for headers (e.g., 14px)'
            },
            propertyHelp: {
                tooltip: 'Set the font size for table headers'
            }
            /* wwEditor:end */
        },
        rowHeight: {
            label: { en: 'Row Height' },
            type: 'Length',
            section: 'style',
            bindable: true,
            defaultValue: '48px',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Height value for rows (e.g., 48px)'
            },
            propertyHelp: {
                tooltip: 'Set the height of table rows'
            }
            /* wwEditor:end */
        },
        headerHeight: {
            label: { en: 'Header Height' },
            type: 'Length',
            section: 'style',
            bindable: true,
            defaultValue: '56px',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Height value for headers (e.g., 56px)'
            },
            propertyHelp: {
                tooltip: 'Set the height of table headers'
            }
            /* wwEditor:end */
        }
    },
    triggerEvents: [
        {
            name: 'rowSelected',
            label: { en: 'On row selected' },
            event: { value: null }
        },
        {
            name: 'rowClicked',
            label: { en: 'On row clicked' },
            event: { value: null }
        },
        {
            name: 'cellClicked',
            label: { en: 'On cell clicked' },
            event: { value: null }
        }
    ],
    actions: [
        {
            name: 'selectRow',
            label: { en: 'Select row' },
            action: 'selectRow',
            args: [
                {
                    name: 'index',
                    type: 'number',
                    label: { en: 'Row index' }
                }
            ]
        },
        {
            name: 'clearSelection',
            label: { en: 'Clear selection' },
            action: 'clearSelection'
        },
        {
            name: 'refreshData',
            label: { en: 'Refresh data' },
            action: 'refreshData'
        }
    ]
};