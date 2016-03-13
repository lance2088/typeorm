import {ColumnMetadata} from "../../metadata-builder/metadata/ColumnMetadata";

export class Alias {
    isMain: boolean;
    name: string;
    target: Function;
    parentPropertyName: string;
    parentAliasName: string;

    constructor(name: string) {
        this.name = name;
    }
    
    getPrimaryKeyValue(result: any, primaryColumn: ColumnMetadata): any {
        return result[this.name + "_" + primaryColumn.name];
    }
    
    getColumnValue(result: any, column: ColumnMetadata) {
        return result[this.name + "_" + column.name];
    }
    
}