import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
export class DataGridCellSelectorComponent {
    constructor() {
        this.title = '';
        this.dataChange = new EventEmitter();
        this.isHeader = false;
    }
    ngOnInit() {
        /* Cas du header pas de prop */
        if (this.isHeader) {
            this.title = this.col.title;
        }
        else {
            this.title = '';
        }
        if (this.data && (this.data[this.prop] == true || this.data[this.prop] == 1 || this.data[this.prop] == "on")) {
            this.data[this.prop] = true;
        }
    }
    onChangeCheckbox() {
        if (this.isHeader) {
            for (let row of this.data) {
                row[this.prop] = this.myInputSelectorBox.nativeElement.checked;
            }
        }
        else {
            this.data[this.prop] = this.myInputSelectorBox.nativeElement.checked;
            // console.log('EMIT SELECTOR dataChange', this.data);
        }
        this.dataChange.emit(this.data);
        if (this.myGrid != null) {
            this.myGrid._dataSelector(this.data, this.prop);
        }
    }
    ngOnChanges(changes) {
        // console.log('SELECTOR ngOnChanges',changes)
    }
}
DataGridCellSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'ma-data-grid-cell-selector',
                template: "<span>\n    <!--  [(ngModel)]=\"realValue\" [checked]=\"checked\" -->\n    <label>\n        <input [(ngModel)]=\"data[col.prop]\" #myInputSelectorBox type=\"checkbox\"  (change)=\"onChangeCheckbox()\" />\n        <span></span>\n    </label>\n</span>",
                styles: [""]
            },] }
];
DataGridCellSelectorComponent.ctorParameters = () => [];
DataGridCellSelectorComponent.propDecorators = {
    myInputSelectorBox: [{ type: ViewChild, args: ["myInputSelectorBox", { static: false },] }],
    dataChange: [{ type: Output }],
    data: [{ type: Input }],
    isHeader: [{ type: Input }],
    col: [{ type: Input }],
    prop: [{ type: Input }],
    myGrid: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLWNlbGwtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkM6L015VGVtcC9uZzEwYS9wcm9qZWN0cy9tYS1kYXRhLWdyaWQvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0YS1ncmlkLWNlbGwtc2VsZWN0b3IvZGF0YS1ncmlkLWNlbGwtc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFpQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTaEksTUFBTSxPQUFPLDZCQUE2QjtJQVd4QztRQVJBLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDVCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUV0QyxhQUFRLEdBQVksS0FBSyxDQUFDO0lBS25CLENBQUM7SUFFakIsUUFBUTtRQUVOLCtCQUErQjtRQUMvQixJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztTQUM3QjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDakI7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQzVHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztTQUM3QjtJQUNILENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUN6QixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO2FBQ2hFO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBQ3JFLHNEQUFzRDtTQUN2RDtRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyw4Q0FBOEM7SUFDaEQsQ0FBQzs7O1lBbERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxxUUFBdUQ7O2FBRXhEOzs7O2lDQUdFLFNBQVMsU0FBQyxvQkFBb0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7eUJBRWpELE1BQU07bUJBQ04sS0FBSzt1QkFDTCxLQUFLO2tCQUNMLEtBQUs7bUJBQ0wsS0FBSztxQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hRGF0YUdyaWRDb2x1bW5PcHRpb25zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9tYS1kYXRhLWdyaWQtb3B0aW9ucyc7XG5pbXBvcnQgeyBNYURhdGFHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vbWEtZGF0YS1ncmlkLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hLWRhdGEtZ3JpZC1jZWxsLXNlbGVjdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtZ3JpZC1jZWxsLXNlbGVjdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS1ncmlkLWNlbGwtc2VsZWN0b3IuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGFHcmlkQ2VsbFNlbGVjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIEBWaWV3Q2hpbGQoXCJteUlucHV0U2VsZWN0b3JCb3hcIiwgeyBzdGF0aWM6IGZhbHNlIH0pIG15SW5wdXRTZWxlY3RvckJveDogRWxlbWVudFJlZjtcbiAgdGl0bGU6IHN0cmluZyA9ICcnO1xuICBAT3V0cHV0KCkgZGF0YUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBASW5wdXQoKSBkYXRhOiBhbnk7XG4gIEBJbnB1dCgpIGlzSGVhZGVyOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvbDogTWFEYXRhR3JpZENvbHVtbk9wdGlvbnM7XG4gIEBJbnB1dCgpIHByb3A6IHN0cmluZztcbiAgQElucHV0KCkgbXlHcmlkOiBNYURhdGFHcmlkQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICAvKiBDYXMgZHUgaGVhZGVyIHBhcyBkZSBwcm9wICovXG4gICAgaWYodGhpcy5pc0hlYWRlcikge1xuICAgICAgdGhpcy50aXRsZSA9IHRoaXMuY29sLnRpdGxlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpdGxlID0gJyc7XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLmRhdGEgJiYgKHRoaXMuZGF0YVt0aGlzLnByb3BdID09IHRydWUgfHwgdGhpcy5kYXRhW3RoaXMucHJvcF0gPT0gMSB8fCB0aGlzLmRhdGFbdGhpcy5wcm9wXSA9PSBcIm9uXCIpKSB7XG4gICAgICB0aGlzLmRhdGFbdGhpcy5wcm9wXSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2VDaGVja2JveCgpIHtcbiAgICBpZih0aGlzLmlzSGVhZGVyKSB7XG4gICAgICBmb3IgKGxldCByb3cgb2YgdGhpcy5kYXRhKSB7XG4gICAgICAgIHJvd1t0aGlzLnByb3BdID0gdGhpcy5teUlucHV0U2VsZWN0b3JCb3gubmF0aXZlRWxlbWVudC5jaGVja2VkO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGFbdGhpcy5wcm9wXSA9IHRoaXMubXlJbnB1dFNlbGVjdG9yQm94Lm5hdGl2ZUVsZW1lbnQuY2hlY2tlZDtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdFTUlUIFNFTEVDVE9SIGRhdGFDaGFuZ2UnLCB0aGlzLmRhdGEpO1xuICAgIH1cbiAgIFxuICAgIHRoaXMuZGF0YUNoYW5nZS5lbWl0KHRoaXMuZGF0YSk7XG4gICAgaWYgKHRoaXMubXlHcmlkICE9IG51bGwpIHtcbiAgICAgIHRoaXMubXlHcmlkLl9kYXRhU2VsZWN0b3IodGhpcy5kYXRhLHRoaXMucHJvcCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIC8vIGNvbnNvbGUubG9nKCdTRUxFQ1RPUiBuZ09uQ2hhbmdlcycsY2hhbmdlcylcbiAgfVxufVxuIl19