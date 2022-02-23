import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { options_header_boolean, options_header_booleanornull, options_header_date, options_header_number, options_header_string } from '../../interfaces/ma-data-grid-options';
import * as $ from 'jquery';
const defaut_label = '';
export class DataGridOpFilterComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLW9wLWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiRDovTXlIb21lL2FuZHJvaWQvd29ya3NwYWNlL2dpdC9tYS1uZy1kYXRhLWdyaWQvcHJvamVjdHMvbWEtZGF0YS1ncmlkL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGEtZ3JpZC1vcC1maWx0ZXIvZGF0YS1ncmlkLW9wLWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBaUQsc0JBQXNCLEVBQUUsNEJBQTRCLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMvTixPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUc1QixNQUFNLFlBQVksR0FBRyxFQUFFLENBQUE7QUFXdkIsTUFBTSxPQUFPLHlCQUF5QjtJQXFCcEM7UUFuQlMsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUlWLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN6Qyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXhELG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBRWpDLFlBQU8sR0FBMkIsSUFBSSxDQUFDO1FBQ3ZDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixXQUFNLEdBQTJCLEVBQUUsQ0FBQztRQUNwQyxVQUFLLEdBQUcsWUFBWSxDQUFDO1FBQ3JCLGtCQUFhLEdBQVE7WUFDbkIsR0FBRyxFQUFFLENBQUM7WUFDTixJQUFJLEVBQUUsQ0FBQztTQUNSLENBQUE7UUFnQkQsa0JBQWEsR0FBRyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQTtJQWRy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QUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQztnQkFDNUIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO2dCQUNiLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTthQUNyQixDQUFDLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRUQsZUFBZTtRQUNiLG9HQUFvRztRQUNwRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUN2QixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsNENBQTRDO1NBQzVCLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7WUEzVEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLDBoQ0FBbUQ7O2FBRXBEOzs7O29CQUdFLEtBQUs7a0JBQ0wsS0FBSzt5QkFDTCxTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTt3QkFDekMsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7NkJBQ3hDLE1BQU07a0NBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZENvbHVtbk9wdGlvbnMsIE1hRGF0YUdyaWRIZWFkRmlsdGVyLCBvcHRpb25zX2hlYWRlcl9ib29sZWFuLCBvcHRpb25zX2hlYWRlcl9ib29sZWFub3JudWxsLCBvcHRpb25zX2hlYWRlcl9kYXRlLCBvcHRpb25zX2hlYWRlcl9udW1iZXIsIG9wdGlvbnNfaGVhZGVyX3N0cmluZyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvbWEtZGF0YS1ncmlkLW9wdGlvbnMnO1xuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgRmlsdGVyQ29uZGl0aW9ucyB9IGZyb20gJ0BhbW4zMS9maWx0ZXItbXVsdGlwbGUtY29uZGl0aW9ucyc7XG5cbmNvbnN0IGRlZmF1dF9sYWJlbCA9ICcnXG5cbmV4cG9ydCBpbnRlcmZhY2UgT3BlcmF0b3JFdmVudCB7XG4gIGlzTXVsdGlwbGVWYWx1ZTogYm9vbGVhbjtcbiAgY29sOiBNYURhdGFHcmlkQ29sdW1uT3B0aW9ucztcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hLWRhdGEtZ3JpZC1vcC1maWx0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS1ncmlkLW9wLWZpbHRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RhdGEtZ3JpZC1vcC1maWx0ZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGFHcmlkT3BGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gIEBJbnB1dCgpIHZhbHVlID0gJyc7XG4gIEBJbnB1dCgpIGNvbDogTWFEYXRhR3JpZENvbHVtbk9wdGlvbnM7XG4gIEBWaWV3Q2hpbGQoXCJlbGVtVG9nZ2xlXCIsIHsgc3RhdGljOiBmYWxzZSB9KSBlbGVtVG9nZ2xlOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiZWxlbVZhbHVlXCIsIHsgc3RhdGljOiBmYWxzZSB9KSBlbGVtVmFsdWU6IEVsZW1lbnRSZWY7XG4gIEBPdXRwdXQoKSBjaGFuZ2VPcGVyYXRvciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY2hhbmdlRW1wdHlPcGVyYXRvciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBcbiAgaXNNdWx0aXBsZVZhbHVlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgb3B0aW9uczogTWFEYXRhR3JpZEhlYWRGaWx0ZXJbXSA9IG51bGw7XG4gIG11bHRpcGxlID0gZmFsc2U7XG4gIGlzSFRNTDogYm9vbGVhbiA9IGZhbHNlO1xuICB2YWx1ZXM6IE1hRGF0YUdyaWRIZWFkRmlsdGVyW10gPSBbXTtcbiAgbGFiZWwgPSBkZWZhdXRfbGFiZWw7XG4gIHBvcHVwUG9zaXRpb246IGFueSA9IHtcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMFxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBnZXRGdW5jQ2xpY2tEb2N1bWVudCgpIHtcbiAgICBsZXQgZmN0ID0gKCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coJ0NMSUNLJylcbiAgICAgIHRoaXMuZWxlbVRvZ2dsZS5uYXRpdmVFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgdGhpcy5lbGVtVG9nZ2xlLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnYWxpY2VibHVlJztcbiAgICAgIHRoaXMuZWxlbVRvZ2dsZS5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IDA7XG4gICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrJywgZmN0KVxuICAgIH1cbiAgICByZXR1cm4gZmN0XG4gIH1cblxuXG4gIGNzc0VsZW1Ub2dnbGUgPSB7IGhlaWdodDogdW5kZWZpbmVkIH1cbiAgdG9nZ2xlRGl2KCkge1xuXG4gICAgLy8gZG9jdWRkZGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGV2dCkgPT4gXG4gICAgLy8ge1xuICAgIC8vICAgY29uc29sZS5sb2coJ1JSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSJylcbiAgICAvLyAgICAgcmV0dXJuIG51bGxcbiAgICAvLyAgIH1cbiAgICAvLyAsZmFsc2UpXG4gICAgdmFyIG9uQ2xpY2tEb2N1bWVudCA9IHRoaXMuZ2V0RnVuY0NsaWNrRG9jdW1lbnQoKVxuICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2snLCBvbkNsaWNrRG9jdW1lbnQpO1xuXG4gICAgaWYgKHRoaXMuZWxlbVRvZ2dsZS5uYXRpdmVFbGVtZW50LnN0eWxlLm9wYWNpdHkgPT0gMCkge1xuICAgICAgdGhpcy5lbGVtVG9nZ2xlLm5hdGl2ZUVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICB0aGlzLmVsZW1Ub2dnbGUubmF0aXZlRWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9ICcjOWU5ZTllJztcbiAgICAgIHRoaXMuZWxlbVRvZ2dsZS5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuY3NzRWxlbVRvZ2dsZS5oZWlnaHQgKyAncHgnO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2snLCBvbkNsaWNrRG9jdW1lbnQpXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIG9uQ2xpY2tEb2N1bWVudCk7XG4gICAgICB9LCA1MDApXG5cbiAgICB9IGVsc2Uge1xuICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljaycsIG9uQ2xpY2tEb2N1bWVudClcbiAgICB9XG5cbiAgfVxuXG4gIGNsb25lT3B0aW9ucyhvcHRzKTogTWFEYXRhR3JpZEhlYWRGaWx0ZXJbXSB7XG4gICAgaWYgKG9wdHMgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGxldCBvcHRpb25zOiBNYURhdGFHcmlkSGVhZEZpbHRlcltdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvcHRpb25zLnB1c2goT2JqZWN0LmFzc2lnbih7fSwgb3B0c1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmNzc0VsZW1Ub2dnbGUuaGVpZ2h0ID0gdGhpcy5lbGVtVG9nZ2xlLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIHRoaXMuZWxlbVRvZ2dsZS5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICB0aGlzLmlzSFRNTCA9IHRoaXMuY29sLmlzSFRNTDtcbiAgICBpZiAodGhpcy5jb2wuZGF0YVR5cGUgPT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuY2xvbmVPcHRpb25zKG9wdGlvbnNfaGVhZGVyX3N0cmluZyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbC5kYXRhVHlwZSA9PSAnYm9vbGVhbj8nKSB7XG4gICAgICB0aGlzLm11bHRpcGxlID0gdHJ1ZTtcbiAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuY2xvbmVPcHRpb25zKG9wdGlvbnNfaGVhZGVyX2Jvb2xlYW5vcm51bGwpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2wuZGF0YVR5cGUgPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLm11bHRpcGxlID0gdHJ1ZTtcbiAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuY2xvbmVPcHRpb25zKG9wdGlvbnNfaGVhZGVyX2Jvb2xlYW4pO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2wuZGF0YVR5cGUgPT0gJ251bWJlcicgfHwgdGhpcy5jb2wuZGF0YVR5cGUgPT0gJ2Zsb2F0Jykge1xuICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5jbG9uZU9wdGlvbnMob3B0aW9uc19oZWFkZXJfbnVtYmVyKVxuICAgIH1cbiAgICBpZiAodGhpcy5jb2wuZGF0YVR5cGUgPT0gJ2RhdGUnKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmNsb25lT3B0aW9ucyhvcHRpb25zX2hlYWRlcl9kYXRlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29sLmRhdGFUeXBlID09ICdzZWxlY3RvcicpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IFtdO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2wuaGVhZEZpbHRlcikge1xuICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5jb2wuaGVhZEZpbHRlcjtcbiAgICAgIHRoaXMubXVsdGlwbGUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zID09IG51bGwpXG4gICAgICB0aHJvdyAoJ0JhZCBkZWZpbml0aW9uIHRvIG9wZXJhdG9yICcgKyB0aGlzLmNvbC5wcm9wKTtcblxuICAgIC8vIFByw6ktc2VsZWN0aW9uIGRlIGwnb3BlcmF0b3JcbiAgICBpZiAoIXRoaXMubXVsdGlwbGUgJiYgdGhpcy5jb2wuc2VsZWN0ZWRGaWx0ZXIpIHtcbiAgICAgIGxldCBzZWxlY3RlZCA9IHRoaXMub3B0aW9ucy5maW5kKChkKSA9PiBkLmxhYmVsID09PSB0aGlzLmNvbC5zZWxlY3RlZEZpbHRlci5sYWJlbCk7XG4gICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJTRUxFQ1RFRCBTSU5HTEVcIiwgdGhpcy5jb2wucHJvcCwgc2VsZWN0ZWQpO1xuICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKHNlbGVjdGVkLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmNsb25lT3B0aW9ucyh0aGlzLm9wdGlvbnMpO1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5vcHRpb25zKSB7XG4gICAgICBpZiAodGhpcy5jb2wuc2VsZWN0ZWRGaWx0ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZih0aGlzLmNvbC5zZWxlY3RlZEZpbHRlci5sYWJlbCkgPT0gJ3N0cmluZycgJiYgdGhpcy5jb2wuc2VsZWN0ZWRGaWx0ZXIubGFiZWwgPT0gdGhpcy5vcHRpb25zW2ldLmxhYmVsKSB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zW2ldLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0eXBlb2YodGhpcy5jb2wuc2VsZWN0ZWRGaWx0ZXIubGFiZWwpID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb2wuc2VsZWN0ZWRGaWx0ZXIubGFiZWwuZmluZChlID0+IGUgPT0gdGhpcy5vcHRpb25zW2ldLmxhYmVsKSkge1xuICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNbaV0uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMub3B0aW9uc1tpXS5jaGVja2VkICE9PSB0cnVlKSB7XG4gICAgICAgIHRoaXMub3B0aW9uc1tpXS5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU0VMRUNURUQgTVVMVElQTEVcIiwgdGhpcy5jb2wucHJvcCwgdGhpcy5vcHRpb25zW2ldKTtcbiAgICAgICAgICB0aGlzLm9wdGlvbnNbaV0uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuY2hhbmdlVmFsdWVzKHRoaXMub3B0aW9uc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHNldEZpcnN0Q2hvaWNlKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwic2V0Rmlyc3RDaG9pY2UgKDEpIFwiK3RoaXMudmFsdWUrJyAnK3RoaXMubGFiZWwpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwic2V0Rmlyc3RDaG9pY2UgXCIsdGhpcy52YWx1ZSx0aGlzLmxhYmVsLHRoaXMub3B0aW9ucylcbiAgICBpZiAodGhpcy5tdWx0aXBsZSA9PT0gZmFsc2UgJiYgdGhpcy5sYWJlbCA9PSAnJykge1xuICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uc1tpXS5sYWJlbCAhPSAnJykge1xuICAgICAgICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5vcHRpb25zW2ldLCB0cnVlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIGdldE9wZXJhdG9yKCkge1xuICAgIGlmICh0aGlzLm11bHRpcGxlID09PSBmYWxzZSkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2dldE9wZXJhdG9yICcgKyB0aGlzLmNvbC5wcm9wICsgJyB2YWx1ZSAnICsgdGhpcy52YWx1ZSwgdGhpcy5vcHRpb25zKVxuICAgICAgaWYgKHRoaXMudmFsdWUgPT0gJycpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbmQoKGQpID0+IGQubGFiZWwgPT09IHRoaXMudmFsdWUgJiYgZC5jaGVja2VkID09IHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNoYW5nZVZhbHVlcyhvcHQpIHtcbiAgICAvKiBDaGFuZ2VtZW50IGRlIGwnb3BlcmF0ZXVyIGRhbnMgbGEgY2FzIGRlIHZhbGV1cnMgbXVsdGlwbGVzIGQnb3BlcmF0ZXVycyBcbiAgICAgICAgRXg6IHsgdmFsdWU6IFwiQXBwbGVcIiwgb3BlcmF0b3I6IFwiPVwiLCBsYWJlbDogXCJBcHBsZVwiLCBjaGVja2VkOiBmYWxzZSB9ICovXG4gICAgLy8gY29uc29sZS5sb2coXCJDSEFOR0VTIFZBTFVFU1wiLCB0aGlzLmNvbC5wcm9wLCBvcHQpXG4gICAgaWYgKG9wdC5jaGVja2VkKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImNoZWNrZWRcIik7XG4gICAgICBvcHQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgLy90aGlzLnZhbHVlcy5zcGxpY2UodGhpcy52YWx1ZXMuZmluZCgoYSkgPT4gYS52YWx1ZSA9PT0gb3B0LnZhbHVlICYmIGEub3BlcmF0b3IgPT09IG9wdC5vcGVyYXRvciksMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIC8vdGhpcy52YWx1ZXMucHVzaChvcHQpO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlcy5zcGxpY2UoMCk7XG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLm9wdGlvbnMpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnNbaV0uY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlcy5wdXNoKHRoaXMub3B0aW9uc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudmFsdWVzKVxuICAgIHRoaXMubGFiZWwgPSAnKCcgKyB0aGlzLnZhbHVlcy5sZW5ndGggKyAnKSc7XG4gICAgaWYgKHRoaXMudmFsdWVzLmxlbmd0aCA9PSAwKVxuICAgICAgdGhpcy5sYWJlbCA9IGRlZmF1dF9sYWJlbDtcbiAgICAvL3RoaXMudG9nZ2xlRGl2KCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZVZhbHVlIE9QJywgdGhpcy52YWx1ZXMpO1xuICAgIHRoaXMuX2NoYW5nZU9wZXJhdG9yKCk7XG4gIH1cblxuICBpc09wZXJhdG9yTXVsdGlwbGUobzogTWFEYXRhR3JpZEhlYWRGaWx0ZXIpIHtcbiAgICByZXR1cm4gKG8gJiZcbiAgICAgIG8ub3BlcmF0b3IgJiYgdHlwZW9mIChvLm9wZXJhdG9yKSA9PSAnb2JqZWN0JyAmJiBvLm9wZXJhdG9yLmxlbmd0aCA+IDAgJiZcbiAgICAgIG8udmFsdWUgJiYgdHlwZW9mIChvLnZhbHVlKSA9PSAnb2JqZWN0JyAmJiBvLnZhbHVlLmxlbmd0aCA+IDApXG4gIH1cblxuXG4gIGdldENvbmRpdGlvbnMoZmlsdGVyX3ZhbHVlMSwgZmlsdGVyX3ZhbHVlMik6IEZpbHRlckNvbmRpdGlvbnMge1xuXG4gICAgaWYgKHRoaXMubXVsdGlwbGUgPT0gZmFsc2UpIHtcbiAgICAgIGxldCBvID0gdGhpcy5nZXRPcGVyYXRvcigpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2dldEZpbHRlciAnICsgdGhpcy5jb2wucHJvcCArIFwiIG9cIiwgbylcbiAgICAgIGlmIChvICE9IG51bGwgJiYgby5vcGVyYXRvciAhPSAnJykge1xuICAgICAgICAvLyBDQVM6IE9wZXJhdG9yTXVsdGlwbGVcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVyYXRvck11bHRpcGxlKG8pKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0RmlsdGVyIHZhbHVlcyAnICwgZmlsdGVyX3ZhbHVlMSAsIFwiIC9cIiwgZmlsdGVyX3ZhbHVlMilcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImdldENvbmRpdGlvbnMoKSBPcGVyYXRvck11bHRpcGxlIFZhbHVlTXVsdGlwbGUgXCIsIG8pXG5cbiAgICAgICAgICBsZXQgdmFsdWUxID0gby52YWx1ZVswXS50b1N0cmluZygpLnJlcGxhY2UoJyR7MX0nLCBmaWx0ZXJfdmFsdWUxKTtcbiAgICAgICAgICBsZXQgdmFsdWUyID0gby52YWx1ZVsxXS50b1N0cmluZygpLnJlcGxhY2UoJyR7MX0nLCBmaWx0ZXJfdmFsdWUyKTtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdnZXRGaWx0ZXIgdmFsdWVzKDIpICcgLCB2YWx1ZTEgLCBcIiAvXCIsIHZhbHVlMilcbiAgICAgICAgICB2YXIgY29uZHM6IEZpbHRlckNvbmRpdGlvbnMgPSBbXTtcbiAgICAgICAgICBpZiAoZmlsdGVyX3ZhbHVlMSAhPSAnJykge1xuICAgICAgICAgICAgY29uZHMucHVzaChbdGhpcy5jb2wucHJvcCwgby5vcGVyYXRvclswXSwgdmFsdWUxXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmaWx0ZXJfdmFsdWUyICE9ICcnKSB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyX3ZhbHVlMSAhPSAnJykge1xuICAgICAgICAgICAgICBjb25kcy5wdXNoKCdhbmQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbmRzLnB1c2goW3RoaXMuY29sLnByb3AsIG8ub3BlcmF0b3JbMV0sIHZhbHVlMl0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY29uZHM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcImdldENvbmRpdGlvbnMoKSBTaW1wbGVWYWx1ZSBcIiwgbylcbiAgICAgICAgICBsZXQgdmFsdWUgPSBvLnZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgnJHsxfScsIGZpbHRlcl92YWx1ZTEpXG4gICAgICAgICAgLy9pZiAodGhpcy5jb2wuZGF0YVR5cGUgPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAvLyAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgICAvL31cbiAgICAgICAgICByZXR1cm4gW3RoaXMuY29sLnByb3AsIG8ub3BlcmF0b3IsIHZhbHVlXSBhcyBGaWx0ZXJDb25kaXRpb25zXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy52YWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgY29uZGl0aW9uczogRmlsdGVyQ29uZGl0aW9ucyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgLy8gQ0FTOiBPcGVyYXRvck11bHRpcGxlXG4gICAgICAgICAgaWYgKHRoaXMuaXNPcGVyYXRvck11bHRpcGxlKHRoaXMudmFsdWVzW2ldKSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJnZXRDb25kaXRpb25zKCkgT3BlcmF0b3JNdWx0aXBsZSBcIix0aGlzLnZhbHVlcyk7XG4gICAgICAgICAgICBsZXQgdmFsID0gdGhpcy52YWx1ZXNbaV0udmFsdWU7XG4gICAgICAgICAgICBsZXQgb3BzID0gdGhpcy52YWx1ZXNbaV0ub3BlcmF0b3I7XG4gICAgICAgICAgICB2YXIgY29uZHM6IEZpbHRlckNvbmRpdGlvbnMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGljID0gMDsgaWMgPCB2YWwubGVuZ3RoICYmIGljIDwgb3BzLmxlbmd0aDsgaWMrKykge1xuICAgICAgICAgICAgICBjb25kcy5wdXNoKFt0aGlzLmNvbC5wcm9wLCBvcHNbaWNdLCB2YWxbaWNdXSk7XG4gICAgICAgICAgICAgIGlmIChpYyA8ICh2YWwubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgICAgICBjb25kcy5wdXNoKCdhbmQnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25kaXRpb25zLnB1c2goY29uZHMpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vaWYgKHRoaXMuY29sLmRhdGFUeXBlID09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAvLyAgdiA9IHBhcnNlRmxvYXQodik7XG4gICAgICAgICAgICAvL31cbiAgICAgICAgICAgIGNvbmRpdGlvbnMucHVzaChbdGhpcy5jb2wucHJvcCwgdGhpcy52YWx1ZXNbaV0ub3BlcmF0b3IudG9TdHJpbmcoKSwgdGhpcy52YWx1ZXNbaV0udmFsdWUudG9TdHJpbmcoKV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy52YWx1ZXMubGVuZ3RoIC0gMSA+IGkpIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbnMucHVzaCgnb3InKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29uZGl0aW9ucztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjaGFuZ2VWYWx1ZShvcHQ6IE1hRGF0YUdyaWRIZWFkRmlsdGVyLCBpZ25vcmVUb2dnbGU/OiBib29sZWFuKSB7XG4gICAgLyogQ2hhbmdlbWVudCBkZSBsJ29wZXJhdGV1ciBkYW5zIGxhIGNhcyBkZSB2YWxldXJzIHNpbXBsZSAodW4gc2V1bCBjaG9peClcbiAgICAgICAgRXg6IHsgdmFsdWU6IFwiJSR7MX0lXCIsIG9wZXJhdG9yOiBcImxpa2VcIiwgbGFiZWw6IFwiY29udGFpbnNcIiwgY2hlY2tlZDogZmFsc2UgfSAqL1xuICAgIC8vIFxuXG4gICAgLy8gY29uc29sZS5sb2coXCJDSEFOR0UgVkFMVUVcIiwgb3B0Lm9wZXJhdG9yLCB0aGlzLmNvbC5wcm9wLCBvcHQpXG4gICAgaWYgKHRoaXMub3B0aW9ucy5maW5kKChkKSA9PiBkLmNoZWNrZWQgPT09IHRydWUpKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZmluZCgoZCkgPT4gZC5jaGVja2VkID09PSB0cnVlKS5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICAgIG9wdC5jaGVja2VkID0gIW9wdC5jaGVja2VkO1xuICAgIGlmIChvcHQubGFiZWwubWF0Y2goL15cXHMrJC8pKSB7XG4gICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgICB0aGlzLmxhYmVsID0gJyc7XG4gICAgICB0aGlzLmlzTXVsdGlwbGVWYWx1ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gb3B0LmxhYmVsO1xuICAgICAgdGhpcy5sYWJlbCA9IG9wdC5sYWJlbDtcbiAgICAgIHRoaXMuaXNNdWx0aXBsZVZhbHVlID0gdGhpcy5pc09wZXJhdG9yTXVsdGlwbGUob3B0KTtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlVmFsdWUgT1AnLCB0aGlzLm9wdGlvbnMpO1xuICAgIGlmICghaWdub3JlVG9nZ2xlKSB7XG4gICAgICB0aGlzLnRvZ2dsZURpdigpO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2VPcGVyYXRvcigpO1xuICAgIGlmIChvcHQub3BlcmF0b3IgPT0gJycpIHtcbiAgICAgIHRoaXMuY2hhbmdlRW1wdHlPcGVyYXRvci5lbWl0KHtcbiAgICAgICAgY29sOiB0aGlzLmNvbCxcbiAgICAgICAgaXNNdWx0aXBsZVZhbHVlOiB0aGlzLmlzTXVsdGlwbGVWYWx1ZVxuICAgICAgfSBhcyBPcGVyYXRvckV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBfY2hhbmdlT3BlcmF0b3IoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ0VNSVQgT1AnLCB0aGlzLmNvbC5wcm9wLCB0aGlzLm9wdGlvbnMuZmluZCgoZCkgPT4gZC5jaGVja2VkID09PSB0cnVlKSwgdGhpcy5vcHRpb25zKVxuICAgIHRoaXMuY2hhbmdlT3BlcmF0b3IuZW1pdCh7XG4gICAgICBjb2w6IHRoaXMuY29sLFxuICAgICAgaXNNdWx0aXBsZVZhbHVlOiB0aGlzLmlzTXVsdGlwbGVWYWx1ZVxuICAgICAgLy8gIGNvbmRpdGlvbjogWyB0aGlzLmNvbC5wcm9wLCB0aGlzLnZhbHVlIF1cbiAgICB9IGFzIE9wZXJhdG9yRXZlbnQpO1xuICB9XG59XG4iXX0=