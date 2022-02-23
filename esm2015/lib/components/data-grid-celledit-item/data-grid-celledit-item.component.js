import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
export class DataGridCelleditItemComponent {
    constructor() {
        this.value = '';
        this.dataChange = new EventEmitter();
    }
    ngOnInit() {
        if (this.col && this.col.dataType == 'boolean') {
            if (this.data && (this.data[this.prop] == true || this.data[this.prop] == 1 || this.data[this.prop] == "on")) {
                this.data[this.prop] = true;
            }
        }
    }
    onPress(evt) {
        //console.log(evt);
        if (evt.Key == 'Enter') {
            this.onChange();
        }
    }
    onChange() {
        // console.log('elem',this.myInput.nativeElement);
        let emitEvent = true;
        if (this.col && this.col.dataType == 'number') {
            let s = this.myInput.nativeElement.value;
            if (s.match(/^[0-9]+$/)) {
                this.data[this.prop] = parseInt(this.myInput.nativeElement.value);
            }
            else {
                emitEvent = false;
                this.myInput.nativeElement.value = this.data[this.prop];
            }
        }
        else if (this.col && this.col.dataType == 'float') {
            let s = this.myInput.nativeElement.value;
            if (s.match(/^[0-9]+\.{0,1}[0-9]*$/)) {
                this.data[this.prop] = parseFloat(this.myInput.nativeElement.value);
            }
            else {
                emitEvent = false;
                this.myInput.nativeElement.value = this.data[this.prop];
            }
        }
        else if (this.col && this.col.dataType == 'date') {
            try {
                let d = new Date(this.myInput.nativeElement.value).toISOString().replace(/T.+/, '');
                this.data[this.prop] = d;
            }
            catch (e) {
                emitEvent = false;
                this.myInput.nativeElement.value = this.data[this.prop];
            }
        }
        else if (this.col && (this.col.dataType == 'boolean' || this.col.dataType == 'boolean?')) {
            this.data[this.prop] = this.myInput.nativeElement.checked;
        }
        else {
            this.data[this.prop] = this.myInput.nativeElement.value;
        }
        if (emitEvent) {
            // console.log('EMIT dataChange',this.data);
            this.dataChange.emit(this.data);
            if (this.myGrid != null) {
                this.myGrid.dataChange(this.data);
            }
        }
    }
    onChangeDate(evt) {
        //this.data[this.prop] = evt.nativeElement.value;
        // console.log('EMIT dataChange',this.data);
        this.dataChange.emit(this.data);
        if (this.myGrid != null) {
            this.myGrid.dataChange(this.data);
        }
    }
    onChangeCheckbox() {
        // console.log('elem',this.myInputCheckbox.nativeElement);
        this.data[this.prop] = this.myInputCheckbox.nativeElement.checked;
        // console.log('EMIT dataChange',this.data);
        this.dataChange.emit(this.data);
        if (this.myGrid != null) {
            this.myGrid.dataChange(this.data);
        }
    }
    ngOnChanges(changes) {
        // console.log('DataGridCelleditItem ngOnChanges',changes)
    }
}
DataGridCelleditItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'ma-data-grid-celledit-item',
                template: "<div *ngIf=\"!col || (col && col.dataType != 'boolean?' && col.dataType != 'boolean' && col.dataType != 'date')\">\n    <!-- (keyup)=\"onChange()\" (keypress)=\"onPress($Event)\" -->\n    <input #myInput type=\"text\" [(value)]=\"data[prop]\" (keypress)=\"onPress($event)\" (change)=\"onChange()\">\n</div>\n<div *ngIf=\"col && (col.dataType == 'boolean' || col.dataType == 'boolean?')\">\n    <label>\n        <input #myInputCheckbox type=\"checkbox\" [(ngModel)]=\"data[col.prop]\" (change)=\"onChangeCheckbox()\" />\n        <span></span>\n    </label>\n</div>\n<div *ngIf=\"col && col.dataType == 'date'\">\n   <input type=\"date\" [(ngModel)]=\"data[col.prop]\" (change)=\"onChangeDate($event)\" />\n</div>",
                styles: [""]
            },] }
];
DataGridCelleditItemComponent.ctorParameters = () => [];
DataGridCelleditItemComponent.propDecorators = {
    myInput: [{ type: ViewChild, args: ["myInput", { static: false },] }],
    myInputCheckbox: [{ type: ViewChild, args: ["myInputCheckbox", { static: false },] }],
    dataChange: [{ type: Output }],
    data: [{ type: Input }],
    col: [{ type: Input }],
    prop: [{ type: Input }],
    myGrid: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLWNlbGxlZGl0LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkQ6L015SG9tZS9hbmRyb2lkL3dvcmtzcGFjZS9naXQvbWEtbmctZGF0YS1ncmlkL3Byb2plY3RzL21hLWRhdGEtZ3JpZC9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kYXRhLWdyaWQtY2VsbGVkaXQtaXRlbS9kYXRhLWdyaWQtY2VsbGVkaXQtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVVoSSxNQUFNLE9BQU8sNkJBQTZCO0lBS3hDO1FBRUEsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUdULGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBTC9CLENBQUM7SUFXakIsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxTQUFTLEVBQUc7WUFDL0MsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtnQkFDNUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQzdCO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsT0FBTyxDQUFDLEdBQUc7UUFDVCxtQkFBbUI7UUFDbkIsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLE9BQU8sRUFBRTtZQUN0QixJQUFJLENB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TCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hRGF0YUdyaWRDZWxsIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9tYS1kYXRhLWdyaWQtY2VsbCc7XG5pbXBvcnQgeyBNYURhdGFHcmlkQ29sdW1uT3B0aW9ucyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvbWEtZGF0YS1ncmlkLW9wdGlvbnMnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZENvbXBvbmVudCB9IGZyb20gJy4uLy4uL21hLWRhdGEtZ3JpZC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYS1kYXRhLWdyaWQtY2VsbGVkaXQtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLWdyaWQtY2VsbGVkaXQtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RhdGEtZ3JpZC1jZWxsZWRpdC1pdGVtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhR3JpZENlbGxlZGl0SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE1hRGF0YUdyaWRDZWxsLCBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQFZpZXdDaGlsZChcIm15SW5wdXRcIiwgeyBzdGF0aWM6IGZhbHNlIH0pIG15SW5wdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJteUlucHV0Q2hlY2tib3hcIiwgeyBzdGF0aWM6IGZhbHNlIH0pIG15SW5wdXRDaGVja2JveDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHZhbHVlOiBzdHJpbmcgPSAnJztcbiAgXG5cbiAgQE91dHB1dCgpIGRhdGFDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQElucHV0KCkgZGF0YTogYW55O1xuICBASW5wdXQoKSBjb2w6IE1hRGF0YUdyaWRDb2x1bW5PcHRpb25zO1xuICBASW5wdXQoKSBwcm9wOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG15R3JpZDogTWFEYXRhR3JpZENvbXBvbmVudDtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb2wgJiYgdGhpcy5jb2wuZGF0YVR5cGUgPT0gJ2Jvb2xlYW4nICkge1xuICAgICAgaWYgKHRoaXMuZGF0YSAmJiAodGhpcy5kYXRhW3RoaXMucHJvcF0gPT0gdHJ1ZSB8fCB0aGlzLmRhdGFbdGhpcy5wcm9wXSA9PSAxIHx8IHRoaXMuZGF0YVt0aGlzLnByb3BdID09IFwib25cIikpIHtcbiAgICAgICAgdGhpcy5kYXRhW3RoaXMucHJvcF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUHJlc3MoZXZ0KSB7XG4gICAgLy9jb25zb2xlLmxvZyhldnQpO1xuICAgIGlmIChldnQuS2V5ID09ICdFbnRlcicpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICB9XG4gIH1cbiAgXG4gIG9uQ2hhbmdlICgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnZWxlbScsdGhpcy5teUlucHV0Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIGxldCBlbWl0RXZlbnQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmNvbCAmJiB0aGlzLmNvbC5kYXRhVHlwZSA9PSAnbnVtYmVyJykge1xuICAgICAgbGV0IHMgPSB0aGlzLm15SW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSBhcyBzdHJpbmc7XG4gICAgICBpZiAocy5tYXRjaCgvXlswLTldKyQvKSkge1xuICAgICAgICB0aGlzLmRhdGFbdGhpcy5wcm9wXSA9IHBhcnNlSW50KHRoaXMubXlJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVtaXRFdmVudCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm15SW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMuZGF0YVt0aGlzLnByb3BdO1xuICAgICAgfVxuICAgIH0gZWxzZSAgaWYgKHRoaXMuY29sICYmIHRoaXMuY29sLmRhdGFUeXBlID09ICdmbG9hdCcpIHtcbiAgICAgIGxldCBzID0gdGhpcy5teUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgYXMgc3RyaW5nO1xuICAgICAgaWYgKHMubWF0Y2goL15bMC05XStcXC57MCwxfVswLTldKiQvKSkge1xuICAgICAgICB0aGlzLmRhdGFbdGhpcy5wcm9wXSA9IHBhcnNlRmxvYXQodGhpcy5teUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW1pdEV2ZW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubXlJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy5kYXRhW3RoaXMucHJvcF07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbCAmJiB0aGlzLmNvbC5kYXRhVHlwZSA9PSAnZGF0ZScpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBkPSBuZXcgRGF0ZSh0aGlzLm15SW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSkudG9JU09TdHJpbmcoKS5yZXBsYWNlKC9ULisvLCcnKTtcbiAgICAgICAgdGhpcy5kYXRhW3RoaXMucHJvcF0gPSBkO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIGVtaXRFdmVudCA9IGZhbHNlOyBcbiAgICAgICAgdGhpcy5teUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLmRhdGFbdGhpcy5wcm9wXTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuY29sICYmICh0aGlzLmNvbC5kYXRhVHlwZSA9PSAnYm9vbGVhbicgfHwgdGhpcy5jb2wuZGF0YVR5cGUgPT0gJ2Jvb2xlYW4/JykpIHtcbiAgICAgIHRoaXMuZGF0YVt0aGlzLnByb3BdID0gdGhpcy5teUlucHV0Lm5hdGl2ZUVsZW1lbnQuY2hlY2tlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhW3RoaXMucHJvcF0gPSB0aGlzLm15SW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgXG4gICAgaWYgKGVtaXRFdmVudCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ0VNSVQgZGF0YUNoYW5nZScsdGhpcy5kYXRhKTtcbiAgICAgIHRoaXMuZGF0YUNoYW5nZS5lbWl0KHRoaXMuZGF0YSk7XG4gICAgICBpZiAodGhpcy5teUdyaWQgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLm15R3JpZC5kYXRhQ2hhbmdlKHRoaXMuZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICB9XG5cbiAgb25DaGFuZ2VEYXRlIChldnQpIHtcbiAgICAvL3RoaXMuZGF0YVt0aGlzLnByb3BdID0gZXZ0Lm5hdGl2ZUVsZW1lbnQudmFsdWU7XG4gICAgLy8gY29uc29sZS5sb2coJ0VNSVQgZGF0YUNoYW5nZScsdGhpcy5kYXRhKTtcbiAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdCh0aGlzLmRhdGEpO1xuICAgIGlmICh0aGlzLm15R3JpZCAhPSBudWxsKSB7XG4gICAgICB0aGlzLm15R3JpZC5kYXRhQ2hhbmdlKHRoaXMuZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2VDaGVja2JveCAoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2VsZW0nLHRoaXMubXlJbnB1dENoZWNrYm94Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuZGF0YVt0aGlzLnByb3BdID0gdGhpcy5teUlucHV0Q2hlY2tib3gubmF0aXZlRWxlbWVudC5jaGVja2VkO1xuICAgIC8vIGNvbnNvbGUubG9nKCdFTUlUIGRhdGFDaGFuZ2UnLHRoaXMuZGF0YSk7XG4gICAgdGhpcy5kYXRhQ2hhbmdlLmVtaXQodGhpcy5kYXRhKTtcbiAgICBpZiAodGhpcy5teUdyaWQgIT0gbnVsbCkge1xuICAgICAgdGhpcy5teUdyaWQuZGF0YUNoYW5nZSh0aGlzLmRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAvLyBjb25zb2xlLmxvZygnRGF0YUdyaWRDZWxsZWRpdEl0ZW0gbmdPbkNoYW5nZXMnLGNoYW5nZXMpXG4gIH1cblxufVxuIl19