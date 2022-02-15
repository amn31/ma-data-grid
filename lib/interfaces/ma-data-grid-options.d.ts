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
export interface MaDataGridSelectedFilter {
    operator: string;
    value: string | number;
}
export interface MaDataGridColumnOptions {
    /**
     * Display or not the head filter regarding this column
     */
    filter?: boolean;
    /**
     * Title of column
     */
    title?: string;
    /**
     * Defaut selected operator
     */
    selectedFilter?: MaDataGridSelectedFilter;
    cssClass?: string;
    isRowNumber?: boolean;
    isRowHTML?: boolean;
    canEdit?: boolean;
    prop: string;
    sorted?: boolean;
    extFilter?: boolean;
    dataType?: 'boolean' | 'bool' | 'number' | 'date' | 'string' | 'datetime' | 'time' | 'float' | 'selector';
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
    checked?: boolean;
}
export declare const options_header_boolean: MaDataGridHeadFilter[];
export declare const options_header_bool: MaDataGridHeadFilter[];
export declare const options_header_string: MaDataGridHeadFilter[];
export declare const options_header_number: MaDataGridHeadFilter[];
export declare const options_header_date: MaDataGridHeadFilter[];
export interface MaDataGridFilterEvent {
    text: string;
    fields: string[];
}
