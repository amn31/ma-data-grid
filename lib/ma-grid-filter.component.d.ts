import { EventEmitter, OnInit, SimpleChanges } from '@angular/core';
import { MaDataGridFilterEvent, MaDataGridColumnOptions } from './interfaces/ma-data-grid-options';
import * as i0 from "@angular/core";
export declare class MaGridFilterComponent implements OnInit {
    constructor();
    placeholder: string;
    searchValue: string;
    customCSS: string;
    searchValueChange: EventEmitter<any>;
    columns: MaDataGridColumnOptions[];
    filterChange: EventEmitter<MaDataGridFilterEvent>;
    input_filter: string;
    filters: any[];
    selectedFields: any[];
    ngOnChanges(changes: SimpleChanges): void;
    _init(): void;
    ngOnInit(): void;
    clickChekbox(col: any): void;
    enableFocus(): void;
    updateFilter(event: any): void;
    static ɵfac: i0.ɵɵFactoryDef<MaGridFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MaGridFilterComponent, "ma-data-grid-filter", never, { "searchValue": "searchValue"; "customCSS": "customCSS"; "columns": "columns"; }, { "searchValueChange": "searchValueChange"; "filterChange": "filterChange"; }, never, never>;
}
//# sourceMappingURL=ma-grid-filter.component.d.ts.map