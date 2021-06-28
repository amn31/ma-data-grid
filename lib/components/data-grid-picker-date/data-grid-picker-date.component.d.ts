import { AfterViewInit, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DataGridPickerDateComponent implements OnInit, OnDestroy, AfterViewInit {
    instance: any;
    datevalue: Date;
    realValue: string;
    time: string;
    value: string;
    type: 'date' | 'time';
    changePicker: EventEmitter<any>;
    datepicker_id: string;
    madatepicker: ElementRef;
    constructor();
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    getDate(): Date;
    setDate(date: any): void;
    getTime(): string;
    setTime(hour: any, min: any): void;
    _init(): void;
    onChange(): void;
    emitDateEvent(): void;
    emitTimeEvent(): void;
    static ɵfac: i0.ɵɵFactoryDef<DataGridPickerDateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DataGridPickerDateComponent, "ma-data-grid-datepicker", never, { "value": "value"; "type": "type"; }, { "changePicker": "changePicker"; }, never, never>;
}
//# sourceMappingURL=data-grid-picker-date.component.d.ts.map