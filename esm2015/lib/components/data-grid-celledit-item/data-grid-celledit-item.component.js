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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLWNlbGxlZGl0LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkM6L015VGVtcC9uZzEwYS9wcm9qZWN0cy9tYS1kYXRhLWdyaWQvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0YS1ncmlkLWNlbGxlZGl0LWl0ZW0vZGF0YS1ncmlkLWNlbGxlZGl0LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFpQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFVaEksTUFBTSxPQUFPLDZCQUE2QjtJQUt4QztRQUVBLFVBQUssR0FBVyxFQUFFLENBQUM7UUFHVCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUwvQixDQUFDO0lBV2pCLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksU0FBUyxFQUFHO1lBQy9DLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7Z0JBQzVHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQzthQUM3QjtTQUNGO0lBQ0gsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFHO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksT0FBTyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxR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TSxJQUFJLElBQUksRUFBRTtnQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBRXBDO1NBQ0Y7SUFFSCxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsMERBQTBEO1FBQzFELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNsRSw0Q0FBNEM7UUFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQywwREFBMEQ7SUFDNUQsQ0FBQzs7O1lBNUZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0Qyw4ZEFBdUQ7O2FBRXhEOzs7O3NCQUdFLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzhCQUN0QyxTQUFTLFNBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3lCQU85QyxNQUFNO21CQUNOLEtBQUs7a0JBQ0wsS0FBSzttQkFDTCxLQUFLO3FCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZENlbGwgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL21hLWRhdGEtZ3JpZC1jZWxsJztcbmltcG9ydCB7IE1hRGF0YUdyaWRDb2x1bW5PcHRpb25zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9tYS1kYXRhLWdyaWQtb3B0aW9ucyc7XG5pbXBvcnQgeyBNYURhdGFHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vbWEtZGF0YS1ncmlkLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hLWRhdGEtZ3JpZC1jZWxsZWRpdC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtZ3JpZC1jZWxsZWRpdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS1ncmlkLWNlbGxlZGl0LWl0ZW0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGFHcmlkQ2VsbGVkaXRJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgTWFEYXRhR3JpZENlbGwsIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBAVmlld0NoaWxkKFwibXlJbnB1dFwiLCB7IHN0YXRpYzogZmFsc2UgfSkgbXlJbnB1dDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcIm15SW5wdXRDaGVja2JveFwiLCB7IHN0YXRpYzogZmFsc2UgfSkgbXlJbnB1dENoZWNrYm94OiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgdmFsdWU6IHN0cmluZyA9ICcnO1xuICBcblxuICBAT3V0cHV0KCkgZGF0YUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBASW5wdXQoKSBkYXRhOiBhbnk7XG4gIEBJbnB1dCgpIGNvbDogTWFEYXRhR3JpZENvbHVtbk9wdGlvbnM7XG4gIEBJbnB1dCgpIHByb3A6IHN0cmluZztcbiAgQElucHV0KCkgbXlHcmlkOiBNYURhdGFHcmlkQ29tcG9uZW50O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbCAmJiB0aGlzLmNvbC5kYXRhVHlwZSA9PSAnYm9vbGVhbicgKSB7XG4gICAgICBpZiAodGhpcy5kYXRhICYmICh0aGlzLmRhdGFbdGhpcy5wcm9wXSA9PSB0cnVlIHx8IHRoaXMuZGF0YVt0aGlzLnByb3BdID09IDEgfHwgdGhpcy5kYXRhW3RoaXMucHJvcF0gPT0gXCJvblwiKSkge1xuICAgICAgICB0aGlzLmRhdGFbdGhpcy5wcm9wXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25QcmVzcyhldnQpIHtcbiAgICBjb25zb2xlLmxvZyhldnQpO1xuICAgIGlmIChldnQuS2V5ID09ICdFbnRlcicpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICB9XG4gIH1cbiAgXG4gIG9uQ2hhbmdlICgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnZWxlbScsdGhpcy5teUlucHV0Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIGxldCBlbWl0RXZlbnQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmNvbCAmJiB0aGlzLmNvbC5kYXRhVHlwZSA9PSAnbnVtYmVyJykge1xuICAgICAgbGV0IHMgPSB0aGlzLm15SW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSBhcyBzdHJpbmc7XG4gICAgICBpZiAocy5tYXRjaCgvXlswLTldKyQvKSkge1xuICAgICAgICB0aGlzLmRhdGFbdGhpcy5wcm9wXSA9IHBhcnNlSW50KHRoaXMubXlJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVtaXRFdmVudCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm15SW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMuZGF0YVt0aGlzLnByb3BdO1xuICAgICAgfVxuICAgIH0gZWxzZSAgaWYgKHRoaXMuY29sICYmIHRoaXMuY29sLmRhdGFUeXBlID09ICdmbG9hdCcpIHtcbiAgICAgIGxldCBzID0gdGhpcy5teUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgYXMgc3RyaW5nO1xuICAgICAgaWYgKHMubWF0Y2goL15bMC05XStcXC57MCwxfVswLTldKiQvKSkge1xuICAgICAgICB0aGlzLmRhdGFbdGhpcy5wcm9wXSA9IHBhcnNlRmxvYXQodGhpcy5teUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW1pdEV2ZW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubXlJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy5kYXRhW3RoaXMucHJvcF07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbCAmJiB0aGlzLmNvbC5kYXRhVHlwZSA9PSAnZGF0ZScpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBkPSBuZXcgRGF0ZSh0aGlzLm15SW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSkudG9JU09TdHJpbmcoKS5yZXBsYWNlKC9ULisvLCcnKTtcbiAgICAgICAgdGhpcy5kYXRhW3RoaXMucHJvcF0gPSBkO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIGVtaXRFdmVudCA9IGZhbHNlOyBcbiAgICAgICAgdGhpcy5teUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLmRhdGFbdGhpcy5wcm9wXTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuY29sICYmICh0aGlzLmNvbC5kYXRhVHlwZSA9PSAnYm9vbGVhbicgfHwgdGhpcy5jb2wuZGF0YVR5cGUgPT0gJ2Jvb2wnKSkge1xuICAgICAgdGhpcy5kYXRhW3RoaXMucHJvcF0gPSB0aGlzLm15SW5wdXQubmF0aXZlRWxlbWVudC5jaGVja2VkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGFbdGhpcy5wcm9wXSA9IHRoaXMubXlJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBcbiAgICBpZiAoZW1pdEV2ZW50KSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnRU1JVCBkYXRhQ2hhbmdlJyx0aGlzLmRhdGEpO1xuICAgICAgdGhpcy5kYXRhQ2hhbmdlLmVtaXQodGhpcy5kYXRhKTtcbiAgICAgIGlmICh0aGlzLm15R3JpZCAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMubXlHcmlkLl9kYXRhQ2hhbmdlKHRoaXMuZGF0YSk7XG4gIFxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgfVxuXG4gIG9uQ2hhbmdlQ2hlY2tib3ggKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdlbGVtJyx0aGlzLm15SW5wdXRDaGVja2JveC5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLmRhdGFbdGhpcy5wcm9wXSA9IHRoaXMubXlJbnB1dENoZWNrYm94Lm5hdGl2ZUVsZW1lbnQuY2hlY2tlZDtcbiAgICAvLyBjb25zb2xlLmxvZygnRU1JVCBkYXRhQ2hhbmdlJyx0aGlzLmRhdGEpO1xuICAgIHRoaXMuZGF0YUNoYW5nZS5lbWl0KHRoaXMuZGF0YSk7XG4gICAgaWYgKHRoaXMubXlHcmlkICE9IG51bGwpIHtcbiAgICAgIHRoaXMubXlHcmlkLl9kYXRhQ2hhbmdlKHRoaXMuZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIC8vIGNvbnNvbGUubG9nKCdEYXRhR3JpZENlbGxlZGl0SXRlbSBuZ09uQ2hhbmdlcycsY2hhbmdlcylcbiAgfVxuXG59XG4iXX0=