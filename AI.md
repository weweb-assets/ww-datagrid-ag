---
name: ww-datagrid-ag
description: An advanced datagrid supporting sort, filter, selection and virtual scroll. Based on AG grid
keywords:
    - datagrid
    - table
---

#### ww-datagrid-ag

1. **Component Purpose:**
A highly customizable data grid/table component that supports features like sorting, filtering, pagination, row selection, and custom actions. It's designed to handle large datasets efficiently with various data types and styling options. Its based on the AGGrid framework

2. **Properties:**
   - `rowData`: `Array<object>` - Data to display in the grid. Default: `[]`.
   - `idFormula`: `Formula` - Formula to generate unique IDs for each row. . Always use 'context.mapping...'
   - `height`: `string` - Height of the grid. Default: `"400px"`.
   - `headerBackgroundColor`: `string | null` - Background color of the header cells.
   - `headerTextColor`: `string | null` - Text color of the header cells.
   - `headerFontWeight`: `null | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900` - Font weight of header text.
   - `headerFontSize`: `string` - Font size of header text.
   - `headerFontFamily`: `string` - Font family for header text.
   - `borderColor`: `string | null` - Color of grid borders.
   - `cellColor`: `string | null` - Text color of grid cells.
   - `cellFontFamily`: `string` - Font family for cell text.
   - `cellFontSize`: `string` - Font size for cell text.
   - `rowBackgroundColor`: `string | null` - Background color for rows.
   - `rowAlternateColor`: `string | null` - Background color for alternate rows. Be sure it works well with cell default text color, as the color is common
   - `rowHoverColor`: `string | null` - Background color when hovering over rows. Use color with semi transparent, so it works well with alternatate and selected background color
   - `rowVerticalPaddingScale`: `Number | null` - A number for scaling the vertical padding of cells. Use 2 to multiply it by 2 or a number between 0 and 1 to make it smaller.
   - `selectedRowBackgroundColor`: `string | null` - Background color for selected rows.
   - `actionColor`: `string | null` - Text color for action buttons.
   - `actionBackgroundColor`: `string | null` - Background color for action buttons.
   - `actionPadding`: `string` - Padding for action buttons.
   - `actionBorder`: `string` - Border style for action buttons.
   - `actionBorderRadius`: `string` - Border radius for action buttons.
   - `actionFontSize`: `string`: Font size of the button in action column
   - `actionFontFamily`: `string`: Font family of the button in action column
   - `actionFontWeight`: `string`: Font weight of the button in action column
   - `actionFontStyle`: `string`: Font style of the button in action column
   - `actionLineHeight`: `string`: Line height of the button in action column
   - `rowSelection`: `'none' | 'single' | 'multiple'` - Type of row selection. Default: `"none"`.
   - `pagination`: `boolean` - Enable/disable pagination. Default: `false`.
   - `paginationPageSize`: `number` - Number of rows per page. Default: `10`.
   - `columns`: `Array<{
       headerName: string,
       cellDataType: 'text' | 'number' | 'boolean' | 'dateString',
       field: string,
       minWidth: string,
       maxWidth: string,
       filter: boolean,
       sortable: boolean
     } | {
        
       headerName: string,
       cellDataType:'image',
       field: string,
       minWidth: string,
       maxWidth: string,
       imageWidth: string,
       imageHeight: string
     
     } | {
        
       headerName: string,
       cellDataType:'action',
       field: string,
       minWidth: string,
       maxWidth: string,
       actionName: string,
       actionLabel: string,
     
     }>` - Column configurations. Each object describe a column of the grid, and some options may depends on the selected type of data. Default: `[]`.

3. **Children Components:**

There is no children.

4. **Special Features:**
   - Supports multiple data types including text, numbers, dates, images, and action buttons
   - Advanced filtering and sorting capabilities
   - Customizable pagination
   - Single and multiple row selection modes
   - Custom action buttons with styling options
   - Responsive design with customizable column widths
   - Row hover and selection states
   - Alternate row coloring
   - Comprehensive header and cell styling options

7. **Events:**

- action: Triggered when clicking on a action cell. Payload: { actionName: 'name of the column', row: { /* row data */}, id: 0, index: 0, displayIndex: 0 }
- cellValueChanged: Triggered after a cell edition so that you can update the data source. Payload: { oldValue: {/* old value */}, newValue: { /* row data */}, columnId: "id", row: { /* row data */} }

8. **Notes:**

- idFormula is 'Formula' type ('type' and 'code' keys) not bindings. Be sure it is unique per row
**CRITICAL** : You have to perfectly style this datagrid according to the page.
- Defautl theme is usually great, use other colors only if you need to be on brand