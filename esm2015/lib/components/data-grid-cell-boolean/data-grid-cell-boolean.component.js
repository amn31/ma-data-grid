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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLWNlbGwtYm9vbGVhbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiRDovTXlIb21lL2FuZHJvaWQvd29ya3NwYWNlL2dpdC9tYS1uZy1kYXRhLWdyaWQvcHJvamVjdHMvbWEtZGF0YS1ncmlkL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGEtZ3JpZC1jZWxsLWJvb2xlYW4vZGF0YS1ncmlkLWNlbGwtYm9vbGVhbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBU3hFLE1BQU0sT0FBTyw0QkFBNEI7SUFPdkM7UUFGQSxTQUFJLEdBQVcsRUFBRSxDQUFDO0lBRUYsQ0FBQztJQUVqQixRQUFRO1FBQ04seUNBQXlDO1FBQ3pDLDJDQUEyQztRQUMzQyw0QkFBNEI7UUFDNUIsbURBQW1EO1FBQ25ELDBDQUEwQztRQUMxQyxJQUFJO0lBQ04sQ0FBQzs7O1lBckJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQywrRkFBK0Y7Z0JBQy9GLFFBQVEsRUFBRSwrTUFBK007YUFDMU47Ozs7bUJBR0UsS0FBSztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYURhdGFHcmlkQ2VsbCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvbWEtZGF0YS1ncmlkLWNlbGwnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZENvbHVtbk9wdGlvbnMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL21hLWRhdGEtZ3JpZC1vcHRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWEtZGF0YS1ncmlkLWNlbGwtYm9vbGVhbicsXG4gIC8vdGVtcGxhdGU6ICc8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyXCI+PGkgY2xhc3M9XCJ0aW55IG1hdGVyaWFsLWljb25zXCI+e3tpY29ufX08L2k+PC9kaXY+J1xuICB0ZW1wbGF0ZTogJzxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXJcIj48aSAqbmdJZj1cImRhdGFbY29sLnByb3BdID09PSB0cnVlXCIgY2xhc3M9XCJ0aW55IG1hdGVyaWFsLWljb25zXCI+Y2hlY2tfYm94PC9pPjxpICpuZ0lmPVwiZGF0YVtjb2wucHJvcF0gPT09IGZhbHNlXCIgY2xhc3M9XCJ0aW55IG1hdGVyaWFsLWljb25zXCI+Y2hlY2tfYm94X291dGxpbmVfYmxhbms8L2k+PC9kaXY+J1xufSlcbmV4cG9ydCBjbGFzcyBEYXRhR3JpZENlbGxCb29sZWFuQ29tcG9uZW50IGltcGxlbWVudHMgTWFEYXRhR3JpZENlbGwsIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgZGF0YTogYW55O1xuICBASW5wdXQoKSBjb2w6IE1hRGF0YUdyaWRDb2x1bW5PcHRpb25zO1xuXG4gIGljb246IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5kYXRhW3RoaXMuY29sLnByb3BdKTtcbiAgICAvLyBpZiAodGhpcy5kYXRhW3RoaXMuY29sLnByb3BdID09PSB0cnVlKSB7XG4gICAgLy8gICB0aGlzLmljb24gPSAnY2hlY2tfYm94J1xuICAgIC8vIH0gZWxzZSBpZiAodGhpcy5kYXRhW3RoaXMuY29sLnByb3BdID09PSBmYWxzZSkge1xuICAgIC8vICAgdGhpcy5pY29uID0gJ2NoZWNrX2JveF9vdXRsaW5lX2JsYW5rJ1xuICAgIC8vIH1cbiAgfVxuXG59XG4iXX0=