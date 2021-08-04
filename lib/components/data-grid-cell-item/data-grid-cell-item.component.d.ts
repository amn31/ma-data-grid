import { EventEmitter, Type } from '@angular/core';
import { MaDataGridComponent } from '../../ma-data-grid.component';
export declare class DataGridCellItemComponent {
    component: Type<any>;
    data: any;
    col?: any;
    prop?: string;
    myGrid?: MaDataGridComponent;
    dataChange: EventEmitter<any>;
    constructor(component: Type<any>, data: any, col?: any, prop?: string, myGrid?: MaDataGridComponent);
}
