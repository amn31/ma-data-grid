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
            //this.elemToggle.nativeElement.style.position = 'absolute';
            this.elemToggle.nativeElement.style.display = 'block';
            let anchor = this.elemValue.nativeElement.parentElement;
            //this.elemToggle.nativeElement.style.top = ($(anchor).height()+$(anchor).offset().top)+'px';
            //this.elemToggle.nativeElement.style.left = $(anchor).offset().left+'px';
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
        //var elems = document.querySelectorAll('select');
        //var instances = M.FormSelect.init(elems, {});
        //console.log('M',instances)
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
        });
    }
}
DataGridOpFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'ma-data-grid-op-filter',
                template: "<!--\n<div class=\"red\">=</div>(onComplete)=\"onComplete($event)\"\n\n<app-ma-completion [data]=\"choices\" placeholder=\"\" value=\"defautValue\"  ></app-ma-completion>\n     <select dir=\"rtl\">\n    <option>Foo</option>    \n    <option>bar</option>\n    <option>to the right</option>\n</select>\n\n\n<div *ngIf=\"col.isRowNumber === true; then RowNumberBlock else dataBlock\"></div>\n<ng-template #RowNumberBlock>{{i}}</ng-template>\n<ng-template #dataBlock> {{u[col.prop] | dataGridPipe :u :c}}</ng-template>\n-->\n\n<div>\n\n    <div #elemValue (click)=\"toggleDiv()\" class=\"op_label\"><i *ngIf=\"label == ''\" class=\"tiny material-icons\">search</i>{{label}}\n    </div>\n    <!-- [style.left.px]=\"popupPosition.left\"  [style.top.px]=\"popupPosition.top\"-->\n    <div #elemToggle style=\"display: none; position: absolute; z-index: 20; max-height: 300px; overflow-y: auto; background-color: aliceblue;border: 1px solid #9e9e9e;\">\n        <div *ngFor=\"let opt of options;\" class=\"op_filter\" [value]=\"opt.value\">\n            <div *ngIf=\"multiple === true\">\n                <label>\n                    <input type=\"checkbox\" class=\"op_filter\" [value]=\"opt.value\" [checked]=\"opt.checked\" (click)=\"changeValues(opt)\" />\n                    <span *ngIf=\"!isRowHTML\">{{opt.label}}</span>\n                    <span *ngIf=\"isRowHTML === true\" [innerHTML]=\"opt.label\"></span>\n                </label>\n            </div>\n            <div *ngIf=\"multiple === false\">\n                <div (click)=\"changeValue(opt)\">{{opt.label}}&nbsp;</div>\n            </div>\n        </div>\n    </div>\n\n</div>\n<!--\n<select class=\"browser-default op_filter\" [(ngModel)]=\"value\" (change)=\"_changeOperator($event)\" >\n    <option *ngFor=\"let opt of options;\"  class=\"op_filter\" [value]=\"opt.value\">{{opt.label}}\n    </option>\n</select>\n\n\n-->",
                styles: ["select.op_filter{border:1px inset #9e9e9e;height:1.4rem;min-width:25px;padding:0}.op_filter{border-top:1px solid #9e9e9e;padding-left:10px;padding-right:10px}.op_filter,.op_label{font-weight:lighter}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLW9wLWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiRDovTXlIb21lL2FuZHJvaWQvd29ya3NwYWNlL2dpdC9tYS1uZy1kYXRhLWdyaWQvcHJvamVjdHMvbWEtZGF0YS1ncmlkL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGEtZ3JpZC1vcC1maWx0ZXIvZGF0YS1ncmlkLW9wLWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFpRCxtQkFBbUIsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXROLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRTVCLE1BQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQTtBQU12QixNQUFNLE9BQU8seUJBQXlCO0lBbUJwQztRQWpCUyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBSVYsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3pDLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFeEQsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixXQUFNLEdBQTJCLEVBQUUsQ0FBQztRQUNwQyxVQUFLLEdBQUcsWUFBWSxDQUFDO1FBQ3JCLGtCQUFhLEdBQVE7WUFDbkIsR0FBRyxFQUFFLENBQUM7WUFDTixJQUFJLEVBQUUsQ0FBQztTQUNSLENBQUE7SUFFa0IsQ0FBQztJQUVuQixvQkFBb0I7UUFDbkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxHQUFHLEdBQUc7WUFDUiw0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Szt5QkFDTCxTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTt3QkFDekMsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7NkJBQ3hDLE1BQU07a0NBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZENvbHVtbk9wdGlvbnMsIE1hRGF0YUdyaWRIZWFkRmlsdGVyLCBvcHRpb25zX2hlYWRlcl9ib29sLCBvcHRpb25zX2hlYWRlcl9ib29sZWFuLCBvcHRpb25zX2hlYWRlcl9kYXRlLCBvcHRpb25zX2hlYWRlcl9udW1iZXIsIG9wdGlvbnNfaGVhZGVyX3N0cmluZyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvbWEtZGF0YS1ncmlkLW9wdGlvbnMnO1xuaW1wb3J0ICogYXMgTSBmcm9tICdtYXRlcmlhbGl6ZS1jc3MnO1xuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xuXG5jb25zdCBkZWZhdXRfbGFiZWwgPSAnJ1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWEtZGF0YS1ncmlkLW9wLWZpbHRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLWdyaWQtb3AtZmlsdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS1ncmlkLW9wLWZpbHRlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0YUdyaWRPcEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdmFsdWUgPSAnJztcbiAgQElucHV0KCkgY29sOiBNYURhdGFHcmlkQ29sdW1uT3B0aW9ucztcbiAgQFZpZXdDaGlsZChcImVsZW1Ub2dnbGVcIiwgeyBzdGF0aWM6IGZhbHNlIH0pIGVsZW1Ub2dnbGU6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJlbGVtVmFsdWVcIiwgeyBzdGF0aWM6IGZhbHNlIH0pIGVsZW1WYWx1ZTogRWxlbWVudFJlZjtcbiAgQE91dHB1dCgpIGNoYW5nZU9wZXJhdG9yID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBjaGFuZ2VFbXB0eU9wZXJhdG9yID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIFxuICBvcHRpb25zID0gbnVsbDtcbiAgbXVsdGlwbGUgPSBmYWxzZTtcbiAgaXNSb3dIVE1MOiBib29sZWFuID0gZmFsc2U7XG4gIHZhbHVlczogTWFEYXRhR3JpZEhlYWRGaWx0ZXJbXSA9IFtdO1xuICBsYWJlbCA9IGRlZmF1dF9sYWJlbDtcbiAgcG9wdXBQb3NpdGlvbjogYW55ID0ge1xuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwXG4gIH1cbiAgXG4gIGNvbnN0cnVjdG9yKCkgeyAgICB9XG5cbiAgIGdldEZ1bmNDbGlja0RvY3VtZW50KCkge1xuICAgIGxldCBwID0gdGhpcztcbiAgICBsZXQgZmN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ0NMSUNLJyxmY3QpO1xuICAgICAgcC5lbGVtVG9nZ2xlLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2snLGZjdClcbiAgICB9XG4gICAgcmV0dXJuIGZjdFxuICB9XG5cbiAgdG9nZ2xlRGl2KCkge1xuICAgXG4gICAgdmFyIG9uQ2xpY2tEb2N1bWVudCA9IHRoaXMuZ2V0RnVuY0NsaWNrRG9jdW1lbnQoKVxuICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2snLG9uQ2xpY2tEb2N1bWVudCk7XG5cbiAgICBpZiAodGhpcy5lbGVtVG9nZ2xlLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PSAnbm9uZScpIHtcbiAgICAgIFxuICAgICAgLy90aGlzLmVsZW1Ub2dnbGUubmF0aXZlRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICB0aGlzLmVsZW1Ub2dnbGUubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGxldCBhbmNob3IgPSB0aGlzLmVsZW1WYWx1ZS5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAvL3RoaXMuZWxlbVRvZ2dsZS5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9ICgkKGFuY2hvcikuaGVpZ2h0KCkrJChhbmNob3IpLm9mZnNldCgpLnRvcCkrJ3B4JztcbiAgICAgIC8vdGhpcy5lbGVtVG9nZ2xlLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9ICQoYW5jaG9yKS5vZmZzZXQoKS5sZWZ0KydweCc7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsb25DbGlja0RvY3VtZW50KVxuICAgICAgfSw1MDApXG4gICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtVG9nZ2xlLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2snLG9uQ2xpY2tEb2N1bWVudClcbiAgICB9XG5cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIFxuICAgIHRoaXMuaXNSb3dIVE1MID0gdGhpcy5jb2wuaXNSb3dIVE1MO1xuICAgIGlmICh0aGlzLmNvbC5kYXRhVHlwZSA9PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc19oZWFkZXJfc3RyaW5nO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2wuZGF0YVR5cGUgPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLm11bHRpcGxlID0gdHJ1ZTtcbiAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNfaGVhZGVyX2Jvb2xlYW47XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbC5kYXRhVHlwZSA9PSAnYm9vbCcpIHtcbiAgICAgIHRoaXMubXVsdGlwbGUgPSB0cnVlO1xuICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc19oZWFkZXJfYm9vbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29sLmRhdGFUeXBlID09ICdudW1iZXInIHx8IHRoaXMuY29sLmRhdGFUeXBlID09ICdmbG9hdCcpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNfaGVhZGVyX251bWJlcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29sLmRhdGFUeXBlID09ICdkYXRlJykge1xuICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc19oZWFkZXJfZGF0ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29sLmRhdGFUeXBlID09ICdzZWxlY3RvcicpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IFtdO1xuICAgICAgXG4gICAgfVxuICAgIGlmICh0aGlzLmNvbC5oZWFkRmlsdGVyKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmNvbC5oZWFkRmlsdGVyO1xuICAgICAgdGhpcy5tdWx0aXBsZSA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMgPT0gbnVsbClcbiAgICAgIHRocm93ICgnQmFkIGRlZmluaXRpb24gdG8gb3BlcmF0b3IgJyArIHRoaXMuY29sLnByb3ApO1xuICAgIC8vaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICBmb3IgKHZhciBpIGluIHRoaXMub3B0aW9ucykge1xuICAgICAgdGhpcy5vcHRpb25zW2ldLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgLy99XG5cbiAgICAvL3ZhciBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpO1xuICAgIC8vdmFyIGluc3RhbmNlcyA9IE0uRm9ybVNlbGVjdC5pbml0KGVsZW1zLCB7fSk7XG4gICAgLy9jb25zb2xlLmxvZygnTScsaW5zdGFuY2VzKVxuICB9XG5cbiAgc2V0Rmlyc3RDaG9pY2UoKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJzZXRGaXJzdENob2ljZSAoMSkgXCIrdGhpcy52YWx1ZSsnICcrdGhpcy5sYWJlbCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJzZXRGaXJzdENob2ljZSBcIix0aGlzLnZhbHVlLHRoaXMubGFiZWwsdGhpcy5vcHRpb25zKVxuICAgIGlmICh0aGlzLm11bHRpcGxlID09PSBmYWxzZSAmJiB0aGlzLmxhYmVsID09ICcnKSB7XG4gICAgICBmb3IgKHZhciBpIGluIHRoaXMub3B0aW9ucykge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zW2ldLmxhYmVsICE9ICcnKSB7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLm9wdGlvbnNbaV0sdHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICB9XG5cbiAgZ2V0T3BlcmF0b3IoKSB7XG4gICAgaWYgKHRoaXMubXVsdGlwbGUgPT09IGZhbHNlKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZ2V0T3BlcmF0b3IgJyArIHRoaXMuY29sLnByb3AgKyAnIHZhbHVlICcgKyB0aGlzLnZhbHVlLCB0aGlzLm9wdGlvbnMpXG4gICAgICBpZiAodGhpcy52YWx1ZSA9PSAnJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmluZCgoZCkgPT4gZC52YWx1ZSA9PT0gdGhpcy52YWx1ZSAmJiBkLmNoZWNrZWQgPT0gdHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY2hhbmdlVmFsdWVzKG9wdCkge1xuICAgIC8qIENoYW5nZW1lbnQgZGUgbCdvcGVyYXRldXIgZGFucyBsYSBjYXMgZGUgdmFsZXVycyBtdWx0aXBsZXMgZCdvcGVyYXRldXJzIFxuICAgICAgICBFeDogeyB2YWx1ZTogXCJBcHBsZVwiLCBvcGVyYXRvcjogXCI9XCIsIGxhYmVsOiBcIkFwcGxlXCIsIGNoZWNrZWQ6IGZhbHNlIH0gKi9cbiAgICAvLyBjb25zb2xlLmxvZyhcIkNIQU5HRVMgVkFMVUVTXCIsb3B0KVxuICAgIGlmIChvcHQuY2hlY2tlZCkge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJjaGVja2VkXCIpO1xuICAgICAgb3B0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIC8vdGhpcy52YWx1ZXMuc3BsaWNlKHRoaXMudmFsdWVzLmZpbmQoKGEpID0+IGEudmFsdWUgPT09IG9wdC52YWx1ZSAmJiBhLm9wZXJhdG9yID09PSBvcHQub3BlcmF0b3IpLDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAvL3RoaXMudmFsdWVzLnB1c2gob3B0KTtcbiAgICB9XG4gICAgdGhpcy52YWx1ZXMuc3BsaWNlKDApO1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5vcHRpb25zKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zW2ldLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZXMucHVzaCh0aGlzLm9wdGlvbnNbaV0pO1xuICAgICAgfVxuXG4gICAgfVxuICAgIHRoaXMubGFiZWwgPSAnKCcgKyB0aGlzLnZhbHVlcy5sZW5ndGggKyAnKSc7XG4gICAgaWYgKHRoaXMudmFsdWVzLmxlbmd0aCA9PSAwKVxuICAgICAgdGhpcy5sYWJlbCA9IGRlZmF1dF9sYWJlbDtcbiAgICAvL3RoaXMudG9nZ2xlRGl2KCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZVZhbHVlIE9QJywgdGhpcy52YWx1ZXMpO1xuICAgIHRoaXMuX2NoYW5nZU9wZXJhdG9yKCk7XG4gIH1cblxuICBnZXRDb25kaXRpb25zKGZpbHRlcl92YWx1ZSkge1xuICAgIGlmICh0aGlzLm11bHRpcGxlID09IGZhbHNlKSB7XG4gICAgICBsZXQgbyA9IHRoaXMuZ2V0T3BlcmF0b3IoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdnZXRGaWx0ZXIgJyArIHRoaXMuY29sLnByb3AgKyBcIiBvXCIsIG8pXG4gICAgICBpZiAobyAhPSBudWxsICYmIG8ub3BlcmF0b3IgIT0gJycpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gby52YWx1ZS5yZXBsYWNlKCckezF9JywgZmlsdGVyX3ZhbHVlKVxuICAgICAgICAvL2lmICh0aGlzLmNvbC5kYXRhVHlwZSA9PSAnbnVtYmVyJykge1xuICAgICAgICAvLyAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgLy99XG4gICAgICAgIHJldHVybiBbdGhpcy5jb2wucHJvcCwgby5vcGVyYXRvciwgdmFsdWVdXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBjb25kaXRpb25zID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgdiA9IHRoaXMudmFsdWVzW2ldLnZhbHVlO1xuICAgICAgICAgIC8vaWYgKHRoaXMuY29sLmRhdGFUeXBlID09ICdudW1iZXInKSB7XG4gICAgICAgICAgLy8gIHYgPSBwYXJzZUZsb2F0KHYpO1xuICAgICAgICAgIC8vfVxuICAgICAgICAgIGNvbmRpdGlvbnMucHVzaChbdGhpcy5jb2wucHJvcCwgdGhpcy52YWx1ZXNbaV0ub3BlcmF0b3IsIHZdKTtcbiAgICAgICAgICBpZiAodGhpcy52YWx1ZXMubGVuZ3RoIC0gMSA+IGkpIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbnMucHVzaCgnb3InKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29uZGl0aW9ucztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjaGFuZ2VWYWx1ZShvcHQsaWdub3JlVG9nZ2xlPzpib29sZWFuKSB7XG4gICAgLyogQ2hhbmdlbWVudCBkZSBsJ29wZXJhdGV1ciBkYW5zIGxhIGNhcyBkZSB2YWxldXJzIHNpbXBsZSAodW4gc2V1bCBjaG9peClcbiAgICAgICAgRXg6IHsgdmFsdWU6IFwiJSR7MX0lXCIsIG9wZXJhdG9yOiBcImxpa2VcIiwgbGFiZWw6IFwiY29udGFpbnNcIiwgY2hlY2tlZDogZmFsc2UgfSAqL1xuICAgIC8vIFxuICAgIGNvbnNvbGUubG9nKFwiQ0hBTkdFUyBWQUxVRVNcIixvcHQpXG4gICAgaWYgKHRoaXMub3B0aW9ucy5maW5kKChkKSA9PiBkLmNoZWNrZWQgPT09IHRydWUpKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZmluZCgoZCkgPT4gZC5jaGVja2VkID09PSB0cnVlKS5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKG9wdC5jaGVja2VkKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImNoZWNrZWRcIik7XG4gICAgICBvcHQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgLy90aGlzLnZhbHVlcy5zcGxpY2UodGhpcy52YWx1ZXMuZmluZCgoYSkgPT4gYS52YWx1ZSA9PT0gb3B0LnZhbHVlICYmIGEub3BlcmF0b3IgPT09IG9wdC5vcGVyYXRvciksMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIC8vdGhpcy52YWx1ZXMucHVzaChvcHQpO1xuICAgIH1cbiAgICBpZiAob3B0LmxhYmVsLm1hdGNoKC9eXFxzKyQvKSkge1xuICAgICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgICAgdGhpcy5sYWJlbCA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gb3B0LnZhbHVlO1xuICAgICAgdGhpcy5sYWJlbCA9IG9wdC5sYWJlbDtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlVmFsdWUgT1AnLCB0aGlzLm9wdGlvbnMpO1xuICAgIGlmICghaWdub3JlVG9nZ2xlKSB7XG4gICAgICB0aGlzLnRvZ2dsZURpdigpO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2VPcGVyYXRvcigpO1xuICAgIGlmIChvcHQub3BlcmF0b3IgPT0gJycpIHtcbiAgICAgIHRoaXMuY2hhbmdlRW1wdHlPcGVyYXRvci5lbWl0KCk7XG4gICAgfVxuICB9XG5cbiAgX2NoYW5nZU9wZXJhdG9yKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdFTUlUIE9QJywgdGhpcy5vcHRpb25zKVxuICAgIHRoaXMuY2hhbmdlT3BlcmF0b3IuZW1pdCh7XG4gICAgICBwcm9wOiB0aGlzLmNvbCxcbiAgICAgIC8vICBjb25kaXRpb246IFsgdGhpcy5jb2wucHJvcCwgdGhpcy52YWx1ZSBdXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==