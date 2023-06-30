# bexis-core-ui
## v0.2.0
> refactoring based on naming conventions (https://bexis2.github.io/bexis2-core-ui/code/naming/)

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

### fixes:
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
