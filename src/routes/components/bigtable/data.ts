import {  writable } from 'svelte/store';

export type ResultRow = {
    inputID: number,
    inputRank?: string,
    inputName: string,
    matchType: string,
    id: number,
    rank: string,
    label?: string,
    scientificName: string,
    authorship: string,
    status: string,
    acceptedName?: string,
    classification?: string,
    issues?: string,
}


let testRows: ResultRow[] = [

]

export let testStore = writable<ResultRow[]>(testRows)