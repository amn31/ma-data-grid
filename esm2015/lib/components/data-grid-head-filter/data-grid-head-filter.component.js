import { EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { DataGridOpFilterComponent } from '../data-grid-op-filter/data-grid-op-filter.component';
import { DataGridPickerDateComponent } from '../data-grid-picker-date/data-grid-picker-date.component';
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
DataGridHeadFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'ma-data-grid-head-filter',
                template: "<table>\n    <tr>\n        <td class=\"header_filter_op\" >\n            <ma-data-grid-op-filter #op_filter [col]=\"col\" (changeEmptyOperator)=\"_changeEmptyOperator()\" (changeOperator)=\"_changeOperator($event)\"></ma-data-grid-op-filter>\n        </td>\n        <td class=\"header_filter\" *ngIf=\"col.dataType != 'date' && col.dataType != 'boolean' && (!col.headFilter || col.headFilter.length == 0)\">\n            <input class=\"header_filter\" [(ngModel)]=\"filter_value\" (keyup)=\"_changeOperator($event)\" />\n        </td>\n        <td class=\"header_filter\" [style]=\"astuce_datapicker\" >\n            <ma-data-grid-datepicker #madate_picker type=\"date\" (changePicker)=\"_changeDate($event)\"></ma-data-grid-datepicker>\n        </td>\n    </tr>\n</table>",
                styles: ["input.header_filter{background-color:#e8f5f8;border:1px inset #9e9e9e;height:1.2rem;margin:0 0 0 -5px}/deep/ .ma-data-grid-datepicker{height:1.2rem;max-height:1.2rem}td.header_filter{padding:1px 1px 1px 5px}td.header_filter_op{padding:1px 1px 1px 0}"]
            },] }
];
DataGridHeadFilterComponent.ctorParameters = () => [];
DataGridHeadFilterComponent.propDecorators = {
    filter_value: [{ type: Input }],
    col: [{ type: Input }],
    changeHeaderFilter: [{ type: Output }],
    op_filter: [{ type: ViewChild, args: [DataGridOpFilterComponent, { static: true },] }],
    madate_picker: [{ type: ViewChild, args: [DataGridPickerDateComponent, { static: true },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLWhlYWQtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJEOi9NeUhvbWUvYW5kcm9pZC93b3Jrc3BhY2UvZ2l0L21hLW5nLWRhdGFncmlkL3Byb2plY3RzL21hLWRhdGEtZ3JpZC9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kYXRhLWdyaWQtaGVhZC1maWx0ZXIvZGF0YS1ncmlkLWhlYWQtZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDakcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFPdkcsTUFBTSxPQUFPLDJCQUEyQjtJQVN0QztRQVBTLGlCQUFZLEdBQVksRUFBRSxDQUFDO1FBRTFCLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFHdkQsc0JBQWlCLEdBQVcsZUFBZSxDQUFDO0lBRTVCLENBQUM7SUFFakIsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksTUFBTSxFQUFFO1lBQy9CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQztTQUMzQztJQUNILENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksSUFBSSxFQUFFO1lBRTVGLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN4RCxzREFBc0Q7WUFDdEQsT0FBTyxDQUFDLENBQUM7U0FDVjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELG9CQUFvQjtRQUNsQix1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGVBQWUsQ0FBQyxLQUFLO1FBRW5CLHlDQUF5QztRQUN6QywwQ0FBMEM7UUFFMUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQztZQUMzQixJQUFJLEVBQUMsSUFBSSxDQUFDLEdBQUc7WUFDYixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVk7U0FFekIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFJO1FBRWQsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSTtZQUNGLElBQUksQ0FBQyxZQUFZLEdBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBRXZDO1FBQUMsT0FBTyxDQUFDLEVBQUU7U0FFWDtRQUVELGdEQUFnRDtRQUNoRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDO1lBQzNCLElBQUksRUFBQyxJQUFJLENBQUMsR0FBRztZQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWTtTQUV6QixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFqRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLGd4QkFBcUQ7O2FBRXREOzs7OzJCQUdFLEtBQUs7a0JBQ0wsS0FBSztpQ0FDTCxNQUFNO3dCQUNOLFNBQVMsU0FBQyx5QkFBeUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7NEJBQ3JELFNBQVMsU0FBQywyQkFBMkIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hRGF0YUdyaWRDb2x1bW5PcHRpb25zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9tYS1kYXRhLWdyaWQtb3B0aW9ucyc7XG5pbXBvcnQgeyBEYXRhR3JpZE9wRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vZGF0YS1ncmlkLW9wLWZpbHRlci9kYXRhLWdyaWQtb3AtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhR3JpZFBpY2tlckRhdGVDb21wb25lbnQgfSBmcm9tICcuLi9kYXRhLWdyaWQtcGlja2VyLWRhdGUvZGF0YS1ncmlkLXBpY2tlci1kYXRlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hLWRhdGEtZ3JpZC1oZWFkLWZpbHRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLWdyaWQtaGVhZC1maWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXRhLWdyaWQtaGVhZC1maWx0ZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGFHcmlkSGVhZEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgZmlsdGVyX3ZhbHVlIDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGNvbDogTWFEYXRhR3JpZENvbHVtbk9wdGlvbnM7XG4gIEBPdXRwdXQoKSBjaGFuZ2VIZWFkZXJGaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQFZpZXdDaGlsZChEYXRhR3JpZE9wRmlsdGVyQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSBvcF9maWx0ZXI6IERhdGFHcmlkT3BGaWx0ZXJDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoRGF0YUdyaWRQaWNrZXJEYXRlQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSBtYWRhdGVfcGlja2VyOiBEYXRhR3JpZFBpY2tlckRhdGVDb21wb25lbnQ7XG4gIGFzdHVjZV9kYXRhcGlja2VyOiBzdHJpbmcgPSAnZGlzcGxheTogbm9uZSc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb2wuZGF0YVR5cGUgPT0gJ2RhdGUnKSB7XG4gICAgICB0aGlzLmFzdHVjZV9kYXRhcGlja2VyID0gJ2Rpc3BsYXk6IGJsb2NrJztcbiAgICB9XG4gIH1cblxuICBnZXRGaWx0ZXIgKCkge1xuICAgIGlmICh0aGlzLmZpbHRlcl92YWx1ZSAhPSAnJyB8fCB0aGlzLmNvbC5kYXRhVHlwZSA9PSAnYm9vbGVhbicgfHwgdGhpcy5jb2wuaGVhZEZpbHRlciAhPSBudWxsKSB7XG4gICAgIFxuICAgICAgbGV0IG8gPSB0aGlzLm9wX2ZpbHRlci5nZXRDb25kaXRpb25zKHRoaXMuZmlsdGVyX3ZhbHVlKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdnZXRDb25kaXRpb25zICcrdGhpcy5jb2wucHJvcCsgXCIgb1wiLG8pXG4gICAgICByZXR1cm4gbztcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBfY2hhbmdlRW1wdHlPcGVyYXRvcigpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIl9jaGFuZ2VFbXB0eU9wZXJhdG9yXCIpO1xuICAgIHRoaXMubWFkYXRlX3BpY2tlci5zZXREYXRlKG51bGwpO1xuICB9XG5cbiAgX2NoYW5nZU9wZXJhdG9yKGV2ZW50KSB7XG4gICBcbiAgICAvLyBjb25zb2xlLmxvZygnUkVDRUlWRSBDSEFOR0UgT1AnLGV2ZW50KVxuICAgIC8vIGNvbnNvbGUubG9nKCdFTUlUIGNoYW5nZUhlYWRlckZpbHRlcicpO1xuICAgIFxuICAgIHRoaXMuY2hhbmdlSGVhZGVyRmlsdGVyLmVtaXQoe1xuICAgICAgcHJvcDp0aGlzLmNvbCxcbiAgICAgIHZhbHVlOiB0aGlzLmZpbHRlcl92YWx1ZSxcbiAgICAgIC8vY29uZGl0aW9uOiBbIHRoaXMuY29sLnByb3AsIHRoaXMub3BfZmlsdGVyLnZhbHVlLCB0aGlzLmZpbHRlcl92YWx1ZSBdXG4gICAgfSk7XG4gIH1cblxuICBfY2hhbmdlRGF0ZShkYXRlKSB7XG4gICAgXG4gICAgdGhpcy5maWx0ZXJfdmFsdWUgPSAnJztcbiAgICB0cnkge1xuICAgICAgdGhpcy5maWx0ZXJfdmFsdWU9IGRhdGUudG9JU09TdHJpbmcoKTtcbiAgICAgIFxuICAgIH0gY2F0Y2ggKGUpIHtcblxuICAgIH1cbiBcbiAgICAvLyBjb25zb2xlLmxvZyhcIl9jaGFuZ2VEYXRlXCIsdGhpcy5maWx0ZXJfdmFsdWUpO1xuICAgIHRoaXMuY2hhbmdlSGVhZGVyRmlsdGVyLmVtaXQoe1xuICAgICAgcHJvcDp0aGlzLmNvbCxcbiAgICAgIHZhbHVlOiB0aGlzLmZpbHRlcl92YWx1ZSxcbiAgICAgIC8vY29uZGl0aW9uOiBbIHRoaXMuY29sLnByb3AsIHRoaXMub3BfZmlsdGVyLnZhbHVlLCB0aGlzLmZpbHRlcl92YWx1ZSBdXG4gICAgfSk7XG4gIH1cblxufVxuIl19