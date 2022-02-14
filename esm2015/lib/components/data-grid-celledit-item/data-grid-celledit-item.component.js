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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLWNlbGxlZGl0LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkQ6L015SG9tZS9hbmRyb2lkL3dvcmtzcGFjZS9naXQvbWEtbmctZGF0YS1ncmlkL3Byb2plY3RzL21hLWRhdGEtZ3JpZC9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kYXRhLWdyaWQtY2VsbGVkaXQtaXRlbS9kYXRhLWdyaWQtY2VsbGVkaXQtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVVoSSxNQUFNLE9BQU8sNkJBQTZCO0lBS3hDO1FBRUEsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUdULGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBTC9CLENBQUM7SUFXakIsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxTQUFTLEVBQUc7WUFDL0MsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtnQkFDNUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQzdCO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsT0FBTyxDQUFDLEdBQUc7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksR0FBRyxDQUFDLEdBQUcs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QUMsQ0FBQztZQUNoQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO2dCQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFFcEM7U0FDRjtJQUVILENBQUM7SUFFRCxnQkFBZ0I7UUFDZCwwREFBMEQ7UUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2xFLDRDQUE0QztRQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtZQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLDBEQUEwRDtJQUM1RCxDQUFDOzs7WUE1RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLDhkQUF1RDs7YUFFeEQ7Ozs7c0JBR0UsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7OEJBQ3RDLFNBQVMsU0FBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7eUJBTzlDLE1BQU07bUJBQ04sS0FBSztrQkFDTCxLQUFLO21CQUNMLEtBQUs7cUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYURhdGFHcmlkQ2VsbCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvbWEtZGF0YS1ncmlkLWNlbGwnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZENvbHVtbk9wdGlvbnMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL21hLWRhdGEtZ3JpZC1vcHRpb25zJztcbmltcG9ydCB7IE1hRGF0YUdyaWRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9tYS1kYXRhLWdyaWQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWEtZGF0YS1ncmlkLWNlbGxlZGl0LWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS1ncmlkLWNlbGxlZGl0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXRhLWdyaWQtY2VsbGVkaXQtaXRlbS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0YUdyaWRDZWxsZWRpdEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBNYURhdGFHcmlkQ2VsbCwgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIEBWaWV3Q2hpbGQoXCJteUlucHV0XCIsIHsgc3RhdGljOiBmYWxzZSB9KSBteUlucHV0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwibXlJbnB1dENoZWNrYm94XCIsIHsgc3RhdGljOiBmYWxzZSB9KSBteUlucHV0Q2hlY2tib3g6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICB2YWx1ZTogc3RyaW5nID0gJyc7XG4gIFxuXG4gIEBPdXRwdXQoKSBkYXRhQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcbiAgQElucHV0KCkgY29sOiBNYURhdGFHcmlkQ29sdW1uT3B0aW9ucztcbiAgQElucHV0KCkgcHJvcDogc3RyaW5nO1xuICBASW5wdXQoKSBteUdyaWQ6IE1hRGF0YUdyaWRDb21wb25lbnQ7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29sICYmIHRoaXMuY29sLmRhdGFUeXBlID09ICdib29sZWFuJyApIHtcbiAgICAgIGlmICh0aGlzLmRhdGEgJiYgKHRoaXMuZGF0YVt0aGlzLnByb3BdID09IHRydWUgfHwgdGhpcy5kYXRhW3RoaXMucHJvcF0gPT0gMSB8fCB0aGlzLmRhdGFbdGhpcy5wcm9wXSA9PSBcIm9uXCIpKSB7XG4gICAgICAgIHRoaXMuZGF0YVt0aGlzLnByb3BdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblByZXNzKGV2dCkge1xuICAgIGNvbnNvbGUubG9nKGV2dCk7XG4gICAgaWYgKGV2dC5LZXkgPT0gJ0VudGVyJykge1xuICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgIH1cbiAgfVxuICBcbiAgb25DaGFuZ2UgKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdlbGVtJyx0aGlzLm15SW5wdXQubmF0aXZlRWxlbWVudCk7XG4gICAgbGV0IGVtaXRFdmVudCA9IHRydWU7XG4gICAgaWYgKHRoaXMuY29sICYmIHRoaXMuY29sLmRhdGFUeXBlID09ICdudW1iZXInKSB7XG4gICAgICBsZXQgcyA9IHRoaXMubXlJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlIGFzIHN0cmluZztcbiAgICAgIGlmIChzLm1hdGNoKC9eWzAtOV0rJC8pKSB7XG4gICAgICAgIHRoaXMuZGF0YVt0aGlzLnByb3BdID0gcGFyc2VJbnQodGhpcy5teUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW1pdEV2ZW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubXlJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy5kYXRhW3RoaXMucHJvcF07XG4gICAgICB9XG4gICAgfSBlbHNlICBpZiAodGhpcy5jb2wgJiYgdGhpcy5jb2wuZGF0YVR5cGUgPT0gJ2Zsb2F0Jykge1xuICAgICAgbGV0IHMgPSB0aGlzLm15SW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSBhcyBzdHJpbmc7XG4gICAgICBpZiAocy5tYXRjaCgvXlswLTldK1xcLnswLDF9WzAtOV0qJC8pKSB7XG4gICAgICAgIHRoaXMuZGF0YVt0aGlzLnByb3BdID0gcGFyc2VGbG9hdCh0aGlzLm15SW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbWl0RXZlbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5teUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLmRhdGFbdGhpcy5wcm9wXTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuY29sICYmIHRoaXMuY29sLmRhdGFUeXBlID09ICdkYXRlJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGQ9IG5ldyBEYXRlKHRoaXMubXlJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlKS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1QuKy8sJycpO1xuICAgICAgICB0aGlzLmRhdGFbdGhpcy5wcm9wXSA9IGQ7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgZW1pdEV2ZW50ID0gZmFsc2U7IFxuICAgICAgICB0aGlzLm15SW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMuZGF0YVt0aGlzLnByb3BdO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5jb2wgJiYgKHRoaXMuY29sLmRhdGFUeXBlID09ICdib29sZWFuJyB8fCB0aGlzLmNvbC5kYXRhVHlwZSA9PSAnYm9vbCcpKSB7XG4gICAgICB0aGlzLmRhdGFbdGhpcy5wcm9wXSA9IHRoaXMubXlJbnB1dC5uYXRpdmVFbGVtZW50LmNoZWNrZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YVt0aGlzLnByb3BdID0gdGhpcy5teUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWU7XG4gICAgfVxuICAgIFxuICAgIGlmIChlbWl0RXZlbnQpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdFTUlUIGRhdGFDaGFuZ2UnLHRoaXMuZGF0YSk7XG4gICAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdCh0aGlzLmRhdGEpO1xuICAgICAgaWYgKHRoaXMubXlHcmlkICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5teUdyaWQuX2RhdGFDaGFuZ2UodGhpcy5kYXRhKTtcbiAgXG4gICAgICB9XG4gICAgfVxuICAgIFxuICB9XG5cbiAgb25DaGFuZ2VDaGVja2JveCAoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2VsZW0nLHRoaXMubXlJbnB1dENoZWNrYm94Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuZGF0YVt0aGlzLnByb3BdID0gdGhpcy5teUlucHV0Q2hlY2tib3gubmF0aXZlRWxlbWVudC5jaGVja2VkO1xuICAgIC8vIGNvbnNvbGUubG9nKCdFTUlUIGRhdGFDaGFuZ2UnLHRoaXMuZGF0YSk7XG4gICAgdGhpcy5kYXRhQ2hhbmdlLmVtaXQodGhpcy5kYXRhKTtcbiAgICBpZiAodGhpcy5teUdyaWQgIT0gbnVsbCkge1xuICAgICAgdGhpcy5teUdyaWQuX2RhdGFDaGFuZ2UodGhpcy5kYXRhKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgLy8gY29uc29sZS5sb2coJ0RhdGFHcmlkQ2VsbGVkaXRJdGVtIG5nT25DaGFuZ2VzJyxjaGFuZ2VzKVxuICB9XG5cbn1cbiJdfQ==