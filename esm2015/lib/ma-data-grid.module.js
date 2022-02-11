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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtZGF0YS1ncmlkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9NeVRlbXAvbmcxMGEvcHJvamVjdHMvbWEtZGF0YS1ncmlkL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9tYS1kYXRhLWdyaWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdkYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDdkgsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQ2pILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQ2pILE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQzNHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUNwSCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUMzRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUN2SCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQThCdkgsZ0JBQWdCO0FBQ2hCLE1BQU0sT0FBTyxnQkFBZ0I7OztZQTVCNUIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixtQkFBbUI7b0JBQ25CLHlCQUF5QjtvQkFDekIsNkJBQTZCO29CQUM3QixnQkFBZ0I7b0JBQ2hCLHFCQUFxQjtvQkFDckIsMkJBQTJCO29CQUMzQix5QkFBeUI7b0JBQ3pCLDJCQUEyQjtvQkFDM0IsNEJBQTRCO29CQUM1QiwyQkFBMkI7b0JBQzNCLDZCQUE2QjtvQkFDN0IsNkJBQTZCO2lCQUM5QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO2lCQUNaO2dCQUNELE9BQU8sRUFBRTtvQkFDUDtrRkFDOEQ7b0JBQzlELG1CQUFtQjtvQkFDbkIscUJBQXFCO2lCQUV0QjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZENvbXBvbmVudCB9IGZyb20gJy4vbWEtZGF0YS1ncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYUFuY2hvckdyaWRDZWxsRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL21hLWFuY2hvci1ncmlkLWNlbGwuZGlyZWN0aXZlJztcbmltcG9ydCB7IERhdGFHcmlkVGVtcGxhdGVDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RhdGEtZ3JpZC10ZW1wbGF0ZS1jZWxsL2RhdGEtZ3JpZC10ZW1wbGF0ZS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhR3JpZFBpcGVQaXBlIH0gZnJvbSAnLi9waXBlcy9kYXRhLWdyaWQtcGlwZS5waXBlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYUdyaWRGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL21hLWdyaWQtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhR3JpZEhlYWRGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS1ncmlkLWhlYWQtZmlsdGVyL2RhdGEtZ3JpZC1oZWFkLWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YUdyaWRQaWNrZXJEYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RhdGEtZ3JpZC1waWNrZXItZGF0ZS9kYXRhLWdyaWQtcGlja2VyLWRhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFHcmlkT3BGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS1ncmlkLW9wLWZpbHRlci9kYXRhLWdyaWQtb3AtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERhdGFHcmlkQ2VsbEJvb2xlYW5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS1ncmlkLWNlbGwtYm9vbGVhbi9kYXRhLWdyaWQtY2VsbC1ib29sZWFuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYUdyaWRDZWxsVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbWEtZ3JpZC1jZWxsLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXRhR3JpZENlbGxlZGl0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kYXRhLWdyaWQtY2VsbGVkaXQtaXRlbS9kYXRhLWdyaWQtY2VsbGVkaXQtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YUdyaWRDZWxsU2VsZWN0b3JDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS1ncmlkLWNlbGwtc2VsZWN0b3IvZGF0YS1ncmlkLWNlbGwtc2VsZWN0b3IuY29tcG9uZW50JztcbmltcG9ydCAqIGFzIE0gZnJvbSAnbWF0ZXJpYWxpemUtY3NzJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTWFEYXRhR3JpZENvbXBvbmVudCwgXG4gICAgTWFBbmNob3JHcmlkQ2VsbERpcmVjdGl2ZSwgXG4gICAgRGF0YUdyaWRUZW1wbGF0ZUNlbGxDb21wb25lbnQsIFxuICAgIERhdGFHcmlkUGlwZVBpcGUsXG4gICAgTWFHcmlkRmlsdGVyQ29tcG9uZW50LFxuICAgIERhdGFHcmlkSGVhZEZpbHRlckNvbXBvbmVudCxcbiAgICBEYXRhR3JpZE9wRmlsdGVyQ29tcG9uZW50LFxuICAgIERhdGFHcmlkUGlja2VyRGF0ZUNvbXBvbmVudCxcbiAgICBEYXRhR3JpZENlbGxCb29sZWFuQ29tcG9uZW50LFxuICAgIE1hR3JpZENlbGxUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBEYXRhR3JpZENlbGxlZGl0SXRlbUNvbXBvbmVudCxcbiAgICBEYXRhR3JpZENlbGxTZWxlY3RvckNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAvKiBBam91dGVyIENvbW1vbk1vZHVsZSBwb3VyIMOpdml0ZXIgbGVzIGVycmV1cnMgXG4gICAgICAgIENhbid0IGJpbmQgdG8gJ25nQ2xhc3MnIHNpbmNlIGl0IGlzbid0IGEga25vd24gcHJvcGVydHkgKi9cbiAgICBNYURhdGFHcmlkQ29tcG9uZW50LFxuICAgIE1hR3JpZEZpbHRlckNvbXBvbmVudFxuICAgIFxuICBdXG59KVxuLy9leHBvcnQgdmFyICBNO1xuZXhwb3J0IGNsYXNzIE1hRGF0YUdyaWRNb2R1bGUgeyB9XG4iXX0=