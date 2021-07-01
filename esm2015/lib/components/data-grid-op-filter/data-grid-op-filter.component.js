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
        if (this.col.dataType == 'bool') {
            this.multiple = true;
            this.options = options_header_bool;
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
        console.log("GET-COND", this.values, this.col);
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
                console.log("COND", conditions);
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
DataGridOpFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'ma-data-grid-op-filter',
                template: "<!--\n<div class=\"red\">=</div>(onComplete)=\"onComplete($event)\"\n\n<app-ma-completion [data]=\"choices\" placeholder=\"\" value=\"defautValue\"  ></app-ma-completion>\n     <select dir=\"rtl\">\n    <option>Foo</option>    \n    <option>bar</option>\n    <option>to the right</option>\n</select>\n\n\n<div *ngIf=\"col.isRowNumber === true; then RowNumberBlock else dataBlock\"></div>\n<ng-template #RowNumberBlock>{{i}}</ng-template>\n<ng-template #dataBlock> {{u[col.prop] | dataGridPipe :u :c}}</ng-template>\n-->\n\n<div>\n\n    <div #elemValue (click)=\"toggleDiv()\" class=\"op_label\"><i *ngIf=\"label == ''\" class=\"tiny material-icons\">search</i>{{label}}\n    </div>\n    <div #elemToggle style=\"display: none; z-index: 20; max-height: 300px; overflow-y: auto; background-color: aliceblue;border: 1px solid #9e9e9e;\" [style.left.px]=\"popupPosition.left\"\n    [style.top.px]=\"popupPosition.top\">\n        <div *ngFor=\"let opt of options;\" class=\"op_filter\" [value]=\"opt.value\">\n            <div *ngIf=\"multiple === true\">\n                <label>\n                    <input type=\"checkbox\" class=\"op_filter\" [value]=\"opt.value\" [checked]=\"opt.checked\" (click)=\"changeValues(opt)\" />\n                    <span *ngIf=\"!isRowHTML\">{{opt.label}}</span>\n                    <span *ngIf=\"isRowHTML === true\" [innerHTML]=\"opt.label\"></span>\n                </label>\n            </div>\n            <div *ngIf=\"multiple === false\">\n                <div (click)=\"changeValue(opt)\">{{opt.label}}&nbsp;</div>\n            </div>\n        </div>\n    </div>\n\n</div>\n<!--\n<select class=\"browser-default op_filter\" [(ngModel)]=\"value\" (change)=\"_changeOperator($event)\" >\n    <option *ngFor=\"let opt of options;\"  class=\"op_filter\" [value]=\"opt.value\">{{opt.label}}\n    </option>\n</select>\n\n\n-->",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLW9wLWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiRDovTXlIb21lL2FuZHJvaWQvd29ya3NwYWNlL2dpdC9tYS1uZy1kYXRhZ3JpZC9wcm9qZWN0cy9tYS1kYXRhLWdyaWQvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0YS1ncmlkLW9wLWZpbHRlci9kYXRhLWdyaWQtb3AtZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQWlELG1CQUFtQixFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFdE4sT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFNUIsTUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFBO0FBTXZCLE1BQU0sT0FBTyx5QkFBeUI7SUFvQnBDO1FBbEJTLFVBQUssR0FBRyxFQUFFLENBQUM7UUFJVixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDekMsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUV4RCxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLFdBQU0sR0FBMkIsRUFBRSxDQUFDO1FBQ3BDLFVBQUssR0FBRyxZQUFZLENBQUM7UUFDckIsa0JBQWEsR0FBUTtZQUNuQixHQUFHLEVBQUUsQ0FBQztZQUNOLElBQUksRUFBRSxDQUFDO1NBQ1IsQ0FBQTtJQUtELENBQUM7SUFFQSxvQkFBb0I7UUFDbkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxHQUFHLEdBQUc7WUFDUiw0QkFB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bXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZENvbHVtbk9wdGlvbnMsIE1hRGF0YUdyaWRIZWFkRmlsdGVyLCBvcHRpb25zX2hlYWRlcl9ib29sLCBvcHRpb25zX2hlYWRlcl9ib29sZWFuLCBvcHRpb25zX2hlYWRlcl9kYXRlLCBvcHRpb25zX2hlYWRlcl9udW1iZXIsIG9wdGlvbnNfaGVhZGVyX3N0cmluZyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvbWEtZGF0YS1ncmlkLW9wdGlvbnMnO1xuaW1wb3J0ICogYXMgTSBmcm9tICdtYXRlcmlhbGl6ZS1jc3MnO1xuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xuXG5jb25zdCBkZWZhdXRfbGFiZWwgPSAnJ1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWEtZGF0YS1ncmlkLW9wLWZpbHRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLWdyaWQtb3AtZmlsdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS1ncmlkLW9wLWZpbHRlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0YUdyaWRPcEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdmFsdWUgPSAnJztcbiAgQElucHV0KCkgY29sOiBNYURhdGFHcmlkQ29sdW1uT3B0aW9ucztcbiAgQFZpZXdDaGlsZChcImVsZW1Ub2dnbGVcIiwgeyBzdGF0aWM6IGZhbHNlIH0pIGVsZW1Ub2dnbGU6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJlbGVtVmFsdWVcIiwgeyBzdGF0aWM6IGZhbHNlIH0pIGVsZW1WYWx1ZTogRWxlbWVudFJlZjtcbiAgQE91dHB1dCgpIGNoYW5nZU9wZXJhdG9yID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBjaGFuZ2VFbXB0eU9wZXJhdG9yID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIFxuICBvcHRpb25zID0gbnVsbDtcbiAgbXVsdGlwbGUgPSBmYWxzZTtcbiAgaXNSb3dIVE1MOiBib29sZWFuID0gZmFsc2U7XG4gIHZhbHVlczogTWFEYXRhR3JpZEhlYWRGaWx0ZXJbXSA9IFtdO1xuICBsYWJlbCA9IGRlZmF1dF9sYWJlbDtcbiAgcG9wdXBQb3NpdGlvbjogYW55ID0ge1xuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwXG4gIH1cbiAgXG4gIFxuICBjb25zdHJ1Y3RvcigpIHsgXG4gICAgXG4gIH1cblxuICAgZ2V0RnVuY0NsaWNrRG9jdW1lbnQoKSB7XG4gICAgbGV0IHAgPSB0aGlzO1xuICAgIGxldCBmY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnQ0xJQ0snLGZjdCk7XG4gICAgICBwLmVsZW1Ub2dnbGUubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljaycsZmN0KVxuICAgIH1cbiAgICByZXR1cm4gZmN0XG4gIH1cblxuICB0b2dnbGVEaXYoKSB7XG4gICBcbiAgICB2YXIgb25DbGlja0RvY3VtZW50ID0gdGhpcy5nZXRGdW5jQ2xpY2tEb2N1bWVudCgpXG4gICAgJChkb2N1bWVudCkub2ZmKCdjbGljaycsb25DbGlja0RvY3VtZW50KTtcblxuICAgIGlmICh0aGlzLmVsZW1Ub2dnbGUubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID09ICdub25lJykge1xuICAgICAgXG4gICAgICB0aGlzLmVsZW1Ub2dnbGUubmF0aXZlRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICB0aGlzLmVsZW1Ub2dnbGUubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGxldCBhbmNob3IgPSB0aGlzLmVsZW1WYWx1ZS5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICB0aGlzLmVsZW1Ub2dnbGUubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSAoJChhbmNob3IpLmhlaWdodCgpKyQoYW5jaG9yKS5vZmZzZXQoKS50b3ApKydweCc7XG4gICAgICB0aGlzLmVsZW1Ub2dnbGUubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gJChhbmNob3IpLm9mZnNldCgpLmxlZnQrJ3B4JztcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJyxvbkNsaWNrRG9jdW1lbnQpXG4gICAgICB9LDUwMClcbiAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsZW1Ub2dnbGUubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljaycsb25DbGlja0RvY3VtZW50KVxuICAgIH1cblxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgXG4gICAgdGhpcy5pc1Jvd0hUTUwgPSB0aGlzLmNvbC5pc1Jvd0hUTUw7XG4gICAgaWYgKHRoaXMuY29sLmRhdGFUeXBlID09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zX2hlYWRlcl9zdHJpbmc7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbC5kYXRhVHlwZSA9PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMubXVsdGlwbGUgPSB0cnVlO1xuICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc19oZWFkZXJfYm9vbGVhbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29sLmRhdGFUeXBlID09ICdib29sJykge1xuICAgICAgdGhpcy5tdWx0aXBsZSA9IHRydWU7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zX2hlYWRlcl9ib29sO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2wuZGF0YVR5cGUgPT0gJ251bWJlcicpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNfaGVhZGVyX251bWJlcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29sLmRhdGFUeXBlID09ICdkYXRlJykge1xuICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc19oZWFkZXJfZGF0ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29sLmhlYWRGaWx0ZXIpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuY29sLmhlYWRGaWx0ZXI7XG4gICAgICB0aGlzLm11bHRpcGxlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucyA9PSBudWxsKVxuICAgICAgdGhyb3cgKCdCYWQgZGVmaW5pdGlvbiB0byBvcGVyYXRvciAnICsgdGhpcy5jb2wucHJvcCk7XG4gICAgLy9pZiAodGhpcy5tdWx0aXBsZSkge1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5vcHRpb25zKSB7XG4gICAgICB0aGlzLm9wdGlvbnNbaV0uY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgICAvL31cblxuICAgIC8vdmFyIGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0Jyk7XG4gICAgLy92YXIgaW5zdGFuY2VzID0gTS5Gb3JtU2VsZWN0LmluaXQoZWxlbXMsIHt9KTtcbiAgICAvL2NvbnNvbGUubG9nKCdNJyxpbnN0YW5jZXMpXG4gIH1cblxuICBnZXRPcGVyYXRvcigpIHtcbiAgICBpZiAodGhpcy5tdWx0aXBsZSA9PT0gZmFsc2UpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdnZXRPcGVyYXRvciAnICsgdGhpcy5jb2wucHJvcCArICcgdmFsdWUgJyArIHRoaXMudmFsdWUsIHRoaXMub3B0aW9ucylcbiAgICAgIGlmICh0aGlzLnZhbHVlID09ICcnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maW5kKChkKSA9PiBkLnZhbHVlID09PSB0aGlzLnZhbHVlICYmIGQuY2hlY2tlZCA9PSB0cnVlKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjaGFuZ2VWYWx1ZXMob3B0KSB7XG4gICAgaWYgKG9wdC5jaGVja2VkKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImNoZWNrZWRcIik7XG4gICAgICBvcHQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgLy90aGlzLnZhbHVlcy5zcGxpY2UodGhpcy52YWx1ZXMuZmluZCgoYSkgPT4gYS52YWx1ZSA9PT0gb3B0LnZhbHVlICYmIGEub3BlcmF0b3IgPT09IG9wdC5vcGVyYXRvciksMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIC8vdGhpcy52YWx1ZXMucHVzaChvcHQpO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlcy5zcGxpY2UoMCk7XG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLm9wdGlvbnMpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnNbaV0uY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlcy5wdXNoKHRoaXMub3B0aW9uc1tpXSk7XG4gICAgICB9XG5cbiAgICB9XG4gICAgdGhpcy5sYWJlbCA9ICcoJyArIHRoaXMudmFsdWVzLmxlbmd0aCArICcpJztcbiAgICBpZiAodGhpcy52YWx1ZXMubGVuZ3RoID09IDApXG4gICAgICB0aGlzLmxhYmVsID0gZGVmYXV0X2xhYmVsO1xuICAgIC8vdGhpcy50b2dnbGVEaXYoKTtcbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlVmFsdWUgT1AnLCB0aGlzLnZhbHVlcyk7XG4gICAgdGhpcy5fY2hhbmdlT3BlcmF0b3IoKTtcbiAgfVxuXG4gIGdldENvbmRpdGlvbnMoZmlsdGVyX3ZhbHVlKSB7XG4gICAgY29uc29sZS5sb2coXCJHRVQtQ09ORFwiLHRoaXMudmFsdWVzLHRoaXMuY29sKVxuICAgIGlmICh0aGlzLm11bHRpcGxlID09IGZhbHNlKSB7XG4gICAgICBsZXQgbyA9IHRoaXMuZ2V0T3BlcmF0b3IoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdnZXRGaWx0ZXIgJyArIHRoaXMuY29sLnByb3AgKyBcIiBvXCIsIG8pXG4gICAgICBpZiAobyAhPSBudWxsICYmIG8ub3BlcmF0b3IgIT0gJycpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gby52YWx1ZS5yZXBsYWNlKCckezF9JywgZmlsdGVyX3ZhbHVlKVxuICAgICAgICAvL2lmICh0aGlzLmNvbC5kYXRhVHlwZSA9PSAnbnVtYmVyJykge1xuICAgICAgICAvLyAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgLy99XG4gICAgICAgIHJldHVybiBbdGhpcy5jb2wucHJvcCwgby5vcGVyYXRvciwgdmFsdWVdXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBjb25kaXRpb25zID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgdiA9IHRoaXMudmFsdWVzW2ldLnZhbHVlO1xuICAgICAgICAgIC8vaWYgKHRoaXMuY29sLmRhdGFUeXBlID09ICdudW1iZXInKSB7XG4gICAgICAgICAgLy8gIHYgPSBwYXJzZUZsb2F0KHYpO1xuICAgICAgICAgIC8vfVxuICAgICAgICAgIGNvbmRpdGlvbnMucHVzaChbdGhpcy5jb2wucHJvcCwgdGhpcy52YWx1ZXNbaV0ub3BlcmF0b3IsIHZdKTtcbiAgICAgICAgICBpZiAodGhpcy52YWx1ZXMubGVuZ3RoIC0gMSA+IGkpIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbnMucHVzaCgnb3InKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIkNPTkRcIixjb25kaXRpb25zKVxuICAgICAgICByZXR1cm4gY29uZGl0aW9ucztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjaGFuZ2VWYWx1ZShvcHQpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkNoYW5nZVZhbHVlXCIsb3B0KTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmZpbmQoKGQpID0+IGQuY2hlY2tlZCA9PT0gdHJ1ZSkpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5maW5kKChkKSA9PiBkLmNoZWNrZWQgPT09IHRydWUpLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAob3B0LmNoZWNrZWQpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hlY2tlZFwiKTtcbiAgICAgIG9wdC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAvL3RoaXMudmFsdWVzLnNwbGljZSh0aGlzLnZhbHVlcy5maW5kKChhKSA9PiBhLnZhbHVlID09PSBvcHQudmFsdWUgJiYgYS5vcGVyYXRvciA9PT0gb3B0Lm9wZXJhdG9yKSwxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgLy90aGlzLnZhbHVlcy5wdXNoKG9wdCk7XG4gICAgfVxuICAgIGlmIChvcHQubGFiZWwubWF0Y2goL15cXHMrJC8pKSB7XG4gICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgICB0aGlzLmxhYmVsID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSBvcHQudmFsdWU7XG4gICAgICB0aGlzLmxhYmVsID0gb3B0LmxhYmVsO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VWYWx1ZSBPUCcsIHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy50b2dnbGVEaXYoKTtcbiAgICB0aGlzLl9jaGFuZ2VPcGVyYXRvcigpO1xuICAgIGlmIChvcHQub3BlcmF0b3IgPT0gJycpIHtcbiAgICAgIHRoaXMuY2hhbmdlRW1wdHlPcGVyYXRvci5lbWl0KCk7XG4gICAgfVxuICB9XG5cbiAgX2NoYW5nZU9wZXJhdG9yKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdFTUlUIE9QJywgdGhpcy5vcHRpb25zKVxuICAgIHRoaXMuY2hhbmdlT3BlcmF0b3IuZW1pdCh7XG4gICAgICBwcm9wOiB0aGlzLmNvbCxcbiAgICAgIC8vICBjb25kaXRpb246IFsgdGhpcy5jb2wucHJvcCwgdGhpcy52YWx1ZSBdXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==