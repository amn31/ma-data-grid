import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as M from 'materialize-css';
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
DataGridPickerDateComponent.decorators = [
    { type: Component, args: [{
                selector: 'ma-data-grid-datepicker',
                template: "\n    <!-- [(ngModel)]=\"realValue\"   -->\n    <input \n        [id]=\"datepicker_id\" \n        #madatepicker type=\"text\" \n        [(ngModel)]=\"realValue\"\n        class=\"ma-data-grid-datepicker datepicker\">\n\n",
                styles: [""]
            },] }
];
DataGridPickerDateComponent.ctorParameters = () => [];
DataGridPickerDateComponent.propDecorators = {
    value: [{ type: Input }],
    type: [{ type: Input }],
    changePicker: [{ type: Output }],
    madatepicker: [{ type: ViewChild, args: ["madatepicker", { static: false },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLXBpY2tlci1kYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJDOi9NeVRlbXAvbmcxMGEvcHJvamVjdHMvbWEtZGF0YS1ncmlkL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGEtZ3JpZC1waWNrZXItZGF0ZS9kYXRhLWdyaWQtcGlja2VyLWRhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEksT0FBTyxLQUFLLENBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQU9yQyxNQUFNLE9BQU8sMkJBQTJCO0lBYXRDO1FBVkEsY0FBUyxHQUFTLElBQUksQ0FBQztRQUN2QixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDVCxVQUFLLEdBQVksRUFBRSxDQUFDO1FBRW5CLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVqRCxrQkFBYSxHQUFXLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFHckQsQ0FBQztJQUNqQixlQUFlO1FBQ2IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUNELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxRQUFRO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsUUFBUTtRQUNOLDZDQUE2QztRQUM3QyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO1NBQ3RCO0lBQ0gsQ0FBQztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FB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O1FBRUQsOEJBQThCO1FBQzlCLG9DQUFvQztRQUNwQyxnQ0FBZ0M7SUFDbEMsQ0FBQztJQUVELFFBQVE7UUFDTiw2Q0FBNkM7UUFDN0MsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sRUFBRTtZQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7OztZQS9IRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsd09BQXFEOzthQUV0RDs7OztvQkFPRSxLQUFLO21CQUNMLEtBQUs7MkJBQ0wsTUFBTTsyQkFHTixTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBNIGZyb20gJ21hdGVyaWFsaXplLWNzcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hLWRhdGEtZ3JpZC1kYXRlcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtZ3JpZC1waWNrZXItZGF0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RhdGEtZ3JpZC1waWNrZXItZGF0ZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0YUdyaWRQaWNrZXJEYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuXG4gIGluc3RhbmNlOiBhbnk7XG4gIGRhdGV2YWx1ZTogRGF0ZSA9IG51bGw7XG4gIHJlYWxWYWx1ZTogc3RyaW5nID0gXCJcIjtcbiAgdGltZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHZhbHVlIDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHR5cGU6ICdkYXRlJyB8ICd0aW1lJztcbiAgQE91dHB1dCgpIGNoYW5nZVBpY2tlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGRhdGVwaWNrZXJfaWQ6IHN0cmluZyA9IFwiZHBfXCIgKyBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTAwMDAwKSk7XG4gIEBWaWV3Q2hpbGQoXCJtYWRhdGVwaWNrZXJcIiwgeyBzdGF0aWM6IGZhbHNlIH0pIG1hZGF0ZXBpY2tlcjogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5pdCgpO1xuICB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluc3RhbmNlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5kZXN0cm95KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBjb25zb2xlLmxvZygnbmdPbkluaXQgdGhpcy5tYWRhdGVwaWNrZXInKTtcbiAgICBpZiAodGhpcy52YWx1ZSA9PSAnJykge1xuICAgICAgdGhpcy5kYXRldmFsdWUgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgZ2V0RGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRldmFsdWU7XG4gIH1cblxuICBzZXREYXRlKGRhdGUpIHtcbiAgICBcbiAgICBpZiAoZGF0ZSAhPSBudWxsKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KClcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSAtIChvZmZzZXQqNjAqMTAwMCkpXG4gICAgfVxuICAgIHZhciBlbGVtID0gPEhUTUxJbnB1dEVsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZGF0ZXBpY2tlcl9pZCk7XG4gICAgaWYgKGRhdGUgPT0gbnVsbCkge1xuICAgICAgZWxlbS52YWx1ZSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtLnZhbHVlID0gZGF0ZS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1QuKy8sJycpXG4gICAgfVxuICAgIHRoaXMuZGF0ZXZhbHVlID0gZGF0ZTtcbiAgICAvLyBjb25zb2xlLmxvZyhcInNldERhdGUgVkFMVUVcIiwgdGhpcy5kYXRldmFsdWUpO1xuICB9XG5cbiAgZ2V0VGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aW1lXG4gIH1cblxuICBzZXRUaW1lKGhvdXIsIG1pbikge1xuICAgIGlmIChob3VyIDwgMTApIHtcbiAgICAgIGhvdXIgPSAnMCcgKyBob3VyXG4gICAgfVxuICAgIGlmIChtaW4gPCAxMCkge1xuICAgICAgbWluID0gJzAnICsgbWluXG4gICAgfVxuICAgIHRoaXMudGltZSA9IGhvdXIgKyAnOicgKyBtaW47XG4gICAgLy8gY29uc29sZS5sb2coXCJWQUxVRVwiLCB0aGlzLnRpbWUpO1xuICB9XG5cbiAgX2luaXQoKTogdm9pZCB7XG4gICAgLy92YXIgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWEtZGF0YS1ncmlkLWRhdGVwaWNrZXInKTtcbiAgICB2YXIgZWxlbSA9IDxIVE1MSW5wdXRFbGVtZW50PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRhdGVwaWNrZXJfaWQpO1xuICAgIHZhciBwdHIgPSB0aGlzO1xuICAgIFxuICAgIGlmICh0aGlzLnR5cGUgPT0gJ2RhdGUnKSB7XG4gICAgICB2YXIgaW5zdGFuY2VzID0gTS5EYXRlcGlja2VyLmluaXQoZWxlbSwge1xuICAgICAgICBhdXRvQ2xvc2U6IHRydWUsXG4gICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQnLFxuICAgICAgICBvblNlbGVjdDogZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICBwdHIuc2V0RGF0ZShkKTtcbiAgICAgICAgfVxuICAgICAgICAvL21pbkRhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgIC8vbWF4RGF0ZTogbmV3IERhdGUoKSxcbiAgICAgIH0pO1xuICAgICAgZWxlbS5vbmNoYW5nZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRVZFTlRcIiwgZWxlbS52YWx1ZSk7XG4gICAgICAgIGlmIChlbGVtLnZhbHVlID09ICcnIHx8ICFlbGVtLnZhbHVlLm1hdGNoKC9eXFxkXFxkXFxkXFxkLVxcZFxcZC1cXGRcXGQkLykpIHtcbiAgICAgICAgICBlbGVtLnZhbHVlID0gJydcbiAgICAgICAgICBwdHIuc2V0RGF0ZShudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBwdHIuZW1pdERhdGVFdmVudCgpO1xuXG4gICAgICB9O1xuICAgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBpbnN0YW5jZXMgPSBNLlRpbWVwaWNrZXIuaW5pdChlbGVtLCB7XG4gICAgICAgIGF1dG9DbG9zZTogdHJ1ZSxcbiAgICAgICAgLy9mb3JtYXQ6ICd5eXl5LW1tLWRkJyxcbiAgICAgICAgdHdlbHZlSG91cjogZmFsc2UsXG4gICAgICAgIG9uU2VsZWN0OiBmdW5jdGlvbiAoZCwgaCwgbSkge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJHXCIsZCxoLG0pXG4gICAgICAgICAgcHRyLnNldFRpbWUoZCwgaCk7XG4gICAgICAgICAgcHRyLmVtaXRUaW1lRXZlbnQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy90aGlzLmluc3RhbmNlPSBpbnN0YW5jZXNbMF07XG4gICAgLy90aGlzLmluc3RhbmNlLnNldERhdGUobmV3IERhdGUoKSk7XG4gICAgLy9pbnN0YW5jZS5nb3RvRGF0ZShuZXcgRGF0ZSgpKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwicmVhbFZhbHVlXCIgKyB0aGlzLnJlYWxWYWx1ZSk7XG4gICAgaWYgKHRoaXMudHlwZSA9PSAnZGF0ZScpIHtcbiAgICAgIHRoaXMuY2hhbmdlUGlja2VyLmVtaXQodGhpcy5kYXRldmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoYW5nZVBpY2tlci5lbWl0KHRoaXMudGltZSk7XG4gICAgfVxuICB9XG5cbiAgZW1pdERhdGVFdmVudCgpIHtcbiAgICB0aGlzLmNoYW5nZVBpY2tlci5lbWl0KHRoaXMuZGF0ZXZhbHVlKTtcbiAgfVxuXG4gIGVtaXRUaW1lRXZlbnQoKSB7XG4gICAgdGhpcy5jaGFuZ2VQaWNrZXIuZW1pdCh0aGlzLnRpbWUpO1xuICB9XG5cbn1cbiJdfQ==