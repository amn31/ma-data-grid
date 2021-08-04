import { ElementRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MaDataGridColumnOptions } from '../../interfaces/ma-data-grid-options';
import { MaDataGridComponent } from '../../ma-data-grid.component';
export declare class DataGridCellSelectorComponent implements OnInit, OnChanges {
    myInputSelectorBox: ElementRef;
    title: string;
    dataChange: EventEmitter<any>;
    data: any;
    isHeader: boolean;
    col: MaDataGridColumnOptions;
    prop: string;
    myGrid: MaDataGridComponent;
    constructor();
    ngOnInit(): void;
    onChangeCheckbox(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
