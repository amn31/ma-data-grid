import { EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { MaGridCellTemplateDirective } from '../../directives/ma-grid-cell-template.directive';
import { DataGridCellItemComponent } from '../data-grid-cell-item/data-grid-cell-item.component';
import * as i0 from "@angular/core";
import * as i1 from "../../directives/ma-grid-cell-template.directive";
function DataGridTemplateCellComponent_ng_template_0_Template(rf, ctx) { }
export class DataGridTemplateCellComponent {
    constructor(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        // console.log('DataGridTemplateCellComponent c',this.template, this.prop);
    }
    ngOnInit() {
        // 
        if (!this.template) {
            return;
        }
        const component = new DataGridCellItemComponent(this.template, this.data, this.col, this.prop, this.myGrid);
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component.component);
        if (!this.libMaGridCellTemplate) {
            return;
        }
        const viewContainerRef = this.libMaGridCellTemplate.viewContainerRef;
        const componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = component.data;
        componentRef.instance.prop = component.prop;
        componentRef.instance.col = component.col;
        componentRef.instance.dataChange = new EventEmitter();
        componentRef.instance.myGrid = component.myGrid;
        componentRef.instance.dataChange?.subscribe(d => {
            // console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD", d);
            if (componentRef.instance.myGrid != null) {
                componentRef.instance.myGrid._dataChange(d);
            }
        });
    }
}
DataGridTemplateCellComponent.ɵfac = function DataGridTemplateCellComponent_Factory(t) { return new (t || DataGridTemplateCellComponent)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver)); };
DataGridTemplateCellComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataGridTemplateCellComponent, selectors: [["ma-data-grid-template-cell-t1"]], viewQuery: function DataGridTemplateCellComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(MaGridCellTemplateDirective, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.libMaGridCellTemplate = _t.first);
    } }, inputs: { data: "data", prop: "prop", col: "col", template: "template", myGrid: "myGrid" }, outputs: { dataChange: "dataChange" }, decls: 1, vars: 0, consts: [["libMaGridCellTemplate", ""]], template: function DataGridTemplateCellComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, DataGridTemplateCellComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
    } }, directives: [i1.MaGridCellTemplateDirective], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataGridTemplateCellComponent, [{
        type: Component,
        args: [{
                selector: 'ma-data-grid-template-cell-t1',
                template: '<ng-template libMaGridCellTemplate></ng-template>'
            }]
    }], function () { return [{ type: i0.ComponentFactoryResolver }]; }, { data: [{
            type: Input
        }], prop: [{
            type: Input
        }], col: [{
            type: Input
        }], template: [{
            type: Input
        }], myGrid: [{
            type: Input
        }], dataChange: [{
            type: Output
        }], libMaGridCellTemplate: [{
            type: ViewChild,
            args: [MaGridCellTemplateDirective, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLXRlbXBsYXRlLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWEtZGF0YS1ncmlkL3NyYy9saWIvY29tcG9uZW50cy9kYXRhLWdyaWQtdGVtcGxhdGUtY2VsbC9kYXRhLWdyaWQtdGVtcGxhdGUtY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUE0QixZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakcsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUUvRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQzs7OztBQU9qRyxNQUFNLE9BQU8sNkJBQTZCO0lBVXhDLFlBQW9CLHdCQUFrRDtRQUFsRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ3BFLDJFQUEyRTtJQUM3RSxDQUFDO0lBRUQsUUFBUTtRQUNOLEdBQUc7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFDRCxNQUFNLFNBQVMsR0FBRyxJQUFJLHlCQUF5QixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTVHLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQy9CLE9BQU87U0FDUjtRQUNELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDO1FBQ3JFLE1BQU0sWUFBWSxHQUFHLGdCQUFnQixDQUFDLGVBQWUsQ0FBNEIsZ0JBQWdCLENBQUMsQ0FBQztRQUNuRyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQzVDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDNUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUMxQyxZQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzNELFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDaEQsWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzlDLGtFQUFrRTtZQUNsRSxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtnQkFDeEMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBRTdDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDOzswR0F4Q1UsNkJBQTZCO2dGQUE3Qiw2QkFBNkI7dUJBUTdCLDJCQUEyQjs7Ozs7UUFWM0IsOEZBQWlEOzt1RkFFakQsNkJBQTZCO2NBSnpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxRQUFRLEVBQUUsbURBQW1EO2FBQzlEOzJFQUdVLElBQUk7a0JBQVosS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLEdBQUc7a0JBQVgsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDSSxVQUFVO2tCQUFuQixNQUFNO1lBQ21ELHFCQUFxQjtrQkFBOUUsU0FBUzttQkFBQywyQkFBMkIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFHcmlkQ2VsbFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9tYS1ncmlkLWNlbGwtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1hRGF0YUdyaWRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9tYS1kYXRhLWdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFHcmlkQ2VsbEl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9kYXRhLWdyaWQtY2VsbC1pdGVtL2RhdGEtZ3JpZC1jZWxsLWl0ZW0uY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYS1kYXRhLWdyaWQtdGVtcGxhdGUtY2VsbC10MScsXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlIGxpYk1hR3JpZENlbGxUZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRGF0YUdyaWRUZW1wbGF0ZUNlbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcbiAgQElucHV0KCkgcHJvcDogYW55O1xuICBASW5wdXQoKSBjb2w6IGFueTtcbiAgQElucHV0KCkgdGVtcGxhdGU6IFR5cGU8YW55PjtcbiAgQElucHV0KCkgbXlHcmlkOiBNYURhdGFHcmlkQ29tcG9uZW50O1xuICBAT3V0cHV0KCkgZGF0YUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47Ly8gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQFZpZXdDaGlsZChNYUdyaWRDZWxsVGVtcGxhdGVEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIGxpYk1hR3JpZENlbGxUZW1wbGF0ZTogTWFHcmlkQ2VsbFRlbXBsYXRlRGlyZWN0aXZlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnRGF0YUdyaWRUZW1wbGF0ZUNlbGxDb21wb25lbnQgYycsdGhpcy50ZW1wbGF0ZSwgdGhpcy5wcm9wKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIFxuICAgIGlmICghdGhpcy50ZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgRGF0YUdyaWRDZWxsSXRlbUNvbXBvbmVudCh0aGlzLnRlbXBsYXRlLCB0aGlzLmRhdGEsIHRoaXMuY29sLCB0aGlzLnByb3AsIHRoaXMubXlHcmlkKTtcblxuICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQuY29tcG9uZW50KTtcbiAgICBpZiAoIXRoaXMubGliTWFHcmlkQ2VsbFRlbXBsYXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHZpZXdDb250YWluZXJSZWYgPSB0aGlzLmxpYk1hR3JpZENlbGxUZW1wbGF0ZS52aWV3Q29udGFpbmVyUmVmO1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50PERhdGFHcmlkQ2VsbEl0ZW1Db21wb25lbnQ+KGNvbXBvbmVudEZhY3RvcnkpO1xuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5kYXRhID0gY29tcG9uZW50LmRhdGE7XG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlLnByb3AgPSBjb21wb25lbnQucHJvcDtcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuY29sID0gY29tcG9uZW50LmNvbDtcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuZGF0YUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5teUdyaWQgPSBjb21wb25lbnQubXlHcmlkO1xuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5kYXRhQ2hhbmdlPy5zdWJzY3JpYmUoZCA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIkREREREREREREREREREREREREREREREREREREREREREREREREREREREREREXCIsIGQpO1xuICAgICAgaWYgKGNvbXBvbmVudFJlZi5pbnN0YW5jZS5teUdyaWQgIT0gbnVsbCkge1xuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UubXlHcmlkLl9kYXRhQ2hhbmdlKGQpO1xuXG4gICAgICB9XG4gICAgfSk7XG5cbiAgfVxufVxuIl19