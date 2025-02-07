# AG Grid Table Component

A powerful data grid component using ag-grid-vue3 that provides enterprise-grade table functionality.

### Features
- Dynamic column configuration from data structure
- Support for different content types (Text, Image, Boolean)
- Built-in sorting and filtering
- Column resizing and reordering
- Row selection with optional checkbox column
- Customizable cell rendering
- Pagination support
- Exposed grid state (selection, filters, sort)
- Comprehensive styling options

### Component Documentation

#### Properties
| Property | Description | Type | Bindable |
| :------- | :---------- | :--- | :------: |
| showSelectionColumn | Show/hide selection checkbox column | OnOff | Yes |
| rowData | Data to display in the grid | Array | Yes |
| columnDefs | Column definitions with type support | Array | Yes |
| enableSorting | Enable/disable sorting | OnOff | Yes |
| enableFilter | Enable/disable filtering | OnOff | Yes |
| rowSelection | Type of row selection ('single' or 'multiple') | TextSelect | Yes |
| paginationPageSize | Number of rows per page | Number | Yes |
| height | Grid height | Length | Yes |
| headerBackgroundColor | Header background color | Color | Yes |
| headerTextColor | Header text color | Color | Yes |
| rowBackgroundColor | Row background color | Color | Yes |
| rowTextColor | Row text color | Color | Yes |
| alternateRowColor | Alternate row background color | Color | Yes |
| selectedRowColor | Selected row background color | Color | Yes |
| hoverRowColor | Row hover background color | Color | Yes |
| borderColor | Table border color | Color | Yes |
| fontSize | Table font size | Length | Yes |
| headerFontSize | Header font size | Length | Yes |
| rowHeight | Height of each row | Length | Yes |
| headerHeight | Height of the header | Length | Yes |

#### Internal Variables
| Variable | Description | Type |
| :------- | :---------- | :--- |
| selectedRows | Currently selected rows | Array |
| filterModel | Active filters state | Object |
| sortModel | Active sort state | Array |

#### Triggers Events
| Event | Description | Schema |
| :---- | :---------- | :----- |
| rowSelected | Fired when row is selected | `{ value: Object }` |
| rowClicked | Fired when row is clicked | `{ value: Object }` |
| cellClicked | Fired when cell is clicked | `{ value: { data: Object, colId: String } }` |

#### Component Actions
| Action | Description | Arguments Schema |
| :----- | :---------- | :-------------- |
| selectRow | Select a specific row by index | `{ index: Number }` |
| clearSelection | Clear current selection | None |
| refreshData | Refresh the grid data | None |

#### Dependencies
- ag-grid-vue3
- ag-grid-community