import { AfterViewInit, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { MaDataGridColumnOptions, MaDataGridHeadFilter } from '../../interfaces/ma-data-grid-options';
import { FilterConditions } from '@amn31/filter-multiple-conditions';
export interface OperatorEvent {
    isMultipleValue: boolean;
    col: MaDataGridColumnOptions;
}
export declare class DataGridOpFilterComponent implements OnInit, AfterViewInit {
    value: string;
    col: MaDataGridColumnOptions;
    elemToggle: ElementRef;
    elemValue: ElementRef;
    changeOperator: EventEmitter<any>;
    changeEmptyOperator: EventEmitter<any>;
    isMultipleValue: boolean;
    options: MaDataGridHeadFilter[];
    multiple: boolean;
    isHTML: boolean;
    values: MaDataGridHeadFilter[];
    label: string;
    popupPosition: any;
    constructor();
    getFuncClickDocument(): () => void;
    cssElemToggle: {
        height: any;
    };
    toggleDiv(): void;
    cloneOptions(opts: any): MaDataGridHeadFilter[];
    ngAfterViewInit(): void;
    ngOnInit(): void;
    setFirstChoice(): void;
    getOperator(): MaDataGridHeadFilter;
    changeValues(opt: any): void;
    isOperatorMultiple(o: MaDataGridHeadFilter): boolean;
    getConditions(filter_value1: any, filter_value2: any): FilterConditions;
    changeValue(opt: MaDataGridHeadFilter, ignoreToggle?: boolean): void;
    _changeOperator(): void;
}
