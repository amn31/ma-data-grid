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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtZ3JpZC1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkQ6L015SG9tZS9hbmRyb2lkL3dvcmtzcGFjZS9naXQvbWEtbmctZGF0YWdyaWQvcHJvamVjdHMvbWEtZGF0YS1ncmlkL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9tYS1ncmlkLWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxLQUFNLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDN0IsT0FBTyxLQUFNLENBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQVF0QyxNQUFNLE9BQU8scUJBQXFCO0lBR2hDO1FBR0EsZ0JBQVcsR0FBRyxjQUFjLENBQUE7UUFFbkIsY0FBUyxHQUFZLEVBQUUsQ0FBQztRQUN2QixzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hDLFlBQU8sR0FBOEIsRUFBRSxDQUFDO1FBQ3ZDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQXlCLENBQUM7UUFDbkUsaUJBQVksR0FBVyxLQUFLLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLFlBQU8sR0FBVSxFQUFFLENBQUM7UUFDcEIsbUJBQWMsR0FBRyxFQUFFLENBQUM7SUFYSixDQUFDO0lBYWpCLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYix3Q0FBd0M7UUFDeEMsa0ZBQWtGO1FBQ2xGLHNCQUFzQjtRQUN0QixJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDckIsd0RBQXdEO1lBQ3hELENBQUMsQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2xFO0lBQ0gsQ0FBQztJQUVELEtBQUs7UUFFSCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUN6QixLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDNUIsSUFBSSxHQUFHLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtnQkFDMUIsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDcEM7Z0JBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3ZDO1NBQ0Y7UUFDRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsOEZBQThGO0lBQ2hHLENBQUM7SUFFRCxRQUFRO1FBQ04sNERBQTREO1FBQzVELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBRXZCLENBQUM7SUFFRCxZQUFZLENBQUMsR0FBRztRQUVkLG9CQUFvQjtRQUNwQixHQUFHLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7UUFDL0MsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2xDLENBQUMsQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2xDO2FBQU07WUFDTCxDQUFDLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7SUFFRCxZQUFZLENBQUMsS0FBUztRQUNwQix1RUFBdUU7UUFFdkUsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxtQ0FBbUM7UUFDL0Usd0NBQXdDO1FBQ3hDLGtGQUFrRjtRQUNsRixzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDN0MsSUFBSSxDQUFDLEdBQTJCO1lBQzlCLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjO1NBQ3ZDLENBQUE7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUFyRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLDRwQ0FBOEM7O2FBRS9DOzs7OzBCQVFFLEtBQUs7d0JBQ0wsS0FBSztnQ0FDTCxNQUFNO3NCQUNOLEtBQUs7MkJBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqICBhcyAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgKiAgYXMgTSBmcm9tICdtYXRlcmlhbGl6ZS1jc3MnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZEZpbHRlckV2ZW50LCBNYURhdGFHcmlkQ29sdW1uT3B0aW9ucyB9IGZyb20gJy4vaW50ZXJmYWNlcy9tYS1kYXRhLWdyaWQtb3B0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hLWRhdGEtZ3JpZC1maWx0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbWEtZ3JpZC1maWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYS1ncmlkLWZpbHRlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWFHcmlkRmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBcbiAgcGxhY2Vob2xkZXIgPSAnRW50ZXIgZmlsdGVyJ1xuICBASW5wdXQoKSBzZWFyY2hWYWx1ZTogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21DU1M6ICBzdHJpbmcgPSBcIlwiO1xuICBAT3V0cHV0KCkgc2VhcmNoVmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIGNvbHVtbnM6IE1hRGF0YUdyaWRDb2x1bW5PcHRpb25zW10gPSBbXTtcbiAgQE91dHB1dCgpIGZpbHRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TWFEYXRhR3JpZEZpbHRlckV2ZW50PigpO1xuICBpbnB1dF9maWx0ZXI6IHN0cmluZyA9IFwiaWZfXCIrTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSogMTAwMDAwKSk7XG4gIGZpbHRlcnM6IGFueVtdID0gW107XG4gIHNlbGVjdGVkRmllbGRzID0gW107XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuX2luaXQoKTtcbiAgICAvLyBiaW5kaW5nIDogZGF0YWdyaWQgLT4gZGF0YWdyaWQtZmlsdGVyXG4gICAgLy8gTGUgZGF0YWdyaWQgZXN0IGVuIGJpbmRpbmcgZGFucyBsZSAyIHNlbnMgZ3JhY2Ugw6AgWyhzZWFyY2hWYWx1ZSldPVwic2VhcmNoVmFsdWVcIlxuICAgIC8vIGV0IGxlIGNvZGUgcXVpIHN1aXRcbiAgICBpZiAoY2hhbmdlcy5zZWFyY2hWYWx1ZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNoYW5nZXMuc2VhcmNoVmFsdWUgXCIrdGhpcy5zZWFyY2hWYWx1ZSk7XG4gICAgICAgICQoJyMnK3RoaXMuaW5wdXRfZmlsdGVyKS52YWwoY2hhbmdlcy5zZWFyY2hWYWx1ZS5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIF9pbml0KCkge1xuXG4gICAgdGhpcy5maWx0ZXJzID0gW107XG4gICAgdGhpcy5zZWxlY3RlZEZpZWxkcyA9IFtdO1xuICAgIGZvciAobGV0IGNvbCBvZiB0aGlzLmNvbHVtbnMpIHtcbiAgICAgIGlmIChjb2wuZXh0RmlsdGVyID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChjb2wuZXh0RmlsdGVyU2VsZWN0ZWQpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkRmllbGRzLnB1c2goY29sLnByb3ApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlsdGVycy5wdXNoKE9iamVjdC5hc3NpZ24oY29sKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZW5hYmxlRm9jdXMoKTtcbiAgICBcbiAgICAvLyBjb25zb2xlLmxvZygnZmlsdGVycyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0nLCB0aGlzLmZpbHRlcnMsIHRoaXMuc2VsZWN0ZWRGaWVsZHMpXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBjb25zb2xlLmxvZygnbmdPbkluaXQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09JylcbiAgICB0aGlzLl9pbml0KCk7XG4gICAgTS51cGRhdGVUZXh0RmllbGRzKCk7IFxuICAgIFxuICB9XG5cbiAgY2xpY2tDaGVrYm94KGNvbCkge1xuICAgIFxuICAgIC8vIGNvbnNvbGUubG9nKGNvbCk7XG4gICAgY29sLmV4dEZpbHRlclNlbGVjdGVkID0gIWNvbC5leHRGaWx0ZXJTZWxlY3RlZDtcbiAgICB0aGlzLl9pbml0KCk7XG4gICAgdGhpcy51cGRhdGVGaWx0ZXIobnVsbCk7XG4gIH1cblxuICBlbmFibGVGb2N1cygpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEZpZWxkcy5sZW5ndGggPiAwKSB7XG4gICAgICAkKCcjJyt0aGlzLmlucHV0X2ZpbHRlcikuZm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnIycrdGhpcy5pbnB1dF9maWx0ZXIpLmJsdXIoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVGaWx0ZXIoZXZlbnQ6YW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3VwZGF0ZUZpbHRlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0nLGV2ZW50KTtcbiAgICBcbiAgICBjb25zdCB2YWwgPSAkKCcjJyt0aGlzLmlucHV0X2ZpbHRlcikudmFsKCk7IC8vZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgLy8gYmluZGluZzogZGF0YWdyaWQtZmlsdGVyIC0+IGRhdGFncmlkIFxuICAgIC8vIExlIGRhdGFncmlkIGVzdCBlbiBiaW5kaW5nIGRhbnMgbGUgMiBzZW5zIGdyYWNlIMOgIFsoc2VhcmNoVmFsdWUpXT1cInNlYXJjaFZhbHVlXCJcbiAgICAvLyBldCBsZSBjb2RlIHF1aSBzdWl0XG4gICAgdGhpcy5zZWFyY2hWYWx1ZSA9IHZhbDtcbiAgICB0aGlzLnNlYXJjaFZhbHVlQ2hhbmdlLmVtaXQodGhpcy5zZWFyY2hWYWx1ZSlcbiAgICBsZXQgZSA6IE1hRGF0YUdyaWRGaWx0ZXJFdmVudCA9IHtcbiAgICAgIHRleHQ6IHZhbCwgZmllbGRzOiB0aGlzLnNlbGVjdGVkRmllbGRzXG4gICAgfVxuICAgIHRoaXMuZmlsdGVyQ2hhbmdlLmVtaXQoZSk7XG4gIH1cblxufVxuXG4iXX0=