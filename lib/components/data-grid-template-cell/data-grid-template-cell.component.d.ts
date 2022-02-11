import { ComponentFactoryResolver, EventEmitter } from '@angular/core';
import { Type } from '@angular/core';
import { OnInit } from '@angular/core';
import { MaGridCellTemplateDirective } from '../../directives/ma-grid-cell-template.directive';
import { MaDataGridComponent } from '../../ma-data-grid.component';
import * as i0 from "@angular/core";
export declare class DataGridTemplateCellComponent implements OnInit {
    private componentFactoryResolver;
    data: any;
    prop: any;
    col: any;
    template: Type<any>;
    myGrid: MaDataGridComponent;
    dataChange: EventEmitter<any>;
    libMaGridCellTemplate: MaGridCellTemplateDirective;
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataGridTemplateCellComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DataGridTemplateCellComponent, "ma-data-grid-template-cell-t1", never, { "data": "data"; "prop": "prop"; "col": "col"; "template": "template"; "myGrid": "myGrid"; }, { "dataChange": "dataChange"; }, never, never>;
}
