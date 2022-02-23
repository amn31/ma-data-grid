import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as $ from 'jquery';
import * as M from 'materialize-css';
export class MaGridFilterComponent {
    constructor() {
        this.placeholder = 'Enter filter';
        this.customCSS = "";
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
    ngAfterViewInit() {
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
                template: "<div class=\"row ma-grid-filter\">\n    <div class=\"input-field col s3\"  >\n        <i (click)=\"enableFocus()\" class=\"material-icons prefix\">search</i>\n          <input [id]=\"input_filter\" type=\"text\" class=\"validate\" (keyup)=\"updateFilter($event)\">\n          <label for=\"icon_prefix\">{{placeholder}}</label>\n    </div>\n    <div class=\"col s8 {{customCSS}}ma-grid-filter-checkboxes\">\n        <div class=\"title_field\"> Select column(s) filter</div>\n        <!--  [disabled]=\"selectedFields.length == 0\"\n<span *ngFor=\"let col of columns\"> {{col.prop}} | </span>\n[(ngModel)]=\"col.extFilterSelected\" \n[ngClass]=\"{'disabled':selectedFields.length >= 0}\"\n        -->\n        <div class=\"checkbox_field\" *ngFor=\"let col of filters;last as isLast;index as i;\">\n            <label *ngIf=\"col.extFilter === true\">\n                <input type=\"checkbox\" [checked]=\"col.extFilterSelected\" (click)=\"clickChekbox(col)\" />\n                <span class=\"checkbox_title\">{{col.title}}</span>\n                <span *ngIf=\"!isLast\" class=\"checkbox_separator\">|</span>\n            </label>\n        </div>\n    </div>\n</div>\n",
                styles: [":host{--border-size:0px;--color-border:#667;--color-defaut:#667}.ma-grid-filter .ma-grid-filter-checkboxes{border:1px solid var(--color-border);color:var(--color-defaut);margin-right:10px}.ma-grid-filter .title_field{font-weight:500;margin-left:15px}.ma-grid-filter .checkbox_field{display:inline;margin-left:5px;margin-right:5px}.ma-grid-filter span.checkbox_title{min-width:70px;padding-left:22px}.ma-grid-filter span.checkbox_title:after{content:\"|\"}.ma-grid-filter span.checkbox_separator{font-size:large;margin-left:5px}"]
            },] }
];
MaGridFilterComponent.ctorParameters = () => [];
MaGridFilterComponent.propDecorators = {
    searchValue: [{ type: Input }],
    customCSS: [{ type: Input }],
    searchValueChange: [{ type: Output }],
    columns: [{ type: Input }],
    filterChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtZ3JpZC1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkQ6L015SG9tZS9hbmRyb2lkL3dvcmtzcGFjZS9naXQvbWEtbmctZGF0YS1ncmlkL3Byb2plY3RzL21hLWRhdGEtZ3JpZC9zcmMvIiwic291cmNlcyI6WyJsaWIvbWEtZ3JpZC1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEtBQU0sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUM3QixPQUFPLEtBQU0sQ0FBQyxNQUFNLGlCQUFpQixDQUFDO0FBUXRDLE1BQU0sT0FBTyxxQkFBcUI7SUFHaEM7UUFFQSxnQkFBVyxHQUFHLGNBQWMsQ0FBQTtRQUVuQixjQUFTLEdBQVksRUFBRSxDQUFDO1FBQ3ZCLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDeEMsWUFBTyxHQUE4QixFQUFFLENBQUM7UUFDdkMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBeUIsQ0FBQztRQUNuRSxpQkFBWSxHQUFXLEtBQUssR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDakUsWUFBTyxHQUFVLEVBQUUsQ0FBQztRQUNwQixtQkFBYyxHQUFHLEVBQUUsQ0FBQztJQVZKLENBQUM7SUFZakIsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLHdDQUF3QztRQUN4QyxrRkFBa0Y7UUFDbEYsc0JBQXNCO1FBQ3RCLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUNyQix3REFBd0Q7WUFDeEQsQ0FBQyxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDbEU7SUFDSCxDQUFDO0lBRUQsZUFBZTtJQUVmLENBQUM7SUFFRCxLQUFLO1FBRUgsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDekIsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzVCLElBQUksR0FBRyxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7Z0JBQzFCLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFO29CQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3BDO2dCQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN2QztTQUNGO1FBQ0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRW5CLDhGQUE4RjtJQUNoRyxDQUFDO0lBRUQsUUFBUTtRQUNOLDREQUE0RDtRQUM1RCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUV2QixDQUFDO0lBRUQsWUFBWSxDQUFDLEdBQUc7UUFFZCxvQkFBb0I7UUFDcEIsR0FBRyxDQUFDLGlCQUFpQixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNsQyxDQUFDLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNsQzthQUFNO1lBQ0wsQ0FBQyxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQVM7UUFDcEIsdUVBQXVFO1FBRXZFLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsbUNBQW1DO1FBQy9FLHdDQUF3QztRQUN4QyxrRkFBa0Y7UUFDbEYsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzdDLElBQUksQ0FBQyxHQUEyQjtZQUM5QixJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsY0FBYztTQUN2QyxDQUFBO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7O1lBeEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQiw0cENBQThDOzthQUUvQzs7OzswQkFPRSxLQUFLO3dCQUNMLEtBQUs7Z0NBQ0wsTUFBTTtzQkFDTixLQUFLOzJCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiAgYXMgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICogIGFzIE0gZnJvbSAnbWF0ZXJpYWxpemUtY3NzJztcbmltcG9ydCB7IE1hRGF0YUdyaWRGaWx0ZXJFdmVudCwgTWFEYXRhR3JpZENvbHVtbk9wdGlvbnMgfSBmcm9tICcuL2ludGVyZmFjZXMvbWEtZGF0YS1ncmlkLW9wdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYS1kYXRhLWdyaWQtZmlsdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hLWdyaWQtZmlsdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWEtZ3JpZC1maWx0ZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1hR3JpZEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIFxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIFxuICBwbGFjZWhvbGRlciA9ICdFbnRlciBmaWx0ZXInXG4gIEBJbnB1dCgpIHNlYXJjaFZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbUNTUzogIHN0cmluZyA9IFwiXCI7XG4gIEBPdXRwdXQoKSBzZWFyY2hWYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgY29sdW1uczogTWFEYXRhR3JpZENvbHVtbk9wdGlvbnNbXSA9IFtdO1xuICBAT3V0cHV0KCkgZmlsdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxNYURhdGFHcmlkRmlsdGVyRXZlbnQ+KCk7XG4gIGlucHV0X2ZpbHRlcjogc3RyaW5nID0gXCJpZl9cIitNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpKiAxMDAwMDApKTtcbiAgZmlsdGVyczogYW55W10gPSBbXTtcbiAgc2VsZWN0ZWRGaWVsZHMgPSBbXTtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5faW5pdCgpO1xuICAgIC8vIGJpbmRpbmcgOiBkYXRhZ3JpZCAtPiBkYXRhZ3JpZC1maWx0ZXJcbiAgICAvLyBMZSBkYXRhZ3JpZCBlc3QgZW4gYmluZGluZyBkYW5zIGxlIDIgc2VucyBncmFjZSDDoCBbKHNlYXJjaFZhbHVlKV09XCJzZWFyY2hWYWx1ZVwiXG4gICAgLy8gZXQgbGUgY29kZSBxdWkgc3VpdFxuICAgIGlmIChjaGFuZ2VzLnNlYXJjaFZhbHVlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhbmdlcy5zZWFyY2hWYWx1ZSBcIit0aGlzLnNlYXJjaFZhbHVlKTtcbiAgICAgICAgJCgnIycrdGhpcy5pbnB1dF9maWx0ZXIpLnZhbChjaGFuZ2VzLnNlYXJjaFZhbHVlLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIFxuICB9XG5cbiAgX2luaXQoKSB7XG5cbiAgICB0aGlzLmZpbHRlcnMgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkRmllbGRzID0gW107XG4gICAgZm9yIChsZXQgY29sIG9mIHRoaXMuY29sdW1ucykge1xuICAgICAgaWYgKGNvbC5leHRGaWx0ZXIgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKGNvbC5leHRGaWx0ZXJTZWxlY3RlZCkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGaWVsZHMucHVzaChjb2wucHJvcCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWx0ZXJzLnB1c2goT2JqZWN0LmFzc2lnbihjb2wpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5lbmFibGVGb2N1cygpO1xuICAgIFxuICAgIC8vIGNvbnNvbGUubG9nKCdmaWx0ZXJzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScsIHRoaXMuZmlsdGVycywgdGhpcy5zZWxlY3RlZEZpZWxkcylcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIGNvbnNvbGUubG9nKCduZ09uSW5pdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0nKVxuICAgIHRoaXMuX2luaXQoKTtcbiAgICBNLnVwZGF0ZVRleHRGaWVsZHMoKTsgXG4gICAgXG4gIH1cblxuICBjbGlja0NoZWtib3goY29sKSB7XG4gICAgXG4gICAgLy8gY29uc29sZS5sb2coY29sKTtcbiAgICBjb2wuZXh0RmlsdGVyU2VsZWN0ZWQgPSAhY29sLmV4dEZpbHRlclNlbGVjdGVkO1xuICAgIHRoaXMuX2luaXQoKTtcbiAgICB0aGlzLnVwZGF0ZUZpbHRlcihudWxsKTtcbiAgfVxuXG4gIGVuYWJsZUZvY3VzKCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkRmllbGRzLmxlbmd0aCA+IDApIHtcbiAgICAgICQoJyMnK3RoaXMuaW5wdXRfZmlsdGVyKS5mb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcjJyt0aGlzLmlucHV0X2ZpbHRlcikuYmx1cigpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUZpbHRlcihldmVudDphbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygndXBkYXRlRmlsdGVyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScsZXZlbnQpO1xuICAgIFxuICAgIGNvbnN0IHZhbCA9ICQoJyMnK3RoaXMuaW5wdXRfZmlsdGVyKS52YWwoKTsgLy9ldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAvLyBiaW5kaW5nOiBkYXRhZ3JpZC1maWx0ZXIgLT4gZGF0YWdyaWQgXG4gICAgLy8gTGUgZGF0YWdyaWQgZXN0IGVuIGJpbmRpbmcgZGFucyBsZSAyIHNlbnMgZ3JhY2Ugw6AgWyhzZWFyY2hWYWx1ZSldPVwic2VhcmNoVmFsdWVcIlxuICAgIC8vIGV0IGxlIGNvZGUgcXVpIHN1aXRcbiAgICB0aGlzLnNlYXJjaFZhbHVlID0gdmFsO1xuICAgIHRoaXMuc2VhcmNoVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnNlYXJjaFZhbHVlKVxuICAgIGxldCBlIDogTWFEYXRhR3JpZEZpbHRlckV2ZW50ID0ge1xuICAgICAgdGV4dDogdmFsLCBmaWVsZHM6IHRoaXMuc2VsZWN0ZWRGaWVsZHNcbiAgICB9XG4gICAgdGhpcy5maWx0ZXJDaGFuZ2UuZW1pdChlKTtcbiAgfVxuXG59XG5cbiJdfQ==