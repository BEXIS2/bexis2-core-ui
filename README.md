# bexis-core-ui
## 0.3.7

- listeItemType
  - add description

## 0.3.6

- FileUpload 
  - add progressbar during upload
- Table
  - fix update issue with first row entry

## 0.3.5

- listeItemType
  - add description


## 0.3.4

- Page
  - add automatic scroll to top button next to help

## 0.3.3

- Table
  - `rowHeight (number)`: fixed height for rows in pixels. (if combined with resizability, acts as minimum height)
  - `exportability (boolean)`: if toggled true, lets user to export the current state of the table as CSV.
  - Optimized styles for dark mode.
  - Bug fix related to empty tables.
  - Migrated to new TableOfContents (Beta) on documentation page.
- LightSwitch for toggling dark mode on documentation pages.
- Optimized surface colors in dark mode.

## 0.3.1

- add bexis2theme

## 0.3.0

- update skeleton ui -> 2.5.0

## 0.2.32

- resizability for Table rows and columns
- **fixedWidth** and **minWidth** options for columns

## 0.2.31

- validation and syntax check for code editor component

## 0.2.30

- fix routes for 'file' components ('.../file/...' -> '.../File/...')
- 'Table' component is able to display heterogeneous data, that means data items/rows might have a different number of properties/columns.

## 0.2.29

- add disbaled propertie to
  - TextInput
  - TextArea
  - NumberInput
  - DateInput

## 0.2.28

- add disabled to multiselect

## 0.2.27

- fix brand stretching

## 0.2.26

- add fixLeft to page

## 0.2.25

- hide console.logs
- file uploader return list of uploaded files after success

## 0.2.24

- add ids to table and code editor components

## 0.2.23

- add CodeEditor component

## 0.2.22

- Page title update on breadcrumb

## v0.2.19

- fix multiselect bug from prev version

## v0.2.18

- Multiselect
  - fix target bug with simple list and list of simple values

## v0.2.17

- Multiselect
  - fix target bind bug

## v0.2.16

- Table
  - width - fit to screen
  - Cell - drag to change the height
  - define a height to scroll the content
  - header allways on top whie scrolling

## v0.2.15

- Page - centered -> min width defined
- MultiSelect -> add clearable

## v0.2.14

- change fileUploaderModel to FileUploaderType
- remove AllFilesReadable, AsciiFileReaderInfo & LastModification from fileuploaderType
-

## v0.2.13

- add file reader types
  - fileReaderInfoType,
  - asciiFileReaderInfoType
- add file reader enums
  - decimalCharacterType,orientationType,textMarkerType,textSeperatorType
- Table Change order of text filter options
- fix menu
- update navbar

## v0.2.12

- update libs

## v0.2.11

- Error Message
- Spinner Update
  - postion default is center
- Surface color changed
- Page: contentPageLayoutType

## v0.2.9

- helpStore
- helpStoreType
- helpItemType
- Menu
- Update Page

## v0.2.1

> refactoring based on naming conventions (<https://bexis2.github.io/bexis2-core-ui/code/naming/>)

- fix issue in index.ts file for export components

## v0.2.0

> refactoring based on naming conventions (<https://bexis2.github.io/bexis2-core-ui/code/naming/>)

- add Help, helpStore
- update Page

## v0.1.13

### update

- MultiSelect
  - loading flag
  - isValid

## v0.1.12

### update

- MultiSelect
  - pass all events from svelte select

## v0.1.11

### update

- MultiSelect
  - grouped source also works now in case of complex source & return single value

## v0.1.10

### update

- MultiSelect
  - set isMulti to false to get also a single value

## v0.1.9

### update

- MultiSelect
  - pass events
  - placeholder

## v0.1.8

### update

- MultiSelect
  - add placeholder
  - add id
  - add ItemGroup

## v0.1.7

### update

- MultiSelect
  - remove skeleton css classes from svelte select input

## v0.1.6

- remove massive console.logs

### update

- Table
  - change submit to apply filter
  - show emtpy table if not data is in the store
  - add option of including custom rendering component

## v0.1.5

### update

- MultiSelect
  - isTargetComplex -> complexTarget
  - isComplex -> complexSource
- DropdownKVP
  - targetIsComplex -> complexTarget

## v0.1.4

> test for deploy

## v0.1.3

> test table

## v0.1.2

### update

- MultiSelect
  - return complex type is available now

## v0.1.1

### update

- Page
  - add menu (beta)

## v.0.1.0

### add

#### types

- ListItem
- KvP

#### enum

- position

### update

#### components

- DropdownKVP
  - return of the target to complex or id only
- TextInput, TextArea, Number
  - add placeholder

## v0.0.31

### add

#### components

- Alert

### updates

#### components

- Spinner
  - label
  - color
  - position
- Table
  - Date filters
  - Configuration for complex types
  - Custom event dispatcher
  - Updated docs.
  - Disabling of filters
  - Disabling of sorting

### fixes

#### table

- Arrow in pageSize dropdown.
- Bug with number filter not working on zero values.
- Table of Contents on the right sidebar.

## v0.0.29

### add

#### types

- linkType

## v0.0.28

### add

#### components

- Page

## v0.0.27

### add

#### components

- Table
- TableFilter
- cloumnFilter
- searchFilter

#### types

- TableConfig
- Columns
- Column
- inputType

<hr/>

## v0.0.26

### updates

- fix bugs in checkbox list
- fix bugs in multi select

<hr/>

## v0.0.25

### adds

#### components

- Spinner
- FileUploader
- fileInfoType
- FileIcon
-

#### types

- fileUploaderModel

<hr/>

## v0.0.23

### updates

- update bexis 2 theme

### adds

- Checkbox
- CheckboxKVPList
- CheckboxList
- DateInput
- DropdownKVP
- MultiSelect
- NumberInput
- TextArea
- TextInput
