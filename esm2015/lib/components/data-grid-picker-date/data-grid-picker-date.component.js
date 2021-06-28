import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as M from 'materialize-css';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = ["madatepicker"];
export class DataGridPickerDateComponent {
    constructor() {
        this.datevalue = null;
        this.realValue = "";
        this.time = '';
        this.value = '';
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
    }
    getDate() {
        return this.datevalue;
    }
    setDate(date) {
        if (date != null) {
            const offset = new Date().getTimezoneOffset();
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
    }
    onChange() {
        // console.log("realValue" + this.realValue);
        if (this.type == 'date') {
            this.changePicker.emit(this.datevalue);
        }
        else {
            this.changePicker.emit(this.time);
        }
    }
    emitDateEvent() {
        this.changePicker.emit(this.datevalue);
    }
    emitTimeEvent() {
        this.changePicker.emit(this.time);
    }
}
DataGridPickerDateComponent.ɵfac = function DataGridPickerDateComponent_Factory(t) { return new (t || DataGridPickerDateComponent)(); };
DataGridPickerDateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DataGridPickerDateComponent, selectors: [["ma-data-grid-datepicker"]], viewQuery: function DataGridPickerDateComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.madatepicker = _t.first);
    } }, inputs: { value: "value", type: "type" }, outputs: { changePicker: "changePicker" }, decls: 2, vars: 2, consts: [["type", "text", 1, "ma-data-grid-datepicker", "datepicker", 3, "id", "ngModel", "ngModelChange"], ["madatepicker", ""]], template: function DataGridPickerDateComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "input", 0, 1);
        i0.ɵɵlistener("ngModelChange", function DataGridPickerDateComponent_Template_input_ngModelChange_0_listener($event) { return ctx.realValue = $event; });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("id", ctx.datepicker_id)("ngModel", ctx.realValue);
    } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DataGridPickerDateComponent, [{
        type: Component,
        args: [{
                selector: 'ma-data-grid-datepicker',
                templateUrl: './data-grid-picker-date.component.html',
                styleUrls: ['./data-grid-picker-date.component.css']
            }]
    }], function () { return []; }, { value: [{
            type: Input
        }], type: [{
            type: Input
        }], changePicker: [{
            type: Output
        }], madatepicker: [{
            type: ViewChild,
            args: ["madatepicker", { static: false }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLXBpY2tlci1kYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJEOi9NeUhvbWUvYW5kcm9pZC93b3Jrc3BhY2UvZ2l0L21hLW5nLWRhdGFncmlkL3Byb2plY3RzL21hLWRhdGEtZ3JpZC9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kYXRhLWdyaWQtcGlja2VyLWRhdGUvZGF0YS1ncmlkLXBpY2tlci1kYXRlLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2RhdGEtZ3JpZC1waWNrZXItZGF0ZS9kYXRhLWdyaWQtcGlja2VyLWRhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoSSxPQUFPLEtBQUssQ0FBQyxNQUFNLGlCQUFpQixDQUFDOzs7O0FBT3JDLE1BQU0sT0FBTywyQkFBMkI7SUFhdEM7UUFWQSxjQUFTLEdBQVMsSUFBSSxDQUFDO1FBQ3ZCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNULFVBQUssR0FBWSxFQUFFLENBQUM7UUFFbkIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRWpELGtCQUFhLEdBQVcsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUdyRCxDQUFDO0lBQ2pCLGVBQWU7UUFDYixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBQ0QsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFFBQVE7WUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxRQUFRO1FBQ04sNkNBQTZDO1FBQzdDLElBQUks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ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIE0gZnJvbSAnbWF0ZXJpYWxpemUtY3NzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWEtZGF0YS1ncmlkLWRhdGVwaWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS1ncmlkLXBpY2tlci1kYXRlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS1ncmlkLXBpY2tlci1kYXRlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhR3JpZFBpY2tlckRhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgaW5zdGFuY2U6IGFueTtcbiAgZGF0ZXZhbHVlOiBEYXRlID0gbnVsbDtcbiAgcmVhbFZhbHVlOiBzdHJpbmcgPSBcIlwiO1xuICB0aW1lOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgdmFsdWUgOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgdHlwZTogJ2RhdGUnIHwgJ3RpbWUnO1xuICBAT3V0cHV0KCkgY2hhbmdlUGlja2VyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgZGF0ZXBpY2tlcl9pZDogc3RyaW5nID0gXCJkcF9cIiArIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApKTtcbiAgQFZpZXdDaGlsZChcIm1hZGF0ZXBpY2tlclwiLCB7IHN0YXRpYzogZmFsc2UgfSkgbWFkYXRlcGlja2VyOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbml0KCk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpXG4gICAgICB0aGlzLmluc3RhbmNlLmRlc3Ryb3koKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIGNvbnNvbGUubG9nKCduZ09uSW5pdCB0aGlzLm1hZGF0ZXBpY2tlcicpO1xuICAgIGlmICh0aGlzLnZhbHVlID09ICcnKSB7XG4gICAgICB0aGlzLmRhdGV2YWx1ZSA9IG51bGxcbiAgICB9XG4gIH1cblxuICBnZXREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGV2YWx1ZTtcbiAgfVxuXG4gIHNldERhdGUoZGF0ZSkge1xuICAgIFxuICAgIGlmIChkYXRlICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKVxuICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpIC0gKG9mZnNldCo2MCoxMDAwKSlcbiAgICB9XG4gICAgdmFyIGVsZW0gPSA8SFRNTElucHV0RWxlbWVudD4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kYXRlcGlja2VyX2lkKTtcbiAgICBpZiAoZGF0ZSA9PSBudWxsKSB7XG4gICAgICBlbGVtLnZhbHVlID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0udmFsdWUgPSBkYXRlLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvVC4rLywnJylcbiAgICB9XG4gICAgdGhpcy5kYXRldmFsdWUgPSBkYXRlO1xuICAgIC8vIGNvbnNvbGUubG9nKFwic2V0RGF0ZSBWQUxVRVwiLCB0aGlzLmRhdGV2YWx1ZSk7XG4gIH1cblxuICBnZXRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLnRpbWVcbiAgfVxuXG4gIHNldFRpbWUoaG91ciwgbWluKSB7XG4gICAgaWYgKGhvdXIgPCAxMCkge1xuICAgICAgaG91ciA9ICcwJyArIGhvdXJcbiAgICB9XG4gICAgaWYgKG1pbiA8IDEwKSB7XG4gICAgICBtaW4gPSAnMCcgKyBtaW5cbiAgICB9XG4gICAgdGhpcy50aW1lID0gaG91ciArICc6JyArIG1pbjtcbiAgICAvLyBjb25zb2xlLmxvZyhcIlZBTFVFXCIsIHRoaXMudGltZSk7XG4gIH1cblxuICBfaW5pdCgpOiB2b2lkIHtcbiAgICAvL3ZhciBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYS1kYXRhLWdyaWQtZGF0ZXBpY2tlcicpO1xuICAgIHZhciBlbGVtID0gPEhUTUxJbnB1dEVsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZGF0ZXBpY2tlcl9pZCk7XG4gICAgdmFyIHB0ciA9IHRoaXM7XG4gICAgXG4gICAgaWYgKHRoaXMudHlwZSA9PSAnZGF0ZScpIHtcbiAgICAgIHZhciBpbnN0YW5jZXMgPSBNLkRhdGVwaWNrZXIuaW5pdChlbGVtLCB7XG4gICAgICAgIGF1dG9DbG9zZTogdHJ1ZSxcbiAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCcsXG4gICAgICAgIG9uU2VsZWN0OiBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHB0ci5zZXREYXRlKGQpO1xuICAgICAgICB9XG4gICAgICAgIC8vbWluRGF0ZTogbmV3IERhdGUoKSxcbiAgICAgICAgLy9tYXhEYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgfSk7XG4gICAgICBlbGVtLm9uY2hhbmdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJFVkVOVFwiLCBlbGVtLnZhbHVlKTtcbiAgICAgICAgaWYgKGVsZW0udmFsdWUgPT0gJycgfHwgIWVsZW0udmFsdWUubWF0Y2goL15cXGRcXGRcXGRcXGQtXFxkXFxkLVxcZFxcZCQvKSkge1xuICAgICAgICAgIGVsZW0udmFsdWUgPSAnJ1xuICAgICAgICAgIHB0ci5zZXREYXRlKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHB0ci5lbWl0RGF0ZUV2ZW50KCk7XG5cbiAgICAgIH07XG4gICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGluc3RhbmNlcyA9IE0uVGltZXBpY2tlci5pbml0KGVsZW0sIHtcbiAgICAgICAgYXV0b0Nsb3NlOiB0cnVlLFxuICAgICAgICAvL2Zvcm1hdDogJ3l5eXktbW0tZGQnLFxuICAgICAgICB0d2VsdmVIb3VyOiBmYWxzZSxcbiAgICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uIChkLCBoLCBtKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkdcIixkLGgsbSlcbiAgICAgICAgICBwdHIuc2V0VGltZShkLCBoKTtcbiAgICAgICAgICBwdHIuZW1pdFRpbWVFdmVudCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvL3RoaXMuaW5zdGFuY2U9IGluc3RhbmNlc1swXTtcbiAgICAvL3RoaXMuaW5zdGFuY2Uuc2V0RGF0ZShuZXcgRGF0ZSgpKTtcbiAgICAvL2luc3RhbmNlLmdvdG9EYXRlKG5ldyBEYXRlKCkpO1xuICB9XG5cbiAgb25DaGFuZ2UoKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJyZWFsVmFsdWVcIiArIHRoaXMucmVhbFZhbHVlKTtcbiAgICBpZiAodGhpcy50eXBlID09ICdkYXRlJykge1xuICAgICAgdGhpcy5jaGFuZ2VQaWNrZXIuZW1pdCh0aGlzLmRhdGV2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hhbmdlUGlja2VyLmVtaXQodGhpcy50aW1lKTtcbiAgICB9XG4gIH1cblxuICBlbWl0RGF0ZUV2ZW50KCkge1xuICAgIHRoaXMuY2hhbmdlUGlja2VyLmVtaXQodGhpcy5kYXRldmFsdWUpO1xuICB9XG5cbiAgZW1pdFRpbWVFdmVudCgpIHtcbiAgICB0aGlzLmNoYW5nZVBpY2tlci5lbWl0KHRoaXMudGltZSk7XG4gIH1cblxufVxuIiwiXG4gICAgPCEtLSBbKG5nTW9kZWwpXT1cInJlYWxWYWx1ZVwiICAgLS0+XG4gICAgPGlucHV0IFxuICAgICAgICBbaWRdPVwiZGF0ZXBpY2tlcl9pZFwiIFxuICAgICAgICAjbWFkYXRlcGlja2VyIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgIFsobmdNb2RlbCldPVwicmVhbFZhbHVlXCJcbiAgICAgICAgY2xhc3M9XCJtYS1kYXRhLWdyaWQtZGF0ZXBpY2tlciBkYXRlcGlja2VyXCI+XG5cbiJdfQ==