import { NgModule } from '@angular/core';
import { MaDataGridComponent } from './ma-data-grid.component';
import { MaAnchorGridCellDirective } from './directives/ma-anchor-grid-cell.directive';
import { DataGridTemplateCellComponent } from './components/data-grid-template-cell/data-grid-template-cell.component';
import { DataGridPipePipe } from './pipes/data-grid-pipe.pipe';
import { CommonModule } from '@angular/common';
import { MaGridFilterComponent } from './ma-grid-filter.component';
import { DataGridHeadFilterComponent } from './components/data-grid-head-filter/data-grid-head-filter.component';
import { DataGridPickerDateComponent } from './components/data-grid-picker-date/data-grid-picker-date.component';
import { DataGridOpFilterComponent } from './components/data-grid-op-filter/data-grid-op-filter.component';
import { FormsModule } from '@angular/forms';
import { DataGridCellBooleanComponent } from './components/data-grid-cell-boolean/data-grid-cell-boolean.component';
import { MaGridCellTemplateDirective } from './directives/ma-grid-cell-template.directive';
export class MaDataGridModule {
}
MaDataGridModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MaDataGridComponent,
                    MaAnchorGridCellDirective,
                    DataGridTemplateCellComponent,
                    DataGridPipePipe,
                    MaGridFilterComponent,
                    DataGridHeadFilterComponent,
                    DataGridOpFilterComponent,
                    DataGridPickerDateComponent,
                    DataGridCellBooleanComponent,
                    MaGridCellTemplateDirective
                ],
                imports: [
                    CommonModule,
                    FormsModule
                ],
                exports: [
                    /* Ajouter CommonModule pour éviter les erreurs
                        Can't bind to 'ngClass' since it isn't a known property */
                    MaDataGridComponent,
                    MaGridFilterComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtZGF0YS1ncmlkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9NeUhvbWUvYW5kcm9pZC93b3Jrc3BhY2UvZ2l0L21hLW5nLWRhdGFncmlkL3Byb2plY3RzL21hLWRhdGEtZ3JpZC9zcmMvIiwic291cmNlcyI6WyJsaWIvbWEtZGF0YS1ncmlkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWEsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQ3ZILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUNqSCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUNqSCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUMzRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDcEgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUEwQjNGLE1BQU0sT0FBTyxnQkFBZ0I7OztZQXhCNUIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixtQkFBbUI7b0JBQ25CLHlCQUF5QjtvQkFDekIsNkJBQTZCO29CQUM3QixnQkFBZ0I7b0JBQ2hCLHFCQUFxQjtvQkFDckIsMkJBQTJCO29CQUMzQix5QkFBeUI7b0JBQ3pCLDJCQUEyQjtvQkFDM0IsNEJBQTRCO29CQUM1QiwyQkFBMkI7aUJBQzVCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7aUJBQ1o7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQO2tGQUM4RDtvQkFDOUQsbUJBQW1CO29CQUNuQixxQkFBcUI7aUJBQ3RCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYURhdGFHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi9tYS1kYXRhLWdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IE1hQW5jaG9yR3JpZENlbGxEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbWEtYW5jaG9yLWdyaWQtY2VsbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGF0YUdyaWRUZW1wbGF0ZUNlbGxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS1ncmlkLXRlbXBsYXRlLWNlbGwvZGF0YS1ncmlkLXRlbXBsYXRlLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFHcmlkUGlwZVBpcGUgfSBmcm9tICcuL3BpcGVzL2RhdGEtZ3JpZC1waXBlLnBpcGUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hR3JpZEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vbWEtZ3JpZC1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFHcmlkSGVhZEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kYXRhLWdyaWQtaGVhZC1maWx0ZXIvZGF0YS1ncmlkLWhlYWQtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhR3JpZFBpY2tlckRhdGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS1ncmlkLXBpY2tlci1kYXRlL2RhdGEtZ3JpZC1waWNrZXItZGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YUdyaWRPcEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kYXRhLWdyaWQtb3AtZmlsdGVyL2RhdGEtZ3JpZC1vcC1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRGF0YUdyaWRDZWxsQm9vbGVhbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kYXRhLWdyaWQtY2VsbC1ib29sZWFuL2RhdGEtZ3JpZC1jZWxsLWJvb2xlYW4uY29tcG9uZW50JztcbmltcG9ydCB7IE1hR3JpZENlbGxUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9tYS1ncmlkLWNlbGwtdGVtcGxhdGUuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTWFEYXRhR3JpZENvbXBvbmVudCwgXG4gICAgTWFBbmNob3JHcmlkQ2VsbERpcmVjdGl2ZSwgXG4gICAgRGF0YUdyaWRUZW1wbGF0ZUNlbGxDb21wb25lbnQsIFxuICAgIERhdGFHcmlkUGlwZVBpcGUsXG4gICAgTWFHcmlkRmlsdGVyQ29tcG9uZW50LFxuICAgIERhdGFHcmlkSGVhZEZpbHRlckNvbXBvbmVudCxcbiAgICBEYXRhR3JpZE9wRmlsdGVyQ29tcG9uZW50LFxuICAgIERhdGFHcmlkUGlja2VyRGF0ZUNvbXBvbmVudCxcbiAgICBEYXRhR3JpZENlbGxCb29sZWFuQ29tcG9uZW50LFxuICAgIE1hR3JpZENlbGxUZW1wbGF0ZURpcmVjdGl2ZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAvKiBBam91dGVyIENvbW1vbk1vZHVsZSBwb3VyIMOpdml0ZXIgbGVzIGVycmV1cnMgXG4gICAgICAgIENhbid0IGJpbmQgdG8gJ25nQ2xhc3MnIHNpbmNlIGl0IGlzbid0IGEga25vd24gcHJvcGVydHkgKi9cbiAgICBNYURhdGFHcmlkQ29tcG9uZW50LFxuICAgIE1hR3JpZEZpbHRlckNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1hRGF0YUdyaWRNb2R1bGUgeyB9XG4iXX0=