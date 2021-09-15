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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLWNlbGwtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkQ6L015SG9tZS9hbmRyb2lkL3dvcmtzcGFjZS9naXQvbWEtbmctZGF0YWdyaWQvcHJvamVjdHMvbWEtZGF0YS1ncmlkL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGEtZ3JpZC1jZWxsLXNlbGVjdG9yL2RhdGEtZ3JpZC1jZWxsLXNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU2hJLE1BQU0sT0FBTyw2QkFBNkI7SUFXeEM7UUFSQSxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ1QsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFdEMsYUFBUSxHQUFZLEtBQUssQ0FBQztJQUtuQixDQUFDO0lBRWpCLFFBQVE7UUFFTiwrQkFBK0I7UUFDL0IsSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7U0FDN0I7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ2pCO1FBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtZQUM1RyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDekIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQzthQUNoRTtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztZQUNyRSxzREFBc0Q7U0FDdkQ7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtZQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsOENBQThDO0lBQ2hELENBQUM7OztZQWxERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMscVFBQXVEOzthQUV4RDs7OztpQ0FHRSxTQUFTLFNBQUMsb0JBQW9CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3lCQUVqRCxNQUFNO21CQUNOLEtBQUs7dUJBQ0wsS0FBSztrQkFDTCxLQUFLO21CQUNMLEtBQUs7cUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYURhdGFHcmlkQ29sdW1uT3B0aW9ucyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvbWEtZGF0YS1ncmlkLW9wdGlvbnMnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZENvbXBvbmVudCB9IGZyb20gJy4uLy4uL21hLWRhdGEtZ3JpZC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYS1kYXRhLWdyaWQtY2VsbC1zZWxlY3RvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLWdyaWQtY2VsbC1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RhdGEtZ3JpZC1jZWxsLXNlbGVjdG9yLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhR3JpZENlbGxTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBAVmlld0NoaWxkKFwibXlJbnB1dFNlbGVjdG9yQm94XCIsIHsgc3RhdGljOiBmYWxzZSB9KSBteUlucHV0U2VsZWN0b3JCb3g6IEVsZW1lbnRSZWY7XG4gIHRpdGxlOiBzdHJpbmcgPSAnJztcbiAgQE91dHB1dCgpIGRhdGFDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQElucHV0KCkgZGF0YTogYW55O1xuICBASW5wdXQoKSBpc0hlYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBjb2w6IE1hRGF0YUdyaWRDb2x1bW5PcHRpb25zO1xuICBASW5wdXQoKSBwcm9wOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG15R3JpZDogTWFEYXRhR3JpZENvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgLyogQ2FzIGR1IGhlYWRlciBwYXMgZGUgcHJvcCAqL1xuICAgIGlmKHRoaXMuaXNIZWFkZXIpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aGlzLmNvbC50aXRsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aXRsZSA9ICcnO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5kYXRhICYmICh0aGlzLmRhdGFbdGhpcy5wcm9wXSA9PSB0cnVlIHx8IHRoaXMuZGF0YVt0aGlzLnByb3BdID09IDEgfHwgdGhpcy5kYXRhW3RoaXMucHJvcF0gPT0gXCJvblwiKSkge1xuICAgICAgdGhpcy5kYXRhW3RoaXMucHJvcF0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlQ2hlY2tib3goKSB7XG4gICAgaWYodGhpcy5pc0hlYWRlcikge1xuICAgICAgZm9yIChsZXQgcm93IG9mIHRoaXMuZGF0YSkge1xuICAgICAgICByb3dbdGhpcy5wcm9wXSA9IHRoaXMubXlJbnB1dFNlbGVjdG9yQm94Lm5hdGl2ZUVsZW1lbnQuY2hlY2tlZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhW3RoaXMucHJvcF0gPSB0aGlzLm15SW5wdXRTZWxlY3RvckJveC5uYXRpdmVFbGVtZW50LmNoZWNrZWQ7XG4gICAgICAvLyBjb25zb2xlLmxvZygnRU1JVCBTRUxFQ1RPUiBkYXRhQ2hhbmdlJywgdGhpcy5kYXRhKTtcbiAgICB9XG4gICBcbiAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdCh0aGlzLmRhdGEpO1xuICAgIGlmICh0aGlzLm15R3JpZCAhPSBudWxsKSB7XG4gICAgICB0aGlzLm15R3JpZC5fZGF0YVNlbGVjdG9yKHRoaXMuZGF0YSx0aGlzLnByb3ApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAvLyBjb25zb2xlLmxvZygnU0VMRUNUT1IgbmdPbkNoYW5nZXMnLGNoYW5nZXMpXG4gIH1cbn1cbiJdfQ==