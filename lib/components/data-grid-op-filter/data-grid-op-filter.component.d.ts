import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { MaDataGridColumnOptions, MaDataGridHeadFilter } from '../../interfaces/ma-data-grid-options';
import * as i0 from "@angular/core";
export declare class DataGridOpFilterComponent implements OnInit {
    value: string;
    col: MaDataGridColumnOptions;
    elemToggle: ElementRef;
    elemValue: ElementRef;
    changeOperator: EventEmitter<any>;
    changeEmptyOperator: EventEmitter<any>;
    options: any;
    multiple: boolean;
    isRowHTML: boolean;
    values: MaDataGridHeadFilter[];
    label: string;
    popupPosition: any;
    constructor();
    getFuncClickDocument(): () => void;
    toggleDiv(): void;
    ngOnInit(): void;
    getOperator(): any;
    changeValues(opt: any): void;
    getConditions(filter_value: any): any[];
    changeValue(opt: any): void;
    _changeOperator(): void;
    static ɵfac: i0.ɵɵFactoryDef<DataGridOpFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DataGridOpFilterComponent, "ma-data-grid-op-filter", never, { "value": "value"; "col": "col"; }, { "changeOperator": "changeOperator"; "changeEmptyOperator": "changeEmptyOperator"; }, never, never>;
}
//# sourceMappingURL=data-grid-op-filter.component.d.ts.map