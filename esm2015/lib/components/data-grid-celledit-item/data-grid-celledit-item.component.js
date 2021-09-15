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
        console.log(evt);
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
        else if (this.col && (this.col.dataType == 'boolean' || this.col.dataType == 'bool')) {
            this.data[this.prop] = this.myInput.nativeElement.checked;
        }
        else {
            this.data[this.prop] = this.myInput.nativeElement.value;
        }
        if (emitEvent) {
            // console.log('EMIT dataChange',this.data);
            this.dataChange.emit(this.data);
            if (this.myGrid != null) {
                this.myGrid._dataChange(this.data);
            }
        }
    }
    onChangeCheckbox() {
        // console.log('elem',this.myInputCheckbox.nativeElement);
        this.data[this.prop] = this.myInputCheckbox.nativeElement.checked;
        // console.log('EMIT dataChange',this.data);
        this.dataChange.emit(this.data);
        if (this.myGrid != null) {
            this.myGrid._dataChange(this.data);
        }
    }
    ngOnChanges(changes) {
        // console.log('DataGridCelleditItem ngOnChanges',changes)
    }
}
DataGridCelleditItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'ma-data-grid-celledit-item',
                template: "<div *ngIf=\"!col || col.dataType != 'boolean'\">\n    <!-- (keyup)=\"onChange()\" (keypress)=\"onPress($Event)\" -->\n    <input #myInput type=\"text\" [(value)]=\"data[prop]\" (keypress)=\"onPress($event)\" (change)=\"onChange()\">\n</div>\n<div *ngIf=\"col && col.dataType == 'boolean'\">\n    <label>\n        <input #myInputCheckbox type=\"checkbox\" [(ngModel)]=\"data[col.prop]\" (change)=\"onChangeCheckbox()\" />\n        <span></span>\n    </label>\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLWNlbGxlZGl0LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkQ6L015SG9tZS9hbmRyb2lkL3dvcmtzcGFjZS9naXQvbWEtbmctZGF0YWdyaWQvcHJvamVjdHMvbWEtZGF0YS1ncmlkL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGEtZ3JpZC1jZWxsZWRpdC1pdGVtL2RhdGEtZ3JpZC1jZWxsZWRpdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBVWhJLE1BQU0sT0FBTyw2QkFBNkI7SUFLeEM7UUFFQSxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBR1QsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFML0IsQ0FBQztJQVdqQixRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLFNBQVMsRUFBRztZQUMvQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO2dCQUM1RyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7YUFDN0I7U0FDRjtJQUNILENBQUM7SUFFRCxPQUFPLENBQUMsR0FBRztRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxHQUFHLENBQUMsR0FBRyxJ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QyxDQUFDO1lBQ2hDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUVwQztTQUNGO0lBRUgsQ0FBQztJQUVELGdCQUFnQjtRQUNkLDBEQUEwRDtRQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDbEUsNENBQTRDO1FBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsMERBQTBEO0lBQzVELENBQUM7OztZQTVGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsOGRBQXVEOzthQUV4RDs7OztzQkFHRSxTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs4QkFDdEMsU0FBUyxTQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTt5QkFPOUMsTUFBTTttQkFDTixLQUFLO2tCQUNMLEtBQUs7bUJBQ0wsS0FBSztxQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hRGF0YUdyaWRDZWxsIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9tYS1kYXRhLWdyaWQtY2VsbCc7XG5pbXBvcnQgeyBNYURhdGFHcmlkQ29sdW1uT3B0aW9ucyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvbWEtZGF0YS1ncmlkLW9wdGlvbnMnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZENvbXBvbmVudCB9IGZyb20gJy4uLy4uL21hLWRhdGEtZ3JpZC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYS1kYXRhLWdyaWQtY2VsbGVkaXQtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLWdyaWQtY2VsbGVkaXQtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RhdGEtZ3JpZC1jZWxsZWRpdC1pdGVtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhR3JpZENlbGxlZGl0SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE1hRGF0YUdyaWRDZWxsLCBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQFZpZXdDaGlsZChcIm15SW5wdXRcIiwgeyBzdGF0aWM6IGZhbHNlIH0pIG15SW5wdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJteUlucHV0Q2hlY2tib3hcIiwgeyBzdGF0aWM6IGZhbHNlIH0pIG15SW5wdXRDaGVja2JveDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHZhbHVlOiBzdHJpbmcgPSAnJztcbiAgXG5cbiAgQE91dHB1dCgpIGRhdGFDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQElucHV0KCkgZGF0YTogYW55O1xuICBASW5wdXQoKSBjb2w6IE1hRGF0YUdyaWRDb2x1bW5PcHRpb25zO1xuICBASW5wdXQoKSBwcm9wOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG15R3JpZDogTWFEYXRhR3JpZENvbXBvbmVudDtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb2wgJiYgdGhpcy5jb2wuZGF0YVR5cGUgPT0gJ2Jvb2xlYW4nICkge1xuICAgICAgaWYgKHRoaXMuZGF0YSAmJiAodGhpcy5kYXRhW3RoaXMucHJvcF0gPT0gdHJ1ZSB8fCB0aGlzLmRhdGFbdGhpcy5wcm9wXSA9PSAxIHx8IHRoaXMuZGF0YVt0aGlzLnByb3BdID09IFwib25cIikpIHtcbiAgICAgICAgdGhpcy5kYXRhW3RoaXMucHJvcF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUHJlc3MoZXZ0KSB7XG4gICAgY29uc29sZS5sb2coZXZ0KTtcbiAgICBpZiAoZXZ0LktleSA9PSAnRW50ZXInKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgfVxuICB9XG4gIFxuICBvbkNoYW5nZSAoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2VsZW0nLHRoaXMubXlJbnB1dC5uYXRpdmVFbGVtZW50KTtcbiAgICBsZXQgZW1pdEV2ZW50ID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5jb2wgJiYgdGhpcy5jb2wuZGF0YVR5cGUgPT0gJ251bWJlcicpIHtcbiAgICAgIGxldCBzID0gdGhpcy5teUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgYXMgc3RyaW5nO1xuICAgICAgaWYgKHMubWF0Y2goL15bMC05XSskLykpIHtcbiAgICAgICAgdGhpcy5kYXRhW3RoaXMucHJvcF0gPSBwYXJzZUludCh0aGlzLm15SW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbWl0RXZlbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5teUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLmRhdGFbdGhpcy5wcm9wXTtcbiAgICAgIH1cbiAgICB9IGVsc2UgIGlmICh0aGlzLmNvbCAmJiB0aGlzLmNvbC5kYXRhVHlwZSA9PSAnZmxvYXQnKSB7XG4gICAgICBsZXQgcyA9IHRoaXMubXlJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlIGFzIHN0cmluZztcbiAgICAgIGlmIChzLm1hdGNoKC9eWzAtOV0rXFwuezAsMX1bMC05XSokLykpIHtcbiAgICAgICAgdGhpcy5kYXRhW3RoaXMucHJvcF0gPSBwYXJzZUZsb2F0KHRoaXMubXlJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVtaXRFdmVudCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm15SW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMuZGF0YVt0aGlzLnByb3BdO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5jb2wgJiYgdGhpcy5jb2wuZGF0YVR5cGUgPT0gJ2RhdGUnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgZD0gbmV3IERhdGUodGhpcy5teUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUpLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvVC4rLywnJyk7XG4gICAgICAgIHRoaXMuZGF0YVt0aGlzLnByb3BdID0gZDtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICBlbWl0RXZlbnQgPSBmYWxzZTsgXG4gICAgICAgIHRoaXMubXlJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy5kYXRhW3RoaXMucHJvcF07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbCAmJiAodGhpcy5jb2wuZGF0YVR5cGUgPT0gJ2Jvb2xlYW4nIHx8IHRoaXMuY29sLmRhdGFUeXBlID09ICdib29sJykpIHtcbiAgICAgIHRoaXMuZGF0YVt0aGlzLnByb3BdID0gdGhpcy5teUlucHV0Lm5hdGl2ZUVsZW1lbnQuY2hlY2tlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhW3RoaXMucHJvcF0gPSB0aGlzLm15SW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgXG4gICAgaWYgKGVtaXRFdmVudCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ0VNSVQgZGF0YUNoYW5nZScsdGhpcy5kYXRhKTtcbiAgICAgIHRoaXMuZGF0YUNoYW5nZS5lbWl0KHRoaXMuZGF0YSk7XG4gICAgICBpZiAodGhpcy5teUdyaWQgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLm15R3JpZC5fZGF0YUNoYW5nZSh0aGlzLmRhdGEpO1xuICBcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gIH1cblxuICBvbkNoYW5nZUNoZWNrYm94ICgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnZWxlbScsdGhpcy5teUlucHV0Q2hlY2tib3gubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5kYXRhW3RoaXMucHJvcF0gPSB0aGlzLm15SW5wdXRDaGVja2JveC5uYXRpdmVFbGVtZW50LmNoZWNrZWQ7XG4gICAgLy8gY29uc29sZS5sb2coJ0VNSVQgZGF0YUNoYW5nZScsdGhpcy5kYXRhKTtcbiAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdCh0aGlzLmRhdGEpO1xuICAgIGlmICh0aGlzLm15R3JpZCAhPSBudWxsKSB7XG4gICAgICB0aGlzLm15R3JpZC5fZGF0YUNoYW5nZSh0aGlzLmRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAvLyBjb25zb2xlLmxvZygnRGF0YUdyaWRDZWxsZWRpdEl0ZW0gbmdPbkNoYW5nZXMnLGNoYW5nZXMpXG4gIH1cblxufVxuIl19