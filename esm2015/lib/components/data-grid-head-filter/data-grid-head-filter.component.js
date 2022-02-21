import { EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { DataGridOpFilterComponent } from '../data-grid-op-filter/data-grid-op-filter.component';
import { DataGridPickerDateComponent } from '../data-grid-picker-date/data-grid-picker-date.component';
export class DataGridHeadFilterComponent {
    constructor() {
        this.filter_value1 = '';
        this.filter_value2 = '';
        this.changeHeaderFilter = new EventEmitter();
        // Récupération de tous les filtres
        // @ViewChildren('op_filter') op_filters:QueryList<DataGridOpFilterComponent>;
        this.astuce_datapicker = 'display: none';
        this.isMultipleValue = false;
        this.date1 = null;
        this.date2 = null;
    }
    ngOnInit() {
        if (this.col.dataType == 'date') {
            this.astuce_datapicker = 'display: block';
        }
        if (this.col.selectedFilter) {
            if (typeof (this.col.selectedFilter.value) == 'object' && this.col.selectedFilter.value.length > 0) {
                if (this.col.dataType == 'date') {
                    this.date1 = new Date(this.col.selectedFilter.value[0].toString());
                    if (this.col.selectedFilter.value.length > 1) {
                        this.date2 = new Date(this.col.selectedFilter.value[1].toString());
                    }
                }
                else {
                    this.filter_value1 = this.col.selectedFilter.value[0].toString();
                    if (this.col.selectedFilter.value.length > 1) {
                        this.filter_value2 = this.col.selectedFilter.value[1].toString();
                    }
                }
            }
            else {
                if (this.col.selectedFilter.value != undefined) {
                    this.filter_value1 = this.col.selectedFilter.value.toString();
                    this.filter_value2 = '';
                }
            }
        }
    }
    ngAfterViewInit() {
        // Récupération de tous les filtres
        //console.log('op_filters',this.op_filters.toArray());
    }
    getFilter() {
        // console.log('getFilter',this.col)
        if (this.col.filter == false) {
            return null;
        }
        if (this.filter_value1 != '' ||
            this.col.dataType == 'boolean' ||
            this.col.dataType == 'bool' || this.col.headFilter != null) {
            let o = this.op_filter.getConditions(this.filter_value1, this.filter_value2);
            // console.log('getConditions '+this.col.prop+ " o",o)
            return o;
        }
        return null;
    }
    _changeEmptyOperator(event) {
        // console.log("_changeEmptyOperator");
        //this.isMultipleValue = event.isMultipleValue;
        this.madate_picker1.setDate(null);
        this.madate_picker2.setDate(null);
    }
    _changeOperator(event, fromInputKey) {
        // console.log("event.isMultipleValue;",event.isMultipleValue)
        // Récupération de tous les filtres
        // for (let c of this.op_filters.toArray()) {
        // }
        if (fromInputKey == false)
            this.isMultipleValue = event.isMultipleValue;
        if (this.col.filter == false) {
            return;
        }
        // console.log('RECEIVE CHANGE OP',this.col, 'OP',this.filter_value1,this.filter_value2)
        //console.log('EMIT changeHeaderFilter', fromInputKey);
        if (fromInputKey)
            this.op_filter.setFirstChoice();
        this.changeHeaderFilter.emit({
            prop: this.col,
        });
    }
    _changeDate1(date) {
        if (this.col.filter == false) {
            return;
        }
        this.filter_value1 = '';
        try {
            // On supprime la notion de Timezone pour la sélection de date
            this.filter_value1 = date.toISOString().replace(/T.+/, ''); //.replace(/T.+/,'T00:00:00.000Z');
        }
        catch (e) {
        }
        this.changeHeaderFilter.emit({
            prop: this.col,
        });
    }
    _changeDate2(date) {
        if (this.col.filter == false) {
            return;
        }
        this.filter_value2 = '';
        try {
            // On supprime la notion de Timezone pour la sélection de date
            this.filter_value2 = date.toISOString().replace(/T.+/, ''); //.replace(/T.+/,'T00:00:00.000Z');
        }
        catch (e) {
        }
        this.changeHeaderFilter.emit({
            prop: this.col,
        });
    }
}
DataGridHeadFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'ma-data-grid-head-filter',
                template: "<table>\n    <tr>\n        <td class=\"header_filter_op\">\n           <ma-data-grid-op-filter #op_filter [col]=\"col\" (changeEmptyOperator)=\"_changeEmptyOperator($event)\" (changeOperator)=\"_changeOperator($event,false)\"></ma-data-grid-op-filter>\n        </td>\n        <td class=\"header_filter\" *ngIf=\"col.dataType != 'date' && col.dataType != 'bool' && col.dataType != 'boolean' && (!col.headFilter || col.headFilter.length == 0)\">\n            <div>\n                <input class=\"header_filter\" [(ngModel)]=\"filter_value1\" (keyup)=\"_changeOperator($event,true)\" />\n            </div>\n            <div *ngIf=\"isMultipleValue\">\n                <input class=\"header_filter\" [(ngModel)]=\"filter_value2\" (keyup)=\"_changeOperator($event,true)\" />\n            </div>\n        </td>\n        <td class=\"header_filter\" [style]=\"astuce_datapicker\">\n            <div>\n                <ma-data-grid-datepicker #madate_picker1 [date]=\"date1\" [materialize]=\"false\" type=\"date\" (changePicker)=\"_changeDate1($event)\"></ma-data-grid-datepicker>\n            </div>\n            <div *ngIf=\"isMultipleValue\">\n                <ma-data-grid-datepicker #madate_picker2 [date]=\"date2\" [materialize]=\"false\" type=\"date\" (changePicker)=\"_changeDate2($event)\"></ma-data-grid-datepicker>\n            </div>\n        </td>\n    </tr>\n</table>",
                styles: ["input.header_filter{background-color:#e8f5f8;border:0 inset #9e9e9e;height:1.2rem;margin:0 0 0 -5px}/deep/ .ma-data-grid-datepicker{height:1.2rem;max-height:1.2rem}td.header_filter{padding:1px 1px 1px 5px}td.header_filter_op{padding:1px 1px 1px 0}"]
            },] }
];
DataGridHeadFilterComponent.ctorParameters = () => [];
DataGridHeadFilterComponent.propDecorators = {
    filter_value1: [{ type: Input }],
    filter_value2: [{ type: Input }],
    col: [{ type: Input }],
    changeHeaderFilter: [{ type: Output }],
    op_filter: [{ type: ViewChild, args: [DataGridOpFilterComponent,] }],
    madate_picker1: [{ type: ViewChild, args: [DataGridPickerDateComponent,] }],
    madate_picker2: [{ type: ViewChild, args: [DataGridPickerDateComponent,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLWhlYWQtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJEOi9NeUhvbWUvYW5kcm9pZC93b3Jrc3BhY2UvZ2l0L21hLW5nLWRhdGEtZ3JpZC9wcm9qZWN0cy9tYS1kYXRhLWdyaWQvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0YS1ncmlkLWhlYWQtZmlsdGVyL2RhdGEtZ3JpZC1oZWFkLWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUE2QixZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxTQUFTLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQzNILE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLHlCQUF5QixFQUFpQixNQUFNLHNEQUFzRCxDQUFDO0FBQ2hILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBT3ZHLE1BQU0sT0FBTywyQkFBMkI7SUFldEM7UUFiUyxrQkFBYSxHQUFZLEVBQUUsQ0FBQztRQUM1QixrQkFBYSxHQUFZLEVBQUUsQ0FBQztRQUUzQix1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBSXZELG1DQUFtQztRQUNuQyw4RUFBOEU7UUFDOUUsc0JBQWlCLEdBQVcsZUFBZSxDQUFDO1FBQzVDLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBQ2pDLFVBQUssR0FBUyxJQUFJLENBQUM7UUFDbkIsVUFBSyxHQUFTLElBQUksQ0FBQztJQUNILENBQUM7SUFFakIsUUFBUTtRQUVOLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksTUFBTSxFQUFFO1lBQy9CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQztTQUMzQztRQUNELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUU7WUFDM0IsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFD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SUFBSSxDQUFDLEdBQUc7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFsSUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLDAyQ0FBcUQ7O2FBRXREOzs7OzRCQUdFLEtBQUs7NEJBQ0wsS0FBSztrQkFDTCxLQUFLO2lDQUNMLE1BQU07d0JBQ04sU0FBUyxTQUFDLHlCQUF5Qjs2QkFDbkMsU0FBUyxTQUFDLDJCQUEyQjs2QkFDckMsU0FBUyxTQUFDLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgUXVlcnlMaXN0LCBWaWV3Q2hpbGQsIFZpZXdDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hRGF0YUdyaWRDb2x1bW5PcHRpb25zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9tYS1kYXRhLWdyaWQtb3B0aW9ucyc7XG5pbXBvcnQgeyBEYXRhR3JpZE9wRmlsdGVyQ29tcG9uZW50LCBPcGVyYXRvckV2ZW50IH0gZnJvbSAnLi4vZGF0YS1ncmlkLW9wLWZpbHRlci9kYXRhLWdyaWQtb3AtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhR3JpZFBpY2tlckRhdGVDb21wb25lbnQgfSBmcm9tICcuLi9kYXRhLWdyaWQtcGlja2VyLWRhdGUvZGF0YS1ncmlkLXBpY2tlci1kYXRlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hLWRhdGEtZ3JpZC1oZWFkLWZpbHRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLWdyaWQtaGVhZC1maWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXRhLWdyaWQtaGVhZC1maWx0ZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGFHcmlkSGVhZEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgQElucHV0KCkgZmlsdGVyX3ZhbHVlMSA6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBmaWx0ZXJfdmFsdWUyIDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGNvbDogTWFEYXRhR3JpZENvbHVtbk9wdGlvbnM7XG4gIEBPdXRwdXQoKSBjaGFuZ2VIZWFkZXJGaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQFZpZXdDaGlsZChEYXRhR3JpZE9wRmlsdGVyQ29tcG9uZW50KSBvcF9maWx0ZXI6IERhdGFHcmlkT3BGaWx0ZXJDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoRGF0YUdyaWRQaWNrZXJEYXRlQ29tcG9uZW50KSBtYWRhdGVfcGlja2VyMTogRGF0YUdyaWRQaWNrZXJEYXRlQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKERhdGFHcmlkUGlja2VyRGF0ZUNvbXBvbmVudCkgbWFkYXRlX3BpY2tlcjI6IERhdGFHcmlkUGlja2VyRGF0ZUNvbXBvbmVudDtcbiAgLy8gUsOpY3Vww6lyYXRpb24gZGUgdG91cyBsZXMgZmlsdHJlc1xuICAvLyBAVmlld0NoaWxkcmVuKCdvcF9maWx0ZXInKSBvcF9maWx0ZXJzOlF1ZXJ5TGlzdDxEYXRhR3JpZE9wRmlsdGVyQ29tcG9uZW50PjtcbiAgYXN0dWNlX2RhdGFwaWNrZXI6IHN0cmluZyA9ICdkaXNwbGF5OiBub25lJztcbiAgaXNNdWx0aXBsZVZhbHVlOiBib29sZWFuID0gZmFsc2U7XG4gIGRhdGUxOiBEYXRlID0gbnVsbDtcbiAgZGF0ZTI6IERhdGUgPSBudWxsO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIFxuICAgIGlmICh0aGlzLmNvbC5kYXRhVHlwZSA9PSAnZGF0ZScpIHtcbiAgICAgIHRoaXMuYXN0dWNlX2RhdGFwaWNrZXIgPSAnZGlzcGxheTogYmxvY2snO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2wuc2VsZWN0ZWRGaWx0ZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgKHRoaXMuY29sLnNlbGVjdGVkRmlsdGVyLnZhbHVlKSA9PSAnb2JqZWN0JyAmJiB0aGlzLmNvbC5zZWxlY3RlZEZpbHRlci52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbC5kYXRhVHlwZSA9PSAnZGF0ZScpIHtcbiAgICAgICAgICB0aGlzLmRhdGUxID0gbmV3IERhdGUodGhpcy5jb2wuc2VsZWN0ZWRGaWx0ZXIudmFsdWVbMF0udG9TdHJpbmcoKSk7XG4gICAgICAgICAgaWYgKHRoaXMuY29sLnNlbGVjdGVkRmlsdGVyLnZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZTIgPSBuZXcgRGF0ZSh0aGlzLmNvbC5zZWxlY3RlZEZpbHRlci52YWx1ZVsxXS50b1N0cmluZygpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5maWx0ZXJfdmFsdWUxID0gdGhpcy5jb2wuc2VsZWN0ZWRGaWx0ZXIudmFsdWVbMF0udG9TdHJpbmcoKTtcbiAgICAgICAgICBpZiAodGhpcy5jb2wuc2VsZWN0ZWRGaWx0ZXIudmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJfdmFsdWUyID0gdGhpcy5jb2wuc2VsZWN0ZWRGaWx0ZXIudmFsdWVbMV0udG9TdHJpbmcoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5jb2wuc2VsZWN0ZWRGaWx0ZXIudmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5maWx0ZXJfdmFsdWUxID0gdGhpcy5jb2wuc2VsZWN0ZWRGaWx0ZXIudmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgICB0aGlzLmZpbHRlcl92YWx1ZTIgPSAnJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAvLyBSw6ljdXDDqXJhdGlvbiBkZSB0b3VzIGxlcyBmaWx0cmVzXG4gICAgLy9jb25zb2xlLmxvZygnb3BfZmlsdGVycycsdGhpcy5vcF9maWx0ZXJzLnRvQXJyYXkoKSk7XG4gIH1cblxuICBnZXRGaWx0ZXIgKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdnZXRGaWx0ZXInLHRoaXMuY29sKVxuICAgIGlmICh0aGlzLmNvbC5maWx0ZXIgPT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5maWx0ZXJfdmFsdWUxICE9ICcnIHx8IFxuICAgICAgICB0aGlzLmNvbC5kYXRhVHlwZSA9PSAnYm9vbGVhbicgfHwgXG4gICAgICAgIHRoaXMuY29sLmRhdGFUeXBlID09ICdib29sJyB8fCB0aGlzLmNvbC5oZWFkRmlsdGVyICE9IG51bGwpIHtcbiAgICAgXG4gICAgICBcbiAgICAgIGxldCBvID0gdGhpcy5vcF9maWx0ZXIuZ2V0Q29uZGl0aW9ucyh0aGlzLmZpbHRlcl92YWx1ZTEsdGhpcy5maWx0ZXJfdmFsdWUyKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdnZXRDb25kaXRpb25zICcrdGhpcy5jb2wucHJvcCsgXCIgb1wiLG8pXG4gICAgICByZXR1cm4gbztcbiAgICAgIFxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIF9jaGFuZ2VFbXB0eU9wZXJhdG9yKGV2ZW50Ok9wZXJhdG9yRXZlbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIl9jaGFuZ2VFbXB0eU9wZXJhdG9yXCIpO1xuICAgIC8vdGhpcy5pc011bHRpcGxlVmFsdWUgPSBldmVudC5pc011bHRpcGxlVmFsdWU7XG4gICAgdGhpcy5tYWRhdGVfcGlja2VyMS5zZXREYXRlKG51bGwpO1xuICAgIHRoaXMubWFkYXRlX3BpY2tlcjIuc2V0RGF0ZShudWxsKTtcbiAgfVxuXG4gIF9jaGFuZ2VPcGVyYXRvcihldmVudDpPcGVyYXRvckV2ZW50LGZyb21JbnB1dEtleTpib29sZWFuKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJldmVudC5pc011bHRpcGxlVmFsdWU7XCIsZXZlbnQuaXNNdWx0aXBsZVZhbHVlKVxuICAgIC8vIFLDqWN1cMOpcmF0aW9uIGRlIHRvdXMgbGVzIGZpbHRyZXNcbiAgICAvLyBmb3IgKGxldCBjIG9mIHRoaXMub3BfZmlsdGVycy50b0FycmF5KCkpIHtcbiAgICAvLyB9XG4gICAgaWYgKGZyb21JbnB1dEtleSA9PSBmYWxzZSlcbiAgICAgIHRoaXMuaXNNdWx0aXBsZVZhbHVlID0gZXZlbnQuaXNNdWx0aXBsZVZhbHVlO1xuICAgIGlmICh0aGlzLmNvbC5maWx0ZXIgPT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ1JFQ0VJVkUgQ0hBTkdFIE9QJyx0aGlzLmNvbCwgJ09QJyx0aGlzLmZpbHRlcl92YWx1ZTEsdGhpcy5maWx0ZXJfdmFsdWUyKVxuICAgIC8vY29uc29sZS5sb2coJ0VNSVQgY2hhbmdlSGVhZGVyRmlsdGVyJywgZnJvbUlucHV0S2V5KTtcbiAgICBpZiAoZnJvbUlucHV0S2V5KVxuICAgICAgdGhpcy5vcF9maWx0ZXIuc2V0Rmlyc3RDaG9pY2UoKTtcbiAgICB0aGlzLmNoYW5nZUhlYWRlckZpbHRlci5lbWl0KHtcbiAgICAgIHByb3A6dGhpcy5jb2wsXG4gICAgfSk7XG4gIH1cblxuICBfY2hhbmdlRGF0ZTEoZGF0ZSkge1xuICAgIGlmICh0aGlzLmNvbC5maWx0ZXIgPT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5maWx0ZXJfdmFsdWUxID0gJyc7XG4gICAgdHJ5IHtcbiAgICAgIC8vIE9uIHN1cHByaW1lIGxhIG5vdGlvbiBkZSBUaW1lem9uZSBwb3VyIGxhIHPDqWxlY3Rpb24gZGUgZGF0ZVxuICAgICAgdGhpcy5maWx0ZXJfdmFsdWUxPSBkYXRlLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvVC4rLywnJyk7Ly8ucmVwbGFjZSgvVC4rLywnVDAwOjAwOjAwLjAwMFonKTtcbiAgICB9IGNhdGNoIChlKSB7XG5cbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VIZWFkZXJGaWx0ZXIuZW1pdCh7XG4gICAgICBwcm9wOnRoaXMuY29sLFxuICAgIH0pO1xuICB9XG5cbiAgX2NoYW5nZURhdGUyKGRhdGUpIHtcbiAgICBpZiAodGhpcy5jb2wuZmlsdGVyID09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZmlsdGVyX3ZhbHVlMiA9ICcnO1xuICAgIHRyeSB7XG4gICAgICAvLyBPbiBzdXBwcmltZSBsYSBub3Rpb24gZGUgVGltZXpvbmUgcG91ciBsYSBzw6lsZWN0aW9uIGRlIGRhdGVcbiAgICAgIHRoaXMuZmlsdGVyX3ZhbHVlMj0gZGF0ZS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1QuKy8sJycpOy8vLnJlcGxhY2UoL1QuKy8sJ1QwMDowMDowMC4wMDBaJyk7XG4gICAgfSBjYXRjaCAoZSkge1xuXG4gICAgfVxuICAgIHRoaXMuY2hhbmdlSGVhZGVyRmlsdGVyLmVtaXQoe1xuICAgICAgcHJvcDp0aGlzLmNvbCxcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=