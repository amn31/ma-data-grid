import { ComponentFactoryResolver, Input, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { MaGridCellTemplateDirective } from '../../directives/ma-grid-cell-template.directive';
import { DataGridCellItemComponent } from '../data-grid-cell-item/data-grid-cell-item.component';
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
    template: [{ type: Input }],
    libMaGridCellTemplate: [{ type: ViewChild, args: [MaGridCellTemplateDirective, { static: true },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLXRlbXBsYXRlLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkQ6L015SG9tZS9hbmRyb2lkL3dvcmtzcGFjZS9naXQvbWEtbmctZGF0YWdyaWQvcHJvamVjdHMvbWEtZGF0YS1ncmlkL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGEtZ3JpZC10ZW1wbGF0ZS1jZWxsL2RhdGEtZ3JpZC10ZW1wbGF0ZS1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzRSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBTWpHLE1BQU0sT0FBTyw2QkFBNkI7SUFNeEMsWUFBb0Isd0JBQWtEO1FBQWxELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDcEUsZ0VBQWdFO0lBQ2xFLENBQUM7SUFFRCxRQUFRO1FBQ04sR0FBRztRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELE1BQU0sU0FBUyxHQUFHLElBQUkseUJBQXlCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekUsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BHLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDL0IsT0FBTztTQUNSO1FBQ0QsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUM7UUFDckUsTUFBTSxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsZUFBZSxDQUE0QixnQkFBZ0IsQ0FBQyxDQUFDO1FBQ25HLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDOUMsQ0FBQzs7O1lBNUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxRQUFRLEVBQUUsbURBQW1EO2FBQzlEOzs7WUFUUSx3QkFBd0I7OzttQkFZOUIsS0FBSzt1QkFDTCxLQUFLO29DQUNMLFNBQVMsU0FBQywyQkFBMkIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYUdyaWRDZWxsVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL21hLWdyaWQtY2VsbC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGF0YUdyaWRDZWxsSXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL2RhdGEtZ3JpZC1jZWxsLWl0ZW0vZGF0YS1ncmlkLWNlbGwtaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYS1kYXRhLWdyaWQtdGVtcGxhdGUtY2VsbC10MScsXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlIGxpYk1hR3JpZENlbGxUZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRGF0YUdyaWRUZW1wbGF0ZUNlbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcbiAgQElucHV0KCkgdGVtcGxhdGU6IFR5cGU8YW55PjtcbiAgQFZpZXdDaGlsZChNYUdyaWRDZWxsVGVtcGxhdGVEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIGxpYk1hR3JpZENlbGxUZW1wbGF0ZTogTWFHcmlkQ2VsbFRlbXBsYXRlRGlyZWN0aXZlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHsgXG4gICAgLy8gY29uc29sZS5sb2coJ0RhdGFHcmlkVGVtcGxhdGVDZWxsQ29tcG9uZW50IGMnLHRoaXMudGVtcGxhdGUpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gXG4gICAgaWYgKCF0aGlzLnRlbXBsYXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBEYXRhR3JpZENlbGxJdGVtQ29tcG9uZW50KHRoaXMudGVtcGxhdGUsdGhpcy5kYXRhKTtcblxuICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQuY29tcG9uZW50KTtcbiAgICBpZiAoIXRoaXMubGliTWFHcmlkQ2VsbFRlbXBsYXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHZpZXdDb250YWluZXJSZWYgPSB0aGlzLmxpYk1hR3JpZENlbGxUZW1wbGF0ZS52aWV3Q29udGFpbmVyUmVmO1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50PERhdGFHcmlkQ2VsbEl0ZW1Db21wb25lbnQ+KGNvbXBvbmVudEZhY3RvcnkpO1xuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5kYXRhID0gY29tcG9uZW50LmRhdGE7XG4gIH1cbn1cbiJdfQ==