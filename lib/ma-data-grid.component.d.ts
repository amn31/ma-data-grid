import { QueryList } from '@angular/core';
import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataGridHeadFilterComponent } from './components/data-grid-head-filter/data-grid-head-filter.component';
import { MaDataGridFilterEvent, MaDataGridColumnOptions, MaDataGridSelectMethod, MaDataGridSelectEvent } from './interfaces/ma-data-grid-options';
import { MaGridFilterComponent } from './ma-grid-filter.component';
import { FilterConditions } from "@amn31/filter-multiple-conditions";
export declare class MaDataGridComponent implements OnInit, OnChanges {
    columns: MaDataGridColumnOptions[];
    limit: number;
    canSelect: MaDataGridSelectMethod;
    extFilter: boolean;
    headFilter: boolean;
    pagination: boolean;
    page: number;
    count: number;
    rows: any;
    change: EventEmitter<any>;
    select: EventEmitter<MaDataGridSelectEvent>;
    extFilterChange: EventEmitter<MaDataGridFilterEvent>;
    filterChange: EventEmitter<any>;
    changePage: EventEmitter<any>;
    sort: EventEmitter<any>;
    canSelectChange: EventEmitter<MaDataGridSelectMethod>;
    gridfilter: MaGridFilterComponent;
    headerfilter: QueryList<DataGridHeadFilterComponent>;
    current_page: number;
    max_page: number;
    max_nb_page: number;
    nb_page: number;
    startat: number;
    searchValue: string;
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
    constructor();
    resetSelection(): void;
    ngOnChanges(changes: SimpleChanges): void;
    IncrementPage(): void;
    DecrementPage(): void;
    FastIncrementPage(): void;
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
}
