import { AfterViewInit, EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
import { MaDataGridColumnOptions } from '../../interfaces/ma-data-grid-options';
import { DataGridOpFilterComponent, OperatorEvent } from '../data-grid-op-filter/data-grid-op-filter.component';
import { DataGridPickerDateComponent } from '../data-grid-picker-date/data-grid-picker-date.component';
export declare class DataGridHeadFilterComponent implements OnInit, AfterViewInit {
    filter_value1: string;
    filter_value2: string;
    col: MaDataGridColumnOptions;
    changeHeaderFilter: EventEmitter<any>;
    op_filter: DataGridOpFilterComponent;
    madate_picker1: DataGridPickerDateComponent;
    madate_picker2: DataGridPickerDateComponent;
    astuce_datapicker: string;
    isMultipleValue: boolean;
    date1: Date;
    date2: Date;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    getFilter(): import("@amn31/filter-multiple-conditions").FilterConditions;
    _changeEmptyOperator(event: OperatorEvent): void;
    _changeOperator(event: OperatorEvent, fromInputKey: boolean): void;
    _changeDate1(date: any): void;
    _changeDate2(date: any): void;
}
