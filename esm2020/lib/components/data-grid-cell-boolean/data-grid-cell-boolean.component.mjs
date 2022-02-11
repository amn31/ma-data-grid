import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function DataGridCellBooleanComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "i", 2);
    i0.ɵɵtext(1, "check_box");
    i0.ɵɵelementEnd();
} }
function DataGridCellBooleanComponent_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "i", 2);
    i0.ɵɵtext(1, "check_box_outline_blank");
    i0.ɵɵelementEnd();
} }
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
DataGridCellBooleanComponent.ɵfac = function DataGridCellBooleanComponent_Factory(t) { return new (t || DataGridCellBooleanComponent)(); };
DataGridCellBooleanComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataGridCellBooleanComponent, selectors: [["ma-data-grid-cell-boolean"]], inputs: { data: "data", col: "col" }, decls: 3, vars: 2, consts: [[2, "text-align", "center"], ["class", "tiny material-icons", 4, "ngIf"], [1, "tiny", "material-icons"]], template: function DataGridCellBooleanComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, DataGridCellBooleanComponent_i_1_Template, 2, 0, "i", 1);
        i0.ɵɵtemplate(2, DataGridCellBooleanComponent_i_2_Template, 2, 0, "i", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.data[ctx.col.prop] === true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.data[ctx.col.prop] === false);
    } }, directives: [i1.NgIf], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataGridCellBooleanComponent, [{
        type: Component,
        args: [{
                selector: 'ma-data-grid-cell-boolean',
                //template: '<div style="text-align: center"><i class="tiny material-icons">{{icon}}</i></div>'
                template: '<div style="text-align: center"><i *ngIf="data[col.prop] === true" class="tiny material-icons">check_box</i><i *ngIf="data[col.prop] === false" class="tiny material-icons">check_box_outline_blank</i></div>'
            }]
    }], function () { return []; }, { data: [{
            type: Input
        }], col: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLWNlbGwtYm9vbGVhbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYS1kYXRhLWdyaWQvc3JjL2xpYi9jb21wb25lbnRzL2RhdGEtZ3JpZC1jZWxsLWJvb2xlYW4vZGF0YS1ncmlkLWNlbGwtYm9vbGVhbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7O0lBTzNCLDRCQUErRDtJQUFBLHlCQUFTO0lBQUEsaUJBQUk7OztJQUFBLDRCQUFnRTtJQUFBLHVDQUF1QjtJQUFBLGlCQUFJOztBQUVwTixNQUFNLE9BQU8sNEJBQTRCO0lBT3ZDO1FBRkEsU0FBSSxHQUFXLEVBQUUsQ0FBQztJQUVGLENBQUM7SUFFakIsUUFBUTtRQUNOLHlDQUF5QztRQUN6QywyQ0FBMkM7UUFDM0MsNEJBQTRCO1FBQzVCLG1EQUFtRDtRQUNuRCwwQ0FBMEM7UUFDMUMsSUFBSTtJQUNOLENBQUM7O3dHQWhCVSw0QkFBNEI7K0VBQTVCLDRCQUE0QjtRQUY1Qiw4QkFBZ0M7UUFBQSx5RUFBNEU7UUFBQSx5RUFBMkY7UUFBQSxpQkFBTTs7UUFBekssZUFBNkI7UUFBN0Isc0RBQTZCO1FBQStDLGVBQThCO1FBQTlCLHVEQUE4Qjs7dUZBRTlJLDRCQUE0QjtjQUx4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsK0ZBQStGO2dCQUMvRixRQUFRLEVBQUUsK01BQStNO2FBQzFOO3NDQUdVLElBQUk7a0JBQVosS0FBSztZQUNHLEdBQUc7a0JBQVgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZENlbGwgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL21hLWRhdGEtZ3JpZC1jZWxsJztcbmltcG9ydCB7IE1hRGF0YUdyaWRDb2x1bW5PcHRpb25zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9tYS1kYXRhLWdyaWQtb3B0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hLWRhdGEtZ3JpZC1jZWxsLWJvb2xlYW4nLFxuICAvL3RlbXBsYXRlOiAnPGRpdiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlclwiPjxpIGNsYXNzPVwidGlueSBtYXRlcmlhbC1pY29uc1wiPnt7aWNvbn19PC9pPjwvZGl2PidcbiAgdGVtcGxhdGU6ICc8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyXCI+PGkgKm5nSWY9XCJkYXRhW2NvbC5wcm9wXSA9PT0gdHJ1ZVwiIGNsYXNzPVwidGlueSBtYXRlcmlhbC1pY29uc1wiPmNoZWNrX2JveDwvaT48aSAqbmdJZj1cImRhdGFbY29sLnByb3BdID09PSBmYWxzZVwiIGNsYXNzPVwidGlueSBtYXRlcmlhbC1pY29uc1wiPmNoZWNrX2JveF9vdXRsaW5lX2JsYW5rPC9pPjwvZGl2Pidcbn0pXG5leHBvcnQgY2xhc3MgRGF0YUdyaWRDZWxsQm9vbGVhbkNvbXBvbmVudCBpbXBsZW1lbnRzIE1hRGF0YUdyaWRDZWxsLCBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcbiAgQElucHV0KCkgY29sOiBNYURhdGFHcmlkQ29sdW1uT3B0aW9ucztcblxuICBpY29uOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0YVt0aGlzLmNvbC5wcm9wXSk7XG4gICAgLy8gaWYgKHRoaXMuZGF0YVt0aGlzLmNvbC5wcm9wXSA9PT0gdHJ1ZSkge1xuICAgIC8vICAgdGhpcy5pY29uID0gJ2NoZWNrX2JveCdcbiAgICAvLyB9IGVsc2UgaWYgKHRoaXMuZGF0YVt0aGlzLmNvbC5wcm9wXSA9PT0gZmFsc2UpIHtcbiAgICAvLyAgIHRoaXMuaWNvbiA9ICdjaGVja19ib3hfb3V0bGluZV9ibGFuaydcbiAgICAvLyB9XG4gIH1cblxufVxuIl19