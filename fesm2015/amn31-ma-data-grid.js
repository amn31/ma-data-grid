import { EventEmitter, Component, Input, ViewChild, Output, ViewChildren, Directive, ViewContainerRef, ComponentFactoryResolver, Pipe, NgModule } from '@angular/core';
import * as $ from 'jquery';
import { Datepicker, Timepicker, updateTextFields } from 'materialize-css';
import { MaFilter } from '@amn31/filter-multiple-conditions';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//import { Type } from '@angular/core';
/**
 * Pre-define Head Filter for a dataType 'boolean' with null and not null
 */
const options_header_booleanornull = [{
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
        label: 'null'
    }, {
        value: 'a',
        operator: 'isnotnull',
        label: '!null'
    },];
/**
 * Pre-define Head Filter for a dataType 'boolean'
 */
const options_header_boolean = [{
        value: '1',
        operator: '=',
        label: 'true'
    }, {
        value: '0',
        operator: '=',
        label: 'false'
    }];
/**
 * Pre-define Head Filter for a dataType 'string'
 */
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
/**
 * Pre-define Head Filter for a dataType 'number'
 */
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
    }, {
        value: ['${1}', '${1}'],
        operator: ['>=', '<='],
        label: 'between'
    }
];
/**
 * Pre-define Head Filter for a dataType 'date'
 */
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
    }, {
        value: ['${1}', '${1}'],
        operator: ['>=', '<='],
        label: 'between'
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

const defaut_label = '';
class DataGridOpFilterComponent {
    constructor() {
        this.value = '';
        this.changeOperator = new EventEmitter();
        this.changeEmptyOperator = new EventEmitter();
        this.isMultipleValue = false;
        this.options = null;
        this.multiple = false;
        this.isHTML = false;
        this.values = [];
        this.label = defaut_label;
        this.popupPosition = {
            top: 0,
            left: 0
        };
        this.cssElemToggle = { height: undefined };
    }
    getFuncClickDocument() {
        let fct = () => {
            // console.log('CLICK')
            this.elemToggle.nativeElement.style.opacity = 0;
            this.elemToggle.nativeElement.style.borderColor = 'aliceblue';
            this.elemToggle.nativeElement.style.height = 0;
            $(document).off('click', fct);
        };
        return fct;
    }
    toggleDiv() {
        // docudddent.addEventListener('click',(evt) => 
        // {
        //   console.log('RRRRRRRRRRRRRRRRRRRRRRRRRR')
        //     return null
        //   }
        // ,false)
        var onClickDocument = this.getFuncClickDocument();
        $(document).off('click', onClickDocument);
        if (this.elemToggle.nativeElement.style.opacity == 0) {
            this.elemToggle.nativeElement.style.opacity = 1;
            this.elemToggle.nativeElement.style.borderColor = '#9e9e9e';
            this.elemToggle.nativeElement.style.height = this.cssElemToggle.height + 'px';
            setTimeout(() => {
                $(document).off('click', onClickDocument);
                $(document).on('click', onClickDocument);
            }, 500);
        }
        else {
            $(document).off('click', onClickDocument);
        }
    }
    cloneOptions(opts) {
        if (opts == null) {
            return null;
        }
        let options = [];
        for (let i = 0; i < opts.length; i++) {
            options.push(Object.assign({}, opts[i]));
        }
        return options;
    }
    ngAfterViewInit() {
        this.cssElemToggle.height = this.elemToggle.nativeElement.offsetHeight;
        this.elemToggle.nativeElement.style.height = '0px';
    }
    ngOnInit() {
        this.isHTML = this.col.isHTML;
        if (this.col.dataType == 'string') {
            this.options = this.cloneOptions(options_header_string);
        }
        if (this.col.dataType == 'boolean?') {
            this.multiple = true;
            this.options = this.cloneOptions(options_header_booleanornull);
        }
        if (this.col.dataType == 'boolean') {
            this.multiple = true;
            this.options = this.cloneOptions(options_header_boolean);
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
            let selected = this.options.find((d) => d.label === this.col.selectedFilter.label);
            if (selected) {
                // console.log("SELECTED SINGLE", this.col.prop, selected);
                this.changeValue(selected, true);
            }
        }
        this.options = this.cloneOptions(this.options);
        for (var i in this.options) {
            if (this.col.selectedFilter) {
                if (typeof (this.col.selectedFilter.label) == 'string' && this.col.selectedFilter.label == this.options[i].label) {
                    this.options[i].checked = true;
                }
                else {
                    if (typeof (this.col.selectedFilter.label) == 'object') {
                        if (this.col.selectedFilter.label.find(e => e == this.options[i].label)) {
                            this.options[i].checked = true;
                        }
                    }
                }
            }
            if (this.options[i].checked !== true) {
                this.options[i].checked = false;
            }
            else {
                if (this.multiple) {
                    // console.log("SELECTED MULTIPLE", this.col.prop, this.options[i]);
                    this.options[i].checked = false;
                    this.changeValues(this.options[i]);
                }
            }
        }
    }
    setFirstChoice() {
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
            return this.options.find((d) => d.label === this.value && d.checked == true);
        }
        return null;
    }
    changeValues(opt) {
        /* Changement de l'operateur dans la cas de valeurs multiples d'operateurs
            Ex: { value: "Apple", operator: "=", label: "Apple", checked: false } */
        // console.log("CHANGES VALUES", this.col.prop, opt)
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
        // console.log(this.values)
        this.label = '(' + this.values.length + ')';
        if (this.values.length == 0)
            this.label = defaut_label;
        //this.toggleDiv();
        // console.log('changeValue OP', this.values);
        this._changeOperator();
    }
    isOperatorMultiple(o) {
        return (o &&
            o.operator && typeof (o.operator) == 'object' && o.operator.length > 0 &&
            o.value && typeof (o.value) == 'object' && o.value.length > 0);
    }
    getConditions(filter_value1, filter_value2) {
        if (this.multiple == false) {
            let o = this.getOperator();
            // console.log('getFilter ' + this.col.prop + " o", o)
            if (o != null && o.operator != '') {
                // CAS: OperatorMultiple
                if (this.isOperatorMultiple(o)) {
                    //console.log('getFilter values ' , filter_value1 , " /", filter_value2)
                    // console.log("getConditions() OperatorMultiple ValueMultiple ", o)
                    let value1 = o.value[0].toString().replace('${1}', filter_value1);
                    let value2 = o.value[1].toString().replace('${1}', filter_value2);
                    //console.log('getFilter values(2) ' , value1 , " /", value2)
                    var conds = [];
                    if (filter_value1 != '') {
                        conds.push([this.col.prop, o.operator[0], value1]);
                    }
                    if (filter_value2 != '') {
                        if (filter_value1 != '') {
                            conds.push('and');
                        }
                        conds.push([this.col.prop, o.operator[1], value2]);
                    }
                    return conds;
                }
                else {
                    //console.log("getConditions() SimpleValue ", o)
                    let value = o.value.toString().replace('${1}', filter_value1);
                    //if (this.col.dataType == 'number') {
                    //  value = parseFloat(value);
                    //}
                    return [this.col.prop, o.operator, value];
                }
            }
        }
        else {
            if (this.values.length > 0) {
                let conditions = [];
                for (var i = 0; i < this.values.length; i++) {
                    // CAS: OperatorMultiple
                    if (this.isOperatorMultiple(this.values[i])) {
                        // console.log("getConditions() OperatorMultiple ",this.values);
                        let val = this.values[i].value;
                        let ops = this.values[i].operator;
                        var conds = [];
                        for (var ic = 0; ic < val.length && ic < ops.length; ic++) {
                            conds.push([this.col.prop, ops[ic], val[ic]]);
                            if (ic < (val.length - 1)) {
                                conds.push('and');
                            }
                        }
                        conditions.push(conds);
                    }
                    else {
                        //if (this.col.dataType == 'number') {
                        //  v = parseFloat(v);
                        //}
                        conditions.push([this.col.prop, this.values[i].operator.toString(), this.values[i].value.toString()]);
                    }
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
        // console.log("CHANGE VALUE", opt.operator, this.col.prop, opt)
        if (this.options.find((d) => d.checked === true)) {
            this.options.find((d) => d.checked === true).checked = false;
        }
        opt.checked = !opt.checked;
        if (opt.label.match(/^\s+$/)) {
            this.value = '';
            this.label = '';
            this.isMultipleValue = false;
        }
        else {
            this.value = opt.label;
            this.label = opt.label;
            this.isMultipleValue = this.isOperatorMultiple(opt);
        }
        // console.log('changeValue OP', this.options);
        if (!ignoreToggle) {
            this.toggleDiv();
        }
        this._changeOperator();
        if (opt.operator == '') {
            this.changeEmptyOperator.emit({
                col: this.col,
                isMultipleValue: this.isMultipleValue
            });
        }
    }
    _changeOperator() {
        // console.log('EMIT OP', this.col.prop, this.options.find((d) => d.checked === true), this.options)
        this.changeOperator.emit({
            col: this.col,
            isMultipleValue: this.isMultipleValue
            //  condition: [ this.col.prop, this.value ]
        });
    }
}
DataGridOpFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'ma-data-grid-op-filter',
                template: "<div>\n\n    <div #elemValue (click)=\"toggleDiv()\" class=\"op_label\"><i *ngIf=\"label == ''\" class=\"tiny material-icons\">search</i>{{label}}\n    </div>\n    <!-- [style.left.px]=\"popupPosition.left\"  [style.top.px]=\"popupPosition.top\"-->\n    <div #elemToggle class=\"popup-operator invisible-scrollbar\">\n        <div *ngFor=\"let opt of options;\" class=\"op_filter\" [value]=\"opt.value\">\n            \n            <div *ngIf=\"multiple === true\">\n                <label>\n                    <input type=\"checkbox\" class=\"op_filter\" [value]=\"opt.value\" [checked]=\"opt.checked\" (click)=\"changeValues(opt)\" />\n                    <span *ngIf=\"!isHTML\">{{opt.label}}</span>\n                    <span *ngIf=\"isHTML === true\" [innerHTML]=\"opt.label\"></span>\n                </label>\n            </div>\n            <div *ngIf=\"multiple === false\">\n                <div (click)=\"changeValue(opt)\" class=\"op_label\">{{opt.label}}&nbsp;</div>\n            </div>\n        </div>\n    </div>\n\n</div>",
                styles: ["select.op_filter{border:1px inset #9e9e9e;height:1.4rem;min-width:25px;padding:0}.op_label{cursor:-webkit-grab;cursor:grab;font-stretch:ultra-condensed;font-weight:lighter}.op_filter{border-top:1px solid #9e9e9e;font-weight:lighter;padding-left:10px;padding-right:10px}.popup-operator{background-color:#e8f5f8;border:0 solid #9e9e9e;box-shadow:2px 3px 3px #000;cursor:-webkit-grab;cursor:grab;max-height:300px;opacity:.4;overflow-y:auto;position:absolute;transition:opacity .5s,border-color 1s,height .5s;transition-timing-function:ease-in-out;z-index:20}.invisible-scrollbar{scrollbar-width:none}.invisible-scrollbar::-webkit-scrollbar{display:none}"]
            },] }
];
DataGridOpFilterComponent.ctorParameters = () => [];
DataGridOpFilterComponent.propDecorators = {
    value: [{ type: Input }],
    col: [{ type: Input }],
    elemToggle: [{ type: ViewChild, args: ["elemToggle", { static: false },] }],
    elemValue: [{ type: ViewChild, args: ["elemValue", { static: false },] }],
    changeOperator: [{ type: Output }],
    changeEmptyOperator: [{ type: Output }]
};

class DataGridPickerDateComponent {
    constructor() {
        this.datevalue = null;
        this.realValue = "";
        this.time = '';
        this.value = '';
        this.materialize = false;
        this.date = null;
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
        if (this.date) {
            if (this.materialize == true) {
                const offset = new Date().getTimezoneOffset();
                this.datevalue = new Date(this.date.getTime() - (2 * offset * 60 * 1000));
                // console.log('SET TO ', this.datevalue.toISOString());
                this.realValue = this.datevalue.toISOString().replace(/T.+/, '');
            }
            else {
                this.datevalue = new Date(this.date.getTime());
                // console.log('SET TO ', this.datevalue.toISOString());
                this.realValue = this.datevalue.toISOString().replace(/T.+/, '');
            }
            this.onChange();
        }
    }
    getDate() {
        return this.datevalue;
    }
    changeDateByInput(evt) {
        if (this.realValue === null ||
            this.realValue.length == 0 || !this.realValue.match(/^\d\d\d\d-\d\d-\d\d$/)) {
            this.setDate(null);
            this.changePicker.emit(this.datevalue);
            return;
        }
        else {
            try {
                this.datevalue = new Date(this.realValue.toString());
            }
            catch (e) {
                this.setDate(null);
            }
            this.changePicker.emit(this.datevalue);
        }
    }
    setDate(date) {
        if (date != null) {
            const offset = new Date().getTimezoneOffset();
            date = new Date(date.getTime() - (2 * offset * 60 * 1000));
        }
        if (this.materialize) {
            var elem = document.getElementById(this.datepicker_id);
            if (date == null) {
                elem.value = '';
            }
            else {
                elem.value = date.toISOString().replace(/T.+/, '');
            }
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
        if (!this.materialize) {
            return;
        }
        //var elems = document.querySelectorAll('.ma-data-grid-datepicker');
        var elem = document.getElementById(this.datepicker_id);
        var ptr = this;
        if (this.type == 'date') {
            var instances = Datepicker.init(elem, {
                autoClose: true,
                format: 'yyyy-mm-dd',
                defaultDate: this.datevalue,
                setDefaultDate: true,
                onSelect: function (d) {
                    // console.log('SELECT ',d)
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
    }
    onChange() {
        const offset = new Date().getTimezoneOffset();
        this.datevalue = new Date(this.datevalue.getTime() - (2 * offset * 60 * 1000));
        // console.log('onChange', this.datevalue)
        if (this.type == 'date') {
            this.changePicker.emit(this.datevalue);
        }
        else {
            this.changePicker.emit(this.time);
        }
    }
    emitDateEvent() {
        const offset = new Date().getTimezoneOffset();
        this.datevalue = new Date(this.datevalue.getTime() - (2 * offset * 60 * 1000));
        this.changePicker.emit(this.datevalue);
    }
    emitTimeEvent() {
        this.changePicker.emit(this.time);
    }
}
DataGridPickerDateComponent.decorators = [
    { type: Component, args: [{
                selector: 'ma-data-grid-datepicker',
                template: "\n    <!-- [(ngModel)]=\"realValue\"   -->\n    <div *ngIf=\"materialize == true\">\n        <input [id]=\"datepicker_id\" \n        #madatepicker type=\"text\" \n        [(ngModel)]=\"realValue\"\n        class=\"ma-data-grid-datepicker datepicker\">\n    </div>\n    <div *ngIf=\"materialize == false\">\n        <input \n         type=\"date\" \n        [(ngModel)]=\"realValue\"\n        (change)=\"changeDateByInput(evt)\"\n        >\n    </div>\n\n",
                styles: [""]
            },] }
];
DataGridPickerDateComponent.ctorParameters = () => [];
DataGridPickerDateComponent.propDecorators = {
    value: [{ type: Input }],
    materialize: [{ type: Input }],
    type: [{ type: Input }],
    date: [{ type: Input }],
    changePicker: [{ type: Output }],
    madatepicker: [{ type: ViewChild, args: ["madatepicker", { static: false },] }]
};

class DataGridHeadFilterComponent {
    constructor() {
        this.filter_value1 = '';
        this.filter_value2 = '';
        this.changeHeaderFilter = new EventEmitter();
        // Récupération de tous les filtres
        // @ViewChildren('op_filter') op_filters:QueryList<DataGridOpFilterComponent>;
        this.astuce_datapicker = 'display: none';
        this.isMultipleValue = false;
        this.date1 = null;
        this.date2 = null;
    }
    ngOnInit() {
        if (this.col.dataType == 'date') {
            this.astuce_datapicker = 'display: block';
        }
        if (this.col.selectedFilter) {
            if (typeof (this.col.selectedFilter.value) == 'object' && this.col.selectedFilter.value.length > 0) {
                if (this.col.dataType == 'date') {
                    this.date1 = new Date(this.col.selectedFilter.value[0].toString());
                    if (this.col.selectedFilter.value.length > 1) {
                        this.date2 = new Date(this.col.selectedFilter.value[1].toString());
                    }
                }
                else {
                    this.filter_value1 = this.col.selectedFilter.value[0].toString();
                    if (this.col.selectedFilter.value.length > 1) {
                        this.filter_value2 = this.col.selectedFilter.value[1].toString();
                    }
                }
            }
            else {
                if (this.col.selectedFilter.value != undefined) {
                    this.filter_value1 = this.col.selectedFilter.value.toString();
                    this.filter_value2 = '';
                }
            }
        }
    }
    ngAfterViewInit() {
        // Récupération de tous les filtres
        //console.log('op_filters',this.op_filters.toArray());
    }
    getFilter() {
        // console.log('getFilter',this.col)
        if (this.col.filter == false) {
            return null;
        }
        if (this.filter_value1 != '' ||
            this.col.dataType == 'boolean' ||
            this.col.dataType == 'boolean?' || this.col.headFilter != null) {
            let o = this.op_filter.getConditions(this.filter_value1, this.filter_value2);
            // console.log('getConditions '+this.col.prop+ " o",o)
            return o;
        }
        return null;
    }
    _changeEmptyOperator(event) {
        // console.log("_changeEmptyOperator");
        //this.isMultipleValue = event.isMultipleValue;
        this.madate_picker1.setDate(null);
        this.madate_picker2.setDate(null);
    }
    _changeOperator(event, fromInputKey) {
        // console.log("event.isMultipleValue;",event.isMultipleValue)
        // Récupération de tous les filtres
        // for (let c of this.op_filters.toArray()) {
        // }
        if (fromInputKey == false)
            this.isMultipleValue = event.isMultipleValue;
        if (this.col.filter == false) {
            return;
        }
        // console.log('RECEIVE CHANGE OP',this.col, 'OP',this.filter_value1,this.filter_value2)
        //console.log('EMIT changeHeaderFilter', fromInputKey);
        if (fromInputKey)
            this.op_filter.setFirstChoice();
        this.changeHeaderFilter.emit({
            prop: this.col,
        });
    }
    _changeDate1(date) {
        if (this.col.filter == false) {
            return;
        }
        this.filter_value1 = '';
        try {
            // On supprime la notion de Timezone pour la sélection de date
            this.filter_value1 = date.toISOString().replace(/T.+/, ''); //.replace(/T.+/,'T00:00:00.000Z');
        }
        catch (e) {
        }
        this.changeHeaderFilter.emit({
            prop: this.col,
        });
    }
    _changeDate2(date) {
        if (this.col.filter == false) {
            return;
        }
        this.filter_value2 = '';
        try {
            // On supprime la notion de Timezone pour la sélection de date
            this.filter_value2 = date.toISOString().replace(/T.+/, ''); //.replace(/T.+/,'T00:00:00.000Z');
        }
        catch (e) {
        }
        this.changeHeaderFilter.emit({
            prop: this.col,
        });
    }
}
DataGridHeadFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'ma-data-grid-head-filter',
                template: "<table>\n    <tr>\n        <td class=\"header_filter_op\">\n           <ma-data-grid-op-filter #op_filter [col]=\"col\" (changeEmptyOperator)=\"_changeEmptyOperator($event)\" (changeOperator)=\"_changeOperator($event,false)\"></ma-data-grid-op-filter>\n        </td>\n        <td class=\"header_filter\" *ngIf=\"col.dataType != 'date' && col.dataType != 'boolean?' && col.dataType != 'boolean' && (!col.headFilter || col.headFilter.length == 0)\">\n            <div>\n                <input class=\"header_filter\" [(ngModel)]=\"filter_value1\" (keyup)=\"_changeOperator($event,true)\" />\n            </div>\n            <div *ngIf=\"isMultipleValue\">\n                <input class=\"header_filter\" [(ngModel)]=\"filter_value2\" (keyup)=\"_changeOperator($event,true)\" />\n            </div>\n        </td>\n        <td class=\"header_filter\" [style]=\"astuce_datapicker\">\n            <div>\n                <ma-data-grid-datepicker #madate_picker1 [date]=\"date1\" [materialize]=\"false\" type=\"date\" (changePicker)=\"_changeDate1($event)\"></ma-data-grid-datepicker>\n            </div>\n            <div *ngIf=\"isMultipleValue\">\n                <ma-data-grid-datepicker #madate_picker2 [date]=\"date2\" [materialize]=\"false\" type=\"date\" (changePicker)=\"_changeDate2($event)\"></ma-data-grid-datepicker>\n            </div>\n        </td>\n    </tr>\n</table>",
                styles: ["input.header_filter{background-color:#e8f5f8;border:0 inset #667;height:1.2rem;margin:0 0 0 -5px}::ng-deep .ma-data-grid-datepicker{height:1.2rem;max-height:1.2rem}td.header_filter{padding:1px 1px 1px 5px}td.header_filter_op{padding:1px 1px 1px 0}"]
            },] }
];
DataGridHeadFilterComponent.ctorParameters = () => [];
DataGridHeadFilterComponent.propDecorators = {
    filter_value1: [{ type: Input }],
    filter_value2: [{ type: Input }],
    col: [{ type: Input }],
    changeHeaderFilter: [{ type: Output }],
    op_filter: [{ type: ViewChild, args: [DataGridOpFilterComponent,] }],
    madate_picker1: [{ type: ViewChild, args: [DataGridPickerDateComponent,] }],
    madate_picker2: [{ type: ViewChild, args: [DataGridPickerDateComponent,] }]
};

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
    }
    /**
     * Unselect row or cell which has been selected
     */
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
    dataChange(evt) {
        // console.log("dataChange",evt);
        this.rowsChange.emit(evt);
    }
    _dataSelector(evt, prop) {
        // console.log("_dataSelector",evt,prop);
        if (typeof (evt) == 'object' && evt.length === undefined) {
            this.rowsSelect.emit([evt]);
        }
        else {
            this.rowsSelect.emit(evt);
        }
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
        // console.log('_sortData',this.sortedField)
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
        // console.log('_changeHeaderFilter')
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this._delayChangeHeaderFilter();
        }, 500);
    }
    _delayChangeHeaderFilter() {
        let conditions = [];
        // console.log('_delayChangeHeaderFilter')
        this.headerfilter.forEach((item) => {
            //item.filter_value;
            let condition = item.getFilter();
            if (condition) {
                if (conditions.length > 0) {
                    conditions.push('and');
                }
                //console.log("GET CONDITION",condition)
                conditions.push(condition);
            }
            //console.log(item.col.prop + ' => '+item.filter_value);
        });
        //console.log("CONDITIONS", conditions);
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
MaDataGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'ma-data-grid',
                //providers: [PipeLengthPipe],
                template: "<!-- #gridfilter *ngIf=\"extFilter\" -->\r\n<ma-data-grid-filter #gridfilter *ngIf=\"extFilter\" [customCSS]=\"customCSS\"  [(searchValue)]=\"searchValue\" [columns]=\"columns\"  (filterChange)=\"_filterChange($event)\"></ma-data-grid-filter>\r\n<div class=\"datagrid_page\">\r\n    <div class=\"scroller\">\r\n        <table class=\"{{customCSS}}grid_table\">\r\n            <!-- HEADER -->\r\n            <tr class=\"grid_row\">\r\n                <td class=\"{{customCSS}}grid_cell {{customCSS}}grid_cell_title\"  [ngClass]=\"{grid_cell_first: i==0}\" *ngFor=\"let col of columns;index as i; \">\r\n                    <datagrid-cellheader-container [ngSwitch]=\"true\"  >\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.dataType == 'selector'\"><ma-data-grid-cell-selector [prop]=\"col.prop\" [isHeader]=\"true\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"rows_displayed\"></ma-data-grid-cell-selector><span>{{col.title}}</span></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchDefault >{{col.title}}</datagrid-cell-element>\r\n                    </datagrid-cellheader-container>\r\n                    \r\n                    <span *ngIf=\"col.dataType != 'selector' && col.sorted === true\" (click)=\"sortBy(col)\">\r\n                        <span *ngIf=\"sortedField.field != col.prop\" class=\"grid_sort tiny material-icons\">unfold_more</span>\r\n                        <span *ngIf=\"sortedField.field === col.prop && sortedField.reverse\" class=\"grid_sort tiny material-icons\">arrow_drop_down</span>\r\n                        <span *ngIf=\"sortedField.field === col.prop && !sortedField.reverse\" class=\"grid_sort tiny material-icons\">arrow_drop_up</span>\r\n                    </span> \r\n                </td>\r\n            </tr>\r\n            <!-- Head Filter -->\r\n            <tr class=\"{{customCSS}}grid_row\" *ngIf=\"headFilter\">\r\n                <td class=\"{{customCSS}}grid_cell {{customCSS}}grid_cell_title\"  [ngClass]=\"{grid_cell_first: i==0}\" *ngFor=\"let col of columns;index as i; \">\r\n                    <ma-data-grid-head-filter #headerfilter *ngIf=\"(col.dataType && col.dataType != 'selector' &&  col.filter !== false) || (col.filter !== false && col.headFilter != null  && col.headFilter.length > 0)\" [col]=\"col\" (changeHeaderFilter)=\"_changeHeaderFilter($event)\"></ma-data-grid-head-filter>\r\n                </td>\r\n            </tr>\r\n            <!-- DATA -->\r\n            <tr class=\"{{customCSS}}grid_row\" *ngFor=\"let row of rows_displayed; \r\n                    last as isLastRow; \r\n                    even as pair; \r\n                    index as i; \r\n                    first as isFirstRow\"\r\n                (click)=\"SelectRow(i,row)\" [ngClass]=\"{'grid_row_selected': i == row_selected && !cell_selected, 'CSSclassEven': pair,'CSSclassOdd': !pair, 'grid_row_first': isFirstRow, 'grid_row_end': isLastRow}\">\r\n    \r\n                <td class=\"{{customCSS}}grid_cell {{col.cssClass}}\" *ngFor=\"let col of columns; \r\n                    index as ncol; \r\n                    count as maxcol; \r\n                    first as isFirstCol\r\n                    last as isLastCol;\" \r\n                    \r\n                    [ngClass]=\"{'grid_cell_selected': i == row_selected && col.prop == cell_selected, 'grid_cell_end': isLastCol,'grid_cell_first': isFirstCol}\"\r\n                    (click)=\"SelectCell(i,row,col)\">\r\n                    <!--  {{col.prop}} repr\u00E9sente le nom de colonne d'un \u00E9l\u00E9ment contenu dans 'colmuns' -- >\r\n                    <div *ngIf=\"col.isRowNumber === true; then RowNumberBlock else dataBlock\"></div>\r\n                    <ng-template #RowNumberBlock>{{i}}</ng-template>\r\n                    <ng-template #dataBlock> {{u[col.prop] | dataGridPipe :u :c}}</ng-template>\r\n                    -->\r\n                    <datagrid-cell-container [ngSwitch]=\"true\"  >\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.dataType == 'selector'\" ngSwitchBreak><ma-data-grid-cell-selector [prop]=\"col.prop\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"row\"></ma-data-grid-cell-selector></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.useTemplate != null\" ngSwitchBreak><ma-data-grid-template-cell-t1 [template]=\"col.useTemplate\" [prop]=\"col.prop\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"row\"></ma-data-grid-template-cell-t1></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.canEdit === true && col.useTemplate == null\" ngSwitchBreak><ma-data-grid-celledit-item [prop]=\"col.prop\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"row\"></ma-data-grid-celledit-item></datagrid-cell-element>\r\n                        <!-- <datagrid-cell-element *ngSwitchCase=\"col.isRowNumber === true\" ngSwitchBreak>{{i}}</datagrid-cell-element> -->\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.isHTML === true\" ngSwitchBreak>\r\n                            <span [innerHTML]=\"row[col.prop] | maDataGridPipe :row :col\"></span>\r\n                        </datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.useTemplate == null && col.canEdit !== true && (col.dataType == 'boolean' || col.dataType == 'boolean?')\" ngSwitchBreak><ma-data-grid-cell-boolean [col]=\"col\" [data]=\"row\"></ma-data-grid-cell-boolean></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchDefault>{{row[col.prop] | maDataGridPipe :row :col}}</datagrid-cell-element>\r\n                    </datagrid-cell-container>\r\n                </td>\r\n        \r\n            </tr>\r\n        </table>\r\n        \r\n    </div>\r\n    <div class=\"row\" style=\"padding-top: 5px;\" *ngIf=\"nb_record >= 0\">\r\n        <div class=\"col s3 \">\r\n            <div class=\"page_number\">#{{nb_record}} record<span *ngIf=\"nb_record > 1\">s</span></div>\r\n        </div>\r\n        <div class=\"col s8 div_pagination\">\r\n           \r\n            <ul class=\"pagination\">\r\n                <li *ngIf=\"max_page >= 9\" (click)=\"FastDecrementPage()\" [ngClass]=\"{'disabled': current_page == 0,'': current_page != 0}\"><a  class=\"pointer\"><i class=\"material-icons small\">fast_rewind</i></a></li>\r\n                <li *ngIf=\"nb_record > 0\" (click)=\"DecrementPage()\" [ngClass]=\"{'disabled': current_page == 0,'': current_page != 0}\"><a  class=\"pointer\"><i class=\"material-icons small\">chevron_left</i></a></li>\r\n                <li *ngFor=\"let n_page of pages\" (click)=\"_changePage(n_page)\" [ngClass]=\"{'active': current_page == n_page,'': current_page != n_page}\" ><a class=\"pointer\" class=\"a_pagination small \">{{(n_page+1)}}</a></li>\r\n                <li *ngIf=\"nb_record > 0\" (click)=\"IncrementPage()\" [ngClass]=\"{'disabled': current_page == max_page,'': current_page != max_page}\"><a  class=\"pointer\"><i class=\"material-icons small\">chevron_right</i></a></li>\r\n                <li *ngIf=\"max_page >= 9\" (click)=\"FastIncrementPage()\" [ngClass]=\"{'disabled': current_page == max_page,'': current_page != max_page}\"><a class=\"pointer\"><i class=\"material-icons small\">fast_forward</i></a></li>\r\n            </ul>\r\n       \r\n        </div>\r\n    </div>\r\n</div>\r\n    \r\n    ",
                styles: [":host{--color-border:#667;--color-defaut:#667}.datagrid_page .CSSclassOdd{background-color:#ddd}.datagrid_page{height:100%;width:100%}.div_pagination .pointer{cursor:default}.div_pagination .page_number{color:var(--color-defaut);font-size:1rem;padding:0 10px}.datagrid_page .div_pagination{display:-ms-inline-grid;display:inline-grid;justify-content:flex-end}.a_pagination:hover,.div_pagination .a_pagination{color:var(--color-border);display:inline-block;font-size:1rem;line-height:30px;padding:0 10px;text-decoration:none}.datagrid_page .scroller{-ms-grid-row-align:center;align-self:center;background-color:#fefefe;overflow:auto;scrollbar-color:var(--color-border) #fefefe;scrollbar-width:auto;width:100%}.grid_table .grid_row_selected{background-color:#667;color:#ddd}.grid_table .grid_sort{cursor:pointer}.datagrid_page .grid_table{width:100%}.grid_table .grid_cell_title{border-top:1px solid var(--color-border);color:var(--color-defaut);font-weight:700;text-align:center}.grid_table .grid_cell_selected{background-color:#667;color:#ddd}.grid_table .grid_cell_first{border-left:1px solid var(--color-border)}.grid_table .grid_cell_end{border-right:0 solid var(--color-border)}.grid_table .grid_cell{border-right:1px solid var(--color-border)}.grid_table .grid_row_first{border-bottom:1px solid var(--color-border)}.grid_table .grid_row_last{border-bottom:0 solid var(--color-border)}.grid_table .grid_row{border-bottom:1px solid var(--color-border)}"]
            },] }
];
MaDataGridComponent.ctorParameters = () => [];
MaDataGridComponent.propDecorators = {
    columns: [{ type: Input }],
    limit: [{ type: Input }],
    canSelect: [{ type: Input }],
    extFilter: [{ type: Input }],
    headFilter: [{ type: Input }],
    pagination: [{ type: Input }],
    page: [{ type: Input }],
    count: [{ type: Input }],
    customCSS: [{ type: Input }],
    myGrid: [{ type: Input }],
    rows: [{ type: Input }],
    change: [{ type: Output }],
    select: [{ type: Output }],
    extFilterChange: [{ type: Output }],
    filterChange: [{ type: Output }],
    changePage: [{ type: Output }],
    sort: [{ type: Output }],
    canSelectChange: [{ type: Output }],
    rowsChange: [{ type: Output }],
    rowsSelect: [{ type: Output }],
    gridfilter: [{ type: ViewChild, args: [MaGridFilterComponent, { static: true },] }],
    headerfilter: [{ type: ViewChildren, args: [DataGridHeadFilterComponent,] }],
    sortedField: [{ type: Input }]
};

class MaAnchorGridCellDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
MaAnchorGridCellDirective.decorators = [
    { type: Directive, args: [{
                selector: '[libMaAnchorGridCell]'
            },] }
];
MaAnchorGridCellDirective.ctorParameters = () => [
    { type: ViewContainerRef }
];

class MaGridCellTemplateDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
MaGridCellTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[libMaGridCellTemplate]'
            },] }
];
MaGridCellTemplateDirective.ctorParameters = () => [
    { type: ViewContainerRef }
];

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

class DataGridTemplateCellComponent {
    constructor(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        // console.log('DataGridTemplateCellComponent c',this.template, this.prop);
    }
    ngOnInit() {
        var _a;
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
        (_a = componentRef.instance.dataChange) === null || _a === void 0 ? void 0 : _a.subscribe(d => {
            if (componentRef.instance.myGrid != null) {
                componentRef.instance.myGrid.dataChange(d);
            }
        });
    }
}
DataGridTemplateCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'ma-data-grid-template-cell-t1',
                template: '<ng-template libMaGridCellTemplate></ng-template>'
            },] }
];
DataGridTemplateCellComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
DataGridTemplateCellComponent.propDecorators = {
    data: [{ type: Input }],
    prop: [{ type: Input }],
    col: [{ type: Input }],
    template: [{ type: Input }],
    myGrid: [{ type: Input }],
    dataChange: [{ type: Output }],
    libMaGridCellTemplate: [{ type: ViewChild, args: [MaGridCellTemplateDirective, { static: true },] }]
};

class DataGridPipePipe {
    transform(value, row, col) {
        if (col.pipe) {
            return col.pipe(value, row, col);
        }
        return value;
    }
}
DataGridPipePipe.decorators = [
    { type: Pipe, args: [{
                name: 'maDataGridPipe'
            },] }
];

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
DataGridCellBooleanComponent.decorators = [
    { type: Component, args: [{
                selector: 'ma-data-grid-cell-boolean',
                //template: '<div style="text-align: center"><i class="tiny material-icons">{{icon}}</i></div>'
                template: '<div style="text-align: center"><i *ngIf="data[col.prop] === true" class="tiny material-icons">check_box</i><i *ngIf="data[col.prop] === false" class="tiny material-icons">check_box_outline_blank</i></div>'
            },] }
];
DataGridCellBooleanComponent.ctorParameters = () => [];
DataGridCellBooleanComponent.propDecorators = {
    data: [{ type: Input }],
    col: [{ type: Input }]
};

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
        //console.log(evt);
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
        else if (this.col && (this.col.dataType == 'boolean' || this.col.dataType == 'boolean?')) {
            this.data[this.prop] = this.myInput.nativeElement.checked;
        }
        else {
            this.data[this.prop] = this.myInput.nativeElement.value;
        }
        if (emitEvent) {
            // console.log('EMIT dataChange',this.data);
            this.dataChange.emit(this.data);
            if (this.myGrid != null) {
                this.myGrid.dataChange(this.data);
            }
        }
    }
    onChangeDate(evt) {
        //this.data[this.prop] = evt.nativeElement.value;
        // console.log('EMIT dataChange',this.data);
        this.dataChange.emit(this.data);
        if (this.myGrid != null) {
            this.myGrid.dataChange(this.data);
        }
    }
    onChangeCheckbox() {
        // console.log('elem',this.myInputCheckbox.nativeElement);
        this.data[this.prop] = this.myInputCheckbox.nativeElement.checked;
        // console.log('EMIT dataChange',this.data);
        this.dataChange.emit(this.data);
        if (this.myGrid != null) {
            this.myGrid.dataChange(this.data);
        }
    }
    ngOnChanges(changes) {
        // console.log('DataGridCelleditItem ngOnChanges',changes)
    }
}
DataGridCelleditItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'ma-data-grid-celledit-item',
                template: "<div *ngIf=\"!col || (col && col.dataType != 'boolean?' && col.dataType != 'boolean' && col.dataType != 'date')\">\n    <!-- (keyup)=\"onChange()\" (keypress)=\"onPress($Event)\" -->\n    <input #myInput type=\"text\" [(value)]=\"data[prop]\" (keypress)=\"onPress($event)\" (change)=\"onChange()\">\n</div>\n<div *ngIf=\"col && (col.dataType == 'boolean' || col.dataType == 'boolean?')\">\n    <label>\n        <input #myInputCheckbox type=\"checkbox\" [(ngModel)]=\"data[col.prop]\" (change)=\"onChangeCheckbox()\" />\n        <span></span>\n    </label>\n</div>\n<div *ngIf=\"col && col.dataType == 'date'\">\n   <input type=\"date\" [(ngModel)]=\"data[col.prop]\" (change)=\"onChangeDate($event)\" />\n</div>",
                styles: [""]
            },] }
];
DataGridCelleditItemComponent.ctorParameters = () => [];
DataGridCelleditItemComponent.propDecorators = {
    myInput: [{ type: ViewChild, args: ["myInput", { static: false },] }],
    myInputCheckbox: [{ type: ViewChild, args: ["myInputCheckbox", { static: false },] }],
    dataChange: [{ type: Output }],
    data: [{ type: Input }],
    col: [{ type: Input }],
    prop: [{ type: Input }],
    myGrid: [{ type: Input }]
};

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
DataGridCellSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'ma-data-grid-cell-selector',
                template: "<span>\n    <!--  [(ngModel)]=\"realValue\" [checked]=\"checked\" -->\n    <label>\n        <input [(ngModel)]=\"data[col.prop]\" #myInputSelectorBox type=\"checkbox\"  (change)=\"onChangeCheckbox()\" />\n        <span></span>\n    </label>\n</span>",
                styles: [""]
            },] }
];
DataGridCellSelectorComponent.ctorParameters = () => [];
DataGridCellSelectorComponent.propDecorators = {
    myInputSelectorBox: [{ type: ViewChild, args: ["myInputSelectorBox", { static: false },] }],
    dataChange: [{ type: Output }],
    data: [{ type: Input }],
    isHeader: [{ type: Input }],
    col: [{ type: Input }],
    prop: [{ type: Input }],
    myGrid: [{ type: Input }]
};

//export var  M;
class MaDataGridModule {
}
MaDataGridModule.decorators = [
    { type: NgModule, args: [{
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
                    CommonModule,
                    FormsModule
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

export { MaDataGridComponent, MaDataGridModule, MaGridFilterComponent, options_header_boolean, options_header_booleanornull, options_header_date, options_header_number, options_header_string, DataGridHeadFilterComponent as ɵa, DataGridOpFilterComponent as ɵb, DataGridPickerDateComponent as ɵc, MaAnchorGridCellDirective as ɵd, DataGridTemplateCellComponent as ɵe, MaGridCellTemplateDirective as ɵf, DataGridPipePipe as ɵg, DataGridCellBooleanComponent as ɵh, DataGridCelleditItemComponent as ɵi, DataGridCellSelectorComponent as ɵj };
//# sourceMappingURL=amn31-ma-data-grid.js.map
