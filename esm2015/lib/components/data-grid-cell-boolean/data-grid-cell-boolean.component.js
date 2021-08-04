import { Component, Input } from '@angular/core';
export class DataGridCellBooleanComponent {
    constructor() {
        this.icon = '';
    }
    ngOnInit() {
        // console.log(this.data[this.col.prop]);
        // if (this.data[this.col.prop] === true) {
        //   this.icon = 'check_box'
        // } else if (this.data[this.col.prop] === false) {
        //   this.icon = 'check_box_outline_blank'
        // }
    }
}
DataGridCellBooleanComponent.decorators = [
    { type: Component, args: [{
                selector: 'ma-data-grid-cell-boolean',
                //template: '<div style="text-align: center"><i class="tiny material-icons">{{icon}}</i></div>'
                template: '<div style="text-align: center"><i *ngIf="data[col.prop] === true" class="tiny material-icons">check_box</i><i *ngIf="data[col.prop] === false" class="tiny material-icons">check_box_outline_blank</i></div>'
            },] }
];
DataGridCellBooleanComponent.ctorParameters = () => [];
DataGridCellBooleanComponent.propDecorators = {
    data: [{ type: Input }],
    col: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLWNlbGwtYm9vbGVhbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiRDovTXlIb21lL2FuZHJvaWQvd29ya3NwYWNlL2dpdC9tYS1uZy1kYXRhZ3JpZC9wcm9qZWN0cy9tYS1kYXRhLWdyaWQvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0YS1ncmlkLWNlbGwtYm9vbGVhbi9kYXRhLWdyaWQtY2VsbC1ib29sZWFuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFTeEUsTUFBTSxPQUFPLDRCQUE0QjtJQU92QztRQUZBLFNBQUksR0FBVyxFQUFFLENBQUM7SUFFRixDQUFDO0lBRWpCLFFBQVE7UUFDTix5Q0FBeUM7UUFDekMsMkNBQTJDO1FBQzNDLDRCQUE0QjtRQUM1QixtREFBbUQ7UUFDbkQsMENBQTBDO1FBQzFDLElBQUk7SUFDTixDQUFDOzs7WUFyQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLCtGQUErRjtnQkFDL0YsUUFBUSxFQUFFLCtNQUErTTthQUMxTjs7OzttQkFHRSxLQUFLO2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hRGF0YUdyaWRDZWxsIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9tYS1kYXRhLWdyaWQtY2VsbCc7XG5pbXBvcnQgeyBNYURhdGFHcmlkQ29sdW1uT3B0aW9ucyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvbWEtZGF0YS1ncmlkLW9wdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYS1kYXRhLWdyaWQtY2VsbC1ib29sZWFuJyxcbiAgLy90ZW1wbGF0ZTogJzxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXJcIj48aSBjbGFzcz1cInRpbnkgbWF0ZXJpYWwtaWNvbnNcIj57e2ljb259fTwvaT48L2Rpdj4nXG4gIHRlbXBsYXRlOiAnPGRpdiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlclwiPjxpICpuZ0lmPVwiZGF0YVtjb2wucHJvcF0gPT09IHRydWVcIiBjbGFzcz1cInRpbnkgbWF0ZXJpYWwtaWNvbnNcIj5jaGVja19ib3g8L2k+PGkgKm5nSWY9XCJkYXRhW2NvbC5wcm9wXSA9PT0gZmFsc2VcIiBjbGFzcz1cInRpbnkgbWF0ZXJpYWwtaWNvbnNcIj5jaGVja19ib3hfb3V0bGluZV9ibGFuazwvaT48L2Rpdj4nXG59KVxuZXhwb3J0IGNsYXNzIERhdGFHcmlkQ2VsbEJvb2xlYW5Db21wb25lbnQgaW1wbGVtZW50cyBNYURhdGFHcmlkQ2VsbCwgT25Jbml0IHtcblxuICBASW5wdXQoKSBkYXRhOiBhbnk7XG4gIEBJbnB1dCgpIGNvbDogTWFEYXRhR3JpZENvbHVtbk9wdGlvbnM7XG5cbiAgaWNvbjogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGFbdGhpcy5jb2wucHJvcF0pO1xuICAgIC8vIGlmICh0aGlzLmRhdGFbdGhpcy5jb2wucHJvcF0gPT09IHRydWUpIHtcbiAgICAvLyAgIHRoaXMuaWNvbiA9ICdjaGVja19ib3gnXG4gICAgLy8gfSBlbHNlIGlmICh0aGlzLmRhdGFbdGhpcy5jb2wucHJvcF0gPT09IGZhbHNlKSB7XG4gICAgLy8gICB0aGlzLmljb24gPSAnY2hlY2tfYm94X291dGxpbmVfYmxhbmsnXG4gICAgLy8gfVxuICB9XG5cbn1cbiJdfQ==