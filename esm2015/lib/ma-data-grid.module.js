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
import { DataGridCelleditItemComponent } from './components/data-grid-celledit-item/data-grid-celledit-item.component';
import { DataGridCellSelectorComponent } from './components/data-grid-cell-selector/data-grid-cell-selector.component';
//export var  M;
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
                    MaGridCellTemplateDirective,
                    DataGridCelleditItemComponent,
                    DataGridCellSelectorComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtZGF0YS1ncmlkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9NeUhvbWUvYW5kcm9pZC93b3Jrc3BhY2UvZ2l0L21hLW5nLWRhdGEtZ3JpZC9wcm9qZWN0cy9tYS1kYXRhLWdyaWQvc3JjLyIsInNvdXJjZXMiOlsibGliL21hLWRhdGEtZ3JpZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFhLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN2RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUN2SCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDakgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDakgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDM0csT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQ3BILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzNGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQ3ZILE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBOEJ2SCxnQkFBZ0I7QUFDaEIsTUFBTSxPQUFPLGdCQUFnQjs7O1lBNUI1QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLG1CQUFtQjtvQkFDbkIseUJBQXlCO29CQUN6Qiw2QkFBNkI7b0JBQzdCLGdCQUFnQjtvQkFDaEIscUJBQXFCO29CQUNyQiwyQkFBMkI7b0JBQzNCLHlCQUF5QjtvQkFDekIsMkJBQTJCO29CQUMzQiw0QkFBNEI7b0JBQzVCLDJCQUEyQjtvQkFDM0IsNkJBQTZCO29CQUM3Qiw2QkFBNkI7aUJBQzlCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7aUJBQ1o7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQO2tGQUM4RDtvQkFDOUQsbUJBQW1CO29CQUNuQixxQkFBcUI7aUJBRXRCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYURhdGFHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi9tYS1kYXRhLWdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IE1hQW5jaG9yR3JpZENlbGxEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbWEtYW5jaG9yLWdyaWQtY2VsbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGF0YUdyaWRUZW1wbGF0ZUNlbGxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS1ncmlkLXRlbXBsYXRlLWNlbGwvZGF0YS1ncmlkLXRlbXBsYXRlLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFHcmlkUGlwZVBpcGUgfSBmcm9tICcuL3BpcGVzL2RhdGEtZ3JpZC1waXBlLnBpcGUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hR3JpZEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vbWEtZ3JpZC1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFHcmlkSGVhZEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kYXRhLWdyaWQtaGVhZC1maWx0ZXIvZGF0YS1ncmlkLWhlYWQtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhR3JpZFBpY2tlckRhdGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS1ncmlkLXBpY2tlci1kYXRlL2RhdGEtZ3JpZC1waWNrZXItZGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YUdyaWRPcEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kYXRhLWdyaWQtb3AtZmlsdGVyL2RhdGEtZ3JpZC1vcC1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRGF0YUdyaWRDZWxsQm9vbGVhbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kYXRhLWdyaWQtY2VsbC1ib29sZWFuL2RhdGEtZ3JpZC1jZWxsLWJvb2xlYW4uY29tcG9uZW50JztcbmltcG9ydCB7IE1hR3JpZENlbGxUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9tYS1ncmlkLWNlbGwtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IERhdGFHcmlkQ2VsbGVkaXRJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RhdGEtZ3JpZC1jZWxsZWRpdC1pdGVtL2RhdGEtZ3JpZC1jZWxsZWRpdC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhR3JpZENlbGxTZWxlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kYXRhLWdyaWQtY2VsbC1zZWxlY3Rvci9kYXRhLWdyaWQtY2VsbC1zZWxlY3Rvci5jb21wb25lbnQnO1xuaW1wb3J0ICogYXMgTSBmcm9tICdtYXRlcmlhbGl6ZS1jc3MnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNYURhdGFHcmlkQ29tcG9uZW50LCBcbiAgICBNYUFuY2hvckdyaWRDZWxsRGlyZWN0aXZlLCBcbiAgICBEYXRhR3JpZFRlbXBsYXRlQ2VsbENvbXBvbmVudCwgXG4gICAgRGF0YUdyaWRQaXBlUGlwZSxcbiAgICBNYUdyaWRGaWx0ZXJDb21wb25lbnQsXG4gICAgRGF0YUdyaWRIZWFkRmlsdGVyQ29tcG9uZW50LFxuICAgIERhdGFHcmlkT3BGaWx0ZXJDb21wb25lbnQsXG4gICAgRGF0YUdyaWRQaWNrZXJEYXRlQ29tcG9uZW50LFxuICAgIERhdGFHcmlkQ2VsbEJvb2xlYW5Db21wb25lbnQsXG4gICAgTWFHcmlkQ2VsbFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIERhdGFHcmlkQ2VsbGVkaXRJdGVtQ29tcG9uZW50LFxuICAgIERhdGFHcmlkQ2VsbFNlbGVjdG9yQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC8qIEFqb3V0ZXIgQ29tbW9uTW9kdWxlIHBvdXIgw6l2aXRlciBsZXMgZXJyZXVycyBcbiAgICAgICAgQ2FuJ3QgYmluZCB0byAnbmdDbGFzcycgc2luY2UgaXQgaXNuJ3QgYSBrbm93biBwcm9wZXJ0eSAqL1xuICAgIE1hRGF0YUdyaWRDb21wb25lbnQsXG4gICAgTWFHcmlkRmlsdGVyQ29tcG9uZW50XG4gICAgXG4gIF1cbn0pXG4vL2V4cG9ydCB2YXIgIE07XG5leHBvcnQgY2xhc3MgTWFEYXRhR3JpZE1vZHVsZSB7IH1cbiJdfQ==