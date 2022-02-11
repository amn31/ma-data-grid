import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, Input, Output, ViewChild } from '@angular/core';
import * as M from 'materialize-css';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = ["madatepicker"];
export class DataGridPickerDateComponent {
    constructor(document) {
        this.document = document;
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
        var elem = this.document.getElementById(this.datepicker_id);
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
        var elem = this.document.getElementById(this.datepicker_id);
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
DataGridPickerDateComponent.ɵfac = function DataGridPickerDateComponent_Factory(t) { return new (t || DataGridPickerDateComponent)(i0.ɵɵdirectiveInject(DOCUMENT)); };
DataGridPickerDateComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataGridPickerDateComponent, selectors: [["ma-data-grid-datepicker"]], viewQuery: function DataGridPickerDateComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.madatepicker = _t.first);
    } }, inputs: { value: "value", type: "type" }, outputs: { changePicker: "changePicker" }, decls: 2, vars: 2, consts: [["type", "text", 1, "ma-data-grid-datepicker", "datepicker", 3, "id", "ngModel", "ngModelChange"], ["madatepicker", ""]], template: function DataGridPickerDateComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "input", 0, 1);
        i0.ɵɵlistener("ngModelChange", function DataGridPickerDateComponent_Template_input_ngModelChange_0_listener($event) { return ctx.realValue = $event; });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("id", ctx.datepicker_id)("ngModel", ctx.realValue);
    } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataGridPickerDateComponent, [{
        type: Component,
        args: [{ selector: 'ma-data-grid-datepicker', template: "\n    <!-- [(ngModel)]=\"realValue\"   -->\n    <input \n        [id]=\"datepicker_id\" \n        #madatepicker type=\"text\" \n        [(ngModel)]=\"realValue\"\n        class=\"ma-data-grid-datepicker datepicker\">\n\n", styles: [""] }]
    }], function () { return [{ type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { value: [{
            type: Input
        }], type: [{
            type: Input
        }], changePicker: [{
            type: Output
        }], madatepicker: [{
            type: ViewChild,
            args: ["madatepicker", { static: false }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLXBpY2tlci1kYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hLWRhdGEtZ3JpZC9zcmMvbGliL2NvbXBvbmVudHMvZGF0YS1ncmlkLXBpY2tlci1kYXRlL2RhdGEtZ3JpZC1waWNrZXItZGF0ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYS1kYXRhLWdyaWQvc3JjL2xpYi9jb21wb25lbnRzL2RhdGEtZ3JpZC1waWNrZXItZGF0ZS9kYXRhLWdyaWQtcGlja2VyLWRhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBaUIsU0FBUyxFQUFjLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hJLE9BQU8sS0FBSyxDQUFDLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFPckMsTUFBTSxPQUFPLDJCQUEyQjtJQWF0QyxZQUFzQyxRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBVnhELGNBQVMsR0FBUyxJQUFJLENBQUM7UUFDdkIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ1QsVUFBSyxHQUFZLEVBQUUsQ0FBQztRQUVuQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFakQsa0JBQWEsR0FBVyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBR1QsQ0FBQztJQUM3RCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUNELFdBQVc7UUFD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QU07WUFHdUMsWUFBWTtrQkFBekQsU0FBUzttQkFBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgTSBmcm9tICdtYXRlcmlhbGl6ZS1jc3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYS1kYXRhLWdyaWQtZGF0ZXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLWdyaWQtcGlja2VyLWRhdGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXRhLWdyaWQtcGlja2VyLWRhdGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGFHcmlkUGlja2VyRGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcblxuICBpbnN0YW5jZTogYW55O1xuICBkYXRldmFsdWU6IERhdGUgPSBudWxsO1xuICByZWFsVmFsdWU6IHN0cmluZyA9IFwiXCI7XG4gIHRpbWU6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSB2YWx1ZSA6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSB0eXBlOiAnZGF0ZScgfCAndGltZSc7XG4gIEBPdXRwdXQoKSBjaGFuZ2VQaWNrZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBkYXRlcGlja2VyX2lkOiBzdHJpbmcgPSBcImRwX1wiICsgTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCkpO1xuICBAVmlld0NoaWxkKFwibWFkYXRlcGlja2VyXCIsIHsgc3RhdGljOiBmYWxzZSB9KSBtYWRhdGVwaWNrZXI6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnQpIHsgfVxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5pdCgpO1xuICB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluc3RhbmNlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5kZXN0cm95KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBjb25zb2xlLmxvZygnbmdPbkluaXQgdGhpcy5tYWRhdGVwaWNrZXInKTtcbiAgICBpZiAodGhpcy52YWx1ZSA9PSAnJykge1xuICAgICAgdGhpcy5kYXRldmFsdWUgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgZ2V0RGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRldmFsdWU7XG4gIH1cblxuICBzZXREYXRlKGRhdGUpIHtcbiAgICBcbiAgICBpZiAoZGF0ZSAhPSBudWxsKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KClcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSAtIChvZmZzZXQqNjAqMTAwMCkpXG4gICAgfVxuICAgIHZhciBlbGVtID0gPEhUTUxJbnB1dEVsZW1lbnQ+IHRoaXMuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kYXRlcGlja2VyX2lkKTtcbiAgICBpZiAoZGF0ZSA9PSBudWxsKSB7XG4gICAgICBlbGVtLnZhbHVlID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0udmFsdWUgPSBkYXRlLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvVC4rLywnJylcbiAgICB9XG4gICAgdGhpcy5kYXRldmFsdWUgPSBkYXRlO1xuICAgIC8vIGNvbnNvbGUubG9nKFwic2V0RGF0ZSBWQUxVRVwiLCB0aGlzLmRhdGV2YWx1ZSk7XG4gIH1cblxuICBnZXRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLnRpbWVcbiAgfVxuXG4gIHNldFRpbWUoaG91ciwgbWluKSB7XG4gICAgaWYgKGhvdXIgPCAxMCkge1xuICAgICAgaG91ciA9ICcwJyArIGhvdXJcbiAgICB9XG4gICAgaWYgKG1pbiA8IDEwKSB7XG4gICAgICBtaW4gPSAnMCcgKyBtaW5cbiAgICB9XG4gICAgdGhpcy50aW1lID0gaG91ciArICc6JyArIG1pbjtcbiAgICAvLyBjb25zb2xlLmxvZyhcIlZBTFVFXCIsIHRoaXMudGltZSk7XG4gIH1cblxuICBfaW5pdCgpOiB2b2lkIHtcbiAgICAvL3ZhciBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYS1kYXRhLWdyaWQtZGF0ZXBpY2tlcicpO1xuICAgIHZhciBlbGVtID0gPEhUTUxJbnB1dEVsZW1lbnQ+IHRoaXMuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kYXRlcGlja2VyX2lkKTtcbiAgICB2YXIgcHRyID0gdGhpcztcbiAgICBcbiAgICBpZiAodGhpcy50eXBlID09ICdkYXRlJykge1xuICAgICAgdmFyIGluc3RhbmNlcyA9IE0uRGF0ZXBpY2tlci5pbml0KGVsZW0sIHtcbiAgICAgICAgYXV0b0Nsb3NlOiB0cnVlLFxuICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkJyxcbiAgICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcHRyLnNldERhdGUoZCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9taW5EYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgICAvL21heERhdGU6IG5ldyBEYXRlKCksXG4gICAgICB9KTtcbiAgICAgIGVsZW0ub25jaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkVWRU5UXCIsIGVsZW0udmFsdWUpO1xuICAgICAgICBpZiAoZWxlbS52YWx1ZSA9PSAnJyB8fCAhZWxlbS52YWx1ZS5tYXRjaCgvXlxcZFxcZFxcZFxcZC1cXGRcXGQtXFxkXFxkJC8pKSB7XG4gICAgICAgICAgZWxlbS52YWx1ZSA9ICcnXG4gICAgICAgICAgcHRyLnNldERhdGUobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcHRyLmVtaXREYXRlRXZlbnQoKTtcblxuICAgICAgfTtcbiAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaW5zdGFuY2VzID0gTS5UaW1lcGlja2VyLmluaXQoZWxlbSwge1xuICAgICAgICBhdXRvQ2xvc2U6IHRydWUsXG4gICAgICAgIC8vZm9ybWF0OiAneXl5eS1tbS1kZCcsXG4gICAgICAgIHR3ZWx2ZUhvdXI6IGZhbHNlLFxuICAgICAgICBvblNlbGVjdDogZnVuY3Rpb24gKGQsIGgsIG0pIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiR1wiLGQsaCxtKVxuICAgICAgICAgIHB0ci5zZXRUaW1lKGQsIGgpO1xuICAgICAgICAgIHB0ci5lbWl0VGltZUV2ZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vdGhpcy5pbnN0YW5jZT0gaW5zdGFuY2VzWzBdO1xuICAgIC8vdGhpcy5pbnN0YW5jZS5zZXREYXRlKG5ldyBEYXRlKCkpO1xuICAgIC8vaW5zdGFuY2UuZ290b0RhdGUobmV3IERhdGUoKSk7XG4gIH1cblxuICBvbkNoYW5nZSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcInJlYWxWYWx1ZVwiICsgdGhpcy5yZWFsVmFsdWUpO1xuICAgIGlmICh0aGlzLnR5cGUgPT0gJ2RhdGUnKSB7XG4gICAgICB0aGlzLmNoYW5nZVBpY2tlci5lbWl0KHRoaXMuZGF0ZXZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFuZ2VQaWNrZXIuZW1pdCh0aGlzLnRpbWUpO1xuICAgIH1cbiAgfVxuXG4gIGVtaXREYXRlRXZlbnQoKSB7XG4gICAgdGhpcy5jaGFuZ2VQaWNrZXIuZW1pdCh0aGlzLmRhdGV2YWx1ZSk7XG4gIH1cblxuICBlbWl0VGltZUV2ZW50KCkge1xuICAgIHRoaXMuY2hhbmdlUGlja2VyLmVtaXQodGhpcy50aW1lKTtcbiAgfVxuXG59XG4iLCJcbiAgICA8IS0tIFsobmdNb2RlbCldPVwicmVhbFZhbHVlXCIgICAtLT5cbiAgICA8aW5wdXQgXG4gICAgICAgIFtpZF09XCJkYXRlcGlja2VyX2lkXCIgXG4gICAgICAgICNtYWRhdGVwaWNrZXIgdHlwZT1cInRleHRcIiBcbiAgICAgICAgWyhuZ01vZGVsKV09XCJyZWFsVmFsdWVcIlxuICAgICAgICBjbGFzcz1cIm1hLWRhdGEtZ3JpZC1kYXRlcGlja2VyIGRhdGVwaWNrZXJcIj5cblxuIl19