import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = ["myInputSelectorBox"];
export class DataGridCellSelectorComponent {
    constructor() {
        this.title = '';
        this.dataChange = new EventEmitter();
        this.isHeader = false;
    }
    ngOnInit() {
        /* Cas du header pas de prop */
        if (this.isHeader) {
            this.title = this.col.title;
        }
        else {
            this.title = '';
        }
        if (this.data && (this.data[this.prop] == true || this.data[this.prop] == 1 || this.data[this.prop] == "on")) {
            this.data[this.prop] = true;
        }
    }
    onChangeCheckbox() {
        if (this.isHeader) {
            for (let row of this.data) {
                row[this.prop] = this.myInputSelectorBox.nativeElement.checked;
            }
        }
        else {
            this.data[this.prop] = this.myInputSelectorBox.nativeElement.checked;
            // console.log('EMIT SELECTOR dataChange', this.data);
        }
        this.dataChange.emit(this.data);
        if (this.myGrid != null) {
            this.myGrid._dataSelector(this.data, this.prop);
        }
    }
    ngOnChanges(changes) {
        // console.log('SELECTOR ngOnChanges',changes)
    }
}
DataGridCellSelectorComponent.ɵfac = function DataGridCellSelectorComponent_Factory(t) { return new (t || DataGridCellSelectorComponent)(); };
DataGridCellSelectorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataGridCellSelectorComponent, selectors: [["ma-data-grid-cell-selector"]], viewQuery: function DataGridCellSelectorComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.myInputSelectorBox = _t.first);
    } }, inputs: { data: "data", isHeader: "isHeader", col: "col", prop: "prop", myGrid: "myGrid" }, outputs: { dataChange: "dataChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 5, vars: 1, consts: [["type", "checkbox", 3, "ngModel", "ngModelChange", "change"], ["myInputSelectorBox", ""]], template: function DataGridCellSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵelementStart(1, "label");
        i0.ɵɵelementStart(2, "input", 0, 1);
        i0.ɵɵlistener("ngModelChange", function DataGridCellSelectorComponent_Template_input_ngModelChange_2_listener($event) { return (ctx.data[ctx.col.prop] = $event); })("change", function DataGridCellSelectorComponent_Template_input_change_2_listener() { return ctx.onChangeCheckbox(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "span");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.data[ctx.col.prop]);
    } }, directives: [i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.NgModel], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataGridCellSelectorComponent, [{
        type: Component,
        args: [{ selector: 'ma-data-grid-cell-selector', template: "<span>\n    <!--  [(ngModel)]=\"realValue\" [checked]=\"checked\" -->\n    <label>\n        <input [(ngModel)]=\"data[col.prop]\" #myInputSelectorBox type=\"checkbox\"  (change)=\"onChangeCheckbox()\" />\n        <span></span>\n    </label>\n</span>", styles: [""] }]
    }], function () { return []; }, { myInputSelectorBox: [{
            type: ViewChild,
            args: ["myInputSelectorBox", { static: false }]
        }], dataChange: [{
            type: Output
        }], data: [{
            type: Input
        }], isHeader: [{
            type: Input
        }], col: [{
            type: Input
        }], prop: [{
            type: Input
        }], myGrid: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLWNlbGwtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWEtZGF0YS1ncmlkL3NyYy9saWIvY29tcG9uZW50cy9kYXRhLWdyaWQtY2VsbC1zZWxlY3Rvci9kYXRhLWdyaWQtY2VsbC1zZWxlY3Rvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYS1kYXRhLWdyaWQvc3JjL2xpYi9jb21wb25lbnRzL2RhdGEtZ3JpZC1jZWxsLXNlbGVjdG9yL2RhdGEtZ3JpZC1jZWxsLXNlbGVjdG9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFpQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFTaEksTUFBTSxPQUFPLDZCQUE2QjtJQVd4QztRQVJBLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDVCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUV0QyxhQUFRLEdBQVksS0FBSyxDQUFDO0lBS25CLENBQUM7SUFFakIsUUFBUTtRQUVOLCtCQUErQjtRQUMvQixJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztTQUM3QjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDakI7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQzVHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztTQUM3QjtJQUNILENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUN6QixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO2FBQ2hFO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBQ3JFLHNEQUFzRDtTQUN2RDtRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyw4Q0FBOEM7SUFDaEQsQ0FBQzs7MEdBN0NVLDZCQUE2QjtnRkFBN0IsNkJBQTZCOzs7Ozs7UUNUMUMsNEJBQU07UUFFRiw2QkFBTztRQUNILG1DQUF5RztRQUFsRyxvS0FBNEIsOEZBQWdELHNCQUFrQixJQUFsRTtRQUFuQyxpQkFBeUc7UUFDekcsdUJBQWE7UUFDakIsaUJBQVE7UUFDWixpQkFBTzs7UUFIUSxlQUE0QjtRQUE1QixnREFBNEI7O3VGRE05Qiw2QkFBNkI7Y0FMekMsU0FBUzsyQkFDRSw0QkFBNEI7c0NBTWMsa0JBQWtCO2tCQUFyRSxTQUFTO21CQUFDLG9CQUFvQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUV4QyxVQUFVO2tCQUFuQixNQUFNO1lBQ0UsSUFBSTtrQkFBWixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLEdBQUc7a0JBQVgsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYURhdGFHcmlkQ29sdW1uT3B0aW9ucyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvbWEtZGF0YS1ncmlkLW9wdGlvbnMnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZENvbXBvbmVudCB9IGZyb20gJy4uLy4uL21hLWRhdGEtZ3JpZC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYS1kYXRhLWdyaWQtY2VsbC1zZWxlY3RvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLWdyaWQtY2VsbC1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RhdGEtZ3JpZC1jZWxsLXNlbGVjdG9yLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhR3JpZENlbGxTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBAVmlld0NoaWxkKFwibXlJbnB1dFNlbGVjdG9yQm94XCIsIHsgc3RhdGljOiBmYWxzZSB9KSBteUlucHV0U2VsZWN0b3JCb3g6IEVsZW1lbnRSZWY7XG4gIHRpdGxlOiBzdHJpbmcgPSAnJztcbiAgQE91dHB1dCgpIGRhdGFDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQElucHV0KCkgZGF0YTogYW55O1xuICBASW5wdXQoKSBpc0hlYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBjb2w6IE1hRGF0YUdyaWRDb2x1bW5PcHRpb25zO1xuICBASW5wdXQoKSBwcm9wOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG15R3JpZDogTWFEYXRhR3JpZENvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgLyogQ2FzIGR1IGhlYWRlciBwYXMgZGUgcHJvcCAqL1xuICAgIGlmKHRoaXMuaXNIZWFkZXIpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aGlzLmNvbC50aXRsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aXRsZSA9ICcnO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5kYXRhICYmICh0aGlzLmRhdGFbdGhpcy5wcm9wXSA9PSB0cnVlIHx8IHRoaXMuZGF0YVt0aGlzLnByb3BdID09IDEgfHwgdGhpcy5kYXRhW3RoaXMucHJvcF0gPT0gXCJvblwiKSkge1xuICAgICAgdGhpcy5kYXRhW3RoaXMucHJvcF0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlQ2hlY2tib3goKSB7XG4gICAgaWYodGhpcy5pc0hlYWRlcikge1xuICAgICAgZm9yIChsZXQgcm93IG9mIHRoaXMuZGF0YSkge1xuICAgICAgICByb3dbdGhpcy5wcm9wXSA9IHRoaXMubXlJbnB1dFNlbGVjdG9yQm94Lm5hdGl2ZUVsZW1lbnQuY2hlY2tlZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhW3RoaXMucHJvcF0gPSB0aGlzLm15SW5wdXRTZWxlY3RvckJveC5uYXRpdmVFbGVtZW50LmNoZWNrZWQ7XG4gICAgICAvLyBjb25zb2xlLmxvZygnRU1JVCBTRUxFQ1RPUiBkYXRhQ2hhbmdlJywgdGhpcy5kYXRhKTtcbiAgICB9XG4gICBcbiAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdCh0aGlzLmRhdGEpO1xuICAgIGlmICh0aGlzLm15R3JpZCAhPSBudWxsKSB7XG4gICAgICB0aGlzLm15R3JpZC5fZGF0YVNlbGVjdG9yKHRoaXMuZGF0YSx0aGlzLnByb3ApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAvLyBjb25zb2xlLmxvZygnU0VMRUNUT1IgbmdPbkNoYW5nZXMnLGNoYW5nZXMpXG4gIH1cbn1cbiIsIjxzcGFuPlxuICAgIDwhLS0gIFsobmdNb2RlbCldPVwicmVhbFZhbHVlXCIgW2NoZWNrZWRdPVwiY2hlY2tlZFwiIC0tPlxuICAgIDxsYWJlbD5cbiAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVwiZGF0YVtjb2wucHJvcF1cIiAjbXlJbnB1dFNlbGVjdG9yQm94IHR5cGU9XCJjaGVja2JveFwiICAoY2hhbmdlKT1cIm9uQ2hhbmdlQ2hlY2tib3goKVwiIC8+XG4gICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICA8L2xhYmVsPlxuPC9zcGFuPiJdfQ==