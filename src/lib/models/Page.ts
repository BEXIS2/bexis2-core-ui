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
}

export interface menuItemType {
	Title: string;
	Url: string;
	Target: string;
	Module: string;
	Items: menuItemType[];
}

export interface logoType {
	Mime: string;
	Name: string;
	Data: string;
	Height: number;
}
