import { ViewContainerRef } from '@angular/core';
import { Directive } from '@angular/core';
export class MaGridCellTemplateDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
MaGridCellTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[libMaGridCellTemplate]'
            },] }
];
MaGridCellTemplateDirective.ctorParameters = () => [
    { type: ViewContainerRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtZ3JpZC1jZWxsLXRlbXBsYXRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9NeUhvbWUvYW5kcm9pZC93b3Jrc3BhY2UvZ2l0L21hLW5nLWRhdGFncmlkL3Byb2plY3RzL21hLWRhdGEtZ3JpZC9zcmMvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9tYS1ncmlkLWNlbGwtdGVtcGxhdGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzFDLE1BQU0sT0FBTywyQkFBMkI7SUFFdEMsWUFBbUIsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBSSxDQUFDOzs7WUFMM0QsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7YUFDcEM7OztZQUxRLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbGliTWFHcmlkQ2VsbFRlbXBsYXRlXSdcbn0pXG5leHBvcnQgY2xhc3MgTWFHcmlkQ2VsbFRlbXBsYXRlRGlyZWN0aXZlIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XG5cbn1cbiJdfQ==