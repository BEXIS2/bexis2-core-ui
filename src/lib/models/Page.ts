// BREADCRUMB
/********************************** */
export interface breadcrumbItemType {
	label: string;
	link: string;
}

export class BreadcrumbModel {
	items: breadcrumbItemType[];

	constructor() {
		this.items = [];
	}
}

// MENU
/********************************** */
export class MenuModel {
	Logo: logoType;
	LaunchBar: menuItemType[];
	MenuBar: menuItemType[];
	AccountBar: menuItemType[];
	Settings: menuItemType[];
	Extended: menuItemType[];

	constructor() {
		this.Logo = { Mime: '', Name: '', Data: '', Height: 0 };
		this.LaunchBar = [];
		this.MenuBar = [];
		this.AccountBar = [];
		this.Settings = [];
		this.Extended = [];
	}
}

export interface menuItemType {
	Title: string;
	Url: string;
	Target: string;
	Module: string;
	Internal: boolean;
	Items: menuItemType[];
}

export interface logoType {
	Mime: string;
	Name: string;
	Data: string;
	Height: number;
}
