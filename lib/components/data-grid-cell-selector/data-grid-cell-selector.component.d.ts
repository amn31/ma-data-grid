import { ElementRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MaDataGridColumnOptions } from '../../interfaces/ma-data-grid-options';
import { MaDataGridComponent } from '../../ma-data-grid.component';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<DataGridCellSelectorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DataGridCellSelectorComponent, "ma-data-grid-cell-selector", never, { "data": "data"; "isHeader": "isHeader"; "col": "col"; "prop": "prop"; "myGrid": "myGrid"; }, { "dataChange": "dataChange"; }, never, never>;
}
