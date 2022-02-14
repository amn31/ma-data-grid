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
        // console.log('getFilter',this.col)
        if (this.col.filter == false) {
            return null;
        }
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
        if (this.col.filter == false) {
            return;
        }
        //console.log('RECEIVE CHANGE OP',this.col, 'OP',this.op_filter)
        //console.log('EMIT changeHeaderFilter', fromInputKey);
        if (fromInputKey)
            this.op_filter.setFirstChoice();
        this.changeHeaderFilter.emit({
            prop: this.col,
            value: this.filter_value,
        });
    }
    _changeDate(date) {
        if (this.col.filter == false) {
            return;
        }
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
                template: "<table>\n    <tr>\n        <td class=\"header_filter_op\">\n           <ma-data-grid-op-filter #op_filter [col]=\"col\" (changeEmptyOperator)=\"_changeEmptyOperator()\" (changeOperator)=\"_changeOperator($event,false)\"></ma-data-grid-op-filter>\n        </td>\n        <td class=\"header_filter\" *ngIf=\"col.dataType != 'date' && col.dataType != 'bool' && col.dataType != 'boolean' && (!col.headFilter || col.headFilter.length == 0)\">\n            <input class=\"header_filter\" [(ngModel)]=\"filter_value\" (keyup)=\"_changeOperator($event,true)\" />\n        </td>\n        <td class=\"header_filter\" [style]=\"astuce_datapicker\">\n            <ma-data-grid-datepicker #madate_picker type=\"date\" (changePicker)=\"_changeDate($event)\"></ma-data-grid-datepicker>\n        </td>\n    </tr>\n</table>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLWhlYWQtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJEOi9NeUhvbWUvYW5kcm9pZC93b3Jrc3BhY2UvZ2l0L21hLW5nLWRhdGEtZ3JpZC9wcm9qZWN0cy9tYS1kYXRhLWdyaWQvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0YS1ncmlkLWhlYWQtZmlsdGVyL2RhdGEtZ3JpZC1oZWFkLWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBT3ZHLE1BQU0sT0FBTywyQkFBMkI7SUFTdEM7UUFQUyxpQkFBWSxHQUFZLEVBQUUsQ0FBQztRQUUxQix1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBR3ZELHNCQUFpQixHQUFXLGVBQWUsQ0FBQztJQUU1QixDQUFDO0lBRWpCLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLE1BQU0sRUFBRTtZQUMvQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBRUQsU0FBUztRQUNQLG9DQUFvQztRQUNwQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEtBQUssRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUU7WUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksU0FBUztZQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksSUFBSSxFQUFFO1lBRzlELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN4RCxzREFBc0Q7WUFDdEQsT0FBTyxDQUFDLENBQUM7U0FFVjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELG9CQUFvQjtRQUNsQix1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGVBQWUsQ0FBQyxLQUFLLEVBQUMsWUFBWTtRQUVoQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEtBQUssRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFDRCxnRUFBZ0U7UUFDaEUsdURBQXVEO1FBQ3ZELElBQUksWUFBWTtZQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQztZQUMzQixJQUFJLEVBQUMsSUFBSSxDQUFDLEdBQUc7WUFDYixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVk7U0FFekIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFJO1FBRWQsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxLQUFLLEVBQUU7WUFDNUIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSTtZQUNGLElBQUksQ0FBQyxZQUFZLEdBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBRXZDO1FBQUMsT0FBTyxDQUFDLEVBQUU7U0FFWDtRQUVELGdEQUFnRDtRQUNoRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDO1lBQzNCLElBQUksRUFBQyxJQUFJLENBQUMsR0FBRztZQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWTtTQUV6QixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFoRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLGt6QkFBcUQ7O2FBRXREOzs7OzJCQUdFLEtBQUs7a0JBQ0wsS0FBSztpQ0FDTCxNQUFNO3dCQUNOLFNBQVMsU0FBQyx5QkFBeUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7NEJBQ3JELFNBQVMsU0FBQywyQkFBMkIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hRGF0YUdyaWRDb2x1bW5PcHRpb25zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9tYS1kYXRhLWdyaWQtb3B0aW9ucyc7XG5pbXBvcnQgeyBEYXRhR3JpZE9wRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vZGF0YS1ncmlkLW9wLWZpbHRlci9kYXRhLWdyaWQtb3AtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhR3JpZFBpY2tlckRhdGVDb21wb25lbnQgfSBmcm9tICcuLi9kYXRhLWdyaWQtcGlja2VyLWRhdGUvZGF0YS1ncmlkLXBpY2tlci1kYXRlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hLWRhdGEtZ3JpZC1oZWFkLWZpbHRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLWdyaWQtaGVhZC1maWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXRhLWdyaWQtaGVhZC1maWx0ZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGFHcmlkSGVhZEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgZmlsdGVyX3ZhbHVlIDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGNvbDogTWFEYXRhR3JpZENvbHVtbk9wdGlvbnM7XG4gIEBPdXRwdXQoKSBjaGFuZ2VIZWFkZXJGaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQFZpZXdDaGlsZChEYXRhR3JpZE9wRmlsdGVyQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSBvcF9maWx0ZXI6IERhdGFHcmlkT3BGaWx0ZXJDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoRGF0YUdyaWRQaWNrZXJEYXRlQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSBtYWRhdGVfcGlja2VyOiBEYXRhR3JpZFBpY2tlckRhdGVDb21wb25lbnQ7XG4gIGFzdHVjZV9kYXRhcGlja2VyOiBzdHJpbmcgPSAnZGlzcGxheTogbm9uZSc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb2wuZGF0YVR5cGUgPT0gJ2RhdGUnKSB7XG4gICAgICB0aGlzLmFzdHVjZV9kYXRhcGlja2VyID0gJ2Rpc3BsYXk6IGJsb2NrJztcbiAgICB9XG4gIH1cblxuICBnZXRGaWx0ZXIgKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdnZXRGaWx0ZXInLHRoaXMuY29sKVxuICAgIGlmICh0aGlzLmNvbC5maWx0ZXIgPT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5maWx0ZXJfdmFsdWUgIT0gJycgfHwgXG4gICAgICAgIHRoaXMuY29sLmRhdGFUeXBlID09ICdib29sZWFuJyB8fCBcbiAgICAgICAgdGhpcy5jb2wuZGF0YVR5cGUgPT0gJ2Jvb2wnIHx8IHRoaXMuY29sLmhlYWRGaWx0ZXIgIT0gbnVsbCkge1xuICAgICBcbiAgICAgIFxuICAgICAgbGV0IG8gPSB0aGlzLm9wX2ZpbHRlci5nZXRDb25kaXRpb25zKHRoaXMuZmlsdGVyX3ZhbHVlKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdnZXRDb25kaXRpb25zICcrdGhpcy5jb2wucHJvcCsgXCIgb1wiLG8pXG4gICAgICByZXR1cm4gbztcbiAgICAgIFxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIF9jaGFuZ2VFbXB0eU9wZXJhdG9yKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiX2NoYW5nZUVtcHR5T3BlcmF0b3JcIik7XG4gICAgdGhpcy5tYWRhdGVfcGlja2VyLnNldERhdGUobnVsbCk7XG4gIH1cblxuICBfY2hhbmdlT3BlcmF0b3IoZXZlbnQsZnJvbUlucHV0S2V5KSB7XG4gICBcbiAgICBpZiAodGhpcy5jb2wuZmlsdGVyID09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coJ1JFQ0VJVkUgQ0hBTkdFIE9QJyx0aGlzLmNvbCwgJ09QJyx0aGlzLm9wX2ZpbHRlcilcbiAgICAvL2NvbnNvbGUubG9nKCdFTUlUIGNoYW5nZUhlYWRlckZpbHRlcicsIGZyb21JbnB1dEtleSk7XG4gICAgaWYgKGZyb21JbnB1dEtleSlcbiAgICAgIHRoaXMub3BfZmlsdGVyLnNldEZpcnN0Q2hvaWNlKCk7XG4gICAgdGhpcy5jaGFuZ2VIZWFkZXJGaWx0ZXIuZW1pdCh7XG4gICAgICBwcm9wOnRoaXMuY29sLFxuICAgICAgdmFsdWU6IHRoaXMuZmlsdGVyX3ZhbHVlLFxuICAgICAgLy9jb25kaXRpb246IFsgdGhpcy5jb2wucHJvcCwgdGhpcy5vcF9maWx0ZXIudmFsdWUsIHRoaXMuZmlsdGVyX3ZhbHVlIF1cbiAgICB9KTtcbiAgfVxuXG4gIF9jaGFuZ2VEYXRlKGRhdGUpIHtcbiAgICBcbiAgICBpZiAodGhpcy5jb2wuZmlsdGVyID09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZmlsdGVyX3ZhbHVlID0gJyc7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZmlsdGVyX3ZhbHVlPSBkYXRlLnRvSVNPU3RyaW5nKCk7XG4gICAgICBcbiAgICB9IGNhdGNoIChlKSB7XG5cbiAgICB9XG4gXG4gICAgLy8gY29uc29sZS5sb2coXCJfY2hhbmdlRGF0ZVwiLHRoaXMuZmlsdGVyX3ZhbHVlKTtcbiAgICB0aGlzLmNoYW5nZUhlYWRlckZpbHRlci5lbWl0KHtcbiAgICAgIHByb3A6dGhpcy5jb2wsXG4gICAgICB2YWx1ZTogdGhpcy5maWx0ZXJfdmFsdWUsXG4gICAgICAvL2NvbmRpdGlvbjogWyB0aGlzLmNvbC5wcm9wLCB0aGlzLm9wX2ZpbHRlci52YWx1ZSwgdGhpcy5maWx0ZXJfdmFsdWUgXVxuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==