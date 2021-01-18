import { FilterConditions } from "@amn31/filter-multiple-conditions";
import { Type } from "@angular/core";
import { MaDataGridCell } from "./ma-data-grid-cell";
export declare type MaDataGridSelectMethod = 'row' | 'cell';
export interface MaDataGridSelectEvent {
    index: number;
    row: any;
    value?: any;
    prop?: string;
}
export interface MaDataGridHeadFilterEvent {
    where: FilterConditions;
    data?: [];
}
export interface MaDataGridColumnOptions {
    title?: string;
    cssClass?: string;
    isRowNumber?: boolean;
    isRowHTML?: boolean;
    prop: string;
    sorted?: boolean;
    extFilter?: boolean;
    dataType?: 'boolean' | 'number' | 'date' | 'string' | 'datetime' | 'time';
    headFilter?: MaDataGridHeadFilter[];
    opDefautFilter?: string;
    extFilterSelected?: boolean;
    pipe?: (value: any, row: any, col: any) => {};
    useTemplate?: Type<MaDataGridCell>;
}
export interface MaDataGridHeadFilter {
    value: string;
    operator: string;
    label?: string;
}
export declare const options_header_boolean: MaDataGridHeadFilter[];
export declare const options_header_string: MaDataGridHeadFilter[];
export declare const options_header_number: MaDataGridHeadFilter[];
export declare const options_header_date: MaDataGridHeadFilter[];
export interface MaDataGridFilterEvent {
    text: string;
    fields: string[];
}
