import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { options_header_bool, options_header_boolean, options_header_date, options_header_number, options_header_string } from '../../interfaces/ma-data-grid-options';
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
            let selected = this.options.find((d) => d.label === this.col.selectedFilter.label);
            if (selected) {
                // console.log("SELECTED", this.col.prop, selected);
                this.changeValue(selected, true);
            }
        }
        for (var i in this.options) {
            if (this.options[i].checked !== true)
                this.options[i].checked = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLW9wLWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiRDovTXlIb21lL2FuZHJvaWQvd29ya3NwYWNlL2dpdC9tYS1uZy1kYXRhLWdyaWQvcHJvamVjdHMvbWEtZGF0YS1ncmlkL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGEtZ3JpZC1vcC1maWx0ZXIvZGF0YS1ncmlkLW9wLWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBaUQsbUJBQW1CLEVBQUUsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN0TixPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUc1QixNQUFNLFlBQVksR0FBRyxFQUFFLENBQUE7QUFXdkIsTUFBTSxPQUFPLHlCQUF5QjtJQW9CcEM7UUFsQlMsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUlWLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN6Qyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3hELG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBRWpDLFlBQU8sR0FBMkIsSUFBSSxDQUFDO1FBQ3ZDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixXQUFNLEdBQTJCLEVBQUUsQ0FBQztRQUNwQyxVQUFLLEdBQUcsWUFBWSxDQUFDO1FBQ3JCLGtCQUFhLEdBQVE7WUFDbkIsR0FBRyxFQUFFLENBQUM7WUFDTixJQUFJLEVBQUUsQ0FBQztTQUNSLENBQUE7UUFnQkQsa0JBQWEsR0FBRyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQTtJQWRy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QUFJLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7Z0JBQzVCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztnQkFDYixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7YUFDckIsQ0FBQyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVELGVBQWU7UUFDYixvR0FBb0c7UUFDcEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDdkIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2IsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLDRDQUE0QztTQUM1QixDQUFDLENBQUM7SUFDdEIsQ0FBQzs7O1lBdFNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQywwaENBQW1EOzthQUVwRDs7OztvQkFHRSxLQUFLO2tCQUNMLEtBQUs7eUJBQ0wsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7d0JBQ3pDLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzZCQUN4QyxNQUFNO2tDQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hRGF0YUdyaWRDb2x1bW5PcHRpb25zLCBNYURhdGFHcmlkSGVhZEZpbHRlciwgb3B0aW9uc19oZWFkZXJfYm9vbCwgb3B0aW9uc19oZWFkZXJfYm9vbGVhbiwgb3B0aW9uc19oZWFkZXJfZGF0ZSwgb3B0aW9uc19oZWFkZXJfbnVtYmVyLCBvcHRpb25zX2hlYWRlcl9zdHJpbmcgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL21hLWRhdGEtZ3JpZC1vcHRpb25zJztcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IEZpbHRlckNvbmRpdGlvbnMgfSBmcm9tICdAYW1uMzEvZmlsdGVyLW11bHRpcGxlLWNvbmRpdGlvbnMnO1xuXG5jb25zdCBkZWZhdXRfbGFiZWwgPSAnJ1xuXG5leHBvcnQgaW50ZXJmYWNlIE9wZXJhdG9yRXZlbnQge1xuICBpc011bHRpcGxlVmFsdWU6IGJvb2xlYW47XG4gIGNvbDogTWFEYXRhR3JpZENvbHVtbk9wdGlvbnM7XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYS1kYXRhLWdyaWQtb3AtZmlsdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtZ3JpZC1vcC1maWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXRhLWdyaWQtb3AtZmlsdGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhR3JpZE9wRmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBASW5wdXQoKSB2YWx1ZSA9ICcnO1xuICBASW5wdXQoKSBjb2w6IE1hRGF0YUdyaWRDb2x1bW5PcHRpb25zO1xuICBAVmlld0NoaWxkKFwiZWxlbVRvZ2dsZVwiLCB7IHN0YXRpYzogZmFsc2UgfSkgZWxlbVRvZ2dsZTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImVsZW1WYWx1ZVwiLCB7IHN0YXRpYzogZmFsc2UgfSkgZWxlbVZhbHVlOiBFbGVtZW50UmVmO1xuICBAT3V0cHV0KCkgY2hhbmdlT3BlcmF0b3IgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNoYW5nZUVtcHR5T3BlcmF0b3IgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgaXNNdWx0aXBsZVZhbHVlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgb3B0aW9uczogTWFEYXRhR3JpZEhlYWRGaWx0ZXJbXSA9IG51bGw7XG4gIG11bHRpcGxlID0gZmFsc2U7XG4gIGlzSFRNTDogYm9vbGVhbiA9IGZhbHNlO1xuICB2YWx1ZXM6IE1hRGF0YUdyaWRIZWFkRmlsdGVyW10gPSBbXTtcbiAgbGFiZWwgPSBkZWZhdXRfbGFiZWw7XG4gIHBvcHVwUG9zaXRpb246IGFueSA9IHtcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMFxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBnZXRGdW5jQ2xpY2tEb2N1bWVudCgpIHtcbiAgICBsZXQgZmN0ID0gKCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coJ0NMSUNLJylcbiAgICAgIHRoaXMuZWxlbVRvZ2dsZS5uYXRpdmVFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgdGhpcy5lbGVtVG9nZ2xlLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnYWxpY2VibHVlJztcbiAgICAgIHRoaXMuZWxlbVRvZ2dsZS5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IDA7XG4gICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrJywgZmN0KVxuICAgIH1cbiAgICByZXR1cm4gZmN0XG4gIH1cblxuXG4gIGNzc0VsZW1Ub2dnbGUgPSB7IGhlaWdodDogdW5kZWZpbmVkIH1cbiAgdG9nZ2xlRGl2KCkge1xuXG4gICAgLy8gZG9jdWRkZGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGV2dCkgPT4gXG4gICAgLy8ge1xuICAgIC8vICAgY29uc29sZS5sb2coJ1JSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSJylcbiAgICAvLyAgICAgcmV0dXJuIG51bGxcbiAgICAvLyAgIH1cbiAgICAvLyAsZmFsc2UpXG4gICAgdmFyIG9uQ2xpY2tEb2N1bWVudCA9IHRoaXMuZ2V0RnVuY0NsaWNrRG9jdW1lbnQoKVxuICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2snLCBvbkNsaWNrRG9jdW1lbnQpO1xuXG4gICAgaWYgKHRoaXMuZWxlbVRvZ2dsZS5uYXRpdmVFbGVtZW50LnN0eWxlLm9wYWNpdHkgPT0gMCkge1xuICAgICAgdGhpcy5lbGVtVG9nZ2xlLm5hdGl2ZUVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICB0aGlzLmVsZW1Ub2dnbGUubmF0aXZlRWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9ICcjOWU5ZTllJztcbiAgICAgIHRoaXMuZWxlbVRvZ2dsZS5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuY3NzRWxlbVRvZ2dsZS5oZWlnaHQgKyAncHgnO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2snLCBvbkNsaWNrRG9jdW1lbnQpXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIG9uQ2xpY2tEb2N1bWVudCk7XG4gICAgICB9LCA1MDApXG5cbiAgICB9IGVsc2Uge1xuICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljaycsIG9uQ2xpY2tEb2N1bWVudClcbiAgICB9XG5cbiAgfVxuXG4gIGNsb25lT3B0aW9ucyhvcHRzKTogTWFEYXRhR3JpZEhlYWRGaWx0ZXJbXSB7XG4gICAgaWYgKG9wdHMgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGxldCBvcHRpb25zOiBNYURhdGFHcmlkSGVhZEZpbHRlcltdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvcHRpb25zLnB1c2goT2JqZWN0LmFzc2lnbih7fSwgb3B0c1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmNzc0VsZW1Ub2dnbGUuaGVpZ2h0ID0gdGhpcy5lbGVtVG9nZ2xlLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIHRoaXMuZWxlbVRvZ2dsZS5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICB0aGlzLmlzSFRNTCA9IHRoaXMuY29sLmlzSFRNTDtcbiAgICBpZiAodGhpcy5jb2wuZGF0YVR5cGUgPT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuY2xvbmVPcHRpb25zKG9wdGlvbnNfaGVhZGVyX3N0cmluZyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbC5kYXRhVHlwZSA9PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMubXVsdGlwbGUgPSB0cnVlO1xuICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5jbG9uZU9wdGlvbnMob3B0aW9uc19oZWFkZXJfYm9vbGVhbik7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbC5kYXRhVHlwZSA9PSAnYm9vbCcpIHtcbiAgICAgIHRoaXMubXVsdGlwbGUgPSB0cnVlO1xuICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5jbG9uZU9wdGlvbnMob3B0aW9uc19oZWFkZXJfYm9vbCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbC5kYXRhVHlwZSA9PSAnbnVtYmVyJyB8fCB0aGlzLmNvbC5kYXRhVHlwZSA9PSAnZmxvYXQnKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmNsb25lT3B0aW9ucyhvcHRpb25zX2hlYWRlcl9udW1iZXIpXG4gICAgfVxuICAgIGlmICh0aGlzLmNvbC5kYXRhVHlwZSA9PSAnZGF0ZScpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuY2xvbmVPcHRpb25zKG9wdGlvbnNfaGVhZGVyX2RhdGUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2wuZGF0YVR5cGUgPT0gJ3NlbGVjdG9yJykge1xuICAgICAgdGhpcy5vcHRpb25zID0gW107XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbC5oZWFkRmlsdGVyKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmNvbC5oZWFkRmlsdGVyO1xuICAgICAgdGhpcy5tdWx0aXBsZSA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMgPT0gbnVsbClcbiAgICAgIHRocm93ICgnQmFkIGRlZmluaXRpb24gdG8gb3BlcmF0b3IgJyArIHRoaXMuY29sLnByb3ApO1xuXG4gICAgLy8gUHLDqS1zZWxlY3Rpb24gZGUgbCdvcGVyYXRvclxuICAgIGlmICghdGhpcy5tdWx0aXBsZSAmJiB0aGlzLmNvbC5zZWxlY3RlZEZpbHRlcikge1xuICAgICAgbGV0IHNlbGVjdGVkID0gdGhpcy5vcHRpb25zLmZpbmQoKGQpID0+IGQubGFiZWwgPT09IHRoaXMuY29sLnNlbGVjdGVkRmlsdGVyLmxhYmVsKTtcbiAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlNFTEVDVEVEXCIsIHRoaXMuY29sLnByb3AsIHNlbGVjdGVkKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZShzZWxlY3RlZCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5vcHRpb25zKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zW2ldLmNoZWNrZWQgIT09IHRydWUpXG4gICAgICAgIHRoaXMub3B0aW9uc1tpXS5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuXG4gIH1cblxuICBzZXRGaXJzdENob2ljZSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcInNldEZpcnN0Q2hvaWNlICgxKSBcIit0aGlzLnZhbHVlKycgJyt0aGlzLmxhYmVsKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcInNldEZpcnN0Q2hvaWNlIFwiLHRoaXMudmFsdWUsdGhpcy5sYWJlbCx0aGlzLm9wdGlvbnMpXG4gICAgaWYgKHRoaXMubXVsdGlwbGUgPT09IGZhbHNlICYmIHRoaXMubGFiZWwgPT0gJycpIHtcbiAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5vcHRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnNbaV0ubGFiZWwgIT0gJycpIHtcbiAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMub3B0aW9uc1tpXSwgdHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBnZXRPcGVyYXRvcigpIHtcbiAgICBpZiAodGhpcy5tdWx0aXBsZSA9PT0gZmFsc2UpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdnZXRPcGVyYXRvciAnICsgdGhpcy5jb2wucHJvcCArICcgdmFsdWUgJyArIHRoaXMudmFsdWUsIHRoaXMub3B0aW9ucylcbiAgICAgIGlmICh0aGlzLnZhbHVlID09ICcnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maW5kKChkKSA9PiBkLmxhYmVsID09PSB0aGlzLnZhbHVlICYmIGQuY2hlY2tlZCA9PSB0cnVlKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjaGFuZ2VWYWx1ZXMob3B0KSB7XG4gICAgLyogQ2hhbmdlbWVudCBkZSBsJ29wZXJhdGV1ciBkYW5zIGxhIGNhcyBkZSB2YWxldXJzIG11bHRpcGxlcyBkJ29wZXJhdGV1cnMgXG4gICAgICAgIEV4OiB7IHZhbHVlOiBcIkFwcGxlXCIsIG9wZXJhdG9yOiBcIj1cIiwgbGFiZWw6IFwiQXBwbGVcIiwgY2hlY2tlZDogZmFsc2UgfSAqL1xuICAgIC8vIGNvbnNvbGUubG9nKFwiQ0hBTkdFUyBWQUxVRVNcIiwgdGhpcy5jb2wucHJvcCwgb3B0KVxuICAgIGlmIChvcHQuY2hlY2tlZCkge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJjaGVja2VkXCIpO1xuICAgICAgb3B0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIC8vdGhpcy52YWx1ZXMuc3BsaWNlKHRoaXMudmFsdWVzLmZpbmQoKGEpID0+IGEudmFsdWUgPT09IG9wdC52YWx1ZSAmJiBhLm9wZXJhdG9yID09PSBvcHQub3BlcmF0b3IpLDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAvL3RoaXMudmFsdWVzLnB1c2gob3B0KTtcbiAgICB9XG4gICAgdGhpcy52YWx1ZXMuc3BsaWNlKDApO1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5vcHRpb25zKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zW2ldLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZXMucHVzaCh0aGlzLm9wdGlvbnNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnZhbHVlcylcbiAgICB0aGlzLmxhYmVsID0gJygnICsgdGhpcy52YWx1ZXMubGVuZ3RoICsgJyknO1xuICAgIGlmICh0aGlzLnZhbHVlcy5sZW5ndGggPT0gMClcbiAgICAgIHRoaXMubGFiZWwgPSBkZWZhdXRfbGFiZWw7XG4gICAgLy90aGlzLnRvZ2dsZURpdigpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VWYWx1ZSBPUCcsIHRoaXMudmFsdWVzKTtcbiAgICB0aGlzLl9jaGFuZ2VPcGVyYXRvcigpO1xuICB9XG5cbiAgaXNPcGVyYXRvck11bHRpcGxlKG86IE1hRGF0YUdyaWRIZWFkRmlsdGVyKSB7XG4gICAgcmV0dXJuIChvICYmXG4gICAgICBvLm9wZXJhdG9yICYmIHR5cGVvZiAoby5vcGVyYXRvcikgPT0gJ29iamVjdCcgJiYgby5vcGVyYXRvci5sZW5ndGggPiAwICYmXG4gICAgICBvLnZhbHVlICYmIHR5cGVvZiAoby52YWx1ZSkgPT0gJ29iamVjdCcgJiYgby52YWx1ZS5sZW5ndGggPiAwKVxuICB9XG5cblxuICBnZXRDb25kaXRpb25zKGZpbHRlcl92YWx1ZTEsIGZpbHRlcl92YWx1ZTIpOiBGaWx0ZXJDb25kaXRpb25zIHtcblxuICAgIGlmICh0aGlzLm11bHRpcGxlID09IGZhbHNlKSB7XG4gICAgICBsZXQgbyA9IHRoaXMuZ2V0T3BlcmF0b3IoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdnZXRGaWx0ZXIgJyArIHRoaXMuY29sLnByb3AgKyBcIiBvXCIsIG8pXG4gICAgICBpZiAobyAhPSBudWxsICYmIG8ub3BlcmF0b3IgIT0gJycpIHtcbiAgICAgICAgLy8gQ0FTOiBPcGVyYXRvck11bHRpcGxlXG4gICAgICAgIGlmICh0aGlzLmlzT3BlcmF0b3JNdWx0aXBsZShvKSkge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ2dldEZpbHRlciB2YWx1ZXMgJyAsIGZpbHRlcl92YWx1ZTEgLCBcIiAvXCIsIGZpbHRlcl92YWx1ZTIpXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJnZXRDb25kaXRpb25zKCkgT3BlcmF0b3JNdWx0aXBsZSBWYWx1ZU11bHRpcGxlIFwiLCBvKVxuXG4gICAgICAgICAgbGV0IHZhbHVlMSA9IG8udmFsdWVbMF0udG9TdHJpbmcoKS5yZXBsYWNlKCckezF9JywgZmlsdGVyX3ZhbHVlMSk7XG4gICAgICAgICAgbGV0IHZhbHVlMiA9IG8udmFsdWVbMV0udG9TdHJpbmcoKS5yZXBsYWNlKCckezF9JywgZmlsdGVyX3ZhbHVlMik7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0RmlsdGVyIHZhbHVlcygyKSAnICwgdmFsdWUxICwgXCIgL1wiLCB2YWx1ZTIpXG4gICAgICAgICAgdmFyIGNvbmRzOiBGaWx0ZXJDb25kaXRpb25zID0gW107XG4gICAgICAgICAgaWYgKGZpbHRlcl92YWx1ZTEgIT0gJycpIHtcbiAgICAgICAgICAgIGNvbmRzLnB1c2goW3RoaXMuY29sLnByb3AsIG8ub3BlcmF0b3JbMF0sIHZhbHVlMV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZmlsdGVyX3ZhbHVlMiAhPSAnJykge1xuICAgICAgICAgICAgaWYgKGZpbHRlcl92YWx1ZTEgIT0gJycpIHtcbiAgICAgICAgICAgICAgY29uZHMucHVzaCgnYW5kJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25kcy5wdXNoKFt0aGlzLmNvbC5wcm9wLCBvLm9wZXJhdG9yWzFdLCB2YWx1ZTJdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNvbmRzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJnZXRDb25kaXRpb25zKCkgU2ltcGxlVmFsdWUgXCIsIG8pXG4gICAgICAgICAgbGV0IHZhbHVlID0gby52YWx1ZS50b1N0cmluZygpLnJlcGxhY2UoJyR7MX0nLCBmaWx0ZXJfdmFsdWUxKVxuICAgICAgICAgIC8vaWYgKHRoaXMuY29sLmRhdGFUeXBlID09ICdudW1iZXInKSB7XG4gICAgICAgICAgLy8gIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICAgICAgLy99XG4gICAgICAgICAgcmV0dXJuIFt0aGlzLmNvbC5wcm9wLCBvLm9wZXJhdG9yLCB2YWx1ZV0gYXMgRmlsdGVyQ29uZGl0aW9uc1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMudmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IGNvbmRpdGlvbnM6IEZpbHRlckNvbmRpdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIC8vIENBUzogT3BlcmF0b3JNdWx0aXBsZVxuICAgICAgICAgIGlmICh0aGlzLmlzT3BlcmF0b3JNdWx0aXBsZSh0aGlzLnZhbHVlc1tpXSkpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZ2V0Q29uZGl0aW9ucygpIE9wZXJhdG9yTXVsdGlwbGUgXCIsdGhpcy52YWx1ZXMpO1xuICAgICAgICAgICAgbGV0IHZhbCA9IHRoaXMudmFsdWVzW2ldLnZhbHVlO1xuICAgICAgICAgICAgbGV0IG9wcyA9IHRoaXMudmFsdWVzW2ldLm9wZXJhdG9yO1xuICAgICAgICAgICAgdmFyIGNvbmRzOiBGaWx0ZXJDb25kaXRpb25zID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpYyA9IDA7IGljIDwgdmFsLmxlbmd0aCAmJiBpYyA8IG9wcy5sZW5ndGg7IGljKyspIHtcbiAgICAgICAgICAgICAgY29uZHMucHVzaChbdGhpcy5jb2wucHJvcCwgb3BzW2ljXSwgdmFsW2ljXV0pO1xuICAgICAgICAgICAgICBpZiAoaWMgPCAodmFsLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgY29uZHMucHVzaCgnYW5kJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uZGl0aW9ucy5wdXNoKGNvbmRzKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL2lmICh0aGlzLmNvbC5kYXRhVHlwZSA9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgLy8gIHYgPSBwYXJzZUZsb2F0KHYpO1xuICAgICAgICAgICAgLy99XG4gICAgICAgICAgICBjb25kaXRpb25zLnB1c2goW3RoaXMuY29sLnByb3AsIHRoaXMudmFsdWVzW2ldLm9wZXJhdG9yLnRvU3RyaW5nKCksIHRoaXMudmFsdWVzW2ldLnZhbHVlLnRvU3RyaW5nKCldKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMudmFsdWVzLmxlbmd0aCAtIDEgPiBpKSB7XG4gICAgICAgICAgICBjb25kaXRpb25zLnB1c2goJ29yJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbmRpdGlvbnM7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY2hhbmdlVmFsdWUob3B0OiBNYURhdGFHcmlkSGVhZEZpbHRlciwgaWdub3JlVG9nZ2xlPzogYm9vbGVhbikge1xuICAgIC8qIENoYW5nZW1lbnQgZGUgbCdvcGVyYXRldXIgZGFucyBsYSBjYXMgZGUgdmFsZXVycyBzaW1wbGUgKHVuIHNldWwgY2hvaXgpXG4gICAgICAgIEV4OiB7IHZhbHVlOiBcIiUkezF9JVwiLCBvcGVyYXRvcjogXCJsaWtlXCIsIGxhYmVsOiBcImNvbnRhaW5zXCIsIGNoZWNrZWQ6IGZhbHNlIH0gKi9cbiAgICAvLyBcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiQ0hBTkdFIFZBTFVFXCIsIG9wdC5vcGVyYXRvciwgdGhpcy5jb2wucHJvcCwgb3B0KVxuICAgIGlmICh0aGlzLm9wdGlvbnMuZmluZCgoZCkgPT4gZC5jaGVja2VkID09PSB0cnVlKSkge1xuICAgICAgdGhpcy5vcHRpb25zLmZpbmQoKGQpID0+IGQuY2hlY2tlZCA9PT0gdHJ1ZSkuY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBvcHQuY2hlY2tlZCA9ICFvcHQuY2hlY2tlZDtcbiAgICBpZiAob3B0LmxhYmVsLm1hdGNoKC9eXFxzKyQvKSkge1xuICAgICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgICAgdGhpcy5sYWJlbCA9ICcnO1xuICAgICAgdGhpcy5pc011bHRpcGxlVmFsdWUgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWx1ZSA9IG9wdC5sYWJlbDtcbiAgICAgIHRoaXMubGFiZWwgPSBvcHQubGFiZWw7XG4gICAgICB0aGlzLmlzTXVsdGlwbGVWYWx1ZSA9IHRoaXMuaXNPcGVyYXRvck11bHRpcGxlKG9wdCk7XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZVZhbHVlIE9QJywgdGhpcy5vcHRpb25zKTtcbiAgICBpZiAoIWlnbm9yZVRvZ2dsZSkge1xuICAgICAgdGhpcy50b2dnbGVEaXYoKTtcbiAgICB9XG4gICAgdGhpcy5fY2hhbmdlT3BlcmF0b3IoKTtcbiAgICBpZiAob3B0Lm9wZXJhdG9yID09ICcnKSB7XG4gICAgICB0aGlzLmNoYW5nZUVtcHR5T3BlcmF0b3IuZW1pdCh7XG4gICAgICAgIGNvbDogdGhpcy5jb2wsXG4gICAgICAgIGlzTXVsdGlwbGVWYWx1ZTogdGhpcy5pc011bHRpcGxlVmFsdWVcbiAgICAgIH0gYXMgT3BlcmF0b3JFdmVudCk7XG4gICAgfVxuICB9XG5cbiAgX2NoYW5nZU9wZXJhdG9yKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdFTUlUIE9QJywgdGhpcy5jb2wucHJvcCwgdGhpcy5vcHRpb25zLmZpbmQoKGQpID0+IGQuY2hlY2tlZCA9PT0gdHJ1ZSksIHRoaXMub3B0aW9ucylcbiAgICB0aGlzLmNoYW5nZU9wZXJhdG9yLmVtaXQoe1xuICAgICAgY29sOiB0aGlzLmNvbCxcbiAgICAgIGlzTXVsdGlwbGVWYWx1ZTogdGhpcy5pc011bHRpcGxlVmFsdWVcbiAgICAgIC8vICBjb25kaXRpb246IFsgdGhpcy5jb2wucHJvcCwgdGhpcy52YWx1ZSBdXG4gICAgfSBhcyBPcGVyYXRvckV2ZW50KTtcbiAgfVxufVxuIl19