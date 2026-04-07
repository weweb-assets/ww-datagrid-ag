# AG Grid Datagrid

A WeWeb custom component providing an enterprise-grade data grid powered by [ag-grid-vue3](https://www.ag-grid.com/). Supports sorting, filtering, pagination, row selection, cell editing, column reordering, row drag-and-drop, and custom cell types.

## Development

```bash
npm i                          # Install dependencies
npm run serve --port=8080      # Local dev (add custom element in WeWeb editor)
npm run build --name=ww-datagrid-ag   # Production build
```

## Props (Settings)

### Data

| Property | Type | Bindable | Default | Description |
|---|---|---|---|---|
| `rowData` | ObjectList | Yes | `[]` | Data source — a collection or array of objects |
| `idFormula` | Formula | No | — | Formula resolving a unique ID per row (improves performance) |

### Columns

`columns` is an **Array** of column definitions. Each column object supports:

| Property | Type | Default | Description |
|---|---|---|---|
| `headerName` | Text | — | Display name in the column header |
| `field` | Text | — | Key in the row data object (hidden for action type) |
| `cellDataType` | TextSelect | `auto` | Cell type: `auto`, `text`, `number`, `boolean`, `dateString`, `image`, `action`, `custom` |
| `useCustomLabel` | OnOff | `false` | Enable a formula-based display value |
| `displayLabelFormula` | Formula | — | Formula to compute the displayed cell value |
| `widthAlgo` | RadioGroup | `fixed` | Width mode: `fixed` or `flex` |
| `width` | Length | `auto` | Column width (when fixed) |
| `flex` | Number | `1` | Flex factor (when flex, 1–10) |
| `minWidth` | Length | `auto` | Minimum column width |
| `maxWidth` | Length | `auto` | Maximum column width |
| `headerAlignment` | RadioGroup | `left` | Header text alignment: `left`, `center`, `right` |
| `cellAlignment` | RadioGroup | `left` | Cell text alignment: `left`, `center`, `right` |
| `pinned` | RadioGroup | `none` | Pin column: `none`, `left`, `right` |
| `hide` | OnOff | `false` | Hide the column |
| `editable` | OnOff | `false` | Allow inline cell editing |
| `filter` | OnOff | `false` | Enable column filter |
| `sortable` | OnOff | `false` | Enable column sorting |
| `wrapText` | OnOff | `false` | Wrap long text and auto-size row height. When combined with `editable`, uses a multi-line textarea editor |
| `actionName` | Text | — | Action identifier (action type only) |
| `actionLabel` | Text | — | Button label (action type only) |
| `imageWidth` | Length | — | Image width (image type only) |
| `imageHeight` | Length | — | Image height (image type only) |

### Pagination

| Property | Type | Bindable | Default | Description |
|---|---|---|---|---|
| `pagination` | OnOff | Yes | `false` | Enable pagination |
| `hasPaginationSelector` | TextSelect | Yes | `single` | Rows-per-page mode: `single` (fixed) or `multiple` (selector) |
| `paginationPageSize` | Number | Yes | `10` | Rows per page (when single) |
| `paginationPageSizeSelector` | RawObject | Yes | — | Array of page-size options, e.g. `[10, 20, 50, 100]` (when multiple) |

### Selection

| Property | Type | Bindable | Default | Description |
|---|---|---|---|---|
| `rowSelection` | TextSelect | Yes | `none` | Row selection mode: `none`, `single`, `multiple` |
| `enableClickSelection` | OnOff | Yes | `false` | Select rows by clicking (not just checkboxes) |
| `disableCheckboxes` | OnOff | Yes | `false` | Hide selection checkboxes |
| `selectAll` | TextSelect | Yes | `all` | Select-all scope (multiple only): `all`, `filtered`, `currentPage` |

### Column Management

| Property | Type | Bindable | Default | Description |
|---|---|---|---|---|
| `movableColumns` | OnOff | Yes | `false` | Allow drag-to-reorder columns |
| `resizableColumns` | OnOff | Yes | `true` | Allow column resizing |
| `rowReorder` | OnOff | Yes | `false` | Enable row drag-and-drop reordering (incompatible with pagination) |

### Initial State

| Property | Type | Bindable | Description |
|---|---|---|---|
| `initialFilters` | RawObject | Yes | Initial filter model object |
| `initialSort` | RawObject | Yes | Initial sort model array |
| `initialColumnsOrder` | RawObject | Yes | Array of column IDs defining initial order |

### Internationalization

| Property | Type | Bindable | Default | Description |
|---|---|---|---|---|
| `lang` | TextSelect | Yes | `en` | Language: `en`, `fr`, `es`, `de`, `pt`, `custom` |
| `localeText` | RawObject | Yes | `{}` | Custom locale strings (when `lang` is `custom`). See [AG Grid locale reference](https://github.com/ag-grid/ag-grid/blob/latest/community-modules/locale/src/en-US.ts) |

## Props (Style)

### General

| Property | Type | Description |
|---|---|---|
| `layout` | TextSelect | Height mode: `fixed` or `auto` |
| `height` | Length | Grid height (when fixed), default `400px` |
| `textColor` | Color | Global text color |
| `borderColor` | Color | Grid border color |
| `wrapperBorderRadius` | Length | Outer border radius |

### Header

| Property | Type | Description |
|---|---|---|
| `headerBackgroundColor` | Color | Header background |
| `headerTextColor` | Color | Header text color |
| `headerFontWeight` | TextSelect | Font weight (100–900) |
| `headerFontSize` | Length | Font size |
| `headerFontFamily` | FontFamily | Font family |
| `headerHeightMode` | TextSelect | `fixed` or `auto` |
| `headerHeight` | Length | Header height (when fixed) |

### Header Dynamic Style

Enable per-column header styling with formulas. Each formula receives a context object with `name`, `id`, `type`, and `dataType`.

| Property | Type | Description |
|---|---|---|
| `useDynamicStyleHeader` | OnOff | Toggle dynamic header styling |
| `dynamicHeaderBackgroundColor` | Formula | Per-column background color |
| `dynamicHeaderTextColor` | Formula | Per-column text color |
| `dynamicHeaderFontWeight` | Formula | Per-column font weight |
| `dynamicHeaderFontSize` | Formula | Per-column font size |
| `dynamicHeaderFontFamily` | Formula | Per-column font family |

### Row

| Property | Type | Description |
|---|---|---|
| `rowBackgroundColor` | Color | Row background |
| `rowAlternateColor` | Color | Alternate row background (striping) |
| `rowHoverColor` | Color | Row hover background (use semi-transparent) |
| `rowVerticalPaddingScale` | Number | Vertical padding multiplier (0–5, default 1) |

### Column

| Property | Type | Description |
|---|---|---|
| `columnHoverHighlight` | OnOff | Enable column hover highlight |
| `columnHoverColor` | Color | Column hover color (use semi-transparent) |

### Cell

| Property | Type | Description |
|---|---|---|
| `cellColor` | Color | Cell text color |
| `cellFontFamily` | FontFamily | Cell font family |
| `cellFontSize` | Length | Cell font size |
| `cellSelectionBorderColor` | Color | Border color of selected cell |
| `cellAlignmentMode` | TextSelect | `inherit` (same as column) or `custom` |
| `cellAlignment` | RadioGroup | Global cell alignment: `left`, `center`, `right` (when custom) |

### Menu

| Property | Type | Description |
|---|---|---|
| `menuTextColor` | Color | Filter/context menu text color |
| `menuBackgroundColor` | Color | Filter/context menu background |

### Selection

| Property | Type | Description |
|---|---|---|
| `selectedRowBackgroundColor` | Color | Background of selected rows (use semi-transparent) |
| `selectionCheckboxColor` | Color | Checkbox accent color |
| `checkboxUncheckedBorderColor` | Color | Unchecked checkbox border |
| `focusShadow` | Shadows | Focus ring shadow |

### Action Button

| Property | Type | Description |
|---|---|---|
| `actionColor` | Color | Button text color |
| `actionBackgroundColor` | Color | Button background |
| `actionPadding` | Spacing | Button padding |
| `actionBorder` | Border | Button border |
| `actionBorderRadius` | Spacing | Button border radius |
| `actionFont` | Typography | Typography shorthand |
| `actionFontSize` | Length | Font size (when no typography set) |
| `actionFontFamily` | FontFamily | Font family |
| `actionFontWeight` | TextSelect | Font weight |
| `actionFontStyle` | RadioGroup | Font style (normal/italic) |
| `actionLineHeight` | Length | Line height |

## Trigger Events

| Event | Label | Payload |
|---|---|---|
| `action` | On Action | `{ actionName, row, id, index, displayIndex }` |
| `cellValueChanged` | On Cell Value Changed | `{ oldValue, newValue, columnId, row }` |
| `rowSelected` | On Row Selected | `{ row }` |
| `rowDeselected` | On Row Deselected | `{ row }` |
| `filterChanged` | On Filter Changed | — |
| `sortChanged` | On Sort Changed | — |
| `rowClicked` | On Row Clicked | `{ row, id, index, displayIndex }` |
| `rowDragStart` | On Row Drag Start | `{ row, id }` |
| `rowDragged` | On Row Dragged | `{ row, id, targetIndex, rows }` |
| `columnMoved` | On Column Moved | `{ columnId, toIndex, columnsOrder }` |

## Actions

Callable from WeWeb workflows:

| Action | Label | Arguments | Description |
|---|---|---|---|
| `resetFilters` | Reset filters | — | Clear all column filters |
| `resetSort` | Reset sort | — | Clear all sorting |
| `selectAll` | Select all | `mode`: `all` \| `filtered` \| `currentPage` \| `null` (grid default) | Select rows |
| `deselectAll` | Deselect all | — | Deselect all rows |
| `selectRow` | Select row | `Row id` (string) | Select a single row by ID |
| `deselectRow` | Deselect row | `Row id` (string) | Deselect a single row by ID |
| `refreshData` | Force Datagrid refresh | — | Force a full grid re-render |

## Internal Variables

Exposed as read-only component variables for use in workflows and bindings:

| Variable | Type | Description |
|---|---|---|
| `selectedRows` | array | Currently selected row objects |
| `filters` | object | Current filter model |
| `sort` | object | Current sort model |
| `columnOrder` | array | Current column ID order |
| `data` | object | Grid data state (see sub-properties below) |

### `data` sub-properties

| Property | Type | Description |
|---|---|---|
| `allData` | array | All row data |
| `total` | number | Total row count |
| `sortedFilteredData` | array | Rows after sort & filter |
| `totalSortedFilteredData` | number | Count of sorted/filtered rows |
| `perPageTotal` | number | Rows on the current page |
| `totalPages` | number | Total number of pages |
| `displayedData` | array | Currently visible rows |
| `totalDisplayedRecords` | number | Count of visible rows |

## Cell Types

| Type | Description |
|---|---|
| `auto` | AG Grid auto-detects the type |
| `text` | Plain text |
| `number` | Numeric value |
| `boolean` | Checkbox toggle |
| `dateString` | Date string |
| `image` | Image thumbnail (configurable width/height) |
| `action` | Button that triggers the `action` event |
| `custom` | User-defined cell via WeWeb Layout view |
