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
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
//export var  M;
export class MaDataGridModule {
}
MaDataGridModule.ɵfac = function MaDataGridModule_Factory(t) { return new (t || MaDataGridModule)(); };
MaDataGridModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: MaDataGridModule });
MaDataGridModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FormsModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MaDataGridModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MaAnchorGridCellDirective,
                    DataGridCellSelectorComponent,
                    DataGridTemplateCellComponent,
                    DataGridPipePipe,
                    MaGridFilterComponent,
                    DataGridHeadFilterComponent,
                    DataGridOpFilterComponent,
                    DataGridPickerDateComponent,
                    DataGridCellBooleanComponent,
                    MaGridCellTemplateDirective,
                    DataGridCelleditItemComponent,
                    DataGridCellSelectorComponent,
                    MaDataGridComponent
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MaDataGridModule, { declarations: [MaAnchorGridCellDirective,
        DataGridCellSelectorComponent,
        DataGridTemplateCellComponent,
        DataGridPipePipe,
        MaGridFilterComponent,
        DataGridHeadFilterComponent,
        DataGridOpFilterComponent,
        DataGridPickerDateComponent,
        DataGridCellBooleanComponent,
        MaGridCellTemplateDirective,
        DataGridCelleditItemComponent,
        DataGridCellSelectorComponent,
        MaDataGridComponent], imports: [CommonModule,
        FormsModule], exports: [
        /* Ajouter CommonModule pour éviter les erreurs
            Can't bind to 'ngClass' since it isn't a known property */
        MaDataGridComponent,
        MaGridFilterComponent] }); })();
i0.ɵɵsetComponentScope(MaDataGridComponent, [i1.NgIf, MaGridFilterComponent, i1.NgForOf, i1.NgClass, i1.NgSwitch, i1.NgSwitchCase, DataGridCellSelectorComponent, i1.NgSwitchDefault, DataGridHeadFilterComponent,
    DataGridTemplateCellComponent,
    DataGridCelleditItemComponent,
    DataGridCellBooleanComponent], [DataGridPipePipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtZGF0YS1ncmlkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL21hLWRhdGEtZ3JpZC9zcmMvbGliL21hLWRhdGEtZ3JpZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFhLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN2RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUN2SCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDakgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDakgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDM0csT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQ3BILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzNGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQ3ZILE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDOzs7QUFnQ3ZILGdCQUFnQjtBQUNoQixNQUFNLE9BQU8sZ0JBQWdCOztnRkFBaEIsZ0JBQWdCO2tFQUFoQixnQkFBZ0I7c0VBYmxCO1lBQ1AsWUFBWTtZQUNaLFdBQVc7U0FDWjt1RkFVVSxnQkFBZ0I7Y0E5QjVCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBRVoseUJBQXlCO29CQUN6Qiw2QkFBNkI7b0JBQzdCLDZCQUE2QjtvQkFDN0IsZ0JBQWdCO29CQUNoQixxQkFBcUI7b0JBQ3JCLDJCQUEyQjtvQkFDM0IseUJBQXlCO29CQUN6QiwyQkFBMkI7b0JBQzNCLDRCQUE0QjtvQkFDNUIsMkJBQTJCO29CQUMzQiw2QkFBNkI7b0JBQzdCLDZCQUE2QjtvQkFDN0IsbUJBQW1CO2lCQUNwQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO2lCQUNaO2dCQUNELE9BQU8sRUFBRTtvQkFDUDtrRkFDOEQ7b0JBQzlELG1CQUFtQjtvQkFDbkIscUJBQXFCO2lCQUV0QjthQUNGOzt3RkFFWSxnQkFBZ0IsbUJBM0J6Qix5QkFBeUI7UUFDekIsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3QixnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLDJCQUEyQjtRQUMzQix5QkFBeUI7UUFDekIsMkJBQTJCO1FBQzNCLDRCQUE0QjtRQUM1QiwyQkFBMkI7UUFDM0IsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3QixtQkFBbUIsYUFHbkIsWUFBWTtRQUNaLFdBQVc7UUFHWDtzRUFDOEQ7UUFDOUQsbUJBQW1CO1FBQ25CLHFCQUFxQjt1QkFWckIsbUJBQW1CLFlBUm5CLHFCQUFxQix3REFPckIsNkJBQTZCLHNCQU43QiwyQkFBMkI7SUFIM0IsNkJBQTZCO0lBUTdCLDZCQUE2QjtJQUY3Qiw0QkFBNEIsSUFMNUIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZENvbXBvbmVudCB9IGZyb20gJy4vbWEtZGF0YS1ncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYUFuY2hvckdyaWRDZWxsRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL21hLWFuY2hvci1ncmlkLWNlbGwuZGlyZWN0aXZlJztcbmltcG9ydCB7IERhdGFHcmlkVGVtcGxhdGVDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RhdGEtZ3JpZC10ZW1wbGF0ZS1jZWxsL2RhdGEtZ3JpZC10ZW1wbGF0ZS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhR3JpZFBpcGVQaXBlIH0gZnJvbSAnLi9waXBlcy9kYXRhLWdyaWQtcGlwZS5waXBlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYUdyaWRGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL21hLWdyaWQtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhR3JpZEhlYWRGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS1ncmlkLWhlYWQtZmlsdGVyL2RhdGEtZ3JpZC1oZWFkLWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YUdyaWRQaWNrZXJEYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RhdGEtZ3JpZC1waWNrZXItZGF0ZS9kYXRhLWdyaWQtcGlja2VyLWRhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFHcmlkT3BGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS1ncmlkLW9wLWZpbHRlci9kYXRhLWdyaWQtb3AtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERhdGFHcmlkQ2VsbEJvb2xlYW5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS1ncmlkLWNlbGwtYm9vbGVhbi9kYXRhLWdyaWQtY2VsbC1ib29sZWFuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYUdyaWRDZWxsVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbWEtZ3JpZC1jZWxsLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXRhR3JpZENlbGxlZGl0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kYXRhLWdyaWQtY2VsbGVkaXQtaXRlbS9kYXRhLWdyaWQtY2VsbGVkaXQtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YUdyaWRDZWxsU2VsZWN0b3JDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS1ncmlkLWNlbGwtc2VsZWN0b3IvZGF0YS1ncmlkLWNlbGwtc2VsZWN0b3IuY29tcG9uZW50JztcbmltcG9ydCAqIGFzIE0gZnJvbSAnbWF0ZXJpYWxpemUtY3NzJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgXG4gICAgTWFBbmNob3JHcmlkQ2VsbERpcmVjdGl2ZSwgXG4gICAgRGF0YUdyaWRDZWxsU2VsZWN0b3JDb21wb25lbnQsXG4gICAgRGF0YUdyaWRUZW1wbGF0ZUNlbGxDb21wb25lbnQsIFxuICAgIERhdGFHcmlkUGlwZVBpcGUsXG4gICAgTWFHcmlkRmlsdGVyQ29tcG9uZW50LFxuICAgIERhdGFHcmlkSGVhZEZpbHRlckNvbXBvbmVudCxcbiAgICBEYXRhR3JpZE9wRmlsdGVyQ29tcG9uZW50LFxuICAgIERhdGFHcmlkUGlja2VyRGF0ZUNvbXBvbmVudCxcbiAgICBEYXRhR3JpZENlbGxCb29sZWFuQ29tcG9uZW50LFxuICAgIE1hR3JpZENlbGxUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBEYXRhR3JpZENlbGxlZGl0SXRlbUNvbXBvbmVudCxcbiAgICBEYXRhR3JpZENlbGxTZWxlY3RvckNvbXBvbmVudCxcbiAgICBNYURhdGFHcmlkQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC8qIEFqb3V0ZXIgQ29tbW9uTW9kdWxlIHBvdXIgw6l2aXRlciBsZXMgZXJyZXVycyBcbiAgICAgICAgQ2FuJ3QgYmluZCB0byAnbmdDbGFzcycgc2luY2UgaXQgaXNuJ3QgYSBrbm93biBwcm9wZXJ0eSAqL1xuICAgIE1hRGF0YUdyaWRDb21wb25lbnQsXG4gICAgTWFHcmlkRmlsdGVyQ29tcG9uZW50XG4gICAgXG4gIF1cbn0pXG4vL2V4cG9ydCB2YXIgIE07XG5leHBvcnQgY2xhc3MgTWFEYXRhR3JpZE1vZHVsZSB7IH1cbiJdfQ==