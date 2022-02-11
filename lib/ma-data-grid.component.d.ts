import { QueryList } from '@angular/core';
import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataGridHeadFilterComponent } from './components/data-grid-head-filter/data-grid-head-filter.component';
import { MaDataGridFilterEvent, MaDataGridColumnOptions, MaDataGridSelectMethod, MaDataGridSelectEvent } from './interfaces/ma-data-grid-options';
import { MaGridFilterComponent } from './ma-grid-filter.component';
import { FilterConditions } from "@amn31/filter-multiple-conditions";
import * as i0 from "@angular/core";
export declare class MaDataGridComponent implements OnInit, OnChanges {
    private platformId;
    private document;
    columns: MaDataGridColumnOptions[];
    limit: number;
    canSelect: MaDataGridSelectMethod;
    extFilter: boolean;
    headFilter: boolean;
    pagination: boolean;
    page: number;
    count: number;
    customCSS: string;
    myGrid: this;
    rows: any;
    change: EventEmitter<any>;
    select: EventEmitter<MaDataGridSelectEvent>;
    extFilterChange: EventEmitter<MaDataGridFilterEvent>;
    filterChange: EventEmitter<any>;
    changePage: EventEmitter<any>;
    sort: EventEmitter<any>;
    canSelectChange: EventEmitter<MaDataGridSelectMethod>;
    rowsChange: EventEmitter<any>;
    rowsSelect: EventEmitter<any>;
    gridfilter: MaGridFilterComponent;
    headerfilter: QueryList<DataGridHeadFilterComponent>;
    grid_cell_first: string;
    grid_row_selected: string;
    current_page: number;
    max_page: number;
    max_nb_page: number;
    nb_page: number;
    startat: number;
    searchValue: string;
    isBrowser: boolean;
    rows_displayed: any;
    pages: any[];
    conditions: FilterConditions;
    nb_record: number;
    row_selected: number;
    cell_selected: number;
    temp: any[];
    sortedField: {
        field: string;
        reverse: boolean;
    };
    constructor(platformId: object, document: Document);
    resetSelection(): void;
    ngOnChanges(changes: SimpleChanges): void;
    IncrementPage(): void;
    DecrementPage(): void;
    FastIncrementPage(): void;
    _dataChange(evt: any): void;
    _dataSelector(evt: any, prop: any): void;
    FastDecrementPage(): void;
    private _changePage;
    ngOnInit(): void;
    private _sortData;
    sortBy(col: any): void;
    SelectRow(index: any, row: any): void;
    SelectCell(index: any, row: any, col: any): void;
    private _filterChange;
    timeout: any;
    private _changeHeaderFilter;
    private _delayChangeHeaderFilter;
    static ɵfac: i0.ɵɵFactoryDeclaration<MaDataGridComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MaDataGridComponent, "ma-data-grid", never, { "columns": "columns"; "limit": "limit"; "canSelect": "canSelect"; "extFilter": "extFilter"; "headFilter": "headFilter"; "pagination": "pagination"; "page": "page"; "count": "count"; "customCSS": "customCSS"; "myGrid": "myGrid"; "rows": "rows"; }, { "change": "change"; "select": "select"; "extFilterChange": "extFilterChange"; "filterChange": "filterChange"; "changePage": "changePage"; "sort": "sort"; "canSelectChange": "canSelectChange"; "rowsChange": "rowsChange"; "rowsSelect": "rowsSelect"; }, never, never>;
}
