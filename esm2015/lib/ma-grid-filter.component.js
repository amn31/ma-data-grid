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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtZ3JpZC1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkQ6L015SG9tZS9hbmRyb2lkL3dvcmtzcGFjZS9naXQvbWEtbmctZGF0YS1ncmlkL3Byb2plY3RzL21hLWRhdGEtZ3JpZC9zcmMvIiwic291cmNlcyI6WyJsaWIvbWEtZ3JpZC1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sS0FBTSxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzdCLE9BQU8sS0FBTSxDQUFDLE1BQU0saUJBQWlCLENBQUM7QUFRdEMsTUFBTSxPQUFPLHFCQUFxQjtJQUdoQztRQUdBLGdCQUFXLEdBQUcsY0FBYyxDQUFBO1FBRW5CLGNBQVMsR0FBWSxFQUFFLENBQUM7UUFDdkIsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN4QyxZQUFPLEdBQThCLEVBQUUsQ0FBQztRQUN2QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUF5QixDQUFDO1FBQ25FLGlCQUFZLEdBQVcsS0FBSyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNqRSxZQUFPLEdBQVUsRUFBRSxDQUFDO1FBQ3BCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO0lBWEosQ0FBQztJQWFqQixXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2Isd0NBQXdDO1FBQ3hDLGtGQUFrRjtRQUNsRixzQkFBc0I7UUFDdEIsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFO1lBQ3JCLHdEQUF3RDtZQUN4RCxDQUFDLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNsRTtJQUNILENBQUM7SUFFRCxLQUFLO1FBRUgsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDekIsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzVCLElBQUksR0FBRyxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7Z0JBQzFCLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFO29CQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3BDO2dCQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN2QztTQUNGO1FBQ0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRW5CLDhGQUE4RjtJQUNoRyxDQUFDO0lBRUQsUUFBUTtRQUNOLDREQUE0RDtRQUM1RCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUV2QixDQUFDO0lBRUQsWUFBWSxDQUFDLEdBQUc7UUFFZCxvQkFBb0I7UUFDcEIsR0FBRyxDQUFDLGlCQUFpQixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNsQyxDQUFDLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNsQzthQUFNO1lBQ0wsQ0FBQyxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQVM7UUFDcEIsdUVBQXVFO1FBRXZFLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsbUNBQW1DO1FBQy9FLHdDQUF3QztRQUN4QyxrRkFBa0Y7UUFDbEYsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzdDLElBQUksQ0FBQyxHQUEyQjtZQUM5QixJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsY0FBYztTQUN2QyxDQUFBO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7O1lBckZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQiw0cENBQThDOzthQUUvQzs7OzswQkFRRSxLQUFLO3dCQUNMLEtBQUs7Z0NBQ0wsTUFBTTtzQkFDTixLQUFLOzJCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiAgYXMgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICogIGFzIE0gZnJvbSAnbWF0ZXJpYWxpemUtY3NzJztcbmltcG9ydCB7IE1hRGF0YUdyaWRGaWx0ZXJFdmVudCwgTWFEYXRhR3JpZENvbHVtbk9wdGlvbnMgfSBmcm9tICcuL2ludGVyZmFjZXMvbWEtZGF0YS1ncmlkLW9wdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYS1kYXRhLWdyaWQtZmlsdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hLWdyaWQtZmlsdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWEtZ3JpZC1maWx0ZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1hR3JpZEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIFxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgXG4gIHBsYWNlaG9sZGVyID0gJ0VudGVyIGZpbHRlcidcbiAgQElucHV0KCkgc2VhcmNoVmFsdWU6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tQ1NTOiAgc3RyaW5nID0gXCJcIjtcbiAgQE91dHB1dCgpIHNlYXJjaFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBjb2x1bW5zOiBNYURhdGFHcmlkQ29sdW1uT3B0aW9uc1tdID0gW107XG4gIEBPdXRwdXQoKSBmaWx0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1hRGF0YUdyaWRGaWx0ZXJFdmVudD4oKTtcbiAgaW5wdXRfZmlsdGVyOiBzdHJpbmcgPSBcImlmX1wiK01hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkqIDEwMDAwMCkpO1xuICBmaWx0ZXJzOiBhbnlbXSA9IFtdO1xuICBzZWxlY3RlZEZpZWxkcyA9IFtdO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLl9pbml0KCk7XG4gICAgLy8gYmluZGluZyA6IGRhdGFncmlkIC0+IGRhdGFncmlkLWZpbHRlclxuICAgIC8vIExlIGRhdGFncmlkIGVzdCBlbiBiaW5kaW5nIGRhbnMgbGUgMiBzZW5zIGdyYWNlIMOgIFsoc2VhcmNoVmFsdWUpXT1cInNlYXJjaFZhbHVlXCJcbiAgICAvLyBldCBsZSBjb2RlIHF1aSBzdWl0XG4gICAgaWYgKGNoYW5nZXMuc2VhcmNoVmFsdWUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjaGFuZ2VzLnNlYXJjaFZhbHVlIFwiK3RoaXMuc2VhcmNoVmFsdWUpO1xuICAgICAgICAkKCcjJyt0aGlzLmlucHV0X2ZpbHRlcikudmFsKGNoYW5nZXMuc2VhcmNoVmFsdWUuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBfaW5pdCgpIHtcblxuICAgIHRoaXMuZmlsdGVycyA9IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWRGaWVsZHMgPSBbXTtcbiAgICBmb3IgKGxldCBjb2wgb2YgdGhpcy5jb2x1bW5zKSB7XG4gICAgICBpZiAoY29sLmV4dEZpbHRlciA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAoY29sLmV4dEZpbHRlclNlbGVjdGVkKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEZpZWxkcy5wdXNoKGNvbC5wcm9wKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpbHRlcnMucHVzaChPYmplY3QuYXNzaWduKGNvbCkpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmVuYWJsZUZvY3VzKCk7XG4gICAgXG4gICAgLy8gY29uc29sZS5sb2coJ2ZpbHRlcnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09JywgdGhpcy5maWx0ZXJzLCB0aGlzLnNlbGVjdGVkRmllbGRzKVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gY29uc29sZS5sb2coJ25nT25Jbml0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpXG4gICAgdGhpcy5faW5pdCgpO1xuICAgIE0udXBkYXRlVGV4dEZpZWxkcygpOyBcbiAgICBcbiAgfVxuXG4gIGNsaWNrQ2hla2JveChjb2wpIHtcbiAgICBcbiAgICAvLyBjb25zb2xlLmxvZyhjb2wpO1xuICAgIGNvbC5leHRGaWx0ZXJTZWxlY3RlZCA9ICFjb2wuZXh0RmlsdGVyU2VsZWN0ZWQ7XG4gICAgdGhpcy5faW5pdCgpO1xuICAgIHRoaXMudXBkYXRlRmlsdGVyKG51bGwpO1xuICB9XG5cbiAgZW5hYmxlRm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRGaWVsZHMubGVuZ3RoID4gMCkge1xuICAgICAgJCgnIycrdGhpcy5pbnB1dF9maWx0ZXIpLmZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJyMnK3RoaXMuaW5wdXRfZmlsdGVyKS5ibHVyKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRmlsdGVyKGV2ZW50OmFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGVGaWx0ZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09JyxldmVudCk7XG4gICAgXG4gICAgY29uc3QgdmFsID0gJCgnIycrdGhpcy5pbnB1dF9maWx0ZXIpLnZhbCgpOyAvL2V2ZW50LnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgIC8vIGJpbmRpbmc6IGRhdGFncmlkLWZpbHRlciAtPiBkYXRhZ3JpZCBcbiAgICAvLyBMZSBkYXRhZ3JpZCBlc3QgZW4gYmluZGluZyBkYW5zIGxlIDIgc2VucyBncmFjZSDDoCBbKHNlYXJjaFZhbHVlKV09XCJzZWFyY2hWYWx1ZVwiXG4gICAgLy8gZXQgbGUgY29kZSBxdWkgc3VpdFxuICAgIHRoaXMuc2VhcmNoVmFsdWUgPSB2YWw7XG4gICAgdGhpcy5zZWFyY2hWYWx1ZUNoYW5nZS5lbWl0KHRoaXMuc2VhcmNoVmFsdWUpXG4gICAgbGV0IGUgOiBNYURhdGFHcmlkRmlsdGVyRXZlbnQgPSB7XG4gICAgICB0ZXh0OiB2YWwsIGZpZWxkczogdGhpcy5zZWxlY3RlZEZpZWxkc1xuICAgIH1cbiAgICB0aGlzLmZpbHRlckNoYW5nZS5lbWl0KGUpO1xuICB9XG5cbn1cblxuIl19