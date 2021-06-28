import { Input, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { MaGridCellTemplateDirective } from '../../directives/ma-grid-cell-template.directive';
import { DataGridCellItemComponent } from '../data-grid-cell-item/data-grid-cell-item.component';
import * as i0 from "@angular/core";
import * as i1 from "../../directives/ma-grid-cell-template.directive";
function DataGridTemplateCellComponent_ng_template_0_Template(rf, ctx) { }
export class DataGridTemplateCellComponent {
    constructor(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        // console.log('DataGridTemplateCellComponent c',this.template);
    }
    ngOnInit() {
        // 
        if (!this.template) {
            return;
        }
        const component = new DataGridCellItemComponent(this.template, this.data);
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component.component);
        if (!this.libMaGridCellTemplate) {
            return;
        }
        const viewContainerRef = this.libMaGridCellTemplate.viewContainerRef;
        const componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = component.data;
    }
}
DataGridTemplateCellComponent.ɵfac = function DataGridTemplateCellComponent_Factory(t) { return new (t || DataGridTemplateCellComponent)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver)); };
DataGridTemplateCellComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DataGridTemplateCellComponent, selectors: [["ma-data-grid-template-cell-t1"]], viewQuery: function DataGridTemplateCellComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(MaGridCellTemplateDirective, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.libMaGridCellTemplate = _t.first);
    } }, inputs: { data: "data", template: "template" }, decls: 1, vars: 0, consts: [["libMaGridCellTemplate", ""]], template: function DataGridTemplateCellComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, DataGridTemplateCellComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
    } }, directives: [i1.MaGridCellTemplateDirective], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DataGridTemplateCellComponent, [{
        type: Component,
        args: [{
                selector: 'ma-data-grid-template-cell-t1',
                template: '<ng-template libMaGridCellTemplate></ng-template>'
            }]
    }], function () { return [{ type: i0.ComponentFactoryResolver }]; }, { data: [{
            type: Input
        }], template: [{
            type: Input
        }], libMaGridCellTemplate: [{
            type: ViewChild,
            args: [MaGridCellTemplateDirective, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLXRlbXBsYXRlLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkQ6L015SG9tZS9hbmRyb2lkL3dvcmtzcGFjZS9naXQvbWEtbmctZGF0YWdyaWQvcHJvamVjdHMvbWEtZGF0YS1ncmlkL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGEtZ3JpZC10ZW1wbGF0ZS1jZWxsL2RhdGEtZ3JpZC10ZW1wbGF0ZS1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQTRCLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0UsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMvRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQzs7OztBQU1qRyxNQUFNLE9BQU8sNkJBQTZCO0lBTXhDLFlBQW9CLHdCQUFrRDtRQUFsRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ3BFLGdFQUFnRTtJQUNsRSxDQUFDO0lBRUQsUUFBUTtRQUNOLEdBQUc7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFDRCxNQUFNLFNBQVMsR0FBRyxJQUFJLHlCQUF5QixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpFLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQy9CLE9BQU87U0FDUjtRQUNELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDO1FBQ3JFLE1BQU0sWUFBWSxHQUFHLGdCQUFnQixDQUFDLGVBQWUsQ0FBNEIsZ0JBQWdCLENBQUMsQ0FBQztRQUNuRyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQzlDLENBQUM7OzBHQXhCVSw2QkFBNkI7a0VBQTdCLDZCQUE2Qjs2QkFJN0IsMkJBQTJCOzs7OztRQU4zQiw4RkFBbUM7O2tEQUVuQyw2QkFBNkI7Y0FKekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFFBQVEsRUFBRSxtREFBbUQ7YUFDOUQ7MkVBR1UsSUFBSTtrQkFBWixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNvRCxxQkFBcUI7a0JBQTlFLFNBQVM7bUJBQUMsMkJBQTJCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFHcmlkQ2VsbFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9tYS1ncmlkLWNlbGwtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IERhdGFHcmlkQ2VsbEl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9kYXRhLWdyaWQtY2VsbC1pdGVtL2RhdGEtZ3JpZC1jZWxsLWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWEtZGF0YS1ncmlkLXRlbXBsYXRlLWNlbGwtdDEnLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSBsaWJNYUdyaWRDZWxsVGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIERhdGFHcmlkVGVtcGxhdGVDZWxsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBkYXRhOiBhbnk7XG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUeXBlPGFueT47XG4gIEBWaWV3Q2hpbGQoTWFHcmlkQ2VsbFRlbXBsYXRlRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSBsaWJNYUdyaWRDZWxsVGVtcGxhdGU6IE1hR3JpZENlbGxUZW1wbGF0ZURpcmVjdGl2ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7IFxuICAgIC8vIGNvbnNvbGUubG9nKCdEYXRhR3JpZFRlbXBsYXRlQ2VsbENvbXBvbmVudCBjJyx0aGlzLnRlbXBsYXRlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIFxuICAgIGlmICghdGhpcy50ZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgRGF0YUdyaWRDZWxsSXRlbUNvbXBvbmVudCh0aGlzLnRlbXBsYXRlLHRoaXMuZGF0YSk7XG5cbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50LmNvbXBvbmVudCk7XG4gICAgaWYgKCF0aGlzLmxpYk1hR3JpZENlbGxUZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB2aWV3Q29udGFpbmVyUmVmID0gdGhpcy5saWJNYUdyaWRDZWxsVGVtcGxhdGUudmlld0NvbnRhaW5lclJlZjtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB2aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudDxEYXRhR3JpZENlbGxJdGVtQ29tcG9uZW50Pihjb21wb25lbnRGYWN0b3J5KTtcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuZGF0YSA9IGNvbXBvbmVudC5kYXRhO1xuICB9XG59XG4iXX0=