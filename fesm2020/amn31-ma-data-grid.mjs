import * as i0 from '@angular/core';
import { EventEmitter, Component, Inject, Input, ViewChild, Output, PLATFORM_ID, ViewChildren, Directive, Pipe, NgModule } from '@angular/core';
import * as $ from 'jquery';
import * as i1 from '@angular/common';
import { DOCUMENT, isPlatformBrowser, CommonModule } from '@angular/common';
import * as M from 'materialize-css';
import * as i1$1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
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
const options_header_bool = [{
        value: '1',
        operator: '=',
        label: 'true'
    }, {
        value: '0',
        operator: '=',
        label: 'false'
    }];
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
        operator: '!=',
        label: '!='
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
        operator: '!=',
        label: '!='
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

const _c0$4 = ["elemToggle"];
const _c1$2 = ["elemValue"];
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
class DataGridOpFilterComponent {
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
        i0.ɵɵviewQuery(_c0$4, 5);
        i0.ɵɵviewQuery(_c1$2, 5);
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

const _c0$3 = ["madatepicker"];
class DataGridPickerDateComponent {
    constructor(document) {
        this.document = document;
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
        var elem = this.document.getElementById(this.datepicker_id);
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
        var elem = this.document.getElementById(this.datepicker_id);
        var ptr = this;
        if (this.type == 'date') {
            var instances = M.Datepicker.init(elem, {
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
            var instances = M.Timepicker.init(elem, {
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
DataGridPickerDateComponent.ɵfac = function DataGridPickerDateComponent_Factory(t) { return new (t || DataGridPickerDateComponent)(i0.ɵɵdirectiveInject(DOCUMENT)); };
DataGridPickerDateComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataGridPickerDateComponent, selectors: [["ma-data-grid-datepicker"]], viewQuery: function DataGridPickerDateComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$3, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.madatepicker = _t.first);
    } }, inputs: { value: "value", type: "type" }, outputs: { changePicker: "changePicker" }, decls: 2, vars: 2, consts: [["type", "text", 1, "ma-data-grid-datepicker", "datepicker", 3, "id", "ngModel", "ngModelChange"], ["madatepicker", ""]], template: function DataGridPickerDateComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "input", 0, 1);
        i0.ɵɵlistener("ngModelChange", function DataGridPickerDateComponent_Template_input_ngModelChange_0_listener($event) { return ctx.realValue = $event; });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("id", ctx.datepicker_id)("ngModel", ctx.realValue);
    } }, directives: [i1$1.DefaultValueAccessor, i1$1.NgControlStatus, i1$1.NgModel], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataGridPickerDateComponent, [{
        type: Component,
        args: [{ selector: 'ma-data-grid-datepicker', template: "\n    <!-- [(ngModel)]=\"realValue\"   -->\n    <input \n        [id]=\"datepicker_id\" \n        #madatepicker type=\"text\" \n        [(ngModel)]=\"realValue\"\n        class=\"ma-data-grid-datepicker datepicker\">\n\n", styles: [""] }]
    }], function () { return [{ type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { value: [{
            type: Input
        }], type: [{
            type: Input
        }], changePicker: [{
            type: Output
        }], madatepicker: [{
            type: ViewChild,
            args: ["madatepicker", { static: false }]
        }] }); })();

function DataGridHeadFilterComponent_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 3);
    i0.ɵɵelementStart(1, "ma-data-grid-op-filter", 4, 5);
    i0.ɵɵlistener("changeEmptyOperator", function DataGridHeadFilterComponent_td_2_Template_ma_data_grid_op_filter_changeEmptyOperator_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4._changeEmptyOperator(); })("changeOperator", function DataGridHeadFilterComponent_td_2_Template_ma_data_grid_op_filter_changeOperator_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6._changeOperator($event, false); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("col", ctx_r0.col);
} }
function DataGridHeadFilterComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 6);
    i0.ɵɵelementStart(1, "input", 7);
    i0.ɵɵlistener("ngModelChange", function DataGridHeadFilterComponent_td_3_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.filter_value = $event; })("keyup", function DataGridHeadFilterComponent_td_3_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9._changeOperator($event, true); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r1.filter_value);
} }
function DataGridHeadFilterComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 6);
    i0.ɵɵelementStart(1, "ma-data-grid-datepicker", 8, 9);
    i0.ɵɵlistener("changePicker", function DataGridHeadFilterComponent_td_4_Template_ma_data_grid_datepicker_changePicker_1_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11._changeDate($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleMap(ctx_r2.astuce_datapicker);
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
        if (this.filter_value != '' ||
            this.col.dataType == 'boolean' ||
            this.col.dataType == 'bool' || this.col.headFilter != null) {
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
    _changeOperator(event, fromInputKey) {
        // 
        console.log('RECEIVE CHANGE OP', this.col);
        // console.log('EMIT changeHeaderFilter');
        if (fromInputKey)
            this.op_filter.setFirstChoice();
        this.changeHeaderFilter.emit({
            prop: this.col,
            value: this.filter_value,
            //condition: [ this.col.prop, this.op_filter.value, this.filter_value ]
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
            //condition: [ this.col.prop, this.op_filter.value, this.filter_value ]
        });
    }
}
DataGridHeadFilterComponent.ɵfac = function DataGridHeadFilterComponent_Factory(t) { return new (t || DataGridHeadFilterComponent)(); };
DataGridHeadFilterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataGridHeadFilterComponent, selectors: [["ma-data-grid-head-filter"]], viewQuery: function DataGridHeadFilterComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(DataGridOpFilterComponent, 7);
        i0.ɵɵviewQuery(DataGridPickerDateComponent, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.op_filter = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.madate_picker = _t.first);
    } }, inputs: { filter_value: "filter_value", col: "col" }, outputs: { changeHeaderFilter: "changeHeaderFilter" }, decls: 5, vars: 3, consts: [["class", "header_filter_op", 4, "ngIf"], ["class", "header_filter", 4, "ngIf"], ["class", "header_filter", 3, "style", 4, "ngIf"], [1, "header_filter_op"], [3, "col", "changeEmptyOperator", "changeOperator"], ["op_filter", ""], [1, "header_filter"], [1, "header_filter", 3, "ngModel", "ngModelChange", "keyup"], ["type", "date", 3, "changePicker"], ["madate_picker", ""]], template: function DataGridHeadFilterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table");
        i0.ɵɵelementStart(1, "tr");
        i0.ɵɵtemplate(2, DataGridHeadFilterComponent_td_2_Template, 3, 1, "td", 0);
        i0.ɵɵtemplate(3, DataGridHeadFilterComponent_td_3_Template, 2, 1, "td", 1);
        i0.ɵɵtemplate(4, DataGridHeadFilterComponent_td_4_Template, 3, 2, "td", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.col.filter !== false);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.col.filter !== false && ctx.col.dataType != "date" && ctx.col.dataType != "bool" && ctx.col.dataType != "boolean" && (!ctx.col.headFilter || ctx.col.headFilter.length == 0));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.col.filter !== false);
    } }, directives: [i1.NgIf, DataGridOpFilterComponent, i1$1.DefaultValueAccessor, i1$1.NgControlStatus, i1$1.NgModel, DataGridPickerDateComponent], styles: ["input.header_filter[_ngcontent-%COMP%]{background-color:#e8f5f8;margin:0 0 0 -5px;height:1.2rem;border:1px inset;border-color:#9e9e9e}  .ma-data-grid-datepicker{height:1.2rem;max-height:1.2rem}td.header_filter[_ngcontent-%COMP%]{padding:1px 1px 1px 5px}td.header_filter_op[_ngcontent-%COMP%]{padding:1px 1px 1px 0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataGridHeadFilterComponent, [{
        type: Component,
        args: [{ selector: 'ma-data-grid-head-filter', template: "<table>\n    <tr>\n        <td *ngIf=\"col.filter !== false\" class=\"header_filter_op\" >\n            <ma-data-grid-op-filter #op_filter [col]=\"col\" (changeEmptyOperator)=\"_changeEmptyOperator()\" (changeOperator)=\"_changeOperator($event,false)\"></ma-data-grid-op-filter>\n        </td>\n        <td class=\"header_filter\" *ngIf=\"col.filter !== false && col.dataType != 'date' && col.dataType != 'bool' && col.dataType != 'boolean' && (!col.headFilter || col.headFilter.length == 0)\">\n            <input class=\"header_filter\" [(ngModel)]=\"filter_value\" (keyup)=\"_changeOperator($event,true)\" />\n        </td>\n        <td *ngIf=\"col.filter !== false\" class=\"header_filter\" [style]=\"astuce_datapicker\" >\n            <ma-data-grid-datepicker #madate_picker type=\"date\" (changePicker)=\"_changeDate($event)\"></ma-data-grid-datepicker>\n        </td>\n    </tr>\n</table>", styles: ["input.header_filter{background-color:#e8f5f8;margin:0 0 0 -5px;height:1.2rem;border:1px inset;border-color:#9e9e9e}::ng-deep .ma-data-grid-datepicker{height:1.2rem;max-height:1.2rem}td.header_filter{padding:1px 1px 1px 5px}td.header_filter_op{padding:1px 1px 1px 0}\n"] }]
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
class MaGridFilterComponent {
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

function MaDataGridComponent_ma_data_grid_filter_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ma-data-grid-filter", 2, 3);
    i0.ɵɵlistener("searchValueChange", function MaDataGridComponent_ma_data_grid_filter_0_Template_ma_data_grid_filter_searchValueChange_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.searchValue = $event; })("filterChange", function MaDataGridComponent_ma_data_grid_filter_0_Template_ma_data_grid_filter_filterChange_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5._filterChange($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("customCSS", ctx_r0.customCSS)("searchValue", ctx_r0.searchValue)("columns", ctx_r0.columns);
} }
function MaDataGridComponent_div_1_td_4_datagrid_cell_element_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "datagrid-cell-element");
    i0.ɵɵelement(1, "ma-data-grid-cell-selector", 23);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("prop", col_r15.prop)("isHeader", true)("col", col_r15)("myGrid", ctx_r17.myGrid)("data", ctx_r17.rows_displayed);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(col_r15.title);
} }
function MaDataGridComponent_div_1_td_4_datagrid_cell_element_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "datagrid-cell-element");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(col_r15.title);
} }
function MaDataGridComponent_div_1_td_4_span_4_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 26);
    i0.ɵɵtext(1, "swap_vert");
    i0.ɵɵelementEnd();
} }
function MaDataGridComponent_div_1_td_4_span_4_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 26);
    i0.ɵɵtext(1, "arrow_drop_down");
    i0.ɵɵelementEnd();
} }
function MaDataGridComponent_div_1_td_4_span_4_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 26);
    i0.ɵɵtext(1, "arrow_drop_up");
    i0.ɵɵelementEnd();
} }
function MaDataGridComponent_div_1_td_4_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵlistener("click", function MaDataGridComponent_div_1_td_4_span_4_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r27); const col_r15 = i0.ɵɵnextContext().$implicit; const ctx_r25 = i0.ɵɵnextContext(2); return ctx_r25.sortBy(col_r15); });
    i0.ɵɵtemplate(1, MaDataGridComponent_div_1_td_4_span_4_span_1_Template, 2, 0, "span", 25);
    i0.ɵɵtemplate(2, MaDataGridComponent_div_1_td_4_span_4_span_2_Template, 2, 0, "span", 25);
    i0.ɵɵtemplate(3, MaDataGridComponent_div_1_td_4_span_4_span_3_Template, 2, 0, "span", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r19.sortedField.field != col_r15.prop);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r19.sortedField.field === col_r15.prop && ctx_r19.sortedField.reverse);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r19.sortedField.field === col_r15.prop && !ctx_r19.sortedField.reverse);
} }
const _c0$2 = function (a0) { return { grid_cell_first: a0 }; };
function MaDataGridComponent_div_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵelementStart(1, "datagrid-cellheader-container", 19);
    i0.ɵɵtemplate(2, MaDataGridComponent_div_1_td_4_datagrid_cell_element_2_Template, 4, 6, "datagrid-cell-element", 20);
    i0.ɵɵtemplate(3, MaDataGridComponent_div_1_td_4_datagrid_cell_element_3_Template, 2, 1, "datagrid-cell-element", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, MaDataGridComponent_div_1_td_4_span_4_Template, 4, 3, "span", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate2("", ctx_r6.customCSS, "grid_cell ", ctx_r6.customCSS, "grid_cell_title");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c0$2, i_r16 == 0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", col_r15.dataType == "selector");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", col_r15.dataType != "selector" && col_r15.isRowNumber !== true && col_r15.sorted === true);
} }
function MaDataGridComponent_div_1_tr_5_td_1_ma_data_grid_head_filter_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ma-data-grid-head-filter", 28, 29);
    i0.ɵɵlistener("changeHeaderFilter", function MaDataGridComponent_div_1_tr_5_td_1_ma_data_grid_head_filter_1_Template_ma_data_grid_head_filter_changeHeaderFilter_0_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r34 = i0.ɵɵnextContext(4); return ctx_r34._changeHeaderFilter($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r30 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("col", col_r30);
} }
function MaDataGridComponent_div_1_tr_5_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵtemplate(1, MaDataGridComponent_div_1_tr_5_td_1_ma_data_grid_head_filter_1_Template, 2, 1, "ma-data-grid-head-filter", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r30 = ctx.$implicit;
    const i_r31 = ctx.index;
    const ctx_r29 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate2("", ctx_r29.customCSS, "grid_cell ", ctx_r29.customCSS, "grid_cell_title");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c0$2, i_r31 == 0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r30.dataType && col_r30.dataType != "selector" && col_r30.headFilter !== false || col_r30.headFilter !== false && col_r30.headFilter != null && col_r30.headFilter.length > 0);
} }
function MaDataGridComponent_div_1_tr_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, MaDataGridComponent_div_1_tr_5_td_1_Template, 2, 8, "td", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("", ctx_r7.customCSS, "grid_row");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r7.columns);
} }
function MaDataGridComponent_div_1_tr_6_td_1_datagrid_cell_element_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "datagrid-cell-element", 32);
    i0.ɵɵelement(1, "ma-data-grid-cell-selector", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r43 = i0.ɵɵnextContext().$implicit;
    const row_r37 = i0.ɵɵnextContext().$implicit;
    const ctx_r48 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("prop", col_r43.prop)("col", col_r43)("myGrid", ctx_r48.myGrid)("data", row_r37);
} }
function MaDataGridComponent_div_1_tr_6_td_1_datagrid_cell_element_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "datagrid-cell-element", 32);
    i0.ɵɵelement(1, "ma-data-grid-template-cell-t1", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r43 = i0.ɵɵnextContext().$implicit;
    const row_r37 = i0.ɵɵnextContext().$implicit;
    const ctx_r49 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", col_r43.useTemplate)("prop", col_r43.prop)("col", col_r43)("myGrid", ctx_r49.myGrid)("data", row_r37);
} }
function MaDataGridComponent_div_1_tr_6_td_1_datagrid_cell_element_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "datagrid-cell-element", 32);
    i0.ɵɵelement(1, "ma-data-grid-celledit-item", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r43 = i0.ɵɵnextContext().$implicit;
    const row_r37 = i0.ɵɵnextContext().$implicit;
    const ctx_r50 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("prop", col_r43.prop)("col", col_r43)("myGrid", ctx_r50.myGrid)("data", row_r37);
} }
function MaDataGridComponent_div_1_tr_6_td_1_datagrid_cell_element_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "datagrid-cell-element", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r40 = i0.ɵɵnextContext(2).index;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i_r40);
} }
function MaDataGridComponent_div_1_tr_6_td_1_datagrid_cell_element_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "datagrid-cell-element", 32);
    i0.ɵɵelement(1, "span", 35);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r43 = i0.ɵɵnextContext().$implicit;
    const row_r37 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", row_r37[col_r43.prop], i0.ɵɵsanitizeHtml);
} }
function MaDataGridComponent_div_1_tr_6_td_1_datagrid_cell_element_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "datagrid-cell-element", 32);
    i0.ɵɵelement(1, "ma-data-grid-cell-boolean", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r43 = i0.ɵɵnextContext().$implicit;
    const row_r37 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("col", col_r43)("data", row_r37);
} }
function MaDataGridComponent_div_1_tr_6_td_1_datagrid_cell_element_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "datagrid-cell-element");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "maDataGridPipe");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r43 = i0.ɵɵnextContext().$implicit;
    const row_r37 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(2, 1, row_r37[col_r43.prop], row_r37, col_r43));
} }
const _c1$1 = function (a0, a1, a2) { return { "grid_cell_selected": a0, "grid_cell_end": a1, "grid_cell_first": a2 }; };
function MaDataGridComponent_div_1_tr_6_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r70 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 30);
    i0.ɵɵlistener("click", function MaDataGridComponent_div_1_tr_6_td_1_Template_td_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r70); const col_r43 = restoredCtx.$implicit; const ctx_r69 = i0.ɵɵnextContext(); const i_r40 = ctx_r69.index; const row_r37 = ctx_r69.$implicit; const ctx_r68 = i0.ɵɵnextContext(2); return ctx_r68.SelectCell(i_r40, row_r37, col_r43); });
    i0.ɵɵelementStart(1, "datagrid-cell-container", 19);
    i0.ɵɵtemplate(2, MaDataGridComponent_div_1_tr_6_td_1_datagrid_cell_element_2_Template, 2, 4, "datagrid-cell-element", 31);
    i0.ɵɵtemplate(3, MaDataGridComponent_div_1_tr_6_td_1_datagrid_cell_element_3_Template, 2, 5, "datagrid-cell-element", 31);
    i0.ɵɵtemplate(4, MaDataGridComponent_div_1_tr_6_td_1_datagrid_cell_element_4_Template, 2, 4, "datagrid-cell-element", 31);
    i0.ɵɵtemplate(5, MaDataGridComponent_div_1_tr_6_td_1_datagrid_cell_element_5_Template, 2, 1, "datagrid-cell-element", 31);
    i0.ɵɵtemplate(6, MaDataGridComponent_div_1_tr_6_td_1_datagrid_cell_element_6_Template, 2, 1, "datagrid-cell-element", 31);
    i0.ɵɵtemplate(7, MaDataGridComponent_div_1_tr_6_td_1_datagrid_cell_element_7_Template, 2, 2, "datagrid-cell-element", 31);
    i0.ɵɵtemplate(8, MaDataGridComponent_div_1_tr_6_td_1_datagrid_cell_element_8_Template, 3, 5, "datagrid-cell-element", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r43 = ctx.$implicit;
    const isFirstCol_r46 = ctx.first;
    const isLastCol_r47 = ctx.last;
    const i_r40 = i0.ɵɵnextContext().index;
    const ctx_r42 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate2("", ctx_r42.customCSS, "grid_cell ", col_r43.cssClass, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(12, _c1$1, i_r40 == ctx_r42.row_selected && col_r43.prop == ctx_r42.cell_selected, isLastCol_r47, isFirstCol_r46));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", col_r43.dataType == "selector");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", col_r43.useTemplate != null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", col_r43.canEdit === true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", col_r43.isRowNumber === true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", col_r43.isRowHTML === true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", col_r43.useTemplate == null && col_r43.canEdit !== true && (col_r43.dataType == "boolean" || col_r43.dataType == "bool"));
} }
const _c2 = function (a0, a1, a2, a3, a4) { return { "grid_row_selected": a0, "CSSclassEven": a1, "CSSclassOdd": a2, "grid_row_first": a3, "grid_row_end": a4 }; };
function MaDataGridComponent_div_1_tr_6_Template(rf, ctx) { if (rf & 1) {
    const _r73 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 30);
    i0.ɵɵlistener("click", function MaDataGridComponent_div_1_tr_6_Template_tr_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r73); const i_r40 = restoredCtx.index; const row_r37 = restoredCtx.$implicit; const ctx_r72 = i0.ɵɵnextContext(2); return ctx_r72.SelectRow(i_r40, row_r37); });
    i0.ɵɵtemplate(1, MaDataGridComponent_div_1_tr_6_td_1_Template, 9, 16, "td", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const isLastRow_r38 = ctx.last;
    const pair_r39 = ctx.even;
    const i_r40 = ctx.index;
    const isFirstRow_r41 = ctx.first;
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("", ctx_r8.customCSS, "grid_row");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction5(5, _c2, i_r40 == ctx_r8.row_selected && !ctx_r8.cell_selected, pair_r39, !pair_r39, isFirstRow_r41, isLastRow_r38));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r8.columns);
} }
function MaDataGridComponent_div_1_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "s");
    i0.ɵɵelementEnd();
} }
const _c3 = function (a0, a1) { return { "disabled": a0, "": a1 }; };
function MaDataGridComponent_div_1_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r75 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 30);
    i0.ɵɵlistener("click", function MaDataGridComponent_div_1_li_14_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r75); const ctx_r74 = i0.ɵɵnextContext(2); return ctx_r74.FastDecrementPage(); });
    i0.ɵɵelementStart(1, "a", 37);
    i0.ɵɵelementStart(2, "i", 38);
    i0.ɵɵtext(3, "fast_rewind");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c3, ctx_r10.current_page == 0, ctx_r10.current_page != 0));
} }
function MaDataGridComponent_div_1_li_15_Template(rf, ctx) { if (rf & 1) {
    const _r77 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 30);
    i0.ɵɵlistener("click", function MaDataGridComponent_div_1_li_15_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r77); const ctx_r76 = i0.ɵɵnextContext(2); return ctx_r76.DecrementPage(); });
    i0.ɵɵelementStart(1, "a", 37);
    i0.ɵɵelementStart(2, "i", 38);
    i0.ɵɵtext(3, "chevron_left");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c3, ctx_r11.current_page == 0, ctx_r11.current_page != 0));
} }
const _c4 = function (a0, a1) { return { "active": a0, "": a1 }; };
function MaDataGridComponent_div_1_li_16_Template(rf, ctx) { if (rf & 1) {
    const _r80 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 30);
    i0.ɵɵlistener("click", function MaDataGridComponent_div_1_li_16_Template_li_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r80); const n_page_r78 = restoredCtx.$implicit; const ctx_r79 = i0.ɵɵnextContext(2); return ctx_r79._changePage(n_page_r78); });
    i0.ɵɵelementStart(1, "a", 39);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const n_page_r78 = ctx.$implicit;
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c4, ctx_r12.current_page == n_page_r78, ctx_r12.current_page != n_page_r78));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(n_page_r78 + 1);
} }
function MaDataGridComponent_div_1_li_17_Template(rf, ctx) { if (rf & 1) {
    const _r82 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 30);
    i0.ɵɵlistener("click", function MaDataGridComponent_div_1_li_17_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r82); const ctx_r81 = i0.ɵɵnextContext(2); return ctx_r81.IncrementPage(); });
    i0.ɵɵelementStart(1, "a", 37);
    i0.ɵɵelementStart(2, "i", 38);
    i0.ɵɵtext(3, "chevron_right");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c3, ctx_r13.current_page == ctx_r13.max_page, ctx_r13.current_page != ctx_r13.max_page));
} }
function MaDataGridComponent_div_1_li_18_Template(rf, ctx) { if (rf & 1) {
    const _r84 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 30);
    i0.ɵɵlistener("click", function MaDataGridComponent_div_1_li_18_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r84); const ctx_r83 = i0.ɵɵnextContext(2); return ctx_r83.FastIncrementPage(); });
    i0.ɵɵelementStart(1, "a", 37);
    i0.ɵɵelementStart(2, "i", 38);
    i0.ɵɵtext(3, "fast_forward");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c3, ctx_r14.current_page == ctx_r14.max_page, ctx_r14.current_page != ctx_r14.max_page));
} }
function MaDataGridComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "table");
    i0.ɵɵelementStart(3, "tr", 6);
    i0.ɵɵtemplate(4, MaDataGridComponent_div_1_td_4_Template, 5, 10, "td", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, MaDataGridComponent_div_1_tr_5_Template, 2, 4, "tr", 8);
    i0.ɵɵtemplate(6, MaDataGridComponent_div_1_tr_6_Template, 2, 11, "tr", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 10);
    i0.ɵɵelementStart(8, "div", 11);
    i0.ɵɵelementStart(9, "div", 12);
    i0.ɵɵtext(10);
    i0.ɵɵtemplate(11, MaDataGridComponent_div_1_span_11_Template, 2, 0, "span", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 14);
    i0.ɵɵelementStart(13, "ul", 15);
    i0.ɵɵtemplate(14, MaDataGridComponent_div_1_li_14_Template, 4, 4, "li", 16);
    i0.ɵɵtemplate(15, MaDataGridComponent_div_1_li_15_Template, 4, 4, "li", 16);
    i0.ɵɵtemplate(16, MaDataGridComponent_div_1_li_16_Template, 3, 5, "li", 17);
    i0.ɵɵtemplate(17, MaDataGridComponent_div_1_li_17_Template, 4, 4, "li", 16);
    i0.ɵɵtemplate(18, MaDataGridComponent_div_1_li_18_Template, 4, 4, "li", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("", ctx_r1.customCSS, "grid_table");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.columns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.headFilter);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.rows_displayed);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("#", ctx_r1.nb_record, " record");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.nb_record > 1);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.max_page >= 9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.nb_record > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.pages);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.nb_record > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.max_page >= 9);
} }
// import { PipeLengthPipe } from 'src/app/pipes/pipe-length.pipe';
class MaDataGridComponent {
    constructor(platformId /*private pipeLength: PipeLengthPipe*/, document) {
        this.platformId = platformId;
        this.document = document;
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
        this.myGrid = this;
        this.rows = [];
        this.change = new EventEmitter();
        this.select = new EventEmitter();
        this.extFilterChange = new EventEmitter();
        this.filterChange = new EventEmitter();
        this.changePage = new EventEmitter();
        this.sort = new EventEmitter();
        this.canSelectChange = new EventEmitter();
        this.rowsChange = new EventEmitter();
        this.rowsSelect = new EventEmitter();
        this.grid_cell_first = this.customCSS + 'grid_cell_first';
        this.grid_row_selected = this.customCSS + 'grid_row_selected';
        this.current_page = -1;
        this.max_page = 1;
        this.max_nb_page = 6;
        this.nb_page = 1;
        this.startat = 0;
        this.searchValue = "c";
        this.isBrowser = false;
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
        this.isBrowser = isPlatformBrowser(this.platformId);
    }
    resetSelection() {
        this.cell_selected = -1;
        this.row_selected = -1;
    }
    ngOnChanges(changes) {
        if (isPlatformBrowser(this.platformId)) {
            // console.log("this.searchValue: " + this.searchValue)
            console.log('ngOnChanges ', changes);
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
    _dataChange(evt) {
        console.log("_dataChange", evt);
        this.rowsChange.emit(evt);
    }
    _dataSelector(evt, prop) {
        console.log("_dataSelector", evt, prop);
        this.rowsSelect.emit(evt);
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
MaDataGridComponent.ɵfac = function MaDataGridComponent_Factory(t) { return new (t || MaDataGridComponent)(i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(DOCUMENT)); };
MaDataGridComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MaDataGridComponent, selectors: [["ma-data-grid"]], viewQuery: function MaDataGridComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(MaGridFilterComponent, 7);
        i0.ɵɵviewQuery(DataGridHeadFilterComponent, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.gridfilter = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.headerfilter = _t);
    } }, inputs: { columns: "columns", limit: "limit", canSelect: "canSelect", extFilter: "extFilter", headFilter: "headFilter", pagination: "pagination", page: "page", count: "count", customCSS: "customCSS", myGrid: "myGrid", rows: "rows" }, outputs: { change: "change", select: "select", extFilterChange: "extFilterChange", filterChange: "filterChange", changePage: "changePage", sort: "sort", canSelectChange: "canSelectChange", rowsChange: "rowsChange", rowsSelect: "rowsSelect" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[3, "customCSS", "searchValue", "columns", "searchValueChange", "filterChange", 4, "ngIf"], ["class", "datagrid_page", 4, "ngIf"], [3, "customCSS", "searchValue", "columns", "searchValueChange", "filterChange"], ["gridfilter", ""], [1, "datagrid_page"], [1, "scroller"], [1, "grid_row"], [3, "class", "ngClass", 4, "ngFor", "ngForOf"], [3, "class", 4, "ngIf"], [3, "class", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "row", 2, "padding-top", "5px"], [1, "col", "s3"], [1, "page_number"], [4, "ngIf"], [1, "col", "s8", "div_pagination"], [1, "pagination"], [3, "ngClass", "click", 4, "ngIf"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "click", 4, "ngIf"], [3, "prop", "isHeader", "col", "myGrid", "data"], [3, "click"], ["class", "grid_sort tiny material-icons", 4, "ngIf"], [1, "grid_sort", "tiny", "material-icons"], [3, "col", "changeHeaderFilter", 4, "ngIf"], [3, "col", "changeHeaderFilter"], ["headerfilter", ""], [3, "ngClass", "click"], ["ngSwitchBreak", "", 4, "ngSwitchCase"], ["ngSwitchBreak", ""], [3, "prop", "col", "myGrid", "data"], [3, "template", "prop", "col", "myGrid", "data"], [3, "innerHTML"], [3, "col", "data"], [1, "pointer"], [1, "material-icons", "small"], [1, "a_pagination", "small"]], template: function MaDataGridComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, MaDataGridComponent_ma_data_grid_filter_0_Template, 2, 3, "ma-data-grid-filter", 0);
        i0.ɵɵtemplate(1, MaDataGridComponent_div_1_Template, 19, 13, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.extFilter && ctx.isBrowser);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isBrowser);
    } }, styles: ["[_nghost-%COMP%]{--color-border: #667;--color-defaut: #667}.datagrid_page[_ngcontent-%COMP%]   .CSSclassOdd[_ngcontent-%COMP%]{background-color:#ddd}.datagrid_page[_ngcontent-%COMP%]{width:100%;height:100%}.div_pagination[_ngcontent-%COMP%]   .pointer[_ngcontent-%COMP%]{cursor:default}.div_pagination[_ngcontent-%COMP%]   .page_number[_ngcontent-%COMP%]{padding:0 10px;font-size:1rem;color:var(--color-defaut)}.datagrid_page[_ngcontent-%COMP%]   .div_pagination[_ngcontent-%COMP%]{display:inline-grid;justify-content:flex-end}.div_pagination[_ngcontent-%COMP%]   .a_pagination[_ngcontent-%COMP%], .a_pagination[_ngcontent-%COMP%]:hover{color:var(--color-border);display:inline-block;text-decoration:none;font-size:1rem;padding:0 10px;line-height:30px}.datagrid_page[_ngcontent-%COMP%]   .scroller[_ngcontent-%COMP%]{align-self:center;width:100%;background-color:#fefefe;overflow:auto;scrollbar-color:var(--color-border) #fefefe;scrollbar-width:auto}.grid_table[_ngcontent-%COMP%]   .grid_row_selected[_ngcontent-%COMP%]{background-color:#667;color:#ddd}.grid_table[_ngcontent-%COMP%]   .grid_sort[_ngcontent-%COMP%]{cursor:pointer}.datagrid_page[_ngcontent-%COMP%]   .grid_table[_ngcontent-%COMP%]{width:100%}.grid_table[_ngcontent-%COMP%]   .grid_cell_title[_ngcontent-%COMP%]{border-top:1px solid var(--color-border);color:var(--color-defaut);font-weight:700;text-align:center}.grid_table[_ngcontent-%COMP%]   .grid_cell_selected[_ngcontent-%COMP%]{background-color:#667;color:#ddd}.grid_table[_ngcontent-%COMP%]   .grid_cell_first[_ngcontent-%COMP%]{border-left:10px solid var(--color-border)}.grid_table[_ngcontent-%COMP%]   .grid_cell_end[_ngcontent-%COMP%]{border-right:0px solid var(--color-border)}.grid_table[_ngcontent-%COMP%]   .grid_cell[_ngcontent-%COMP%]{border-right:1px solid var(--color-border)}.grid_table[_ngcontent-%COMP%]   .grid_row_first[_ngcontent-%COMP%]{border-bottom:1px solid var(--color-border)}.grid_table[_ngcontent-%COMP%]   .grid_row_last[_ngcontent-%COMP%]{border-bottom:0px solid var(--color-border)}.grid_table[_ngcontent-%COMP%]   .grid_row[_ngcontent-%COMP%]{border-bottom:1px solid var(--color-border)}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MaDataGridComponent, [{
        type: Component,
        args: [{ selector: 'ma-data-grid', template: "<!-- #gridfilter *ngIf=\"extFilter\" -->\r\n<ma-data-grid-filter #gridfilter *ngIf=\"extFilter && isBrowser\" [customCSS]=\"customCSS\"  [(searchValue)]=\"searchValue\" [columns]=\"columns\"  (filterChange)=\"_filterChange($event)\"></ma-data-grid-filter>\r\n<div class=\"datagrid_page\" *ngIf=\"isBrowser\">\r\n    <div class=\"scroller\">\r\n        <table class=\"{{customCSS}}grid_table\">\r\n            <!-- HEADER -->\r\n            <tr class=\"grid_row\">\r\n                <td class=\"{{customCSS}}grid_cell {{customCSS}}grid_cell_title\"  [ngClass]=\"{grid_cell_first: i==0}\" *ngFor=\"let col of columns;index as i; \">\r\n                    <datagrid-cellheader-container [ngSwitch]=\"true\"  >\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.dataType == 'selector'\"><ma-data-grid-cell-selector [prop]=\"col.prop\" [isHeader]=\"true\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"rows_displayed\"></ma-data-grid-cell-selector><span>{{col.title}}</span></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchDefault >{{col.title}}</datagrid-cell-element>\r\n                    </datagrid-cellheader-container>\r\n                    \r\n                    <span *ngIf=\"col.dataType != 'selector' && col.isRowNumber !== true && col.sorted === true\" (click)=\"sortBy(col)\">\r\n                        <span *ngIf=\"sortedField.field != col.prop\" class=\"grid_sort tiny material-icons\">swap_vert</span>\r\n                        <span *ngIf=\"sortedField.field === col.prop && sortedField.reverse\" class=\"grid_sort tiny material-icons\">arrow_drop_down</span>\r\n                        <span *ngIf=\"sortedField.field === col.prop && !sortedField.reverse\" class=\"grid_sort tiny material-icons\">arrow_drop_up</span>\r\n                    </span> \r\n                </td>\r\n            </tr>\r\n            <!-- Head Filter -->\r\n            <tr class=\"{{customCSS}}grid_row\" *ngIf=\"headFilter\">\r\n                <td class=\"{{customCSS}}grid_cell {{customCSS}}grid_cell_title\"  [ngClass]=\"{grid_cell_first: i==0}\" *ngFor=\"let col of columns;index as i; \">\r\n                    <ma-data-grid-head-filter #headerfilter *ngIf=\"(col.dataType && col.dataType != 'selector' &&  col.headFilter !== false) || (col.headFilter !== false && col.headFilter != null  && col.headFilter.length > 0)\" [col]=\"col\" (changeHeaderFilter)=\"_changeHeaderFilter($event)\"></ma-data-grid-head-filter>\r\n                </td>\r\n            </tr>\r\n            <!-- DATA -->\r\n            <tr class=\"{{customCSS}}grid_row\" *ngFor=\"let row of rows_displayed; \r\n                    last as isLastRow; \r\n                    even as pair; \r\n                    index as i; \r\n                    first as isFirstRow\"\r\n                (click)=\"SelectRow(i,row)\" [ngClass]=\"{'grid_row_selected': i == row_selected && !cell_selected, 'CSSclassEven': pair,'CSSclassOdd': !pair, 'grid_row_first': isFirstRow, 'grid_row_end': isLastRow}\">\r\n    \r\n                <td class=\"{{customCSS}}grid_cell {{col.cssClass}}\" *ngFor=\"let col of columns; \r\n                    index as ncol; \r\n                    count as maxcol; \r\n                    first as isFirstCol\r\n                    last as isLastCol;\" \r\n                    \r\n                    [ngClass]=\"{'grid_cell_selected': i == row_selected && col.prop == cell_selected, 'grid_cell_end': isLastCol,'grid_cell_first': isFirstCol}\"\r\n                    (click)=\"SelectCell(i,row,col)\">\r\n                    <!--  {{col.prop}} repr\u00E9sente le nom de colonne d'un \u00E9l\u00E9ment contenu dans 'colmuns' -- >\r\n                    <div *ngIf=\"col.isRowNumber === true; then RowNumberBlock else dataBlock\"></div>\r\n                    <ng-template #RowNumberBlock>{{i}}</ng-template>\r\n                    <ng-template #dataBlock> {{u[col.prop] | dataGridPipe :u :c}}</ng-template>\r\n                    -->\r\n                    <datagrid-cell-container [ngSwitch]=\"true\"  >\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.dataType == 'selector'\" ngSwitchBreak><ma-data-grid-cell-selector [prop]=\"col.prop\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"row\"></ma-data-grid-cell-selector></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.useTemplate != null\" ngSwitchBreak><ma-data-grid-template-cell-t1 [template]=\"col.useTemplate\" [prop]=\"col.prop\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"row\"></ma-data-grid-template-cell-t1></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.canEdit === true\" ngSwitchBreak><ma-data-grid-celledit-item [prop]=\"col.prop\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"row\"></ma-data-grid-celledit-item></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.isRowNumber === true\" ngSwitchBreak>{{i}}</datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.isRowHTML === true\" ngSwitchBreak><span [innerHTML]=\"row[col.prop]\"></span></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.useTemplate == null && col.canEdit !== true && (col.dataType == 'boolean' || col.dataType == 'bool')\" ngSwitchBreak><ma-data-grid-cell-boolean [col]=\"col\" [data]=\"row\"></ma-data-grid-cell-boolean></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchDefault>{{row[col.prop] | maDataGridPipe :row :col}}</datagrid-cell-element>\r\n                    </datagrid-cell-container>\r\n                </td>\r\n        \r\n            </tr>\r\n        </table>\r\n        \r\n    </div>\r\n    <div class=\"row\" style=\"padding-top: 5px;\">\r\n        <div class=\"col s3 \">\r\n            <div class=\"page_number\">#{{nb_record}} record<span *ngIf=\"nb_record > 1\">s</span></div>\r\n        </div>\r\n        <div class=\"col s8 div_pagination\">\r\n           \r\n            <ul class=\"pagination\">\r\n                <li *ngIf=\"max_page >= 9\" (click)=\"FastDecrementPage()\" [ngClass]=\"{'disabled': current_page == 0,'': current_page != 0}\"><a  class=\"pointer\"><i class=\"material-icons small\">fast_rewind</i></a></li>\r\n                <li *ngIf=\"nb_record > 0\" (click)=\"DecrementPage()\" [ngClass]=\"{'disabled': current_page == 0,'': current_page != 0}\"><a  class=\"pointer\"><i class=\"material-icons small\">chevron_left</i></a></li>\r\n                <li *ngFor=\"let n_page of pages\" (click)=\"_changePage(n_page)\" [ngClass]=\"{'active': current_page == n_page,'': current_page != n_page}\" ><a class=\"pointer\" class=\"a_pagination small \">{{(n_page+1)}}</a></li>\r\n                <li *ngIf=\"nb_record > 0\" (click)=\"IncrementPage()\" [ngClass]=\"{'disabled': current_page == max_page,'': current_page != max_page}\"><a  class=\"pointer\"><i class=\"material-icons small\">chevron_right</i></a></li>\r\n                <li *ngIf=\"max_page >= 9\" (click)=\"FastIncrementPage()\" [ngClass]=\"{'disabled': current_page == max_page,'': current_page != max_page}\"><a class=\"pointer\"><i class=\"material-icons small\">fast_forward</i></a></li>\r\n            </ul>\r\n       \r\n        </div>\r\n    </div>\r\n</div>\r\n    \r\n    ", styles: [":host{--color-border: #667;--color-defaut: #667}.datagrid_page .CSSclassOdd{background-color:#ddd}.datagrid_page{width:100%;height:100%}.div_pagination .pointer{cursor:default}.div_pagination .page_number{padding:0 10px;font-size:1rem;color:var(--color-defaut)}.datagrid_page .div_pagination{display:inline-grid;justify-content:flex-end}.div_pagination .a_pagination,.a_pagination:hover{color:var(--color-border);display:inline-block;text-decoration:none;font-size:1rem;padding:0 10px;line-height:30px}.datagrid_page .scroller{align-self:center;width:100%;background-color:#fefefe;overflow:auto;scrollbar-color:var(--color-border) #fefefe;scrollbar-width:auto}.grid_table .grid_row_selected{background-color:#667;color:#ddd}.grid_table .grid_sort{cursor:pointer}.datagrid_page .grid_table{width:100%}.grid_table .grid_cell_title{border-top:1px solid var(--color-border);color:var(--color-defaut);font-weight:700;text-align:center}.grid_table .grid_cell_selected{background-color:#667;color:#ddd}.grid_table .grid_cell_first{border-left:10px solid var(--color-border)}.grid_table .grid_cell_end{border-right:0px solid var(--color-border)}.grid_table .grid_cell{border-right:1px solid var(--color-border)}.grid_table .grid_row_first{border-bottom:1px solid var(--color-border)}.grid_table .grid_row_last{border-bottom:0px solid var(--color-border)}.grid_table .grid_row{border-bottom:1px solid var(--color-border)}\n"] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { columns: [{
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
        }], myGrid: [{
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
        }], rowsChange: [{
            type: Output
        }], rowsSelect: [{
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
MaAnchorGridCellDirective.ɵfac = function MaAnchorGridCellDirective_Factory(t) { return new (t || MaAnchorGridCellDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
MaAnchorGridCellDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: MaAnchorGridCellDirective, selectors: [["", "libMaAnchorGridCell", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MaAnchorGridCellDirective, [{
        type: Directive,
        args: [{
                selector: '[libMaAnchorGridCell]'
            }]
    }], function () { return [{ type: i0.ViewContainerRef }]; }, null); })();

class MaGridCellTemplateDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
MaGridCellTemplateDirective.ɵfac = function MaGridCellTemplateDirective_Factory(t) { return new (t || MaGridCellTemplateDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
MaGridCellTemplateDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: MaGridCellTemplateDirective, selectors: [["", "libMaGridCellTemplate", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MaGridCellTemplateDirective, [{
        type: Directive,
        args: [{
                selector: '[libMaGridCellTemplate]'
            }]
    }], function () { return [{ type: i0.ViewContainerRef }]; }, null); })();

class DataGridCellItemComponent {
    //dataChange = new EventEmitter<any>()
    constructor(component, data, col, prop, myGrid) {
        this.component = component;
        this.data = data;
        this.col = col;
        this.prop = prop;
        this.myGrid = myGrid;
    }
}

function DataGridTemplateCellComponent_ng_template_0_Template(rf, ctx) { }
class DataGridTemplateCellComponent {
    constructor(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        // console.log('DataGridTemplateCellComponent c',this.template, this.prop);
    }
    ngOnInit() {
        // 
        if (!this.template) {
            return;
        }
        const component = new DataGridCellItemComponent(this.template, this.data, this.col, this.prop, this.myGrid);
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component.component);
        if (!this.libMaGridCellTemplate) {
            return;
        }
        const viewContainerRef = this.libMaGridCellTemplate.viewContainerRef;
        const componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = component.data;
        componentRef.instance.prop = component.prop;
        componentRef.instance.col = component.col;
        componentRef.instance.dataChange = new EventEmitter();
        componentRef.instance.myGrid = component.myGrid;
        componentRef.instance.dataChange?.subscribe(d => {
            // console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD", d);
            if (componentRef.instance.myGrid != null) {
                componentRef.instance.myGrid._dataChange(d);
            }
        });
    }
}
DataGridTemplateCellComponent.ɵfac = function DataGridTemplateCellComponent_Factory(t) { return new (t || DataGridTemplateCellComponent)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver)); };
DataGridTemplateCellComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataGridTemplateCellComponent, selectors: [["ma-data-grid-template-cell-t1"]], viewQuery: function DataGridTemplateCellComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(MaGridCellTemplateDirective, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.libMaGridCellTemplate = _t.first);
    } }, inputs: { data: "data", prop: "prop", col: "col", template: "template", myGrid: "myGrid" }, outputs: { dataChange: "dataChange" }, decls: 1, vars: 0, consts: [["libMaGridCellTemplate", ""]], template: function DataGridTemplateCellComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, DataGridTemplateCellComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
    } }, directives: [MaGridCellTemplateDirective], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataGridTemplateCellComponent, [{
        type: Component,
        args: [{
                selector: 'ma-data-grid-template-cell-t1',
                template: '<ng-template libMaGridCellTemplate></ng-template>'
            }]
    }], function () { return [{ type: i0.ComponentFactoryResolver }]; }, { data: [{
            type: Input
        }], prop: [{
            type: Input
        }], col: [{
            type: Input
        }], template: [{
            type: Input
        }], myGrid: [{
            type: Input
        }], dataChange: [{
            type: Output
        }], libMaGridCellTemplate: [{
            type: ViewChild,
            args: [MaGridCellTemplateDirective, { static: true }]
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
DataGridPipePipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "maDataGridPipe", type: DataGridPipePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataGridPipePipe, [{
        type: Pipe,
        args: [{
                name: 'maDataGridPipe'
            }]
    }], null, null); })();

function DataGridCellBooleanComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "i", 2);
    i0.ɵɵtext(1, "check_box");
    i0.ɵɵelementEnd();
} }
function DataGridCellBooleanComponent_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "i", 2);
    i0.ɵɵtext(1, "check_box_outline_blank");
    i0.ɵɵelementEnd();
} }
class DataGridCellBooleanComponent {
    constructor() {
        this.icon = '';
    }
    ngOnInit() {
        // console.log(this.data[this.col.prop]);
        // if (this.data[this.col.prop] === true) {
        //   this.icon = 'check_box'
        // } else if (this.data[this.col.prop] === false) {
        //   this.icon = 'check_box_outline_blank'
        // }
    }
}
DataGridCellBooleanComponent.ɵfac = function DataGridCellBooleanComponent_Factory(t) { return new (t || DataGridCellBooleanComponent)(); };
DataGridCellBooleanComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataGridCellBooleanComponent, selectors: [["ma-data-grid-cell-boolean"]], inputs: { data: "data", col: "col" }, decls: 3, vars: 2, consts: [[2, "text-align", "center"], ["class", "tiny material-icons", 4, "ngIf"], [1, "tiny", "material-icons"]], template: function DataGridCellBooleanComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, DataGridCellBooleanComponent_i_1_Template, 2, 0, "i", 1);
        i0.ɵɵtemplate(2, DataGridCellBooleanComponent_i_2_Template, 2, 0, "i", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.data[ctx.col.prop] === true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.data[ctx.col.prop] === false);
    } }, directives: [i1.NgIf], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataGridCellBooleanComponent, [{
        type: Component,
        args: [{
                selector: 'ma-data-grid-cell-boolean',
                //template: '<div style="text-align: center"><i class="tiny material-icons">{{icon}}</i></div>'
                template: '<div style="text-align: center"><i *ngIf="data[col.prop] === true" class="tiny material-icons">check_box</i><i *ngIf="data[col.prop] === false" class="tiny material-icons">check_box_outline_blank</i></div>'
            }]
    }], function () { return []; }, { data: [{
            type: Input
        }], col: [{
            type: Input
        }] }); })();

const _c0$1 = ["myInput"];
const _c1 = ["myInputCheckbox"];
function DataGridCelleditItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "input", 1, 2);
    i0.ɵɵlistener("valueChange", function DataGridCelleditItemComponent_div_0_Template_input_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return (ctx_r3.data[ctx_r3.prop] = $event); })("keypress", function DataGridCelleditItemComponent_div_0_Template_input_keypress_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onPress($event); })("change", function DataGridCelleditItemComponent_div_0_Template_input_change_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onChange(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r0.data[ctx_r0.prop]);
} }
function DataGridCelleditItemComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "label");
    i0.ɵɵelementStart(2, "input", 3, 4);
    i0.ɵɵlistener("ngModelChange", function DataGridCelleditItemComponent_div_1_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return (ctx_r8.data[ctx_r8.col.prop] = $event); })("change", function DataGridCelleditItemComponent_div_1_Template_input_change_2_listener() { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.onChangeCheckbox(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "span");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r1.data[ctx_r1.col.prop]);
} }
class DataGridCelleditItemComponent {
    constructor() {
        this.value = '';
        this.dataChange = new EventEmitter();
    }
    ngOnInit() {
        if (this.col && this.col.dataType == 'boolean') {
            if (this.data && (this.data[this.prop] == true || this.data[this.prop] == 1 || this.data[this.prop] == "on")) {
                this.data[this.prop] = true;
            }
        }
    }
    onPress(evt) {
        console.log(evt);
        if (evt.Key == 'Enter') {
            this.onChange();
        }
    }
    onChange() {
        // console.log('elem',this.myInput.nativeElement);
        let emitEvent = true;
        if (this.col && this.col.dataType == 'number') {
            let s = this.myInput.nativeElement.value;
            if (s.match(/^[0-9]+$/)) {
                this.data[this.prop] = parseInt(this.myInput.nativeElement.value);
            }
            else {
                emitEvent = false;
                this.myInput.nativeElement.value = this.data[this.prop];
            }
        }
        else if (this.col && this.col.dataType == 'float') {
            let s = this.myInput.nativeElement.value;
            if (s.match(/^[0-9]+\.{0,1}[0-9]*$/)) {
                this.data[this.prop] = parseFloat(this.myInput.nativeElement.value);
            }
            else {
                emitEvent = false;
                this.myInput.nativeElement.value = this.data[this.prop];
            }
        }
        else if (this.col && this.col.dataType == 'date') {
            try {
                let d = new Date(this.myInput.nativeElement.value).toISOString().replace(/T.+/, '');
                this.data[this.prop] = d;
            }
            catch (e) {
                emitEvent = false;
                this.myInput.nativeElement.value = this.data[this.prop];
            }
        }
        else if (this.col && (this.col.dataType == 'boolean' || this.col.dataType == 'bool')) {
            this.data[this.prop] = this.myInput.nativeElement.checked;
        }
        else {
            this.data[this.prop] = this.myInput.nativeElement.value;
        }
        if (emitEvent) {
            // console.log('EMIT dataChange',this.data);
            this.dataChange.emit(this.data);
            if (this.myGrid != null) {
                this.myGrid._dataChange(this.data);
            }
        }
    }
    onChangeCheckbox() {
        // console.log('elem',this.myInputCheckbox.nativeElement);
        this.data[this.prop] = this.myInputCheckbox.nativeElement.checked;
        // console.log('EMIT dataChange',this.data);
        this.dataChange.emit(this.data);
        if (this.myGrid != null) {
            this.myGrid._dataChange(this.data);
        }
    }
    ngOnChanges(changes) {
        // console.log('DataGridCelleditItem ngOnChanges',changes)
    }
}
DataGridCelleditItemComponent.ɵfac = function DataGridCelleditItemComponent_Factory(t) { return new (t || DataGridCelleditItemComponent)(); };
DataGridCelleditItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataGridCelleditItemComponent, selectors: [["ma-data-grid-celledit-item"]], viewQuery: function DataGridCelleditItemComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$1, 5);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.myInput = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.myInputCheckbox = _t.first);
    } }, inputs: { data: "data", col: "col", prop: "prop", myGrid: "myGrid" }, outputs: { dataChange: "dataChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[4, "ngIf"], ["type", "text", 3, "value", "valueChange", "keypress", "change"], ["myInput", ""], ["type", "checkbox", 3, "ngModel", "ngModelChange", "change"], ["myInputCheckbox", ""]], template: function DataGridCelleditItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, DataGridCelleditItemComponent_div_0_Template, 3, 1, "div", 0);
        i0.ɵɵtemplate(1, DataGridCelleditItemComponent_div_1_Template, 5, 1, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.col || ctx.col.dataType != "boolean");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.col && ctx.col.dataType == "boolean");
    } }, directives: [i1.NgIf, i1$1.CheckboxControlValueAccessor, i1$1.NgControlStatus, i1$1.NgModel], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataGridCelleditItemComponent, [{
        type: Component,
        args: [{ selector: 'ma-data-grid-celledit-item', template: "<div *ngIf=\"!col || col.dataType != 'boolean'\">\n    <!-- (keyup)=\"onChange()\" (keypress)=\"onPress($Event)\" -->\n    <input #myInput type=\"text\" [(value)]=\"data[prop]\" (keypress)=\"onPress($event)\" (change)=\"onChange()\">\n</div>\n<div *ngIf=\"col && col.dataType == 'boolean'\">\n    <label>\n        <input #myInputCheckbox type=\"checkbox\" [(ngModel)]=\"data[col.prop]\" (change)=\"onChangeCheckbox()\" />\n        <span></span>\n    </label>\n</div>", styles: [""] }]
    }], function () { return []; }, { myInput: [{
            type: ViewChild,
            args: ["myInput", { static: false }]
        }], myInputCheckbox: [{
            type: ViewChild,
            args: ["myInputCheckbox", { static: false }]
        }], dataChange: [{
            type: Output
        }], data: [{
            type: Input
        }], col: [{
            type: Input
        }], prop: [{
            type: Input
        }], myGrid: [{
            type: Input
        }] }); })();

const _c0 = ["myInputSelectorBox"];
class DataGridCellSelectorComponent {
    constructor() {
        this.title = '';
        this.dataChange = new EventEmitter();
        this.isHeader = false;
    }
    ngOnInit() {
        /* Cas du header pas de prop */
        if (this.isHeader) {
            this.title = this.col.title;
        }
        else {
            this.title = '';
        }
        if (this.data && (this.data[this.prop] == true || this.data[this.prop] == 1 || this.data[this.prop] == "on")) {
            this.data[this.prop] = true;
        }
    }
    onChangeCheckbox() {
        if (this.isHeader) {
            for (let row of this.data) {
                row[this.prop] = this.myInputSelectorBox.nativeElement.checked;
            }
        }
        else {
            this.data[this.prop] = this.myInputSelectorBox.nativeElement.checked;
            // console.log('EMIT SELECTOR dataChange', this.data);
        }
        this.dataChange.emit(this.data);
        if (this.myGrid != null) {
            this.myGrid._dataSelector(this.data, this.prop);
        }
    }
    ngOnChanges(changes) {
        // console.log('SELECTOR ngOnChanges',changes)
    }
}
DataGridCellSelectorComponent.ɵfac = function DataGridCellSelectorComponent_Factory(t) { return new (t || DataGridCellSelectorComponent)(); };
DataGridCellSelectorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataGridCellSelectorComponent, selectors: [["ma-data-grid-cell-selector"]], viewQuery: function DataGridCellSelectorComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.myInputSelectorBox = _t.first);
    } }, inputs: { data: "data", isHeader: "isHeader", col: "col", prop: "prop", myGrid: "myGrid" }, outputs: { dataChange: "dataChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 5, vars: 1, consts: [["type", "checkbox", 3, "ngModel", "ngModelChange", "change"], ["myInputSelectorBox", ""]], template: function DataGridCellSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵelementStart(1, "label");
        i0.ɵɵelementStart(2, "input", 0, 1);
        i0.ɵɵlistener("ngModelChange", function DataGridCellSelectorComponent_Template_input_ngModelChange_2_listener($event) { return (ctx.data[ctx.col.prop] = $event); })("change", function DataGridCellSelectorComponent_Template_input_change_2_listener() { return ctx.onChangeCheckbox(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "span");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.data[ctx.col.prop]);
    } }, directives: [i1$1.CheckboxControlValueAccessor, i1$1.NgControlStatus, i1$1.NgModel], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataGridCellSelectorComponent, [{
        type: Component,
        args: [{ selector: 'ma-data-grid-cell-selector', template: "<span>\n    <!--  [(ngModel)]=\"realValue\" [checked]=\"checked\" -->\n    <label>\n        <input [(ngModel)]=\"data[col.prop]\" #myInputSelectorBox type=\"checkbox\"  (change)=\"onChangeCheckbox()\" />\n        <span></span>\n    </label>\n</span>", styles: [""] }]
    }], function () { return []; }, { myInputSelectorBox: [{
            type: ViewChild,
            args: ["myInputSelectorBox", { static: false }]
        }], dataChange: [{
            type: Output
        }], data: [{
            type: Input
        }], isHeader: [{
            type: Input
        }], col: [{
            type: Input
        }], prop: [{
            type: Input
        }], myGrid: [{
            type: Input
        }] }); })();

//export var  M;
class MaDataGridModule {
}
MaDataGridModule.ɵfac = function MaDataGridModule_Factory(t) { return new (t || MaDataGridModule)(); };
MaDataGridModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: MaDataGridModule });
MaDataGridModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FormsModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MaDataGridModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MaAnchorGridCellDirective,
                    DataGridCellSelectorComponent,
                    DataGridTemplateCellComponent,
                    DataGridPipePipe,
                    MaGridFilterComponent,
                    DataGridHeadFilterComponent,
                    DataGridOpFilterComponent,
                    DataGridPickerDateComponent,
                    DataGridCellBooleanComponent,
                    MaGridCellTemplateDirective,
                    DataGridCelleditItemComponent,
                    DataGridCellSelectorComponent,
                    MaDataGridComponent
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MaDataGridModule, { declarations: [MaAnchorGridCellDirective,
        DataGridCellSelectorComponent,
        DataGridTemplateCellComponent,
        DataGridPipePipe,
        MaGridFilterComponent,
        DataGridHeadFilterComponent,
        DataGridOpFilterComponent,
        DataGridPickerDateComponent,
        DataGridCellBooleanComponent,
        MaGridCellTemplateDirective,
        DataGridCelleditItemComponent,
        DataGridCellSelectorComponent,
        MaDataGridComponent], imports: [CommonModule,
        FormsModule], exports: [
        /* Ajouter CommonModule pour éviter les erreurs
            Can't bind to 'ngClass' since it isn't a known property */
        MaDataGridComponent,
        MaGridFilterComponent] }); })();
i0.ɵɵsetComponentScope(MaDataGridComponent, [i1.NgIf, MaGridFilterComponent, i1.NgForOf, i1.NgClass, i1.NgSwitch, i1.NgSwitchCase, DataGridCellSelectorComponent, i1.NgSwitchDefault, DataGridHeadFilterComponent,
    DataGridTemplateCellComponent,
    DataGridCelleditItemComponent,
    DataGridCellBooleanComponent], [DataGridPipePipe]);

/*
 * Public API Surface of ma-data-grid
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MaDataGridComponent, MaDataGridModule, MaGridFilterComponent, options_header_bool, options_header_boolean, options_header_date, options_header_number, options_header_string };
//# sourceMappingURL=amn31-ma-data-grid.mjs.map
