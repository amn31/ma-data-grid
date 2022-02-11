import { EventEmitter, OnInit, SimpleChanges } from '@angular/core';
import { MaDataGridFilterEvent, MaDataGridColumnOptions } from './interfaces/ma-data-grid-options';
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
}
