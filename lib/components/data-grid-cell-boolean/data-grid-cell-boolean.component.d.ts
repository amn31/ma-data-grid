import { OnInit } from '@angular/core';
import { MaDataGridCell } from '../../interfaces/ma-data-grid-cell';
import { MaDataGridColumnOptions } from '../../interfaces/ma-data-grid-options';
import * as i0 from "@angular/core";
export declare class DataGridCellBooleanComponent implements MaDataGridCell, OnInit {
    data: any;
    col: MaDataGridColumnOptions;
    icon: string;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<DataGridCellBooleanComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DataGridCellBooleanComponent, "ma-data-grid-cell-boolean", never, { "data": "data"; "col": "col"; }, {}, never, never>;
}
//# sourceMappingURL=data-grid-cell-boolean.component.d.ts.map