import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class DataGridPipePipe {
    transform(value, row, col) {
        if (col.pipe) {
            return col.pipe(value, row, col);
        }
        return value;
    }
}
DataGridPipePipe.ɵfac = function DataGridPipePipe_Factory(t) { return new (t || DataGridPipePipe)(); };
DataGridPipePipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "maDataGridPipe", type: DataGridPipePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataGridPipePipe, [{
        type: Pipe,
        args: [{
                name: 'maDataGridPipe'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLXBpcGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hLWRhdGEtZ3JpZC9zcmMvbGliL3BpcGVzL2RhdGEtZ3JpZC1waXBlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBS3BELE1BQU0sT0FBTyxnQkFBZ0I7SUFFM0IsU0FBUyxDQUFDLEtBQVUsRUFBRSxHQUFTLEVBQUUsR0FBUTtRQUN2QyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUU7WUFDWixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQTtTQUMvQjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0ZBUFUsZ0JBQWdCO3VGQUFoQixnQkFBZ0I7dUZBQWhCLGdCQUFnQjtjQUg1QixJQUFJO2VBQUM7Z0JBQ0osSUFBSSxFQUFFLGdCQUFnQjthQUN2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnbWFEYXRhR3JpZFBpcGUnXG59KVxuZXhwb3J0IGNsYXNzIERhdGFHcmlkUGlwZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgcm93PzogYW55LCBjb2w/OmFueSk6IHVua25vd24ge1xuICAgIGlmIChjb2wucGlwZSkge1xuICAgICAgcmV0dXJuIGNvbC5waXBlKHZhbHVlLHJvdyxjb2wpXG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG59XG4iXX0=