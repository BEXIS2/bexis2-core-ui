
export interface FileInfo {
 name:string,
 type:string,
 length:number,
 description:string,
 validationHash:string,

}


export interface FileUploaderModel{
 accept:string[],
 existingFiles:FileInfo[],
 descriptionType:number,
 multiple:boolean,
 maxSize:number,
 lastModification:Date
}

export interface Files {
 accepted:Blob[],
 rejected:Blob[]
}


export type user = {
 name:string
}

export interface FileObj{
 path:string,
 lastModified:number,
 lastModifiedDate:Date,
 name:string,
 size:number,
 type:string,
 webkitRelativePath:string
}