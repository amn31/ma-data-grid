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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLW9wLWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiQzovTXlUZW1wL25nMTBhL3Byb2plY3RzL21hLWRhdGEtZ3JpZC9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kYXRhLWdyaWQtb3AtZmlsdGVyL2RhdGEtZ3JpZC1vcC1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBaUQsbUJBQW1CLEVBQUUsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUV0TixPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUU1QixNQUFNLFlBQVksR0FBRyxFQUFFLENBQUE7QUFNdkIsTUFBTSxPQUFPLHlCQUF5QjtJQW1CcEM7UUFqQlMsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUlWLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN6Qyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXhELFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsV0FBTSxHQUEyQixFQUFFLENBQUM7UUFDcEMsVUFBSyxHQUFHLFlBQVksQ0FBQztRQUNyQixrQkFBYSxHQUFRO1lBQ25CLEdBQUcsRUFBRSxDQUFDO1lBQ04sSUFBSSxFQUFFLENBQUM7U0FDUixDQUFBO0lBRWtCLENBQUM7SUFFbkIsb0JBQW9CO1FBQ25CLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksR0FBRyxHQUFHO1lBQ1IsNEJBQTRCO1lBQzVCLENBQUMsQ0FBQyxVQUFVLENBQUMs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SztrQkFDTCxLQUFLO3lCQUNMLFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3dCQUN6QyxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs2QkFDeEMsTUFBTTtrQ0FDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYURhdGFHcmlkQ29sdW1uT3B0aW9ucywgTWFEYXRhR3JpZEhlYWRGaWx0ZXIsIG9wdGlvbnNfaGVhZGVyX2Jvb2wsIG9wdGlvbnNfaGVhZGVyX2Jvb2xlYW4sIG9wdGlvbnNfaGVhZGVyX2RhdGUsIG9wdGlvbnNfaGVhZGVyX251bWJlciwgb3B0aW9uc19oZWFkZXJfc3RyaW5nIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9tYS1kYXRhLWdyaWQtb3B0aW9ucyc7XG5pbXBvcnQgKiBhcyBNIGZyb20gJ21hdGVyaWFsaXplLWNzcyc7XG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0IGRlZmF1dF9sYWJlbCA9ICcnXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYS1kYXRhLWdyaWQtb3AtZmlsdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtZ3JpZC1vcC1maWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXRhLWdyaWQtb3AtZmlsdGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhR3JpZE9wRmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB2YWx1ZSA9ICcnO1xuICBASW5wdXQoKSBjb2w6IE1hRGF0YUdyaWRDb2x1bW5PcHRpb25zO1xuICBAVmlld0NoaWxkKFwiZWxlbVRvZ2dsZVwiLCB7IHN0YXRpYzogZmFsc2UgfSkgZWxlbVRvZ2dsZTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImVsZW1WYWx1ZVwiLCB7IHN0YXRpYzogZmFsc2UgfSkgZWxlbVZhbHVlOiBFbGVtZW50UmVmO1xuICBAT3V0cHV0KCkgY2hhbmdlT3BlcmF0b3IgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNoYW5nZUVtcHR5T3BlcmF0b3IgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgXG4gIG9wdGlvbnMgPSBudWxsO1xuICBtdWx0aXBsZSA9IGZhbHNlO1xuICBpc1Jvd0hUTUw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgdmFsdWVzOiBNYURhdGFHcmlkSGVhZEZpbHRlcltdID0gW107XG4gIGxhYmVsID0gZGVmYXV0X2xhYmVsO1xuICBwb3B1cFBvc2l0aW9uOiBhbnkgPSB7XG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDBcbiAgfVxuICBcbiAgY29uc3RydWN0b3IoKSB7ICAgIH1cblxuICAgZ2V0RnVuY0NsaWNrRG9jdW1lbnQoKSB7XG4gICAgbGV0IHAgPSB0aGlzO1xuICAgIGxldCBmY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnQ0xJQ0snLGZjdCk7XG4gICAgICBwLmVsZW1Ub2dnbGUubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljaycsZmN0KVxuICAgIH1cbiAgICByZXR1cm4gZmN0XG4gIH1cblxuICB0b2dnbGVEaXYoKSB7XG4gICBcbiAgICB2YXIgb25DbGlja0RvY3VtZW50ID0gdGhpcy5nZXRGdW5jQ2xpY2tEb2N1bWVudCgpXG4gICAgJChkb2N1bWVudCkub2ZmKCdjbGljaycsb25DbGlja0RvY3VtZW50KTtcblxuICAgIGlmICh0aGlzLmVsZW1Ub2dnbGUubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID09ICdub25lJykge1xuICAgICAgXG4gICAgICAvL3RoaXMuZWxlbVRvZ2dsZS5uYXRpdmVFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgIHRoaXMuZWxlbVRvZ2dsZS5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgbGV0IGFuY2hvciA9IHRoaXMuZWxlbVZhbHVlLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgIC8vdGhpcy5lbGVtVG9nZ2xlLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gKCQoYW5jaG9yKS5oZWlnaHQoKSskKGFuY2hvcikub2Zmc2V0KCkudG9wKSsncHgnO1xuICAgICAgLy90aGlzLmVsZW1Ub2dnbGUubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gJChhbmNob3IpLm9mZnNldCgpLmxlZnQrJ3B4JztcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJyxvbkNsaWNrRG9jdW1lbnQpXG4gICAgICB9LDUwMClcbiAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsZW1Ub2dnbGUubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljaycsb25DbGlja0RvY3VtZW50KVxuICAgIH1cblxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgXG4gICAgdGhpcy5pc1Jvd0hUTUwgPSB0aGlzLmNvbC5pc1Jvd0hUTUw7XG4gICAgaWYgKHRoaXMuY29sLmRhdGFUeXBlID09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zX2hlYWRlcl9zdHJpbmc7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbC5kYXRhVHlwZSA9PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMubXVsdGlwbGUgPSB0cnVlO1xuICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc19oZWFkZXJfYm9vbGVhbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29sLmRhdGFUeXBlID09ICdib29sJykge1xuICAgICAgdGhpcy5tdWx0aXBsZSA9IHRydWU7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zX2hlYWRlcl9ib29sO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2wuZGF0YVR5cGUgPT0gJ251bWJlcicgfHwgdGhpcy5jb2wuZGF0YVR5cGUgPT0gJ2Zsb2F0Jykge1xuICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc19oZWFkZXJfbnVtYmVyO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2wuZGF0YVR5cGUgPT0gJ2RhdGUnKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zX2hlYWRlcl9kYXRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2wuZGF0YVR5cGUgPT0gJ3NlbGVjdG9yJykge1xuICAgICAgdGhpcy5vcHRpb25zID0gW107XG4gICAgICBcbiAgICB9XG4gICAgaWYgKHRoaXMuY29sLmhlYWRGaWx0ZXIpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuY29sLmhlYWRGaWx0ZXI7XG4gICAgICB0aGlzLm11bHRpcGxlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucyA9PSBudWxsKVxuICAgICAgdGhyb3cgKCdCYWQgZGVmaW5pdGlvbiB0byBvcGVyYXRvciAnICsgdGhpcy5jb2wucHJvcCk7XG4gICAgLy9pZiAodGhpcy5tdWx0aXBsZSkge1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5vcHRpb25zKSB7XG4gICAgICB0aGlzLm9wdGlvbnNbaV0uY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgICAvL31cblxuICAgIC8vdmFyIGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0Jyk7XG4gICAgLy92YXIgaW5zdGFuY2VzID0gTS5Gb3JtU2VsZWN0LmluaXQoZWxlbXMsIHt9KTtcbiAgICAvL2NvbnNvbGUubG9nKCdNJyxpbnN0YW5jZXMpXG4gIH1cblxuICBzZXRGaXJzdENob2ljZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcIm1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tXCIpXG4gICAgLy8gY29uc29sZS5sb2coXCJzZXRGaXJzdENob2ljZSAoMSkgXCIrdGhpcy52YWx1ZSsnICcrdGhpcy5sYWJlbCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJzZXRGaXJzdENob2ljZSBcIix0aGlzLnZhbHVlLHRoaXMubGFiZWwsdGhpcy5vcHRpb25zKVxuICAgIGlmICh0aGlzLm11bHRpcGxlID09PSBmYWxzZSAmJiB0aGlzLmxhYmVsID09ICcnKSB7XG4gICAgICBmb3IgKHZhciBpIGluIHRoaXMub3B0aW9ucykge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zW2ldLmxhYmVsICE9ICcnKSB7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLm9wdGlvbnNbaV0sdHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICB9XG5cbiAgZ2V0T3BlcmF0b3IoKSB7XG4gICAgaWYgKHRoaXMubXVsdGlwbGUgPT09IGZhbHNlKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZ2V0T3BlcmF0b3IgJyArIHRoaXMuY29sLnByb3AgKyAnIHZhbHVlICcgKyB0aGlzLnZhbHVlLCB0aGlzLm9wdGlvbnMpXG4gICAgICBpZiAodGhpcy52YWx1ZSA9PSAnJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmluZCgoZCkgPT4gZC52YWx1ZSA9PT0gdGhpcy52YWx1ZSAmJiBkLmNoZWNrZWQgPT0gdHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY2hhbmdlVmFsdWVzKG9wdCkge1xuICAgIC8qIENoYW5nZW1lbnQgZGUgbCdvcGVyYXRldXIgZGFucyBsYSBjYXMgZGUgdmFsZXVycyBtdWx0aXBsZXMgZCdvcGVyYXRldXJzIFxuICAgICAgICBFeDogeyB2YWx1ZTogXCJBcHBsZVwiLCBvcGVyYXRvcjogXCI9XCIsIGxhYmVsOiBcIkFwcGxlXCIsIGNoZWNrZWQ6IGZhbHNlIH0gKi9cbiAgICAvLyBjb25zb2xlLmxvZyhcIkNIQU5HRVMgVkFMVUVTXCIsb3B0KVxuICAgIGlmIChvcHQuY2hlY2tlZCkge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJjaGVja2VkXCIpO1xuICAgICAgb3B0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIC8vdGhpcy52YWx1ZXMuc3BsaWNlKHRoaXMudmFsdWVzLmZpbmQoKGEpID0+IGEudmFsdWUgPT09IG9wdC52YWx1ZSAmJiBhLm9wZXJhdG9yID09PSBvcHQub3BlcmF0b3IpLDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAvL3RoaXMudmFsdWVzLnB1c2gob3B0KTtcbiAgICB9XG4gICAgdGhpcy52YWx1ZXMuc3BsaWNlKDApO1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5vcHRpb25zKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zW2ldLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZXMucHVzaCh0aGlzLm9wdGlvbnNbaV0pO1xuICAgICAgfVxuXG4gICAgfVxuICAgIHRoaXMubGFiZWwgPSAnKCcgKyB0aGlzLnZhbHVlcy5sZW5ndGggKyAnKSc7XG4gICAgaWYgKHRoaXMudmFsdWVzLmxlbmd0aCA9PSAwKVxuICAgICAgdGhpcy5sYWJlbCA9IGRlZmF1dF9sYWJlbDtcbiAgICAvL3RoaXMudG9nZ2xlRGl2KCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZVZhbHVlIE9QJywgdGhpcy52YWx1ZXMpO1xuICAgIHRoaXMuX2NoYW5nZU9wZXJhdG9yKCk7XG4gIH1cblxuICBnZXRDb25kaXRpb25zKGZpbHRlcl92YWx1ZSkge1xuICAgIGlmICh0aGlzLm11bHRpcGxlID09IGZhbHNlKSB7XG4gICAgICBsZXQgbyA9IHRoaXMuZ2V0T3BlcmF0b3IoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdnZXRGaWx0ZXIgJyArIHRoaXMuY29sLnByb3AgKyBcIiBvXCIsIG8pXG4gICAgICBpZiAobyAhPSBudWxsICYmIG8ub3BlcmF0b3IgIT0gJycpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gby52YWx1ZS5yZXBsYWNlKCckezF9JywgZmlsdGVyX3ZhbHVlKVxuICAgICAgICAvL2lmICh0aGlzLmNvbC5kYXRhVHlwZSA9PSAnbnVtYmVyJykge1xuICAgICAgICAvLyAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgLy99XG4gICAgICAgIHJldHVybiBbdGhpcy5jb2wucHJvcCwgby5vcGVyYXRvciwgdmFsdWVdXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBjb25kaXRpb25zID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgdiA9IHRoaXMudmFsdWVzW2ldLnZhbHVlO1xuICAgICAgICAgIC8vaWYgKHRoaXMuY29sLmRhdGFUeXBlID09ICdudW1iZXInKSB7XG4gICAgICAgICAgLy8gIHYgPSBwYXJzZUZsb2F0KHYpO1xuICAgICAgICAgIC8vfVxuICAgICAgICAgIGNvbmRpdGlvbnMucHVzaChbdGhpcy5jb2wucHJvcCwgdGhpcy52YWx1ZXNbaV0ub3BlcmF0b3IsIHZdKTtcbiAgICAgICAgICBpZiAodGhpcy52YWx1ZXMubGVuZ3RoIC0gMSA+IGkpIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbnMucHVzaCgnb3InKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29uZGl0aW9ucztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjaGFuZ2VWYWx1ZShvcHQsaWdub3JlVG9nZ2xlPzpib29sZWFuKSB7XG4gICAgLyogQ2hhbmdlbWVudCBkZSBsJ29wZXJhdGV1ciBkYW5zIGxhIGNhcyBkZSB2YWxldXJzIHNpbXBsZSAodW4gc2V1bCBjaG9peClcbiAgICAgICAgRXg6IHsgdmFsdWU6IFwiJSR7MX0lXCIsIG9wZXJhdG9yOiBcImxpa2VcIiwgbGFiZWw6IFwiY29udGFpbnNcIiwgY2hlY2tlZDogZmFsc2UgfSAqL1xuICAgIC8vIFxuICAgIGNvbnNvbGUubG9nKFwiQ0hBTkdFUyBWQUxVRVNcIixvcHQpXG4gICAgaWYgKHRoaXMub3B0aW9ucy5maW5kKChkKSA9PiBkLmNoZWNrZWQgPT09IHRydWUpKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZmluZCgoZCkgPT4gZC5jaGVja2VkID09PSB0cnVlKS5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKG9wdC5jaGVja2VkKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImNoZWNrZWRcIik7XG4gICAgICBvcHQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgLy90aGlzLnZhbHVlcy5zcGxpY2UodGhpcy52YWx1ZXMuZmluZCgoYSkgPT4gYS52YWx1ZSA9PT0gb3B0LnZhbHVlICYmIGEub3BlcmF0b3IgPT09IG9wdC5vcGVyYXRvciksMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIC8vdGhpcy52YWx1ZXMucHVzaChvcHQpO1xuICAgIH1cbiAgICBpZiAob3B0LmxhYmVsLm1hdGNoKC9eXFxzKyQvKSkge1xuICAgICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgICAgdGhpcy5sYWJlbCA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gb3B0LnZhbHVlO1xuICAgICAgdGhpcy5sYWJlbCA9IG9wdC5sYWJlbDtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlVmFsdWUgT1AnLCB0aGlzLm9wdGlvbnMpO1xuICAgIGlmICghaWdub3JlVG9nZ2xlKSB7XG4gICAgICB0aGlzLnRvZ2dsZURpdigpO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2VPcGVyYXRvcigpO1xuICAgIGlmIChvcHQub3BlcmF0b3IgPT0gJycpIHtcbiAgICAgIHRoaXMuY2hhbmdlRW1wdHlPcGVyYXRvci5lbWl0KCk7XG4gICAgfVxuICB9XG5cbiAgX2NoYW5nZU9wZXJhdG9yKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdFTUlUIE9QJywgdGhpcy5vcHRpb25zKVxuICAgIHRoaXMuY2hhbmdlT3BlcmF0b3IuZW1pdCh7XG4gICAgICBwcm9wOiB0aGlzLmNvbCxcbiAgICAgIC8vICBjb25kaXRpb246IFsgdGhpcy5jb2wucHJvcCwgdGhpcy52YWx1ZSBdXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==