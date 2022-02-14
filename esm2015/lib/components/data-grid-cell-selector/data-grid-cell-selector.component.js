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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLWNlbGwtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkQ6L015SG9tZS9hbmRyb2lkL3dvcmtzcGFjZS9naXQvbWEtbmctZGF0YS1ncmlkL3Byb2plY3RzL21hLWRhdGEtZ3JpZC9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kYXRhLWdyaWQtY2VsbC1zZWxlY3Rvci9kYXRhLWdyaWQtY2VsbC1zZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVNoSSxNQUFNLE9BQU8sNkJBQTZCO0lBV3hDO1FBUkEsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNULGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXRDLGFBQVEsR0FBWSxLQUFLLENBQUM7SUFLbkIsQ0FBQztJQUVqQixRQUFRO1FBRU4sK0JBQStCO1FBQy9CLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQzdCO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNqQjtRQUVELElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7WUFDNUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVELGdCQUFnQjtRQUNkLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQixLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ3pCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7YUFDaEU7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFDckUsc0RBQXNEO1NBQ3ZEO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLDhDQUE4QztJQUNoRCxDQUFDOzs7WUFsREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLHFRQUF1RDs7YUFFeEQ7Ozs7aUNBR0UsU0FBUyxTQUFDLG9CQUFvQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTt5QkFFakQsTUFBTTttQkFDTixLQUFLO3VCQUNMLEtBQUs7a0JBQ0wsS0FBSzttQkFDTCxLQUFLO3FCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZENvbHVtbk9wdGlvbnMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL21hLWRhdGEtZ3JpZC1vcHRpb25zJztcbmltcG9ydCB7IE1hRGF0YUdyaWRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9tYS1kYXRhLWdyaWQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWEtZGF0YS1ncmlkLWNlbGwtc2VsZWN0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS1ncmlkLWNlbGwtc2VsZWN0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXRhLWdyaWQtY2VsbC1zZWxlY3Rvci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0YUdyaWRDZWxsU2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQFZpZXdDaGlsZChcIm15SW5wdXRTZWxlY3RvckJveFwiLCB7IHN0YXRpYzogZmFsc2UgfSkgbXlJbnB1dFNlbGVjdG9yQm94OiBFbGVtZW50UmVmO1xuICB0aXRsZTogc3RyaW5nID0gJyc7XG4gIEBPdXRwdXQoKSBkYXRhQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcbiAgQElucHV0KCkgaXNIZWFkZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgY29sOiBNYURhdGFHcmlkQ29sdW1uT3B0aW9ucztcbiAgQElucHV0KCkgcHJvcDogc3RyaW5nO1xuICBASW5wdXQoKSBteUdyaWQ6IE1hRGF0YUdyaWRDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIC8qIENhcyBkdSBoZWFkZXIgcGFzIGRlIHByb3AgKi9cbiAgICBpZih0aGlzLmlzSGVhZGVyKSB7XG4gICAgICB0aGlzLnRpdGxlID0gdGhpcy5jb2wudGl0bGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGl0bGUgPSAnJztcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMuZGF0YSAmJiAodGhpcy5kYXRhW3RoaXMucHJvcF0gPT0gdHJ1ZSB8fCB0aGlzLmRhdGFbdGhpcy5wcm9wXSA9PSAxIHx8IHRoaXMuZGF0YVt0aGlzLnByb3BdID09IFwib25cIikpIHtcbiAgICAgIHRoaXMuZGF0YVt0aGlzLnByb3BdID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZUNoZWNrYm94KCkge1xuICAgIGlmKHRoaXMuaXNIZWFkZXIpIHtcbiAgICAgIGZvciAobGV0IHJvdyBvZiB0aGlzLmRhdGEpIHtcbiAgICAgICAgcm93W3RoaXMucHJvcF0gPSB0aGlzLm15SW5wdXRTZWxlY3RvckJveC5uYXRpdmVFbGVtZW50LmNoZWNrZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YVt0aGlzLnByb3BdID0gdGhpcy5teUlucHV0U2VsZWN0b3JCb3gubmF0aXZlRWxlbWVudC5jaGVja2VkO1xuICAgICAgLy8gY29uc29sZS5sb2coJ0VNSVQgU0VMRUNUT1IgZGF0YUNoYW5nZScsIHRoaXMuZGF0YSk7XG4gICAgfVxuICAgXG4gICAgdGhpcy5kYXRhQ2hhbmdlLmVtaXQodGhpcy5kYXRhKTtcbiAgICBpZiAodGhpcy5teUdyaWQgIT0gbnVsbCkge1xuICAgICAgdGhpcy5teUdyaWQuX2RhdGFTZWxlY3Rvcih0aGlzLmRhdGEsdGhpcy5wcm9wKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgLy8gY29uc29sZS5sb2coJ1NFTEVDVE9SIG5nT25DaGFuZ2VzJyxjaGFuZ2VzKVxuICB9XG59XG4iXX0=