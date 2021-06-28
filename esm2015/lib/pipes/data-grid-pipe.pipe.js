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
DataGridPipePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "maDataGridPipe", type: DataGridPipePipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DataGridPipePipe, [{
        type: Pipe,
        args: [{
                name: 'maDataGridPipe'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLXBpcGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9NeUhvbWUvYW5kcm9pZC93b3Jrc3BhY2UvZ2l0L21hLW5nLWRhdGFncmlkL3Byb2plY3RzL21hLWRhdGEtZ3JpZC9zcmMvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvZGF0YS1ncmlkLXBpcGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFLcEQsTUFBTSxPQUFPLGdCQUFnQjtJQUUzQixTQUFTLENBQUMsS0FBVSxFQUFFLEdBQVMsRUFBRSxHQUFRO1FBQ3ZDLElBQUksR0FBRyxDQUFDLElBQUksRUFBRTtZQUNaLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQy9CO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnRkFQVSxnQkFBZ0I7eUVBQWhCLGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBSDVCLElBQUk7ZUFBQztnQkFDSixJQUFJLEVBQUUsZ0JBQWdCO2FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdtYURhdGFHcmlkUGlwZSdcbn0pXG5leHBvcnQgY2xhc3MgRGF0YUdyaWRQaXBlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCByb3c/OiBhbnksIGNvbD86YW55KTogdW5rbm93biB7XG4gICAgaWYgKGNvbC5waXBlKSB7XG4gICAgICByZXR1cm4gY29sLnBpcGUodmFsdWUscm93LGNvbClcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbn1cbiJdfQ==