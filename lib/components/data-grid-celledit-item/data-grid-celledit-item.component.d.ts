import { ElementRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MaDataGridCell } from '../../interfaces/ma-data-grid-cell';
import { MaDataGridColumnOptions } from '../../interfaces/ma-data-grid-options';
import { MaDataGridComponent } from '../../ma-data-grid.component';
export declare class DataGridCelleditItemComponent implements MaDataGridCell, OnInit, OnChanges {
    myInput: ElementRef;
    myInputCheckbox: ElementRef;
    constructor();
    value: string;
    dataChange: EventEmitter<any>;
    data: any;
    col: MaDataGridColumnOptions;
    prop: string;
    myGrid: MaDataGridComponent;
    ngOnInit(): void;
    onPress(evt: any): void;
    onChange(): void;
    onChangeCheckbox(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
