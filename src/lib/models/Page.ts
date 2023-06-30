// BREADCRUMB
/********************************** */ 
export interface breadcrumbItemType {
 label:string,
 link:string
}

export class BreadcrumbModel {
 items:breadcrumbItemType[]

 constructor() {
   this.items = [];
 }
}

// MENU
/********************************** */ 
export class MenuModel {
 Logo: Logo;
 LaunchBar: MenuItem[];
 MenuBar: MenuItem[];
 AccountBar: MenuItem[];
 Settings: MenuItem[];
 Extended: MenuItem[];

}

export interface menuItemType {
 Title: string;
 Url: string;
 Target: string;
 Module: string;
 Items: MenuItem[];
}

export interface logoType {
 Mime: string;
 Name: string;
 Data: string;
 Height: number;
}
