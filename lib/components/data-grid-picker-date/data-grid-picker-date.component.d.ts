import { AfterViewInit, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
export declare class DataGridPickerDateComponent implements OnInit, OnDestroy, AfterViewInit {
    instance: any;
    datevalue: Date;
    realValue: string;
    time: string;
    value: string;
    materialize: boolean;
    type: 'date' | 'time';
    date: Date;
    changePicker: EventEmitter<any>;
    datepicker_id: string;
    madatepicker: ElementRef;
    constructor();
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    getDate(): Date;
    changeDateByInput(evt: any): void;
    setDate(date: any): void;
    getTime(): string;
    setTime(hour: any, min: any): void;
    _init(): void;
    onChange(): void;
    emitDateEvent(): void;
    emitTimeEvent(): void;
}
