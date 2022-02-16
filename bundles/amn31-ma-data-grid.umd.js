(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('jquery'), require('materialize-css'), require('@amn31/filter-multiple-conditions'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('@amn31/ma-data-grid', ['exports', '@angular/core', 'jquery', 'materialize-css', '@amn31/filter-multiple-conditions', '@angular/common', '@angular/forms'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.amn31 = global.amn31 || {}, global.amn31['ma-data-grid'] = {}), global.ng.core, global.$, global.M, global.filterMultipleConditions, global.ng.common, global.ng.forms));
}(this, (function (exports, core, $, M, filterMultipleConditions, common, forms) { 'use strict';

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
    var options_header_bool = [{
            value: '1',
            operator: '=',
            label: 'true'
        }, {
            value: '0',
            operator: '=',
            label: 'false'
        }];
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

    var defaut_label = '';
    var DataGridOpFilterComponent = /** @class */ (function () {
        function DataGridOpFilterComponent() {
            this.value = '';
            this.changeOperator = new core.EventEmitter();
            this.changeEmptyOperator = new core.EventEmitter();
            this.options = null;
            this.multiple = false;
            this.isHTML = false;
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
                //this.elemToggle.nativeElement.style.position = 'absolute';
                this.elemToggle.nativeElement.style.display = 'block';
                var anchor = this.elemValue.nativeElement.parentElement;
                //this.elemToggle.nativeElement.style.top = ($(anchor).height()+$(anchor).offset().top)+'px';
                //this.elemToggle.nativeElement.style.left = $(anchor).offset().left+'px';
                setTimeout(function () {
                    $__namespace(document).on('click', onClickDocument);
                }, 500);
            }
            else {
                this.elemToggle.nativeElement.style.display = 'none';
                $__namespace(document).off('click', onClickDocument);
            }
        };
        DataGridOpFilterComponent.prototype.cloneOptions = function (opts) {
            if (opts == null) {
                return null;
            }
            var options = [];
            for (var i = 0; i < opts.length; i++) {
                options.push(Object.assign({}, opts[i]));
            }
            return options;
        };
        DataGridOpFilterComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.isHTML = this.col.isHTML;
            if (this.col.dataType == 'string') {
                this.options = this.cloneOptions(options_header_string);
            }
            if (this.col.dataType == 'boolean') {
                this.multiple = true;
                this.options = this.cloneOptions(options_header_boolean);
            }
            if (this.col.dataType == 'bool') {
                this.multiple = true;
                this.options = this.cloneOptions(options_header_bool);
            }
            if (this.col.dataType == 'number' || this.col.dataType == 'float') {
                this.options = this.cloneOptions(options_header_number);
            }
            if (this.col.dataType == 'date') {
                this.options = this.cloneOptions(options_header_date);
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
            // Pré-selection de l'operator
            if (!this.multiple && this.col.selectedFilter) {
                var selected = this.options.find(function (d) { return d.operator === _this.col.selectedFilter.operator; });
                if (selected) {
                    // console.log("SELECTED", this.col.prop, selected);
                    this.changeValue(selected, true);
                }
            }
            for (var i in this.options) {
                if (this.options[i].checked !== true)
                    this.options[i].checked = false;
            }
        };
        DataGridOpFilterComponent.prototype.setFirstChoice = function () {
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
            /* Changement de l'operateur dans la cas de valeurs multiples d'operateurs
                Ex: { value: "Apple", operator: "=", label: "Apple", checked: false } */
            //console.log("CHANGES VALUES", this.col.prop, opt)
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
                    var value = o.value.toString().replace('${1}', filter_value);
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
        DataGridOpFilterComponent.prototype.changeValue = function (opt, ignoreToggle) {
            /* Changement de l'operateur dans la cas de valeurs simple (un seul choix)
                Ex: { value: "%${1}%", operator: "like", label: "contains", checked: false } */
            // 
            // console.log("CHANGE VALUE", opt.operator, this.col.prop, opt)
            if (this.options.find(function (d) { return d.checked === true; })) {
                this.options.find(function (d) { return d.checked === true; }).checked = false;
            }
            opt.checked = !opt.checked;
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
        };
        DataGridOpFilterComponent.prototype._changeOperator = function () {
            // 
            console.log('EMIT OP', this.col.prop, this.options.find(function (d) { return d.checked === true; }), this.options);
            this.changeOperator.emit({
                prop: this.col,
            });
        };
        return DataGridOpFilterComponent;
    }());
    DataGridOpFilterComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ma-data-grid-op-filter',
                    template: "<!--\n<div class=\"red\">=</div>(onComplete)=\"onComplete($event)\"\n\n<app-ma-completion [data]=\"choices\" placeholder=\"\" value=\"defautValue\"  ></app-ma-completion>\n     <select dir=\"rtl\">\n    <option>Foo</option>    \n    <option>bar</option>\n    <option>to the right</option>\n</select>\n\n\n<div *ngIf=\"col.isRowNumber === true; then RowNumberBlock else dataBlock\"></div>\n<ng-template #RowNumberBlock>{{i}}</ng-template>\n<ng-template #dataBlock> {{u[col.prop] | dataGridPipe :u :c}}</ng-template>\n-->\n\n<div>\n\n    <div #elemValue (click)=\"toggleDiv()\" class=\"op_label\"><i *ngIf=\"label == ''\" class=\"tiny material-icons\">search</i>{{label}}\n    </div>\n    <!-- [style.left.px]=\"popupPosition.left\"  [style.top.px]=\"popupPosition.top\"-->\n    <div #elemToggle style=\"display: none; position: absolute; z-index: 20; max-height: 300px; overflow-y: auto; background-color: aliceblue;border: 1px solid #9e9e9e;\">\n        <div *ngFor=\"let opt of options;\" class=\"op_filter\" [value]=\"opt.value\">\n            <div *ngIf=\"multiple === true\">\n                <label>\n                    <input type=\"checkbox\" class=\"op_filter\" [value]=\"opt.value\" [checked]=\"opt.checked\" (click)=\"changeValues(opt)\" />\n                    <span *ngIf=\"!isHTML\">{{opt.label}}</span>\n                    <span *ngIf=\"isHTML === true\" [innerHTML]=\"opt.label\"></span>\n                </label>\n            </div>\n            <div *ngIf=\"multiple === false\">\n                <div (click)=\"changeValue(opt)\">{{opt.label}}&nbsp;</div>\n            </div>\n        </div>\n    </div>\n\n</div>\n<!--\n<select class=\"browser-default op_filter\" [(ngModel)]=\"value\" (change)=\"_changeOperator($event)\" >\n    <option *ngFor=\"let opt of options;\"  class=\"op_filter\" [value]=\"opt.value\">{{opt.label}}\n    </option>\n</select>\n\n\n-->",
                    styles: ["select.op_filter{border:1px inset #9e9e9e;height:1.4rem;min-width:25px;padding:0}.op_filter{border-top:1px solid #9e9e9e;padding-left:10px;padding-right:10px}.op_filter,.op_label{font-weight:lighter}"]
                },] }
    ];
    DataGridOpFilterComponent.ctorParameters = function () { return []; };
    DataGridOpFilterComponent.propDecorators = {
        value: [{ type: core.Input }],
        col: [{ type: core.Input }],
        elemToggle: [{ type: core.ViewChild, args: ["elemToggle", { static: false },] }],
        elemValue: [{ type: core.ViewChild, args: ["elemValue", { static: false },] }],
        changeOperator: [{ type: core.Output }],
        changeEmptyOperator: [{ type: core.Output }]
    };

    var DataGridPickerDateComponent = /** @class */ (function () {
        function DataGridPickerDateComponent() {
            this.datevalue = null;
            this.realValue = "";
            this.time = '';
            this.value = '';
            this.changePicker = new core.EventEmitter();
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
    DataGridPickerDateComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ma-data-grid-datepicker',
                    template: "\n    <!-- [(ngModel)]=\"realValue\"   -->\n    <input \n        [id]=\"datepicker_id\" \n        #madatepicker type=\"text\" \n        [(ngModel)]=\"realValue\"\n        class=\"ma-data-grid-datepicker datepicker\">\n\n",
                    styles: [""]
                },] }
    ];
    DataGridPickerDateComponent.ctorParameters = function () { return []; };
    DataGridPickerDateComponent.propDecorators = {
        value: [{ type: core.Input }],
        type: [{ type: core.Input }],
        changePicker: [{ type: core.Output }],
        madatepicker: [{ type: core.ViewChild, args: ["madatepicker", { static: false },] }]
    };

    var DataGridHeadFilterComponent = /** @class */ (function () {
        function DataGridHeadFilterComponent() {
            this.filter_value = '';
            this.changeHeaderFilter = new core.EventEmitter();
            // Récupération de tous les filtres
            // @ViewChildren('op_filter') op_filters:QueryList<DataGridOpFilterComponent>;
            this.astuce_datapicker = 'display: none';
        }
        DataGridHeadFilterComponent.prototype.ngOnInit = function () {
            if (this.col.dataType == 'date') {
                this.astuce_datapicker = 'display: block';
            }
            if (this.col.selectedFilter && this.col.selectedFilter.value) {
                this.filter_value = this.col.selectedFilter.value.toString();
            }
        };
        DataGridHeadFilterComponent.prototype.ngAfterViewInit = function () {
            // Récupération de tous les filtres
            //console.log('op_filters',this.op_filters.toArray());
        };
        DataGridHeadFilterComponent.prototype.getFilter = function () {
            // console.log('getFilter',this.col)
            if (this.col.filter == false) {
                return null;
            }
            if (this.filter_value != '' ||
                this.col.dataType == 'boolean' ||
                this.col.dataType == 'bool' || this.col.headFilter != null) {
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
        DataGridHeadFilterComponent.prototype._changeOperator = function (event, fromInputKey) {
            // Récupération de tous les filtres
            // for (let c of this.op_filters.toArray()) {
            // }
            if (this.col.filter == false) {
                return;
            }
            //console.log('RECEIVE CHANGE OP',this.col, 'OP',this.filter_value)
            //console.log('EMIT changeHeaderFilter', fromInputKey);
            if (fromInputKey)
                this.op_filter.setFirstChoice();
            this.changeHeaderFilter.emit({
                prop: this.col,
                value: this.filter_value,
            });
        };
        DataGridHeadFilterComponent.prototype._changeDate = function (date) {
            if (this.col.filter == false) {
                return;
            }
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
    DataGridHeadFilterComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ma-data-grid-head-filter',
                    template: "<table>\n    <tr>\n        <td class=\"header_filter_op\">\n           <ma-data-grid-op-filter #op_filter [col]=\"col\" (changeEmptyOperator)=\"_changeEmptyOperator()\" (changeOperator)=\"_changeOperator($event,false)\"></ma-data-grid-op-filter>\n        </td>\n        <td class=\"header_filter\" *ngIf=\"col.dataType != 'date' && col.dataType != 'bool' && col.dataType != 'boolean' && (!col.headFilter || col.headFilter.length == 0)\">\n            <input class=\"header_filter\" [(ngModel)]=\"filter_value\" (keyup)=\"_changeOperator($event,true)\" />\n        </td>\n        <td class=\"header_filter\" [style]=\"astuce_datapicker\">\n            <ma-data-grid-datepicker #madate_picker type=\"date\" (changePicker)=\"_changeDate($event)\"></ma-data-grid-datepicker>\n        </td>\n    </tr>\n</table>",
                    styles: ["input.header_filter{background-color:#e8f5f8;border:0 inset #9e9e9e;height:1.2rem;margin:0 0 0 -5px}/deep/ .ma-data-grid-datepicker{height:1.2rem;max-height:1.2rem}td.header_filter{padding:1px 1px 1px 5px}td.header_filter_op{padding:1px 1px 1px 0}"]
                },] }
    ];
    DataGridHeadFilterComponent.ctorParameters = function () { return []; };
    DataGridHeadFilterComponent.propDecorators = {
        filter_value: [{ type: core.Input }],
        col: [{ type: core.Input }],
        changeHeaderFilter: [{ type: core.Output }],
        op_filter: [{ type: core.ViewChild, args: [DataGridOpFilterComponent,] }],
        madate_picker: [{ type: core.ViewChild, args: [DataGridPickerDateComponent,] }]
    };

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

    var MaGridFilterComponent = /** @class */ (function () {
        function MaGridFilterComponent() {
            this.placeholder = 'Enter filter';
            this.customCSS = "";
            this.searchValueChange = new core.EventEmitter();
            this.columns = [];
            this.filterChange = new core.EventEmitter();
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
    MaGridFilterComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ma-data-grid-filter',
                    template: "<div class=\"row ma-grid-filter\">\n    <div class=\"input-field col s3\"  >\n        <i (click)=\"enableFocus()\" class=\"material-icons prefix\">search</i>\n          <input [id]=\"input_filter\" type=\"text\" class=\"validate\" (keyup)=\"updateFilter($event)\">\n          <label for=\"icon_prefix\">{{placeholder}}</label>\n    </div>\n    <div class=\"col s8 {{customCSS}}ma-grid-filter-checkboxes\">\n        <div class=\"title_field\"> Select column(s) filter</div>\n        <!--  [disabled]=\"selectedFields.length == 0\"\n<span *ngFor=\"let col of columns\"> {{col.prop}} | </span>\n[(ngModel)]=\"col.extFilterSelected\" \n[ngClass]=\"{'disabled':selectedFields.length >= 0}\"\n        -->\n        <div class=\"checkbox_field\" *ngFor=\"let col of filters;last as isLast;index as i;\">\n            <label *ngIf=\"col.extFilter === true\">\n                <input type=\"checkbox\" [checked]=\"col.extFilterSelected\" (click)=\"clickChekbox(col)\" />\n                <span class=\"checkbox_title\">{{col.title}}</span>\n                <span *ngIf=\"!isLast\" class=\"checkbox_separator\">|</span>\n            </label>\n        </div>\n    </div>\n</div>\n",
                    styles: [":host{--border-size:0px;--color-border:#667;--color-defaut:#667}.ma-grid-filter .ma-grid-filter-checkboxes{border:1px solid var(--color-border);color:var(--color-defaut);margin-right:10px}.ma-grid-filter .title_field{font-weight:500;margin-left:15px}.ma-grid-filter .checkbox_field{display:inline;margin-left:5px;margin-right:5px}.ma-grid-filter span.checkbox_title{min-width:70px;padding-left:22px}.ma-grid-filter span.checkbox_title:after{content:\"|\"}.ma-grid-filter span.checkbox_separator{font-size:large;margin-left:5px}"]
                },] }
    ];
    MaGridFilterComponent.ctorParameters = function () { return []; };
    MaGridFilterComponent.propDecorators = {
        searchValue: [{ type: core.Input }],
        customCSS: [{ type: core.Input }],
        searchValueChange: [{ type: core.Output }],
        columns: [{ type: core.Input }],
        filterChange: [{ type: core.Output }]
    };

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
            this.myGrid = this;
            this.rows = [];
            this.change = new core.EventEmitter();
            this.select = new core.EventEmitter();
            this.extFilterChange = new core.EventEmitter();
            this.filterChange = new core.EventEmitter();
            this.changePage = new core.EventEmitter();
            this.sort = new core.EventEmitter();
            this.canSelectChange = new core.EventEmitter();
            this.rowsChange = new core.EventEmitter();
            this.rowsSelect = new core.EventEmitter();
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
        MaDataGridComponent.prototype._dataChange = function (evt) {
            // console.log("_dataChange",evt);
            this.rowsChange.emit(evt);
        };
        MaDataGridComponent.prototype._dataSelector = function (evt, prop) {
            // console.log("_dataSelector",evt,prop);
            if (typeof (evt) == 'object' && evt.length === undefined) {
                this.rowsSelect.emit([evt]);
            }
            else {
                this.rowsSelect.emit(evt);
            }
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
    MaDataGridComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ma-data-grid',
                    //providers: [PipeLengthPipe],
                    template: "<!-- #gridfilter *ngIf=\"extFilter\" -->\r\n<ma-data-grid-filter #gridfilter *ngIf=\"extFilter\" [customCSS]=\"customCSS\"  [(searchValue)]=\"searchValue\" [columns]=\"columns\"  (filterChange)=\"_filterChange($event)\"></ma-data-grid-filter>\r\n<div class=\"datagrid_page\">\r\n    <div class=\"scroller\">\r\n        <table class=\"{{customCSS}}grid_table\">\r\n            <!-- HEADER -->\r\n            <tr class=\"grid_row\">\r\n                <td class=\"{{customCSS}}grid_cell {{customCSS}}grid_cell_title\"  [ngClass]=\"{grid_cell_first: i==0}\" *ngFor=\"let col of columns;index as i; \">\r\n                    <datagrid-cellheader-container [ngSwitch]=\"true\"  >\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.dataType == 'selector'\"><ma-data-grid-cell-selector [prop]=\"col.prop\" [isHeader]=\"true\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"rows_displayed\"></ma-data-grid-cell-selector><span>{{col.title}}</span></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchDefault >{{col.title}}</datagrid-cell-element>\r\n                    </datagrid-cellheader-container>\r\n                    \r\n                    <span *ngIf=\"col.dataType != 'selector' && col.sorted === true\" (click)=\"sortBy(col)\">\r\n                        <span *ngIf=\"sortedField.field != col.prop\" class=\"grid_sort tiny material-icons\">swap_vert</span>\r\n                        <span *ngIf=\"sortedField.field === col.prop && sortedField.reverse\" class=\"grid_sort tiny material-icons\">arrow_drop_down</span>\r\n                        <span *ngIf=\"sortedField.field === col.prop && !sortedField.reverse\" class=\"grid_sort tiny material-icons\">arrow_drop_up</span>\r\n                    </span> \r\n                </td>\r\n            </tr>\r\n            <!-- Head Filter -->\r\n            <tr class=\"{{customCSS}}grid_row\" *ngIf=\"headFilter\">\r\n                <td class=\"{{customCSS}}grid_cell {{customCSS}}grid_cell_title\"  [ngClass]=\"{grid_cell_first: i==0}\" *ngFor=\"let col of columns;index as i; \">\r\n                    <ma-data-grid-head-filter #headerfilter *ngIf=\"(col.dataType && col.dataType != 'selector' &&  col.filter !== false) || (col.filter !== false && col.headFilter != null  && col.headFilter.length > 0)\" [col]=\"col\" (changeHeaderFilter)=\"_changeHeaderFilter($event)\"></ma-data-grid-head-filter>\r\n                </td>\r\n            </tr>\r\n            <!-- DATA -->\r\n            <tr class=\"{{customCSS}}grid_row\" *ngFor=\"let row of rows_displayed; \r\n                    last as isLastRow; \r\n                    even as pair; \r\n                    index as i; \r\n                    first as isFirstRow\"\r\n                (click)=\"SelectRow(i,row)\" [ngClass]=\"{'grid_row_selected': i == row_selected && !cell_selected, 'CSSclassEven': pair,'CSSclassOdd': !pair, 'grid_row_first': isFirstRow, 'grid_row_end': isLastRow}\">\r\n    \r\n                <td class=\"{{customCSS}}grid_cell {{col.cssClass}}\" *ngFor=\"let col of columns; \r\n                    index as ncol; \r\n                    count as maxcol; \r\n                    first as isFirstCol\r\n                    last as isLastCol;\" \r\n                    \r\n                    [ngClass]=\"{'grid_cell_selected': i == row_selected && col.prop == cell_selected, 'grid_cell_end': isLastCol,'grid_cell_first': isFirstCol}\"\r\n                    (click)=\"SelectCell(i,row,col)\">\r\n                    <!--  {{col.prop}} repr\u00E9sente le nom de colonne d'un \u00E9l\u00E9ment contenu dans 'colmuns' -- >\r\n                    <div *ngIf=\"col.isRowNumber === true; then RowNumberBlock else dataBlock\"></div>\r\n                    <ng-template #RowNumberBlock>{{i}}</ng-template>\r\n                    <ng-template #dataBlock> {{u[col.prop] | dataGridPipe :u :c}}</ng-template>\r\n                    -->\r\n                    <datagrid-cell-container [ngSwitch]=\"true\"  >\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.dataType == 'selector'\" ngSwitchBreak><ma-data-grid-cell-selector [prop]=\"col.prop\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"row\"></ma-data-grid-cell-selector></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.useTemplate != null\" ngSwitchBreak><ma-data-grid-template-cell-t1 [template]=\"col.useTemplate\" [prop]=\"col.prop\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"row\"></ma-data-grid-template-cell-t1></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.canEdit === true && col.useTemplate == null\" ngSwitchBreak><ma-data-grid-celledit-item [prop]=\"col.prop\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"row\"></ma-data-grid-celledit-item></datagrid-cell-element>\r\n                        <!-- <datagrid-cell-element *ngSwitchCase=\"col.isRowNumber === true\" ngSwitchBreak>{{i}}</datagrid-cell-element> -->\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.isHTML === true\" ngSwitchBreak>\r\n                            <span [innerHTML]=\"row[col.prop] | maDataGridPipe :row :col\"></span>\r\n                        </datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.useTemplate == null && col.canEdit !== true && (col.dataType == 'boolean' || col.dataType == 'bool')\" ngSwitchBreak><ma-data-grid-cell-boolean [col]=\"col\" [data]=\"row\"></ma-data-grid-cell-boolean></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchDefault>{{row[col.prop] | maDataGridPipe :row :col}}</datagrid-cell-element>\r\n                    </datagrid-cell-container>\r\n                </td>\r\n        \r\n            </tr>\r\n        </table>\r\n        \r\n    </div>\r\n    <div class=\"row\" style=\"padding-top: 5px;\" *ngIf=\"nb_record >= 0\">\r\n        <div class=\"col s3 \">\r\n            <div class=\"page_number\">#{{nb_record}} record<span *ngIf=\"nb_record > 1\">s</span></div>\r\n        </div>\r\n        <div class=\"col s8 div_pagination\">\r\n           \r\n            <ul class=\"pagination\">\r\n                <li *ngIf=\"max_page >= 9\" (click)=\"FastDecrementPage()\" [ngClass]=\"{'disabled': current_page == 0,'': current_page != 0}\"><a  class=\"pointer\"><i class=\"material-icons small\">fast_rewind</i></a></li>\r\n                <li *ngIf=\"nb_record > 0\" (click)=\"DecrementPage()\" [ngClass]=\"{'disabled': current_page == 0,'': current_page != 0}\"><a  class=\"pointer\"><i class=\"material-icons small\">chevron_left</i></a></li>\r\n                <li *ngFor=\"let n_page of pages\" (click)=\"_changePage(n_page)\" [ngClass]=\"{'active': current_page == n_page,'': current_page != n_page}\" ><a class=\"pointer\" class=\"a_pagination small \">{{(n_page+1)}}</a></li>\r\n                <li *ngIf=\"nb_record > 0\" (click)=\"IncrementPage()\" [ngClass]=\"{'disabled': current_page == max_page,'': current_page != max_page}\"><a  class=\"pointer\"><i class=\"material-icons small\">chevron_right</i></a></li>\r\n                <li *ngIf=\"max_page >= 9\" (click)=\"FastIncrementPage()\" [ngClass]=\"{'disabled': current_page == max_page,'': current_page != max_page}\"><a class=\"pointer\"><i class=\"material-icons small\">fast_forward</i></a></li>\r\n            </ul>\r\n       \r\n        </div>\r\n    </div>\r\n</div>\r\n    \r\n    ",
                    styles: [":host{--color-border:#667;--color-defaut:#667}.datagrid_page .CSSclassOdd{background-color:#ddd}.datagrid_page{height:100%;width:100%}.div_pagination .pointer{cursor:default}.div_pagination .page_number{color:var(--color-defaut);font-size:1rem;padding:0 10px}.datagrid_page .div_pagination{display:-ms-inline-grid;display:inline-grid;justify-content:flex-end}.a_pagination:hover,.div_pagination .a_pagination{color:var(--color-border);display:inline-block;font-size:1rem;line-height:30px;padding:0 10px;text-decoration:none}.datagrid_page .scroller{-ms-grid-row-align:center;align-self:center;background-color:#fefefe;overflow:auto;scrollbar-color:var(--color-border) #fefefe;scrollbar-width:auto;width:100%}.grid_table .grid_row_selected{background-color:#667;color:#ddd}.grid_table .grid_sort{cursor:pointer}.datagrid_page .grid_table{width:100%}.grid_table .grid_cell_title{border-top:1px solid var(--color-border);color:var(--color-defaut);font-weight:700;text-align:center}.grid_table .grid_cell_selected{background-color:#667;color:#ddd}.grid_table .grid_cell_first{border-left:10px solid var(--color-border)}.grid_table .grid_cell_end{border-right:0 solid var(--color-border)}.grid_table .grid_cell{border-right:1px solid var(--color-border)}.grid_table .grid_row_first{border-bottom:1px solid var(--color-border)}.grid_table .grid_row_last{border-bottom:0 solid var(--color-border)}.grid_table .grid_row{border-bottom:1px solid var(--color-border)}"]
                },] }
    ];
    MaDataGridComponent.ctorParameters = function () { return []; };
    MaDataGridComponent.propDecorators = {
        columns: [{ type: core.Input }],
        limit: [{ type: core.Input }],
        canSelect: [{ type: core.Input }],
        extFilter: [{ type: core.Input }],
        headFilter: [{ type: core.Input }],
        pagination: [{ type: core.Input }],
        page: [{ type: core.Input }],
        count: [{ type: core.Input }],
        customCSS: [{ type: core.Input }],
        myGrid: [{ type: core.Input }],
        rows: [{ type: core.Input }],
        change: [{ type: core.Output }],
        select: [{ type: core.Output }],
        extFilterChange: [{ type: core.Output }],
        filterChange: [{ type: core.Output }],
        changePage: [{ type: core.Output }],
        sort: [{ type: core.Output }],
        canSelectChange: [{ type: core.Output }],
        rowsChange: [{ type: core.Output }],
        rowsSelect: [{ type: core.Output }],
        gridfilter: [{ type: core.ViewChild, args: [MaGridFilterComponent, { static: true },] }],
        headerfilter: [{ type: core.ViewChildren, args: [DataGridHeadFilterComponent,] }],
        sortedField: [{ type: core.Input }]
    };

    var MaAnchorGridCellDirective = /** @class */ (function () {
        function MaAnchorGridCellDirective(viewContainerRef) {
            this.viewContainerRef = viewContainerRef;
        }
        return MaAnchorGridCellDirective;
    }());
    MaAnchorGridCellDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[libMaAnchorGridCell]'
                },] }
    ];
    MaAnchorGridCellDirective.ctorParameters = function () { return [
        { type: core.ViewContainerRef }
    ]; };

    var MaGridCellTemplateDirective = /** @class */ (function () {
        function MaGridCellTemplateDirective(viewContainerRef) {
            this.viewContainerRef = viewContainerRef;
        }
        return MaGridCellTemplateDirective;
    }());
    MaGridCellTemplateDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[libMaGridCellTemplate]'
                },] }
    ];
    MaGridCellTemplateDirective.ctorParameters = function () { return [
        { type: core.ViewContainerRef }
    ]; };

    var DataGridCellItemComponent = /** @class */ (function () {
        //dataChange = new EventEmitter<any>()
        function DataGridCellItemComponent(component, data, col, prop, myGrid) {
            this.component = component;
            this.data = data;
            this.col = col;
            this.prop = prop;
            this.myGrid = myGrid;
        }
        return DataGridCellItemComponent;
    }());

    var DataGridTemplateCellComponent = /** @class */ (function () {
        function DataGridTemplateCellComponent(componentFactoryResolver) {
            this.componentFactoryResolver = componentFactoryResolver;
            // console.log('DataGridTemplateCellComponent c',this.template, this.prop);
        }
        DataGridTemplateCellComponent.prototype.ngOnInit = function () {
            var _a;
            // 
            if (!this.template) {
                return;
            }
            var component = new DataGridCellItemComponent(this.template, this.data, this.col, this.prop, this.myGrid);
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(component.component);
            if (!this.libMaGridCellTemplate) {
                return;
            }
            var viewContainerRef = this.libMaGridCellTemplate.viewContainerRef;
            var componentRef = viewContainerRef.createComponent(componentFactory);
            componentRef.instance.data = component.data;
            componentRef.instance.prop = component.prop;
            componentRef.instance.col = component.col;
            componentRef.instance.dataChange = new core.EventEmitter();
            componentRef.instance.myGrid = component.myGrid;
            (_a = componentRef.instance.dataChange) === null || _a === void 0 ? void 0 : _a.subscribe(function (d) {
                // console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD", d);
                if (componentRef.instance.myGrid != null) {
                    componentRef.instance.myGrid._dataChange(d);
                }
            });
        };
        return DataGridTemplateCellComponent;
    }());
    DataGridTemplateCellComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ma-data-grid-template-cell-t1',
                    template: '<ng-template libMaGridCellTemplate></ng-template>'
                },] }
    ];
    DataGridTemplateCellComponent.ctorParameters = function () { return [
        { type: core.ComponentFactoryResolver }
    ]; };
    DataGridTemplateCellComponent.propDecorators = {
        data: [{ type: core.Input }],
        prop: [{ type: core.Input }],
        col: [{ type: core.Input }],
        template: [{ type: core.Input }],
        myGrid: [{ type: core.Input }],
        dataChange: [{ type: core.Output }],
        libMaGridCellTemplate: [{ type: core.ViewChild, args: [MaGridCellTemplateDirective, { static: true },] }]
    };

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
    DataGridPipePipe.decorators = [
        { type: core.Pipe, args: [{
                    name: 'maDataGridPipe'
                },] }
    ];

    var DataGridCellBooleanComponent = /** @class */ (function () {
        function DataGridCellBooleanComponent() {
            this.icon = '';
        }
        DataGridCellBooleanComponent.prototype.ngOnInit = function () {
            // console.log(this.data[this.col.prop]);
            // if (this.data[this.col.prop] === true) {
            //   this.icon = 'check_box'
            // } else if (this.data[this.col.prop] === false) {
            //   this.icon = 'check_box_outline_blank'
            // }
        };
        return DataGridCellBooleanComponent;
    }());
    DataGridCellBooleanComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ma-data-grid-cell-boolean',
                    //template: '<div style="text-align: center"><i class="tiny material-icons">{{icon}}</i></div>'
                    template: '<div style="text-align: center"><i *ngIf="data[col.prop] === true" class="tiny material-icons">check_box</i><i *ngIf="data[col.prop] === false" class="tiny material-icons">check_box_outline_blank</i></div>'
                },] }
    ];
    DataGridCellBooleanComponent.ctorParameters = function () { return []; };
    DataGridCellBooleanComponent.propDecorators = {
        data: [{ type: core.Input }],
        col: [{ type: core.Input }]
    };

    var DataGridCelleditItemComponent = /** @class */ (function () {
        function DataGridCelleditItemComponent() {
            this.value = '';
            this.dataChange = new core.EventEmitter();
        }
        DataGridCelleditItemComponent.prototype.ngOnInit = function () {
            if (this.col && this.col.dataType == 'boolean') {
                if (this.data && (this.data[this.prop] == true || this.data[this.prop] == 1 || this.data[this.prop] == "on")) {
                    this.data[this.prop] = true;
                }
            }
        };
        DataGridCelleditItemComponent.prototype.onPress = function (evt) {
            //console.log(evt);
            if (evt.Key == 'Enter') {
                this.onChange();
            }
        };
        DataGridCelleditItemComponent.prototype.onChange = function () {
            // console.log('elem',this.myInput.nativeElement);
            var emitEvent = true;
            if (this.col && this.col.dataType == 'number') {
                var s = this.myInput.nativeElement.value;
                if (s.match(/^[0-9]+$/)) {
                    this.data[this.prop] = parseInt(this.myInput.nativeElement.value);
                }
                else {
                    emitEvent = false;
                    this.myInput.nativeElement.value = this.data[this.prop];
                }
            }
            else if (this.col && this.col.dataType == 'float') {
                var s = this.myInput.nativeElement.value;
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
                    var d = new Date(this.myInput.nativeElement.value).toISOString().replace(/T.+/, '');
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
        };
        DataGridCelleditItemComponent.prototype.onChangeCheckbox = function () {
            // console.log('elem',this.myInputCheckbox.nativeElement);
            this.data[this.prop] = this.myInputCheckbox.nativeElement.checked;
            // console.log('EMIT dataChange',this.data);
            this.dataChange.emit(this.data);
            if (this.myGrid != null) {
                this.myGrid._dataChange(this.data);
            }
        };
        DataGridCelleditItemComponent.prototype.ngOnChanges = function (changes) {
            // console.log('DataGridCelleditItem ngOnChanges',changes)
        };
        return DataGridCelleditItemComponent;
    }());
    DataGridCelleditItemComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ma-data-grid-celledit-item',
                    template: "<div *ngIf=\"!col || col.dataType != 'boolean'\">\n    <!-- (keyup)=\"onChange()\" (keypress)=\"onPress($Event)\" -->\n    <input #myInput type=\"text\" [(value)]=\"data[prop]\" (keypress)=\"onPress($event)\" (change)=\"onChange()\">\n</div>\n<div *ngIf=\"col && col.dataType == 'boolean'\">\n    <label>\n        <input #myInputCheckbox type=\"checkbox\" [(ngModel)]=\"data[col.prop]\" (change)=\"onChangeCheckbox()\" />\n        <span></span>\n    </label>\n</div>",
                    styles: [""]
                },] }
    ];
    DataGridCelleditItemComponent.ctorParameters = function () { return []; };
    DataGridCelleditItemComponent.propDecorators = {
        myInput: [{ type: core.ViewChild, args: ["myInput", { static: false },] }],
        myInputCheckbox: [{ type: core.ViewChild, args: ["myInputCheckbox", { static: false },] }],
        dataChange: [{ type: core.Output }],
        data: [{ type: core.Input }],
        col: [{ type: core.Input }],
        prop: [{ type: core.Input }],
        myGrid: [{ type: core.Input }]
    };

    var DataGridCellSelectorComponent = /** @class */ (function () {
        function DataGridCellSelectorComponent() {
            this.title = '';
            this.dataChange = new core.EventEmitter();
            this.isHeader = false;
        }
        DataGridCellSelectorComponent.prototype.ngOnInit = function () {
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
        };
        DataGridCellSelectorComponent.prototype.onChangeCheckbox = function () {
            var e_1, _a;
            if (this.isHeader) {
                try {
                    for (var _b = __values(this.data), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var row = _c.value;
                        row[this.prop] = this.myInputSelectorBox.nativeElement.checked;
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
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
        };
        DataGridCellSelectorComponent.prototype.ngOnChanges = function (changes) {
            // console.log('SELECTOR ngOnChanges',changes)
        };
        return DataGridCellSelectorComponent;
    }());
    DataGridCellSelectorComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ma-data-grid-cell-selector',
                    template: "<span>\n    <!--  [(ngModel)]=\"realValue\" [checked]=\"checked\" -->\n    <label>\n        <input [(ngModel)]=\"data[col.prop]\" #myInputSelectorBox type=\"checkbox\"  (change)=\"onChangeCheckbox()\" />\n        <span></span>\n    </label>\n</span>",
                    styles: [""]
                },] }
    ];
    DataGridCellSelectorComponent.ctorParameters = function () { return []; };
    DataGridCellSelectorComponent.propDecorators = {
        myInputSelectorBox: [{ type: core.ViewChild, args: ["myInputSelectorBox", { static: false },] }],
        dataChange: [{ type: core.Output }],
        data: [{ type: core.Input }],
        isHeader: [{ type: core.Input }],
        col: [{ type: core.Input }],
        prop: [{ type: core.Input }],
        myGrid: [{ type: core.Input }]
    };

    //export var  M;
    var MaDataGridModule = /** @class */ (function () {
        function MaDataGridModule() {
        }
        return MaDataGridModule;
    }());
    MaDataGridModule.decorators = [
        { type: core.NgModule, args: [{
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
                        MaGridCellTemplateDirective,
                        DataGridCelleditItemComponent,
                        DataGridCellSelectorComponent
                    ],
                    imports: [
                        common.CommonModule,
                        forms.FormsModule
                    ],
                    exports: [
                        /* Ajouter CommonModule pour éviter les erreurs
                            Can't bind to 'ngClass' since it isn't a known property */
                        MaDataGridComponent,
                        MaGridFilterComponent
                    ]
                },] }
    ];

    /*
     * Public API Surface of ma-data-grid
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MaDataGridComponent = MaDataGridComponent;
    exports.MaDataGridModule = MaDataGridModule;
    exports.MaGridFilterComponent = MaGridFilterComponent;
    exports.options_header_bool = options_header_bool;
    exports.options_header_boolean = options_header_boolean;
    exports.options_header_date = options_header_date;
    exports.options_header_number = options_header_number;
    exports.options_header_string = options_header_string;
    exports.ɵa = DataGridHeadFilterComponent;
    exports.ɵb = DataGridOpFilterComponent;
    exports.ɵc = DataGridPickerDateComponent;
    exports.ɵd = MaAnchorGridCellDirective;
    exports.ɵe = DataGridTemplateCellComponent;
    exports.ɵf = MaGridCellTemplateDirective;
    exports.ɵg = DataGridPipePipe;
    exports.ɵh = DataGridCellBooleanComponent;
    exports.ɵi = DataGridCelleditItemComponent;
    exports.ɵj = DataGridCellSelectorComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=amn31-ma-data-grid.umd.js.map
