import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as $ from 'jquery';
import * as M from 'materialize-css';
export class MaGridFilterComponent {
    constructor() {
        this.placeholder = 'Enter filter';
        this.searchValueChange = new EventEmitter();
        this.columns = [];
        this.filterChange = new EventEmitter();
        this.input_filter = "if_" + Math.floor((Math.random() * 100000));
        this.filters = [];
        this.selectedFields = [];
    }
    ngOnChanges(changes) {
        this._init();
        // binding : datagrid -> datagrid-filter
        // Le datagrid est en binding dans le 2 sens grace à [(searchValue)]="searchValue"
        // et le code qui suit
        if (changes.searchValue) {
            // console.log("changes.searchValue "+this.searchValue);
            $('#' + this.input_filter).val(changes.searchValue.currentValue);
        }
    }
    _init() {
        this.filters = [];
        this.selectedFields = [];
        for (let col of this.columns) {
            if (col.extFilter === true) {
                if (col.extFilterSelected) {
                    this.selectedFields.push(col.prop);
                }
                this.filters.push(Object.assign(col));
            }
        }
        this.enableFocus();
        // console.log('filters =================================', this.filters, this.selectedFields)
    }
    ngOnInit() {
        // console.log('ngOnInit =================================')
        this._init();
        M.updateTextFields();
    }
    clickChekbox(col) {
        // console.log(col);
        col.extFilterSelected = !col.extFilterSelected;
        this._init();
        this.updateFilter(null);
    }
    enableFocus() {
        if (this.selectedFields.length > 0) {
            $('#' + this.input_filter).focus();
        }
        else {
            $('#' + this.input_filter).blur();
        }
    }
    updateFilter(event) {
        // console.log('updateFilter =================================',event);
        const val = $('#' + this.input_filter).val(); //event.target.value.toLowerCase();
        // binding: datagrid-filter -> datagrid 
        // Le datagrid est en binding dans le 2 sens grace à [(searchValue)]="searchValue"
        // et le code qui suit
        this.searchValue = val;
        this.searchValueChange.emit(this.searchValue);
        let e = {
            text: val, fields: this.selectedFields
        };
        this.filterChange.emit(e);
    }
}
MaGridFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'ma-data-grid-filter',
                template: "<div class=\"row ma-grid-filter\">\n    <div class=\"input-field col s3\"  >\n        <i (click)=\"enableFocus()\" class=\"material-icons prefix\">search</i>\n          <input [id]=\"input_filter\" type=\"text\" class=\"validate\" (keyup)=\"updateFilter($event)\">\n          <label for=\"icon_prefix\">{{placeholder}}</label>\n    </div>\n    <div class=\"col s8 checkboxes_part\">\n        <div class=\"title_field\"> Select column(s) filter</div>\n        <!--  [disabled]=\"selectedFields.length == 0\"\n<span *ngFor=\"let col of columns\"> {{col.prop}} | </span>\n[(ngModel)]=\"col.extFilterSelected\" \n[ngClass]=\"{'disabled':selectedFields.length >= 0}\"\n        -->\n        <div class=\"checkbox_field\" *ngFor=\"let col of filters;last as isLast;index as i;\">\n            <label *ngIf=\"col.extFilter === true\">\n                <input type=\"checkbox\" [checked]=\"col.extFilterSelected\" (click)=\"clickChekbox(col)\" />\n                <span class=\"checkbox_title\">{{col.title}}</span>\n                <span *ngIf=\"!isLast\" class=\"checkbox_separator\">|</span>\n            </label>\n        </div>\n    </div>\n</div>\n",
                styles: [".ma-grid-filter .checkboxes_part{border:1px solid #667;color:#667;margin-right:10px}.ma-grid-filter .title_field{font-weight:500;margin-left:15px}.ma-grid-filter .checkbox_field{display:inline;margin-left:5px;margin-right:5px}.ma-grid-filter span.checkbox_title{min-width:70px;padding-left:22px}.ma-grid-filter span.checkbox_title:after{content:\"|\"}.ma-grid-filter span.checkbox_separator{font-size:large;margin-left:5px}"]
            },] }
];
MaGridFilterComponent.ctorParameters = () => [];
MaGridFilterComponent.propDecorators = {
    searchValue: [{ type: Input }],
    searchValueChange: [{ type: Output }],
    columns: [{ type: Input }],
    filterChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtZ3JpZC1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkQ6L015SG9tZS9hbmRyb2lkL3dvcmtzcGFjZS9naXQvbWEtbmctZGF0YWdyaWQvcHJvamVjdHMvbWEtZGF0YS1ncmlkL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9tYS1ncmlkLWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxLQUFNLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDN0IsT0FBTyxLQUFNLENBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQVF0QyxNQUFNLE9BQU8scUJBQXFCO0lBR2hDO1FBR0EsZ0JBQVcsR0FBRyxjQUFjLENBQUE7UUFFbEIsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN4QyxZQUFPLEdBQThCLEVBQUUsQ0FBQztRQUN2QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUF5QixDQUFDO1FBQ25FLGlCQUFZLEdBQVcsS0FBSyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNqRSxZQUFPLEdBQVUsRUFBRSxDQUFDO1FBQ3BCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO0lBVkosQ0FBQztJQVlqQixXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2Isd0NBQXdDO1FBQ3hDLGtGQUFrRjtRQUNsRixzQkFBc0I7UUFDdEIsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFO1lBQ3JCLHdEQUF3RDtZQUN4RCxDQUFDLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNsRTtJQUNILENBQUM7SUFFRCxLQUFLO1FBRUgsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDekIsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzVCLElBQUksR0FBRyxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7Z0JBQzFCLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFO29CQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3BDO2dCQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN2QztTQUNGO1FBQ0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRW5CLDhGQUE4RjtJQUNoRyxDQUFDO0lBRUQsUUFBUTtRQUNOLDREQUE0RDtRQUM1RCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUV2QixDQUFDO0lBRUQsWUFBWSxDQUFDLEdBQUc7UUFFZCxvQkFBb0I7UUFDcEIsR0FBRyxDQUFDLGlCQUFpQixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNsQyxDQUFDLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNsQzthQUFNO1lBQ0wsQ0FBQyxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQVM7UUFDcEIsdUVBQXVFO1FBRXZFLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsbUNBQW1DO1FBQy9FLHdDQUF3QztRQUN4QyxrRkFBa0Y7UUFDbEYsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzdDLElBQUksQ0FBQyxHQUEyQjtZQUM5QixJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsY0FBYztTQUN2QyxDQUFBO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7O1lBcEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixxb0NBQThDOzthQUUvQzs7OzswQkFRRSxLQUFLO2dDQUNMLE1BQU07c0JBQ04sS0FBSzsyQkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogIGFzICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAqICBhcyBNIGZyb20gJ21hdGVyaWFsaXplLWNzcyc7XG5pbXBvcnQgeyBNYURhdGFHcmlkRmlsdGVyRXZlbnQsIE1hRGF0YUdyaWRDb2x1bW5PcHRpb25zIH0gZnJvbSAnLi9pbnRlcmZhY2VzL21hLWRhdGEtZ3JpZC1vcHRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWEtZGF0YS1ncmlkLWZpbHRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9tYS1ncmlkLWZpbHRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hLWdyaWQtZmlsdGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYUdyaWRGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIFxuICBwbGFjZWhvbGRlciA9ICdFbnRlciBmaWx0ZXInXG4gIEBJbnB1dCgpIHNlYXJjaFZhbHVlOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBzZWFyY2hWYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgY29sdW1uczogTWFEYXRhR3JpZENvbHVtbk9wdGlvbnNbXSA9IFtdO1xuICBAT3V0cHV0KCkgZmlsdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxNYURhdGFHcmlkRmlsdGVyRXZlbnQ+KCk7XG4gIGlucHV0X2ZpbHRlcjogc3RyaW5nID0gXCJpZl9cIitNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpKiAxMDAwMDApKTtcbiAgZmlsdGVyczogYW55W10gPSBbXTtcbiAgc2VsZWN0ZWRGaWVsZHMgPSBbXTtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5faW5pdCgpO1xuICAgIC8vIGJpbmRpbmcgOiBkYXRhZ3JpZCAtPiBkYXRhZ3JpZC1maWx0ZXJcbiAgICAvLyBMZSBkYXRhZ3JpZCBlc3QgZW4gYmluZGluZyBkYW5zIGxlIDIgc2VucyBncmFjZSDDoCBbKHNlYXJjaFZhbHVlKV09XCJzZWFyY2hWYWx1ZVwiXG4gICAgLy8gZXQgbGUgY29kZSBxdWkgc3VpdFxuICAgIGlmIChjaGFuZ2VzLnNlYXJjaFZhbHVlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhbmdlcy5zZWFyY2hWYWx1ZSBcIit0aGlzLnNlYXJjaFZhbHVlKTtcbiAgICAgICAgJCgnIycrdGhpcy5pbnB1dF9maWx0ZXIpLnZhbChjaGFuZ2VzLnNlYXJjaFZhbHVlLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgX2luaXQoKSB7XG5cbiAgICB0aGlzLmZpbHRlcnMgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkRmllbGRzID0gW107XG4gICAgZm9yIChsZXQgY29sIG9mIHRoaXMuY29sdW1ucykge1xuICAgICAgaWYgKGNvbC5leHRGaWx0ZXIgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKGNvbC5leHRGaWx0ZXJTZWxlY3RlZCkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGaWVsZHMucHVzaChjb2wucHJvcCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWx0ZXJzLnB1c2goT2JqZWN0LmFzc2lnbihjb2wpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5lbmFibGVGb2N1cygpO1xuICAgIFxuICAgIC8vIGNvbnNvbGUubG9nKCdmaWx0ZXJzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScsIHRoaXMuZmlsdGVycywgdGhpcy5zZWxlY3RlZEZpZWxkcylcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIGNvbnNvbGUubG9nKCduZ09uSW5pdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0nKVxuICAgIHRoaXMuX2luaXQoKTtcbiAgICBNLnVwZGF0ZVRleHRGaWVsZHMoKTsgXG4gICAgXG4gIH1cblxuICBjbGlja0NoZWtib3goY29sKSB7XG4gICAgXG4gICAgLy8gY29uc29sZS5sb2coY29sKTtcbiAgICBjb2wuZXh0RmlsdGVyU2VsZWN0ZWQgPSAhY29sLmV4dEZpbHRlclNlbGVjdGVkO1xuICAgIHRoaXMuX2luaXQoKTtcbiAgICB0aGlzLnVwZGF0ZUZpbHRlcihudWxsKTtcbiAgfVxuXG4gIGVuYWJsZUZvY3VzKCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkRmllbGRzLmxlbmd0aCA+IDApIHtcbiAgICAgICQoJyMnK3RoaXMuaW5wdXRfZmlsdGVyKS5mb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcjJyt0aGlzLmlucHV0X2ZpbHRlcikuYmx1cigpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUZpbHRlcihldmVudDphbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygndXBkYXRlRmlsdGVyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScsZXZlbnQpO1xuICAgIFxuICAgIGNvbnN0IHZhbCA9ICQoJyMnK3RoaXMuaW5wdXRfZmlsdGVyKS52YWwoKTsgLy9ldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAvLyBiaW5kaW5nOiBkYXRhZ3JpZC1maWx0ZXIgLT4gZGF0YWdyaWQgXG4gICAgLy8gTGUgZGF0YWdyaWQgZXN0IGVuIGJpbmRpbmcgZGFucyBsZSAyIHNlbnMgZ3JhY2Ugw6AgWyhzZWFyY2hWYWx1ZSldPVwic2VhcmNoVmFsdWVcIlxuICAgIC8vIGV0IGxlIGNvZGUgcXVpIHN1aXRcbiAgICB0aGlzLnNlYXJjaFZhbHVlID0gdmFsO1xuICAgIHRoaXMuc2VhcmNoVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnNlYXJjaFZhbHVlKVxuICAgIGxldCBlIDogTWFEYXRhR3JpZEZpbHRlckV2ZW50ID0ge1xuICAgICAgdGV4dDogdmFsLCBmaWVsZHM6IHRoaXMuc2VsZWN0ZWRGaWVsZHNcbiAgICB9XG4gICAgdGhpcy5maWx0ZXJDaGFuZ2UuZW1pdChlKTtcbiAgfVxuXG59XG5cbiJdfQ==