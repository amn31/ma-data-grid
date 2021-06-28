import { ComponentFactoryResolver } from '@angular/core';
import { Type } from '@angular/core';
import { OnInit } from '@angular/core';
import { MaGridCellTemplateDirective } from '../../directives/ma-grid-cell-template.directive';
import * as i0 from "@angular/core";
export declare class DataGridTemplateCellComponent implements OnInit {
    private componentFactoryResolver;
    data: any;
    template: Type<any>;
    libMaGridCellTemplate: MaGridCellTemplateDirective;
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<DataGridTemplateCellComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DataGridTemplateCellComponent, "ma-data-grid-template-cell-t1", never, { "data": "data"; "template": "template"; }, {}, never, never>;
}
//# sourceMappingURL=data-grid-template-cell.component.d.ts.map