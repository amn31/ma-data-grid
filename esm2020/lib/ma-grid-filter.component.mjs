import { isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, Input, Output, PLATFORM_ID } from '@angular/core';
import * as $ from 'jquery';
import * as M from 'materialize-css';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function MaGridFilterComponent_div_10_label_1_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 12);
    i0.ɵɵtext(1, "|");
    i0.ɵɵelementEnd();
} }
function MaGridFilterComponent_div_10_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵelementStart(1, "input", 9);
    i0.ɵɵlistener("click", function MaGridFilterComponent_div_10_label_1_Template_input_click_1_listener() { i0.ɵɵrestoreView(_r8); const col_r1 = i0.ɵɵnextContext().$implicit; const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.clickChekbox(col_r1); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 10);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, MaGridFilterComponent_div_10_label_1_span_4_Template, 2, 0, "span", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    const col_r1 = ctx_r9.$implicit;
    const isLast_r2 = ctx_r9.last;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", col_r1.extFilterSelected);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(col_r1.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !isLast_r2);
} }
function MaGridFilterComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, MaGridFilterComponent_div_10_label_1_Template, 5, 3, "label", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r1.extFilter === true);
} }
export class MaGridFilterComponent {
    constructor(platformId) {
        this.platformId = platformId;
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
        if (isPlatformBrowser(this.platformId)) {
            this._init();
            // binding : datagrid -> datagrid-filter
            // Le datagrid est en binding dans le 2 sens grace à [(searchValue)]="searchValue"
            // et le code qui suit
            if (changes.searchValue) {
                // console.log("changes.searchValue "+this.searchValue);
                $('#' + this.input_filter).val(changes.searchValue.currentValue);
            }
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
        if (isPlatformBrowser(this.platformId)) {
            // console.log('ngOnInit =================================')
            this._init();
            M.updateTextFields();
        }
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
MaGridFilterComponent.ɵfac = function MaGridFilterComponent_Factory(t) { return new (t || MaGridFilterComponent)(i0.ɵɵdirectiveInject(PLATFORM_ID)); };
MaGridFilterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MaGridFilterComponent, selectors: [["ma-data-grid-filter"]], inputs: { searchValue: "searchValue", customCSS: "customCSS", columns: "columns" }, outputs: { searchValueChange: "searchValueChange", filterChange: "filterChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 11, vars: 6, consts: [[1, "row", "ma-grid-filter"], [1, "input-field", "col", "s3"], [1, "material-icons", "prefix", 3, "click"], ["type", "text", 1, "validate", 3, "id", "keyup"], ["for", "icon_prefix"], [1, "title_field"], ["class", "checkbox_field", 4, "ngFor", "ngForOf"], [1, "checkbox_field"], [4, "ngIf"], ["type", "checkbox", 3, "checked", "click"], [1, "checkbox_title"], ["class", "checkbox_separator", 4, "ngIf"], [1, "checkbox_separator"]], template: function MaGridFilterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "i", 2);
        i0.ɵɵlistener("click", function MaGridFilterComponent_Template_i_click_2_listener() { return ctx.enableFocus(); });
        i0.ɵɵtext(3, "search");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "input", 3);
        i0.ɵɵlistener("keyup", function MaGridFilterComponent_Template_input_keyup_4_listener($event) { return ctx.updateFilter($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "label", 4);
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div");
        i0.ɵɵelementStart(8, "div", 5);
        i0.ɵɵtext(9, " Select column(s) filter");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, MaGridFilterComponent_div_10_Template, 2, 1, "div", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("id", ctx.input_filter);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.placeholder);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("col s8 ", ctx.customCSS, "ma-grid-filter-checkboxes");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.filters);
    } }, directives: [i1.NgForOf, i1.NgIf], styles: ["[_nghost-%COMP%]{--color-border: #667;--color-defaut: #667;--border-size: 0px}.ma-grid-filter[_ngcontent-%COMP%]   .ma-grid-filter-checkboxes[_ngcontent-%COMP%]{color:var(--color-defaut);border:1px solid var(--color-border);margin-right:10px}.ma-grid-filter[_ngcontent-%COMP%]   .title_field[_ngcontent-%COMP%]{margin-left:15px;font-weight:500}.ma-grid-filter[_ngcontent-%COMP%]   .checkbox_field[_ngcontent-%COMP%]{margin-left:5px;margin-right:5px;display:inline}.ma-grid-filter[_ngcontent-%COMP%]   span.checkbox_title[_ngcontent-%COMP%]{min-width:70px;padding-left:22px}.ma-grid-filter[_ngcontent-%COMP%]   span.checkbox_title[_ngcontent-%COMP%]:after{content:\"|\"}.ma-grid-filter[_ngcontent-%COMP%]   span.checkbox_separator[_ngcontent-%COMP%]{font-size:large;margin-left:5px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MaGridFilterComponent, [{
        type: Component,
        args: [{ selector: 'ma-data-grid-filter', template: "<div class=\"row ma-grid-filter\">\n    <div class=\"input-field col s3\"  >\n        <i (click)=\"enableFocus()\" class=\"material-icons prefix\">search</i>\n          <input [id]=\"input_filter\" type=\"text\" class=\"validate\" (keyup)=\"updateFilter($event)\">\n          <label for=\"icon_prefix\">{{placeholder}}</label>\n    </div>\n    <div class=\"col s8 {{customCSS}}ma-grid-filter-checkboxes\">\n        <div class=\"title_field\"> Select column(s) filter</div>\n        <!--  [disabled]=\"selectedFields.length == 0\"\n<span *ngFor=\"let col of columns\"> {{col.prop}} | </span>\n[(ngModel)]=\"col.extFilterSelected\" \n[ngClass]=\"{'disabled':selectedFields.length >= 0}\"\n        -->\n        <div class=\"checkbox_field\" *ngFor=\"let col of filters;last as isLast;index as i;\">\n            <label *ngIf=\"col.extFilter === true\">\n                <input type=\"checkbox\" [checked]=\"col.extFilterSelected\" (click)=\"clickChekbox(col)\" />\n                <span class=\"checkbox_title\">{{col.title}}</span>\n                <span *ngIf=\"!isLast\" class=\"checkbox_separator\">|</span>\n            </label>\n        </div>\n    </div>\n</div>\n", styles: [":host{--color-border: #667;--color-defaut: #667;--border-size: 0px}.ma-grid-filter .ma-grid-filter-checkboxes{color:var(--color-defaut);border:1px solid var(--color-border);margin-right:10px}.ma-grid-filter .title_field{margin-left:15px;font-weight:500}.ma-grid-filter .checkbox_field{margin-left:5px;margin-right:5px;display:inline}.ma-grid-filter span.checkbox_title{min-width:70px;padding-left:22px}.ma-grid-filter span.checkbox_title:after{content:\"|\"}.ma-grid-filter span.checkbox_separator{font-size:large;margin-left:5px}\n"] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { searchValue: [{
            type: Input
        }], customCSS: [{
            type: Input
        }], searchValueChange: [{
            type: Output
        }], columns: [{
            type: Input
        }], filterChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtZ3JpZC1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbWEtZGF0YS1ncmlkL3NyYy9saWIvbWEtZ3JpZC1maWx0ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vcHJvamVjdHMvbWEtZGF0YS1ncmlkL3NyYy9saWIvbWEtZ3JpZC1maWx0ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsV0FBVyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNuSCxPQUFPLEtBQU0sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUM3QixPQUFPLEtBQU0sQ0FBQyxNQUFNLGlCQUFpQixDQUFDOzs7O0lDY3RCLGdDQUFpRDtJQUFBLGlCQUFDO0lBQUEsaUJBQU87Ozs7SUFIN0QsNkJBQXNDO0lBQ2xDLGdDQUF1RjtJQUE5Qix1TkFBUywyQkFBaUIsSUFBQztJQUFwRixpQkFBdUY7SUFDdkYsZ0NBQTZCO0lBQUEsWUFBYTtJQUFBLGlCQUFPO0lBQ2pELHdGQUF5RDtJQUM3RCxpQkFBUTs7Ozs7SUFIbUIsZUFBaUM7SUFBakMsa0RBQWlDO0lBQzNCLGVBQWE7SUFBYixrQ0FBYTtJQUNuQyxlQUFhO0lBQWIsaUNBQWE7OztJQUo1Qiw4QkFBbUY7SUFDL0UsaUZBSVE7SUFDWixpQkFBTTs7O0lBTE0sZUFBNEI7SUFBNUIsZ0RBQTRCOztBREhoRCxNQUFNLE9BQU8scUJBQXFCO0lBR2hDLFlBQytCLFVBQWtCO1FBQWxCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFJakQsZ0JBQVcsR0FBRyxjQUFjLENBQUE7UUFFbkIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN0QixzQkFBaUIsR0FBRyxJQUFJ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QUUsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjO1NBQ3ZDLENBQUE7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDOzswRkFyRlUscUJBQXFCLHVCQUl0QixXQUFXO3dFQUpWLHFCQUFxQjtRQ1hsQyw4QkFBZ0M7UUFDNUIsOEJBQWtDO1FBQzlCLDRCQUF5RDtRQUF0RCw2RkFBUyxpQkFBYSxJQUFDO1FBQStCLHNCQUFNO1FBQUEsaUJBQUk7UUFDakUsZ0NBQXVGO1FBQS9CLHVHQUFTLHdCQUFvQixJQUFDO1FBQXRGLGlCQUF1RjtRQUN2RixnQ0FBeUI7UUFBQSxZQUFlO1FBQUEsaUJBQVE7UUFDdEQsaUJBQU07UUFDTiwyQkFBMkQ7UUFDdkQsOEJBQXlCO1FBQUMsd0NBQXVCO1FBQUEsaUJBQU07UUFNdkQsd0VBTU07UUFDVixpQkFBTTtRQUNWLGlCQUFNOztRQWxCVyxlQUFtQjtRQUFuQixxQ0FBbUI7UUFDRCxlQUFlO1FBQWYscUNBQWU7UUFFekMsZUFBcUQ7UUFBckQsZ0ZBQXFEO1FBT1YsZUFBVztRQUFYLHFDQUFXOzt1RkRGbEQscUJBQXFCO2NBTGpDLFNBQVM7MkJBQ0UscUJBQXFCOztzQkFRNUIsTUFBTTt1QkFBQyxXQUFXO3dCQUtaLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0ksaUJBQWlCO2tCQUExQixNQUFNO1lBQ0UsT0FBTztrQkFBZixLQUFLO1lBQ0ksWUFBWTtrQkFBckIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBPbkluaXQsIE91dHB1dCwgUExBVEZPUk1fSUQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqICBhcyAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgKiAgYXMgTSBmcm9tICdtYXRlcmlhbGl6ZS1jc3MnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZEZpbHRlckV2ZW50LCBNYURhdGFHcmlkQ29sdW1uT3B0aW9ucyB9IGZyb20gJy4vaW50ZXJmYWNlcy9tYS1kYXRhLWdyaWQtb3B0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hLWRhdGEtZ3JpZC1maWx0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbWEtZ3JpZC1maWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYS1ncmlkLWZpbHRlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWFHcmlkRmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogb2JqZWN0KSB7XG4gIH1cblxuXG4gIHBsYWNlaG9sZGVyID0gJ0VudGVyIGZpbHRlcidcbiAgQElucHV0KCkgc2VhcmNoVmFsdWU6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tQ1NTOiBzdHJpbmcgPSBcIlwiO1xuICBAT3V0cHV0KCkgc2VhcmNoVmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIGNvbHVtbnM6IE1hRGF0YUdyaWRDb2x1bW5PcHRpb25zW10gPSBbXTtcbiAgQE91dHB1dCgpIGZpbHRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TWFEYXRhR3JpZEZpbHRlckV2ZW50PigpO1xuICBpbnB1dF9maWx0ZXI6IHN0cmluZyA9IFwiaWZfXCIgKyBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTAwMDAwKSk7XG4gIGZpbHRlcnM6IGFueVtdID0gW107XG4gIHNlbGVjdGVkRmllbGRzID0gW107XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLl9pbml0KCk7XG4gICAgICAvLyBiaW5kaW5nIDogZGF0YWdyaWQgLT4gZGF0YWdyaWQtZmlsdGVyXG4gICAgICAvLyBMZSBkYXRhZ3JpZCBlc3QgZW4gYmluZGluZyBkYW5zIGxlIDIgc2VucyBncmFjZSDDoCBbKHNlYXJjaFZhbHVlKV09XCJzZWFyY2hWYWx1ZVwiXG4gICAgICAvLyBldCBsZSBjb2RlIHF1aSBzdWl0XG4gICAgICBpZiAoY2hhbmdlcy5zZWFyY2hWYWx1ZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNoYW5nZXMuc2VhcmNoVmFsdWUgXCIrdGhpcy5zZWFyY2hWYWx1ZSk7XG4gICAgICAgICQoJyMnICsgdGhpcy5pbnB1dF9maWx0ZXIpLnZhbChjaGFuZ2VzLnNlYXJjaFZhbHVlLmN1cnJlbnRWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2luaXQoKSB7XG5cbiAgICB0aGlzLmZpbHRlcnMgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkRmllbGRzID0gW107XG4gICAgZm9yIChsZXQgY29sIG9mIHRoaXMuY29sdW1ucykge1xuICAgICAgaWYgKGNvbC5leHRGaWx0ZXIgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKGNvbC5leHRGaWx0ZXJTZWxlY3RlZCkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGaWVsZHMucHVzaChjb2wucHJvcCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWx0ZXJzLnB1c2goT2JqZWN0LmFzc2lnbihjb2wpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5lbmFibGVGb2N1cygpO1xuXG4gICAgLy8gY29uc29sZS5sb2coJ2ZpbHRlcnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09JywgdGhpcy5maWx0ZXJzLCB0aGlzLnNlbGVjdGVkRmllbGRzKVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCduZ09uSW5pdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0nKVxuICAgICAgdGhpcy5faW5pdCgpO1xuICAgICAgTS51cGRhdGVUZXh0RmllbGRzKCk7XG4gICAgfVxuICB9XG5cbiAgY2xpY2tDaGVrYm94KGNvbCkge1xuXG4gICAgLy8gY29uc29sZS5sb2coY29sKTtcbiAgICBjb2wuZXh0RmlsdGVyU2VsZWN0ZWQgPSAhY29sLmV4dEZpbHRlclNlbGVjdGVkO1xuICAgIHRoaXMuX2luaXQoKTtcbiAgICB0aGlzLnVwZGF0ZUZpbHRlcihudWxsKTtcbiAgfVxuXG4gIGVuYWJsZUZvY3VzKCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkRmllbGRzLmxlbmd0aCA+IDApIHtcbiAgICAgICQoJyMnICsgdGhpcy5pbnB1dF9maWx0ZXIpLmZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJyMnICsgdGhpcy5pbnB1dF9maWx0ZXIpLmJsdXIoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVGaWx0ZXIoZXZlbnQ6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGVGaWx0ZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09JyxldmVudCk7XG5cbiAgICBjb25zdCB2YWwgPSAkKCcjJyArIHRoaXMuaW5wdXRfZmlsdGVyKS52YWwoKTsgLy9ldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAvLyBiaW5kaW5nOiBkYXRhZ3JpZC1maWx0ZXIgLT4gZGF0YWdyaWQgXG4gICAgLy8gTGUgZGF0YWdyaWQgZXN0IGVuIGJpbmRpbmcgZGFucyBsZSAyIHNlbnMgZ3JhY2Ugw6AgWyhzZWFyY2hWYWx1ZSldPVwic2VhcmNoVmFsdWVcIlxuICAgIC8vIGV0IGxlIGNvZGUgcXVpIHN1aXRcbiAgICB0aGlzLnNlYXJjaFZhbHVlID0gdmFsO1xuICAgIHRoaXMuc2VhcmNoVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnNlYXJjaFZhbHVlKVxuICAgIGxldCBlOiBNYURhdGFHcmlkRmlsdGVyRXZlbnQgPSB7XG4gICAgICB0ZXh0OiB2YWwsIGZpZWxkczogdGhpcy5zZWxlY3RlZEZpZWxkc1xuICAgIH1cbiAgICB0aGlzLmZpbHRlckNoYW5nZS5lbWl0KGUpO1xuICB9XG5cbn1cblxuIiwiPGRpdiBjbGFzcz1cInJvdyBtYS1ncmlkLWZpbHRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1maWVsZCBjb2wgczNcIiAgPlxuICAgICAgICA8aSAoY2xpY2spPVwiZW5hYmxlRm9jdXMoKVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgcHJlZml4XCI+c2VhcmNoPC9pPlxuICAgICAgICAgIDxpbnB1dCBbaWRdPVwiaW5wdXRfZmlsdGVyXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cInZhbGlkYXRlXCIgKGtleXVwKT1cInVwZGF0ZUZpbHRlcigkZXZlbnQpXCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cImljb25fcHJlZml4XCI+e3twbGFjZWhvbGRlcn19PC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sIHM4IHt7Y3VzdG9tQ1NTfX1tYS1ncmlkLWZpbHRlci1jaGVja2JveGVzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZV9maWVsZFwiPiBTZWxlY3QgY29sdW1uKHMpIGZpbHRlcjwvZGl2PlxuICAgICAgICA8IS0tICBbZGlzYWJsZWRdPVwic2VsZWN0ZWRGaWVsZHMubGVuZ3RoID09IDBcIlxuPHNwYW4gKm5nRm9yPVwibGV0IGNvbCBvZiBjb2x1bW5zXCI+IHt7Y29sLnByb3B9fSB8IDwvc3Bhbj5cblsobmdNb2RlbCldPVwiY29sLmV4dEZpbHRlclNlbGVjdGVkXCIgXG5bbmdDbGFzc109XCJ7J2Rpc2FibGVkJzpzZWxlY3RlZEZpZWxkcy5sZW5ndGggPj0gMH1cIlxuICAgICAgICAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94X2ZpZWxkXCIgKm5nRm9yPVwibGV0IGNvbCBvZiBmaWx0ZXJzO2xhc3QgYXMgaXNMYXN0O2luZGV4IGFzIGk7XCI+XG4gICAgICAgICAgICA8bGFiZWwgKm5nSWY9XCJjb2wuZXh0RmlsdGVyID09PSB0cnVlXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFtjaGVja2VkXT1cImNvbC5leHRGaWx0ZXJTZWxlY3RlZFwiIChjbGljayk9XCJjbGlja0NoZWtib3goY29sKVwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja2JveF90aXRsZVwiPnt7Y29sLnRpdGxlfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhaXNMYXN0XCIgY2xhc3M9XCJjaGVja2JveF9zZXBhcmF0b3JcIj58PC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==