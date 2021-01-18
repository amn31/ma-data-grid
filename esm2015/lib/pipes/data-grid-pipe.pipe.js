import { Pipe } from '@angular/core';
export class DataGridPipePipe {
    transform(value, row, col) {
        if (col.pipe) {
            return col.pipe(value, row, col);
        }
        return value;
    }
}
DataGridPipePipe.decorators = [
    { type: Pipe, args: [{
                name: 'maDataGridPipe'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLXBpcGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9NeUhvbWUvYW5kcm9pZC93b3Jrc3BhY2UvZ2l0L21hLW5nLWRhdGFncmlkL3Byb2plY3RzL21hLWRhdGEtZ3JpZC9zcmMvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvZGF0YS1ncmlkLXBpcGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUtwRCxNQUFNLE9BQU8sZ0JBQWdCO0lBRTNCLFNBQVMsQ0FBQyxLQUFVLEVBQUUsR0FBUyxFQUFFLEdBQVE7UUFDdkMsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO1lBQ1osT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUE7U0FDL0I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQVZGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsZ0JBQWdCO2FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdtYURhdGFHcmlkUGlwZSdcbn0pXG5leHBvcnQgY2xhc3MgRGF0YUdyaWRQaXBlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCByb3c/OiBhbnksIGNvbD86YW55KTogdW5rbm93biB7XG4gICAgaWYgKGNvbC5waXBlKSB7XG4gICAgICByZXR1cm4gY29sLnBpcGUodmFsdWUscm93LGNvbClcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbn1cbiJdfQ==