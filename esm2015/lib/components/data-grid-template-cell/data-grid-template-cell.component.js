import { ComponentFactoryResolver, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { MaGridCellTemplateDirective } from '../../directives/ma-grid-cell-template.directive';
import { DataGridCellItemComponent } from '../data-grid-cell-item/data-grid-cell-item.component';
export class DataGridTemplateCellComponent {
    constructor(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        // console.log('DataGridTemplateCellComponent c',this.template, this.prop);
    }
    ngOnInit() {
        var _a;
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
        (_a = componentRef.instance.dataChange) === null || _a === void 0 ? void 0 : _a.subscribe(d => {
            // console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD", d);
            if (componentRef.instance.myGrid != null) {
                componentRef.instance.myGrid._dataChange(d);
            }
        });
    }
}
DataGridTemplateCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'ma-data-grid-template-cell-t1',
                template: '<ng-template libMaGridCellTemplate></ng-template>'
            },] }
];
DataGridTemplateCellComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
DataGridTemplateCellComponent.propDecorators = {
    data: [{ type: Input }],
    prop: [{ type: Input }],
    col: [{ type: Input }],
    template: [{ type: Input }],
    myGrid: [{ type: Input }],
    dataChange: [{ type: Output }],
    libMaGridCellTemplate: [{ type: ViewChild, args: [MaGridCellTemplateDirective, { static: true },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLXRlbXBsYXRlLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkM6L015VGVtcC9uZzEwYS9wcm9qZWN0cy9tYS1kYXRhLWdyaWQvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0YS1ncmlkLXRlbXBsYXRlLWNlbGwvZGF0YS1ncmlkLXRlbXBsYXRlLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakcsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUUvRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQU9qRyxNQUFNLE9BQU8sNkJBQTZCO0lBVXhDLFlBQW9CLHdCQUFrRDtRQUFsRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ3BFLDJFQUEyRTtJQUM3RSxDQUFDO0lBRUQsUUFBUTs7UUFDTixHQUFHO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBQ0QsTUFBTSxTQUFTLEdBQUcsSUFBSSx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU1RyxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUMvQixPQUFPO1NBQ1I7UUFDRCxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNyRSxNQUFNLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQTRCLGdCQUFnQixDQUFDLENBQUM7UUFDbkcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztRQUM1QyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQzVDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFDMUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMzRCxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQ2hELE1BQUEsWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLDBDQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM5QyxrRUFBa0U7WUFDbEUsSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7Z0JBQ3hDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUU3QztRQUNILENBQUMsRUFBRTtJQUVMLENBQUM7OztZQTVDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsUUFBUSxFQUFFLG1EQUFtRDthQUM5RDs7O1lBWFEsd0JBQXdCOzs7bUJBYzlCLEtBQUs7bUJBQ0wsS0FBSztrQkFDTCxLQUFLO3VCQUNMLEtBQUs7cUJBQ0wsS0FBSzt5QkFDTCxNQUFNO29DQUNOLFNBQVMsU0FBQywyQkFBMkIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFHcmlkQ2VsbFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9tYS1ncmlkLWNlbGwtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1hRGF0YUdyaWRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9tYS1kYXRhLWdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFHcmlkQ2VsbEl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9kYXRhLWdyaWQtY2VsbC1pdGVtL2RhdGEtZ3JpZC1jZWxsLWl0ZW0uY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYS1kYXRhLWdyaWQtdGVtcGxhdGUtY2VsbC10MScsXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlIGxpYk1hR3JpZENlbGxUZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRGF0YUdyaWRUZW1wbGF0ZUNlbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcbiAgQElucHV0KCkgcHJvcDogYW55O1xuICBASW5wdXQoKSBjb2w6IGFueTtcbiAgQElucHV0KCkgdGVtcGxhdGU6IFR5cGU8YW55PjtcbiAgQElucHV0KCkgbXlHcmlkOiBNYURhdGFHcmlkQ29tcG9uZW50O1xuICBAT3V0cHV0KCkgZGF0YUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47Ly8gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQFZpZXdDaGlsZChNYUdyaWRDZWxsVGVtcGxhdGVEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIGxpYk1hR3JpZENlbGxUZW1wbGF0ZTogTWFHcmlkQ2VsbFRlbXBsYXRlRGlyZWN0aXZlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnRGF0YUdyaWRUZW1wbGF0ZUNlbGxDb21wb25lbnQgYycsdGhpcy50ZW1wbGF0ZSwgdGhpcy5wcm9wKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIFxuICAgIGlmICghdGhpcy50ZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgRGF0YUdyaWRDZWxsSXRlbUNvbXBvbmVudCh0aGlzLnRlbXBsYXRlLCB0aGlzLmRhdGEsIHRoaXMuY29sLCB0aGlzLnByb3AsIHRoaXMubXlHcmlkKTtcblxuICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQuY29tcG9uZW50KTtcbiAgICBpZiAoIXRoaXMubGliTWFHcmlkQ2VsbFRlbXBsYXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHZpZXdDb250YWluZXJSZWYgPSB0aGlzLmxpYk1hR3JpZENlbGxUZW1wbGF0ZS52aWV3Q29udGFpbmVyUmVmO1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50PERhdGFHcmlkQ2VsbEl0ZW1Db21wb25lbnQ+KGNvbXBvbmVudEZhY3RvcnkpO1xuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5kYXRhID0gY29tcG9uZW50LmRhdGE7XG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlLnByb3AgPSBjb21wb25lbnQucHJvcDtcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuY29sID0gY29tcG9uZW50LmNvbDtcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuZGF0YUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5teUdyaWQgPSBjb21wb25lbnQubXlHcmlkO1xuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5kYXRhQ2hhbmdlPy5zdWJzY3JpYmUoZCA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIkREREREREREREREREREREREREREREREREREREREREREREREREREREREREREXCIsIGQpO1xuICAgICAgaWYgKGNvbXBvbmVudFJlZi5pbnN0YW5jZS5teUdyaWQgIT0gbnVsbCkge1xuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UubXlHcmlkLl9kYXRhQ2hhbmdlKGQpO1xuXG4gICAgICB9XG4gICAgfSk7XG5cbiAgfVxufVxuIl19