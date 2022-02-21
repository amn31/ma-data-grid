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
            if (componentRef.instance.myGrid != null) {
                componentRef.instance.myGrid.dataChange(d);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLXRlbXBsYXRlLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkQ6L015SG9tZS9hbmRyb2lkL3dvcmtzcGFjZS9naXQvbWEtbmctZGF0YS1ncmlkL3Byb2plY3RzL21hLWRhdGEtZ3JpZC9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kYXRhLWdyaWQtdGVtcGxhdGUtY2VsbC9kYXRhLWdyaWQtdGVtcGxhdGUtY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRyxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRS9GLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBT2pHLE1BQU0sT0FBTyw2QkFBNkI7SUFVeEMsWUFBb0Isd0JBQWtEO1FBQWxELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDcEUsMkVBQTJFO0lBQzdFLENBQUM7SUFFRCxRQUFROztRQUNOLEdBQUc7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFDRCxNQUFNLFNBQVMsR0FBRyxJQUFJLHlCQUF5QixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTVHLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQy9CLE9BQU87U0FDUjtRQUNELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDO1FBQ3JFLE1BQU0sWUFBWSxHQUFHLGdCQUFnQixDQUFDLGVBQWUsQ0FBNEIsZ0JBQWdCLENBQUMsQ0FBQztRQUNuRyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQzVDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDNUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUMxQyxZQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzNELFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDaEQsTUFBQSxZQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsMENBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzlDLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO2dCQUN4QyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFFNUM7UUFDSCxDQUFDLEVBQUU7SUFFTCxDQUFDOzs7WUEzQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFFBQVEsRUFBRSxtREFBbUQ7YUFDOUQ7OztZQVhRLHdCQUF3Qjs7O21CQWM5QixLQUFLO21CQUNMLEtBQUs7a0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3FCQUNMLEtBQUs7eUJBQ0wsTUFBTTtvQ0FDTixTQUFTLFNBQUMsMkJBQTJCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hR3JpZENlbGxUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvbWEtZ3JpZC1jZWxsLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNYURhdGFHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vbWEtZGF0YS1ncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhR3JpZENlbGxJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vZGF0YS1ncmlkLWNlbGwtaXRlbS9kYXRhLWdyaWQtY2VsbC1pdGVtLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWEtZGF0YS1ncmlkLXRlbXBsYXRlLWNlbGwtdDEnLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSBsaWJNYUdyaWRDZWxsVGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIERhdGFHcmlkVGVtcGxhdGVDZWxsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBkYXRhOiBhbnk7XG4gIEBJbnB1dCgpIHByb3A6IGFueTtcbiAgQElucHV0KCkgY29sOiBhbnk7XG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUeXBlPGFueT47XG4gIEBJbnB1dCgpIG15R3JpZDogTWFEYXRhR3JpZENvbXBvbmVudDtcbiAgQE91dHB1dCgpIGRhdGFDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+Oy8vID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBWaWV3Q2hpbGQoTWFHcmlkQ2VsbFRlbXBsYXRlRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSBsaWJNYUdyaWRDZWxsVGVtcGxhdGU6IE1hR3JpZENlbGxUZW1wbGF0ZURpcmVjdGl2ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ0RhdGFHcmlkVGVtcGxhdGVDZWxsQ29tcG9uZW50IGMnLHRoaXMudGVtcGxhdGUsIHRoaXMucHJvcCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBcbiAgICBpZiAoIXRoaXMudGVtcGxhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IERhdGFHcmlkQ2VsbEl0ZW1Db21wb25lbnQodGhpcy50ZW1wbGF0ZSwgdGhpcy5kYXRhLCB0aGlzLmNvbCwgdGhpcy5wcm9wLCB0aGlzLm15R3JpZCk7XG5cbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50LmNvbXBvbmVudCk7XG4gICAgaWYgKCF0aGlzLmxpYk1hR3JpZENlbGxUZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB2aWV3Q29udGFpbmVyUmVmID0gdGhpcy5saWJNYUdyaWRDZWxsVGVtcGxhdGUudmlld0NvbnRhaW5lclJlZjtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB2aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudDxEYXRhR3JpZENlbGxJdGVtQ29tcG9uZW50Pihjb21wb25lbnRGYWN0b3J5KTtcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuZGF0YSA9IGNvbXBvbmVudC5kYXRhO1xuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5wcm9wID0gY29tcG9uZW50LnByb3A7XG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmNvbCA9IGNvbXBvbmVudC5jb2w7XG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmRhdGFDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UubXlHcmlkID0gY29tcG9uZW50Lm15R3JpZDtcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuZGF0YUNoYW5nZT8uc3Vic2NyaWJlKGQgPT4ge1xuICAgICAgaWYgKGNvbXBvbmVudFJlZi5pbnN0YW5jZS5teUdyaWQgIT0gbnVsbCkge1xuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UubXlHcmlkLmRhdGFDaGFuZ2UoZCk7XG5cbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG59XG4iXX0=