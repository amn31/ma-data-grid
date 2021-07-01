import { ComponentFactoryResolver } from '@angular/core';
import { Type } from '@angular/core';
import { OnInit } from '@angular/core';
import { MaGridCellTemplateDirective } from '../../directives/ma-grid-cell-template.directive';
export declare class DataGridTemplateCellComponent implements OnInit {
    private componentFactoryResolver;
    data: any;
    template: Type<any>;
    libMaGridCellTemplate: MaGridCellTemplateDirective;
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    ngOnInit(): void;
}
