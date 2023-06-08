export interface Menu {
 Logo: Logo;
 LaunchBar: MenuItem[];
 MenuBar: MenuItem[];
 AccountBar: MenuItem[];
 Settings: MenuItem[];
 Extended: MenuItem[];
}

export interface MenuItem {
 Title: string;
 Url: string;
 Target: string;
 Module: string;
 Items: MenuItem[];
}

export interface Logo {
 Mime: string;
 Name: string;
 Data: string;
 Height: number;
}