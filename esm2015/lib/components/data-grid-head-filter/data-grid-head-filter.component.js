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
        if (this.filter_value != '' || this.col.dataType == 'boolean' || this.col.dataType == 'bool' || this.col.headFilter != null) {
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
                template: "<table>\n    <tr>\n        <td class=\"header_filter_op\" >\n            <ma-data-grid-op-filter #op_filter [col]=\"col\" (changeEmptyOperator)=\"_changeEmptyOperator()\" (changeOperator)=\"_changeOperator($event)\"></ma-data-grid-op-filter>\n        </td>\n        <td class=\"header_filter\" *ngIf=\"col.dataType != 'date' && col.dataType != 'bool' && col.dataType != 'boolean' && (!col.headFilter || col.headFilter.length == 0)\">\n            <input class=\"header_filter\" [(ngModel)]=\"filter_value\" (keyup)=\"_changeOperator($event)\" />\n        </td>\n        <td class=\"header_filter\" [style]=\"astuce_datapicker\" >\n            <ma-data-grid-datepicker #madate_picker type=\"date\" (changePicker)=\"_changeDate($event)\"></ma-data-grid-datepicker>\n        </td>\n    </tr>\n</table>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLWhlYWQtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJEOi9NeUhvbWUvYW5kcm9pZC93b3Jrc3BhY2UvZ2l0L21hLW5nLWRhdGFncmlkL3Byb2plY3RzL21hLWRhdGEtZ3JpZC9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kYXRhLWdyaWQtaGVhZC1maWx0ZXIvZGF0YS1ncmlkLWhlYWQtZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDakcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFPdkcsTUFBTSxPQUFPLDJCQUEyQjtJQVN0QztRQVBTLGlCQUFZLEdBQVksRUFBRSxDQUFDO1FBRTFCLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFHdkQsc0JBQWlCLEdBQVcsZUFBZSxDQUFDO0lBRTVCLENBQUM7SUFFakIsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksTUFBTSxFQUFFO1lBQy9CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQztTQUMzQztJQUNILENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLElBQUksRUFBRTtZQUUzSCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDeEQsc0RBQXNEO1lBQ3RELE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxvQkFBb0I7UUFDbEIsdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxlQUFlLENBQUMsS0FBSztRQUVuQix5Q0FBeUM7UUFDekMsMENBQTBDO1FBRTFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7WUFDM0IsSUFBSSxFQUFDLElBQUksQ0FBQyxHQUFHO1lBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZO1NBRXpCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsSUFBSTtRQUVkLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUk7WUFDRixJQUFJLENBQUMsWUFBWSxHQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUV2QztRQUFDLE9BQU8sQ0FBQyxFQUFFO1NBRVg7UUFFRCxnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQztZQUMzQixJQUFJLEVBQUMsSUFBSSxDQUFDLEdBQUc7WUFDYixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVk7U0FFekIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBakVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQywweUJBQXFEOzthQUV0RDs7OzsyQkFHRSxLQUFLO2tCQUNMLEtBQUs7aUNBQ0wsTUFBTTt3QkFDTixTQUFTLFNBQUMseUJBQXlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzRCQUNyRCxTQUFTLFNBQUMsMkJBQTJCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYURhdGFHcmlkQ29sdW1uT3B0aW9ucyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvbWEtZGF0YS1ncmlkLW9wdGlvbnMnO1xuaW1wb3J0IHsgRGF0YUdyaWRPcEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4uL2RhdGEtZ3JpZC1vcC1maWx0ZXIvZGF0YS1ncmlkLW9wLWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YUdyaWRQaWNrZXJEYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vZGF0YS1ncmlkLXBpY2tlci1kYXRlL2RhdGEtZ3JpZC1waWNrZXItZGF0ZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYS1kYXRhLWdyaWQtaGVhZC1maWx0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS1ncmlkLWhlYWQtZmlsdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS1ncmlkLWhlYWQtZmlsdGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhR3JpZEhlYWRGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGZpbHRlcl92YWx1ZSA6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBjb2w6IE1hRGF0YUdyaWRDb2x1bW5PcHRpb25zO1xuICBAT3V0cHV0KCkgY2hhbmdlSGVhZGVyRmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBWaWV3Q2hpbGQoRGF0YUdyaWRPcEZpbHRlckNvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSkgb3BfZmlsdGVyOiBEYXRhR3JpZE9wRmlsdGVyQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKERhdGFHcmlkUGlja2VyRGF0ZUNvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSkgbWFkYXRlX3BpY2tlcjogRGF0YUdyaWRQaWNrZXJEYXRlQ29tcG9uZW50O1xuICBhc3R1Y2VfZGF0YXBpY2tlcjogc3RyaW5nID0gJ2Rpc3BsYXk6IG5vbmUnO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29sLmRhdGFUeXBlID09ICdkYXRlJykge1xuICAgICAgdGhpcy5hc3R1Y2VfZGF0YXBpY2tlciA9ICdkaXNwbGF5OiBibG9jayc7XG4gICAgfVxuICB9XG5cbiAgZ2V0RmlsdGVyICgpIHtcbiAgICBpZiAodGhpcy5maWx0ZXJfdmFsdWUgIT0gJycgfHwgdGhpcy5jb2wuZGF0YVR5cGUgPT0gJ2Jvb2xlYW4nIHx8IHRoaXMuY29sLmRhdGFUeXBlID09ICdib29sJyB8fCB0aGlzLmNvbC5oZWFkRmlsdGVyICE9IG51bGwpIHtcbiAgICAgXG4gICAgICBsZXQgbyA9IHRoaXMub3BfZmlsdGVyLmdldENvbmRpdGlvbnModGhpcy5maWx0ZXJfdmFsdWUpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2dldENvbmRpdGlvbnMgJyt0aGlzLmNvbC5wcm9wKyBcIiBvXCIsbylcbiAgICAgIHJldHVybiBvO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIF9jaGFuZ2VFbXB0eU9wZXJhdG9yKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiX2NoYW5nZUVtcHR5T3BlcmF0b3JcIik7XG4gICAgdGhpcy5tYWRhdGVfcGlja2VyLnNldERhdGUobnVsbCk7XG4gIH1cblxuICBfY2hhbmdlT3BlcmF0b3IoZXZlbnQpIHtcbiAgIFxuICAgIC8vIGNvbnNvbGUubG9nKCdSRUNFSVZFIENIQU5HRSBPUCcsZXZlbnQpXG4gICAgLy8gY29uc29sZS5sb2coJ0VNSVQgY2hhbmdlSGVhZGVyRmlsdGVyJyk7XG4gICAgXG4gICAgdGhpcy5jaGFuZ2VIZWFkZXJGaWx0ZXIuZW1pdCh7XG4gICAgICBwcm9wOnRoaXMuY29sLFxuICAgICAgdmFsdWU6IHRoaXMuZmlsdGVyX3ZhbHVlLFxuICAgICAgLy9jb25kaXRpb246IFsgdGhpcy5jb2wucHJvcCwgdGhpcy5vcF9maWx0ZXIudmFsdWUsIHRoaXMuZmlsdGVyX3ZhbHVlIF1cbiAgICB9KTtcbiAgfVxuXG4gIF9jaGFuZ2VEYXRlKGRhdGUpIHtcbiAgICBcbiAgICB0aGlzLmZpbHRlcl92YWx1ZSA9ICcnO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmZpbHRlcl92YWx1ZT0gZGF0ZS50b0lTT1N0cmluZygpO1xuICAgICAgXG4gICAgfSBjYXRjaCAoZSkge1xuXG4gICAgfVxuIFxuICAgIC8vIGNvbnNvbGUubG9nKFwiX2NoYW5nZURhdGVcIix0aGlzLmZpbHRlcl92YWx1ZSk7XG4gICAgdGhpcy5jaGFuZ2VIZWFkZXJGaWx0ZXIuZW1pdCh7XG4gICAgICBwcm9wOnRoaXMuY29sLFxuICAgICAgdmFsdWU6IHRoaXMuZmlsdGVyX3ZhbHVlLFxuICAgICAgLy9jb25kaXRpb246IFsgdGhpcy5jb2wucHJvcCwgdGhpcy5vcF9maWx0ZXIudmFsdWUsIHRoaXMuZmlsdGVyX3ZhbHVlIF1cbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=