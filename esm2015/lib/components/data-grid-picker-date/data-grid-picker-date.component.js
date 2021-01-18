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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLXBpY2tlci1kYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJEOi9NeUhvbWUvYW5kcm9pZC93b3Jrc3BhY2UvZ2l0L21hLW5nLWRhdGFncmlkL3Byb2plY3RzL21hLWRhdGEtZ3JpZC9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kYXRhLWdyaWQtcGlja2VyLWRhdGUvZGF0YS1ncmlkLXBpY2tlci1kYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hJLE9BQU8sS0FBSyxDQUFDLE1BQU0saUJBQWlCLENBQUM7QUFPckMsTUFBTSxPQUFPLDJCQUEyQjtJQWF0QztRQVZBLGNBQVMsR0FBUyxJQUFJLENBQUM7UUFDdkIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ1QsVUFBSyxHQUFZLEVBQUUsQ0FBQztRQUVuQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFakQsa0JBQWEsR0FBVyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBR3JELENBQUM7SUFDakIsZUFBZTtRQUNiLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFDRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELFFBQVE7UUFDTiw2Q0FBNkM7UUFDN0MsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRTtZQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTtTQUN0QjtJQUNILENB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Z0JBQ3RCLENBQUM7YUFDRixDQUFDLENBQUM7U0FDSjtRQUVELDhCQUE4QjtRQUM5QixvQ0FBb0M7UUFDcEMsZ0NBQWdDO0lBQ2xDLENBQUM7SUFFRCxRQUFRO1FBQ04sNkNBQTZDO1FBQzdDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3hDO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkM7SUFDSCxDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7WUEvSEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLHdPQUFxRDs7YUFFdEQ7Ozs7b0JBT0UsS0FBSzttQkFDTCxLQUFLOzJCQUNMLE1BQU07MkJBR04sU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgTSBmcm9tICdtYXRlcmlhbGl6ZS1jc3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYS1kYXRhLWdyaWQtZGF0ZXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLWdyaWQtcGlja2VyLWRhdGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXRhLWdyaWQtcGlja2VyLWRhdGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGFHcmlkUGlja2VyRGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcblxuICBpbnN0YW5jZTogYW55O1xuICBkYXRldmFsdWU6IERhdGUgPSBudWxsO1xuICByZWFsVmFsdWU6IHN0cmluZyA9IFwiXCI7XG4gIHRpbWU6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSB2YWx1ZSA6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSB0eXBlOiAnZGF0ZScgfCAndGltZSc7XG4gIEBPdXRwdXQoKSBjaGFuZ2VQaWNrZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBkYXRlcGlja2VyX2lkOiBzdHJpbmcgPSBcImRwX1wiICsgTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCkpO1xuICBAVmlld0NoaWxkKFwibWFkYXRlcGlja2VyXCIsIHsgc3RhdGljOiBmYWxzZSB9KSBtYWRhdGVwaWNrZXI6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2luaXQoKTtcbiAgfVxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSlcbiAgICAgIHRoaXMuaW5zdGFuY2UuZGVzdHJveSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gY29uc29sZS5sb2coJ25nT25Jbml0IHRoaXMubWFkYXRlcGlja2VyJyk7XG4gICAgaWYgKHRoaXMudmFsdWUgPT0gJycpIHtcbiAgICAgIHRoaXMuZGF0ZXZhbHVlID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIGdldERhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZXZhbHVlO1xuICB9XG5cbiAgc2V0RGF0ZShkYXRlKSB7XG4gICAgXG4gICAgaWYgKGRhdGUgIT0gbnVsbCkge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpXG4gICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgLSAob2Zmc2V0KjYwKjEwMDApKVxuICAgIH1cbiAgICB2YXIgZWxlbSA9IDxIVE1MSW5wdXRFbGVtZW50PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRhdGVwaWNrZXJfaWQpO1xuICAgIGlmIChkYXRlID09IG51bGwpIHtcbiAgICAgIGVsZW0udmFsdWUgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbS52YWx1ZSA9IGRhdGUudG9JU09TdHJpbmcoKS5yZXBsYWNlKC9ULisvLCcnKVxuICAgIH1cbiAgICB0aGlzLmRhdGV2YWx1ZSA9IGRhdGU7XG4gICAgLy8gY29uc29sZS5sb2coXCJzZXREYXRlIFZBTFVFXCIsIHRoaXMuZGF0ZXZhbHVlKTtcbiAgfVxuXG4gIGdldFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGltZVxuICB9XG5cbiAgc2V0VGltZShob3VyLCBtaW4pIHtcbiAgICBpZiAoaG91ciA8IDEwKSB7XG4gICAgICBob3VyID0gJzAnICsgaG91clxuICAgIH1cbiAgICBpZiAobWluIDwgMTApIHtcbiAgICAgIG1pbiA9ICcwJyArIG1pblxuICAgIH1cbiAgICB0aGlzLnRpbWUgPSBob3VyICsgJzonICsgbWluO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiVkFMVUVcIiwgdGhpcy50aW1lKTtcbiAgfVxuXG4gIF9pbml0KCk6IHZvaWQge1xuICAgIC8vdmFyIGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1hLWRhdGEtZ3JpZC1kYXRlcGlja2VyJyk7XG4gICAgdmFyIGVsZW0gPSA8SFRNTElucHV0RWxlbWVudD4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kYXRlcGlja2VyX2lkKTtcbiAgICB2YXIgcHRyID0gdGhpcztcbiAgICBcbiAgICBpZiAodGhpcy50eXBlID09ICdkYXRlJykge1xuICAgICAgdmFyIGluc3RhbmNlcyA9IE0uRGF0ZXBpY2tlci5pbml0KGVsZW0sIHtcbiAgICAgICAgYXV0b0Nsb3NlOiB0cnVlLFxuICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkJyxcbiAgICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcHRyLnNldERhdGUoZCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9taW5EYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgICAvL21heERhdGU6IG5ldyBEYXRlKCksXG4gICAgICB9KTtcbiAgICAgIGVsZW0ub25jaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkVWRU5UXCIsIGVsZW0udmFsdWUpO1xuICAgICAgICBpZiAoZWxlbS52YWx1ZSA9PSAnJyB8fCAhZWxlbS52YWx1ZS5tYXRjaCgvXlxcZFxcZFxcZFxcZC1cXGRcXGQtXFxkXFxkJC8pKSB7XG4gICAgICAgICAgZWxlbS52YWx1ZSA9ICcnXG4gICAgICAgICAgcHRyLnNldERhdGUobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcHRyLmVtaXREYXRlRXZlbnQoKTtcblxuICAgICAgfTtcbiAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaW5zdGFuY2VzID0gTS5UaW1lcGlja2VyLmluaXQoZWxlbSwge1xuICAgICAgICBhdXRvQ2xvc2U6IHRydWUsXG4gICAgICAgIC8vZm9ybWF0OiAneXl5eS1tbS1kZCcsXG4gICAgICAgIHR3ZWx2ZUhvdXI6IGZhbHNlLFxuICAgICAgICBvblNlbGVjdDogZnVuY3Rpb24gKGQsIGgsIG0pIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiR1wiLGQsaCxtKVxuICAgICAgICAgIHB0ci5zZXRUaW1lKGQsIGgpO1xuICAgICAgICAgIHB0ci5lbWl0VGltZUV2ZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vdGhpcy5pbnN0YW5jZT0gaW5zdGFuY2VzWzBdO1xuICAgIC8vdGhpcy5pbnN0YW5jZS5zZXREYXRlKG5ldyBEYXRlKCkpO1xuICAgIC8vaW5zdGFuY2UuZ290b0RhdGUobmV3IERhdGUoKSk7XG4gIH1cblxuICBvbkNoYW5nZSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcInJlYWxWYWx1ZVwiICsgdGhpcy5yZWFsVmFsdWUpO1xuICAgIGlmICh0aGlzLnR5cGUgPT0gJ2RhdGUnKSB7XG4gICAgICB0aGlzLmNoYW5nZVBpY2tlci5lbWl0KHRoaXMuZGF0ZXZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFuZ2VQaWNrZXIuZW1pdCh0aGlzLnRpbWUpO1xuICAgIH1cbiAgfVxuXG4gIGVtaXREYXRlRXZlbnQoKSB7XG4gICAgdGhpcy5jaGFuZ2VQaWNrZXIuZW1pdCh0aGlzLmRhdGV2YWx1ZSk7XG4gIH1cblxuICBlbWl0VGltZUV2ZW50KCkge1xuICAgIHRoaXMuY2hhbmdlUGlja2VyLmVtaXQodGhpcy50aW1lKTtcbiAgfVxuXG59XG4iXX0=