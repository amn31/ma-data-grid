import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { options_header_boolean, options_header_date, options_header_number, options_header_string } from '../../interfaces/ma-data-grid-options';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLW9wLWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiRDovTXlIb21lL2FuZHJvaWQvd29ya3NwYWNlL2dpdC9tYS1uZy1kYXRhZ3JpZC9wcm9qZWN0cy9tYS1kYXRhLWdyaWQvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0YS1ncmlkLW9wLWZpbHRlci9kYXRhLWdyaWQtb3AtZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQWlELHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFak0sT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFNUIsTUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFBO0FBTXZCLE1BQU0sT0FBTyx5QkFBeUI7SUFvQnBDO1FBbEJTLFVBQUssR0FBRyxFQUFFLENBQUM7UUFJVixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDekMsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUV4RCxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLFdBQU0sR0FBMkIsRUFBRSxDQUFDO1FBQ3BDLFVBQUssR0FBRyxZQUFZLENBQUM7UUFDckIsa0JBQWEsR0FBUTtZQUNuQixHQUFHLEVBQUUsQ0FBQztZQUNOLElBQUksRUFBRSxDQUFDO1NBQ1IsQ0FBQTtJQUtELENBQUM7SUFFQSxvQkFBb0I7UUFDbkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxHQUFHLEdBQUc7WUFDUiw0QkFBNEI7WUFDNUIsQ0FB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SUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztTQUN4QjtRQUVELCtDQUErQztRQUMvQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLEVBQUU7WUFDdEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQUVELGVBQWU7UUFDYix1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDdkIsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHO1NBRWYsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBcE1GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyw4MERBQW1EOzthQUVwRDs7OztvQkFHRSxLQUFLO2tCQUNMLEtBQUs7eUJBQ0wsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7d0JBQ3pDLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzZCQUN4QyxNQUFNO2tDQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hRGF0YUdyaWRDb2x1bW5PcHRpb25zLCBNYURhdGFHcmlkSGVhZEZpbHRlciwgb3B0aW9uc19oZWFkZXJfYm9vbGVhbiwgb3B0aW9uc19oZWFkZXJfZGF0ZSwgb3B0aW9uc19oZWFkZXJfbnVtYmVyLCBvcHRpb25zX2hlYWRlcl9zdHJpbmcgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL21hLWRhdGEtZ3JpZC1vcHRpb25zJztcbmltcG9ydCAqIGFzIE0gZnJvbSAnbWF0ZXJpYWxpemUtY3NzJztcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgZGVmYXV0X2xhYmVsID0gJydcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hLWRhdGEtZ3JpZC1vcC1maWx0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS1ncmlkLW9wLWZpbHRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RhdGEtZ3JpZC1vcC1maWx0ZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGFHcmlkT3BGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHZhbHVlID0gJyc7XG4gIEBJbnB1dCgpIGNvbDogTWFEYXRhR3JpZENvbHVtbk9wdGlvbnM7XG4gIEBWaWV3Q2hpbGQoXCJlbGVtVG9nZ2xlXCIsIHsgc3RhdGljOiBmYWxzZSB9KSBlbGVtVG9nZ2xlOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiZWxlbVZhbHVlXCIsIHsgc3RhdGljOiBmYWxzZSB9KSBlbGVtVmFsdWU6IEVsZW1lbnRSZWY7XG4gIEBPdXRwdXQoKSBjaGFuZ2VPcGVyYXRvciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY2hhbmdlRW1wdHlPcGVyYXRvciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBcbiAgb3B0aW9ucyA9IG51bGw7XG4gIG11bHRpcGxlID0gZmFsc2U7XG4gIGlzUm93SFRNTDogYm9vbGVhbiA9IGZhbHNlO1xuICB2YWx1ZXM6IE1hRGF0YUdyaWRIZWFkRmlsdGVyW10gPSBbXTtcbiAgbGFiZWwgPSBkZWZhdXRfbGFiZWw7XG4gIHBvcHVwUG9zaXRpb246IGFueSA9IHtcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMFxuICB9XG4gIFxuICBcbiAgY29uc3RydWN0b3IoKSB7IFxuICAgIFxuICB9XG5cbiAgIGdldEZ1bmNDbGlja0RvY3VtZW50KCkge1xuICAgIGxldCBwID0gdGhpcztcbiAgICBsZXQgZmN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ0NMSUNLJyxmY3QpO1xuICAgICAgcC5lbGVtVG9nZ2xlLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2snLGZjdClcbiAgICB9XG4gICAgcmV0dXJuIGZjdFxuICB9XG5cbiAgdG9nZ2xlRGl2KCkge1xuICAgXG4gICAgdmFyIG9uQ2xpY2tEb2N1bWVudCA9IHRoaXMuZ2V0RnVuY0NsaWNrRG9jdW1lbnQoKVxuICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2snLG9uQ2xpY2tEb2N1bWVudCk7XG5cbiAgICBpZiAodGhpcy5lbGVtVG9nZ2xlLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PSAnbm9uZScpIHtcbiAgICAgIFxuICAgICAgdGhpcy5lbGVtVG9nZ2xlLm5hdGl2ZUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgdGhpcy5lbGVtVG9nZ2xlLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBsZXQgYW5jaG9yID0gdGhpcy5lbGVtVmFsdWUubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgdGhpcy5lbGVtVG9nZ2xlLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gKCQoYW5jaG9yKS5oZWlnaHQoKSskKGFuY2hvcikub2Zmc2V0KCkudG9wKSsncHgnO1xuICAgICAgdGhpcy5lbGVtVG9nZ2xlLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9ICQoYW5jaG9yKS5vZmZzZXQoKS5sZWZ0KydweCc7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsb25DbGlja0RvY3VtZW50KVxuICAgICAgfSw1MDApXG4gICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtVG9nZ2xlLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2snLG9uQ2xpY2tEb2N1bWVudClcbiAgICB9XG5cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIFxuICAgIHRoaXMuaXNSb3dIVE1MID0gdGhpcy5jb2wuaXNSb3dIVE1MO1xuICAgIGlmICh0aGlzLmNvbC5kYXRhVHlwZSA9PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc19oZWFkZXJfc3RyaW5nO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2wuZGF0YVR5cGUgPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLm11bHRpcGxlID0gdHJ1ZTtcbiAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNfaGVhZGVyX2Jvb2xlYW47XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbC5kYXRhVHlwZSA9PSAnbnVtYmVyJykge1xuICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc19oZWFkZXJfbnVtYmVyO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2wuZGF0YVR5cGUgPT0gJ2RhdGUnKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zX2hlYWRlcl9kYXRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2wuaGVhZEZpbHRlcikge1xuICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5jb2wuaGVhZEZpbHRlcjtcbiAgICAgIHRoaXMubXVsdGlwbGUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zID09IG51bGwpXG4gICAgICB0aHJvdyAoJ0JhZCBkZWZpbml0aW9uIHRvIG9wZXJhdG9yICcgKyB0aGlzLmNvbC5wcm9wKTtcbiAgICAvL2lmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLm9wdGlvbnMpIHtcbiAgICAgIHRoaXMub3B0aW9uc1tpXS5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICAgIC8vfVxuXG4gICAgLy92YXIgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKTtcbiAgICAvL3ZhciBpbnN0YW5jZXMgPSBNLkZvcm1TZWxlY3QuaW5pdChlbGVtcywge30pO1xuICAgIC8vY29uc29sZS5sb2coJ00nLGluc3RhbmNlcylcbiAgfVxuXG4gIGdldE9wZXJhdG9yKCkge1xuICAgIGlmICh0aGlzLm11bHRpcGxlID09PSBmYWxzZSkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2dldE9wZXJhdG9yICcgKyB0aGlzLmNvbC5wcm9wICsgJyB2YWx1ZSAnICsgdGhpcy52YWx1ZSwgdGhpcy5vcHRpb25zKVxuICAgICAgaWYgKHRoaXMudmFsdWUgPT0gJycpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbmQoKGQpID0+IGQudmFsdWUgPT09IHRoaXMudmFsdWUgJiYgZC5jaGVja2VkID09IHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNoYW5nZVZhbHVlcyhvcHQpIHtcbiAgICBpZiAob3B0LmNoZWNrZWQpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hlY2tlZFwiKTtcbiAgICAgIG9wdC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAvL3RoaXMudmFsdWVzLnNwbGljZSh0aGlzLnZhbHVlcy5maW5kKChhKSA9PiBhLnZhbHVlID09PSBvcHQudmFsdWUgJiYgYS5vcGVyYXRvciA9PT0gb3B0Lm9wZXJhdG9yKSwxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgLy90aGlzLnZhbHVlcy5wdXNoKG9wdCk7XG4gICAgfVxuICAgIHRoaXMudmFsdWVzLnNwbGljZSgwKTtcbiAgICBmb3IgKHZhciBpIGluIHRoaXMub3B0aW9ucykge1xuICAgICAgaWYgKHRoaXMub3B0aW9uc1tpXS5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMudmFsdWVzLnB1c2godGhpcy5vcHRpb25zW2ldKTtcbiAgICAgIH1cblxuICAgIH1cbiAgICB0aGlzLmxhYmVsID0gJygnICsgdGhpcy52YWx1ZXMubGVuZ3RoICsgJyknO1xuICAgIGlmICh0aGlzLnZhbHVlcy5sZW5ndGggPT0gMClcbiAgICAgIHRoaXMubGFiZWwgPSBkZWZhdXRfbGFiZWw7XG4gICAgLy90aGlzLnRvZ2dsZURpdigpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VWYWx1ZSBPUCcsIHRoaXMudmFsdWVzKTtcbiAgICB0aGlzLl9jaGFuZ2VPcGVyYXRvcigpO1xuICB9XG5cbiAgZ2V0Q29uZGl0aW9ucyhmaWx0ZXJfdmFsdWUpIHtcbiAgICBpZiAodGhpcy5tdWx0aXBsZSA9PSBmYWxzZSkge1xuICAgICAgbGV0IG8gPSB0aGlzLmdldE9wZXJhdG9yKCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZ2V0RmlsdGVyICcgKyB0aGlzLmNvbC5wcm9wICsgXCIgb1wiLCBvKVxuICAgICAgaWYgKG8gIT0gbnVsbCAmJiBvLm9wZXJhdG9yICE9ICcnKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IG8udmFsdWUucmVwbGFjZSgnJHsxfScsIGZpbHRlcl92YWx1ZSlcbiAgICAgICAgLy9pZiAodGhpcy5jb2wuZGF0YVR5cGUgPT0gJ251bWJlcicpIHtcbiAgICAgICAgLy8gIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICAgIC8vfVxuICAgICAgICByZXR1cm4gW3RoaXMuY29sLnByb3AsIG8ub3BlcmF0b3IsIHZhbHVlXVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy52YWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgY29uZGl0aW9ucyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHYgPSB0aGlzLnZhbHVlc1tpXS52YWx1ZTtcbiAgICAgICAgICAvL2lmICh0aGlzLmNvbC5kYXRhVHlwZSA9PSAnbnVtYmVyJykge1xuICAgICAgICAgIC8vICB2ID0gcGFyc2VGbG9hdCh2KTtcbiAgICAgICAgICAvL31cbiAgICAgICAgICBjb25kaXRpb25zLnB1c2goW3RoaXMuY29sLnByb3AsIHRoaXMudmFsdWVzW2ldLm9wZXJhdG9yLCB2XSk7XG4gICAgICAgICAgaWYgKHRoaXMudmFsdWVzLmxlbmd0aCAtIDEgPiBpKSB7XG4gICAgICAgICAgICBjb25kaXRpb25zLnB1c2goJ29yJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbmRpdGlvbnM7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY2hhbmdlVmFsdWUob3B0KSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJDaGFuZ2VWYWx1ZVwiLG9wdCk7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5maW5kKChkKSA9PiBkLmNoZWNrZWQgPT09IHRydWUpKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZmluZCgoZCkgPT4gZC5jaGVja2VkID09PSB0cnVlKS5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKG9wdC5jaGVja2VkKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImNoZWNrZWRcIik7XG4gICAgICBvcHQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgLy90aGlzLnZhbHVlcy5zcGxpY2UodGhpcy52YWx1ZXMuZmluZCgoYSkgPT4gYS52YWx1ZSA9PT0gb3B0LnZhbHVlICYmIGEub3BlcmF0b3IgPT09IG9wdC5vcGVyYXRvciksMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIC8vdGhpcy52YWx1ZXMucHVzaChvcHQpO1xuICAgIH1cbiAgICBpZiAob3B0LmxhYmVsLm1hdGNoKC9eXFxzKyQvKSkge1xuICAgICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgICAgdGhpcy5sYWJlbCA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gb3B0LnZhbHVlO1xuICAgICAgdGhpcy5sYWJlbCA9IG9wdC5sYWJlbDtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlVmFsdWUgT1AnLCB0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMudG9nZ2xlRGl2KCk7XG4gICAgdGhpcy5fY2hhbmdlT3BlcmF0b3IoKTtcbiAgICBpZiAob3B0Lm9wZXJhdG9yID09ICcnKSB7XG4gICAgICB0aGlzLmNoYW5nZUVtcHR5T3BlcmF0b3IuZW1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIF9jaGFuZ2VPcGVyYXRvcigpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnRU1JVCBPUCcsIHRoaXMub3B0aW9ucylcbiAgICB0aGlzLmNoYW5nZU9wZXJhdG9yLmVtaXQoe1xuICAgICAgcHJvcDogdGhpcy5jb2wsXG4gICAgICAvLyAgY29uZGl0aW9uOiBbIHRoaXMuY29sLnByb3AsIHRoaXMudmFsdWUgXVxuICAgIH0pO1xuICB9XG59XG4iXX0=