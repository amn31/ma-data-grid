import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as M from 'materialize-css';
export class DataGridPickerDateComponent {
    constructor() {
        this.datevalue = null;
        this.realValue = "";
        this.time = '';
        this.value = '';
        this.materialize = false;
        this.date = null;
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
        if (this.date) {
            if (this.materialize == true) {
                const offset = new Date().getTimezoneOffset();
                this.datevalue = new Date(this.date.getTime() - (2 * offset * 60 * 1000));
                // console.log('SET TO ', this.datevalue.toISOString());
                this.realValue = this.datevalue.toISOString().replace(/T.+/, '');
            }
            else {
                this.datevalue = new Date(this.date.getTime());
                // console.log('SET TO ', this.datevalue.toISOString());
                this.realValue = this.datevalue.toISOString().replace(/T.+/, '');
            }
            this.onChange();
        }
    }
    getDate() {
        return this.datevalue;
    }
    changeDateByInput(evt) {
        if (this.realValue === null ||
            this.realValue.length == 0 || !this.realValue.match(/^\d\d\d\d-\d\d-\d\d$/)) {
            this.setDate(null);
            this.changePicker.emit(this.datevalue);
            return;
        }
        else {
            try {
                this.datevalue = new Date(this.realValue.toString());
            }
            catch (e) {
                this.setDate(null);
            }
            this.changePicker.emit(this.datevalue);
        }
    }
    setDate(date) {
        if (date != null) {
            const offset = new Date().getTimezoneOffset();
            date = new Date(date.getTime() - (2 * offset * 60 * 1000));
        }
        if (this.materialize) {
            var elem = document.getElementById(this.datepicker_id);
            if (date == null) {
                elem.value = '';
            }
            else {
                elem.value = date.toISOString().replace(/T.+/, '');
            }
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
        if (!this.materialize) {
            return;
        }
        //var elems = document.querySelectorAll('.ma-data-grid-datepicker');
        var elem = document.getElementById(this.datepicker_id);
        var ptr = this;
        if (this.type == 'date') {
            var instances = M.Datepicker.init(elem, {
                autoClose: true,
                format: 'yyyy-mm-dd',
                defaultDate: this.datevalue,
                setDefaultDate: true,
                onSelect: function (d) {
                    // console.log('SELECT ',d)
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
    }
    onChange() {
        const offset = new Date().getTimezoneOffset();
        this.datevalue = new Date(this.datevalue.getTime() - (2 * offset * 60 * 1000));
        // console.log('onChange', this.datevalue)
        if (this.type == 'date') {
            this.changePicker.emit(this.datevalue);
        }
        else {
            this.changePicker.emit(this.time);
        }
    }
    emitDateEvent() {
        const offset = new Date().getTimezoneOffset();
        this.datevalue = new Date(this.datevalue.getTime() - (2 * offset * 60 * 1000));
        this.changePicker.emit(this.datevalue);
    }
    emitTimeEvent() {
        this.changePicker.emit(this.time);
    }
}
DataGridPickerDateComponent.decorators = [
    { type: Component, args: [{
                selector: 'ma-data-grid-datepicker',
                template: "\n    <!-- [(ngModel)]=\"realValue\"   -->\n    <div *ngIf=\"materialize == true\">\n        <input [id]=\"datepicker_id\" \n        #madatepicker type=\"text\" \n        [(ngModel)]=\"realValue\"\n        class=\"ma-data-grid-datepicker datepicker\">\n    </div>\n    <div *ngIf=\"materialize == false\">\n        <input \n         type=\"date\" \n        [(ngModel)]=\"realValue\"\n        (change)=\"changeDateByInput(evt)\"\n        >\n    </div>\n\n",
                styles: [""]
            },] }
];
DataGridPickerDateComponent.ctorParameters = () => [];
DataGridPickerDateComponent.propDecorators = {
    value: [{ type: Input }],
    materialize: [{ type: Input }],
    type: [{ type: Input }],
    date: [{ type: Input }],
    changePicker: [{ type: Output }],
    madatepicker: [{ type: ViewChild, args: ["madatepicker", { static: false },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLXBpY2tlci1kYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJEOi9NeUhvbWUvYW5kcm9pZC93b3Jrc3BhY2UvZ2l0L21hLW5nLWRhdGEtZ3JpZC9wcm9qZWN0cy9tYS1kYXRhLWdyaWQvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0YS1ncmlkLXBpY2tlci1kYXRlL2RhdGEtZ3JpZC1waWNrZXItZGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoSSxPQUFPLEtBQUssQ0FBQyxNQUFNLGlCQUFpQixDQUFDO0FBUXJDLE1BQU0sT0FBTywyQkFBMkI7SUFnQnRDO1FBYkEsY0FBUyxHQUFTLElBQUksQ0FBQztRQUN2QixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBRXZCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDVCxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTdCLFNBQUksR0FBUyxJQUFJLENBQUM7UUFDakIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRWpELGtCQUFhLEdBQVcsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUdyRCxDQUFDO0lBQ2pCLGVBQWU7UUFDYixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBQ0QsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFFBQVE7WUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxRQUFRO1FBQ04sNkNBQTZDO1FBQzdDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFF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QztJQUVELGFBQWE7UUFDWCxNQUFNLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7O1lBMUtGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxrZEFBcUQ7O2FBRXREOzs7O29CQVFFLEtBQUs7MEJBQ0wsS0FBSzttQkFDTCxLQUFLO21CQUNMLEtBQUs7MkJBQ0wsTUFBTTsyQkFHTixTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBNIGZyb20gJ21hdGVyaWFsaXplLWNzcyc7XG5pbXBvcnQgeyBNYURhdGFHcmlkQ29sdW1uT3B0aW9ucyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvbWEtZGF0YS1ncmlkLW9wdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYS1kYXRhLWdyaWQtZGF0ZXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLWdyaWQtcGlja2VyLWRhdGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXRhLWdyaWQtcGlja2VyLWRhdGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGFHcmlkUGlja2VyRGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcblxuICBpbnN0YW5jZTogYW55O1xuICBkYXRldmFsdWU6IERhdGUgPSBudWxsO1xuICByZWFsVmFsdWU6IHN0cmluZyA9IFwiXCI7XG5cbiAgdGltZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgbWF0ZXJpYWxpemU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgdHlwZTogJ2RhdGUnIHwgJ3RpbWUnO1xuICBASW5wdXQoKSBkYXRlOiBEYXRlID0gbnVsbDtcbiAgQE91dHB1dCgpIGNoYW5nZVBpY2tlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGRhdGVwaWNrZXJfaWQ6IHN0cmluZyA9IFwiZHBfXCIgKyBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTAwMDAwKSk7XG4gIEBWaWV3Q2hpbGQoXCJtYWRhdGVwaWNrZXJcIiwgeyBzdGF0aWM6IGZhbHNlIH0pIG1hZGF0ZXBpY2tlcjogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5pdCgpO1xuICB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluc3RhbmNlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5kZXN0cm95KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBjb25zb2xlLmxvZygnbmdPbkluaXQgdGhpcy5tYWRhdGVwaWNrZXInKTtcbiAgICBpZiAodGhpcy52YWx1ZSA9PSAnJykge1xuICAgICAgdGhpcy5kYXRldmFsdWUgPSBudWxsXG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGUpIHtcbiAgICAgIGlmICh0aGlzLm1hdGVyaWFsaXplID09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgICAgICB0aGlzLmRhdGV2YWx1ZSA9IG5ldyBEYXRlKHRoaXMuZGF0ZS5nZXRUaW1lKCkgLSAoMiAqIG9mZnNldCAqIDYwICogMTAwMCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnU0VUIFRPICcsIHRoaXMuZGF0ZXZhbHVlLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICB0aGlzLnJlYWxWYWx1ZSA9IHRoaXMuZGF0ZXZhbHVlLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvVC4rLywgJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXRldmFsdWUgPSBuZXcgRGF0ZSh0aGlzLmRhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1NFVCBUTyAnLCB0aGlzLmRhdGV2YWx1ZS50b0lTT1N0cmluZygpKTtcbiAgICAgICAgdGhpcy5yZWFsVmFsdWUgPSB0aGlzLmRhdGV2YWx1ZS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1QuKy8sICcnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICB9XG5cbiAgfVxuXG4gIGdldERhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZXZhbHVlO1xuICB9XG5cbiAgY2hhbmdlRGF0ZUJ5SW5wdXQoZXZ0KSB7XG4gICAgaWYgKHRoaXMucmVhbFZhbHVlID09PSBudWxsIHx8XG4gICAgICB0aGlzLnJlYWxWYWx1ZS5sZW5ndGggPT0gMCB8fCAhdGhpcy5yZWFsVmFsdWUubWF0Y2goL15cXGRcXGRcXGRcXGQtXFxkXFxkLVxcZFxcZCQvKSkge1xuICAgICAgdGhpcy5zZXREYXRlKG51bGwpO1xuICAgICAgdGhpcy5jaGFuZ2VQaWNrZXIuZW1pdCh0aGlzLmRhdGV2YWx1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuZGF0ZXZhbHVlID0gbmV3IERhdGUodGhpcy5yZWFsVmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0ZShudWxsKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hhbmdlUGlja2VyLmVtaXQodGhpcy5kYXRldmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHNldERhdGUoZGF0ZSkge1xuXG4gICAgaWYgKGRhdGUgIT0gbnVsbCkge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpIC0gKDIgKiBvZmZzZXQgKiA2MCAqIDEwMDApKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubWF0ZXJpYWxpemUpIHtcbiAgICAgIHZhciBlbGVtID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kYXRlcGlja2VyX2lkKTtcbiAgICAgIGlmIChkYXRlID09IG51bGwpIHtcbiAgICAgICAgZWxlbS52YWx1ZSA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbS52YWx1ZSA9IGRhdGUudG9JU09TdHJpbmcoKS5yZXBsYWNlKC9ULisvLCAnJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmRhdGV2YWx1ZSA9IGRhdGU7XG4gICAgLy8gY29uc29sZS5sb2coXCJzZXREYXRlIFZBTFVFXCIsIHRoaXMuZGF0ZXZhbHVlKTtcbiAgfVxuXG4gIGdldFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGltZVxuICB9XG5cbiAgc2V0VGltZShob3VyLCBtaW4pIHtcbiAgICBpZiAoaG91ciA8IDEwKSB7XG4gICAgICBob3VyID0gJzAnICsgaG91clxuICAgIH1cbiAgICBpZiAobWluIDwgMTApIHtcbiAgICAgIG1pbiA9ICcwJyArIG1pblxuICAgIH1cbiAgICB0aGlzLnRpbWUgPSBob3VyICsgJzonICsgbWluO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiVkFMVUVcIiwgdGhpcy50aW1lKTtcbiAgfVxuXG4gIF9pbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5tYXRlcmlhbGl6ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvL3ZhciBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYS1kYXRhLWdyaWQtZGF0ZXBpY2tlcicpO1xuICAgIHZhciBlbGVtID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kYXRlcGlja2VyX2lkKTtcbiAgICB2YXIgcHRyID0gdGhpcztcblxuICAgIGlmICh0aGlzLnR5cGUgPT0gJ2RhdGUnKSB7XG4gICAgICB2YXIgaW5zdGFuY2VzID0gTS5EYXRlcGlja2VyLmluaXQoZWxlbSwge1xuICAgICAgICBhdXRvQ2xvc2U6IHRydWUsXG4gICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQnLFxuICAgICAgICBkZWZhdWx0RGF0ZTogdGhpcy5kYXRldmFsdWUsXG4gICAgICAgIHNldERlZmF1bHREYXRlOiB0cnVlLFxuICAgICAgICBvblNlbGVjdDogZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnU0VMRUNUICcsZClcbiAgICAgICAgICBwdHIuc2V0RGF0ZShkKTtcbiAgICAgICAgfVxuICAgICAgICAvL21pbkRhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgIC8vbWF4RGF0ZTogbmV3IERhdGUoKSxcbiAgICAgIH0pO1xuICAgICAgZWxlbS5vbmNoYW5nZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRVZFTlRcIiwgZWxlbS52YWx1ZSk7XG4gICAgICAgIGlmIChlbGVtLnZhbHVlID09ICcnIHx8ICFlbGVtLnZhbHVlLm1hdGNoKC9eXFxkXFxkXFxkXFxkLVxcZFxcZC1cXGRcXGQkLykpIHtcbiAgICAgICAgICBlbGVtLnZhbHVlID0gJydcbiAgICAgICAgICBwdHIuc2V0RGF0ZShudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBwdHIuZW1pdERhdGVFdmVudCgpO1xuICAgICAgfTtcblxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaW5zdGFuY2VzID0gTS5UaW1lcGlja2VyLmluaXQoZWxlbSwge1xuICAgICAgICBhdXRvQ2xvc2U6IHRydWUsXG4gICAgICAgIC8vZm9ybWF0OiAneXl5eS1tbS1kZCcsXG4gICAgICAgIHR3ZWx2ZUhvdXI6IGZhbHNlLFxuICAgICAgICBvblNlbGVjdDogZnVuY3Rpb24gKGQsIGgsIG0pIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiR1wiLGQsaCxtKVxuICAgICAgICAgIHB0ci5zZXRUaW1lKGQsIGgpO1xuICAgICAgICAgIHB0ci5lbWl0VGltZUV2ZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cbiAgb25DaGFuZ2UoKSB7XG5cbiAgICBjb25zdCBvZmZzZXQgPSBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgdGhpcy5kYXRldmFsdWUgPSBuZXcgRGF0ZSh0aGlzLmRhdGV2YWx1ZS5nZXRUaW1lKCkgLSAoMiAqIG9mZnNldCAqIDYwICogMTAwMCkpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbkNoYW5nZScsIHRoaXMuZGF0ZXZhbHVlKVxuICAgIGlmICh0aGlzLnR5cGUgPT0gJ2RhdGUnKSB7XG4gICAgICB0aGlzLmNoYW5nZVBpY2tlci5lbWl0KHRoaXMuZGF0ZXZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFuZ2VQaWNrZXIuZW1pdCh0aGlzLnRpbWUpO1xuICAgIH1cbiAgfVxuXG4gIGVtaXREYXRlRXZlbnQoKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHRoaXMuZGF0ZXZhbHVlID0gbmV3IERhdGUodGhpcy5kYXRldmFsdWUuZ2V0VGltZSgpIC0gKDIgKiBvZmZzZXQgKiA2MCAqIDEwMDApKTtcbiAgICB0aGlzLmNoYW5nZVBpY2tlci5lbWl0KHRoaXMuZGF0ZXZhbHVlKTtcbiAgfVxuXG4gIGVtaXRUaW1lRXZlbnQoKSB7XG4gICAgdGhpcy5jaGFuZ2VQaWNrZXIuZW1pdCh0aGlzLnRpbWUpO1xuICB9XG5cbn1cbiJdfQ==