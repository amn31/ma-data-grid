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
import * as i0 from "@angular/core";
export class MaDataGridModule {
}
MaDataGridModule.ɵmod = i0.ɵɵdefineNgModule({ type: MaDataGridModule });
MaDataGridModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MaDataGridModule_Factory(t) { return new (t || MaDataGridModule)(); }, imports: [[
            CommonModule,
            FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MaDataGridModule, { declarations: [MaDataGridComponent,
        MaAnchorGridCellDirective,
        DataGridTemplateCellComponent,
        DataGridPipePipe,
        MaGridFilterComponent,
        DataGridHeadFilterComponent,
        DataGridOpFilterComponent,
        DataGridPickerDateComponent,
        DataGridCellBooleanComponent,
        MaGridCellTemplateDirective], imports: [CommonModule,
        FormsModule], exports: [
        /* Ajouter CommonModule pour éviter les erreurs
            Can't bind to 'ngClass' since it isn't a known property */
        MaDataGridComponent,
        MaGridFilterComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MaDataGridModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtZGF0YS1ncmlkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9NeUhvbWUvYW5kcm9pZC93b3Jrc3BhY2UvZ2l0L21hLW5nLWRhdGFncmlkL3Byb2plY3RzL21hLWRhdGEtZ3JpZC9zcmMvIiwic291cmNlcyI6WyJsaWIvbWEtZGF0YS1ncmlkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWEsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQ3ZILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUNqSCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUNqSCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUMzRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDcEgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sOENBQThDLENBQUM7O0FBMEIzRixNQUFNLE9BQU8sZ0JBQWdCOztvREFBaEIsZ0JBQWdCOytHQUFoQixnQkFBZ0Isa0JBWGxCO1lBQ1AsWUFBWTtZQUNaLFdBQVc7U0FDWjt3RkFRVSxnQkFBZ0IsbUJBdEJ6QixtQkFBbUI7UUFDbkIseUJBQXlCO1FBQ3pCLDZCQUE2QjtRQUM3QixnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLDJCQUEyQjtRQUMzQix5QkFBeUI7UUFDekIsMkJBQTJCO1FBQzNCLDRCQUE0QjtRQUM1QiwyQkFBMkIsYUFHM0IsWUFBWTtRQUNaLFdBQVc7UUFHWDtzRUFDOEQ7UUFDOUQsbUJBQW1CO1FBQ25CLHFCQUFxQjtrREFHWixnQkFBZ0I7Y0F4QjVCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osbUJBQW1CO29CQUNuQix5QkFBeUI7b0JBQ3pCLDZCQUE2QjtvQkFDN0IsZ0JBQWdCO29CQUNoQixxQkFBcUI7b0JBQ3JCLDJCQUEyQjtvQkFDM0IseUJBQXlCO29CQUN6QiwyQkFBMkI7b0JBQzNCLDRCQUE0QjtvQkFDNUIsMkJBQTJCO2lCQUM1QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO2lCQUNaO2dCQUNELE9BQU8sRUFBRTtvQkFDUDtrRkFDOEQ7b0JBQzlELG1CQUFtQjtvQkFDbkIscUJBQXFCO2lCQUN0QjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZENvbXBvbmVudCB9IGZyb20gJy4vbWEtZGF0YS1ncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYUFuY2hvckdyaWRDZWxsRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL21hLWFuY2hvci1ncmlkLWNlbGwuZGlyZWN0aXZlJztcbmltcG9ydCB7IERhdGFHcmlkVGVtcGxhdGVDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RhdGEtZ3JpZC10ZW1wbGF0ZS1jZWxsL2RhdGEtZ3JpZC10ZW1wbGF0ZS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhR3JpZFBpcGVQaXBlIH0gZnJvbSAnLi9waXBlcy9kYXRhLWdyaWQtcGlwZS5waXBlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYUdyaWRGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL21hLWdyaWQtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhR3JpZEhlYWRGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS1ncmlkLWhlYWQtZmlsdGVyL2RhdGEtZ3JpZC1oZWFkLWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YUdyaWRQaWNrZXJEYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RhdGEtZ3JpZC1waWNrZXItZGF0ZS9kYXRhLWdyaWQtcGlja2VyLWRhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFHcmlkT3BGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS1ncmlkLW9wLWZpbHRlci9kYXRhLWdyaWQtb3AtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERhdGFHcmlkQ2VsbEJvb2xlYW5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS1ncmlkLWNlbGwtYm9vbGVhbi9kYXRhLWdyaWQtY2VsbC1ib29sZWFuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYUdyaWRDZWxsVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbWEtZ3JpZC1jZWxsLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1hRGF0YUdyaWRDb21wb25lbnQsIFxuICAgIE1hQW5jaG9yR3JpZENlbGxEaXJlY3RpdmUsIFxuICAgIERhdGFHcmlkVGVtcGxhdGVDZWxsQ29tcG9uZW50LCBcbiAgICBEYXRhR3JpZFBpcGVQaXBlLFxuICAgIE1hR3JpZEZpbHRlckNvbXBvbmVudCxcbiAgICBEYXRhR3JpZEhlYWRGaWx0ZXJDb21wb25lbnQsXG4gICAgRGF0YUdyaWRPcEZpbHRlckNvbXBvbmVudCxcbiAgICBEYXRhR3JpZFBpY2tlckRhdGVDb21wb25lbnQsXG4gICAgRGF0YUdyaWRDZWxsQm9vbGVhbkNvbXBvbmVudCxcbiAgICBNYUdyaWRDZWxsVGVtcGxhdGVEaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLyogQWpvdXRlciBDb21tb25Nb2R1bGUgcG91ciDDqXZpdGVyIGxlcyBlcnJldXJzIFxuICAgICAgICBDYW4ndCBiaW5kIHRvICduZ0NsYXNzJyBzaW5jZSBpdCBpc24ndCBhIGtub3duIHByb3BlcnR5ICovXG4gICAgTWFEYXRhR3JpZENvbXBvbmVudCxcbiAgICBNYUdyaWRGaWx0ZXJDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNYURhdGFHcmlkTW9kdWxlIHsgfVxuIl19