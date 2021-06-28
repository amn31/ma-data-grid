import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate, ɵɵelement, ɵɵproperty, ɵɵsanitizeHtml, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵtemplate, ɵɵtextInterpolate1, EventEmitter, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵstyleProp, ɵsetClassMetadata, Component, Input, ViewChild, Output, ɵɵstaticViewQuery, ɵɵstyleMap, ɵɵNgOnChangesFeature, ɵɵclassMapInterpolate1, ɵɵdirectiveInject, ViewContainerRef, ɵɵdefineDirective, Directive, ComponentFactoryResolver, ɵɵdefinePipe, Pipe, ɵɵclassMapInterpolate2, ɵɵpureFunction1, ɵɵpipe, ɵɵpipeBind3, ɵɵpureFunction3, ɵɵpureFunction5, ɵɵpureFunction2, ViewChildren, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import * as $ from 'jquery';
import { NgIf, NgForOf, NgClass, NgSwitch, NgSwitchCase, NgSwitchDefault, CommonModule } from '@angular/common';
import { Datepicker, Timepicker, updateTextFields } from 'materialize-css';
import { DefaultValueAccessor, NgControlStatus, NgModel, FormsModule } from '@angular/forms';
import { MaFilter } from '@amn31/filter-multiple-conditions';

//import { Type } from '@angular/core';
const options_header_boolean = [{
        value: '1',
        operator: '=',
        label: 'true'
    }, {
        value: '0',
        operator: '=',
        label: 'false'
    }, {
        value: 'a',
        operator: 'isnull',
        label: 'NULL'
    }, {
        value: 'a',
        operator: 'isnotnull',
        label: '!NULL'
    },];
const options_header_string = [
    {
        value: '',
        operator: '',
        label: ''
    }, {
        value: '%${1}%',
        operator: 'like',
        label: 'contains',
    }, {
        value: '%${1}%',
        operator: 'not like',
        label: 'without',
    }, {
        value: '${1}%',
        operator: 'like',
        label: 'startswith'
    }, {
        value: '${1}%',
        operator: 'not like',
        label: 'not start'
    }, {
        value: '%${1}',
        operator: 'like',
        label: 'endswith',
    }, {
        value: '%${1}',
        operator: 'not like',
        label: 'not end',
    }
];
const options_header_number = [{
        value: '',
        operator: '',
        label: ''
    }, {
        value: '${1}',
        operator: '=',
        label: '=='
    }, {
        value: '${1}',
        operator: '>',
        label: '>'
    }, {
        value: '${1}',
        operator: '>=',
        label: '>='
    }, {
        value: '${1}',
        operator: '<=',
        label: '<=',
    }, {
        value: '${1}',
        operator: '<',
        label: '<',
    }];
const options_header_date = [{
        value: '',
        operator: '',
        label: ''
    }, {
        value: '${1}',
        operator: '=',
        label: '=='
    }, {
        value: '${1}',
        operator: '>',
        label: '>'
    }, {
        value: '${1}',
        operator: '>=',
        label: '>='
    }, {
        value: '${1}',
        operator: '<=',
        label: '<=',
    }, {
        value: '${1}',
        operator: '<',
        label: '<',
    }];
// export class MaData {
//   static FilterByConditions(where, temp: any) {
//     // console.log('DEAL findFull ==== ', where);
//     if (!where || where.length == 0) {
//       return temp;
//     }
//     var result = [];
//     for (var i = 0; i < where.length; i++) {
//       var condition = where[i];
//       let temp1;
//       // console.log('DEAL typeof(condition)' + typeof (condition), condition);
//       if (typeof (condition) == 'object') {
//         if (condition.length == 3 &&
//           typeof (condition[0]) == 'string' && typeof (condition[1]) == 'string' &&
//           (typeof (condition[2]) == 'string' || typeof (condition[2]) == 'number')) {
//           // console.log("DEAL TO FIND ", temp.length)
//           temp1 = this._filterResultBySimpleCondition(condition, temp);
//         } else if (condition.length > 0 && condition.find(d => typeof (d) == 'object')) {
//           temp1 = this.FilterByConditions(condition, temp);
//         }
//       } else {
//         if (typeof (condition) == 'string') {
//           if (condition != 'or' && condition != 'and') {
//             throw ("Unexpected condition :" + condition)
//           }
//         }
//       }
//       if (temp1) {
//         // console.log('DEAL TODO', temp1.length);
//         // Cas où l'operator précédent était 'or'
//         if (where[i + 1] && where[i + 1] == 'or' || (i == where.length - 1 && where[i - 1] && where[i - 1] == 'or')) {
//           // On ajoute au result les valeurs non trouvées précédemment
//           for (var t of temp1) {
//             //console.log(t);
//             if (!(result.find(d => d === t))) {
//               result.push(t);
//             }
//           }
//           // console.log("DEAL TODO OR", result)
//           // Cas où l'operator précédent était 'and'
//         } else {
//           // console.log("DEAL TODO AND", temp1);
//           // On ecrase temp
//           temp = temp1;
//           result = temp;
//         }
//       }
//       i++;
//     }
//     return result;
//   }
//   private static _filterResultBySimpleCondition(condition, temp: any) {
//     console.log('DEAL findTemp === ', condition)
//     if (typeof (condition) == 'object') {
//       var field = condition[0];
//       var operator = condition[1];
//       var value = condition[2];
//       let reg : any = null;
//       let opnum = false;
//       let reverse = false;
//       console.log('field (1):' + field, operator, value)
//       if (operator == 'startswith') {
//         reg = new RegExp("^" + value, 'i');
//       } else if (operator == 'endswith') {
//         reg = new RegExp(value + "$", 'i');
//       } else if (operator == 'contains') {
//         reg = new RegExp(value, 'i');
//       } else if (operator == 'like' || operator == 'not like') {
//         if (operator == 'not like') {
//           reverse = true;
//         }
//         if (value.match(/^%.+%$/)) {
//           value = value.replace(/^%/, '').replace(/%$/, '')
//           operator = 'contains'
//           reg = new RegExp(value, 'i');
//         } else if (value.match(/.+%$/)) {
//           value = value.replace(/%$/, '')
//           operator = 'startswith'
//           reg = new RegExp("^" + value, 'i');
//         } else if (value.match(/^%/)) {
//           value = value.replace(/^%/, '')
//           operator = 'endswith'
//           reg = new RegExp(value + "$", 'i');
//         }
//       } else if (operator == 'regex') {
//         reg = new RegExp(value, 'i');
//       } else if (operator == 'notRegex') {
//         reg = new RegExp(value, 'i');
//         reverse = true;
//       } else if (operator == 'isnull') {
//       } else if (operator == 'isnotnull') {
//       } else if (operator == '=') {
//         opnum = true;
//       } else if (operator == '>=') {
//         opnum = true;
//       } else if (operator == '>') {
//         opnum = true;
//       } else if (operator == '<') {
//         opnum = true;
//       } else if (operator == '!=') {
//         opnum = true;
//       } else if (operator == '<=') {
//         opnum = true;
//       } else {
//         throw ("Unkown operator " + operator)
//       }
//       console.log('field:' + field, operator, value, reg)
//       temp = temp.filter(function (d, index, array) {
//         //console.log(d[field])
//         if (reg == null) {
//           if (opnum && typeof (d[field]) == 'number') {
//             value = parseFloat(value)
//           }
//           if (operator == '=') {
//             if (typeof (d[field]) == 'boolean') {
//               if (value == '1')
//                 value = true;
//               if (value == '0')
//                 value = false;
//             }
//             if (d[field] !== null) {
//               if (d[field] === value) {
//                 return true;
//               }
//             }
//           } else if (operator == 'isnull') {
//             if (d[field] == null) {
//               return true;
//             }
//           } else if (operator == 'isnotnull') {
//             if (d[field] != null) {
//               return true;
//             }
//           } else if (operator == '>=') {
//             if (d[field] !== null && d[field] >= value) {
//               return true;
//             }
//           } else if (operator == '>') {
//             if (d[field] !== null && d[field] > value) {
//               return true;
//             }
//           } else if (operator == '!=') {
//             if (d[field] !== null && d[field] != value) {
//               return true;
//             }
//           } else if (operator == '<=') {
//             if (d[field] !== null && d[field] <= value) {
//               return true;
//             }
//           } else if (operator == '<') {
//             if (d[field] !== null && d[field] < value) {
//               return true;
//             }
//           }
//         } else {
//           if (d[field] && d[field].match(reg)) {
//             if (reverse) {
//               return false;
//             }
//             return true;
//           }
//         }
//         if (reverse) {
//           return true;
//         }
//         return false;
//       })
//     }
//     return temp;
//   }
// }

const _c0 = ["elemToggle"];
const _c1 = ["elemValue"];
function DataGridOpFilterComponent_i_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "i", 6);
    ɵɵtext(1, "search");
    ɵɵelementEnd();
} }
function DataGridOpFilterComponent_div_7_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const opt_r4 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(opt_r4.label);
} }
function DataGridOpFilterComponent_div_7_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 11);
} if (rf & 2) {
    const opt_r4 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("innerHTML", opt_r4.label, ɵɵsanitizeHtml);
} }
function DataGridOpFilterComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "label");
    ɵɵelementStart(2, "input", 9);
    ɵɵlistener("click", function DataGridOpFilterComponent_div_7_div_1_Template_input_click_2_listener() { ɵɵrestoreView(_r13); const opt_r4 = ɵɵnextContext().$implicit; const ctx_r11 = ɵɵnextContext(); return ctx_r11.changeValues(opt_r4); });
    ɵɵelementEnd();
    ɵɵtemplate(3, DataGridOpFilterComponent_div_7_div_1_span_3_Template, 2, 1, "span", 8);
    ɵɵtemplate(4, DataGridOpFilterComponent_div_7_div_1_span_4_Template, 1, 1, "span", 10);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const opt_r4 = ɵɵnextContext().$implicit;
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("value", opt_r4.value)("checked", opt_r4.checked);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r5.isRowHTML);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r5.isRowHTML === true);
} }
function DataGridOpFilterComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "div", 12);
    ɵɵlistener("click", function DataGridOpFilterComponent_div_7_div_2_Template_div_click_1_listener() { ɵɵrestoreView(_r17); const opt_r4 = ɵɵnextContext().$implicit; const ctx_r15 = ɵɵnextContext(); return ctx_r15.changeValue(opt_r4); });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const opt_r4 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", opt_r4.label, "\u00A0");
} }
function DataGridOpFilterComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, DataGridOpFilterComponent_div_7_div_1_Template, 5, 4, "div", 8);
    ɵɵtemplate(2, DataGridOpFilterComponent_div_7_div_2_Template, 3, 1, "div", 8);
    ɵɵelementEnd();
} if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("value", opt_r4.value);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.multiple === true);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.multiple === false);
} }
const defaut_label = '';
class DataGridOpFilterComponent {
    constructor() {
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
            $(document).off('click', fct);
        };
        return fct;
    }
    toggleDiv() {
        var onClickDocument = this.getFuncClickDocument();
        $(document).off('click', onClickDocument);
        if (this.elemToggle.nativeElement.style.display == 'none') {
            this.elemToggle.nativeElement.style.position = 'absolute';
            this.elemToggle.nativeElement.style.display = 'block';
            let anchor = this.elemValue.nativeElement.parentElement;
            this.elemToggle.nativeElement.style.top = ($(anchor).height() + $(anchor).offset().top) + 'px';
            this.elemToggle.nativeElement.style.left = $(anchor).offset().left + 'px';
            setTimeout(function () {
                $(document).on('click', onClickDocument);
            }, 500);
        }
        else {
            this.elemToggle.nativeElement.style.display = 'none';
            $(document).off('click', onClickDocument);
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
        if (this.col.dataType == 'number') {
            this.options = options_header_number;
        }
        if (this.col.dataType == 'date') {
            this.options = options_header_date;
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
        //var elems = document.querySelectorAll('select');
        //var instances = M.FormSelect.init(elems, {});
        //console.log('M',instances)
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
    changeValue(opt) {
        // console.log("ChangeValue",opt);
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
        this.toggleDiv();
        this._changeOperator();
        if (opt.operator == '') {
            this.changeEmptyOperator.emit();
        }
    }
    _changeOperator() {
        // console.log('EMIT OP', this.options)
        this.changeOperator.emit({
            prop: this.col,
        });
    }
}
DataGridOpFilterComponent.ɵfac = function DataGridOpFilterComponent_Factory(t) { return new (t || DataGridOpFilterComponent)(); };
DataGridOpFilterComponent.ɵcmp = ɵɵdefineComponent({ type: DataGridOpFilterComponent, selectors: [["ma-data-grid-op-filter"]], viewQuery: function DataGridOpFilterComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, true);
        ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elemToggle = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elemValue = _t.first);
    } }, inputs: { value: "value", col: "col" }, outputs: { changeOperator: "changeOperator", changeEmptyOperator: "changeEmptyOperator" }, decls: 8, vars: 7, consts: [[1, "op_label", 3, "click"], ["elemValue", ""], ["class", "tiny material-icons", 4, "ngIf"], [2, "display", "none", "z-index", "20", "max-height", "300px", "overflow-y", "auto", "background-color", "aliceblue", "border", "1px solid #9e9e9e"], ["elemToggle", ""], ["class", "op_filter", 3, "value", 4, "ngFor", "ngForOf"], [1, "tiny", "material-icons"], [1, "op_filter", 3, "value"], [4, "ngIf"], ["type", "checkbox", 1, "op_filter", 3, "value", "checked", "click"], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"], [3, "click"]], template: function DataGridOpFilterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵelementStart(1, "div", 0, 1);
        ɵɵlistener("click", function DataGridOpFilterComponent_Template_div_click_1_listener() { return ctx.toggleDiv(); });
        ɵɵtemplate(3, DataGridOpFilterComponent_i_3_Template, 2, 0, "i", 2);
        ɵɵtext(4);
        ɵɵelementEnd();
        ɵɵelementStart(5, "div", 3, 4);
        ɵɵtemplate(7, DataGridOpFilterComponent_div_7_Template, 3, 3, "div", 5);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.label == "");
        ɵɵadvance(1);
        ɵɵtextInterpolate1("", ctx.label, " ");
        ɵɵadvance(1);
        ɵɵstyleProp("left", ctx.popupPosition.left, "px")("top", ctx.popupPosition.top, "px");
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.options);
    } }, directives: [NgIf, NgForOf], styles: ["select.op_filter[_ngcontent-%COMP%]{border:1px inset #9e9e9e;height:1.4rem;min-width:25px;padding:0}.op_filter[_ngcontent-%COMP%]{border-top:1px solid #9e9e9e;padding-left:10px;padding-right:10px}.op_filter[_ngcontent-%COMP%], .op_label[_ngcontent-%COMP%]{font-weight:lighter}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DataGridOpFilterComponent, [{
        type: Component,
        args: [{
                selector: 'ma-data-grid-op-filter',
                templateUrl: './data-grid-op-filter.component.html',
                styleUrls: ['./data-grid-op-filter.component.css']
            }]
    }], function () { return []; }, { value: [{
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

const _c0$1 = ["madatepicker"];
class DataGridPickerDateComponent {
    constructor() {
        this.datevalue = null;
        this.realValue = "";
        this.time = '';
        this.value = '';
        this.changePicker = new EventEmitter();
        this.datepicker_id = "dp_" + Math.floor((Math.random() * 100000));
    }
    ngAfterViewInit() {
        this._init();
    }
    ngOnDestroy() {
        if (this.instance)
            this.instance.destroy();
    }
    ngOnInit() {
        // console.log('ngOnInit this.madatepicker');
        if (this.value == '') {
            this.datevalue = null;
        }
    }
    getDate() {
        return this.datevalue;
    }
    setDate(date) {
        if (date != null) {
            const offset = new Date().getTimezoneOffset();
            date = new Date(date.getTime() - (offset * 60 * 1000));
        }
        var elem = document.getElementById(this.datepicker_id);
        if (date == null) {
            elem.value = '';
        }
        else {
            elem.value = date.toISOString().replace(/T.+/, '');
        }
        this.datevalue = date;
        // console.log("setDate VALUE", this.datevalue);
    }
    getTime() {
        return this.time;
    }
    setTime(hour, min) {
        if (hour < 10) {
            hour = '0' + hour;
        }
        if (min < 10) {
            min = '0' + min;
        }
        this.time = hour + ':' + min;
        // console.log("VALUE", this.time);
    }
    _init() {
        //var elems = document.querySelectorAll('.ma-data-grid-datepicker');
        var elem = document.getElementById(this.datepicker_id);
        var ptr = this;
        if (this.type == 'date') {
            var instances = Datepicker.init(elem, {
                autoClose: true,
                format: 'yyyy-mm-dd',
                onSelect: function (d) {
                    ptr.setDate(d);
                }
                //minDate: new Date(),
                //maxDate: new Date(),
            });
            elem.onchange = function (e) {
                // console.log("EVENT", elem.value);
                if (elem.value == '' || !elem.value.match(/^\d\d\d\d-\d\d-\d\d$/)) {
                    elem.value = '';
                    ptr.setDate(null);
                }
                ptr.emitDateEvent();
            };
        }
        else {
            var instances = Timepicker.init(elem, {
                autoClose: true,
                //format: 'yyyy-mm-dd',
                twelveHour: false,
                onSelect: function (d, h, m) {
                    //console.log("G",d,h,m)
                    ptr.setTime(d, h);
                    ptr.emitTimeEvent();
                }
            });
        }
        //this.instance= instances[0];
        //this.instance.setDate(new Date());
        //instance.gotoDate(new Date());
    }
    onChange() {
        // console.log("realValue" + this.realValue);
        if (this.type == 'date') {
            this.changePicker.emit(this.datevalue);
        }
        else {
            this.changePicker.emit(this.time);
        }
    }
    emitDateEvent() {
        this.changePicker.emit(this.datevalue);
    }
    emitTimeEvent() {
        this.changePicker.emit(this.time);
    }
}
DataGridPickerDateComponent.ɵfac = function DataGridPickerDateComponent_Factory(t) { return new (t || DataGridPickerDateComponent)(); };
DataGridPickerDateComponent.ɵcmp = ɵɵdefineComponent({ type: DataGridPickerDateComponent, selectors: [["ma-data-grid-datepicker"]], viewQuery: function DataGridPickerDateComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$1, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.madatepicker = _t.first);
    } }, inputs: { value: "value", type: "type" }, outputs: { changePicker: "changePicker" }, decls: 2, vars: 2, consts: [["type", "text", 1, "ma-data-grid-datepicker", "datepicker", 3, "id", "ngModel", "ngModelChange"], ["madatepicker", ""]], template: function DataGridPickerDateComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "input", 0, 1);
        ɵɵlistener("ngModelChange", function DataGridPickerDateComponent_Template_input_ngModelChange_0_listener($event) { return ctx.realValue = $event; });
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("id", ctx.datepicker_id)("ngModel", ctx.realValue);
    } }, directives: [DefaultValueAccessor, NgControlStatus, NgModel], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DataGridPickerDateComponent, [{
        type: Component,
        args: [{
                selector: 'ma-data-grid-datepicker',
                templateUrl: './data-grid-picker-date.component.html',
                styleUrls: ['./data-grid-picker-date.component.css']
            }]
    }], function () { return []; }, { value: [{
            type: Input
        }], type: [{
            type: Input
        }], changePicker: [{
            type: Output
        }], madatepicker: [{
            type: ViewChild,
            args: ["madatepicker", { static: false }]
        }] }); })();

function DataGridHeadFilterComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 4);
    ɵɵelementStart(1, "input", 7);
    ɵɵlistener("ngModelChange", function DataGridHeadFilterComponent_td_5_Template_input_ngModelChange_1_listener($event) { ɵɵrestoreView(_r4); const ctx_r3 = ɵɵnextContext(); return ctx_r3.filter_value = $event; })("keyup", function DataGridHeadFilterComponent_td_5_Template_input_keyup_1_listener($event) { ɵɵrestoreView(_r4); const ctx_r5 = ɵɵnextContext(); return ctx_r5._changeOperator($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r1.filter_value);
} }
class DataGridHeadFilterComponent {
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
        if (this.filter_value != '' || this.col.dataType == 'boolean' || this.col.headFilter != null) {
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
DataGridHeadFilterComponent.ɵfac = function DataGridHeadFilterComponent_Factory(t) { return new (t || DataGridHeadFilterComponent)(); };
DataGridHeadFilterComponent.ɵcmp = ɵɵdefineComponent({ type: DataGridHeadFilterComponent, selectors: [["ma-data-grid-head-filter"]], viewQuery: function DataGridHeadFilterComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(DataGridOpFilterComponent, true);
        ɵɵstaticViewQuery(DataGridPickerDateComponent, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.op_filter = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.madate_picker = _t.first);
    } }, inputs: { filter_value: "filter_value", col: "col" }, outputs: { changeHeaderFilter: "changeHeaderFilter" }, decls: 9, vars: 4, consts: [[1, "header_filter_op"], [3, "col", "changeEmptyOperator", "changeOperator"], ["op_filter", ""], ["class", "header_filter", 4, "ngIf"], [1, "header_filter"], ["type", "date", 3, "changePicker"], ["madate_picker", ""], [1, "header_filter", 3, "ngModel", "ngModelChange", "keyup"]], template: function DataGridHeadFilterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "table");
        ɵɵelementStart(1, "tr");
        ɵɵelementStart(2, "td", 0);
        ɵɵelementStart(3, "ma-data-grid-op-filter", 1, 2);
        ɵɵlistener("changeEmptyOperator", function DataGridHeadFilterComponent_Template_ma_data_grid_op_filter_changeEmptyOperator_3_listener() { return ctx._changeEmptyOperator(); })("changeOperator", function DataGridHeadFilterComponent_Template_ma_data_grid_op_filter_changeOperator_3_listener($event) { return ctx._changeOperator($event); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(5, DataGridHeadFilterComponent_td_5_Template, 2, 1, "td", 3);
        ɵɵelementStart(6, "td", 4);
        ɵɵelementStart(7, "ma-data-grid-datepicker", 5, 6);
        ɵɵlistener("changePicker", function DataGridHeadFilterComponent_Template_ma_data_grid_datepicker_changePicker_7_listener($event) { return ctx._changeDate($event); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("col", ctx.col);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.col.dataType != "date" && ctx.col.dataType != "boolean" && (!ctx.col.headFilter || ctx.col.headFilter.length == 0));
        ɵɵadvance(1);
        ɵɵstyleMap(ctx.astuce_datapicker);
    } }, directives: [DataGridOpFilterComponent, NgIf, DataGridPickerDateComponent, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["input.header_filter[_ngcontent-%COMP%]{background-color:#e8f5f8;border:1px inset #9e9e9e;height:1.2rem;margin:0 0 0 -5px}  .ma-data-grid-datepicker{height:1.2rem;max-height:1.2rem}td.header_filter[_ngcontent-%COMP%]{padding:1px 1px 1px 5px}td.header_filter_op[_ngcontent-%COMP%]{padding:1px 1px 1px 0}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DataGridHeadFilterComponent, [{
        type: Component,
        args: [{
                selector: 'ma-data-grid-head-filter',
                templateUrl: './data-grid-head-filter.component.html',
                styleUrls: ['./data-grid-head-filter.component.css']
            }]
    }], function () { return []; }, { filter_value: [{
            type: Input
        }], col: [{
            type: Input
        }], changeHeaderFilter: [{
            type: Output
        }], op_filter: [{
            type: ViewChild,
            args: [DataGridOpFilterComponent, { static: true }]
        }], madate_picker: [{
            type: ViewChild,
            args: [DataGridPickerDateComponent, { static: true }]
        }] }); })();

function MaGridFilterComponent_div_10_label_1_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtext(1, "|");
    ɵɵelementEnd();
} }
function MaGridFilterComponent_div_10_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label");
    ɵɵelementStart(1, "input", 9);
    ɵɵlistener("click", function MaGridFilterComponent_div_10_label_1_Template_input_click_1_listener() { ɵɵrestoreView(_r8); const col_r1 = ɵɵnextContext().$implicit; const ctx_r6 = ɵɵnextContext(); return ctx_r6.clickChekbox(col_r1); });
    ɵɵelementEnd();
    ɵɵelementStart(2, "span", 10);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, MaGridFilterComponent_div_10_label_1_span_4_Template, 2, 0, "span", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext();
    const col_r1 = ctx_r9.$implicit;
    const isLast_r2 = ctx_r9.last;
    ɵɵadvance(1);
    ɵɵproperty("checked", col_r1.extFilterSelected);
    ɵɵadvance(2);
    ɵɵtextInterpolate(col_r1.title);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !isLast_r2);
} }
function MaGridFilterComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, MaGridFilterComponent_div_10_label_1_Template, 5, 3, "label", 8);
    ɵɵelementEnd();
} if (rf & 2) {
    const col_r1 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", col_r1.extFilter === true);
} }
class MaGridFilterComponent {
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
        updateTextFields();
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
MaGridFilterComponent.ɵcmp = ɵɵdefineComponent({ type: MaGridFilterComponent, selectors: [["ma-data-grid-filter"]], inputs: { searchValue: "searchValue", customCSS: "customCSS", columns: "columns" }, outputs: { searchValueChange: "searchValueChange", filterChange: "filterChange" }, features: [ɵɵNgOnChangesFeature], decls: 11, vars: 6, consts: [[1, "row", "ma-grid-filter"], [1, "input-field", "col", "s3"], [1, "material-icons", "prefix", 3, "click"], ["type", "text", 1, "validate", 3, "id", "keyup"], ["for", "icon_prefix"], [1, "title_field"], ["class", "checkbox_field", 4, "ngFor", "ngForOf"], [1, "checkbox_field"], [4, "ngIf"], ["type", "checkbox", 3, "checked", "click"], [1, "checkbox_title"], ["class", "checkbox_separator", 4, "ngIf"], [1, "checkbox_separator"]], template: function MaGridFilterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "i", 2);
        ɵɵlistener("click", function MaGridFilterComponent_Template_i_click_2_listener() { return ctx.enableFocus(); });
        ɵɵtext(3, "search");
        ɵɵelementEnd();
        ɵɵelementStart(4, "input", 3);
        ɵɵlistener("keyup", function MaGridFilterComponent_Template_input_keyup_4_listener($event) { return ctx.updateFilter($event); });
        ɵɵelementEnd();
        ɵɵelementStart(5, "label", 4);
        ɵɵtext(6);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(7, "div");
        ɵɵelementStart(8, "div", 5);
        ɵɵtext(9, " Select column(s) filter");
        ɵɵelementEnd();
        ɵɵtemplate(10, MaGridFilterComponent_div_10_Template, 2, 1, "div", 6);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵproperty("id", ctx.input_filter);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ctx.placeholder);
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("col s8 ", ctx.customCSS, "ma-grid-filter-checkboxes");
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ctx.filters);
    } }, directives: [NgForOf, NgIf], styles: ["[_nghost-%COMP%]{--border-size:0px;--color-border:#667;--color-defaut:#667}.ma-grid-filter[_ngcontent-%COMP%]   .ma-grid-filter-checkboxes[_ngcontent-%COMP%]{border:1px solid var(--color-border);color:var(--color-defaut);margin-right:10px}.ma-grid-filter[_ngcontent-%COMP%]   .title_field[_ngcontent-%COMP%]{font-weight:500;margin-left:15px}.ma-grid-filter[_ngcontent-%COMP%]   .checkbox_field[_ngcontent-%COMP%]{display:inline;margin-left:5px;margin-right:5px}.ma-grid-filter[_ngcontent-%COMP%]   span.checkbox_title[_ngcontent-%COMP%]{min-width:70px;padding-left:22px}.ma-grid-filter[_ngcontent-%COMP%]   span.checkbox_title[_ngcontent-%COMP%]:after{content:\"|\"}.ma-grid-filter[_ngcontent-%COMP%]   span.checkbox_separator[_ngcontent-%COMP%]{font-size:large;margin-left:5px}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MaGridFilterComponent, [{
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

class MaGridCellTemplateDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
MaGridCellTemplateDirective.ɵfac = function MaGridCellTemplateDirective_Factory(t) { return new (t || MaGridCellTemplateDirective)(ɵɵdirectiveInject(ViewContainerRef)); };
MaGridCellTemplateDirective.ɵdir = ɵɵdefineDirective({ type: MaGridCellTemplateDirective, selectors: [["", "libMaGridCellTemplate", ""]] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MaGridCellTemplateDirective, [{
        type: Directive,
        args: [{
                selector: '[libMaGridCellTemplate]'
            }]
    }], function () { return [{ type: ViewContainerRef }]; }, null); })();

class DataGridCellItemComponent {
    constructor(component, data) {
        this.component = component;
        this.data = data;
    }
}

function DataGridTemplateCellComponent_ng_template_0_Template(rf, ctx) { }
class DataGridTemplateCellComponent {
    constructor(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        // console.log('DataGridTemplateCellComponent c',this.template);
    }
    ngOnInit() {
        // 
        if (!this.template) {
            return;
        }
        const component = new DataGridCellItemComponent(this.template, this.data);
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component.component);
        if (!this.libMaGridCellTemplate) {
            return;
        }
        const viewContainerRef = this.libMaGridCellTemplate.viewContainerRef;
        const componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = component.data;
    }
}
DataGridTemplateCellComponent.ɵfac = function DataGridTemplateCellComponent_Factory(t) { return new (t || DataGridTemplateCellComponent)(ɵɵdirectiveInject(ComponentFactoryResolver)); };
DataGridTemplateCellComponent.ɵcmp = ɵɵdefineComponent({ type: DataGridTemplateCellComponent, selectors: [["ma-data-grid-template-cell-t1"]], viewQuery: function DataGridTemplateCellComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(MaGridCellTemplateDirective, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.libMaGridCellTemplate = _t.first);
    } }, inputs: { data: "data", template: "template" }, decls: 1, vars: 0, consts: [["libMaGridCellTemplate", ""]], template: function DataGridTemplateCellComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, DataGridTemplateCellComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
    } }, directives: [MaGridCellTemplateDirective], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DataGridTemplateCellComponent, [{
        type: Component,
        args: [{
                selector: 'ma-data-grid-template-cell-t1',
                template: '<ng-template libMaGridCellTemplate></ng-template>'
            }]
    }], function () { return [{ type: ComponentFactoryResolver }]; }, { data: [{
            type: Input
        }], template: [{
            type: Input
        }], libMaGridCellTemplate: [{
            type: ViewChild,
            args: [MaGridCellTemplateDirective, { static: true }]
        }] }); })();

class DataGridCellBooleanComponent {
    constructor() {
        this.icon = '';
    }
    ngOnInit() {
        // console.log(this.data[this.col.prop]);
        if (this.data[this.col.prop] === true) {
            this.icon = 'check_box';
        }
        else if (this.data[this.col.prop] === false) {
            this.icon = 'check_box_outline_blank';
        }
    }
}
DataGridCellBooleanComponent.ɵfac = function DataGridCellBooleanComponent_Factory(t) { return new (t || DataGridCellBooleanComponent)(); };
DataGridCellBooleanComponent.ɵcmp = ɵɵdefineComponent({ type: DataGridCellBooleanComponent, selectors: [["ma-data-grid-cell-boolean"]], inputs: { data: "data", col: "col" }, decls: 3, vars: 1, consts: [[2, "text-align", "center"], [1, "tiny", "material-icons"]], template: function DataGridCellBooleanComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "i", 1);
        ɵɵtext(2);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵtextInterpolate(ctx.icon);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DataGridCellBooleanComponent, [{
        type: Component,
        args: [{
                selector: 'ma-data-grid-cell-boolean',
                template: '<div style="text-align: center"><i class="tiny material-icons">{{icon}}</i></div>'
            }]
    }], function () { return []; }, { data: [{
            type: Input
        }], col: [{
            type: Input
        }] }); })();

class DataGridPipePipe {
    transform(value, row, col) {
        if (col.pipe) {
            return col.pipe(value, row, col);
        }
        return value;
    }
}
DataGridPipePipe.ɵfac = function DataGridPipePipe_Factory(t) { return new (t || DataGridPipePipe)(); };
DataGridPipePipe.ɵpipe = ɵɵdefinePipe({ name: "maDataGridPipe", type: DataGridPipePipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DataGridPipePipe, [{
        type: Pipe,
        args: [{
                name: 'maDataGridPipe'
            }]
    }], null, null); })();

function MaDataGridComponent_ma_data_grid_filter_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ma-data-grid-filter", 15, 16);
    ɵɵlistener("searchValueChange", function MaDataGridComponent_ma_data_grid_filter_0_Template_ma_data_grid_filter_searchValueChange_0_listener($event) { ɵɵrestoreView(_r12); const ctx_r11 = ɵɵnextContext(); return ctx_r11.searchValue = $event; })("filterChange", function MaDataGridComponent_ma_data_grid_filter_0_Template_ma_data_grid_filter_filterChange_0_listener($event) { ɵɵrestoreView(_r12); const ctx_r13 = ɵɵnextContext(); return ctx_r13._filterChange($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("customCSS", ctx_r0.customCSS)("searchValue", ctx_r0.searchValue)("columns", ctx_r0.columns);
} }
function MaDataGridComponent_td_5_span_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 21);
    ɵɵtext(1, "swap_vert");
    ɵɵelementEnd();
} }
function MaDataGridComponent_td_5_span_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 21);
    ɵɵtext(1, "arrow_drop_down");
    ɵɵelementEnd();
} }
function MaDataGridComponent_td_5_span_2_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 21);
    ɵɵtext(1, "arrow_drop_up");
    ɵɵelementEnd();
} }
function MaDataGridComponent_td_5_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 19);
    ɵɵlistener("click", function MaDataGridComponent_td_5_span_2_Template_span_click_0_listener() { ɵɵrestoreView(_r22); const col_r14 = ɵɵnextContext().$implicit; const ctx_r20 = ɵɵnextContext(); return ctx_r20.sortBy(col_r14); });
    ɵɵtemplate(1, MaDataGridComponent_td_5_span_2_span_1_Template, 2, 0, "span", 20);
    ɵɵtemplate(2, MaDataGridComponent_td_5_span_2_span_2_Template, 2, 0, "span", 20);
    ɵɵtemplate(3, MaDataGridComponent_td_5_span_2_span_3_Template, 2, 0, "span", 20);
    ɵɵelementEnd();
} if (rf & 2) {
    const col_r14 = ɵɵnextContext().$implicit;
    const ctx_r16 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r16.sortedField.field != col_r14.prop);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r16.sortedField.field === col_r14.prop && ctx_r16.sortedField.reverse);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r16.sortedField.field === col_r14.prop && !ctx_r16.sortedField.reverse);
} }
const _c0$2 = function (a0) { return { grid_cell_first: a0 }; };
function MaDataGridComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 17);
    ɵɵtext(1);
    ɵɵtemplate(2, MaDataGridComponent_td_5_span_2_Template, 4, 3, "span", 18);
    ɵɵelementEnd();
} if (rf & 2) {
    const col_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMapInterpolate2("", ctx_r1.customCSS, "grid_cell ", ctx_r1.customCSS, "grid_cell_title");
    ɵɵproperty("ngClass", ɵɵpureFunction1(7, _c0$2, i_r15 == 0));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", col_r14.title, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", col_r14.isRowNumber !== true && col_r14.sorted === true);
} }
function MaDataGridComponent_tr_6_td_1_ma_data_grid_head_filter_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ma-data-grid-head-filter", 23, 24);
    ɵɵlistener("changeHeaderFilter", function MaDataGridComponent_tr_6_td_1_ma_data_grid_head_filter_1_Template_ma_data_grid_head_filter_changeHeaderFilter_0_listener($event) { ɵɵrestoreView(_r30); const ctx_r29 = ɵɵnextContext(3); return ctx_r29._changeHeaderFilter($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const col_r25 = ɵɵnextContext().$implicit;
    ɵɵproperty("col", col_r25);
} }
function MaDataGridComponent_tr_6_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 17);
    ɵɵtemplate(1, MaDataGridComponent_tr_6_td_1_ma_data_grid_head_filter_1_Template, 2, 1, "ma-data-grid-head-filter", 22);
    ɵɵelementEnd();
} if (rf & 2) {
    const col_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    const ctx_r24 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate2("", ctx_r24.customCSS, "grid_cell ", ctx_r24.customCSS, "grid_cell_title");
    ɵɵproperty("ngClass", ɵɵpureFunction1(6, _c0$2, i_r26 == 0));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", col_r25.dataType || col_r25.headFilter);
} }
function MaDataGridComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵtemplate(1, MaDataGridComponent_tr_6_td_1_Template, 2, 8, "td", 4);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r2.customCSS, "grid_row");
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2.columns);
} }
function MaDataGridComponent_tr_7_td_1_datagrid_cell_element_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "datagrid-cell-element");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const i_r35 = ɵɵnextContext(2).index;
    ɵɵadvance(1);
    ɵɵtextInterpolate(i_r35);
} }
function MaDataGridComponent_tr_7_td_1_datagrid_cell_element_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "datagrid-cell-element");
    ɵɵelement(1, "span", 29);
    ɵɵelementEnd();
} if (rf & 2) {
    const col_r38 = ɵɵnextContext().$implicit;
    const row_r32 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("innerHTML", row_r32[col_r38.prop], ɵɵsanitizeHtml);
} }
function MaDataGridComponent_tr_7_td_1_datagrid_cell_element_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "datagrid-cell-element");
    ɵɵelement(1, "ma-data-grid-template-cell-t1", 30);
    ɵɵelementEnd();
} if (rf & 2) {
    const col_r38 = ɵɵnextContext().$implicit;
    const row_r32 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("template", col_r38.useTemplate)("data", row_r32);
} }
function MaDataGridComponent_tr_7_td_1_datagrid_cell_element_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "datagrid-cell-element");
    ɵɵelement(1, "ma-data-grid-cell-boolean", 31);
    ɵɵelementEnd();
} if (rf & 2) {
    const col_r38 = ɵɵnextContext().$implicit;
    const row_r32 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("template", col_r38.useTemplate)("col", col_r38)("data", row_r32);
} }
function MaDataGridComponent_tr_7_td_1_datagrid_cell_element_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "datagrid-cell-element");
    ɵɵtext(1);
    ɵɵpipe(2, "maDataGridPipe");
    ɵɵelementEnd();
} if (rf & 2) {
    const col_r38 = ɵɵnextContext().$implicit;
    const row_r32 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind3(2, 1, row_r32[col_r38.prop], row_r32, col_r38));
} }
const _c1$1 = function (a0, a1, a2) { return { "grid_cell_selected": a0, "grid_cell_end": a1, "grid_cell_first": a2 }; };
function MaDataGridComponent_tr_7_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r59 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 25);
    ɵɵlistener("click", function MaDataGridComponent_tr_7_td_1_Template_td_click_0_listener() { ɵɵrestoreView(_r59); const col_r38 = ctx.$implicit; const ctx_r58 = ɵɵnextContext(); const i_r35 = ctx_r58.index; const row_r32 = ctx_r58.$implicit; const ctx_r57 = ɵɵnextContext(); return ctx_r57.SelectCell(i_r35, row_r32, col_r38); });
    ɵɵelementStart(1, "datagrid-cell-container", 26);
    ɵɵtemplate(2, MaDataGridComponent_tr_7_td_1_datagrid_cell_element_2_Template, 2, 1, "datagrid-cell-element", 27);
    ɵɵtemplate(3, MaDataGridComponent_tr_7_td_1_datagrid_cell_element_3_Template, 2, 1, "datagrid-cell-element", 27);
    ɵɵtemplate(4, MaDataGridComponent_tr_7_td_1_datagrid_cell_element_4_Template, 2, 2, "datagrid-cell-element", 27);
    ɵɵtemplate(5, MaDataGridComponent_tr_7_td_1_datagrid_cell_element_5_Template, 2, 3, "datagrid-cell-element", 27);
    ɵɵtemplate(6, MaDataGridComponent_tr_7_td_1_datagrid_cell_element_6_Template, 3, 5, "datagrid-cell-element", 28);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const col_r38 = ctx.$implicit;
    const isFirstCol_r41 = ctx.first;
    const isLastCol_r42 = ctx.last;
    const i_r35 = ɵɵnextContext().index;
    const ctx_r37 = ɵɵnextContext();
    ɵɵclassMapInterpolate2("", ctx_r37.customCSS, "grid_cell ", col_r38.cssClass, "");
    ɵɵproperty("ngClass", ɵɵpureFunction3(10, _c1$1, i_r35 == ctx_r37.row_selected && col_r38.prop == ctx_r37.cell_selected, isLastCol_r42, isFirstCol_r41));
    ɵɵadvance(1);
    ɵɵproperty("ngSwitch", true);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", col_r38.isRowNumber === true);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", col_r38.isRowHTML === true);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", col_r38.useTemplate != null);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", col_r38.dataType == "boolean");
} }
const _c2 = function (a0, a1, a2, a3, a4) { return { "grid_row_selected": a0, "CSSclassEven": a1, "CSSclassOdd": a2, "grid_row_first": a3, "grid_row_end": a4 }; };
function MaDataGridComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    const _r62 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr", 25);
    ɵɵlistener("click", function MaDataGridComponent_tr_7_Template_tr_click_0_listener() { ɵɵrestoreView(_r62); const i_r35 = ctx.index; const row_r32 = ctx.$implicit; const ctx_r61 = ɵɵnextContext(); return ctx_r61.SelectRow(i_r35, row_r32); });
    ɵɵtemplate(1, MaDataGridComponent_tr_7_td_1_Template, 7, 14, "td", 6);
    ɵɵelementEnd();
} if (rf & 2) {
    const isLastRow_r33 = ctx.last;
    const pair_r34 = ctx.even;
    const i_r35 = ctx.index;
    const isFirstRow_r36 = ctx.first;
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r3.customCSS, "grid_row");
    ɵɵproperty("ngClass", ɵɵpureFunction5(5, _c2, i_r35 == ctx_r3.row_selected && !ctx_r3.cell_selected, pair_r34, !pair_r34, isFirstRow_r36, isLastRow_r33));
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r3.columns);
} }
function MaDataGridComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, "s");
    ɵɵelementEnd();
} }
const _c3 = function (a0, a1) { return { "disabled": a0, "": a1 }; };
function MaDataGridComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    const _r64 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 25);
    ɵɵlistener("click", function MaDataGridComponent_li_15_Template_li_click_0_listener() { ɵɵrestoreView(_r64); const ctx_r63 = ɵɵnextContext(); return ctx_r63.FastDecrementPage(); });
    ɵɵelementStart(1, "a", 32);
    ɵɵelementStart(2, "i", 33);
    ɵɵtext(3, "fast_rewind");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction2(1, _c3, ctx_r5.current_page == 0, ctx_r5.current_page != 0));
} }
function MaDataGridComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    const _r66 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 25);
    ɵɵlistener("click", function MaDataGridComponent_li_16_Template_li_click_0_listener() { ɵɵrestoreView(_r66); const ctx_r65 = ɵɵnextContext(); return ctx_r65.DecrementPage(); });
    ɵɵelementStart(1, "a", 32);
    ɵɵelementStart(2, "i", 33);
    ɵɵtext(3, "chevron_left");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction2(1, _c3, ctx_r6.current_page == 0, ctx_r6.current_page != 0));
} }
const _c4 = function (a0, a1) { return { "active": a0, "": a1 }; };
function MaDataGridComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    const _r69 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 25);
    ɵɵlistener("click", function MaDataGridComponent_li_17_Template_li_click_0_listener() { ɵɵrestoreView(_r69); const n_page_r67 = ctx.$implicit; const ctx_r68 = ɵɵnextContext(); return ctx_r68._changePage(n_page_r67); });
    ɵɵelementStart(1, "a", 34);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const n_page_r67 = ctx.$implicit;
    const ctx_r7 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction2(2, _c4, ctx_r7.current_page == n_page_r67, ctx_r7.current_page != n_page_r67));
    ɵɵadvance(2);
    ɵɵtextInterpolate(n_page_r67 + 1);
} }
function MaDataGridComponent_li_18_Template(rf, ctx) { if (rf & 1) {
    const _r71 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 25);
    ɵɵlistener("click", function MaDataGridComponent_li_18_Template_li_click_0_listener() { ɵɵrestoreView(_r71); const ctx_r70 = ɵɵnextContext(); return ctx_r70.IncrementPage(); });
    ɵɵelementStart(1, "a", 32);
    ɵɵelementStart(2, "i", 33);
    ɵɵtext(3, "chevron_right");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction2(1, _c3, ctx_r8.current_page == ctx_r8.max_page, ctx_r8.current_page != ctx_r8.max_page));
} }
function MaDataGridComponent_li_19_Template(rf, ctx) { if (rf & 1) {
    const _r73 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 25);
    ɵɵlistener("click", function MaDataGridComponent_li_19_Template_li_click_0_listener() { ɵɵrestoreView(_r73); const ctx_r72 = ɵɵnextContext(); return ctx_r72.FastIncrementPage(); });
    ɵɵelementStart(1, "a", 32);
    ɵɵelementStart(2, "i", 33);
    ɵɵtext(3, "fast_forward");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction2(1, _c3, ctx_r9.current_page == ctx_r9.max_page, ctx_r9.current_page != ctx_r9.max_page));
} }
// import { PipeLengthPipe } from 'src/app/pipes/pipe-length.pipe';
class MaDataGridComponent {
    constructor() {
        /*  "columns" element d'entrée
           "change" element de sortir permettant de prendre en compte
                         l'event OnChanges
          <ma-data-grid [columns]="columns"  [rows]="rows" (change)="ChangeData($event)"></ma-data-grid>
       */
        this.columns = [];
        this.limit = 7;
        this.extFilter = false;
        this.headFilter = false;
        this.pagination = false;
        this.page = -1;
        this.count = 0;
        this.customCSS = "";
        this.rows = [];
        this.change = new EventEmitter();
        this.select = new EventEmitter();
        this.extFilterChange = new EventEmitter();
        this.filterChange = new EventEmitter();
        this.changePage = new EventEmitter();
        this.sort = new EventEmitter();
        this.canSelectChange = new EventEmitter();
        this.grid_cell_first = this.customCSS + 'grid_cell_first';
        this.grid_row_selected = this.customCSS + 'grid_row_selected';
        this.current_page = -1;
        this.max_page = 1;
        this.max_nb_page = 6;
        this.nb_page = 1;
        this.startat = 0;
        this.searchValue = "c";
        this.rows_displayed = [];
        this.pages = [];
        this.conditions = [];
        this.nb_record = 0;
        this.row_selected = -1;
        this.cell_selected = -1;
        this.sortedField = {
            field: '',
            reverse: true
        };
        this.timeout = null;
        //console.log('YO')
    }
    resetSelection() {
        this.cell_selected = -1;
        this.row_selected = -1;
    }
    ngOnChanges(changes) {
        // console.log("this.searchValue: " + this.searchValue)
        // console.log('ngOnChanges ', changes);
        if (changes.page && changes.page.currentValue >= 0) {
        }
        if (changes.canSelect && changes.canSelect.currentValue) {
            //this.page = changes.page.currentValue;
            // console.log('canSelect  ', changes.canSelect.currentValue);
            this.canSelectChange.emit(changes.canSelect.previousValue);
        }
        if (changes.limit && changes.limit.currentValue) {
            this.limit = changes.limit.currentValue;
        }
        if (changes.rows && changes.rows.currentValue) {
            this.temp = changes.rows.currentValue;
            this._changePage(this.current_page, this.temp, true);
        }
        // console.log("a - ngOnChanges current_page => " + this.current_page)
    }
    IncrementPage() {
        this._changePage(this.current_page + 1, this.temp);
    }
    DecrementPage() {
        this._changePage(this.current_page - 1, this.temp);
    }
    FastIncrementPage() {
        let p = this.current_page + 5; //Math.round(this.max_page / 50);
        this._changePage(p, this.temp);
    }
    FastDecrementPage() {
        let p = this.current_page - 5; //Math.round(this.max_page / 50);;
        this._changePage(p, this.temp);
    }
    _changePage(n_page, rows, force) {
        if (!rows)
            rows = this.temp;
        //
        if (this.pagination == false) {
            if (force === true) {
                this.temp = MaFilter.FilterByConditions(this.conditions, rows);
                this.temp = this._sortData(this.temp);
                rows = this.temp;
            }
            this.count = rows.length;
        }
        // Calcul du max_page
        this.max_page = 0;
        if (this.count >= 0 && this.limit > 0) {
            this.max_page = Math.floor(this.count / this.limit);
            if ((this.count % this.limit) != 0) {
                this.max_page += 1;
            }
        }
        if (n_page < 0) {
            n_page = 0;
        }
        if (n_page >= this.max_page && this.max_page > 0) {
            n_page = this.max_page - 1;
        }
        // console.log("changePage " + n_page + ' / ' + this.max_page + ' c => ' + this.current_page + ' max_page ' + this.max_page);
        if (this.page >= 0 || this.pagination) {
            if (this.current_page != n_page) {
                this.current_page = n_page;
                this.searchValue = '';
                // console.log("=============> EMIT CHANGE ")
                this.changePage.emit(n_page);
                return;
            }
            this.row_selected = -1;
            this.current_page = n_page;
            this.nb_record = this.count;
            this.startat = 0;
            this.rows_displayed = [];
            for (let i = 0; rows && i < this.limit && i < this.count && i < rows.length; i++) {
                this.rows_displayed.push(rows[i]);
            }
        }
        else {
            // SANS PAGINATION
            // console.error("SANS PAGINATION")
            if (!force && (this.current_page == n_page)) {
                return;
            }
            this.row_selected = -1;
            this.current_page = n_page;
            this.nb_record = 0;
            this.startat = 0;
            this.rows_displayed = [];
            for (let i = 0; rows && i < this.limit && i < rows.length; i++) {
                if (rows.length > (this.current_page * this.limit) + i) {
                    this.rows_displayed.push(rows[this.current_page * this.limit + i]);
                }
            }
            this.nb_record = rows.length;
        }
        // Calcul du nombre de page en bas du datagrid
        this.startat = this.limit * (this.current_page + 1);
        if (this.startat > this.count)
            this.startat = this.count;
        this.pages = [];
        let start_page = this.current_page - Math.round(this.max_nb_page / 2);
        if (start_page < 0)
            start_page = 0;
        for (let p = start_page, nbp = 0; rows && p < this.count / this.limit && nbp < this.max_nb_page; nbp++, p++) {
            this.pages.push(p);
        }
    }
    ngOnInit() {
        //this.pipeLength.transform("bbb");
    }
    _sortData(rows) {
        let sf = this.sortedField.field;
        //console.log('_sortData',this.sortedField)
        return rows.sort((a, b) => {
            let r;
            if (typeof (a[sf]) === 'string' || typeof (b[sf]) === 'string') {
                var c3 = a[sf];
                var c4 = b[sf];
                if (c4 == null) {
                    c4 = '';
                }
                if (c3 == null) {
                    c3 = '';
                }
                r = c3.localeCompare(c4, 'en', { sensitivity: 'base' });
            }
            else {
                if (typeof (a[sf]) === 'number' || typeof (b[sf]) === 'number') {
                    r = a[sf] - b[sf];
                }
                else {
                    if (typeof (a[sf]) === 'boolean' || typeof (b[sf]) === 'boolean') {
                        var c1 = 0;
                        if (a[sf] === true)
                            c1 = 2;
                        if (a[sf] === false)
                            c1 = 1;
                        var c2 = 0;
                        if (b[sf] === true)
                            c2 = 2;
                        if (b[sf] === false)
                            c2 = 1;
                        r = c1 - c2;
                    }
                    else {
                        r = a[sf] < b[sf];
                    }
                }
            }
            //console.log('Compare ' + a[sf] + ' <=> ' + b[sf] + '  = ' + r + ' this.sortedField.reverse' + this.sortedField.reverse)
            if (this.sortedField.reverse) {
                return r * -1;
            }
            return r;
        });
    }
    sortBy(col) {
        // console.log(col);
        if (this.sortedField.field == col.prop) {
            this.sortedField.reverse = !this.sortedField.reverse;
        }
        else {
            this.sortedField.reverse = false;
        }
        this.sortedField.field = col.prop;
        if (this.pagination) {
            this.sort.emit(this.sortedField);
            return;
        }
        else {
            this._changePage(this.current_page, this.rows, true);
        }
    }
    SelectRow(index, row) {
        if (this.canSelect === "row") {
            this.row_selected = index;
            this.cell_selected = null;
            let trueIndex = this.current_page * this.limit + index;
            //let data = this.rows[trueIndex];
            // console.log("SelectRow trueIndex", trueIndex);
            this.select.emit({ index: trueIndex, row: row });
        }
    }
    SelectCell(index, row, col) {
        // console.log("SelectCell Select", index, row, col);
        if (this.canSelect === "cell") {
            this.row_selected = index;
            this.cell_selected = col.prop;
            // console.log("SelectCell Select", index, row, col);
            let trueIndex = this.current_page * this.limit + index;
            //console.log("Data Grid trueIndex", trueIndex);
            this.select.emit({ index: trueIndex, row: row, prop: col.prop, value: row[col.prop], });
        }
    }
    _filterChange(e) {
        this.extFilterChange.emit(e);
    }
    _changeHeaderFilter(e) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this._delayChangeHeaderFilter(e);
        }, 500);
    }
    _delayChangeHeaderFilter(e) {
        let conditions = [];
        this.headerfilter.forEach((item) => {
            //item.filter_value;
            let condition = item.getFilter();
            if (condition) {
                if (conditions.length > 0) {
                    conditions.push('and');
                }
                conditions.push(condition);
            }
            //console.log(item.col.prop + ' => '+item.filter_value);
        });
        // console.log("CONDITIONS", conditions);
        if (this.pagination == false) {
            this.conditions = conditions;
            this._changePage(0, this.rows, true);
            this.filterChange.emit({ where: conditions, data: this.temp });
        }
        else {
            this.filterChange.emit({ where: conditions });
        }
    }
}
MaDataGridComponent.ɵfac = function MaDataGridComponent_Factory(t) { return new (t || MaDataGridComponent)(); };
MaDataGridComponent.ɵcmp = ɵɵdefineComponent({ type: MaDataGridComponent, selectors: [["ma-data-grid"]], viewQuery: function MaDataGridComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(MaGridFilterComponent, true);
        ɵɵviewQuery(DataGridHeadFilterComponent, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.gridfilter = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerfilter = _t);
    } }, inputs: { columns: "columns", limit: "limit", canSelect: "canSelect", extFilter: "extFilter", headFilter: "headFilter", pagination: "pagination", page: "page", count: "count", customCSS: "customCSS", rows: "rows" }, outputs: { change: "change", select: "select", extFilterChange: "extFilterChange", filterChange: "filterChange", changePage: "changePage", sort: "sort", canSelectChange: "canSelectChange" }, features: [ɵɵNgOnChangesFeature], decls: 20, vars: 14, consts: [[3, "customCSS", "searchValue", "columns", "searchValueChange", "filterChange", 4, "ngIf"], [1, "datagrid_page"], [1, "scroller"], [1, "grid_row"], [3, "class", "ngClass", 4, "ngFor", "ngForOf"], [3, "class", 4, "ngIf"], [3, "class", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "row", 2, "padding-top", "5px"], [1, "col", "s3"], [1, "page_number"], [4, "ngIf"], [1, "col", "s8", "div_pagination"], [1, "pagination"], [3, "ngClass", "click", 4, "ngIf"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "customCSS", "searchValue", "columns", "searchValueChange", "filterChange"], ["gridfilter", ""], [3, "ngClass"], [3, "click", 4, "ngIf"], [3, "click"], ["class", "grid_sort tiny material-icons", 4, "ngIf"], [1, "grid_sort", "tiny", "material-icons"], [3, "col", "changeHeaderFilter", 4, "ngIf"], [3, "col", "changeHeaderFilter"], ["headerfilter", ""], [3, "ngClass", "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "innerHTML"], [3, "template", "data"], [3, "template", "col", "data"], [1, "pointer"], [1, "material-icons", "small"], [1, "a_pagination", "small"]], template: function MaDataGridComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, MaDataGridComponent_ma_data_grid_filter_0_Template, 2, 3, "ma-data-grid-filter", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "table");
        ɵɵelementStart(4, "tr", 3);
        ɵɵtemplate(5, MaDataGridComponent_td_5_Template, 3, 9, "td", 4);
        ɵɵelementEnd();
        ɵɵtemplate(6, MaDataGridComponent_tr_6_Template, 2, 4, "tr", 5);
        ɵɵtemplate(7, MaDataGridComponent_tr_7_Template, 2, 11, "tr", 6);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(8, "div", 7);
        ɵɵelementStart(9, "div", 8);
        ɵɵelementStart(10, "div", 9);
        ɵɵtext(11);
        ɵɵtemplate(12, MaDataGridComponent_span_12_Template, 2, 0, "span", 10);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(13, "div", 11);
        ɵɵelementStart(14, "ul", 12);
        ɵɵtemplate(15, MaDataGridComponent_li_15_Template, 4, 4, "li", 13);
        ɵɵtemplate(16, MaDataGridComponent_li_16_Template, 4, 4, "li", 13);
        ɵɵtemplate(17, MaDataGridComponent_li_17_Template, 3, 5, "li", 14);
        ɵɵtemplate(18, MaDataGridComponent_li_18_Template, 4, 4, "li", 13);
        ɵɵtemplate(19, MaDataGridComponent_li_19_Template, 4, 4, "li", 13);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.extFilter);
        ɵɵadvance(3);
        ɵɵclassMapInterpolate1("", ctx.customCSS, "grid_table");
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.columns);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.headFilter);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.rows_displayed);
        ɵɵadvance(4);
        ɵɵtextInterpolate1("#", ctx.nb_record, " record");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.nb_record > 1);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.max_page >= 9);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.nb_record > 0);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.pages);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.nb_record > 0);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.max_page >= 9);
    } }, directives: [NgIf, NgForOf, MaGridFilterComponent, NgClass, DataGridHeadFilterComponent, NgSwitch, NgSwitchCase, NgSwitchDefault, DataGridTemplateCellComponent, DataGridCellBooleanComponent], pipes: [DataGridPipePipe], styles: ["[_nghost-%COMP%]{--color-border:#667;--color-defaut:#667}.datagrid_page[_ngcontent-%COMP%]   .CSSclassOdd[_ngcontent-%COMP%]{background-color:#ddd}.datagrid_page[_ngcontent-%COMP%]{height:100%;width:100%}.div_pagination[_ngcontent-%COMP%]   .pointer[_ngcontent-%COMP%]{cursor:default}.div_pagination[_ngcontent-%COMP%]   .page_number[_ngcontent-%COMP%]{color:var(--color-defaut);font-size:1rem;padding:0 10px}.datagrid_page[_ngcontent-%COMP%]   .div_pagination[_ngcontent-%COMP%]{display:-ms-inline-grid;display:inline-grid;justify-content:flex-end}.a_pagination[_ngcontent-%COMP%]:hover, .div_pagination[_ngcontent-%COMP%]   .a_pagination[_ngcontent-%COMP%]{color:var(--color-border);display:inline-block;font-size:1rem;line-height:30px;padding:0 10px;text-decoration:none}.datagrid_page[_ngcontent-%COMP%]   .scroller[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center;background-color:#fefefe;overflow:auto;scrollbar-color:var(--color-border) #fefefe;scrollbar-width:auto;width:100%}.grid_table[_ngcontent-%COMP%]   .grid_row_selected[_ngcontent-%COMP%]{background-color:#667;color:#ddd}.grid_table[_ngcontent-%COMP%]   .grid_sort[_ngcontent-%COMP%]{cursor:pointer}.datagrid_page[_ngcontent-%COMP%]   .grid_table[_ngcontent-%COMP%]{width:100%}.grid_table[_ngcontent-%COMP%]   .grid_cell_title[_ngcontent-%COMP%]{border-top:1px solid var(--color-border);color:var(--color-defaut);font-weight:700;text-align:center}.grid_table[_ngcontent-%COMP%]   .grid_cell_selected[_ngcontent-%COMP%]{background-color:#667;color:#ddd}.grid_table[_ngcontent-%COMP%]   .grid_cell_first[_ngcontent-%COMP%]{border-left:10px solid var(--color-border)}.grid_table[_ngcontent-%COMP%]   .grid_cell_end[_ngcontent-%COMP%]{border-right:0 solid var(--color-border)}.grid_table[_ngcontent-%COMP%]   .grid_cell[_ngcontent-%COMP%]{border-right:1px solid var(--color-border)}.grid_table[_ngcontent-%COMP%]   .grid_row_first[_ngcontent-%COMP%]{border-bottom:1px solid var(--color-border)}.grid_table[_ngcontent-%COMP%]   .grid_row_last[_ngcontent-%COMP%]{border-bottom:0 solid var(--color-border)}.grid_table[_ngcontent-%COMP%]   .grid_row[_ngcontent-%COMP%]{border-bottom:1px solid var(--color-border)}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MaDataGridComponent, [{
        type: Component,
        args: [{
                selector: 'ma-data-grid',
                //providers: [PipeLengthPipe],
                templateUrl: './ma-data-grid.component.html',
                styleUrls: ['./ma-data-grid.component.css'],
            }]
    }], function () { return []; }, { columns: [{
            type: Input
        }], limit: [{
            type: Input
        }], canSelect: [{
            type: Input
        }], extFilter: [{
            type: Input
        }], headFilter: [{
            type: Input
        }], pagination: [{
            type: Input
        }], page: [{
            type: Input
        }], count: [{
            type: Input
        }], customCSS: [{
            type: Input
        }], rows: [{
            type: Input
        }], change: [{
            type: Output
        }], select: [{
            type: Output
        }], extFilterChange: [{
            type: Output
        }], filterChange: [{
            type: Output
        }], changePage: [{
            type: Output
        }], sort: [{
            type: Output
        }], canSelectChange: [{
            type: Output
        }], gridfilter: [{
            type: ViewChild,
            args: [MaGridFilterComponent, { static: true }]
        }], headerfilter: [{
            type: ViewChildren,
            args: [DataGridHeadFilterComponent]
        }] }); })();

class MaAnchorGridCellDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
MaAnchorGridCellDirective.ɵfac = function MaAnchorGridCellDirective_Factory(t) { return new (t || MaAnchorGridCellDirective)(ɵɵdirectiveInject(ViewContainerRef)); };
MaAnchorGridCellDirective.ɵdir = ɵɵdefineDirective({ type: MaAnchorGridCellDirective, selectors: [["", "libMaAnchorGridCell", ""]] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MaAnchorGridCellDirective, [{
        type: Directive,
        args: [{
                selector: '[libMaAnchorGridCell]'
            }]
    }], function () { return [{ type: ViewContainerRef }]; }, null); })();

class MaDataGridModule {
}
MaDataGridModule.ɵmod = ɵɵdefineNgModule({ type: MaDataGridModule });
MaDataGridModule.ɵinj = ɵɵdefineInjector({ factory: function MaDataGridModule_Factory(t) { return new (t || MaDataGridModule)(); }, imports: [[
            CommonModule,
            FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(MaDataGridModule, { declarations: [MaDataGridComponent,
        MaAnchorGridCellDirective,
        DataGridTemplateCellComponent,
        DataGridPipePipe,
        MaGridFilterComponent,
        DataGridHeadFilterComponent,
        DataGridOpFilterComponent,
        DataGridPickerDateComponent,
        DataGridCellBooleanComponent,
        MaGridCellTemplateDirective], imports: [CommonModule,
        FormsModule], exports: [
        /* Ajouter CommonModule pour éviter les erreurs
            Can't bind to 'ngClass' since it isn't a known property */
        MaDataGridComponent,
        MaGridFilterComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(MaDataGridModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MaDataGridComponent,
                    MaAnchorGridCellDirective,
                    DataGridTemplateCellComponent,
                    DataGridPipePipe,
                    MaGridFilterComponent,
                    DataGridHeadFilterComponent,
                    DataGridOpFilterComponent,
                    DataGridPickerDateComponent,
                    DataGridCellBooleanComponent,
                    MaGridCellTemplateDirective
                ],
                imports: [
                    CommonModule,
                    FormsModule
                ],
                exports: [
                    /* Ajouter CommonModule pour éviter les erreurs
                        Can't bind to 'ngClass' since it isn't a known property */
                    MaDataGridComponent,
                    MaGridFilterComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of ma-data-grid
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MaDataGridComponent, MaDataGridModule, MaGridFilterComponent, options_header_boolean, options_header_date, options_header_number, options_header_string };
//# sourceMappingURL=amn31-ma-data-grid.js.map
