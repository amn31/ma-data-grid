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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLXBpcGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9NeVRlbXAvbmcxMGEvcHJvamVjdHMvbWEtZGF0YS1ncmlkL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9kYXRhLWdyaWQtcGlwZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BELE1BQU0sT0FBTyxnQkFBZ0I7SUFFM0IsU0FBUyxDQUFDLEtBQVUsRUFBRSxHQUFTLEVBQUUsR0FBUTtRQUN2QyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUU7WUFDWixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQTtTQUMvQjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7O1lBVkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxnQkFBZ0I7YUFDdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ21hRGF0YUdyaWRQaXBlJ1xufSlcbmV4cG9ydCBjbGFzcyBEYXRhR3JpZFBpcGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIHJvdz86IGFueSwgY29sPzphbnkpOiB1bmtub3duIHtcbiAgICBpZiAoY29sLnBpcGUpIHtcbiAgICAgIHJldHVybiBjb2wucGlwZSh2YWx1ZSxyb3csY29sKVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxufVxuIl19