import { ComponentFactoryResolver, EventEmitter } from '@angular/core';
import { Type } from '@angular/core';
import { OnInit } from '@angular/core';
import { MaGridCellTemplateDirective } from '../../directives/ma-grid-cell-template.directive';
import { MaDataGridComponent } from '../../ma-data-grid.component';
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
}
