import { Component, Input } from '@angular/core';
export class DataGridCellBooleanComponent {
    constructor() {
        this.icon = '';
    }
    ngOnInit() {
        // console.log(this.data[this.col.prop]);
        if (this.data[this.col.prop] === true) {
            this.icon = 'check_box';
        }
        else if (this.data[this.col.prop] === false) {
            this.icon = 'check_box_outline_blank';
        }
    }
}
DataGridCellBooleanComponent.decorators = [
    { type: Component, args: [{
                selector: 'ma-data-grid-cell-boolean',
                template: '<div style="text-align: center"><i class="tiny material-icons">{{icon}}</i></div>'
            },] }
];
DataGridCellBooleanComponent.ctorParameters = () => [];
DataGridCellBooleanComponent.propDecorators = {
    data: [{ type: Input }],
    col: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLWNlbGwtYm9vbGVhbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiRDovTXlIb21lL2FuZHJvaWQvd29ya3NwYWNlL2dpdC9tYS1uZy1kYXRhZ3JpZC9wcm9qZWN0cy9tYS1kYXRhLWdyaWQvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0YS1ncmlkLWNlbGwtYm9vbGVhbi9kYXRhLWdyaWQtY2VsbC1ib29sZWFuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFTeEUsTUFBTSxPQUFPLDRCQUE0QjtJQU92QztRQUZBLFNBQUksR0FBVyxFQUFFLENBQUM7SUFFRixDQUFDO0lBRWpCLFFBQVE7UUFDTix5Q0FBeUM7UUFDekMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFBO1NBQ3hCO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQzdDLElBQUksQ0FBQyxJQUFJLEdBQUcseUJBQXlCLENBQUE7U0FDdEM7SUFDSCxDQUFDOzs7WUFyQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFFBQVEsRUFBRSxtRkFBbUY7YUFFOUY7Ozs7bUJBR0UsS0FBSztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYURhdGFHcmlkQ2VsbCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvbWEtZGF0YS1ncmlkLWNlbGwnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZENvbHVtbk9wdGlvbnMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL21hLWRhdGEtZ3JpZC1vcHRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWEtZGF0YS1ncmlkLWNlbGwtYm9vbGVhbicsXG4gIHRlbXBsYXRlOiAnPGRpdiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlclwiPjxpIGNsYXNzPVwidGlueSBtYXRlcmlhbC1pY29uc1wiPnt7aWNvbn19PC9pPjwvZGl2PidcbiAgXG59KVxuZXhwb3J0IGNsYXNzIERhdGFHcmlkQ2VsbEJvb2xlYW5Db21wb25lbnQgaW1wbGVtZW50cyBNYURhdGFHcmlkQ2VsbCwgT25Jbml0IHtcblxuICBASW5wdXQoKSBkYXRhOiBhbnk7XG4gIEBJbnB1dCgpIGNvbDogTWFEYXRhR3JpZENvbHVtbk9wdGlvbnM7XG5cbiAgaWNvbjogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGFbdGhpcy5jb2wucHJvcF0pO1xuICAgIGlmICh0aGlzLmRhdGFbdGhpcy5jb2wucHJvcF0gPT09IHRydWUpIHtcbiAgICAgIHRoaXMuaWNvbiA9ICdjaGVja19ib3gnXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGFbdGhpcy5jb2wucHJvcF0gPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmljb24gPSAnY2hlY2tfYm94X291dGxpbmVfYmxhbmsnXG4gICAgfVxuICB9XG5cbn1cbiJdfQ==