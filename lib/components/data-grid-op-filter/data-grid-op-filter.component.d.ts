import { AfterViewInit, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { MaDataGridColumnOptions, MaDataGridHeadFilter } from '../../interfaces/ma-data-grid-options';
export declare class DataGridOpFilterComponent implements OnInit, AfterViewInit {
    value: string;
    col: MaDataGridColumnOptions;
    elemToggle: ElementRef;
    elemValue: ElementRef;
    changeOperator: EventEmitter<any>;
    changeEmptyOperator: EventEmitter<any>;
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
    getConditions(filter_value: any): any[];
    changeValue(opt: MaDataGridHeadFilter, ignoreToggle?: boolean): void;
    _changeOperator(): void;
}
