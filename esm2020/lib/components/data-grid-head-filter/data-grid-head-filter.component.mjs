import { EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { DataGridOpFilterComponent } from '../data-grid-op-filter/data-grid-op-filter.component';
import { DataGridPickerDateComponent } from '../data-grid-picker-date/data-grid-picker-date.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../data-grid-op-filter/data-grid-op-filter.component";
import * as i3 from "@angular/forms";
import * as i4 from "../data-grid-picker-date/data-grid-picker-date.component";
function DataGridHeadFilterComponent_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 3);
    i0.ɵɵelementStart(1, "ma-data-grid-op-filter", 4, 5);
    i0.ɵɵlistener("changeEmptyOperator", function DataGridHeadFilterComponent_td_2_Template_ma_data_grid_op_filter_changeEmptyOperator_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4._changeEmptyOperator(); })("changeOperator", function DataGridHeadFilterComponent_td_2_Template_ma_data_grid_op_filter_changeOperator_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6._changeOperator($event, false); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("col", ctx_r0.col);
} }
function DataGridHeadFilterComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 6);
    i0.ɵɵelementStart(1, "input", 7);
    i0.ɵɵlistener("ngModelChange", function DataGridHeadFilterComponent_td_3_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.filter_value = $event; })("keyup", function DataGridHeadFilterComponent_td_3_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9._changeOperator($event, true); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r1.filter_value);
} }
function DataGridHeadFilterComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 6);
    i0.ɵɵelementStart(1, "ma-data-grid-datepicker", 8, 9);
    i0.ɵɵlistener("changePicker", function DataGridHeadFilterComponent_td_4_Template_ma_data_grid_datepicker_changePicker_1_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11._changeDate($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleMap(ctx_r2.astuce_datapicker);
} }
export class DataGridHeadFilterComponent {
    constructor() {
        this.filter_value = '';
        this.changeHeaderFilter = new EventEmitter();
        this.astuce_datapicker = 'display: none';
    }
    ngOnInit() {
        if (this.col.dataType == 'date') {
            this.astuce_datapicker = 'display: block';
        }
    }
    getFilter() {
        if (this.filter_value != '' ||
            this.col.dataType == 'boolean' ||
            this.col.dataType == 'bool' || this.col.headFilter != null) {
            let o = this.op_filter.getConditions(this.filter_value);
            // console.log('getConditions '+this.col.prop+ " o",o)
            return o;
        }
        return null;
    }
    _changeEmptyOperator() {
        // console.log("_changeEmptyOperator");
        this.madate_picker.setDate(null);
    }
    _changeOperator(event, fromInputKey) {
        // 
        console.log('RECEIVE CHANGE OP', this.col);
        // console.log('EMIT changeHeaderFilter');
        if (fromInputKey)
            this.op_filter.setFirstChoice();
        this.changeHeaderFilter.emit({
            prop: this.col,
            value: this.filter_value,
            //condition: [ this.col.prop, this.op_filter.value, this.filter_value ]
        });
    }
    _changeDate(date) {
        this.filter_value = '';
        try {
            this.filter_value = date.toISOString();
        }
        catch (e) {
        }
        // console.log("_changeDate",this.filter_value);
        this.changeHeaderFilter.emit({
            prop: this.col,
            value: this.filter_value,
            //condition: [ this.col.prop, this.op_filter.value, this.filter_value ]
        });
    }
}
DataGridHeadFilterComponent.ɵfac = function DataGridHeadFilterComponent_Factory(t) { return new (t || DataGridHeadFilterComponent)(); };
DataGridHeadFilterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataGridHeadFilterComponent, selectors: [["ma-data-grid-head-filter"]], viewQuery: function DataGridHeadFilterComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(DataGridOpFilterComponent, 7);
        i0.ɵɵviewQuery(DataGridPickerDateComponent, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.op_filter = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.madate_picker = _t.first);
    } }, inputs: { filter_value: "filter_value", col: "col" }, outputs: { changeHeaderFilter: "changeHeaderFilter" }, decls: 5, vars: 3, consts: [["class", "header_filter_op", 4, "ngIf"], ["class", "header_filter", 4, "ngIf"], ["class", "header_filter", 3, "style", 4, "ngIf"], [1, "header_filter_op"], [3, "col", "changeEmptyOperator", "changeOperator"], ["op_filter", ""], [1, "header_filter"], [1, "header_filter", 3, "ngModel", "ngModelChange", "keyup"], ["type", "date", 3, "changePicker"], ["madate_picker", ""]], template: function DataGridHeadFilterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table");
        i0.ɵɵelementStart(1, "tr");
        i0.ɵɵtemplate(2, DataGridHeadFilterComponent_td_2_Template, 3, 1, "td", 0);
        i0.ɵɵtemplate(3, DataGridHeadFilterComponent_td_3_Template, 2, 1, "td", 1);
        i0.ɵɵtemplate(4, DataGridHeadFilterComponent_td_4_Template, 3, 2, "td", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.col.filter !== false);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.col.filter !== false && ctx.col.dataType != "date" && ctx.col.dataType != "bool" && ctx.col.dataType != "boolean" && (!ctx.col.headFilter || ctx.col.headFilter.length == 0));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.col.filter !== false);
    } }, directives: [i1.NgIf, i2.DataGridOpFilterComponent, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.DataGridPickerDateComponent], styles: ["input.header_filter[_ngcontent-%COMP%]{background-color:#e8f5f8;margin:0 0 0 -5px;height:1.2rem;border:1px inset;border-color:#9e9e9e}  .ma-data-grid-datepicker{height:1.2rem;max-height:1.2rem}td.header_filter[_ngcontent-%COMP%]{padding:1px 1px 1px 5px}td.header_filter_op[_ngcontent-%COMP%]{padding:1px 1px 1px 0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataGridHeadFilterComponent, [{
        type: Component,
        args: [{ selector: 'ma-data-grid-head-filter', template: "<table>\n    <tr>\n        <td *ngIf=\"col.filter !== false\" class=\"header_filter_op\" >\n            <ma-data-grid-op-filter #op_filter [col]=\"col\" (changeEmptyOperator)=\"_changeEmptyOperator()\" (changeOperator)=\"_changeOperator($event,false)\"></ma-data-grid-op-filter>\n        </td>\n        <td class=\"header_filter\" *ngIf=\"col.filter !== false && col.dataType != 'date' && col.dataType != 'bool' && col.dataType != 'boolean' && (!col.headFilter || col.headFilter.length == 0)\">\n            <input class=\"header_filter\" [(ngModel)]=\"filter_value\" (keyup)=\"_changeOperator($event,true)\" />\n        </td>\n        <td *ngIf=\"col.filter !== false\" class=\"header_filter\" [style]=\"astuce_datapicker\" >\n            <ma-data-grid-datepicker #madate_picker type=\"date\" (changePicker)=\"_changeDate($event)\"></ma-data-grid-datepicker>\n        </td>\n    </tr>\n</table>", styles: ["input.header_filter{background-color:#e8f5f8;margin:0 0 0 -5px;height:1.2rem;border:1px inset;border-color:#9e9e9e}::ng-deep .ma-data-grid-datepicker{height:1.2rem;max-height:1.2rem}td.header_filter{padding:1px 1px 1px 5px}td.header_filter_op{padding:1px 1px 1px 0}\n"] }]
    }], function () { return []; }, { filter_value: [{
            type: Input
        }], col: [{
            type: Input
        }], changeHeaderFilter: [{
            type: Output
        }], op_filter: [{
            type: ViewChild,
            args: [DataGridOpFilterComponent, { static: true }]
        }], madate_picker: [{
            type: ViewChild,
            args: [DataGridPickerDateComponent, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLWhlYWQtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hLWRhdGEtZ3JpZC9zcmMvbGliL2NvbXBvbmVudHMvZGF0YS1ncmlkLWhlYWQtZmlsdGVyL2RhdGEtZ3JpZC1oZWFkLWZpbHRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYS1kYXRhLWdyaWQvc3JjL2xpYi9jb21wb25lbnRzL2RhdGEtZ3JpZC1oZWFkLWZpbHRlci9kYXRhLWdyaWQtaGVhZC1maWx0ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDOzs7Ozs7OztJQ0YvRiw2QkFBMkQ7SUFDdkQsb0RBQStJO0lBQWhHLG1OQUF1Qiw2QkFBc0IsSUFBQyxrTUFBbUIsK0JBQXVCLEtBQUssQ0FBQyxJQUFoRDtJQUFrRCxpQkFBeUI7SUFDNUssaUJBQUs7OztJQURrQyxlQUFXO0lBQVgsZ0NBQVc7Ozs7SUFFbEQsNkJBQTJMO0lBQ3ZMLGdDQUFpRztJQUFwRSw0TkFBMEIsK0pBQVUsK0JBQXVCLElBQUksQ0FBQyxJQUF0QztJQUF2RCxpQkFBaUc7SUFDckcsaUJBQUs7OztJQUQ0QixlQUEwQjtJQUExQiw2Q0FBMEI7Ozs7SUFFM0QsNkJBQW9GO0lBQ2hGLHFEQUF5RjtJQUFyQyw4TUFBZ0IsMkJBQW1CLElBQUM7SUFBQyxpQkFBMEI7SUFDdkgsaUJBQUs7OztJQUZrRCx1Q0FBMkI7O0FERzFGLE1BQU0sT0FBTywyQkFBMkI7SUFTdEM7UUFQUyxpQkFBWSxHQUFZLEVBQUUsQ0FBQztRQUUxQix1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBR3ZELHNCQUFpQixHQUFXLGVBQWUsQ0FBQztJQUU1QixDQUFDO0lBRWpCLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLE1BQU0sRUFBRTtZQUMvQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLFNBQVM7WUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLElBQUksRUFBRTtZQUU5RCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDeEQsc0RBQXNEO1lBQ3RELE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxvQkFBb0I7UUFDbEIsdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxlQUFlLENBQUMsS0FBSyxFQUFDLFlBQVk7UUFFaEMsR0FBRztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3pDLDBDQUEwQztRQUMxQyxJQUFJLFlBQVk7WUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7WUFDM0IsSUFBSSxFQUFDLElBQUksQ0FBQyxHQUFHO1lBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQ3hCLHVFQUF1RTtTQUN4RSxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLElBQUk7UUFFZCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJO1lBQ0YsSUFBSSxDQUFDLFlBQVksR0FBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FFdkM7UUFBQyxPQUFPLENBQUMsRUFBRTtTQUVYO1FBRUQsZ0RBQWdEO1FBQ2hELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7WUFDM0IsSUFBSSxFQUFDLElBQUksQ0FBQyxHQUFHO1lBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQ3hCLHVFQUF1RTtTQUN4RSxDQUFDLENBQUM7SUFDTCxDQUFDOztzR0FoRVUsMkJBQTJCOzhFQUEzQiwyQkFBMkI7dUJBSzNCLHlCQUF5Qjt1QkFDekIsMkJBQTJCOzs7Ozs7UUNqQnhDLDZCQUFPO1FBQ0gsMEJBQUk7UUFDQSwwRUFFSztRQUNMLDBFQUVLO1FBQ0wsMEVBRUs7UUFDVCxpQkFBSztRQUNULGlCQUFROztRQVZLLGVBQTBCO1FBQTFCLCtDQUEwQjtRQUdKLGVBQThKO1FBQTlKLHVNQUE4SjtRQUdwTCxlQUEwQjtRQUExQiwrQ0FBMEI7O3VGREcxQiwyQkFBMkI7Y0FMdkMsU0FBUzsyQkFDRSwwQkFBMEI7c0NBTTNCLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxHQUFHO2tCQUFYLEtBQUs7WUFDSSxrQkFBa0I7a0JBQTNCLE1BQU07WUFDaUQsU0FBUztrQkFBaEUsU0FBUzttQkFBQyx5QkFBeUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDSSxhQUFhO2tCQUF0RSxTQUFTO21CQUFDLDJCQUEyQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZENvbHVtbk9wdGlvbnMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL21hLWRhdGEtZ3JpZC1vcHRpb25zJztcbmltcG9ydCB7IERhdGFHcmlkT3BGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuLi9kYXRhLWdyaWQtb3AtZmlsdGVyL2RhdGEtZ3JpZC1vcC1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFHcmlkUGlja2VyRGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uL2RhdGEtZ3JpZC1waWNrZXItZGF0ZS9kYXRhLWdyaWQtcGlja2VyLWRhdGUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWEtZGF0YS1ncmlkLWhlYWQtZmlsdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtZ3JpZC1oZWFkLWZpbHRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RhdGEtZ3JpZC1oZWFkLWZpbHRlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0YUdyaWRIZWFkRmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBmaWx0ZXJfdmFsdWUgOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgY29sOiBNYURhdGFHcmlkQ29sdW1uT3B0aW9ucztcbiAgQE91dHB1dCgpIGNoYW5nZUhlYWRlckZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAVmlld0NoaWxkKERhdGFHcmlkT3BGaWx0ZXJDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIG9wX2ZpbHRlcjogRGF0YUdyaWRPcEZpbHRlckNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZChEYXRhR3JpZFBpY2tlckRhdGVDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIG1hZGF0ZV9waWNrZXI6IERhdGFHcmlkUGlja2VyRGF0ZUNvbXBvbmVudDtcbiAgYXN0dWNlX2RhdGFwaWNrZXI6IHN0cmluZyA9ICdkaXNwbGF5OiBub25lJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbC5kYXRhVHlwZSA9PSAnZGF0ZScpIHtcbiAgICAgIHRoaXMuYXN0dWNlX2RhdGFwaWNrZXIgPSAnZGlzcGxheTogYmxvY2snO1xuICAgIH1cbiAgfVxuXG4gIGdldEZpbHRlciAoKSB7XG4gICAgaWYgKHRoaXMuZmlsdGVyX3ZhbHVlICE9ICcnIHx8IFxuICAgICAgICB0aGlzLmNvbC5kYXRhVHlwZSA9PSAnYm9vbGVhbicgfHwgXG4gICAgICAgIHRoaXMuY29sLmRhdGFUeXBlID09ICdib29sJyB8fCB0aGlzLmNvbC5oZWFkRmlsdGVyICE9IG51bGwpIHtcbiAgICAgXG4gICAgICBsZXQgbyA9IHRoaXMub3BfZmlsdGVyLmdldENvbmRpdGlvbnModGhpcy5maWx0ZXJfdmFsdWUpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2dldENvbmRpdGlvbnMgJyt0aGlzLmNvbC5wcm9wKyBcIiBvXCIsbylcbiAgICAgIHJldHVybiBvO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIF9jaGFuZ2VFbXB0eU9wZXJhdG9yKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiX2NoYW5nZUVtcHR5T3BlcmF0b3JcIik7XG4gICAgdGhpcy5tYWRhdGVfcGlja2VyLnNldERhdGUobnVsbCk7XG4gIH1cblxuICBfY2hhbmdlT3BlcmF0b3IoZXZlbnQsZnJvbUlucHV0S2V5KSB7XG4gICBcbiAgICAvLyBcbiAgICBjb25zb2xlLmxvZygnUkVDRUlWRSBDSEFOR0UgT1AnLHRoaXMuY29sKVxuICAgIC8vIGNvbnNvbGUubG9nKCdFTUlUIGNoYW5nZUhlYWRlckZpbHRlcicpO1xuICAgIGlmIChmcm9tSW5wdXRLZXkpXG4gICAgICB0aGlzLm9wX2ZpbHRlci5zZXRGaXJzdENob2ljZSgpO1xuICAgIHRoaXMuY2hhbmdlSGVhZGVyRmlsdGVyLmVtaXQoe1xuICAgICAgcHJvcDp0aGlzLmNvbCxcbiAgICAgIHZhbHVlOiB0aGlzLmZpbHRlcl92YWx1ZSxcbiAgICAgIC8vY29uZGl0aW9uOiBbIHRoaXMuY29sLnByb3AsIHRoaXMub3BfZmlsdGVyLnZhbHVlLCB0aGlzLmZpbHRlcl92YWx1ZSBdXG4gICAgfSk7XG4gIH1cblxuICBfY2hhbmdlRGF0ZShkYXRlKSB7XG4gICAgXG4gICAgdGhpcy5maWx0ZXJfdmFsdWUgPSAnJztcbiAgICB0cnkge1xuICAgICAgdGhpcy5maWx0ZXJfdmFsdWU9IGRhdGUudG9JU09TdHJpbmcoKTtcbiAgICAgIFxuICAgIH0gY2F0Y2ggKGUpIHtcblxuICAgIH1cbiBcbiAgICAvLyBjb25zb2xlLmxvZyhcIl9jaGFuZ2VEYXRlXCIsdGhpcy5maWx0ZXJfdmFsdWUpO1xuICAgIHRoaXMuY2hhbmdlSGVhZGVyRmlsdGVyLmVtaXQoe1xuICAgICAgcHJvcDp0aGlzLmNvbCxcbiAgICAgIHZhbHVlOiB0aGlzLmZpbHRlcl92YWx1ZSxcbiAgICAgIC8vY29uZGl0aW9uOiBbIHRoaXMuY29sLnByb3AsIHRoaXMub3BfZmlsdGVyLnZhbHVlLCB0aGlzLmZpbHRlcl92YWx1ZSBdXG4gICAgfSk7XG4gIH1cblxufVxuIiwiPHRhYmxlPlxuICAgIDx0cj5cbiAgICAgICAgPHRkICpuZ0lmPVwiY29sLmZpbHRlciAhPT0gZmFsc2VcIiBjbGFzcz1cImhlYWRlcl9maWx0ZXJfb3BcIiA+XG4gICAgICAgICAgICA8bWEtZGF0YS1ncmlkLW9wLWZpbHRlciAjb3BfZmlsdGVyIFtjb2xdPVwiY29sXCIgKGNoYW5nZUVtcHR5T3BlcmF0b3IpPVwiX2NoYW5nZUVtcHR5T3BlcmF0b3IoKVwiIChjaGFuZ2VPcGVyYXRvcik9XCJfY2hhbmdlT3BlcmF0b3IoJGV2ZW50LGZhbHNlKVwiPjwvbWEtZGF0YS1ncmlkLW9wLWZpbHRlcj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwiaGVhZGVyX2ZpbHRlclwiICpuZ0lmPVwiY29sLmZpbHRlciAhPT0gZmFsc2UgJiYgY29sLmRhdGFUeXBlICE9ICdkYXRlJyAmJiBjb2wuZGF0YVR5cGUgIT0gJ2Jvb2wnICYmIGNvbC5kYXRhVHlwZSAhPSAnYm9vbGVhbicgJiYgKCFjb2wuaGVhZEZpbHRlciB8fCBjb2wuaGVhZEZpbHRlci5sZW5ndGggPT0gMClcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImhlYWRlcl9maWx0ZXJcIiBbKG5nTW9kZWwpXT1cImZpbHRlcl92YWx1ZVwiIChrZXl1cCk9XCJfY2hhbmdlT3BlcmF0b3IoJGV2ZW50LHRydWUpXCIgLz5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkICpuZ0lmPVwiY29sLmZpbHRlciAhPT0gZmFsc2VcIiBjbGFzcz1cImhlYWRlcl9maWx0ZXJcIiBbc3R5bGVdPVwiYXN0dWNlX2RhdGFwaWNrZXJcIiA+XG4gICAgICAgICAgICA8bWEtZGF0YS1ncmlkLWRhdGVwaWNrZXIgI21hZGF0ZV9waWNrZXIgdHlwZT1cImRhdGVcIiAoY2hhbmdlUGlja2VyKT1cIl9jaGFuZ2VEYXRlKCRldmVudClcIj48L21hLWRhdGEtZ3JpZC1kYXRlcGlja2VyPlxuICAgICAgICA8L3RkPlxuICAgIDwvdHI+XG48L3RhYmxlPiJdfQ==