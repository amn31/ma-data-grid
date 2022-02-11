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
                template: "<table >\n    <tr>\n        <td class=\"header_filter_op\" *ngIf=\"col.filter !== false\">\n            <ma-data-grid-op-filter #op_filter [col]=\"col\" (changeEmptyOperator)=\"_changeEmptyOperator()\" (changeOperator)=\"_changeOperator($event,false)\"></ma-data-grid-op-filter>\n        </td>\n        <td class=\"header_filter\" *ngIf=\"col.filter !== false && col.dataType != 'date' && col.dataType != 'bool' && col.dataType != 'boolean' && (!col.headFilter || col.headFilter.length == 0)\">\n            <input class=\"header_filter\" [(ngModel)]=\"filter_value\" (keyup)=\"_changeOperator($event,true)\" />\n        </td>\n        <td class=\"header_filter\" *ngIf=\"col.filter !== false\" [style]=\"astuce_datapicker\" >\n            <ma-data-grid-datepicker #madate_picker type=\"date\" (changePicker)=\"_changeDate($event)\"></ma-data-grid-datepicker>\n        </td>\n    </tr>\n</table>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLWhlYWQtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJDOi9NeVRlbXAvbmcxMGEvcHJvamVjdHMvbWEtZGF0YS1ncmlkL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGEtZ3JpZC1oZWFkLWZpbHRlci9kYXRhLWdyaWQtaGVhZC1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQU92RyxNQUFNLE9BQU8sMkJBQTJCO0lBU3RDO1FBUFMsaUJBQVksR0FBWSxFQUFFLENBQUM7UUFFMUIsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUd2RCxzQkFBaUIsR0FBVyxlQUFlLENBQUM7SUFFNUIsQ0FBQztJQUVqQixRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxNQUFNLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDO1NBQzNDO0lBQ0gsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRTtZQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxTQUFTO1lBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFFOUQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3hELHNEQUFzRDtZQUN0RCxPQUFPLENBQUMsQ0FBQztTQUNWO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQUssRUFBQyxZQUFZO1FBRWhDLEdBQUc7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUN6QywwQ0FBMEM7UUFDMUMsSUFBSSxZQUFZO1lBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDO1lBQzNCLElBQUksRUFBQyxJQUFJLENBQUMsR0FBRztZQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWTtTQUV6QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLElBQUk7UUFFZCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJO1lBQ0YsSUFBSSxDQUFDLFlBQVksR0FBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FFdkM7UUFBQyxPQUFPLENBQUMsRUFBRTtTQUVYO1FBRUQsZ0RBQWdEO1FBQ2hELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7WUFDM0IsSUFBSSxFQUFDLElBQUksQ0FBQyxHQUFHO1lBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZO1NBRXpCLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQXJFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsMjRCQUFxRDs7YUFFdEQ7Ozs7MkJBR0UsS0FBSztrQkFDTCxLQUFLO2lDQUNMLE1BQU07d0JBQ04sU0FBUyxTQUFDLHlCQUF5QixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs0QkFDckQsU0FBUyxTQUFDLDJCQUEyQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZENvbHVtbk9wdGlvbnMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL21hLWRhdGEtZ3JpZC1vcHRpb25zJztcbmltcG9ydCB7IERhdGFHcmlkT3BGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuLi9kYXRhLWdyaWQtb3AtZmlsdGVyL2RhdGEtZ3JpZC1vcC1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFHcmlkUGlja2VyRGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uL2RhdGEtZ3JpZC1waWNrZXItZGF0ZS9kYXRhLWdyaWQtcGlja2VyLWRhdGUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWEtZGF0YS1ncmlkLWhlYWQtZmlsdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtZ3JpZC1oZWFkLWZpbHRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RhdGEtZ3JpZC1oZWFkLWZpbHRlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0YUdyaWRIZWFkRmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBmaWx0ZXJfdmFsdWUgOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgY29sOiBNYURhdGFHcmlkQ29sdW1uT3B0aW9ucztcbiAgQE91dHB1dCgpIGNoYW5nZUhlYWRlckZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAVmlld0NoaWxkKERhdGFHcmlkT3BGaWx0ZXJDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIG9wX2ZpbHRlcjogRGF0YUdyaWRPcEZpbHRlckNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZChEYXRhR3JpZFBpY2tlckRhdGVDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIG1hZGF0ZV9waWNrZXI6IERhdGFHcmlkUGlja2VyRGF0ZUNvbXBvbmVudDtcbiAgYXN0dWNlX2RhdGFwaWNrZXI6IHN0cmluZyA9ICdkaXNwbGF5OiBub25lJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbC5kYXRhVHlwZSA9PSAnZGF0ZScpIHtcbiAgICAgIHRoaXMuYXN0dWNlX2RhdGFwaWNrZXIgPSAnZGlzcGxheTogYmxvY2snO1xuICAgIH1cbiAgfVxuXG4gIGdldEZpbHRlciAoKSB7XG4gICAgaWYgKHRoaXMuZmlsdGVyX3ZhbHVlICE9ICcnIHx8IFxuICAgICAgICB0aGlzLmNvbC5kYXRhVHlwZSA9PSAnYm9vbGVhbicgfHwgXG4gICAgICAgIHRoaXMuY29sLmRhdGFUeXBlID09ICdib29sJyB8fCB0aGlzLmNvbC5oZWFkRmlsdGVyICE9IG51bGwpIHtcbiAgICAgXG4gICAgICBsZXQgbyA9IHRoaXMub3BfZmlsdGVyLmdldENvbmRpdGlvbnModGhpcy5maWx0ZXJfdmFsdWUpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2dldENvbmRpdGlvbnMgJyt0aGlzLmNvbC5wcm9wKyBcIiBvXCIsbylcbiAgICAgIHJldHVybiBvO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIF9jaGFuZ2VFbXB0eU9wZXJhdG9yKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiX2NoYW5nZUVtcHR5T3BlcmF0b3JcIik7XG4gICAgdGhpcy5tYWRhdGVfcGlja2VyLnNldERhdGUobnVsbCk7XG4gIH1cblxuICBfY2hhbmdlT3BlcmF0b3IoZXZlbnQsZnJvbUlucHV0S2V5KSB7XG4gICBcbiAgICAvLyBcbiAgICBjb25zb2xlLmxvZygnUkVDRUlWRSBDSEFOR0UgT1AnLHRoaXMuY29sKVxuICAgIC8vIGNvbnNvbGUubG9nKCdFTUlUIGNoYW5nZUhlYWRlckZpbHRlcicpO1xuICAgIGlmIChmcm9tSW5wdXRLZXkpXG4gICAgICB0aGlzLm9wX2ZpbHRlci5zZXRGaXJzdENob2ljZSgpO1xuICAgIHRoaXMuY2hhbmdlSGVhZGVyRmlsdGVyLmVtaXQoe1xuICAgICAgcHJvcDp0aGlzLmNvbCxcbiAgICAgIHZhbHVlOiB0aGlzLmZpbHRlcl92YWx1ZSxcbiAgICAgIC8vY29uZGl0aW9uOiBbIHRoaXMuY29sLnByb3AsIHRoaXMub3BfZmlsdGVyLnZhbHVlLCB0aGlzLmZpbHRlcl92YWx1ZSBdXG4gICAgfSk7XG4gIH1cblxuICBfY2hhbmdlRGF0ZShkYXRlKSB7XG4gICAgXG4gICAgdGhpcy5maWx0ZXJfdmFsdWUgPSAnJztcbiAgICB0cnkge1xuICAgICAgdGhpcy5maWx0ZXJfdmFsdWU9IGRhdGUudG9JU09TdHJpbmcoKTtcbiAgICAgIFxuICAgIH0gY2F0Y2ggKGUpIHtcblxuICAgIH1cbiBcbiAgICAvLyBjb25zb2xlLmxvZyhcIl9jaGFuZ2VEYXRlXCIsdGhpcy5maWx0ZXJfdmFsdWUpO1xuICAgIHRoaXMuY2hhbmdlSGVhZGVyRmlsdGVyLmVtaXQoe1xuICAgICAgcHJvcDp0aGlzLmNvbCxcbiAgICAgIHZhbHVlOiB0aGlzLmZpbHRlcl92YWx1ZSxcbiAgICAgIC8vY29uZGl0aW9uOiBbIHRoaXMuY29sLnByb3AsIHRoaXMub3BfZmlsdGVyLnZhbHVlLCB0aGlzLmZpbHRlcl92YWx1ZSBdXG4gICAgfSk7XG4gIH1cblxufVxuIl19