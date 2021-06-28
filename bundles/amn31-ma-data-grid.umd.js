(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('jquery'), require('@angular/common'), require('materialize-css'), require('@angular/forms'), require('@amn31/filter-multiple-conditions')) :
    typeof define === 'function' && define.amd ? define('@amn31/ma-data-grid', ['exports', '@angular/core', 'jquery', '@angular/common', 'materialize-css', '@angular/forms', '@amn31/filter-multiple-conditions'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.amn31 = global.amn31 || {}, global.amn31['ma-data-grid'] = {}), global.ng.core, global.$, global.ng.common, global.M, global.ng.forms, global.filterMultipleConditions));
}(this, (function (exports, i0, $, i1, M, i1$1, filterMultipleConditions) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) { return e; } else {
            var n = Object.create(null);
            if (e) {
                Object.keys(e).forEach(function (k) {
                    if (k !== 'default') {
                        var d = Object.getOwnPropertyDescriptor(e, k);
                        Object.defineProperty(n, k, d.get ? d : {
                            enumerable: true,
                            get: function () {
                                return e[k];
                            }
                        });
                    }
                });
            }
            n['default'] = e;
            return Object.freeze(n);
        }
    }

    var $__namespace = /*#__PURE__*/_interopNamespace($);

    //import { Type } from '@angular/core';
    var options_header_boolean = [{
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
    var options_header_string = [
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
    var options_header_number = [{
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
    var options_header_date = [{
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

    var _c0 = ["elemToggle"];
    var _c1 = ["elemValue"];
    function DataGridOpFilterComponent_i_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "i", 6);
            i0.ɵɵtext(1, "search");
            i0.ɵɵelementEnd();
        }
    }
    function DataGridOpFilterComponent_div_7_div_1_span_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var opt_r4 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(opt_r4.label);
        }
    }
    function DataGridOpFilterComponent_div_7_div_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "span", 11);
        }
        if (rf & 2) {
            var opt_r4 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵproperty("innerHTML", opt_r4.label, i0.ɵɵsanitizeHtml);
        }
    }
    function DataGridOpFilterComponent_div_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "label");
            i0.ɵɵelementStart(2, "input", 9);
            i0.ɵɵlistener("click", function DataGridOpFilterComponent_div_7_div_1_Template_input_click_2_listener() { i0.ɵɵrestoreView(_r13_1); var opt_r4 = i0.ɵɵnextContext().$implicit; var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.changeValues(opt_r4); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, DataGridOpFilterComponent_div_7_div_1_span_3_Template, 2, 1, "span", 8);
            i0.ɵɵtemplate(4, DataGridOpFilterComponent_div_7_div_1_span_4_Template, 1, 1, "span", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var opt_r4 = i0.ɵɵnextContext().$implicit;
            var ctx_r5 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", opt_r4.value)("checked", opt_r4.checked);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r5.isRowHTML);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r5.isRowHTML === true);
        }
    }
    function DataGridOpFilterComponent_div_7_div_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r17_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "div", 12);
            i0.ɵɵlistener("click", function DataGridOpFilterComponent_div_7_div_2_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r17_1); var opt_r4 = i0.ɵɵnextContext().$implicit; var ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.changeValue(opt_r4); });
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var opt_r4 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", opt_r4.label, "\u00A0");
        }
    }
    function DataGridOpFilterComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 7);
            i0.ɵɵtemplate(1, DataGridOpFilterComponent_div_7_div_1_Template, 5, 4, "div", 8);
            i0.ɵɵtemplate(2, DataGridOpFilterComponent_div_7_div_2_Template, 3, 1, "div", 8);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var opt_r4 = ctx.$implicit;
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵproperty("value", opt_r4.value);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r3.multiple === true);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r3.multiple === false);
        }
    }
    var defaut_label = '';
    var DataGridOpFilterComponent = /** @class */ (function () {
        function DataGridOpFilterComponent() {
            this.value = '';
            this.changeOperator = new i0.EventEmitter();
            this.changeEmptyOperator = new i0.EventEmitter();
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
        DataGridOpFilterComponent.prototype.getFuncClickDocument = function () {
            var p = this;
            var fct = function () {
                // console.log('CLICK',fct);
                p.elemToggle.nativeElement.style.display = 'none';
                $__namespace(document).off('click', fct);
            };
            return fct;
        };
        DataGridOpFilterComponent.prototype.toggleDiv = function () {
            var onClickDocument = this.getFuncClickDocument();
            $__namespace(document).off('click', onClickDocument);
            if (this.elemToggle.nativeElement.style.display == 'none') {
                this.elemToggle.nativeElement.style.position = 'absolute';
                this.elemToggle.nativeElement.style.display = 'block';
                var anchor = this.elemValue.nativeElement.parentElement;
                this.elemToggle.nativeElement.style.top = ($__namespace(anchor).height() + $__namespace(anchor).offset().top) + 'px';
                this.elemToggle.nativeElement.style.left = $__namespace(anchor).offset().left + 'px';
                setTimeout(function () {
                    $__namespace(document).on('click', onClickDocument);
                }, 500);
            }
            else {
                this.elemToggle.nativeElement.style.display = 'none';
                $__namespace(document).off('click', onClickDocument);
            }
        };
        DataGridOpFilterComponent.prototype.ngOnInit = function () {
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
        };
        DataGridOpFilterComponent.prototype.getOperator = function () {
            var _this = this;
            if (this.multiple === false) {
                // console.log('getOperator ' + this.col.prop + ' value ' + this.value, this.options)
                if (this.value == '') {
                    return null;
                }
                return this.options.find(function (d) { return d.value === _this.value && d.checked == true; });
            }
            return null;
        };
        DataGridOpFilterComponent.prototype.changeValues = function (opt) {
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
        };
        DataGridOpFilterComponent.prototype.getConditions = function (filter_value) {
            if (this.multiple == false) {
                var o = this.getOperator();
                // console.log('getFilter ' + this.col.prop + " o", o)
                if (o != null && o.operator != '') {
                    var value = o.value.replace('${1}', filter_value);
                    //if (this.col.dataType == 'number') {
                    //  value = parseFloat(value);
                    //}
                    return [this.col.prop, o.operator, value];
                }
            }
            else {
                if (this.values.length > 0) {
                    var conditions = [];
                    for (var i = 0; i < this.values.length; i++) {
                        var v = this.values[i].value;
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
        };
        DataGridOpFilterComponent.prototype.changeValue = function (opt) {
            // console.log("ChangeValue",opt);
            if (this.options.find(function (d) { return d.checked === true; })) {
                this.options.find(function (d) { return d.checked === true; }).checked = false;
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
        };
        DataGridOpFilterComponent.prototype._changeOperator = function () {
            // console.log('EMIT OP', this.options)
            this.changeOperator.emit({
                prop: this.col,
            });
        };
        return DataGridOpFilterComponent;
    }());
    DataGridOpFilterComponent.ɵfac = function DataGridOpFilterComponent_Factory(t) { return new (t || DataGridOpFilterComponent)(); };
    DataGridOpFilterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DataGridOpFilterComponent, selectors: [["ma-data-grid-op-filter"]], viewQuery: function DataGridOpFilterComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, true);
                i0.ɵɵviewQuery(_c1, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.elemToggle = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.elemValue = _t.first);
            }
        }, inputs: { value: "value", col: "col" }, outputs: { changeOperator: "changeOperator", changeEmptyOperator: "changeEmptyOperator" }, decls: 8, vars: 7, consts: [[1, "op_label", 3, "click"], ["elemValue", ""], ["class", "tiny material-icons", 4, "ngIf"], [2, "display", "none", "z-index", "20", "max-height", "300px", "overflow-y", "auto", "background-color", "aliceblue", "border", "1px solid #9e9e9e"], ["elemToggle", ""], ["class", "op_filter", 3, "value", 4, "ngFor", "ngForOf"], [1, "tiny", "material-icons"], [1, "op_filter", 3, "value"], [4, "ngIf"], ["type", "checkbox", 1, "op_filter", 3, "value", "checked", "click"], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"], [3, "click"]], template: function DataGridOpFilterComponent_Template(rf, ctx) {
            if (rf & 1) {
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
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", ctx.label == "");
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate1("", ctx.label, " ");
                i0.ɵɵadvance(1);
                i0.ɵɵstyleProp("left", ctx.popupPosition.left, "px")("top", ctx.popupPosition.top, "px");
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngForOf", ctx.options);
            }
        }, directives: [i1.NgIf, i1.NgForOf], styles: ["select.op_filter[_ngcontent-%COMP%]{border:1px inset #9e9e9e;height:1.4rem;min-width:25px;padding:0}.op_filter[_ngcontent-%COMP%]{border-top:1px solid #9e9e9e;padding-left:10px;padding-right:10px}.op_filter[_ngcontent-%COMP%], .op_label[_ngcontent-%COMP%]{font-weight:lighter}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DataGridOpFilterComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ma-data-grid-op-filter',
                        templateUrl: './data-grid-op-filter.component.html',
                        styleUrls: ['./data-grid-op-filter.component.css']
                    }]
            }], function () { return []; }, { value: [{
                    type: i0.Input
                }], col: [{
                    type: i0.Input
                }], elemToggle: [{
                    type: i0.ViewChild,
                    args: ["elemToggle", { static: false }]
                }], elemValue: [{
                    type: i0.ViewChild,
                    args: ["elemValue", { static: false }]
                }], changeOperator: [{
                    type: i0.Output
                }], changeEmptyOperator: [{
                    type: i0.Output
                }] });
    })();

    var _c0$1 = ["madatepicker"];
    var DataGridPickerDateComponent = /** @class */ (function () {
        function DataGridPickerDateComponent() {
            this.datevalue = null;
            this.realValue = "";
            this.time = '';
            this.value = '';
            this.changePicker = new i0.EventEmitter();
            this.datepicker_id = "dp_" + Math.floor((Math.random() * 100000));
        }
        DataGridPickerDateComponent.prototype.ngAfterViewInit = function () {
            this._init();
        };
        DataGridPickerDateComponent.prototype.ngOnDestroy = function () {
            if (this.instance)
                this.instance.destroy();
        };
        DataGridPickerDateComponent.prototype.ngOnInit = function () {
            // console.log('ngOnInit this.madatepicker');
            if (this.value == '') {
                this.datevalue = null;
            }
        };
        DataGridPickerDateComponent.prototype.getDate = function () {
            return this.datevalue;
        };
        DataGridPickerDateComponent.prototype.setDate = function (date) {
            if (date != null) {
                var offset = new Date().getTimezoneOffset();
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
        };
        DataGridPickerDateComponent.prototype.getTime = function () {
            return this.time;
        };
        DataGridPickerDateComponent.prototype.setTime = function (hour, min) {
            if (hour < 10) {
                hour = '0' + hour;
            }
            if (min < 10) {
                min = '0' + min;
            }
            this.time = hour + ':' + min;
            // console.log("VALUE", this.time);
        };
        DataGridPickerDateComponent.prototype._init = function () {
            //var elems = document.querySelectorAll('.ma-data-grid-datepicker');
            var elem = document.getElementById(this.datepicker_id);
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
        };
        DataGridPickerDateComponent.prototype.onChange = function () {
            // console.log("realValue" + this.realValue);
            if (this.type == 'date') {
                this.changePicker.emit(this.datevalue);
            }
            else {
                this.changePicker.emit(this.time);
            }
        };
        DataGridPickerDateComponent.prototype.emitDateEvent = function () {
            this.changePicker.emit(this.datevalue);
        };
        DataGridPickerDateComponent.prototype.emitTimeEvent = function () {
            this.changePicker.emit(this.time);
        };
        return DataGridPickerDateComponent;
    }());
    DataGridPickerDateComponent.ɵfac = function DataGridPickerDateComponent_Factory(t) { return new (t || DataGridPickerDateComponent)(); };
    DataGridPickerDateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DataGridPickerDateComponent, selectors: [["ma-data-grid-datepicker"]], viewQuery: function DataGridPickerDateComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$1, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.madatepicker = _t.first);
            }
        }, inputs: { value: "value", type: "type" }, outputs: { changePicker: "changePicker" }, decls: 2, vars: 2, consts: [["type", "text", 1, "ma-data-grid-datepicker", "datepicker", 3, "id", "ngModel", "ngModelChange"], ["madatepicker", ""]], template: function DataGridPickerDateComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "input", 0, 1);
                i0.ɵɵlistener("ngModelChange", function DataGridPickerDateComponent_Template_input_ngModelChange_0_listener($event) { return ctx.realValue = $event; });
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("id", ctx.datepicker_id)("ngModel", ctx.realValue);
            }
        }, directives: [i1$1.DefaultValueAccessor, i1$1.NgControlStatus, i1$1.NgModel], styles: [""] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DataGridPickerDateComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ma-data-grid-datepicker',
                        templateUrl: './data-grid-picker-date.component.html',
                        styleUrls: ['./data-grid-picker-date.component.css']
                    }]
            }], function () { return []; }, { value: [{
                    type: i0.Input
                }], type: [{
                    type: i0.Input
                }], changePicker: [{
                    type: i0.Output
                }], madatepicker: [{
                    type: i0.ViewChild,
                    args: ["madatepicker", { static: false }]
                }] });
    })();

    function DataGridHeadFilterComponent_td_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "td", 4);
            i0.ɵɵelementStart(1, "input", 7);
            i0.ɵɵlistener("ngModelChange", function DataGridHeadFilterComponent_td_5_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r4_1); var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.filter_value = $event; })("keyup", function DataGridHeadFilterComponent_td_5_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r4_1); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5._changeOperator($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx_r1.filter_value);
        }
    }
    var DataGridHeadFilterComponent = /** @class */ (function () {
        function DataGridHeadFilterComponent() {
            this.filter_value = '';
            this.changeHeaderFilter = new i0.EventEmitter();
            this.astuce_datapicker = 'display: none';
        }
        DataGridHeadFilterComponent.prototype.ngOnInit = function () {
            if (this.col.dataType == 'date') {
                this.astuce_datapicker = 'display: block';
            }
        };
        DataGridHeadFilterComponent.prototype.getFilter = function () {
            if (this.filter_value != '' || this.col.dataType == 'boolean' || this.col.headFilter != null) {
                var o = this.op_filter.getConditions(this.filter_value);
                // console.log('getConditions '+this.col.prop+ " o",o)
                return o;
            }
            return null;
        };
        DataGridHeadFilterComponent.prototype._changeEmptyOperator = function () {
            // console.log("_changeEmptyOperator");
            this.madate_picker.setDate(null);
        };
        DataGridHeadFilterComponent.prototype._changeOperator = function (event) {
            // console.log('RECEIVE CHANGE OP',event)
            // console.log('EMIT changeHeaderFilter');
            this.changeHeaderFilter.emit({
                prop: this.col,
                value: this.filter_value,
            });
        };
        DataGridHeadFilterComponent.prototype._changeDate = function (date) {
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
        };
        return DataGridHeadFilterComponent;
    }());
    DataGridHeadFilterComponent.ɵfac = function DataGridHeadFilterComponent_Factory(t) { return new (t || DataGridHeadFilterComponent)(); };
    DataGridHeadFilterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DataGridHeadFilterComponent, selectors: [["ma-data-grid-head-filter"]], viewQuery: function DataGridHeadFilterComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵstaticViewQuery(DataGridOpFilterComponent, true);
                i0.ɵɵstaticViewQuery(DataGridPickerDateComponent, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.op_filter = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.madate_picker = _t.first);
            }
        }, inputs: { filter_value: "filter_value", col: "col" }, outputs: { changeHeaderFilter: "changeHeaderFilter" }, decls: 9, vars: 4, consts: [[1, "header_filter_op"], [3, "col", "changeEmptyOperator", "changeOperator"], ["op_filter", ""], ["class", "header_filter", 4, "ngIf"], [1, "header_filter"], ["type", "date", 3, "changePicker"], ["madate_picker", ""], [1, "header_filter", 3, "ngModel", "ngModelChange", "keyup"]], template: function DataGridHeadFilterComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "table");
                i0.ɵɵelementStart(1, "tr");
                i0.ɵɵelementStart(2, "td", 0);
                i0.ɵɵelementStart(3, "ma-data-grid-op-filter", 1, 2);
                i0.ɵɵlistener("changeEmptyOperator", function DataGridHeadFilterComponent_Template_ma_data_grid_op_filter_changeEmptyOperator_3_listener() { return ctx._changeEmptyOperator(); })("changeOperator", function DataGridHeadFilterComponent_Template_ma_data_grid_op_filter_changeOperator_3_listener($event) { return ctx._changeOperator($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(5, DataGridHeadFilterComponent_td_5_Template, 2, 1, "td", 3);
                i0.ɵɵelementStart(6, "td", 4);
                i0.ɵɵelementStart(7, "ma-data-grid-datepicker", 5, 6);
                i0.ɵɵlistener("changePicker", function DataGridHeadFilterComponent_Template_ma_data_grid_datepicker_changePicker_7_listener($event) { return ctx._changeDate($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("col", ctx.col);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.col.dataType != "date" && ctx.col.dataType != "boolean" && (!ctx.col.headFilter || ctx.col.headFilter.length == 0));
                i0.ɵɵadvance(1);
                i0.ɵɵstyleMap(ctx.astuce_datapicker);
            }
        }, directives: [DataGridOpFilterComponent, i1.NgIf, DataGridPickerDateComponent, i1$1.DefaultValueAccessor, i1$1.NgControlStatus, i1$1.NgModel], styles: ["input.header_filter[_ngcontent-%COMP%]{background-color:#e8f5f8;border:1px inset #9e9e9e;height:1.2rem;margin:0 0 0 -5px}  .ma-data-grid-datepicker{height:1.2rem;max-height:1.2rem}td.header_filter[_ngcontent-%COMP%]{padding:1px 1px 1px 5px}td.header_filter_op[_ngcontent-%COMP%]{padding:1px 1px 1px 0}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DataGridHeadFilterComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ma-data-grid-head-filter',
                        templateUrl: './data-grid-head-filter.component.html',
                        styleUrls: ['./data-grid-head-filter.component.css']
                    }]
            }], function () { return []; }, { filter_value: [{
                    type: i0.Input
                }], col: [{
                    type: i0.Input
                }], changeHeaderFilter: [{
                    type: i0.Output
                }], op_filter: [{
                    type: i0.ViewChild,
                    args: [DataGridOpFilterComponent, { static: true }]
                }], madate_picker: [{
                    type: i0.ViewChild,
                    args: [DataGridPickerDateComponent, { static: true }]
                }] });
    })();

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    function MaGridFilterComponent_div_10_label_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 12);
            i0.ɵɵtext(1, "|");
            i0.ɵɵelementEnd();
        }
    }
    function MaGridFilterComponent_div_10_label_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "label");
            i0.ɵɵelementStart(1, "input", 9);
            i0.ɵɵlistener("click", function MaGridFilterComponent_div_10_label_1_Template_input_click_1_listener() { i0.ɵɵrestoreView(_r8_1); var col_r1 = i0.ɵɵnextContext().$implicit; var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.clickChekbox(col_r1); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "span", 10);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, MaGridFilterComponent_div_10_label_1_span_4_Template, 2, 0, "span", 11);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r9 = i0.ɵɵnextContext();
            var col_r1 = ctx_r9.$implicit;
            var isLast_r2 = ctx_r9.last;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("checked", col_r1.extFilterSelected);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(col_r1.title);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !isLast_r2);
        }
    }
    function MaGridFilterComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 7);
            i0.ɵɵtemplate(1, MaGridFilterComponent_div_10_label_1_Template, 5, 3, "label", 8);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var col_r1 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", col_r1.extFilter === true);
        }
    }
    var MaGridFilterComponent = /** @class */ (function () {
        function MaGridFilterComponent() {
            this.placeholder = 'Enter filter';
            this.customCSS = "";
            this.searchValueChange = new i0.EventEmitter();
            this.columns = [];
            this.filterChange = new i0.EventEmitter();
            this.input_filter = "if_" + Math.floor((Math.random() * 100000));
            this.filters = [];
            this.selectedFields = [];
        }
        MaGridFilterComponent.prototype.ngOnChanges = function (changes) {
            this._init();
            // binding : datagrid -> datagrid-filter
            // Le datagrid est en binding dans le 2 sens grace à [(searchValue)]="searchValue"
            // et le code qui suit
            if (changes.searchValue) {
                // console.log("changes.searchValue "+this.searchValue);
                $__namespace('#' + this.input_filter).val(changes.searchValue.currentValue);
            }
        };
        MaGridFilterComponent.prototype._init = function () {
            var e_1, _a;
            this.filters = [];
            this.selectedFields = [];
            try {
                for (var _b = __values(this.columns), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var col = _c.value;
                    if (col.extFilter === true) {
                        if (col.extFilterSelected) {
                            this.selectedFields.push(col.prop);
                        }
                        this.filters.push(Object.assign(col));
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.enableFocus();
            // console.log('filters =================================', this.filters, this.selectedFields)
        };
        MaGridFilterComponent.prototype.ngOnInit = function () {
            // console.log('ngOnInit =================================')
            this._init();
            M.updateTextFields();
        };
        MaGridFilterComponent.prototype.clickChekbox = function (col) {
            // console.log(col);
            col.extFilterSelected = !col.extFilterSelected;
            this._init();
            this.updateFilter(null);
        };
        MaGridFilterComponent.prototype.enableFocus = function () {
            if (this.selectedFields.length > 0) {
                $__namespace('#' + this.input_filter).focus();
            }
            else {
                $__namespace('#' + this.input_filter).blur();
            }
        };
        MaGridFilterComponent.prototype.updateFilter = function (event) {
            // console.log('updateFilter =================================',event);
            var val = $__namespace('#' + this.input_filter).val(); //event.target.value.toLowerCase();
            // binding: datagrid-filter -> datagrid 
            // Le datagrid est en binding dans le 2 sens grace à [(searchValue)]="searchValue"
            // et le code qui suit
            this.searchValue = val;
            this.searchValueChange.emit(this.searchValue);
            var e = {
                text: val, fields: this.selectedFields
            };
            this.filterChange.emit(e);
        };
        return MaGridFilterComponent;
    }());
    MaGridFilterComponent.ɵfac = function MaGridFilterComponent_Factory(t) { return new (t || MaGridFilterComponent)(); };
    MaGridFilterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MaGridFilterComponent, selectors: [["ma-data-grid-filter"]], inputs: { searchValue: "searchValue", customCSS: "customCSS", columns: "columns" }, outputs: { searchValueChange: "searchValueChange", filterChange: "filterChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 11, vars: 6, consts: [[1, "row", "ma-grid-filter"], [1, "input-field", "col", "s3"], [1, "material-icons", "prefix", 3, "click"], ["type", "text", 1, "validate", 3, "id", "keyup"], ["for", "icon_prefix"], [1, "title_field"], ["class", "checkbox_field", 4, "ngFor", "ngForOf"], [1, "checkbox_field"], [4, "ngIf"], ["type", "checkbox", 3, "checked", "click"], [1, "checkbox_title"], ["class", "checkbox_separator", 4, "ngIf"], [1, "checkbox_separator"]], template: function MaGridFilterComponent_Template(rf, ctx) {
            if (rf & 1) {
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
            }
            if (rf & 2) {
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("id", ctx.input_filter);
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate(ctx.placeholder);
                i0.ɵɵadvance(1);
                i0.ɵɵclassMapInterpolate1("col s8 ", ctx.customCSS, "ma-grid-filter-checkboxes");
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngForOf", ctx.filters);
            }
        }, directives: [i1.NgForOf, i1.NgIf], styles: ["[_nghost-%COMP%]{--border-size:0px;--color-border:#667;--color-defaut:#667}.ma-grid-filter[_ngcontent-%COMP%]   .ma-grid-filter-checkboxes[_ngcontent-%COMP%]{border:1px solid var(--color-border);color:var(--color-defaut);margin-right:10px}.ma-grid-filter[_ngcontent-%COMP%]   .title_field[_ngcontent-%COMP%]{font-weight:500;margin-left:15px}.ma-grid-filter[_ngcontent-%COMP%]   .checkbox_field[_ngcontent-%COMP%]{display:inline;margin-left:5px;margin-right:5px}.ma-grid-filter[_ngcontent-%COMP%]   span.checkbox_title[_ngcontent-%COMP%]{min-width:70px;padding-left:22px}.ma-grid-filter[_ngcontent-%COMP%]   span.checkbox_title[_ngcontent-%COMP%]:after{content:\"|\"}.ma-grid-filter[_ngcontent-%COMP%]   span.checkbox_separator[_ngcontent-%COMP%]{font-size:large;margin-left:5px}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MaGridFilterComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ma-data-grid-filter',
                        templateUrl: './ma-grid-filter.component.html',
                        styleUrls: ['./ma-grid-filter.component.css']
                    }]
            }], function () { return []; }, { searchValue: [{
                    type: i0.Input
                }], customCSS: [{
                    type: i0.Input
                }], searchValueChange: [{
                    type: i0.Output
                }], columns: [{
                    type: i0.Input
                }], filterChange: [{
                    type: i0.Output
                }] });
    })();

    var MaGridCellTemplateDirective = /** @class */ (function () {
        function MaGridCellTemplateDirective(viewContainerRef) {
            this.viewContainerRef = viewContainerRef;
        }
        return MaGridCellTemplateDirective;
    }());
    MaGridCellTemplateDirective.ɵfac = function MaGridCellTemplateDirective_Factory(t) { return new (t || MaGridCellTemplateDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
    MaGridCellTemplateDirective.ɵdir = i0.ɵɵdefineDirective({ type: MaGridCellTemplateDirective, selectors: [["", "libMaGridCellTemplate", ""]] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MaGridCellTemplateDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[libMaGridCellTemplate]'
                    }]
            }], function () { return [{ type: i0.ViewContainerRef }]; }, null);
    })();

    var DataGridCellItemComponent = /** @class */ (function () {
        function DataGridCellItemComponent(component, data) {
            this.component = component;
            this.data = data;
        }
        return DataGridCellItemComponent;
    }());

    function DataGridTemplateCellComponent_ng_template_0_Template(rf, ctx) { }
    var DataGridTemplateCellComponent = /** @class */ (function () {
        function DataGridTemplateCellComponent(componentFactoryResolver) {
            this.componentFactoryResolver = componentFactoryResolver;
            // console.log('DataGridTemplateCellComponent c',this.template);
        }
        DataGridTemplateCellComponent.prototype.ngOnInit = function () {
            // 
            if (!this.template) {
                return;
            }
            var component = new DataGridCellItemComponent(this.template, this.data);
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(component.component);
            if (!this.libMaGridCellTemplate) {
                return;
            }
            var viewContainerRef = this.libMaGridCellTemplate.viewContainerRef;
            var componentRef = viewContainerRef.createComponent(componentFactory);
            componentRef.instance.data = component.data;
        };
        return DataGridTemplateCellComponent;
    }());
    DataGridTemplateCellComponent.ɵfac = function DataGridTemplateCellComponent_Factory(t) { return new (t || DataGridTemplateCellComponent)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver)); };
    DataGridTemplateCellComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DataGridTemplateCellComponent, selectors: [["ma-data-grid-template-cell-t1"]], viewQuery: function DataGridTemplateCellComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵstaticViewQuery(MaGridCellTemplateDirective, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.libMaGridCellTemplate = _t.first);
            }
        }, inputs: { data: "data", template: "template" }, decls: 1, vars: 0, consts: [["libMaGridCellTemplate", ""]], template: function DataGridTemplateCellComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, DataGridTemplateCellComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
            }
        }, directives: [MaGridCellTemplateDirective], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DataGridTemplateCellComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ma-data-grid-template-cell-t1',
                        template: '<ng-template libMaGridCellTemplate></ng-template>'
                    }]
            }], function () { return [{ type: i0.ComponentFactoryResolver }]; }, { data: [{
                    type: i0.Input
                }], template: [{
                    type: i0.Input
                }], libMaGridCellTemplate: [{
                    type: i0.ViewChild,
                    args: [MaGridCellTemplateDirective, { static: true }]
                }] });
    })();

    var DataGridCellBooleanComponent = /** @class */ (function () {
        function DataGridCellBooleanComponent() {
            this.icon = '';
        }
        DataGridCellBooleanComponent.prototype.ngOnInit = function () {
            // console.log(this.data[this.col.prop]);
            if (this.data[this.col.prop] === true) {
                this.icon = 'check_box';
            }
            else if (this.data[this.col.prop] === false) {
                this.icon = 'check_box_outline_blank';
            }
        };
        return DataGridCellBooleanComponent;
    }());
    DataGridCellBooleanComponent.ɵfac = function DataGridCellBooleanComponent_Factory(t) { return new (t || DataGridCellBooleanComponent)(); };
    DataGridCellBooleanComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DataGridCellBooleanComponent, selectors: [["ma-data-grid-cell-boolean"]], inputs: { data: "data", col: "col" }, decls: 3, vars: 1, consts: [[2, "text-align", "center"], [1, "tiny", "material-icons"]], template: function DataGridCellBooleanComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "i", 1);
                i0.ɵɵtext(2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate(ctx.icon);
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DataGridCellBooleanComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ma-data-grid-cell-boolean',
                        template: '<div style="text-align: center"><i class="tiny material-icons">{{icon}}</i></div>'
                    }]
            }], function () { return []; }, { data: [{
                    type: i0.Input
                }], col: [{
                    type: i0.Input
                }] });
    })();

    var DataGridPipePipe = /** @class */ (function () {
        function DataGridPipePipe() {
        }
        DataGridPipePipe.prototype.transform = function (value, row, col) {
            if (col.pipe) {
                return col.pipe(value, row, col);
            }
            return value;
        };
        return DataGridPipePipe;
    }());
    DataGridPipePipe.ɵfac = function DataGridPipePipe_Factory(t) { return new (t || DataGridPipePipe)(); };
    DataGridPipePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "maDataGridPipe", type: DataGridPipePipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DataGridPipePipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'maDataGridPipe'
                    }]
            }], null, null);
    })();

    function MaDataGridComponent_ma_data_grid_filter_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r12_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "ma-data-grid-filter", 15, 16);
            i0.ɵɵlistener("searchValueChange", function MaDataGridComponent_ma_data_grid_filter_0_Template_ma_data_grid_filter_searchValueChange_0_listener($event) { i0.ɵɵrestoreView(_r12_1); var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.searchValue = $event; })("filterChange", function MaDataGridComponent_ma_data_grid_filter_0_Template_ma_data_grid_filter_filterChange_0_listener($event) { i0.ɵɵrestoreView(_r12_1); var ctx_r13 = i0.ɵɵnextContext(); return ctx_r13._filterChange($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("customCSS", ctx_r0.customCSS)("searchValue", ctx_r0.searchValue)("columns", ctx_r0.columns);
        }
    }
    function MaDataGridComponent_td_5_span_2_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 21);
            i0.ɵɵtext(1, "swap_vert");
            i0.ɵɵelementEnd();
        }
    }
    function MaDataGridComponent_td_5_span_2_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 21);
            i0.ɵɵtext(1, "arrow_drop_down");
            i0.ɵɵelementEnd();
        }
    }
    function MaDataGridComponent_td_5_span_2_span_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 21);
            i0.ɵɵtext(1, "arrow_drop_up");
            i0.ɵɵelementEnd();
        }
    }
    function MaDataGridComponent_td_5_span_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r22_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span", 19);
            i0.ɵɵlistener("click", function MaDataGridComponent_td_5_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r22_1); var col_r14 = i0.ɵɵnextContext().$implicit; var ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.sortBy(col_r14); });
            i0.ɵɵtemplate(1, MaDataGridComponent_td_5_span_2_span_1_Template, 2, 0, "span", 20);
            i0.ɵɵtemplate(2, MaDataGridComponent_td_5_span_2_span_2_Template, 2, 0, "span", 20);
            i0.ɵɵtemplate(3, MaDataGridComponent_td_5_span_2_span_3_Template, 2, 0, "span", 20);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var col_r14 = i0.ɵɵnextContext().$implicit;
            var ctx_r16 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r16.sortedField.field != col_r14.prop);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r16.sortedField.field === col_r14.prop && ctx_r16.sortedField.reverse);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r16.sortedField.field === col_r14.prop && !ctx_r16.sortedField.reverse);
        }
    }
    var _c0$2 = function (a0) { return { grid_cell_first: a0 }; };
    function MaDataGridComponent_td_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 17);
            i0.ɵɵtext(1);
            i0.ɵɵtemplate(2, MaDataGridComponent_td_5_span_2_Template, 4, 3, "span", 18);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var col_r14 = ctx.$implicit;
            var i_r15 = ctx.index;
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵclassMapInterpolate2("", ctx_r1.customCSS, "grid_cell ", ctx_r1.customCSS, "grid_cell_title");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0$2, i_r15 == 0));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", col_r14.title, " ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", col_r14.isRowNumber !== true && col_r14.sorted === true);
        }
    }
    function MaDataGridComponent_tr_6_td_1_ma_data_grid_head_filter_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r30_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "ma-data-grid-head-filter", 23, 24);
            i0.ɵɵlistener("changeHeaderFilter", function MaDataGridComponent_tr_6_td_1_ma_data_grid_head_filter_1_Template_ma_data_grid_head_filter_changeHeaderFilter_0_listener($event) { i0.ɵɵrestoreView(_r30_1); var ctx_r29 = i0.ɵɵnextContext(3); return ctx_r29._changeHeaderFilter($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var col_r25 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵproperty("col", col_r25);
        }
    }
    function MaDataGridComponent_tr_6_td_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 17);
            i0.ɵɵtemplate(1, MaDataGridComponent_tr_6_td_1_ma_data_grid_head_filter_1_Template, 2, 1, "ma-data-grid-head-filter", 22);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var col_r25 = ctx.$implicit;
            var i_r26 = ctx.index;
            var ctx_r24 = i0.ɵɵnextContext(2);
            i0.ɵɵclassMapInterpolate2("", ctx_r24.customCSS, "grid_cell ", ctx_r24.customCSS, "grid_cell_title");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c0$2, i_r26 == 0));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", col_r25.dataType || col_r25.headFilter);
        }
    }
    function MaDataGridComponent_tr_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tr");
            i0.ɵɵtemplate(1, MaDataGridComponent_tr_6_td_1_Template, 2, 8, "td", 4);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵclassMapInterpolate1("", ctx_r2.customCSS, "grid_row");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r2.columns);
        }
    }
    function MaDataGridComponent_tr_7_td_1_datagrid_cell_element_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "datagrid-cell-element");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var i_r35 = i0.ɵɵnextContext(2).index;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i_r35);
        }
    }
    function MaDataGridComponent_tr_7_td_1_datagrid_cell_element_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "datagrid-cell-element");
            i0.ɵɵelement(1, "span", 29);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var col_r38 = i0.ɵɵnextContext().$implicit;
            var row_r32 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("innerHTML", row_r32[col_r38.prop], i0.ɵɵsanitizeHtml);
        }
    }
    function MaDataGridComponent_tr_7_td_1_datagrid_cell_element_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "datagrid-cell-element");
            i0.ɵɵelement(1, "ma-data-grid-template-cell-t1", 30);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var col_r38 = i0.ɵɵnextContext().$implicit;
            var row_r32 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("template", col_r38.useTemplate)("data", row_r32);
        }
    }
    function MaDataGridComponent_tr_7_td_1_datagrid_cell_element_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "datagrid-cell-element");
            i0.ɵɵelement(1, "ma-data-grid-cell-boolean", 31);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var col_r38 = i0.ɵɵnextContext().$implicit;
            var row_r32 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("template", col_r38.useTemplate)("col", col_r38)("data", row_r32);
        }
    }
    function MaDataGridComponent_tr_7_td_1_datagrid_cell_element_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "datagrid-cell-element");
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "maDataGridPipe");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var col_r38 = i0.ɵɵnextContext().$implicit;
            var row_r32 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(2, 1, row_r32[col_r38.prop], row_r32, col_r38));
        }
    }
    var _c1$1 = function (a0, a1, a2) { return { "grid_cell_selected": a0, "grid_cell_end": a1, "grid_cell_first": a2 }; };
    function MaDataGridComponent_tr_7_td_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r59_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "td", 25);
            i0.ɵɵlistener("click", function MaDataGridComponent_tr_7_td_1_Template_td_click_0_listener() { i0.ɵɵrestoreView(_r59_1); var col_r38 = ctx.$implicit; var ctx_r58 = i0.ɵɵnextContext(); var i_r35 = ctx_r58.index; var row_r32 = ctx_r58.$implicit; var ctx_r57 = i0.ɵɵnextContext(); return ctx_r57.SelectCell(i_r35, row_r32, col_r38); });
            i0.ɵɵelementStart(1, "datagrid-cell-container", 26);
            i0.ɵɵtemplate(2, MaDataGridComponent_tr_7_td_1_datagrid_cell_element_2_Template, 2, 1, "datagrid-cell-element", 27);
            i0.ɵɵtemplate(3, MaDataGridComponent_tr_7_td_1_datagrid_cell_element_3_Template, 2, 1, "datagrid-cell-element", 27);
            i0.ɵɵtemplate(4, MaDataGridComponent_tr_7_td_1_datagrid_cell_element_4_Template, 2, 2, "datagrid-cell-element", 27);
            i0.ɵɵtemplate(5, MaDataGridComponent_tr_7_td_1_datagrid_cell_element_5_Template, 2, 3, "datagrid-cell-element", 27);
            i0.ɵɵtemplate(6, MaDataGridComponent_tr_7_td_1_datagrid_cell_element_6_Template, 3, 5, "datagrid-cell-element", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var col_r38 = ctx.$implicit;
            var isFirstCol_r41 = ctx.first;
            var isLastCol_r42 = ctx.last;
            var i_r35 = i0.ɵɵnextContext().index;
            var ctx_r37 = i0.ɵɵnextContext();
            i0.ɵɵclassMapInterpolate2("", ctx_r37.customCSS, "grid_cell ", col_r38.cssClass, "");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(10, _c1$1, i_r35 == ctx_r37.row_selected && col_r38.prop == ctx_r37.cell_selected, isLastCol_r42, isFirstCol_r41));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitch", true);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", col_r38.isRowNumber === true);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", col_r38.isRowHTML === true);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", col_r38.useTemplate != null);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", col_r38.dataType == "boolean");
        }
    }
    var _c2 = function (a0, a1, a2, a3, a4) { return { "grid_row_selected": a0, "CSSclassEven": a1, "CSSclassOdd": a2, "grid_row_first": a3, "grid_row_end": a4 }; };
    function MaDataGridComponent_tr_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r62_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "tr", 25);
            i0.ɵɵlistener("click", function MaDataGridComponent_tr_7_Template_tr_click_0_listener() { i0.ɵɵrestoreView(_r62_1); var i_r35 = ctx.index; var row_r32 = ctx.$implicit; var ctx_r61 = i0.ɵɵnextContext(); return ctx_r61.SelectRow(i_r35, row_r32); });
            i0.ɵɵtemplate(1, MaDataGridComponent_tr_7_td_1_Template, 7, 14, "td", 6);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var isLastRow_r33 = ctx.last;
            var pair_r34 = ctx.even;
            var i_r35 = ctx.index;
            var isFirstRow_r36 = ctx.first;
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵclassMapInterpolate1("", ctx_r3.customCSS, "grid_row");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction5(5, _c2, i_r35 == ctx_r3.row_selected && !ctx_r3.cell_selected, pair_r34, !pair_r34, isFirstRow_r36, isLastRow_r33));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r3.columns);
        }
    }
    function MaDataGridComponent_span_12_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1, "s");
            i0.ɵɵelementEnd();
        }
    }
    var _c3 = function (a0, a1) { return { "disabled": a0, "": a1 }; };
    function MaDataGridComponent_li_15_Template(rf, ctx) {
        if (rf & 1) {
            var _r64_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 25);
            i0.ɵɵlistener("click", function MaDataGridComponent_li_15_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r64_1); var ctx_r63 = i0.ɵɵnextContext(); return ctx_r63.FastDecrementPage(); });
            i0.ɵɵelementStart(1, "a", 32);
            i0.ɵɵelementStart(2, "i", 33);
            i0.ɵɵtext(3, "fast_rewind");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c3, ctx_r5.current_page == 0, ctx_r5.current_page != 0));
        }
    }
    function MaDataGridComponent_li_16_Template(rf, ctx) {
        if (rf & 1) {
            var _r66_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 25);
            i0.ɵɵlistener("click", function MaDataGridComponent_li_16_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r66_1); var ctx_r65 = i0.ɵɵnextContext(); return ctx_r65.DecrementPage(); });
            i0.ɵɵelementStart(1, "a", 32);
            i0.ɵɵelementStart(2, "i", 33);
            i0.ɵɵtext(3, "chevron_left");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c3, ctx_r6.current_page == 0, ctx_r6.current_page != 0));
        }
    }
    var _c4 = function (a0, a1) { return { "active": a0, "": a1 }; };
    function MaDataGridComponent_li_17_Template(rf, ctx) {
        if (rf & 1) {
            var _r69_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 25);
            i0.ɵɵlistener("click", function MaDataGridComponent_li_17_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r69_1); var n_page_r67 = ctx.$implicit; var ctx_r68 = i0.ɵɵnextContext(); return ctx_r68._changePage(n_page_r67); });
            i0.ɵɵelementStart(1, "a", 34);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var n_page_r67 = ctx.$implicit;
            var ctx_r7 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c4, ctx_r7.current_page == n_page_r67, ctx_r7.current_page != n_page_r67));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(n_page_r67 + 1);
        }
    }
    function MaDataGridComponent_li_18_Template(rf, ctx) {
        if (rf & 1) {
            var _r71_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 25);
            i0.ɵɵlistener("click", function MaDataGridComponent_li_18_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r71_1); var ctx_r70 = i0.ɵɵnextContext(); return ctx_r70.IncrementPage(); });
            i0.ɵɵelementStart(1, "a", 32);
            i0.ɵɵelementStart(2, "i", 33);
            i0.ɵɵtext(3, "chevron_right");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c3, ctx_r8.current_page == ctx_r8.max_page, ctx_r8.current_page != ctx_r8.max_page));
        }
    }
    function MaDataGridComponent_li_19_Template(rf, ctx) {
        if (rf & 1) {
            var _r73_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 25);
            i0.ɵɵlistener("click", function MaDataGridComponent_li_19_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r73_1); var ctx_r72 = i0.ɵɵnextContext(); return ctx_r72.FastIncrementPage(); });
            i0.ɵɵelementStart(1, "a", 32);
            i0.ɵɵelementStart(2, "i", 33);
            i0.ɵɵtext(3, "fast_forward");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r9 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c3, ctx_r9.current_page == ctx_r9.max_page, ctx_r9.current_page != ctx_r9.max_page));
        }
    }
    // import { PipeLengthPipe } from 'src/app/pipes/pipe-length.pipe';
    var MaDataGridComponent = /** @class */ (function () {
        function MaDataGridComponent() {
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
            this.change = new i0.EventEmitter();
            this.select = new i0.EventEmitter();
            this.extFilterChange = new i0.EventEmitter();
            this.filterChange = new i0.EventEmitter();
            this.changePage = new i0.EventEmitter();
            this.sort = new i0.EventEmitter();
            this.canSelectChange = new i0.EventEmitter();
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
        MaDataGridComponent.prototype.resetSelection = function () {
            this.cell_selected = -1;
            this.row_selected = -1;
        };
        MaDataGridComponent.prototype.ngOnChanges = function (changes) {
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
        };
        MaDataGridComponent.prototype.IncrementPage = function () {
            this._changePage(this.current_page + 1, this.temp);
        };
        MaDataGridComponent.prototype.DecrementPage = function () {
            this._changePage(this.current_page - 1, this.temp);
        };
        MaDataGridComponent.prototype.FastIncrementPage = function () {
            var p = this.current_page + 5; //Math.round(this.max_page / 50);
            this._changePage(p, this.temp);
        };
        MaDataGridComponent.prototype.FastDecrementPage = function () {
            var p = this.current_page - 5; //Math.round(this.max_page / 50);;
            this._changePage(p, this.temp);
        };
        MaDataGridComponent.prototype._changePage = function (n_page, rows, force) {
            if (!rows)
                rows = this.temp;
            //
            if (this.pagination == false) {
                if (force === true) {
                    this.temp = filterMultipleConditions.MaFilter.FilterByConditions(this.conditions, rows);
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
                for (var i = 0; rows && i < this.limit && i < this.count && i < rows.length; i++) {
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
                for (var i = 0; rows && i < this.limit && i < rows.length; i++) {
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
            var start_page = this.current_page - Math.round(this.max_nb_page / 2);
            if (start_page < 0)
                start_page = 0;
            for (var p = start_page, nbp = 0; rows && p < this.count / this.limit && nbp < this.max_nb_page; nbp++, p++) {
                this.pages.push(p);
            }
        };
        MaDataGridComponent.prototype.ngOnInit = function () {
            //this.pipeLength.transform("bbb");
        };
        MaDataGridComponent.prototype._sortData = function (rows) {
            var _this = this;
            var sf = this.sortedField.field;
            //console.log('_sortData',this.sortedField)
            return rows.sort(function (a, b) {
                var r;
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
                if (_this.sortedField.reverse) {
                    return r * -1;
                }
                return r;
            });
        };
        MaDataGridComponent.prototype.sortBy = function (col) {
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
        };
        MaDataGridComponent.prototype.SelectRow = function (index, row) {
            if (this.canSelect === "row") {
                this.row_selected = index;
                this.cell_selected = null;
                var trueIndex = this.current_page * this.limit + index;
                //let data = this.rows[trueIndex];
                // console.log("SelectRow trueIndex", trueIndex);
                this.select.emit({ index: trueIndex, row: row });
            }
        };
        MaDataGridComponent.prototype.SelectCell = function (index, row, col) {
            // console.log("SelectCell Select", index, row, col);
            if (this.canSelect === "cell") {
                this.row_selected = index;
                this.cell_selected = col.prop;
                // console.log("SelectCell Select", index, row, col);
                var trueIndex = this.current_page * this.limit + index;
                //console.log("Data Grid trueIndex", trueIndex);
                this.select.emit({ index: trueIndex, row: row, prop: col.prop, value: row[col.prop], });
            }
        };
        MaDataGridComponent.prototype._filterChange = function (e) {
            this.extFilterChange.emit(e);
        };
        MaDataGridComponent.prototype._changeHeaderFilter = function (e) {
            var _this = this;
            clearTimeout(this.timeout);
            this.timeout = setTimeout(function () {
                _this._delayChangeHeaderFilter(e);
            }, 500);
        };
        MaDataGridComponent.prototype._delayChangeHeaderFilter = function (e) {
            var conditions = [];
            this.headerfilter.forEach(function (item) {
                //item.filter_value;
                var condition = item.getFilter();
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
        };
        return MaDataGridComponent;
    }());
    MaDataGridComponent.ɵfac = function MaDataGridComponent_Factory(t) { return new (t || MaDataGridComponent)(); };
    MaDataGridComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MaDataGridComponent, selectors: [["ma-data-grid"]], viewQuery: function MaDataGridComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵstaticViewQuery(MaGridFilterComponent, true);
                i0.ɵɵviewQuery(DataGridHeadFilterComponent, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.gridfilter = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.headerfilter = _t);
            }
        }, inputs: { columns: "columns", limit: "limit", canSelect: "canSelect", extFilter: "extFilter", headFilter: "headFilter", pagination: "pagination", page: "page", count: "count", customCSS: "customCSS", rows: "rows" }, outputs: { change: "change", select: "select", extFilterChange: "extFilterChange", filterChange: "filterChange", changePage: "changePage", sort: "sort", canSelectChange: "canSelectChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 20, vars: 14, consts: [[3, "customCSS", "searchValue", "columns", "searchValueChange", "filterChange", 4, "ngIf"], [1, "datagrid_page"], [1, "scroller"], [1, "grid_row"], [3, "class", "ngClass", 4, "ngFor", "ngForOf"], [3, "class", 4, "ngIf"], [3, "class", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "row", 2, "padding-top", "5px"], [1, "col", "s3"], [1, "page_number"], [4, "ngIf"], [1, "col", "s8", "div_pagination"], [1, "pagination"], [3, "ngClass", "click", 4, "ngIf"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "customCSS", "searchValue", "columns", "searchValueChange", "filterChange"], ["gridfilter", ""], [3, "ngClass"], [3, "click", 4, "ngIf"], [3, "click"], ["class", "grid_sort tiny material-icons", 4, "ngIf"], [1, "grid_sort", "tiny", "material-icons"], [3, "col", "changeHeaderFilter", 4, "ngIf"], [3, "col", "changeHeaderFilter"], ["headerfilter", ""], [3, "ngClass", "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "innerHTML"], [3, "template", "data"], [3, "template", "col", "data"], [1, "pointer"], [1, "material-icons", "small"], [1, "a_pagination", "small"]], template: function MaDataGridComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, MaDataGridComponent_ma_data_grid_filter_0_Template, 2, 3, "ma-data-grid-filter", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵelementStart(3, "table");
                i0.ɵɵelementStart(4, "tr", 3);
                i0.ɵɵtemplate(5, MaDataGridComponent_td_5_Template, 3, 9, "td", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(6, MaDataGridComponent_tr_6_Template, 2, 4, "tr", 5);
                i0.ɵɵtemplate(7, MaDataGridComponent_tr_7_Template, 2, 11, "tr", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "div", 7);
                i0.ɵɵelementStart(9, "div", 8);
                i0.ɵɵelementStart(10, "div", 9);
                i0.ɵɵtext(11);
                i0.ɵɵtemplate(12, MaDataGridComponent_span_12_Template, 2, 0, "span", 10);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "div", 11);
                i0.ɵɵelementStart(14, "ul", 12);
                i0.ɵɵtemplate(15, MaDataGridComponent_li_15_Template, 4, 4, "li", 13);
                i0.ɵɵtemplate(16, MaDataGridComponent_li_16_Template, 4, 4, "li", 13);
                i0.ɵɵtemplate(17, MaDataGridComponent_li_17_Template, 3, 5, "li", 14);
                i0.ɵɵtemplate(18, MaDataGridComponent_li_18_Template, 4, 4, "li", 13);
                i0.ɵɵtemplate(19, MaDataGridComponent_li_19_Template, 4, 4, "li", 13);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.extFilter);
                i0.ɵɵadvance(3);
                i0.ɵɵclassMapInterpolate1("", ctx.customCSS, "grid_table");
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngForOf", ctx.columns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.headFilter);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.rows_displayed);
                i0.ɵɵadvance(4);
                i0.ɵɵtextInterpolate1("#", ctx.nb_record, " record");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.nb_record > 1);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", ctx.max_page >= 9);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.nb_record > 0);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.pages);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.nb_record > 0);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.max_page >= 9);
            }
        }, directives: [i1.NgIf, i1.NgForOf, MaGridFilterComponent, i1.NgClass, DataGridHeadFilterComponent, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, DataGridTemplateCellComponent, DataGridCellBooleanComponent], pipes: [DataGridPipePipe], styles: ["[_nghost-%COMP%]{--color-border:#667;--color-defaut:#667}.datagrid_page[_ngcontent-%COMP%]   .CSSclassOdd[_ngcontent-%COMP%]{background-color:#ddd}.datagrid_page[_ngcontent-%COMP%]{height:100%;width:100%}.div_pagination[_ngcontent-%COMP%]   .pointer[_ngcontent-%COMP%]{cursor:default}.div_pagination[_ngcontent-%COMP%]   .page_number[_ngcontent-%COMP%]{color:var(--color-defaut);font-size:1rem;padding:0 10px}.datagrid_page[_ngcontent-%COMP%]   .div_pagination[_ngcontent-%COMP%]{display:-ms-inline-grid;display:inline-grid;justify-content:flex-end}.a_pagination[_ngcontent-%COMP%]:hover, .div_pagination[_ngcontent-%COMP%]   .a_pagination[_ngcontent-%COMP%]{color:var(--color-border);display:inline-block;font-size:1rem;line-height:30px;padding:0 10px;text-decoration:none}.datagrid_page[_ngcontent-%COMP%]   .scroller[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center;background-color:#fefefe;overflow:auto;scrollbar-color:var(--color-border) #fefefe;scrollbar-width:auto;width:100%}.grid_table[_ngcontent-%COMP%]   .grid_row_selected[_ngcontent-%COMP%]{background-color:#667;color:#ddd}.grid_table[_ngcontent-%COMP%]   .grid_sort[_ngcontent-%COMP%]{cursor:pointer}.datagrid_page[_ngcontent-%COMP%]   .grid_table[_ngcontent-%COMP%]{width:100%}.grid_table[_ngcontent-%COMP%]   .grid_cell_title[_ngcontent-%COMP%]{border-top:1px solid var(--color-border);color:var(--color-defaut);font-weight:700;text-align:center}.grid_table[_ngcontent-%COMP%]   .grid_cell_selected[_ngcontent-%COMP%]{background-color:#667;color:#ddd}.grid_table[_ngcontent-%COMP%]   .grid_cell_first[_ngcontent-%COMP%]{border-left:10px solid var(--color-border)}.grid_table[_ngcontent-%COMP%]   .grid_cell_end[_ngcontent-%COMP%]{border-right:0 solid var(--color-border)}.grid_table[_ngcontent-%COMP%]   .grid_cell[_ngcontent-%COMP%]{border-right:1px solid var(--color-border)}.grid_table[_ngcontent-%COMP%]   .grid_row_first[_ngcontent-%COMP%]{border-bottom:1px solid var(--color-border)}.grid_table[_ngcontent-%COMP%]   .grid_row_last[_ngcontent-%COMP%]{border-bottom:0 solid var(--color-border)}.grid_table[_ngcontent-%COMP%]   .grid_row[_ngcontent-%COMP%]{border-bottom:1px solid var(--color-border)}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MaDataGridComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ma-data-grid',
                        //providers: [PipeLengthPipe],
                        templateUrl: './ma-data-grid.component.html',
                        styleUrls: ['./ma-data-grid.component.css'],
                    }]
            }], function () { return []; }, { columns: [{
                    type: i0.Input
                }], limit: [{
                    type: i0.Input
                }], canSelect: [{
                    type: i0.Input
                }], extFilter: [{
                    type: i0.Input
                }], headFilter: [{
                    type: i0.Input
                }], pagination: [{
                    type: i0.Input
                }], page: [{
                    type: i0.Input
                }], count: [{
                    type: i0.Input
                }], customCSS: [{
                    type: i0.Input
                }], rows: [{
                    type: i0.Input
                }], change: [{
                    type: i0.Output
                }], select: [{
                    type: i0.Output
                }], extFilterChange: [{
                    type: i0.Output
                }], filterChange: [{
                    type: i0.Output
                }], changePage: [{
                    type: i0.Output
                }], sort: [{
                    type: i0.Output
                }], canSelectChange: [{
                    type: i0.Output
                }], gridfilter: [{
                    type: i0.ViewChild,
                    args: [MaGridFilterComponent, { static: true }]
                }], headerfilter: [{
                    type: i0.ViewChildren,
                    args: [DataGridHeadFilterComponent]
                }] });
    })();

    var MaAnchorGridCellDirective = /** @class */ (function () {
        function MaAnchorGridCellDirective(viewContainerRef) {
            this.viewContainerRef = viewContainerRef;
        }
        return MaAnchorGridCellDirective;
    }());
    MaAnchorGridCellDirective.ɵfac = function MaAnchorGridCellDirective_Factory(t) { return new (t || MaAnchorGridCellDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
    MaAnchorGridCellDirective.ɵdir = i0.ɵɵdefineDirective({ type: MaAnchorGridCellDirective, selectors: [["", "libMaAnchorGridCell", ""]] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MaAnchorGridCellDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[libMaAnchorGridCell]'
                    }]
            }], function () { return [{ type: i0.ViewContainerRef }]; }, null);
    })();

    var MaDataGridModule = /** @class */ (function () {
        function MaDataGridModule() {
        }
        return MaDataGridModule;
    }());
    MaDataGridModule.ɵmod = i0.ɵɵdefineNgModule({ type: MaDataGridModule });
    MaDataGridModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MaDataGridModule_Factory(t) { return new (t || MaDataGridModule)(); }, imports: [[
                i1.CommonModule,
                i1$1.FormsModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MaDataGridModule, { declarations: [MaDataGridComponent,
                MaAnchorGridCellDirective,
                DataGridTemplateCellComponent,
                DataGridPipePipe,
                MaGridFilterComponent,
                DataGridHeadFilterComponent,
                DataGridOpFilterComponent,
                DataGridPickerDateComponent,
                DataGridCellBooleanComponent,
                MaGridCellTemplateDirective], imports: [i1.CommonModule,
                i1$1.FormsModule], exports: [
                /* Ajouter CommonModule pour éviter les erreurs
                    Can't bind to 'ngClass' since it isn't a known property */
                MaDataGridComponent,
                MaGridFilterComponent
            ] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MaDataGridModule, [{
                type: i0.NgModule,
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
                            i1.CommonModule,
                            i1$1.FormsModule
                        ],
                        exports: [
                            /* Ajouter CommonModule pour éviter les erreurs
                                Can't bind to 'ngClass' since it isn't a known property */
                            MaDataGridComponent,
                            MaGridFilterComponent
                        ]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of ma-data-grid
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MaDataGridComponent = MaDataGridComponent;
    exports.MaDataGridModule = MaDataGridModule;
    exports.MaGridFilterComponent = MaGridFilterComponent;
    exports.options_header_boolean = options_header_boolean;
    exports.options_header_date = options_header_date;
    exports.options_header_number = options_header_number;
    exports.options_header_string = options_header_string;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=amn31-ma-data-grid.umd.js.map
