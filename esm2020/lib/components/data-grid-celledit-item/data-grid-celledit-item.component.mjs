import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = ["myInput"];
const _c1 = ["myInputCheckbox"];
function DataGridCelleditItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "input", 1, 2);
    i0.ɵɵlistener("valueChange", function DataGridCelleditItemComponent_div_0_Template_input_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return (ctx_r3.data[ctx_r3.prop] = $event); })("keypress", function DataGridCelleditItemComponent_div_0_Template_input_keypress_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onPress($event); })("change", function DataGridCelleditItemComponent_div_0_Template_input_change_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onChange(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r0.data[ctx_r0.prop]);
} }
function DataGridCelleditItemComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "label");
    i0.ɵɵelementStart(2, "input", 3, 4);
    i0.ɵɵlistener("ngModelChange", function DataGridCelleditItemComponent_div_1_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return (ctx_r8.data[ctx_r8.col.prop] = $event); })("change", function DataGridCelleditItemComponent_div_1_Template_input_change_2_listener() { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.onChangeCheckbox(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "span");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r1.data[ctx_r1.col.prop]);
} }
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
DataGridCelleditItemComponent.ɵfac = function DataGridCelleditItemComponent_Factory(t) { return new (t || DataGridCelleditItemComponent)(); };
DataGridCelleditItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataGridCelleditItemComponent, selectors: [["ma-data-grid-celledit-item"]], viewQuery: function DataGridCelleditItemComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.myInput = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.myInputCheckbox = _t.first);
    } }, inputs: { data: "data", col: "col", prop: "prop", myGrid: "myGrid" }, outputs: { dataChange: "dataChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[4, "ngIf"], ["type", "text", 3, "value", "valueChange", "keypress", "change"], ["myInput", ""], ["type", "checkbox", 3, "ngModel", "ngModelChange", "change"], ["myInputCheckbox", ""]], template: function DataGridCelleditItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, DataGridCelleditItemComponent_div_0_Template, 3, 1, "div", 0);
        i0.ɵɵtemplate(1, DataGridCelleditItemComponent_div_1_Template, 5, 1, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.col || ctx.col.dataType != "boolean");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.col && ctx.col.dataType == "boolean");
    } }, directives: [i1.NgIf, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgModel], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataGridCelleditItemComponent, [{
        type: Component,
        args: [{ selector: 'ma-data-grid-celledit-item', template: "<div *ngIf=\"!col || col.dataType != 'boolean'\">\n    <!-- (keyup)=\"onChange()\" (keypress)=\"onPress($Event)\" -->\n    <input #myInput type=\"text\" [(value)]=\"data[prop]\" (keypress)=\"onPress($event)\" (change)=\"onChange()\">\n</div>\n<div *ngIf=\"col && col.dataType == 'boolean'\">\n    <label>\n        <input #myInputCheckbox type=\"checkbox\" [(ngModel)]=\"data[col.prop]\" (change)=\"onChangeCheckbox()\" />\n        <span></span>\n    </label>\n</div>", styles: [""] }]
    }], function () { return []; }, { myInput: [{
            type: ViewChild,
            args: ["myInput", { static: false }]
        }], myInputCheckbox: [{
            type: ViewChild,
            args: ["myInputCheckbox", { static: false }]
        }], dataChange: [{
            type: Output
        }], data: [{
            type: Input
        }], col: [{
            type: Input
        }], prop: [{
            type: Input
        }], myGrid: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLWNlbGxlZGl0LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWEtZGF0YS1ncmlkL3NyYy9saWIvY29tcG9uZW50cy9kYXRhLWdyaWQtY2VsbGVkaXQtaXRlbS9kYXRhLWdyaWQtY2VsbGVkaXQtaXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYS1kYXRhLWdyaWQvc3JjL2xpYi9jb21wb25lbnRzL2RhdGEtZ3JpZC1jZWxsZWRpdC1pdGVtL2RhdGEtZ3JpZC1jZWxsZWRpdC1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFpQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lDQWhJLDJCQUErQztJQUUzQyxtQ0FBc0c7SUFBMUUsa09BQXNCLHdLQUFhLHNCQUFlLElBQTVCLDhKQUF3QyxpQkFBVSxJQUFsRDtJQUFsRCxpQkFBc0c7SUFDMUcsaUJBQU07OztJQUQwQixlQUFzQjtJQUF0QixnREFBc0I7Ozs7SUFFdEQsMkJBQThDO0lBQzFDLDZCQUFPO0lBQ0gsbUNBQXFHO0lBQTdELDBPQUE0QiwrSkFBVywwQkFBa0IsSUFBN0I7SUFBcEUsaUJBQXFHO0lBQ3JHLHVCQUFhO0lBQ2pCLGlCQUFRO0lBQ1osaUJBQU07OztJQUgwQyxlQUE0QjtJQUE1QixzREFBNEI7O0FESTVFLE1BQU0sT0FBTyw2QkFBNkI7SUFLeEM7UUFFQSxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBR1QsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFML0IsQ0FBQztJQVdqQixRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLFNBQVMsRUFB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MUMsOEVBR007UUFDTiw4RUFLTTs7UUFUQSxnRUFBdUM7UUFJdkMsZUFBc0M7UUFBdEMsK0RBQXNDOzt1RkRNL0IsNkJBQTZCO2NBTHpDLFNBQVM7MkJBQ0UsNEJBQTRCO3NDQU1HLE9BQU87a0JBQS9DLFNBQVM7bUJBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUNVLGVBQWU7a0JBQS9ELFNBQVM7bUJBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBT3JDLFVBQVU7a0JBQW5CLE1BQU07WUFDRSxJQUFJO2tCQUFaLEtBQUs7WUFDRyxHQUFHO2tCQUFYLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZENlbGwgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL21hLWRhdGEtZ3JpZC1jZWxsJztcbmltcG9ydCB7IE1hRGF0YUdyaWRDb2x1bW5PcHRpb25zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9tYS1kYXRhLWdyaWQtb3B0aW9ucyc7XG5pbXBvcnQgeyBNYURhdGFHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vbWEtZGF0YS1ncmlkLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hLWRhdGEtZ3JpZC1jZWxsZWRpdC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtZ3JpZC1jZWxsZWRpdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS1ncmlkLWNlbGxlZGl0LWl0ZW0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGFHcmlkQ2VsbGVkaXRJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgTWFEYXRhR3JpZENlbGwsIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBAVmlld0NoaWxkKFwibXlJbnB1dFwiLCB7IHN0YXRpYzogZmFsc2UgfSkgbXlJbnB1dDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcIm15SW5wdXRDaGVja2JveFwiLCB7IHN0YXRpYzogZmFsc2UgfSkgbXlJbnB1dENoZWNrYm94OiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgdmFsdWU6IHN0cmluZyA9ICcnO1xuICBcblxuICBAT3V0cHV0KCkgZGF0YUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBASW5wdXQoKSBkYXRhOiBhbnk7XG4gIEBJbnB1dCgpIGNvbDogTWFEYXRhR3JpZENvbHVtbk9wdGlvbnM7XG4gIEBJbnB1dCgpIHByb3A6IHN0cmluZztcbiAgQElucHV0KCkgbXlHcmlkOiBNYURhdGFHcmlkQ29tcG9uZW50O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbCAmJiB0aGlzLmNvbC5kYXRhVHlwZSA9PSAnYm9vbGVhbicgKSB7XG4gICAgICBpZiAodGhpcy5kYXRhICYmICh0aGlzLmRhdGFbdGhpcy5wcm9wXSA9PSB0cnVlIHx8IHRoaXMuZGF0YVt0aGlzLnByb3BdID09IDEgfHwgdGhpcy5kYXRhW3RoaXMucHJvcF0gPT0gXCJvblwiKSkge1xuICAgICAgICB0aGlzLmRhdGFbdGhpcy5wcm9wXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25QcmVzcyhldnQpIHtcbiAgICBjb25zb2xlLmxvZyhldnQpO1xuICAgIGlmIChldnQuS2V5ID09ICdFbnRlcicpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICB9XG4gIH1cbiAgXG4gIG9uQ2hhbmdlICgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnZWxlbScsdGhpcy5teUlucHV0Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIGxldCBlbWl0RXZlbnQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmNvbCAmJiB0aGlzLmNvbC5kYXRhVHlwZSA9PSAnbnVtYmVyJykge1xuICAgICAgbGV0IHMgPSB0aGlzLm15SW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSBhcyBzdHJpbmc7XG4gICAgICBpZiAocy5tYXRjaCgvXlswLTldKyQvKSkge1xuICAgICAgICB0aGlzLmRhdGFbdGhpcy5wcm9wXSA9IHBhcnNlSW50KHRoaXMubXlJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVtaXRFdmVudCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm15SW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMuZGF0YVt0aGlzLnByb3BdO1xuICAgICAgfVxuICAgIH0gZWxzZSAgaWYgKHRoaXMuY29sICYmIHRoaXMuY29sLmRhdGFUeXBlID09ICdmbG9hdCcpIHtcbiAgICAgIGxldCBzID0gdGhpcy5teUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgYXMgc3RyaW5nO1xuICAgICAgaWYgKHMubWF0Y2goL15bMC05XStcXC57MCwxfVswLTldKiQvKSkge1xuICAgICAgICB0aGlzLmRhdGFbdGhpcy5wcm9wXSA9IHBhcnNlRmxvYXQodGhpcy5teUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW1pdEV2ZW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubXlJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy5kYXRhW3RoaXMucHJvcF07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbCAmJiB0aGlzLmNvbC5kYXRhVHlwZSA9PSAnZGF0ZScpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBkPSBuZXcgRGF0ZSh0aGlzLm15SW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSkudG9JU09TdHJpbmcoKS5yZXBsYWNlKC9ULisvLCcnKTtcbiAgICAgICAgdGhpcy5kYXRhW3RoaXMucHJvcF0gPSBkO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIGVtaXRFdmVudCA9IGZhbHNlOyBcbiAgICAgICAgdGhpcy5teUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLmRhdGFbdGhpcy5wcm9wXTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuY29sICYmICh0aGlzLmNvbC5kYXRhVHlwZSA9PSAnYm9vbGVhbicgfHwgdGhpcy5jb2wuZGF0YVR5cGUgPT0gJ2Jvb2wnKSkge1xuICAgICAgdGhpcy5kYXRhW3RoaXMucHJvcF0gPSB0aGlzLm15SW5wdXQubmF0aXZlRWxlbWVudC5jaGVja2VkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGFbdGhpcy5wcm9wXSA9IHRoaXMubXlJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBcbiAgICBpZiAoZW1pdEV2ZW50KSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnRU1JVCBkYXRhQ2hhbmdlJyx0aGlzLmRhdGEpO1xuICAgICAgdGhpcy5kYXRhQ2hhbmdlLmVtaXQodGhpcy5kYXRhKTtcbiAgICAgIGlmICh0aGlzLm15R3JpZCAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMubXlHcmlkLl9kYXRhQ2hhbmdlKHRoaXMuZGF0YSk7XG4gIFxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgfVxuXG4gIG9uQ2hhbmdlQ2hlY2tib3ggKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdlbGVtJyx0aGlzLm15SW5wdXRDaGVja2JveC5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLmRhdGFbdGhpcy5wcm9wXSA9IHRoaXMubXlJbnB1dENoZWNrYm94Lm5hdGl2ZUVsZW1lbnQuY2hlY2tlZDtcbiAgICAvLyBjb25zb2xlLmxvZygnRU1JVCBkYXRhQ2hhbmdlJyx0aGlzLmRhdGEpO1xuICAgIHRoaXMuZGF0YUNoYW5nZS5lbWl0KHRoaXMuZGF0YSk7XG4gICAgaWYgKHRoaXMubXlHcmlkICE9IG51bGwpIHtcbiAgICAgIHRoaXMubXlHcmlkLl9kYXRhQ2hhbmdlKHRoaXMuZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIC8vIGNvbnNvbGUubG9nKCdEYXRhR3JpZENlbGxlZGl0SXRlbSBuZ09uQ2hhbmdlcycsY2hhbmdlcylcbiAgfVxuXG59XG4iLCI8ZGl2ICpuZ0lmPVwiIWNvbCB8fCBjb2wuZGF0YVR5cGUgIT0gJ2Jvb2xlYW4nXCI+XG4gICAgPCEtLSAoa2V5dXApPVwib25DaGFuZ2UoKVwiIChrZXlwcmVzcyk9XCJvblByZXNzKCRFdmVudClcIiAtLT5cbiAgICA8aW5wdXQgI215SW5wdXQgdHlwZT1cInRleHRcIiBbKHZhbHVlKV09XCJkYXRhW3Byb3BdXCIgKGtleXByZXNzKT1cIm9uUHJlc3MoJGV2ZW50KVwiIChjaGFuZ2UpPVwib25DaGFuZ2UoKVwiPlxuPC9kaXY+XG48ZGl2ICpuZ0lmPVwiY29sICYmIGNvbC5kYXRhVHlwZSA9PSAnYm9vbGVhbidcIj5cbiAgICA8bGFiZWw+XG4gICAgICAgIDxpbnB1dCAjbXlJbnB1dENoZWNrYm94IHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwiZGF0YVtjb2wucHJvcF1cIiAoY2hhbmdlKT1cIm9uQ2hhbmdlQ2hlY2tib3goKVwiIC8+XG4gICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICA8L2xhYmVsPlxuPC9kaXY+Il19