import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { MaDataGridColumnOptions, MaDataGridHeadFilter } from '../../interfaces/ma-data-grid-options';
export declare class DataGridOpFilterComponent implements OnInit {
    value: string;
    col: MaDataGridColumnOptions;
    elemToggle: ElementRef;
    elemValue: ElementRef;
    changeOperator: EventEmitter<any>;
    changeEmptyOperator: EventEmitter<any>;
    options: MaDataGridHeadFilter[];
    multiple: boolean;
    isRowHTML: boolean;
    values: MaDataGridHeadFilter[];
    label: string;
    popupPosition: any;
    constructor();
    getFuncClickDocument(): () => void;
    toggleDiv(): void;
    cloneOptions(opts: any): MaDataGridHeadFilter[];
    ngOnInit(): void;
    setFirstChoice(): void;
    getOperator(): MaDataGridHeadFilter;
    changeValues(opt: any): void;
    getConditions(filter_value: any): any[];
    changeValue(opt: MaDataGridHeadFilter, ignoreToggle?: boolean): void;
    _changeOperator(): void;
}
