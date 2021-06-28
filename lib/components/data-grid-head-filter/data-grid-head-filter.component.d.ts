import { EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
import { MaDataGridColumnOptions } from '../../interfaces/ma-data-grid-options';
import { DataGridOpFilterComponent } from '../data-grid-op-filter/data-grid-op-filter.component';
import { DataGridPickerDateComponent } from '../data-grid-picker-date/data-grid-picker-date.component';
import * as i0 from "@angular/core";
export declare class DataGridHeadFilterComponent implements OnInit {
    filter_value: string;
    col: MaDataGridColumnOptions;
    changeHeaderFilter: EventEmitter<any>;
    op_filter: DataGridOpFilterComponent;
    madate_picker: DataGridPickerDateComponent;
    astuce_datapicker: string;
    constructor();
    ngOnInit(): void;
    getFilter(): any[];
    _changeEmptyOperator(): void;
    _changeOperator(event: any): void;
    _changeDate(date: any): void;
    static ɵfac: i0.ɵɵFactoryDef<DataGridHeadFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DataGridHeadFilterComponent, "ma-data-grid-head-filter", never, { "filter_value": "filter_value"; "col": "col"; }, { "changeHeaderFilter": "changeHeaderFilter"; }, never, never>;
}
//# sourceMappingURL=data-grid-head-filter.component.d.ts.map