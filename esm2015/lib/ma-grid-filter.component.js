import { Component, EventEmitter, Input, Output } from '@angular/core';
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
MaGridFilterComponent.ɵfac = function MaGridFilterComponent_Factory(t) { return new (t || MaGridFilterComponent)(); };
MaGridFilterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MaGridFilterComponent, selectors: [["ma-data-grid-filter"]], inputs: { searchValue: "searchValue", customCSS: "customCSS", columns: "columns" }, outputs: { searchValueChange: "searchValueChange", filterChange: "filterChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 11, vars: 6, consts: [[1, "row", "ma-grid-filter"], [1, "input-field", "col", "s3"], [1, "material-icons", "prefix", 3, "click"], ["type", "text", 1, "validate", 3, "id", "keyup"], ["for", "icon_prefix"], [1, "title_field"], ["class", "checkbox_field", 4, "ngFor", "ngForOf"], [1, "checkbox_field"], [4, "ngIf"], ["type", "checkbox", 3, "checked", "click"], [1, "checkbox_title"], ["class", "checkbox_separator", 4, "ngIf"], [1, "checkbox_separator"]], template: function MaGridFilterComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i1.NgForOf, i1.NgIf], styles: ["[_nghost-%COMP%]{--border-size:0px;--color-border:#667;--color-defaut:#667}.ma-grid-filter[_ngcontent-%COMP%]   .ma-grid-filter-checkboxes[_ngcontent-%COMP%]{border:1px solid var(--color-border);color:var(--color-defaut);margin-right:10px}.ma-grid-filter[_ngcontent-%COMP%]   .title_field[_ngcontent-%COMP%]{font-weight:500;margin-left:15px}.ma-grid-filter[_ngcontent-%COMP%]   .checkbox_field[_ngcontent-%COMP%]{display:inline;margin-left:5px;margin-right:5px}.ma-grid-filter[_ngcontent-%COMP%]   span.checkbox_title[_ngcontent-%COMP%]{min-width:70px;padding-left:22px}.ma-grid-filter[_ngcontent-%COMP%]   span.checkbox_title[_ngcontent-%COMP%]:after{content:\"|\"}.ma-grid-filter[_ngcontent-%COMP%]   span.checkbox_separator[_ngcontent-%COMP%]{font-size:large;margin-left:5px}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MaGridFilterComponent, [{
        type: Component,
        args: [{
                selector: 'ma-data-grid-filter',
                templateUrl: './ma-grid-filter.component.html',
                styleUrls: ['./ma-grid-filter.component.css']
            }]
    }], function () { return []; }, { searchValue: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtZ3JpZC1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkQ6L015SG9tZS9hbmRyb2lkL3dvcmtzcGFjZS9naXQvbWEtbmctZGF0YWdyaWQvcHJvamVjdHMvbWEtZGF0YS1ncmlkL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9tYS1ncmlkLWZpbHRlci5jb21wb25lbnQudHMiLCJsaWIvbWEtZ3JpZC1maWx0ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxLQUFNLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDN0IsT0FBTyxLQUFNLENBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7OztJQ2V0QixnQ0FBaUQ7SUFBQSxpQkFBQztJQUFBLGlCQUFPOzs7O0lBSDdELDZCQUNJO0lBQUEsZ0NBQ0E7SUFEeUQsc1BBQTJCO0lBQXBGLGlCQUNBO0lBQUEsZ0NBQTZCO0lBQUEsWUFBYTtJQUFBLGlCQUFPO0lBQ2pELHdGQUFpRDtJQUNyRCxpQkFBUTs7Ozs7SUFIbUIsZUFBaUM7SUFBakMsa0RBQWlDO0lBQzNCLGVBQWE7SUFBYixrQ0FBYTtJQUNwQyxlQUFlO0lBQWYsaUNBQWU7OztJQUo3Qiw4QkFDSTtJQUFBLGlGQUNJO0lBSVIsaUJBQU07OztJQUxLLGVBQThCO0lBQTlCLGdEQUE4Qjs7QURKakQsTUFBTSxPQUFPLHFCQUFxQjtJQUdoQztRQUdBLGdCQUFXLEdBQUcsY0FBYyxDQUFBO1FBRW5CLGNBQVMsR0FBWSxFQUFFLENBQUM7UUFDdkIsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN4QyxZQUFPLEdBQThCLEVBQUUsQ0FBQztRQUN2QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUF5QixDQUFDO1FBQ25FLGlCQUFZLEdBQVcsS0FBSyxHQUFDLElBQUksQ0FBQyxLQUFLLENB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LHdCQUFvQixJQUFDO1FBQXRGLGlCQUNBO1FBQUEsZ0NBQXlCO1FBQUEsWUFBZTtRQUFBLGlCQUFRO1FBQ3RELGlCQUFNO1FBQ04sMkJBQ0k7UUFBQSw4QkFBMEI7UUFBQSx3Q0FBdUI7UUFBQSxpQkFBTTtRQU12RCx3RUFDSTtRQU1SLGlCQUFNO1FBQ1YsaUJBQU07O1FBbEJXLGVBQW1CO1FBQW5CLHFDQUFtQjtRQUNELGVBQWU7UUFBZixxQ0FBZTtRQUV6QyxlQUFxRDtRQUFyRCxnRkFBcUQ7UUFPMUIsZUFBc0Q7UUFBdEQscUNBQXNEOztrRERIN0UscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUM5QztzQ0FRVSxXQUFXO2tCQUFuQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNJLGlCQUFpQjtrQkFBMUIsTUFBTTtZQUNFLE9BQU87a0JBQWYsS0FBSztZQUNJLFlBQVk7a0JBQXJCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiAgYXMgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICogIGFzIE0gZnJvbSAnbWF0ZXJpYWxpemUtY3NzJztcbmltcG9ydCB7IE1hRGF0YUdyaWRGaWx0ZXJFdmVudCwgTWFEYXRhR3JpZENvbHVtbk9wdGlvbnMgfSBmcm9tICcuL2ludGVyZmFjZXMvbWEtZGF0YS1ncmlkLW9wdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYS1kYXRhLWdyaWQtZmlsdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hLWdyaWQtZmlsdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWEtZ3JpZC1maWx0ZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1hR3JpZEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIFxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgXG4gIHBsYWNlaG9sZGVyID0gJ0VudGVyIGZpbHRlcidcbiAgQElucHV0KCkgc2VhcmNoVmFsdWU6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tQ1NTOiAgc3RyaW5nID0gXCJcIjtcbiAgQE91dHB1dCgpIHNlYXJjaFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBjb2x1bW5zOiBNYURhdGFHcmlkQ29sdW1uT3B0aW9uc1tdID0gW107XG4gIEBPdXRwdXQoKSBmaWx0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1hRGF0YUdyaWRGaWx0ZXJFdmVudD4oKTtcbiAgaW5wdXRfZmlsdGVyOiBzdHJpbmcgPSBcImlmX1wiK01hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkqIDEwMDAwMCkpO1xuICBmaWx0ZXJzOiBhbnlbXSA9IFtdO1xuICBzZWxlY3RlZEZpZWxkcyA9IFtdO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLl9pbml0KCk7XG4gICAgLy8gYmluZGluZyA6IGRhdGFncmlkIC0+IGRhdGFncmlkLWZpbHRlclxuICAgIC8vIExlIGRhdGFncmlkIGVzdCBlbiBiaW5kaW5nIGRhbnMgbGUgMiBzZW5zIGdyYWNlIMOgIFsoc2VhcmNoVmFsdWUpXT1cInNlYXJjaFZhbHVlXCJcbiAgICAvLyBldCBsZSBjb2RlIHF1aSBzdWl0XG4gICAgaWYgKGNoYW5nZXMuc2VhcmNoVmFsdWUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjaGFuZ2VzLnNlYXJjaFZhbHVlIFwiK3RoaXMuc2VhcmNoVmFsdWUpO1xuICAgICAgICAkKCcjJyt0aGlzLmlucHV0X2ZpbHRlcikudmFsKGNoYW5nZXMuc2VhcmNoVmFsdWUuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBfaW5pdCgpIHtcblxuICAgIHRoaXMuZmlsdGVycyA9IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWRGaWVsZHMgPSBbXTtcbiAgICBmb3IgKGxldCBjb2wgb2YgdGhpcy5jb2x1bW5zKSB7XG4gICAgICBpZiAoY29sLmV4dEZpbHRlciA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAoY29sLmV4dEZpbHRlclNlbGVjdGVkKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEZpZWxkcy5wdXNoKGNvbC5wcm9wKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpbHRlcnMucHVzaChPYmplY3QuYXNzaWduKGNvbCkpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmVuYWJsZUZvY3VzKCk7XG4gICAgXG4gICAgLy8gY29uc29sZS5sb2coJ2ZpbHRlcnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09JywgdGhpcy5maWx0ZXJzLCB0aGlzLnNlbGVjdGVkRmllbGRzKVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gY29uc29sZS5sb2coJ25nT25Jbml0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpXG4gICAgdGhpcy5faW5pdCgpO1xuICAgIE0udXBkYXRlVGV4dEZpZWxkcygpOyBcbiAgICBcbiAgfVxuXG4gIGNsaWNrQ2hla2JveChjb2wpIHtcbiAgICBcbiAgICAvLyBjb25zb2xlLmxvZyhjb2wpO1xuICAgIGNvbC5leHRGaWx0ZXJTZWxlY3RlZCA9ICFjb2wuZXh0RmlsdGVyU2VsZWN0ZWQ7XG4gICAgdGhpcy5faW5pdCgpO1xuICAgIHRoaXMudXBkYXRlRmlsdGVyKG51bGwpO1xuICB9XG5cbiAgZW5hYmxlRm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRGaWVsZHMubGVuZ3RoID4gMCkge1xuICAgICAgJCgnIycrdGhpcy5pbnB1dF9maWx0ZXIpLmZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJyMnK3RoaXMuaW5wdXRfZmlsdGVyKS5ibHVyKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRmlsdGVyKGV2ZW50OmFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGVGaWx0ZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09JyxldmVudCk7XG4gICAgXG4gICAgY29uc3QgdmFsID0gJCgnIycrdGhpcy5pbnB1dF9maWx0ZXIpLnZhbCgpOyAvL2V2ZW50LnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgIC8vIGJpbmRpbmc6IGRhdGFncmlkLWZpbHRlciAtPiBkYXRhZ3JpZCBcbiAgICAvLyBMZSBkYXRhZ3JpZCBlc3QgZW4gYmluZGluZyBkYW5zIGxlIDIgc2VucyBncmFjZSDDoCBbKHNlYXJjaFZhbHVlKV09XCJzZWFyY2hWYWx1ZVwiXG4gICAgLy8gZXQgbGUgY29kZSBxdWkgc3VpdFxuICAgIHRoaXMuc2VhcmNoVmFsdWUgPSB2YWw7XG4gICAgdGhpcy5zZWFyY2hWYWx1ZUNoYW5nZS5lbWl0KHRoaXMuc2VhcmNoVmFsdWUpXG4gICAgbGV0IGUgOiBNYURhdGFHcmlkRmlsdGVyRXZlbnQgPSB7XG4gICAgICB0ZXh0OiB2YWwsIGZpZWxkczogdGhpcy5zZWxlY3RlZEZpZWxkc1xuICAgIH1cbiAgICB0aGlzLmZpbHRlckNoYW5nZS5lbWl0KGUpO1xuICB9XG5cbn1cblxuIiwiPGRpdiBjbGFzcz1cInJvdyBtYS1ncmlkLWZpbHRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1maWVsZCBjb2wgczNcIiAgPlxuICAgICAgICA8aSAoY2xpY2spPVwiZW5hYmxlRm9jdXMoKVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgcHJlZml4XCI+c2VhcmNoPC9pPlxuICAgICAgICAgIDxpbnB1dCBbaWRdPVwiaW5wdXRfZmlsdGVyXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cInZhbGlkYXRlXCIgKGtleXVwKT1cInVwZGF0ZUZpbHRlcigkZXZlbnQpXCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cImljb25fcHJlZml4XCI+e3twbGFjZWhvbGRlcn19PC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sIHM4IHt7Y3VzdG9tQ1NTfX1tYS1ncmlkLWZpbHRlci1jaGVja2JveGVzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZV9maWVsZFwiPiBTZWxlY3QgY29sdW1uKHMpIGZpbHRlcjwvZGl2PlxuICAgICAgICA8IS0tICBbZGlzYWJsZWRdPVwic2VsZWN0ZWRGaWVsZHMubGVuZ3RoID09IDBcIlxuPHNwYW4gKm5nRm9yPVwibGV0IGNvbCBvZiBjb2x1bW5zXCI+IHt7Y29sLnByb3B9fSB8IDwvc3Bhbj5cblsobmdNb2RlbCldPVwiY29sLmV4dEZpbHRlclNlbGVjdGVkXCIgXG5bbmdDbGFzc109XCJ7J2Rpc2FibGVkJzpzZWxlY3RlZEZpZWxkcy5sZW5ndGggPj0gMH1cIlxuICAgICAgICAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94X2ZpZWxkXCIgKm5nRm9yPVwibGV0IGNvbCBvZiBmaWx0ZXJzO2xhc3QgYXMgaXNMYXN0O2luZGV4IGFzIGk7XCI+XG4gICAgICAgICAgICA8bGFiZWwgKm5nSWY9XCJjb2wuZXh0RmlsdGVyID09PSB0cnVlXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFtjaGVja2VkXT1cImNvbC5leHRGaWx0ZXJTZWxlY3RlZFwiIChjbGljayk9XCJjbGlja0NoZWtib3goY29sKVwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja2JveF90aXRsZVwiPnt7Y29sLnRpdGxlfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhaXNMYXN0XCIgY2xhc3M9XCJjaGVja2JveF9zZXBhcmF0b3JcIj58PC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==