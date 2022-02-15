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
    ngOnInit() {
        this.isRowHTML = this.col.isRowHTML;
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
        // 
        console.log('EMIT OP', this.col.prop, this.options.find((d) => d.checked === true), this.options);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLW9wLWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiRDovTXlIb21lL2FuZHJvaWQvd29ya3NwYWNlL2dpdC9tYS1uZy1kYXRhLWdyaWQvcHJvamVjdHMvbWEtZGF0YS1ncmlkL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGEtZ3JpZC1vcC1maWx0ZXIvZGF0YS1ncmlkLW9wLWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFpRCxtQkFBbUIsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXROLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRTVCLE1BQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQTtBQU12QixNQUFNLE9BQU8seUJBQXlCO0lBbUJwQztRQWpCUyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBSVYsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3pDLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFeEQsWUFBTyxHQUEyQixJQUFJLENBQUM7UUFDdkMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLFdBQU0sR0FBMkIsRUFBRSxDQUFDO1FBQ3BDLFVBQUssR0FBRyxZQUFZLENBQUM7UUFDckIsa0JBQWEsR0FBUTtZQUNuQixHQUFHLEVBQUUsQ0FBQztZQUNOLElBQUksRUFBRSxDQUFDO1NBQ1IsQ0FBQTtJQUVlLENBQUM7SUFFakIsb0JBQW9CO1FBQ2xCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksR0FBRyxHQUFHO1lBQ1Is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Q3hDLE1BQU07a0NBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZENvbHVtbk9wdGlvbnMsIE1hRGF0YUdyaWRIZWFkRmlsdGVyLCBvcHRpb25zX2hlYWRlcl9ib29sLCBvcHRpb25zX2hlYWRlcl9ib29sZWFuLCBvcHRpb25zX2hlYWRlcl9kYXRlLCBvcHRpb25zX2hlYWRlcl9udW1iZXIsIG9wdGlvbnNfaGVhZGVyX3N0cmluZyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvbWEtZGF0YS1ncmlkLW9wdGlvbnMnO1xuaW1wb3J0ICogYXMgTSBmcm9tICdtYXRlcmlhbGl6ZS1jc3MnO1xuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xuXG5jb25zdCBkZWZhdXRfbGFiZWwgPSAnJ1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWEtZGF0YS1ncmlkLW9wLWZpbHRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLWdyaWQtb3AtZmlsdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS1ncmlkLW9wLWZpbHRlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0YUdyaWRPcEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdmFsdWUgPSAnJztcbiAgQElucHV0KCkgY29sOiBNYURhdGFHcmlkQ29sdW1uT3B0aW9ucztcbiAgQFZpZXdDaGlsZChcImVsZW1Ub2dnbGVcIiwgeyBzdGF0aWM6IGZhbHNlIH0pIGVsZW1Ub2dnbGU6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJlbGVtVmFsdWVcIiwgeyBzdGF0aWM6IGZhbHNlIH0pIGVsZW1WYWx1ZTogRWxlbWVudFJlZjtcbiAgQE91dHB1dCgpIGNoYW5nZU9wZXJhdG9yID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBjaGFuZ2VFbXB0eU9wZXJhdG9yID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgb3B0aW9uczogTWFEYXRhR3JpZEhlYWRGaWx0ZXJbXSA9IG51bGw7XG4gIG11bHRpcGxlID0gZmFsc2U7XG4gIGlzUm93SFRNTDogYm9vbGVhbiA9IGZhbHNlO1xuICB2YWx1ZXM6IE1hRGF0YUdyaWRIZWFkRmlsdGVyW10gPSBbXTtcbiAgbGFiZWwgPSBkZWZhdXRfbGFiZWw7XG4gIHBvcHVwUG9zaXRpb246IGFueSA9IHtcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMFxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBnZXRGdW5jQ2xpY2tEb2N1bWVudCgpIHtcbiAgICBsZXQgcCA9IHRoaXM7XG4gICAgbGV0IGZjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdDTElDSycsZmN0KTtcbiAgICAgIHAuZWxlbVRvZ2dsZS5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrJywgZmN0KVxuICAgIH1cbiAgICByZXR1cm4gZmN0XG4gIH1cblxuICB0b2dnbGVEaXYoKSB7XG5cbiAgICB2YXIgb25DbGlja0RvY3VtZW50ID0gdGhpcy5nZXRGdW5jQ2xpY2tEb2N1bWVudCgpXG4gICAgJChkb2N1bWVudCkub2ZmKCdjbGljaycsIG9uQ2xpY2tEb2N1bWVudCk7XG5cbiAgICBpZiAodGhpcy5lbGVtVG9nZ2xlLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PSAnbm9uZScpIHtcblxuICAgICAgLy90aGlzLmVsZW1Ub2dnbGUubmF0aXZlRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICB0aGlzLmVsZW1Ub2dnbGUubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGxldCBhbmNob3IgPSB0aGlzLmVsZW1WYWx1ZS5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAvL3RoaXMuZWxlbVRvZ2dsZS5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9ICgkKGFuY2hvcikuaGVpZ2h0KCkrJChhbmNob3IpLm9mZnNldCgpLnRvcCkrJ3B4JztcbiAgICAgIC8vdGhpcy5lbGVtVG9nZ2xlLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9ICQoYW5jaG9yKS5vZmZzZXQoKS5sZWZ0KydweCc7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgb25DbGlja0RvY3VtZW50KVxuICAgICAgfSwgNTAwKVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbVRvZ2dsZS5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrJywgb25DbGlja0RvY3VtZW50KVxuICAgIH1cblxuICB9XG5cbiAgY2xvbmVPcHRpb25zKG9wdHMpOiBNYURhdGFHcmlkSGVhZEZpbHRlcltdIHtcblxuICAgIGlmIChvcHRzID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgb3B0aW9uczogTWFEYXRhR3JpZEhlYWRGaWx0ZXJbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0cy5sZW5ndGg7IGkrKykge1xuICAgICAgb3B0aW9ucy5wdXNoKE9iamVjdC5hc3NpZ24oe30sIG9wdHNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIHRoaXMuaXNSb3dIVE1MID0gdGhpcy5jb2wuaXNSb3dIVE1MO1xuICAgIGlmICh0aGlzLmNvbC5kYXRhVHlwZSA9PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5jbG9uZU9wdGlvbnMob3B0aW9uc19oZWFkZXJfc3RyaW5nKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29sLmRhdGFUeXBlID09ICdib29sZWFuJykge1xuICAgICAgdGhpcy5tdWx0aXBsZSA9IHRydWU7XG4gICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmNsb25lT3B0aW9ucyhvcHRpb25zX2hlYWRlcl9ib29sZWFuKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29sLmRhdGFUeXBlID09ICdib29sJykge1xuICAgICAgdGhpcy5tdWx0aXBsZSA9IHRydWU7XG4gICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmNsb25lT3B0aW9ucyhvcHRpb25zX2hlYWRlcl9ib29sKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29sLmRhdGFUeXBlID09ICdudW1iZXInIHx8IHRoaXMuY29sLmRhdGFUeXBlID09ICdmbG9hdCcpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuY2xvbmVPcHRpb25zKG9wdGlvbnNfaGVhZGVyX251bWJlcilcbiAgICB9XG4gICAgaWYgKHRoaXMuY29sLmRhdGFUeXBlID09ICdkYXRlJykge1xuICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5jbG9uZU9wdGlvbnMob3B0aW9uc19oZWFkZXJfZGF0ZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbC5kYXRhVHlwZSA9PSAnc2VsZWN0b3InKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBbXTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29sLmhlYWRGaWx0ZXIpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuY29sLmhlYWRGaWx0ZXI7XG4gICAgICB0aGlzLm11bHRpcGxlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucyA9PSBudWxsKVxuICAgICAgdGhyb3cgKCdCYWQgZGVmaW5pdGlvbiB0byBvcGVyYXRvciAnICsgdGhpcy5jb2wucHJvcCk7XG5cbiAgICAvLyBQcsOpLXNlbGVjdGlvbiBkZSBsJ29wZXJhdG9yXG4gICAgaWYgKCF0aGlzLm11bHRpcGxlICYmIHRoaXMuY29sLnNlbGVjdGVkRmlsdGVyKSB7XG4gICAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLm9wdGlvbnMuZmluZCgoZCkgPT4gZC5vcGVyYXRvciA9PT0gdGhpcy5jb2wuc2VsZWN0ZWRGaWx0ZXIub3BlcmF0b3IpO1xuICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU0VMRUNURURcIiwgdGhpcy5jb2wucHJvcCwgc2VsZWN0ZWQpO1xuICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKHNlbGVjdGVkLHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBpIGluIHRoaXMub3B0aW9ucykge1xuICAgICAgaWYgKHRoaXMub3B0aW9uc1tpXS5jaGVja2VkICE9PSB0cnVlKVxuICAgICAgICB0aGlzLm9wdGlvbnNbaV0uY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBcbiAgfVxuXG4gIHNldEZpcnN0Q2hvaWNlKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwic2V0Rmlyc3RDaG9pY2UgKDEpIFwiK3RoaXMudmFsdWUrJyAnK3RoaXMubGFiZWwpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwic2V0Rmlyc3RDaG9pY2UgXCIsdGhpcy52YWx1ZSx0aGlzLmxhYmVsLHRoaXMub3B0aW9ucylcbiAgICBpZiAodGhpcy5tdWx0aXBsZSA9PT0gZmFsc2UgJiYgdGhpcy5sYWJlbCA9PSAnJykge1xuICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uc1tpXS5sYWJlbCAhPSAnJykge1xuICAgICAgICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5vcHRpb25zW2ldLCB0cnVlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIGdldE9wZXJhdG9yKCkge1xuICAgIGlmICh0aGlzLm11bHRpcGxlID09PSBmYWxzZSkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2dldE9wZXJhdG9yICcgKyB0aGlzLmNvbC5wcm9wICsgJyB2YWx1ZSAnICsgdGhpcy52YWx1ZSwgdGhpcy5vcHRpb25zKVxuICAgICAgaWYgKHRoaXMudmFsdWUgPT0gJycpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbmQoKGQpID0+IGQudmFsdWUgPT09IHRoaXMudmFsdWUgJiYgZC5jaGVja2VkID09IHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNoYW5nZVZhbHVlcyhvcHQpIHtcbiAgICAvKiBDaGFuZ2VtZW50IGRlIGwnb3BlcmF0ZXVyIGRhbnMgbGEgY2FzIGRlIHZhbGV1cnMgbXVsdGlwbGVzIGQnb3BlcmF0ZXVycyBcbiAgICAgICAgRXg6IHsgdmFsdWU6IFwiQXBwbGVcIiwgb3BlcmF0b3I6IFwiPVwiLCBsYWJlbDogXCJBcHBsZVwiLCBjaGVja2VkOiBmYWxzZSB9ICovXG4gICAgLy9jb25zb2xlLmxvZyhcIkNIQU5HRVMgVkFMVUVTXCIsIHRoaXMuY29sLnByb3AsIG9wdClcbiAgICBpZiAob3B0LmNoZWNrZWQpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hlY2tlZFwiKTtcbiAgICAgIG9wdC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAvL3RoaXMudmFsdWVzLnNwbGljZSh0aGlzLnZhbHVlcy5maW5kKChhKSA9PiBhLnZhbHVlID09PSBvcHQudmFsdWUgJiYgYS5vcGVyYXRvciA9PT0gb3B0Lm9wZXJhdG9yKSwxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgLy90aGlzLnZhbHVlcy5wdXNoKG9wdCk7XG4gICAgfVxuICAgIHRoaXMudmFsdWVzLnNwbGljZSgwKTtcbiAgICBmb3IgKHZhciBpIGluIHRoaXMub3B0aW9ucykge1xuICAgICAgaWYgKHRoaXMub3B0aW9uc1tpXS5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMudmFsdWVzLnB1c2godGhpcy5vcHRpb25zW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5sYWJlbCA9ICcoJyArIHRoaXMudmFsdWVzLmxlbmd0aCArICcpJztcbiAgICBpZiAodGhpcy52YWx1ZXMubGVuZ3RoID09IDApXG4gICAgICB0aGlzLmxhYmVsID0gZGVmYXV0X2xhYmVsO1xuICAgIC8vdGhpcy50b2dnbGVEaXYoKTtcbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlVmFsdWUgT1AnLCB0aGlzLnZhbHVlcyk7XG4gICAgdGhpcy5fY2hhbmdlT3BlcmF0b3IoKTtcbiAgfVxuXG4gIGdldENvbmRpdGlvbnMoZmlsdGVyX3ZhbHVlKSB7XG4gICAgaWYgKHRoaXMubXVsdGlwbGUgPT0gZmFsc2UpIHtcbiAgICAgIGxldCBvID0gdGhpcy5nZXRPcGVyYXRvcigpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2dldEZpbHRlciAnICsgdGhpcy5jb2wucHJvcCArIFwiIG9cIiwgbylcbiAgICAgIGlmIChvICE9IG51bGwgJiYgby5vcGVyYXRvciAhPSAnJykge1xuICAgICAgICBsZXQgdmFsdWUgPSBvLnZhbHVlLnJlcGxhY2UoJyR7MX0nLCBmaWx0ZXJfdmFsdWUpXG4gICAgICAgIC8vaWYgKHRoaXMuY29sLmRhdGFUeXBlID09ICdudW1iZXInKSB7XG4gICAgICAgIC8vICB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgICAvL31cbiAgICAgICAgcmV0dXJuIFt0aGlzLmNvbC5wcm9wLCBvLm9wZXJhdG9yLCB2YWx1ZV1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMudmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IGNvbmRpdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCB2ID0gdGhpcy52YWx1ZXNbaV0udmFsdWU7XG4gICAgICAgICAgLy9pZiAodGhpcy5jb2wuZGF0YVR5cGUgPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAvLyAgdiA9IHBhcnNlRmxvYXQodik7XG4gICAgICAgICAgLy99XG4gICAgICAgICAgY29uZGl0aW9ucy5wdXNoKFt0aGlzLmNvbC5wcm9wLCB0aGlzLnZhbHVlc1tpXS5vcGVyYXRvciwgdl0pO1xuICAgICAgICAgIGlmICh0aGlzLnZhbHVlcy5sZW5ndGggLSAxID4gaSkge1xuICAgICAgICAgICAgY29uZGl0aW9ucy5wdXNoKCdvcicpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25kaXRpb25zO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNoYW5nZVZhbHVlKG9wdDogTWFEYXRhR3JpZEhlYWRGaWx0ZXIsIGlnbm9yZVRvZ2dsZT86IGJvb2xlYW4pIHtcbiAgICAvKiBDaGFuZ2VtZW50IGRlIGwnb3BlcmF0ZXVyIGRhbnMgbGEgY2FzIGRlIHZhbGV1cnMgc2ltcGxlICh1biBzZXVsIGNob2l4KVxuICAgICAgICBFeDogeyB2YWx1ZTogXCIlJHsxfSVcIiwgb3BlcmF0b3I6IFwibGlrZVwiLCBsYWJlbDogXCJjb250YWluc1wiLCBjaGVja2VkOiBmYWxzZSB9ICovXG4gICAgLy8gXG5cbiAgICAvLyBjb25zb2xlLmxvZyhcIkNIQU5HRSBWQUxVRVwiLCBvcHQub3BlcmF0b3IsIHRoaXMuY29sLnByb3AsIG9wdClcbiAgICBpZiAodGhpcy5vcHRpb25zLmZpbmQoKGQpID0+IGQuY2hlY2tlZCA9PT0gdHJ1ZSkpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5maW5kKChkKSA9PiBkLmNoZWNrZWQgPT09IHRydWUpLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgb3B0LmNoZWNrZWQgPSAhb3B0LmNoZWNrZWQ7XG4gICAgaWYgKG9wdC5sYWJlbC5tYXRjaCgvXlxccyskLykpIHtcbiAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICAgIHRoaXMubGFiZWwgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWx1ZSA9IG9wdC52YWx1ZTtcbiAgICAgIHRoaXMubGFiZWwgPSBvcHQubGFiZWw7XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZVZhbHVlIE9QJywgdGhpcy5vcHRpb25zKTtcbiAgICBpZiAoIWlnbm9yZVRvZ2dsZSkge1xuICAgICAgdGhpcy50b2dnbGVEaXYoKTtcbiAgICB9XG4gICAgdGhpcy5fY2hhbmdlT3BlcmF0b3IoKTtcbiAgICBpZiAob3B0Lm9wZXJhdG9yID09ICcnKSB7XG4gICAgICB0aGlzLmNoYW5nZUVtcHR5T3BlcmF0b3IuZW1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIF9jaGFuZ2VPcGVyYXRvcigpIHtcbiAgICAvLyBcbiAgICBjb25zb2xlLmxvZygnRU1JVCBPUCcsIHRoaXMuY29sLnByb3AsIHRoaXMub3B0aW9ucy5maW5kKChkKSA9PiBkLmNoZWNrZWQgPT09IHRydWUpLCB0aGlzLm9wdGlvbnMpXG4gICAgdGhpcy5jaGFuZ2VPcGVyYXRvci5lbWl0KHtcbiAgICAgIHByb3A6IHRoaXMuY29sLFxuICAgICAgLy8gIGNvbmRpdGlvbjogWyB0aGlzLmNvbC5wcm9wLCB0aGlzLnZhbHVlIF1cbiAgICB9KTtcbiAgfVxufVxuIl19