export function openDbTable(name: any): Promise<any>;
export default class ClientDB {
    constructor(tableId: any);
    tableId: any;
    db: any;
    _ensureDB(): Promise<any>;
    init(rows: any): Promise<{
        tableId: any;
        count: any;
    }>;
    query({ q, filters, order, offset, limit }?: {
        q?: string | undefined;
        filters?: never[] | undefined;
        order?: never[] | undefined;
        offset?: number | undefined;
        limit?: number | undefined;
    }): Promise<{
        tableId: any;
        rows: any[];
        total: number;
    }>;
    clear(tablename: string): Promise<void>;
    ensureIndex(columnName: any): Promise<void>;
    getByIndex(columnName: any, value: any): Promise<any>;
    get(key: any): Promise<any>;
    getAll(): Promise<any>;
    replace(records: any): Promise<any>;
    delete(key: any): Promise<any>;
    bulkDelete(keys: any): Promise<any>;
    put(record: any): Promise<any>;
    put(record: any, key: any): Promise<any>;
    bulkPut(records: any): Promise<any>;
    count(): Promise<any>;
    destroy(): void;
}
