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
   - `rowsData`: `Array<object>` - Data to display in the grid. Default: `[]`.
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
   - `rowAlternateColor`: `string | null` - Background color for alternate rows.
   - `rowHoverColor`: `string | null` - Background color when hovering over rows.
   - `selectedRowBackgroundColor`: `string | null` - Background color for selected rows.
   - `action_color`: `string | null` - Text color for action buttons.
   - `action_backgroundColor`: `string | null` - Background color for action buttons.
   - `action_padding`: `string` - Padding for action buttons.
   - `action_border`: `string` - Border style for action buttons.
   - `action_borderRadius`: `string` - Border radius for action buttons.
   - `action_font`: `object` - Typography settings for action buttons.
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

8. **Notes:**

- idFormula is 'Formula' type ('type' and 'code' keys) not bindings.
**CRITICAL** : You have to perfectly style this datagrid according to the page.