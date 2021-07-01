import { OnInit } from '@angular/core';
import { MaDataGridCell } from '../../interfaces/ma-data-grid-cell';
import { MaDataGridColumnOptions } from '../../interfaces/ma-data-grid-options';
export declare class DataGridCellBooleanComponent implements MaDataGridCell, OnInit {
    data: any;
    col: MaDataGridColumnOptions;
    icon: string;
    constructor();
    ngOnInit(): void;
}
