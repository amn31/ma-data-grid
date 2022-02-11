import { Component, EventEmitter, Inject, Input, Output, ViewChild } from '@angular/core';
import { options_header_bool, options_header_boolean, options_header_date, options_header_number, options_header_string } from '../../interfaces/ma-data-grid-options';
import * as $ from 'jquery';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["elemToggle"];
const _c1 = ["elemValue"];
function DataGridOpFilterComponent_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "i", 6);
    i0.ɵɵtext(1, "search");
    i0.ɵɵelementEnd();
} }
function DataGridOpFilterComponent_div_7_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(opt_r4.label);
} }
function DataGridOpFilterComponent_div_7_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 11);
} if (rf & 2) {
    const opt_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("innerHTML", opt_r4.label, i0.ɵɵsanitizeHtml);
} }
function DataGridOpFilterComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "label");
    i0.ɵɵelementStart(2, "input", 9);
    i0.ɵɵlistener("click", function DataGridOpFilterComponent_div_7_div_1_Template_input_click_2_listener() { i0.ɵɵrestoreView(_r13); const opt_r4 = i0.ɵɵnextContext().$implicit; const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.changeValues(opt_r4); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, DataGridOpFilterComponent_div_7_div_1_span_3_Template, 2, 1, "span", 8);
    i0.ɵɵtemplate(4, DataGridOpFilterComponent_div_7_div_1_span_4_Template, 1, 1, "span", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", opt_r4.value)("checked", opt_r4.checked);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r5.isRowHTML);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isRowHTML === true);
} }
function DataGridOpFilterComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵlistener("click", function DataGridOpFilterComponent_div_7_div_2_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r17); const opt_r4 = i0.ɵɵnextContext().$implicit; const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.changeValue(opt_r4); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", opt_r4.label, "\u00A0");
} }
function DataGridOpFilterComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, DataGridOpFilterComponent_div_7_div_1_Template, 5, 4, "div", 8);
    i0.ɵɵtemplate(2, DataGridOpFilterComponent_div_7_div_2_Template, 3, 1, "div", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", opt_r4.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.multiple === true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.multiple === false);
} }
const defaut_label = '';
export class DataGridOpFilterComponent {
    constructor(document) {
        this.document = document;
        this.value = '';
        this.changeOperator = new EventEmitter();
        this.changeEmptyOperator = new EventEmitter();
        this.options = null;
        this.multiple = false;
        this.isRowHTML = false;
        this.values = [];
        this.label = defaut_label;
        this.popupPosition = {
            top: 0,
            left: 0
        };
    }
    getFuncClickDocument() {
        let p = this;
        let fct = function () {
            // console.log('CLICK',fct);
            p.elemToggle.nativeElement.style.display = 'none';
            $(this.document).off('click', fct);
        };
        return fct;
    }
    toggleDiv() {
        var onClickDocument = this.getFuncClickDocument();
        $(this.document).off('click', onClickDocument);
        if (this.elemToggle.nativeElement.style.display == 'none') {
            //this.elemToggle.nativeElement.style.position = 'absolute';
            this.elemToggle.nativeElement.style.display = 'block';
            let anchor = this.elemValue.nativeElement.parentElement;
            //this.elemToggle.nativeElement.style.top = ($(anchor).height()+$(anchor).offset().top)+'px';
            //this.elemToggle.nativeElement.style.left = $(anchor).offset().left+'px';
            setTimeout(function () {
                $(this.document).on('click', onClickDocument);
            }, 500);
        }
        else {
            this.elemToggle.nativeElement.style.display = 'none';
            $(this.document).off('click', onClickDocument);
        }
    }
    ngOnInit() {
        this.isRowHTML = this.col.isRowHTML;
        if (this.col.dataType == 'string') {
            this.options = options_header_string;
        }
        if (this.col.dataType == 'boolean') {
            this.multiple = true;
            this.options = options_header_boolean;
        }
        if (this.col.dataType == 'bool') {
            this.multiple = true;
            this.options = options_header_bool;
        }
        if (this.col.dataType == 'number' || this.col.dataType == 'float') {
            this.options = options_header_number;
        }
        if (this.col.dataType == 'date') {
            this.options = options_header_date;
        }
        if (this.col.dataType == 'selector') {
            this.options = [];
        }
        if (this.col.headFilter) {
            this.options = this.col.headFilter;
            this.multiple = true;
        }
        if (this.options == null)
            throw ('Bad definition to operator ' + this.col.prop);
        //if (this.multiple) {
        for (var i in this.options) {
            this.options[i].checked = false;
        }
        //}
        //var elems = this.document.querySelectorAll('select');
        //var instances = M.FormSelect.init(elems, {});
        //console.log('M',instances)
    }
    setFirstChoice() {
        console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
        // console.log("setFirstChoice (1) "+this.value+' '+this.label);
        // console.log("setFirstChoice ",this.value,this.label,this.options)
        if (this.multiple === false && this.label == '') {
            for (var i in this.options) {
                if (this.options[i].label != '') {
                    this.changeValue(this.options[i], true);
                    return;
                }
            }
        }
    }
    getOperator() {
        if (this.multiple === false) {
            // console.log('getOperator ' + this.col.prop + ' value ' + this.value, this.options)
            if (this.value == '') {
                return null;
            }
            return this.options.find((d) => d.value === this.value && d.checked == true);
        }
        return null;
    }
    changeValues(opt) {
        /* Changement de l'operateur dans la cas de valeurs multiples d'operateurs
            Ex: { value: "Apple", operator: "=", label: "Apple", checked: false } */
        // console.log("CHANGES VALUES",opt)
        if (opt.checked) {
            // console.log("checked");
            opt.checked = false;
            //this.values.splice(this.values.find((a) => a.value === opt.value && a.operator === opt.operator),1);
        }
        else {
            opt.checked = true;
            //this.values.push(opt);
        }
        this.values.splice(0);
        for (var i in this.options) {
            if (this.options[i].checked === true) {
                this.values.push(this.options[i]);
            }
        }
        this.label = '(' + this.values.length + ')';
        if (this.values.length == 0)
            this.label = defaut_label;
        //this.toggleDiv();
        // console.log('changeValue OP', this.values);
        this._changeOperator();
    }
    getConditions(filter_value) {
        if (this.multiple == false) {
            let o = this.getOperator();
            // console.log('getFilter ' + this.col.prop + " o", o)
            if (o != null && o.operator != '') {
                let value = o.value.replace('${1}', filter_value);
                //if (this.col.dataType == 'number') {
                //  value = parseFloat(value);
                //}
                return [this.col.prop, o.operator, value];
            }
        }
        else {
            if (this.values.length > 0) {
                let conditions = [];
                for (var i = 0; i < this.values.length; i++) {
                    let v = this.values[i].value;
                    //if (this.col.dataType == 'number') {
                    //  v = parseFloat(v);
                    //}
                    conditions.push([this.col.prop, this.values[i].operator, v]);
                    if (this.values.length - 1 > i) {
                        conditions.push('or');
                    }
                }
                return conditions;
            }
        }
        return null;
    }
    changeValue(opt, ignoreToggle) {
        /* Changement de l'operateur dans la cas de valeurs simple (un seul choix)
            Ex: { value: "%${1}%", operator: "like", label: "contains", checked: false } */
        // 
        console.log("CHANGES VALUES", opt);
        if (this.options.find((d) => d.checked === true)) {
            this.options.find((d) => d.checked === true).checked = false;
        }
        if (opt.checked) {
            // console.log("checked");
            opt.checked = false;
            //this.values.splice(this.values.find((a) => a.value === opt.value && a.operator === opt.operator),1);
        }
        else {
            opt.checked = true;
            //this.values.push(opt);
        }
        if (opt.label.match(/^\s+$/)) {
            this.value = '';
            this.label = '';
        }
        else {
            this.value = opt.value;
            this.label = opt.label;
        }
        // console.log('changeValue OP', this.options);
        if (!ignoreToggle) {
            this.toggleDiv();
        }
        this._changeOperator();
        if (opt.operator == '') {
            this.changeEmptyOperator.emit();
        }
    }
    _changeOperator() {
        // console.log('EMIT OP', this.options)
        this.changeOperator.emit({
            prop: this.col,
            //  condition: [ this.col.prop, this.value ]
        });
    }
}
DataGridOpFilterComponent.ɵfac = function DataGridOpFilterComponent_Factory(t) { return new (t || DataGridOpFilterComponent)(i0.ɵɵdirectiveInject(DOCUMENT)); };
DataGridOpFilterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataGridOpFilterComponent, selectors: [["ma-data-grid-op-filter"]], viewQuery: function DataGridOpFilterComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.elemToggle = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.elemValue = _t.first);
    } }, inputs: { value: "value", col: "col" }, outputs: { changeOperator: "changeOperator", changeEmptyOperator: "changeEmptyOperator" }, decls: 8, vars: 3, consts: [[1, "op_label", 3, "click"], ["elemValue", ""], ["class", "tiny material-icons", 4, "ngIf"], [2, "display", "none", "position", "absolute", "z-index", "20", "max-height", "300px", "overflow-y", "auto", "background-color", "aliceblue", "border", "1px solid #9e9e9e"], ["elemToggle", ""], ["class", "op_filter", 3, "value", 4, "ngFor", "ngForOf"], [1, "tiny", "material-icons"], [1, "op_filter", 3, "value"], [4, "ngIf"], ["type", "checkbox", 1, "op_filter", 3, "value", "checked", "click"], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"], [3, "click"]], template: function DataGridOpFilterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "div", 0, 1);
        i0.ɵɵlistener("click", function DataGridOpFilterComponent_Template_div_click_1_listener() { return ctx.toggleDiv(); });
        i0.ɵɵtemplate(3, DataGridOpFilterComponent_i_3_Template, 2, 0, "i", 2);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 3, 4);
        i0.ɵɵtemplate(7, DataGridOpFilterComponent_div_7_Template, 3, 3, "div", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.label == "");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1("", ctx.label, " ");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.options);
    } }, directives: [i1.NgIf, i1.NgForOf], styles: ["select.op_filter[_ngcontent-%COMP%]{min-width:25px;padding:0;height:1.4rem;border:1px inset;border-color:#9e9e9e}.op_filter[_ngcontent-%COMP%]{border-top:1px solid #9e9e9e;padding-left:10px;padding-right:10px;font-weight:lighter}.op_label[_ngcontent-%COMP%]{font-weight:lighter}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataGridOpFilterComponent, [{
        type: Component,
        args: [{ selector: 'ma-data-grid-op-filter', template: "<!--\n<div class=\"red\">=</div>(onComplete)=\"onComplete($event)\"\n\n<app-ma-completion [data]=\"choices\" placeholder=\"\" value=\"defautValue\"  ></app-ma-completion>\n     <select dir=\"rtl\">\n    <option>Foo</option>    \n    <option>bar</option>\n    <option>to the right</option>\n</select>\n\n\n<div *ngIf=\"col.isRowNumber === true; then RowNumberBlock else dataBlock\"></div>\n<ng-template #RowNumberBlock>{{i}}</ng-template>\n<ng-template #dataBlock> {{u[col.prop] | dataGridPipe :u :c}}</ng-template>\n-->\n\n<div>\n\n    <div #elemValue (click)=\"toggleDiv()\" class=\"op_label\"><i *ngIf=\"label == ''\" class=\"tiny material-icons\">search</i>{{label}}\n    </div>\n    <!-- [style.left.px]=\"popupPosition.left\"  [style.top.px]=\"popupPosition.top\"-->\n    <div #elemToggle style=\"display: none; position: absolute; z-index: 20; max-height: 300px; overflow-y: auto; background-color: aliceblue;border: 1px solid #9e9e9e;\">\n        <div *ngFor=\"let opt of options;\" class=\"op_filter\" [value]=\"opt.value\">\n            <div *ngIf=\"multiple === true\">\n                <label>\n                    <input type=\"checkbox\" class=\"op_filter\" [value]=\"opt.value\" [checked]=\"opt.checked\" (click)=\"changeValues(opt)\" />\n                    <span *ngIf=\"!isRowHTML\">{{opt.label}}</span>\n                    <span *ngIf=\"isRowHTML === true\" [innerHTML]=\"opt.label\"></span>\n                </label>\n            </div>\n            <div *ngIf=\"multiple === false\">\n                <div (click)=\"changeValue(opt)\">{{opt.label}}&nbsp;</div>\n            </div>\n        </div>\n    </div>\n\n</div>\n<!--\n<select class=\"browser-default op_filter\" [(ngModel)]=\"value\" (change)=\"_changeOperator($event)\" >\n    <option *ngFor=\"let opt of options;\"  class=\"op_filter\" [value]=\"opt.value\">{{opt.label}}\n    </option>\n</select>\n\n\n-->", styles: ["select.op_filter{min-width:25px;padding:0;height:1.4rem;border:1px inset;border-color:#9e9e9e}.op_filter{border-top:1px solid #9e9e9e;padding-left:10px;padding-right:10px;font-weight:lighter}.op_label{font-weight:lighter}\n"] }]
    }], function () { return [{ type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { value: [{
            type: Input
        }], col: [{
            type: Input
        }], elemToggle: [{
            type: ViewChild,
            args: ["elemToggle", { static: false }]
        }], elemValue: [{
            type: ViewChild,
            args: ["elemValue", { static: false }]
        }], changeOperator: [{
            type: Output
        }], changeEmptyOperator: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLW9wLWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYS1kYXRhLWdyaWQvc3JjL2xpYi9jb21wb25lbnRzL2RhdGEtZ3JpZC1vcC1maWx0ZXIvZGF0YS1ncmlkLW9wLWZpbHRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYS1kYXRhLWdyaWQvc3JjL2xpYi9jb21wb25lbnRzL2RhdGEtZ3JpZC1vcC1maWx0ZXIvZGF0YS1ncmlkLW9wLWZpbHRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUcsT0FBTyxFQUFpRCxtQkFBbUIsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXROLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7O0lDY2dCLDRCQUFtRDtJQUFBLHNCQUFNO0lBQUEsaUJBQUk7OztJQVFwRyw0QkFBeUI7SUFBQSxZQUFhO0lBQUEsaUJBQU87OztJQUFwQixlQUFhO0lBQWIsa0NBQWE7OztJQUN0QywyQkFBZ0U7OztJQUEvQiwyREFBdUI7Ozs7SUFKaEUsMkJBQStCO0lBQzNCLDZCQUFPO0lBQ0gsZ0NBQW1IO0lBQTlCLDBOQUFTLDRCQUFpQixJQUFDO0lBQWhILGlCQUFtSDtJQUNuSCx3RkFBNkM7SUFDN0MseUZBQWdFO0lBQ3BFLGlCQUFRO0lBQ1osaUJBQU07Ozs7SUFKMkMsZUFBbUI7SUFBbkIsb0NBQW1CLDJCQUFBO0lBQ3JELGVBQWdC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SztRQUNqSywwRUFXTTtRQUNWLGlCQUFNO1FBRVYsaUJBQU07O1FBbEJ5RCxlQUFpQjtRQUFqQixzQ0FBaUI7UUFBd0MsZUFDcEg7UUFEb0gseUNBQ3BIO1FBR3lCLGVBQVc7UUFBWCxxQ0FBVzs7dUZEVjNCLHlCQUF5QjtjQUxyQyxTQUFTOzJCQUNFLHdCQUF3QjtzQ0F1QmMsUUFBUTtzQkFBM0MsTUFBTTt1QkFBQyxRQUFRO3dCQWpCbkIsS0FBSztrQkFBYixLQUFLO1lBQ0csR0FBRztrQkFBWCxLQUFLO1lBQ3NDLFVBQVU7a0JBQXJELFNBQVM7bUJBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUNDLFNBQVM7a0JBQW5ELFNBQVM7bUJBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUMvQixjQUFjO2tCQUF2QixNQUFNO1lBQ0csbUJBQW1CO2tCQUE1QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hRGF0YUdyaWRDb2x1bW5PcHRpb25zLCBNYURhdGFHcmlkSGVhZEZpbHRlciwgb3B0aW9uc19oZWFkZXJfYm9vbCwgb3B0aW9uc19oZWFkZXJfYm9vbGVhbiwgb3B0aW9uc19oZWFkZXJfZGF0ZSwgb3B0aW9uc19oZWFkZXJfbnVtYmVyLCBvcHRpb25zX2hlYWRlcl9zdHJpbmcgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL21hLWRhdGEtZ3JpZC1vcHRpb25zJztcbmltcG9ydCAqIGFzIE0gZnJvbSAnbWF0ZXJpYWxpemUtY3NzJztcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuY29uc3QgZGVmYXV0X2xhYmVsID0gJydcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hLWRhdGEtZ3JpZC1vcC1maWx0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS1ncmlkLW9wLWZpbHRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RhdGEtZ3JpZC1vcC1maWx0ZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGFHcmlkT3BGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHZhbHVlID0gJyc7XG4gIEBJbnB1dCgpIGNvbDogTWFEYXRhR3JpZENvbHVtbk9wdGlvbnM7XG4gIEBWaWV3Q2hpbGQoXCJlbGVtVG9nZ2xlXCIsIHsgc3RhdGljOiBmYWxzZSB9KSBlbGVtVG9nZ2xlOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiZWxlbVZhbHVlXCIsIHsgc3RhdGljOiBmYWxzZSB9KSBlbGVtVmFsdWU6IEVsZW1lbnRSZWY7XG4gIEBPdXRwdXQoKSBjaGFuZ2VPcGVyYXRvciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY2hhbmdlRW1wdHlPcGVyYXRvciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBcbiAgb3B0aW9ucyA9IG51bGw7XG4gIG11bHRpcGxlID0gZmFsc2U7XG4gIGlzUm93SFRNTDogYm9vbGVhbiA9IGZhbHNlO1xuICB2YWx1ZXM6IE1hRGF0YUdyaWRIZWFkRmlsdGVyW10gPSBbXTtcbiAgbGFiZWwgPSBkZWZhdXRfbGFiZWw7XG4gIHBvcHVwUG9zaXRpb246IGFueSA9IHtcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMFxuICB9XG4gIFxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudCkgeyAgICB9XG5cbiAgIGdldEZ1bmNDbGlja0RvY3VtZW50KCkge1xuICAgIGxldCBwID0gdGhpcztcbiAgICBsZXQgZmN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ0NMSUNLJyxmY3QpO1xuICAgICAgcC5lbGVtVG9nZ2xlLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICQodGhpcy5kb2N1bWVudCkub2ZmKCdjbGljaycsZmN0KVxuICAgIH1cbiAgICByZXR1cm4gZmN0XG4gIH1cblxuICB0b2dnbGVEaXYoKSB7XG4gICBcbiAgICB2YXIgb25DbGlja0RvY3VtZW50ID0gdGhpcy5nZXRGdW5jQ2xpY2tEb2N1bWVudCgpXG4gICAgJCh0aGlzLmRvY3VtZW50KS5vZmYoJ2NsaWNrJyxvbkNsaWNrRG9jdW1lbnQpO1xuXG4gICAgaWYgKHRoaXMuZWxlbVRvZ2dsZS5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnKSB7XG4gICAgICBcbiAgICAgIC8vdGhpcy5lbGVtVG9nZ2xlLm5hdGl2ZUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgdGhpcy5lbGVtVG9nZ2xlLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBsZXQgYW5jaG9yID0gdGhpcy5lbGVtVmFsdWUubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgLy90aGlzLmVsZW1Ub2dnbGUubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSAoJChhbmNob3IpLmhlaWdodCgpKyQoYW5jaG9yKS5vZmZzZXQoKS50b3ApKydweCc7XG4gICAgICAvL3RoaXMuZWxlbVRvZ2dsZS5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSAkKGFuY2hvcikub2Zmc2V0KCkubGVmdCsncHgnO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAkKHRoaXMuZG9jdW1lbnQpLm9uKCdjbGljaycsb25DbGlja0RvY3VtZW50KVxuICAgICAgfSw1MDApXG4gICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtVG9nZ2xlLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICQodGhpcy5kb2N1bWVudCkub2ZmKCdjbGljaycsb25DbGlja0RvY3VtZW50KVxuICAgIH1cblxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgXG4gICAgdGhpcy5pc1Jvd0hUTUwgPSB0aGlzLmNvbC5pc1Jvd0hUTUw7XG4gICAgaWYgKHRoaXMuY29sLmRhdGFUeXBlID09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zX2hlYWRlcl9zdHJpbmc7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbC5kYXRhVHlwZSA9PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMubXVsdGlwbGUgPSB0cnVlO1xuICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc19oZWFkZXJfYm9vbGVhbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29sLmRhdGFUeXBlID09ICdib29sJykge1xuICAgICAgdGhpcy5tdWx0aXBsZSA9IHRydWU7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zX2hlYWRlcl9ib29sO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2wuZGF0YVR5cGUgPT0gJ251bWJlcicgfHwgdGhpcy5jb2wuZGF0YVR5cGUgPT0gJ2Zsb2F0Jykge1xuICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc19oZWFkZXJfbnVtYmVyO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2wuZGF0YVR5cGUgPT0gJ2RhdGUnKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zX2hlYWRlcl9kYXRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2wuZGF0YVR5cGUgPT0gJ3NlbGVjdG9yJykge1xuICAgICAgdGhpcy5vcHRpb25zID0gW107XG4gICAgICBcbiAgICB9XG4gICAgaWYgKHRoaXMuY29sLmhlYWRGaWx0ZXIpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuY29sLmhlYWRGaWx0ZXI7XG4gICAgICB0aGlzLm11bHRpcGxlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucyA9PSBudWxsKVxuICAgICAgdGhyb3cgKCdCYWQgZGVmaW5pdGlvbiB0byBvcGVyYXRvciAnICsgdGhpcy5jb2wucHJvcCk7XG4gICAgLy9pZiAodGhpcy5tdWx0aXBsZSkge1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5vcHRpb25zKSB7XG4gICAgICB0aGlzLm9wdGlvbnNbaV0uY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgICAvL31cblxuICAgIC8vdmFyIGVsZW1zID0gdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKTtcbiAgICAvL3ZhciBpbnN0YW5jZXMgPSBNLkZvcm1TZWxlY3QuaW5pdChlbGVtcywge30pO1xuICAgIC8vY29uc29sZS5sb2coJ00nLGluc3RhbmNlcylcbiAgfVxuXG4gIHNldEZpcnN0Q2hvaWNlKCkge1xuICAgIGNvbnNvbGUubG9nKFwibW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1cIilcbiAgICAvLyBjb25zb2xlLmxvZyhcInNldEZpcnN0Q2hvaWNlICgxKSBcIit0aGlzLnZhbHVlKycgJyt0aGlzLmxhYmVsKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcInNldEZpcnN0Q2hvaWNlIFwiLHRoaXMudmFsdWUsdGhpcy5sYWJlbCx0aGlzLm9wdGlvbnMpXG4gICAgaWYgKHRoaXMubXVsdGlwbGUgPT09IGZhbHNlICYmIHRoaXMubGFiZWwgPT0gJycpIHtcbiAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5vcHRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnNbaV0ubGFiZWwgIT0gJycpIHtcbiAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMub3B0aW9uc1tpXSx0cnVlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gIH1cblxuICBnZXRPcGVyYXRvcigpIHtcbiAgICBpZiAodGhpcy5tdWx0aXBsZSA9PT0gZmFsc2UpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdnZXRPcGVyYXRvciAnICsgdGhpcy5jb2wucHJvcCArICcgdmFsdWUgJyArIHRoaXMudmFsdWUsIHRoaXMub3B0aW9ucylcbiAgICAgIGlmICh0aGlzLnZhbHVlID09ICcnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maW5kKChkKSA9PiBkLnZhbHVlID09PSB0aGlzLnZhbHVlICYmIGQuY2hlY2tlZCA9PSB0cnVlKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjaGFuZ2VWYWx1ZXMob3B0KSB7XG4gICAgLyogQ2hhbmdlbWVudCBkZSBsJ29wZXJhdGV1ciBkYW5zIGxhIGNhcyBkZSB2YWxldXJzIG11bHRpcGxlcyBkJ29wZXJhdGV1cnMgXG4gICAgICAgIEV4OiB7IHZhbHVlOiBcIkFwcGxlXCIsIG9wZXJhdG9yOiBcIj1cIiwgbGFiZWw6IFwiQXBwbGVcIiwgY2hlY2tlZDogZmFsc2UgfSAqL1xuICAgIC8vIGNvbnNvbGUubG9nKFwiQ0hBTkdFUyBWQUxVRVNcIixvcHQpXG4gICAgaWYgKG9wdC5jaGVja2VkKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImNoZWNrZWRcIik7XG4gICAgICBvcHQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgLy90aGlzLnZhbHVlcy5zcGxpY2UodGhpcy52YWx1ZXMuZmluZCgoYSkgPT4gYS52YWx1ZSA9PT0gb3B0LnZhbHVlICYmIGEub3BlcmF0b3IgPT09IG9wdC5vcGVyYXRvciksMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIC8vdGhpcy52YWx1ZXMucHVzaChvcHQpO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlcy5zcGxpY2UoMCk7XG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLm9wdGlvbnMpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnNbaV0uY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlcy5wdXNoKHRoaXMub3B0aW9uc1tpXSk7XG4gICAgICB9XG5cbiAgICB9XG4gICAgdGhpcy5sYWJlbCA9ICcoJyArIHRoaXMudmFsdWVzLmxlbmd0aCArICcpJztcbiAgICBpZiAodGhpcy52YWx1ZXMubGVuZ3RoID09IDApXG4gICAgICB0aGlzLmxhYmVsID0gZGVmYXV0X2xhYmVsO1xuICAgIC8vdGhpcy50b2dnbGVEaXYoKTtcbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlVmFsdWUgT1AnLCB0aGlzLnZhbHVlcyk7XG4gICAgdGhpcy5fY2hhbmdlT3BlcmF0b3IoKTtcbiAgfVxuXG4gIGdldENvbmRpdGlvbnMoZmlsdGVyX3ZhbHVlKSB7XG4gICAgaWYgKHRoaXMubXVsdGlwbGUgPT0gZmFsc2UpIHtcbiAgICAgIGxldCBvID0gdGhpcy5nZXRPcGVyYXRvcigpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2dldEZpbHRlciAnICsgdGhpcy5jb2wucHJvcCArIFwiIG9cIiwgbylcbiAgICAgIGlmIChvICE9IG51bGwgJiYgby5vcGVyYXRvciAhPSAnJykge1xuICAgICAgICBsZXQgdmFsdWUgPSBvLnZhbHVlLnJlcGxhY2UoJyR7MX0nLCBmaWx0ZXJfdmFsdWUpXG4gICAgICAgIC8vaWYgKHRoaXMuY29sLmRhdGFUeXBlID09ICdudW1iZXInKSB7XG4gICAgICAgIC8vICB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgICAvL31cbiAgICAgICAgcmV0dXJuIFt0aGlzLmNvbC5wcm9wLCBvLm9wZXJhdG9yLCB2YWx1ZV1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMudmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IGNvbmRpdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCB2ID0gdGhpcy52YWx1ZXNbaV0udmFsdWU7XG4gICAgICAgICAgLy9pZiAodGhpcy5jb2wuZGF0YVR5cGUgPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAvLyAgdiA9IHBhcnNlRmxvYXQodik7XG4gICAgICAgICAgLy99XG4gICAgICAgICAgY29uZGl0aW9ucy5wdXNoKFt0aGlzLmNvbC5wcm9wLCB0aGlzLnZhbHVlc1tpXS5vcGVyYXRvciwgdl0pO1xuICAgICAgICAgIGlmICh0aGlzLnZhbHVlcy5sZW5ndGggLSAxID4gaSkge1xuICAgICAgICAgICAgY29uZGl0aW9ucy5wdXNoKCdvcicpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25kaXRpb25zO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNoYW5nZVZhbHVlKG9wdCxpZ25vcmVUb2dnbGU/OmJvb2xlYW4pIHtcbiAgICAvKiBDaGFuZ2VtZW50IGRlIGwnb3BlcmF0ZXVyIGRhbnMgbGEgY2FzIGRlIHZhbGV1cnMgc2ltcGxlICh1biBzZXVsIGNob2l4KVxuICAgICAgICBFeDogeyB2YWx1ZTogXCIlJHsxfSVcIiwgb3BlcmF0b3I6IFwibGlrZVwiLCBsYWJlbDogXCJjb250YWluc1wiLCBjaGVja2VkOiBmYWxzZSB9ICovXG4gICAgLy8gXG4gICAgY29uc29sZS5sb2coXCJDSEFOR0VTIFZBTFVFU1wiLG9wdClcbiAgICBpZiAodGhpcy5vcHRpb25zLmZpbmQoKGQpID0+IGQuY2hlY2tlZCA9PT0gdHJ1ZSkpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5maW5kKChkKSA9PiBkLmNoZWNrZWQgPT09IHRydWUpLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAob3B0LmNoZWNrZWQpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hlY2tlZFwiKTtcbiAgICAgIG9wdC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAvL3RoaXMudmFsdWVzLnNwbGljZSh0aGlzLnZhbHVlcy5maW5kKChhKSA9PiBhLnZhbHVlID09PSBvcHQudmFsdWUgJiYgYS5vcGVyYXRvciA9PT0gb3B0Lm9wZXJhdG9yKSwxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgLy90aGlzLnZhbHVlcy5wdXNoKG9wdCk7XG4gICAgfVxuICAgIGlmIChvcHQubGFiZWwubWF0Y2goL15cXHMrJC8pKSB7XG4gICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgICB0aGlzLmxhYmVsID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSBvcHQudmFsdWU7XG4gICAgICB0aGlzLmxhYmVsID0gb3B0LmxhYmVsO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VWYWx1ZSBPUCcsIHRoaXMub3B0aW9ucyk7XG4gICAgaWYgKCFpZ25vcmVUb2dnbGUpIHtcbiAgICAgIHRoaXMudG9nZ2xlRGl2KCk7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZU9wZXJhdG9yKCk7XG4gICAgaWYgKG9wdC5vcGVyYXRvciA9PSAnJykge1xuICAgICAgdGhpcy5jaGFuZ2VFbXB0eU9wZXJhdG9yLmVtaXQoKTtcbiAgICB9XG4gIH1cblxuICBfY2hhbmdlT3BlcmF0b3IoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ0VNSVQgT1AnLCB0aGlzLm9wdGlvbnMpXG4gICAgdGhpcy5jaGFuZ2VPcGVyYXRvci5lbWl0KHtcbiAgICAgIHByb3A6IHRoaXMuY29sLFxuICAgICAgLy8gIGNvbmRpdGlvbjogWyB0aGlzLmNvbC5wcm9wLCB0aGlzLnZhbHVlIF1cbiAgICB9KTtcbiAgfVxufVxuIiwiPCEtLVxuPGRpdiBjbGFzcz1cInJlZFwiPj08L2Rpdj4ob25Db21wbGV0ZSk9XCJvbkNvbXBsZXRlKCRldmVudClcIlxuXG48YXBwLW1hLWNvbXBsZXRpb24gW2RhdGFdPVwiY2hvaWNlc1wiIHBsYWNlaG9sZGVyPVwiXCIgdmFsdWU9XCJkZWZhdXRWYWx1ZVwiICA+PC9hcHAtbWEtY29tcGxldGlvbj5cbiAgICAgPHNlbGVjdCBkaXI9XCJydGxcIj5cbiAgICA8b3B0aW9uPkZvbzwvb3B0aW9uPiAgICBcbiAgICA8b3B0aW9uPmJhcjwvb3B0aW9uPlxuICAgIDxvcHRpb24+dG8gdGhlIHJpZ2h0PC9vcHRpb24+XG48L3NlbGVjdD5cblxuXG48ZGl2ICpuZ0lmPVwiY29sLmlzUm93TnVtYmVyID09PSB0cnVlOyB0aGVuIFJvd051bWJlckJsb2NrIGVsc2UgZGF0YUJsb2NrXCI+PC9kaXY+XG48bmctdGVtcGxhdGUgI1Jvd051bWJlckJsb2NrPnt7aX19PC9uZy10ZW1wbGF0ZT5cbjxuZy10ZW1wbGF0ZSAjZGF0YUJsb2NrPiB7e3VbY29sLnByb3BdIHwgZGF0YUdyaWRQaXBlIDp1IDpjfX08L25nLXRlbXBsYXRlPlxuLS0+XG5cbjxkaXY+XG5cbiAgICA8ZGl2ICNlbGVtVmFsdWUgKGNsaWNrKT1cInRvZ2dsZURpdigpXCIgY2xhc3M9XCJvcF9sYWJlbFwiPjxpICpuZ0lmPVwibGFiZWwgPT0gJydcIiBjbGFzcz1cInRpbnkgbWF0ZXJpYWwtaWNvbnNcIj5zZWFyY2g8L2k+e3tsYWJlbH19XG4gICAgPC9kaXY+XG4gICAgPCEtLSBbc3R5bGUubGVmdC5weF09XCJwb3B1cFBvc2l0aW9uLmxlZnRcIiAgW3N0eWxlLnRvcC5weF09XCJwb3B1cFBvc2l0aW9uLnRvcFwiLS0+XG4gICAgPGRpdiAjZWxlbVRvZ2dsZSBzdHlsZT1cImRpc3BsYXk6IG5vbmU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgei1pbmRleDogMjA7IG1heC1oZWlnaHQ6IDMwMHB4OyBvdmVyZmxvdy15OiBhdXRvOyBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7Ym9yZGVyOiAxcHggc29saWQgIzllOWU5ZTtcIj5cbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgb3B0IG9mIG9wdGlvbnM7XCIgY2xhc3M9XCJvcF9maWx0ZXJcIiBbdmFsdWVdPVwib3B0LnZhbHVlXCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwibXVsdGlwbGUgPT09IHRydWVcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cIm9wX2ZpbHRlclwiIFt2YWx1ZV09XCJvcHQudmFsdWVcIiBbY2hlY2tlZF09XCJvcHQuY2hlY2tlZFwiIChjbGljayk9XCJjaGFuZ2VWYWx1ZXMob3B0KVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWlzUm93SFRNTFwiPnt7b3B0LmxhYmVsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXNSb3dIVE1MID09PSB0cnVlXCIgW2lubmVySFRNTF09XCJvcHQubGFiZWxcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIm11bHRpcGxlID09PSBmYWxzZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgKGNsaWNrKT1cImNoYW5nZVZhbHVlKG9wdClcIj57e29wdC5sYWJlbH19Jm5ic3A7PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbjwvZGl2PlxuPCEtLVxuPHNlbGVjdCBjbGFzcz1cImJyb3dzZXItZGVmYXVsdCBvcF9maWx0ZXJcIiBbKG5nTW9kZWwpXT1cInZhbHVlXCIgKGNoYW5nZSk9XCJfY2hhbmdlT3BlcmF0b3IoJGV2ZW50KVwiID5cbiAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBvcHQgb2Ygb3B0aW9ucztcIiAgY2xhc3M9XCJvcF9maWx0ZXJcIiBbdmFsdWVdPVwib3B0LnZhbHVlXCI+e3tvcHQubGFiZWx9fVxuICAgIDwvb3B0aW9uPlxuPC9zZWxlY3Q+XG5cblxuLS0+Il19