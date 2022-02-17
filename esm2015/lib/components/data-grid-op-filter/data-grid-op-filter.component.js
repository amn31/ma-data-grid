import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { options_header_bool, options_header_boolean, options_header_date, options_header_number, options_header_string } from '../../interfaces/ma-data-grid-options';
import * as $ from 'jquery';
const defaut_label = '';
export class DataGridOpFilterComponent {
    constructor() {
        this.value = '';
        this.changeOperator = new EventEmitter();
        this.changeEmptyOperator = new EventEmitter();
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
            this.elemToggle.nativeElement.style.opacity = 0;
            this.elemToggle.nativeElement.style.borderColor = 'aliceblue';
            this.elemToggle.nativeElement.style.height = 0;
            $(document).off('click', fct);
        };
        return fct;
    }
    toggleDiv() {
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
            let selected = this.options.find((d) => d.operator === this.col.selectedFilter.operator);
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
            return this.options.find((d) => d.value === this.value && d.checked == true);
        }
        return null;
    }
    changeValues(opt) {
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
    }
    getConditions(filter_value) {
        if (this.multiple == false) {
            let o = this.getOperator();
            // console.log('getFilter ' + this.col.prop + " o", o)
            if (o != null && o.operator != '') {
                let value = o.value.toString().replace('${1}', filter_value);
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
        // console.log("CHANGE VALUE", opt.operator, this.col.prop, opt)
        if (this.options.find((d) => d.checked === true)) {
            this.options.find((d) => d.checked === true).checked = false;
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
    }
    _changeOperator() {
        // console.log('EMIT OP', this.col.prop, this.options.find((d) => d.checked === true), this.options)
        this.changeOperator.emit({
            prop: this.col,
        });
    }
}
DataGridOpFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'ma-data-grid-op-filter',
                template: "<!--\n<div class=\"red\">=</div>(onComplete)=\"onComplete($event)\"\n\n<app-ma-completion [data]=\"choices\" placeholder=\"\" value=\"defautValue\"  ></app-ma-completion>\n     <select dir=\"rtl\">\n    <option>Foo</option>    \n    <option>bar</option>\n    <option>to the right</option>\n</select>\n\n\n<div *ngIf=\"col.isRowNumber === true; then RowNumberBlock else dataBlock\"></div>\n<ng-template #RowNumberBlock>{{i}}</ng-template>\n<ng-template #dataBlock> {{u[col.prop] | dataGridPipe :u :c}}</ng-template>\n-->\n\n<div>\n\n    <div #elemValue (click)=\"toggleDiv()\" class=\"op_label\"><i *ngIf=\"label == ''\" class=\"tiny material-icons\">search</i>{{label}}\n    </div>\n    <!-- [style.left.px]=\"popupPosition.left\"  [style.top.px]=\"popupPosition.top\"-->\n    <div #elemToggle class=\"popup-operator invisible-scrollbar\">\n        <div *ngFor=\"let opt of options;\" class=\"op_filter\" [value]=\"opt.value\">\n            <div *ngIf=\"multiple === true\">\n                <label>\n                    <input type=\"checkbox\" class=\"op_filter\" [value]=\"opt.value\" [checked]=\"opt.checked\" (click)=\"changeValues(opt)\" />\n                    <span *ngIf=\"!isHTML\">{{opt.label}}</span>\n                    <span *ngIf=\"isHTML === true\" [innerHTML]=\"opt.label\"></span>\n                </label>\n            </div>\n            <div *ngIf=\"multiple === false\">\n                <div (click)=\"changeValue(opt)\">{{opt.label}}&nbsp;</div>\n            </div>\n        </div>\n    </div>\n\n</div>\n<!--\n<select class=\"browser-default op_filter\" [(ngModel)]=\"value\" (change)=\"_changeOperator($event)\" >\n    <option *ngFor=\"let opt of options;\"  class=\"op_filter\" [value]=\"opt.value\">{{opt.label}}\n    </option>\n</select>\n\n\n-->",
                styles: ["select.op_filter{border:1px inset #9e9e9e;height:1.4rem;min-width:25px;padding:0}.op_filter{border-top:1px solid #9e9e9e;font-weight:lighter;padding-left:10px;padding-right:10px}.popup-operator{background-color:#f0f8ff;border:0 solid #9e9e9e;box-shadow:2px 3px 3px #000;cursor:-webkit-grab;cursor:grab;max-height:300px;opacity:.4;overflow-y:auto;position:absolute;transition:opacity .5s,border-color 1s,height .5s;transition-timing-function:ease-in-out;z-index:20}.invisible-scrollbar{scrollbar-width:none}.invisible-scrollbar::-webkit-scrollbar{display:none}.op_label{cursor:-webkit-grab;cursor:grab;font-weight:lighter}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLW9wLWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiRDovTXlIb21lL2FuZHJvaWQvd29ya3NwYWNlL2dpdC9tYS1uZy1kYXRhLWdyaWQvcHJvamVjdHMvbWEtZGF0YS1ncmlkL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGEtZ3JpZC1vcC1maWx0ZXIvZGF0YS1ncmlkLW9wLWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBaUQsbUJBQW1CLEVBQUUsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUV0TixPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUU1QixNQUFNLFlBQVksR0FBRyxFQUFFLENBQUE7QUFNdkIsTUFBTSxPQUFPLHlCQUF5QjtJQW1CcEM7UUFqQlMsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUlWLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN6Qyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXhELFlBQU8sR0FBMkIsSUFBSSxDQUFDO1FBQ3ZDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixXQUFNLEdBQTJCLEVBQUUsQ0FBQztRQUNwQyxVQUFLLEdBQUcsWUFBWSxDQUFDO1FBQ3JCLGtCQUFhLEdBQVE7WUFDbkIsR0FBRyxFQUFFLENBQUM7WUFDTixJQUFJLEVBQUUsQ0FBQztTQUNSLENBQUE7UUFlRCxrQkFBYSxHQUFHLEVBQUMsTUFBTSxFQUFFLFNBQVMsRUFBQyxDQUFBO0lBYm5CLENBQUM7SUFFakIsb0JBQW9CO1FBQ2xCLElB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U0FFZixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF6T0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLDR2REFBbUQ7O2FBRXBEOzs7O29CQUdFLEtBQUs7a0JBQ0wsS0FBSzt5QkFDTCxTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTt3QkFDekMsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7NkJBQ3hDLE1BQU07a0NBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZENvbHVtbk9wdGlvbnMsIE1hRGF0YUdyaWRIZWFkRmlsdGVyLCBvcHRpb25zX2hlYWRlcl9ib29sLCBvcHRpb25zX2hlYWRlcl9ib29sZWFuLCBvcHRpb25zX2hlYWRlcl9kYXRlLCBvcHRpb25zX2hlYWRlcl9udW1iZXIsIG9wdGlvbnNfaGVhZGVyX3N0cmluZyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvbWEtZGF0YS1ncmlkLW9wdGlvbnMnO1xuaW1wb3J0ICogYXMgTSBmcm9tICdtYXRlcmlhbGl6ZS1jc3MnO1xuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xuXG5jb25zdCBkZWZhdXRfbGFiZWwgPSAnJ1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWEtZGF0YS1ncmlkLW9wLWZpbHRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLWdyaWQtb3AtZmlsdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS1ncmlkLW9wLWZpbHRlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0YUdyaWRPcEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCAge1xuXG4gIEBJbnB1dCgpIHZhbHVlID0gJyc7XG4gIEBJbnB1dCgpIGNvbDogTWFEYXRhR3JpZENvbHVtbk9wdGlvbnM7XG4gIEBWaWV3Q2hpbGQoXCJlbGVtVG9nZ2xlXCIsIHsgc3RhdGljOiBmYWxzZSB9KSBlbGVtVG9nZ2xlOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiZWxlbVZhbHVlXCIsIHsgc3RhdGljOiBmYWxzZSB9KSBlbGVtVmFsdWU6IEVsZW1lbnRSZWY7XG4gIEBPdXRwdXQoKSBjaGFuZ2VPcGVyYXRvciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY2hhbmdlRW1wdHlPcGVyYXRvciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIG9wdGlvbnM6IE1hRGF0YUdyaWRIZWFkRmlsdGVyW10gPSBudWxsO1xuICBtdWx0aXBsZSA9IGZhbHNlO1xuICBpc0hUTUw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgdmFsdWVzOiBNYURhdGFHcmlkSGVhZEZpbHRlcltdID0gW107XG4gIGxhYmVsID0gZGVmYXV0X2xhYmVsO1xuICBwb3B1cFBvc2l0aW9uOiBhbnkgPSB7XG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDBcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZ2V0RnVuY0NsaWNrRG9jdW1lbnQoKSB7XG4gICAgbGV0IGZjdCA9ICgpID0+IHtcbiAgICAgIHRoaXMuZWxlbVRvZ2dsZS5uYXRpdmVFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgdGhpcy5lbGVtVG9nZ2xlLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnYWxpY2VibHVlJztcbiAgICAgIHRoaXMuZWxlbVRvZ2dsZS5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IDA7XG4gICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrJywgZmN0KVxuICAgIH1cbiAgICByZXR1cm4gZmN0XG4gIH1cblxuXG4gIGNzc0VsZW1Ub2dnbGUgPSB7aGVpZ2h0OiB1bmRlZmluZWR9XG4gIHRvZ2dsZURpdigpIHtcblxuICAgIHZhciBvbkNsaWNrRG9jdW1lbnQgPSB0aGlzLmdldEZ1bmNDbGlja0RvY3VtZW50KClcbiAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrJywgb25DbGlja0RvY3VtZW50KTtcblxuICAgIGlmICh0aGlzLmVsZW1Ub2dnbGUubmF0aXZlRWxlbWVudC5zdHlsZS5vcGFjaXR5ID09IDApIHtcbiAgICAgIHRoaXMuZWxlbVRvZ2dsZS5uYXRpdmVFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgdGhpcy5lbGVtVG9nZ2xlLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnIzllOWU5ZSc7XG4gICAgICB0aGlzLmVsZW1Ub2dnbGUubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLmNzc0VsZW1Ub2dnbGUuaGVpZ2h0KydweCc7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljaycsIG9uQ2xpY2tEb2N1bWVudClcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgb25DbGlja0RvY3VtZW50KTtcbiAgICAgIH0sIDUwMClcblxuICAgIH0gZWxzZSB7XG4gICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrJywgb25DbGlja0RvY3VtZW50KVxuICAgIH1cblxuICB9XG5cbiAgY2xvbmVPcHRpb25zKG9wdHMpOiBNYURhdGFHcmlkSGVhZEZpbHRlcltdIHtcbiAgICBpZiAob3B0cyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IG9wdGlvbnM6IE1hRGF0YUdyaWRIZWFkRmlsdGVyW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG9wdGlvbnMucHVzaChPYmplY3QuYXNzaWduKHt9LCBvcHRzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuY3NzRWxlbVRvZ2dsZS5oZWlnaHQgPSB0aGlzLmVsZW1Ub2dnbGUubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgdGhpcy5lbGVtVG9nZ2xlLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG59XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgdGhpcy5pc0hUTUwgPSB0aGlzLmNvbC5pc0hUTUw7XG4gICAgaWYgKHRoaXMuY29sLmRhdGFUeXBlID09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmNsb25lT3B0aW9ucyhvcHRpb25zX2hlYWRlcl9zdHJpbmcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2wuZGF0YVR5cGUgPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLm11bHRpcGxlID0gdHJ1ZTtcbiAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuY2xvbmVPcHRpb25zKG9wdGlvbnNfaGVhZGVyX2Jvb2xlYW4pO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2wuZGF0YVR5cGUgPT0gJ2Jvb2wnKSB7XG4gICAgICB0aGlzLm11bHRpcGxlID0gdHJ1ZTtcbiAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuY2xvbmVPcHRpb25zKG9wdGlvbnNfaGVhZGVyX2Jvb2wpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2wuZGF0YVR5cGUgPT0gJ251bWJlcicgfHwgdGhpcy5jb2wuZGF0YVR5cGUgPT0gJ2Zsb2F0Jykge1xuICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5jbG9uZU9wdGlvbnMob3B0aW9uc19oZWFkZXJfbnVtYmVyKVxuICAgIH1cbiAgICBpZiAodGhpcy5jb2wuZGF0YVR5cGUgPT0gJ2RhdGUnKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmNsb25lT3B0aW9ucyhvcHRpb25zX2hlYWRlcl9kYXRlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29sLmRhdGFUeXBlID09ICdzZWxlY3RvcicpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IFtdO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2wuaGVhZEZpbHRlcikge1xuICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5jb2wuaGVhZEZpbHRlcjtcbiAgICAgIHRoaXMubXVsdGlwbGUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zID09IG51bGwpXG4gICAgICB0aHJvdyAoJ0JhZCBkZWZpbml0aW9uIHRvIG9wZXJhdG9yICcgKyB0aGlzLmNvbC5wcm9wKTtcblxuICAgIC8vIFByw6ktc2VsZWN0aW9uIGRlIGwnb3BlcmF0b3JcbiAgICBpZiAoIXRoaXMubXVsdGlwbGUgJiYgdGhpcy5jb2wuc2VsZWN0ZWRGaWx0ZXIpIHtcbiAgICAgIGxldCBzZWxlY3RlZCA9IHRoaXMub3B0aW9ucy5maW5kKChkKSA9PiBkLm9wZXJhdG9yID09PSB0aGlzLmNvbC5zZWxlY3RlZEZpbHRlci5vcGVyYXRvcik7XG4gICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJTRUxFQ1RFRFwiLCB0aGlzLmNvbC5wcm9wLCBzZWxlY3RlZCk7XG4gICAgICAgIHRoaXMuY2hhbmdlVmFsdWUoc2VsZWN0ZWQsdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5vcHRpb25zKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zW2ldLmNoZWNrZWQgIT09IHRydWUpXG4gICAgICAgIHRoaXMub3B0aW9uc1tpXS5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICAgIFxuICB9XG5cbiAgc2V0Rmlyc3RDaG9pY2UoKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJzZXRGaXJzdENob2ljZSAoMSkgXCIrdGhpcy52YWx1ZSsnICcrdGhpcy5sYWJlbCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJzZXRGaXJzdENob2ljZSBcIix0aGlzLnZhbHVlLHRoaXMubGFiZWwsdGhpcy5vcHRpb25zKVxuICAgIGlmICh0aGlzLm11bHRpcGxlID09PSBmYWxzZSAmJiB0aGlzLmxhYmVsID09ICcnKSB7XG4gICAgICBmb3IgKHZhciBpIGluIHRoaXMub3B0aW9ucykge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zW2ldLmxhYmVsICE9ICcnKSB7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLm9wdGlvbnNbaV0sIHRydWUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgZ2V0T3BlcmF0b3IoKSB7XG4gICAgaWYgKHRoaXMubXVsdGlwbGUgPT09IGZhbHNlKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZ2V0T3BlcmF0b3IgJyArIHRoaXMuY29sLnByb3AgKyAnIHZhbHVlICcgKyB0aGlzLnZhbHVlLCB0aGlzLm9wdGlvbnMpXG4gICAgICBpZiAodGhpcy52YWx1ZSA9PSAnJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmluZCgoZCkgPT4gZC52YWx1ZSA9PT0gdGhpcy52YWx1ZSAmJiBkLmNoZWNrZWQgPT0gdHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY2hhbmdlVmFsdWVzKG9wdCkge1xuICAgIC8qIENoYW5nZW1lbnQgZGUgbCdvcGVyYXRldXIgZGFucyBsYSBjYXMgZGUgdmFsZXVycyBtdWx0aXBsZXMgZCdvcGVyYXRldXJzIFxuICAgICAgICBFeDogeyB2YWx1ZTogXCJBcHBsZVwiLCBvcGVyYXRvcjogXCI9XCIsIGxhYmVsOiBcIkFwcGxlXCIsIGNoZWNrZWQ6IGZhbHNlIH0gKi9cbiAgICAvL2NvbnNvbGUubG9nKFwiQ0hBTkdFUyBWQUxVRVNcIiwgdGhpcy5jb2wucHJvcCwgb3B0KVxuICAgIGlmIChvcHQuY2hlY2tlZCkge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJjaGVja2VkXCIpO1xuICAgICAgb3B0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIC8vdGhpcy52YWx1ZXMuc3BsaWNlKHRoaXMudmFsdWVzLmZpbmQoKGEpID0+IGEudmFsdWUgPT09IG9wdC52YWx1ZSAmJiBhLm9wZXJhdG9yID09PSBvcHQub3BlcmF0b3IpLDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAvL3RoaXMudmFsdWVzLnB1c2gob3B0KTtcbiAgICB9XG4gICAgdGhpcy52YWx1ZXMuc3BsaWNlKDApO1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5vcHRpb25zKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zW2ldLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZXMucHVzaCh0aGlzLm9wdGlvbnNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmxhYmVsID0gJygnICsgdGhpcy52YWx1ZXMubGVuZ3RoICsgJyknO1xuICAgIGlmICh0aGlzLnZhbHVlcy5sZW5ndGggPT0gMClcbiAgICAgIHRoaXMubGFiZWwgPSBkZWZhdXRfbGFiZWw7XG4gICAgLy90aGlzLnRvZ2dsZURpdigpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VWYWx1ZSBPUCcsIHRoaXMudmFsdWVzKTtcbiAgICB0aGlzLl9jaGFuZ2VPcGVyYXRvcigpO1xuICB9XG5cbiAgZ2V0Q29uZGl0aW9ucyhmaWx0ZXJfdmFsdWUpIHtcbiAgICBpZiAodGhpcy5tdWx0aXBsZSA9PSBmYWxzZSkge1xuICAgICAgbGV0IG8gPSB0aGlzLmdldE9wZXJhdG9yKCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZ2V0RmlsdGVyICcgKyB0aGlzLmNvbC5wcm9wICsgXCIgb1wiLCBvKVxuICAgICAgaWYgKG8gIT0gbnVsbCAmJiBvLm9wZXJhdG9yICE9ICcnKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IG8udmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKCckezF9JywgZmlsdGVyX3ZhbHVlKVxuICAgICAgICAvL2lmICh0aGlzLmNvbC5kYXRhVHlwZSA9PSAnbnVtYmVyJykge1xuICAgICAgICAvLyAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgLy99XG4gICAgICAgIHJldHVybiBbdGhpcy5jb2wucHJvcCwgby5vcGVyYXRvciwgdmFsdWVdXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBjb25kaXRpb25zID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgdiA9IHRoaXMudmFsdWVzW2ldLnZhbHVlO1xuICAgICAgICAgIC8vaWYgKHRoaXMuY29sLmRhdGFUeXBlID09ICdudW1iZXInKSB7XG4gICAgICAgICAgLy8gIHYgPSBwYXJzZUZsb2F0KHYpO1xuICAgICAgICAgIC8vfVxuICAgICAgICAgIGNvbmRpdGlvbnMucHVzaChbdGhpcy5jb2wucHJvcCwgdGhpcy52YWx1ZXNbaV0ub3BlcmF0b3IsIHZdKTtcbiAgICAgICAgICBpZiAodGhpcy52YWx1ZXMubGVuZ3RoIC0gMSA+IGkpIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbnMucHVzaCgnb3InKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29uZGl0aW9ucztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjaGFuZ2VWYWx1ZShvcHQ6IE1hRGF0YUdyaWRIZWFkRmlsdGVyLCBpZ25vcmVUb2dnbGU/OiBib29sZWFuKSB7XG4gICAgLyogQ2hhbmdlbWVudCBkZSBsJ29wZXJhdGV1ciBkYW5zIGxhIGNhcyBkZSB2YWxldXJzIHNpbXBsZSAodW4gc2V1bCBjaG9peClcbiAgICAgICAgRXg6IHsgdmFsdWU6IFwiJSR7MX0lXCIsIG9wZXJhdG9yOiBcImxpa2VcIiwgbGFiZWw6IFwiY29udGFpbnNcIiwgY2hlY2tlZDogZmFsc2UgfSAqL1xuICAgIC8vIFxuXG4gICAgLy8gY29uc29sZS5sb2coXCJDSEFOR0UgVkFMVUVcIiwgb3B0Lm9wZXJhdG9yLCB0aGlzLmNvbC5wcm9wLCBvcHQpXG4gICAgaWYgKHRoaXMub3B0aW9ucy5maW5kKChkKSA9PiBkLmNoZWNrZWQgPT09IHRydWUpKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZmluZCgoZCkgPT4gZC5jaGVja2VkID09PSB0cnVlKS5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICAgIG9wdC5jaGVja2VkID0gIW9wdC5jaGVja2VkO1xuICAgIGlmIChvcHQubGFiZWwubWF0Y2goL15cXHMrJC8pKSB7XG4gICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgICB0aGlzLmxhYmVsID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSBvcHQudmFsdWU7XG4gICAgICB0aGlzLmxhYmVsID0gb3B0LmxhYmVsO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VWYWx1ZSBPUCcsIHRoaXMub3B0aW9ucyk7XG4gICAgaWYgKCFpZ25vcmVUb2dnbGUpIHtcbiAgICAgIHRoaXMudG9nZ2xlRGl2KCk7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZU9wZXJhdG9yKCk7XG4gICAgaWYgKG9wdC5vcGVyYXRvciA9PSAnJykge1xuICAgICAgdGhpcy5jaGFuZ2VFbXB0eU9wZXJhdG9yLmVtaXQoKTtcbiAgICB9XG4gIH1cblxuICBfY2hhbmdlT3BlcmF0b3IoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ0VNSVQgT1AnLCB0aGlzLmNvbC5wcm9wLCB0aGlzLm9wdGlvbnMuZmluZCgoZCkgPT4gZC5jaGVja2VkID09PSB0cnVlKSwgdGhpcy5vcHRpb25zKVxuICAgIHRoaXMuY2hhbmdlT3BlcmF0b3IuZW1pdCh7XG4gICAgICBwcm9wOiB0aGlzLmNvbCxcbiAgICAgIC8vICBjb25kaXRpb246IFsgdGhpcy5jb2wucHJvcCwgdGhpcy52YWx1ZSBdXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==