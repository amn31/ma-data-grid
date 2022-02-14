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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLXRlbXBsYXRlLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkQ6L015SG9tZS9hbmRyb2lkL3dvcmtzcGFjZS9naXQvbWEtbmctZGF0YS1ncmlkL3Byb2plY3RzL21hLWRhdGEtZ3JpZC9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kYXRhLWdyaWQtdGVtcGxhdGUtY2VsbC9kYXRhLWdyaWQtdGVtcGxhdGUtY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRyxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRS9GLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBT2pHLE1BQU0sT0FBTyw2QkFBNkI7SUFVeEMsWUFBb0Isd0JBQWtEO1FBQWxELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDcEUsMkVBQTJFO0lBQzdFLENBQUM7SUFFRCxRQUFROztRQUNOLEdBQUc7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFDRCxNQUFNLFNBQVMsR0FBRyxJQUFJLHlCQUF5QixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTVHLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQy9CLE9BQU87U0FDUjtRQUNELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDO1FBQ3JFLE1BQU0sWUFBWSxHQUFHLGdCQUFnQixDQUFDLGVBQWUsQ0FBNEIsZ0JBQWdCLENBQUMsQ0FBQztRQUNuRyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQzVDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDNUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUMxQyxZQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzNELFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDaEQsTUFBQSxZQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsMENBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzlDLGtFQUFrRTtZQUNsRSxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtnQkFDeEMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBRTdDO1FBQ0gsQ0FBQyxFQUFFO0lBRUwsQ0FBQzs7O1lBNUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxRQUFRLEVBQUUsbURBQW1EO2FBQzlEOzs7WUFYUSx3QkFBd0I7OzttQkFjOUIsS0FBSzttQkFDTCxLQUFLO2tCQUNMLEtBQUs7dUJBQ0wsS0FBSztxQkFDTCxLQUFLO3lCQUNMLE1BQU07b0NBQ04sU0FBUyxTQUFDLDJCQUEyQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYUdyaWRDZWxsVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL21hLWdyaWQtY2VsbC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZENvbXBvbmVudCB9IGZyb20gJy4uLy4uL21hLWRhdGEtZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YUdyaWRDZWxsSXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL2RhdGEtZ3JpZC1jZWxsLWl0ZW0vZGF0YS1ncmlkLWNlbGwtaXRlbS5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hLWRhdGEtZ3JpZC10ZW1wbGF0ZS1jZWxsLXQxJyxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGUgbGliTWFHcmlkQ2VsbFRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBEYXRhR3JpZFRlbXBsYXRlQ2VsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgZGF0YTogYW55O1xuICBASW5wdXQoKSBwcm9wOiBhbnk7XG4gIEBJbnB1dCgpIGNvbDogYW55O1xuICBASW5wdXQoKSB0ZW1wbGF0ZTogVHlwZTxhbnk+O1xuICBASW5wdXQoKSBteUdyaWQ6IE1hRGF0YUdyaWRDb21wb25lbnQ7XG4gIEBPdXRwdXQoKSBkYXRhQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjsvLyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAVmlld0NoaWxkKE1hR3JpZENlbGxUZW1wbGF0ZURpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgbGliTWFHcmlkQ2VsbFRlbXBsYXRlOiBNYUdyaWRDZWxsVGVtcGxhdGVEaXJlY3RpdmU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xuICAgIC8vIGNvbnNvbGUubG9nKCdEYXRhR3JpZFRlbXBsYXRlQ2VsbENvbXBvbmVudCBjJyx0aGlzLnRlbXBsYXRlLCB0aGlzLnByb3ApO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gXG4gICAgaWYgKCF0aGlzLnRlbXBsYXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBEYXRhR3JpZENlbGxJdGVtQ29tcG9uZW50KHRoaXMudGVtcGxhdGUsIHRoaXMuZGF0YSwgdGhpcy5jb2wsIHRoaXMucHJvcCwgdGhpcy5teUdyaWQpO1xuXG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudC5jb21wb25lbnQpO1xuICAgIGlmICghdGhpcy5saWJNYUdyaWRDZWxsVGVtcGxhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgdmlld0NvbnRhaW5lclJlZiA9IHRoaXMubGliTWFHcmlkQ2VsbFRlbXBsYXRlLnZpZXdDb250YWluZXJSZWY7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQ8RGF0YUdyaWRDZWxsSXRlbUNvbXBvbmVudD4oY29tcG9uZW50RmFjdG9yeSk7XG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmRhdGEgPSBjb21wb25lbnQuZGF0YTtcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UucHJvcCA9IGNvbXBvbmVudC5wcm9wO1xuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5jb2wgPSBjb21wb25lbnQuY29sO1xuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5kYXRhQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlLm15R3JpZCA9IGNvbXBvbmVudC5teUdyaWQ7XG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmRhdGFDaGFuZ2U/LnN1YnNjcmliZShkID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiRERERERERERERERERERERERERERERERERERERERERERERERERERERERERERcIiwgZCk7XG4gICAgICBpZiAoY29tcG9uZW50UmVmLmluc3RhbmNlLm15R3JpZCAhPSBudWxsKSB7XG4gICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5teUdyaWQuX2RhdGFDaGFuZ2UoZCk7XG5cbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG59XG4iXX0=