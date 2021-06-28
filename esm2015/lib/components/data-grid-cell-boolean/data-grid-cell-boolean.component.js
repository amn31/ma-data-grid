import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class DataGridCellBooleanComponent {
    constructor() {
        this.icon = '';
    }
    ngOnInit() {
        // console.log(this.data[this.col.prop]);
        if (this.data[this.col.prop] === true) {
            this.icon = 'check_box';
        }
        else if (this.data[this.col.prop] === false) {
            this.icon = 'check_box_outline_blank';
        }
    }
}
DataGridCellBooleanComponent.ɵfac = function DataGridCellBooleanComponent_Factory(t) { return new (t || DataGridCellBooleanComponent)(); };
DataGridCellBooleanComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DataGridCellBooleanComponent, selectors: [["ma-data-grid-cell-boolean"]], inputs: { data: "data", col: "col" }, decls: 3, vars: 1, consts: [[2, "text-align", "center"], [1, "tiny", "material-icons"]], template: function DataGridCellBooleanComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "i", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.icon);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DataGridCellBooleanComponent, [{
        type: Component,
        args: [{
                selector: 'ma-data-grid-cell-boolean',
                template: '<div style="text-align: center"><i class="tiny material-icons">{{icon}}</i></div>'
            }]
    }], function () { return []; }, { data: [{
            type: Input
        }], col: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLWNlbGwtYm9vbGVhbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiRDovTXlIb21lL2FuZHJvaWQvd29ya3NwYWNlL2dpdC9tYS1uZy1kYXRhZ3JpZC9wcm9qZWN0cy9tYS1kYXRhLWdyaWQvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0YS1ncmlkLWNlbGwtYm9vbGVhbi9kYXRhLWdyaWQtY2VsbC1ib29sZWFuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7O0FBU3hFLE1BQU0sT0FBTyw0QkFBNEI7SUFPdkM7UUFGQSxTQUFJLEdBQVcsRUFBRSxDQUFDO0lBRUYsQ0FBQztJQUVqQixRQUFRO1FBQ04seUNBQXlDO1FBQ3pDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQTtTQUN4QjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUM3QyxJQUFJLENBQUMsSUFBSSxHQUFHLHlCQUF5QixDQUFBO1NBQ3RDO0lBQ0gsQ0FBQzs7d0dBaEJVLDRCQUE0QjtpRUFBNUIsNEJBQTRCO1FBSDVCLDhCQUFnQztRQUFBLDRCQUErQjtRQUFBLFlBQVE7UUFBQSxpQkFBSTtRQUFBLGlCQUFNOztRQUFsQixlQUFRO1FBQVIsOEJBQVE7O2tEQUd2RSw0QkFBNEI7Y0FMeEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFFBQVEsRUFBRSxtRkFBbUY7YUFFOUY7c0NBR1UsSUFBSTtrQkFBWixLQUFLO1lBQ0csR0FBRztrQkFBWCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYURhdGFHcmlkQ2VsbCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvbWEtZGF0YS1ncmlkLWNlbGwnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZENvbHVtbk9wdGlvbnMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL21hLWRhdGEtZ3JpZC1vcHRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWEtZGF0YS1ncmlkLWNlbGwtYm9vbGVhbicsXG4gIHRlbXBsYXRlOiAnPGRpdiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlclwiPjxpIGNsYXNzPVwidGlueSBtYXRlcmlhbC1pY29uc1wiPnt7aWNvbn19PC9pPjwvZGl2PidcbiAgXG59KVxuZXhwb3J0IGNsYXNzIERhdGFHcmlkQ2VsbEJvb2xlYW5Db21wb25lbnQgaW1wbGVtZW50cyBNYURhdGFHcmlkQ2VsbCwgT25Jbml0IHtcblxuICBASW5wdXQoKSBkYXRhOiBhbnk7XG4gIEBJbnB1dCgpIGNvbDogTWFEYXRhR3JpZENvbHVtbk9wdGlvbnM7XG5cbiAgaWNvbjogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGFbdGhpcy5jb2wucHJvcF0pO1xuICAgIGlmICh0aGlzLmRhdGFbdGhpcy5jb2wucHJvcF0gPT09IHRydWUpIHtcbiAgICAgIHRoaXMuaWNvbiA9ICdjaGVja19ib3gnXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGFbdGhpcy5jb2wucHJvcF0gPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmljb24gPSAnY2hlY2tfYm94X291dGxpbmVfYmxhbmsnXG4gICAgfVxuICB9XG5cbn1cbiJdfQ==