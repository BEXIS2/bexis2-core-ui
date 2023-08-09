// Reexport your entry components here
// import ListView from './components/ListView.svelte';
// import TableView from './TableView.svelte';

import FileIcon from './components/file/FileIcon.svelte';
import FileInfo from './components/file/FileInfo.svelte';
import FileUploader from './components/file/FileUploader.svelte';

//page
import Spinner from './components/page/Spinner.svelte';
import Page from './components/page/Page.svelte';
import Alert from './components/page/Alert.svelte';
import Menu from './components/page/menu/Menu.svelte';
import ErrorMessage from './components/page/ErrorMessage.svelte';

// input
import Checkbox from './components/form/Checkbox.svelte';
import CheckboxKVPList from './components/form/CheckboxKvPList.svelte';
import CheckboxList from './components/form/CheckboxList.svelte';
import DateInput from './components/form/DateInput.svelte';
import DropdownKVP from './components/form/DropdownKvP.svelte';
import MultiSelect from './components/form/MultiSelect.svelte';
import NumberInput from './components/form/NumberInput.svelte';
import TextInput from './components/form/TextInput.svelte';
import TextArea from './components/form/TextArea.svelte';

//table
import Table from './components/Table/Table.svelte';
import TableFilter from './components/Table/TableFilter.svelte';
import { columnFilter, searchFilter } from './components/Table/filter';
import type { TableConfig, Columns, Column } from './models/Models';

// CodeEditor
import CodeEditor from './components/CodeEditor/CodeEditor.svelte';

//notification
import Notification from './components/page/Notification.svelte';

//table placeholder
import TablePlaceholder from './components/page/TablePlaceholder.svelte';

//Form
export {
	Checkbox,
	CheckboxKVPList,
	CheckboxList,
	DateInput,
	DropdownKVP,
	MultiSelect,
	NumberInput,
	TextArea,
	TextInput
};

//File
export { FileInfo, FileIcon, FileUploader };

//others
export { Spinner, Page, Alert, Menu, ErrorMessage };

//Api
export { Api } from './services/Api.js';
export { host, username, password, setApiConfig } from './stores/apiStores.js';

//Type
export type {
	userType,
	inputType,
	fileUploaderType,
	linkType,
	listItemType,
	keyValuePairType,
	fileInfoType,
	fileReaderInfoType,
	asciiFileReaderInfoType
} from './models/Models.js';

//help
export { helpStore } from '$store/pageStores';
export type { helpStoreType, helpItemType } from './models/Models';

//notification
export { notificationStore } from '$store/pageStores';
export type { notificationItemType, notificationStoreType } from './models/Models';
export { notificationType } from './models/Enums';
export { Notification };

//table placholder
export { TablePlaceholder };
//enum
export {
	positionType,
	pageContentLayoutType,
	decimalCharacterType,
	orientationType,
	textMarkerType,
	textSeperatorType
} from './models/Enums';

// Table
export { Table, TableFilter, columnFilter, searchFilter };

// CodeEditor
export { CodeEditor };

export type { TableConfig, Columns, Column };
