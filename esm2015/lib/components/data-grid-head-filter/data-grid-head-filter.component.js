import { EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { DataGridOpFilterComponent } from '../data-grid-op-filter/data-grid-op-filter.component';
import { DataGridPickerDateComponent } from '../data-grid-picker-date/data-grid-picker-date.component';
import * as i0 from "@angular/core";
import * as i1 from "../data-grid-op-filter/data-grid-op-filter.component";
import * as i2 from "@angular/common";
import * as i3 from "../data-grid-picker-date/data-grid-picker-date.component";
import * as i4 from "@angular/forms";
function DataGridHeadFilterComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 4);
    i0.ɵɵelementStart(1, "input", 7);
    i0.ɵɵlistener("ngModelChange", function DataGridHeadFilterComponent_td_5_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.filter_value = $event; })("keyup", function DataGridHeadFilterComponent_td_5_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5._changeOperator($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r1.filter_value);
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
        if (this.filter_value != '' || this.col.dataType == 'boolean' || this.col.headFilter != null) {
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
    _changeOperator(event) {
        // console.log('RECEIVE CHANGE OP',event)
        // console.log('EMIT changeHeaderFilter');
        this.changeHeaderFilter.emit({
            prop: this.col,
            value: this.filter_value,
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
        });
    }
}
DataGridHeadFilterComponent.ɵfac = function DataGridHeadFilterComponent_Factory(t) { return new (t || DataGridHeadFilterComponent)(); };
DataGridHeadFilterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DataGridHeadFilterComponent, selectors: [["ma-data-grid-head-filter"]], viewQuery: function DataGridHeadFilterComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(DataGridOpFilterComponent, true);
        i0.ɵɵstaticViewQuery(DataGridPickerDateComponent, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.op_filter = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.madate_picker = _t.first);
    } }, inputs: { filter_value: "filter_value", col: "col" }, outputs: { changeHeaderFilter: "changeHeaderFilter" }, decls: 9, vars: 4, consts: [[1, "header_filter_op"], [3, "col", "changeEmptyOperator", "changeOperator"], ["op_filter", ""], ["class", "header_filter", 4, "ngIf"], [1, "header_filter"], ["type", "date", 3, "changePicker"], ["madate_picker", ""], [1, "header_filter", 3, "ngModel", "ngModelChange", "keyup"]], template: function DataGridHeadFilterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table");
        i0.ɵɵelementStart(1, "tr");
        i0.ɵɵelementStart(2, "td", 0);
        i0.ɵɵelementStart(3, "ma-data-grid-op-filter", 1, 2);
        i0.ɵɵlistener("changeEmptyOperator", function DataGridHeadFilterComponent_Template_ma_data_grid_op_filter_changeEmptyOperator_3_listener() { return ctx._changeEmptyOperator(); })("changeOperator", function DataGridHeadFilterComponent_Template_ma_data_grid_op_filter_changeOperator_3_listener($event) { return ctx._changeOperator($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, DataGridHeadFilterComponent_td_5_Template, 2, 1, "td", 3);
        i0.ɵɵelementStart(6, "td", 4);
        i0.ɵɵelementStart(7, "ma-data-grid-datepicker", 5, 6);
        i0.ɵɵlistener("changePicker", function DataGridHeadFilterComponent_Template_ma_data_grid_datepicker_changePicker_7_listener($event) { return ctx._changeDate($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("col", ctx.col);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.col.dataType != "date" && ctx.col.dataType != "boolean" && (!ctx.col.headFilter || ctx.col.headFilter.length == 0));
        i0.ɵɵadvance(1);
        i0.ɵɵstyleMap(ctx.astuce_datapicker);
    } }, directives: [i1.DataGridOpFilterComponent, i2.NgIf, i3.DataGridPickerDateComponent, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel], styles: ["input.header_filter[_ngcontent-%COMP%]{background-color:#e8f5f8;border:1px inset #9e9e9e;height:1.2rem;margin:0 0 0 -5px}  .ma-data-grid-datepicker{height:1.2rem;max-height:1.2rem}td.header_filter[_ngcontent-%COMP%]{padding:1px 1px 1px 5px}td.header_filter_op[_ngcontent-%COMP%]{padding:1px 1px 1px 0}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DataGridHeadFilterComponent, [{
        type: Component,
        args: [{
                selector: 'ma-data-grid-head-filter',
                templateUrl: './data-grid-head-filter.component.html',
                styleUrls: ['./data-grid-head-filter.component.css']
            }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLWhlYWQtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJEOi9NeUhvbWUvYW5kcm9pZC93b3Jrc3BhY2UvZ2l0L21hLW5nLWRhdGFncmlkL3Byb2plY3RzL21hLWRhdGEtZ3JpZC9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kYXRhLWdyaWQtaGVhZC1maWx0ZXIvZGF0YS1ncmlkLWhlYWQtZmlsdGVyLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2RhdGEtZ3JpZC1oZWFkLWZpbHRlci9kYXRhLWdyaWQtaGVhZC1maWx0ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDOzs7Ozs7OztJQ0MvRiw2QkFDSTtJQUFBLGdDQUNKO0lBRGlDLDROQUEwQixpTUFBQTtJQUF2RCxpQkFDSjtJQUFBLGlCQUFLOzs7SUFENEIsZUFBMEI7SUFBMUIsNkNBQTBCOztBREtuRSxNQUFNLE9BQU8sMkJBQTJCO0lBU3RDO1FBUFMsaUJBQVksR0FBWSxFQUFFLENBQUM7UUFFMUIsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUd2RCxzQkFBaUIsR0FBVyxlQUFlLENBQUM7SUFFNUIsQ0FBQztJQUVqQixRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxNQUFNLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDO1NBQzNDO0lBQ0gsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFFNUYsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3hELHNEQUFzRDtZQUN0RCxPQUFPLENBQUMsQ0FBQztTQUNWO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQUs7UUFFbkIseUNBQXlDO1FBQ3pDLDBDQUEwQztRQUUxQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDO1lBQzNCLElBQUksRUFBQyxJQUFJLENBQUMsR0FBRztZQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWTtTQUV6QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLElBQUk7UUFFZCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJO1lBQ0YsSUFBSSxDQUFDLFlBQVksR0FBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FFdkM7UUFBQyxPQUFPLENBQUMsRUFBRTtTQUVYO1FBRUQsZ0RBQWdEO1FBQ2hELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7WUFDM0IsSUFBSSxFQUFDLElBQUksQ0FBQyxHQUFHO1lBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZO1NBRXpCLENBQUMsQ0FBQztJQUNMLENBQUM7O3NHQTVEVSwyQkFBMkI7Z0VBQTNCLDJCQUEyQjs2QkFLM0IseUJBQXlCOzZCQUN6QiwyQkFBMkI7Ozs7OztRQ2pCeEMsNkJBQ0k7UUFBQSwwQkFDSTtRQUFBLDZCQUNJO1FBQUEsb0RBQWtLO1FBQW5ILG9KQUF1QiwwQkFBc0IsSUFBQyxtSUFBbUIsMkJBQXVCLElBQTFDO1FBQTRDLGlCQUF5QjtRQUN0SyxpQkFBSztRQUNMLDBFQUNJO1FBRUosNkJBQ0k7UUFBQSxxREFBbUg7UUFBL0QsNklBQWdCLHVCQUFtQixJQUFDO1FBQUMsaUJBQTBCO1FBQ3ZILGlCQUFLO1FBQ1QsaUJBQUs7UUFDVCxpQkFBUTs7UUFUdUMsZUFBVztRQUFYLDZCQUFXO1FBRXhCLGVBQThHO1FBQTlHLDZJQUE4RztRQUc5RyxlQUEyQjtRQUEzQixvQ0FBMkI7O2tEREdoRCwyQkFBMkI7Y0FMdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSx3Q0FBd0M7Z0JBQ3JELFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO2FBQ3JEO3NDQUdVLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxHQUFHO2tCQUFYLEtBQUs7WUFDSSxrQkFBa0I7a0JBQTNCLE1BQU07WUFDaUQsU0FBUztrQkFBaEUsU0FBUzttQkFBQyx5QkFBeUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDSSxhQUFhO2tCQUF0RSxTQUFTO21CQUFDLDJCQUEyQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZENvbHVtbk9wdGlvbnMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL21hLWRhdGEtZ3JpZC1vcHRpb25zJztcbmltcG9ydCB7IERhdGFHcmlkT3BGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuLi9kYXRhLWdyaWQtb3AtZmlsdGVyL2RhdGEtZ3JpZC1vcC1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFHcmlkUGlja2VyRGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uL2RhdGEtZ3JpZC1waWNrZXItZGF0ZS9kYXRhLWdyaWQtcGlja2VyLWRhdGUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWEtZGF0YS1ncmlkLWhlYWQtZmlsdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtZ3JpZC1oZWFkLWZpbHRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RhdGEtZ3JpZC1oZWFkLWZpbHRlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0YUdyaWRIZWFkRmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBmaWx0ZXJfdmFsdWUgOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgY29sOiBNYURhdGFHcmlkQ29sdW1uT3B0aW9ucztcbiAgQE91dHB1dCgpIGNoYW5nZUhlYWRlckZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAVmlld0NoaWxkKERhdGFHcmlkT3BGaWx0ZXJDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIG9wX2ZpbHRlcjogRGF0YUdyaWRPcEZpbHRlckNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZChEYXRhR3JpZFBpY2tlckRhdGVDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIG1hZGF0ZV9waWNrZXI6IERhdGFHcmlkUGlja2VyRGF0ZUNvbXBvbmVudDtcbiAgYXN0dWNlX2RhdGFwaWNrZXI6IHN0cmluZyA9ICdkaXNwbGF5OiBub25lJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbC5kYXRhVHlwZSA9PSAnZGF0ZScpIHtcbiAgICAgIHRoaXMuYXN0dWNlX2RhdGFwaWNrZXIgPSAnZGlzcGxheTogYmxvY2snO1xuICAgIH1cbiAgfVxuXG4gIGdldEZpbHRlciAoKSB7XG4gICAgaWYgKHRoaXMuZmlsdGVyX3ZhbHVlICE9ICcnIHx8IHRoaXMuY29sLmRhdGFUeXBlID09ICdib29sZWFuJyB8fCB0aGlzLmNvbC5oZWFkRmlsdGVyICE9IG51bGwpIHtcbiAgICAgXG4gICAgICBsZXQgbyA9IHRoaXMub3BfZmlsdGVyLmdldENvbmRpdGlvbnModGhpcy5maWx0ZXJfdmFsdWUpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2dldENvbmRpdGlvbnMgJyt0aGlzLmNvbC5wcm9wKyBcIiBvXCIsbylcbiAgICAgIHJldHVybiBvO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIF9jaGFuZ2VFbXB0eU9wZXJhdG9yKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiX2NoYW5nZUVtcHR5T3BlcmF0b3JcIik7XG4gICAgdGhpcy5tYWRhdGVfcGlja2VyLnNldERhdGUobnVsbCk7XG4gIH1cblxuICBfY2hhbmdlT3BlcmF0b3IoZXZlbnQpIHtcbiAgIFxuICAgIC8vIGNvbnNvbGUubG9nKCdSRUNFSVZFIENIQU5HRSBPUCcsZXZlbnQpXG4gICAgLy8gY29uc29sZS5sb2coJ0VNSVQgY2hhbmdlSGVhZGVyRmlsdGVyJyk7XG4gICAgXG4gICAgdGhpcy5jaGFuZ2VIZWFkZXJGaWx0ZXIuZW1pdCh7XG4gICAgICBwcm9wOnRoaXMuY29sLFxuICAgICAgdmFsdWU6IHRoaXMuZmlsdGVyX3ZhbHVlLFxuICAgICAgLy9jb25kaXRpb246IFsgdGhpcy5jb2wucHJvcCwgdGhpcy5vcF9maWx0ZXIudmFsdWUsIHRoaXMuZmlsdGVyX3ZhbHVlIF1cbiAgICB9KTtcbiAgfVxuXG4gIF9jaGFuZ2VEYXRlKGRhdGUpIHtcbiAgICBcbiAgICB0aGlzLmZpbHRlcl92YWx1ZSA9ICcnO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmZpbHRlcl92YWx1ZT0gZGF0ZS50b0lTT1N0cmluZygpO1xuICAgICAgXG4gICAgfSBjYXRjaCAoZSkge1xuXG4gICAgfVxuIFxuICAgIC8vIGNvbnNvbGUubG9nKFwiX2NoYW5nZURhdGVcIix0aGlzLmZpbHRlcl92YWx1ZSk7XG4gICAgdGhpcy5jaGFuZ2VIZWFkZXJGaWx0ZXIuZW1pdCh7XG4gICAgICBwcm9wOnRoaXMuY29sLFxuICAgICAgdmFsdWU6IHRoaXMuZmlsdGVyX3ZhbHVlLFxuICAgICAgLy9jb25kaXRpb246IFsgdGhpcy5jb2wucHJvcCwgdGhpcy5vcF9maWx0ZXIudmFsdWUsIHRoaXMuZmlsdGVyX3ZhbHVlIF1cbiAgICB9KTtcbiAgfVxuXG59XG4iLCI8dGFibGU+XG4gICAgPHRyPlxuICAgICAgICA8dGQgY2xhc3M9XCJoZWFkZXJfZmlsdGVyX29wXCIgPlxuICAgICAgICAgICAgPG1hLWRhdGEtZ3JpZC1vcC1maWx0ZXIgI29wX2ZpbHRlciBbY29sXT1cImNvbFwiIChjaGFuZ2VFbXB0eU9wZXJhdG9yKT1cIl9jaGFuZ2VFbXB0eU9wZXJhdG9yKClcIiAoY2hhbmdlT3BlcmF0b3IpPVwiX2NoYW5nZU9wZXJhdG9yKCRldmVudClcIj48L21hLWRhdGEtZ3JpZC1vcC1maWx0ZXI+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cImhlYWRlcl9maWx0ZXJcIiAqbmdJZj1cImNvbC5kYXRhVHlwZSAhPSAnZGF0ZScgJiYgY29sLmRhdGFUeXBlICE9ICdib29sZWFuJyAmJiAoIWNvbC5oZWFkRmlsdGVyIHx8IGNvbC5oZWFkRmlsdGVyLmxlbmd0aCA9PSAwKVwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaGVhZGVyX2ZpbHRlclwiIFsobmdNb2RlbCldPVwiZmlsdGVyX3ZhbHVlXCIgKGtleXVwKT1cIl9jaGFuZ2VPcGVyYXRvcigkZXZlbnQpXCIgLz5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwiaGVhZGVyX2ZpbHRlclwiIFtzdHlsZV09XCJhc3R1Y2VfZGF0YXBpY2tlclwiID5cbiAgICAgICAgICAgIDxtYS1kYXRhLWdyaWQtZGF0ZXBpY2tlciAjbWFkYXRlX3BpY2tlciB0eXBlPVwiZGF0ZVwiIChjaGFuZ2VQaWNrZXIpPVwiX2NoYW5nZURhdGUoJGV2ZW50KVwiPjwvbWEtZGF0YS1ncmlkLWRhdGVwaWNrZXI+XG4gICAgICAgIDwvdGQ+XG4gICAgPC90cj5cbjwvdGFibGU+Il19