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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLWNlbGwtYm9vbGVhbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiQzovTXlUZW1wL25nMTBhL3Byb2plY3RzL21hLWRhdGEtZ3JpZC9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kYXRhLWdyaWQtY2VsbC1ib29sZWFuL2RhdGEtZ3JpZC1jZWxsLWJvb2xlYW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQVN4RSxNQUFNLE9BQU8sNEJBQTRCO0lBT3ZDO1FBRkEsU0FBSSxHQUFXLEVBQUUsQ0FBQztJQUVGLENBQUM7SUFFakIsUUFBUTtRQUNOLHlDQUF5QztRQUN6QywyQ0FBMkM7UUFDM0MsNEJBQTRCO1FBQzVCLG1EQUFtRDtRQUNuRCwwQ0FBMEM7UUFDMUMsSUFBSTtJQUNOLENBQUM7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsK0ZBQStGO2dCQUMvRixRQUFRLEVBQUUsK01BQStNO2FBQzFOOzs7O21CQUdFLEtBQUs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZENlbGwgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL21hLWRhdGEtZ3JpZC1jZWxsJztcbmltcG9ydCB7IE1hRGF0YUdyaWRDb2x1bW5PcHRpb25zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9tYS1kYXRhLWdyaWQtb3B0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hLWRhdGEtZ3JpZC1jZWxsLWJvb2xlYW4nLFxuICAvL3RlbXBsYXRlOiAnPGRpdiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlclwiPjxpIGNsYXNzPVwidGlueSBtYXRlcmlhbC1pY29uc1wiPnt7aWNvbn19PC9pPjwvZGl2PidcbiAgdGVtcGxhdGU6ICc8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyXCI+PGkgKm5nSWY9XCJkYXRhW2NvbC5wcm9wXSA9PT0gdHJ1ZVwiIGNsYXNzPVwidGlueSBtYXRlcmlhbC1pY29uc1wiPmNoZWNrX2JveDwvaT48aSAqbmdJZj1cImRhdGFbY29sLnByb3BdID09PSBmYWxzZVwiIGNsYXNzPVwidGlueSBtYXRlcmlhbC1pY29uc1wiPmNoZWNrX2JveF9vdXRsaW5lX2JsYW5rPC9pPjwvZGl2Pidcbn0pXG5leHBvcnQgY2xhc3MgRGF0YUdyaWRDZWxsQm9vbGVhbkNvbXBvbmVudCBpbXBsZW1lbnRzIE1hRGF0YUdyaWRDZWxsLCBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcbiAgQElucHV0KCkgY29sOiBNYURhdGFHcmlkQ29sdW1uT3B0aW9ucztcblxuICBpY29uOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0YVt0aGlzLmNvbC5wcm9wXSk7XG4gICAgLy8gaWYgKHRoaXMuZGF0YVt0aGlzLmNvbC5wcm9wXSA9PT0gdHJ1ZSkge1xuICAgIC8vICAgdGhpcy5pY29uID0gJ2NoZWNrX2JveCdcbiAgICAvLyB9IGVsc2UgaWYgKHRoaXMuZGF0YVt0aGlzLmNvbC5wcm9wXSA9PT0gZmFsc2UpIHtcbiAgICAvLyAgIHRoaXMuaWNvbiA9ICdjaGVja19ib3hfb3V0bGluZV9ibGFuaydcbiAgICAvLyB9XG4gIH1cblxufVxuIl19