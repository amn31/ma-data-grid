import { Inject, PLATFORM_ID, ViewChild, ViewChildren } from '@angular/core';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataGridHeadFilterComponent } from './components/data-grid-head-filter/data-grid-head-filter.component';
import { MaGridFilterComponent } from './ma-grid-filter.component';
import { MaFilter } from "@amn31/filter-multiple-conditions";
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
function MaDataGridComponent_ma_data_grid_filter_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ma-data-grid-filter", 2, 3);
    i0.ɵɵlistener("searchValueChange", function MaDataGridComponent_ma_data_grid_filter_0_Template_ma_data_grid_filter_searchValueChange_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.searchValue = $event; })("filterChange", function MaDataGridComponent_ma_data_grid_filter_0_Template_ma_data_grid_filter_filterChange_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5._filterChange($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("customCSS", ctx_r0.customCSS)("searchValue", ctx_r0.searchValue)("columns", ctx_r0.columns);
} }
function MaDataGridComponent_div_1_td_4_datagrid_cell_element_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "datagrid-cell-element");
    i0.ɵɵelement(1, "ma-data-grid-cell-selector", 23);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("prop", col_r15.prop)("isHeader", true)("col", col_r15)("myGrid", ctx_r17.myGrid)("data", ctx_r17.rows_displayed);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(col_r15.title);
} }
function MaDataGridComponent_div_1_td_4_datagrid_cell_element_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "datagrid-cell-element");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(col_r15.title);
} }
function MaDataGridComponent_div_1_td_4_span_4_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 26);
    i0.ɵɵtext(1, "swap_vert");
    i0.ɵɵelementEnd();
} }
function MaDataGridComponent_div_1_td_4_span_4_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 26);
    i0.ɵɵtext(1, "arrow_drop_down");
    i0.ɵɵelementEnd();
} }
function MaDataGridComponent_div_1_td_4_span_4_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 26);
    i0.ɵɵtext(1, "arrow_drop_up");
    i0.ɵɵelementEnd();
} }
function MaDataGridComponent_div_1_td_4_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵlistener("click", function MaDataGridComponent_div_1_td_4_span_4_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r27); const col_r15 = i0.ɵɵnextContext().$implicit; const ctx_r25 = i0.ɵɵnextContext(2); return ctx_r25.sortBy(col_r15); });
    i0.ɵɵtemplate(1, MaDataGridComponent_div_1_td_4_span_4_span_1_Template, 2, 0, "span", 25);
    i0.ɵɵtemplate(2, MaDataGridComponent_div_1_td_4_span_4_span_2_Template, 2, 0, "span", 25);
    i0.ɵɵtemplate(3, MaDataGridComponent_div_1_td_4_span_4_span_3_Template, 2, 0, "span", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r19.sortedField.field != col_r15.prop);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r19.sortedField.field === col_r15.prop && ctx_r19.sortedField.reverse);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r19.sortedField.field === col_r15.prop && !ctx_r19.sortedField.reverse);
} }
const _c0 = function (a0) { return { grid_cell_first: a0 }; };
function MaDataGridComponent_div_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵelementStart(1, "datagrid-cellheader-container", 19);
    i0.ɵɵtemplate(2, MaDataGridComponent_div_1_td_4_datagrid_cell_element_2_Template, 4, 6, "datagrid-cell-element", 20);
    i0.ɵɵtemplate(3, MaDataGridComponent_div_1_td_4_datagrid_cell_element_3_Template, 2, 1, "datagrid-cell-element", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, MaDataGridComponent_div_1_td_4_span_4_Template, 4, 3, "span", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate2("", ctx_r6.customCSS, "grid_cell ", ctx_r6.customCSS, "grid_cell_title");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c0, i_r16 == 0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", col_r15.dataType == "selector");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", col_r15.dataType != "selector" && col_r15.isRowNumber !== true && col_r15.sorted === true);
} }
function MaDataGridComponent_div_1_tr_5_td_1_ma_data_grid_head_filter_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ma-data-grid-head-filter", 28, 29);
    i0.ɵɵlistener("changeHeaderFilter", function MaDataGridComponent_div_1_tr_5_td_1_ma_data_grid_head_filter_1_Template_ma_data_grid_head_filter_changeHeaderFilter_0_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r34 = i0.ɵɵnextContext(4); return ctx_r34._changeHeaderFilter($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r30 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("col", col_r30);
} }
function MaDataGridComponent_div_1_tr_5_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵtemplate(1, MaDataGridComponent_div_1_tr_5_td_1_ma_data_grid_head_filter_1_Template, 2, 1, "ma-data-grid-head-filter", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r30 = ctx.$implicit;
    const i_r31 = ctx.index;
    const ctx_r29 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate2("", ctx_r29.customCSS, "grid_cell ", ctx_r29.customCSS, "grid_cell_title");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c0, i_r31 == 0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r30.dataType && col_r30.dataType != "selector" && col_r30.headFilter !== false || col_r30.headFilter !== false && col_r30.headFilter != null && col_r30.headFilter.length > 0);
} }
function MaDataGridComponent_div_1_tr_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, MaDataGridComponent_div_1_tr_5_td_1_Template, 2, 8, "td", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("", ctx_r7.customCSS, "grid_row");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r7.columns);
} }
function MaDataGridComponent_div_1_tr_6_td_1_datagrid_cell_element_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "datagrid-cell-element", 32);
    i0.ɵɵelement(1, "ma-data-grid-cell-selector", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r43 = i0.ɵɵnextContext().$implicit;
    const row_r37 = i0.ɵɵnextContext().$implicit;
    const ctx_r48 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("prop", col_r43.prop)("col", col_r43)("myGrid", ctx_r48.myGrid)("data", row_r37);
} }
function MaDataGridComponent_div_1_tr_6_td_1_datagrid_cell_element_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "datagrid-cell-element", 32);
    i0.ɵɵelement(1, "ma-data-grid-template-cell-t1", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r43 = i0.ɵɵnextContext().$implicit;
    const row_r37 = i0.ɵɵnextContext().$implicit;
    const ctx_r49 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", col_r43.useTemplate)("prop", col_r43.prop)("col", col_r43)("myGrid", ctx_r49.myGrid)("data", row_r37);
} }
function MaDataGridComponent_div_1_tr_6_td_1_datagrid_cell_element_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "datagrid-cell-element", 32);
    i0.ɵɵelement(1, "ma-data-grid-celledit-item", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r43 = i0.ɵɵnextContext().$implicit;
    const row_r37 = i0.ɵɵnextContext().$implicit;
    const ctx_r50 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("prop", col_r43.prop)("col", col_r43)("myGrid", ctx_r50.myGrid)("data", row_r37);
} }
function MaDataGridComponent_div_1_tr_6_td_1_datagrid_cell_element_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "datagrid-cell-element", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r40 = i0.ɵɵnextContext(2).index;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i_r40);
} }
function MaDataGridComponent_div_1_tr_6_td_1_datagrid_cell_element_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "datagrid-cell-element", 32);
    i0.ɵɵelement(1, "span", 35);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r43 = i0.ɵɵnextContext().$implicit;
    const row_r37 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", row_r37[col_r43.prop], i0.ɵɵsanitizeHtml);
} }
function MaDataGridComponent_div_1_tr_6_td_1_datagrid_cell_element_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "datagrid-cell-element", 32);
    i0.ɵɵelement(1, "ma-data-grid-cell-boolean", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r43 = i0.ɵɵnextContext().$implicit;
    const row_r37 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("col", col_r43)("data", row_r37);
} }
function MaDataGridComponent_div_1_tr_6_td_1_datagrid_cell_element_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "datagrid-cell-element");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "maDataGridPipe");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r43 = i0.ɵɵnextContext().$implicit;
    const row_r37 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(2, 1, row_r37[col_r43.prop], row_r37, col_r43));
} }
const _c1 = function (a0, a1, a2) { return { "grid_cell_selected": a0, "grid_cell_end": a1, "grid_cell_first": a2 }; };
function MaDataGridComponent_div_1_tr_6_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r70 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 30);
    i0.ɵɵlistener("click", function MaDataGridComponent_div_1_tr_6_td_1_Template_td_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r70); const col_r43 = restoredCtx.$implicit; const ctx_r69 = i0.ɵɵnextContext(); const i_r40 = ctx_r69.index; const row_r37 = ctx_r69.$implicit; const ctx_r68 = i0.ɵɵnextContext(2); return ctx_r68.SelectCell(i_r40, row_r37, col_r43); });
    i0.ɵɵelementStart(1, "datagrid-cell-container", 19);
    i0.ɵɵtemplate(2, MaDataGridComponent_div_1_tr_6_td_1_datagrid_cell_element_2_Template, 2, 4, "datagrid-cell-element", 31);
    i0.ɵɵtemplate(3, MaDataGridComponent_div_1_tr_6_td_1_datagrid_cell_element_3_Template, 2, 5, "datagrid-cell-element", 31);
    i0.ɵɵtemplate(4, MaDataGridComponent_div_1_tr_6_td_1_datagrid_cell_element_4_Template, 2, 4, "datagrid-cell-element", 31);
    i0.ɵɵtemplate(5, MaDataGridComponent_div_1_tr_6_td_1_datagrid_cell_element_5_Template, 2, 1, "datagrid-cell-element", 31);
    i0.ɵɵtemplate(6, MaDataGridComponent_div_1_tr_6_td_1_datagrid_cell_element_6_Template, 2, 1, "datagrid-cell-element", 31);
    i0.ɵɵtemplate(7, MaDataGridComponent_div_1_tr_6_td_1_datagrid_cell_element_7_Template, 2, 2, "datagrid-cell-element", 31);
    i0.ɵɵtemplate(8, MaDataGridComponent_div_1_tr_6_td_1_datagrid_cell_element_8_Template, 3, 5, "datagrid-cell-element", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r43 = ctx.$implicit;
    const isFirstCol_r46 = ctx.first;
    const isLastCol_r47 = ctx.last;
    const i_r40 = i0.ɵɵnextContext().index;
    const ctx_r42 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate2("", ctx_r42.customCSS, "grid_cell ", col_r43.cssClass, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(12, _c1, i_r40 == ctx_r42.row_selected && col_r43.prop == ctx_r42.cell_selected, isLastCol_r47, isFirstCol_r46));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", col_r43.dataType == "selector");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", col_r43.useTemplate != null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", col_r43.canEdit === true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", col_r43.isRowNumber === true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", col_r43.isRowHTML === true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", col_r43.useTemplate == null && col_r43.canEdit !== true && (col_r43.dataType == "boolean" || col_r43.dataType == "bool"));
} }
const _c2 = function (a0, a1, a2, a3, a4) { return { "grid_row_selected": a0, "CSSclassEven": a1, "CSSclassOdd": a2, "grid_row_first": a3, "grid_row_end": a4 }; };
function MaDataGridComponent_div_1_tr_6_Template(rf, ctx) { if (rf & 1) {
    const _r73 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 30);
    i0.ɵɵlistener("click", function MaDataGridComponent_div_1_tr_6_Template_tr_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r73); const i_r40 = restoredCtx.index; const row_r37 = restoredCtx.$implicit; const ctx_r72 = i0.ɵɵnextContext(2); return ctx_r72.SelectRow(i_r40, row_r37); });
    i0.ɵɵtemplate(1, MaDataGridComponent_div_1_tr_6_td_1_Template, 9, 16, "td", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const isLastRow_r38 = ctx.last;
    const pair_r39 = ctx.even;
    const i_r40 = ctx.index;
    const isFirstRow_r41 = ctx.first;
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("", ctx_r8.customCSS, "grid_row");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction5(5, _c2, i_r40 == ctx_r8.row_selected && !ctx_r8.cell_selected, pair_r39, !pair_r39, isFirstRow_r41, isLastRow_r38));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r8.columns);
} }
function MaDataGridComponent_div_1_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "s");
    i0.ɵɵelementEnd();
} }
const _c3 = function (a0, a1) { return { "disabled": a0, "": a1 }; };
function MaDataGridComponent_div_1_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r75 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 30);
    i0.ɵɵlistener("click", function MaDataGridComponent_div_1_li_14_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r75); const ctx_r74 = i0.ɵɵnextContext(2); return ctx_r74.FastDecrementPage(); });
    i0.ɵɵelementStart(1, "a", 37);
    i0.ɵɵelementStart(2, "i", 38);
    i0.ɵɵtext(3, "fast_rewind");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c3, ctx_r10.current_page == 0, ctx_r10.current_page != 0));
} }
function MaDataGridComponent_div_1_li_15_Template(rf, ctx) { if (rf & 1) {
    const _r77 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 30);
    i0.ɵɵlistener("click", function MaDataGridComponent_div_1_li_15_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r77); const ctx_r76 = i0.ɵɵnextContext(2); return ctx_r76.DecrementPage(); });
    i0.ɵɵelementStart(1, "a", 37);
    i0.ɵɵelementStart(2, "i", 38);
    i0.ɵɵtext(3, "chevron_left");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c3, ctx_r11.current_page == 0, ctx_r11.current_page != 0));
} }
const _c4 = function (a0, a1) { return { "active": a0, "": a1 }; };
function MaDataGridComponent_div_1_li_16_Template(rf, ctx) { if (rf & 1) {
    const _r80 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 30);
    i0.ɵɵlistener("click", function MaDataGridComponent_div_1_li_16_Template_li_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r80); const n_page_r78 = restoredCtx.$implicit; const ctx_r79 = i0.ɵɵnextContext(2); return ctx_r79._changePage(n_page_r78); });
    i0.ɵɵelementStart(1, "a", 39);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const n_page_r78 = ctx.$implicit;
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c4, ctx_r12.current_page == n_page_r78, ctx_r12.current_page != n_page_r78));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(n_page_r78 + 1);
} }
function MaDataGridComponent_div_1_li_17_Template(rf, ctx) { if (rf & 1) {
    const _r82 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 30);
    i0.ɵɵlistener("click", function MaDataGridComponent_div_1_li_17_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r82); const ctx_r81 = i0.ɵɵnextContext(2); return ctx_r81.IncrementPage(); });
    i0.ɵɵelementStart(1, "a", 37);
    i0.ɵɵelementStart(2, "i", 38);
    i0.ɵɵtext(3, "chevron_right");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c3, ctx_r13.current_page == ctx_r13.max_page, ctx_r13.current_page != ctx_r13.max_page));
} }
function MaDataGridComponent_div_1_li_18_Template(rf, ctx) { if (rf & 1) {
    const _r84 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 30);
    i0.ɵɵlistener("click", function MaDataGridComponent_div_1_li_18_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r84); const ctx_r83 = i0.ɵɵnextContext(2); return ctx_r83.FastIncrementPage(); });
    i0.ɵɵelementStart(1, "a", 37);
    i0.ɵɵelementStart(2, "i", 38);
    i0.ɵɵtext(3, "fast_forward");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c3, ctx_r14.current_page == ctx_r14.max_page, ctx_r14.current_page != ctx_r14.max_page));
} }
function MaDataGridComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "table");
    i0.ɵɵelementStart(3, "tr", 6);
    i0.ɵɵtemplate(4, MaDataGridComponent_div_1_td_4_Template, 5, 10, "td", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, MaDataGridComponent_div_1_tr_5_Template, 2, 4, "tr", 8);
    i0.ɵɵtemplate(6, MaDataGridComponent_div_1_tr_6_Template, 2, 11, "tr", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 10);
    i0.ɵɵelementStart(8, "div", 11);
    i0.ɵɵelementStart(9, "div", 12);
    i0.ɵɵtext(10);
    i0.ɵɵtemplate(11, MaDataGridComponent_div_1_span_11_Template, 2, 0, "span", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 14);
    i0.ɵɵelementStart(13, "ul", 15);
    i0.ɵɵtemplate(14, MaDataGridComponent_div_1_li_14_Template, 4, 4, "li", 16);
    i0.ɵɵtemplate(15, MaDataGridComponent_div_1_li_15_Template, 4, 4, "li", 16);
    i0.ɵɵtemplate(16, MaDataGridComponent_div_1_li_16_Template, 3, 5, "li", 17);
    i0.ɵɵtemplate(17, MaDataGridComponent_div_1_li_17_Template, 4, 4, "li", 16);
    i0.ɵɵtemplate(18, MaDataGridComponent_div_1_li_18_Template, 4, 4, "li", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("", ctx_r1.customCSS, "grid_table");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.columns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.headFilter);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.rows_displayed);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("#", ctx_r1.nb_record, " record");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.nb_record > 1);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.max_page >= 9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.nb_record > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.pages);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.nb_record > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.max_page >= 9);
} }
// import { PipeLengthPipe } from 'src/app/pipes/pipe-length.pipe';
export class MaDataGridComponent {
    constructor(platformId /*private pipeLength: PipeLengthPipe*/, document) {
        this.platformId = platformId;
        this.document = document;
        /*  "columns" element d'entrée
           "change" element de sortir permettant de prendre en compte
                         l'event OnChanges
          <ma-data-grid [columns]="columns"  [rows]="rows" (change)="ChangeData($event)"></ma-data-grid>
       */
        this.columns = [];
        this.limit = 7;
        this.extFilter = false;
        this.headFilter = false;
        this.pagination = false;
        this.page = -1;
        this.count = 0;
        this.customCSS = "";
        this.myGrid = this;
        this.rows = [];
        this.change = new EventEmitter();
        this.select = new EventEmitter();
        this.extFilterChange = new EventEmitter();
        this.filterChange = new EventEmitter();
        this.changePage = new EventEmitter();
        this.sort = new EventEmitter();
        this.canSelectChange = new EventEmitter();
        this.rowsChange = new EventEmitter();
        this.rowsSelect = new EventEmitter();
        this.grid_cell_first = this.customCSS + 'grid_cell_first';
        this.grid_row_selected = this.customCSS + 'grid_row_selected';
        this.current_page = -1;
        this.max_page = 1;
        this.max_nb_page = 6;
        this.nb_page = 1;
        this.startat = 0;
        this.searchValue = "c";
        this.isBrowser = false;
        this.rows_displayed = [];
        this.pages = [];
        this.conditions = [];
        this.nb_record = 0;
        this.row_selected = -1;
        this.cell_selected = -1;
        this.sortedField = {
            field: '',
            reverse: true
        };
        this.timeout = null;
        //console.log('YO')
        this.isBrowser = isPlatformBrowser(this.platformId);
    }
    resetSelection() {
        this.cell_selected = -1;
        this.row_selected = -1;
    }
    ngOnChanges(changes) {
        if (isPlatformBrowser(this.platformId)) {
            // console.log("this.searchValue: " + this.searchValue)
            console.log('ngOnChanges ', changes);
            if (changes.page && changes.page.currentValue >= 0) {
            }
            if (changes.canSelect && changes.canSelect.currentValue) {
                //this.page = changes.page.currentValue;
                // console.log('canSelect  ', changes.canSelect.currentValue);
                this.canSelectChange.emit(changes.canSelect.previousValue);
            }
            if (changes.limit && changes.limit.currentValue) {
                this.limit = changes.limit.currentValue;
            }
            if (changes.rows && changes.rows.currentValue) {
                this.temp = changes.rows.currentValue;
                this._changePage(this.current_page, this.temp, true);
            }
            // console.log("a - ngOnChanges current_page => " + this.current_page)
        }
    }
    IncrementPage() {
        this._changePage(this.current_page + 1, this.temp);
    }
    DecrementPage() {
        this._changePage(this.current_page - 1, this.temp);
    }
    FastIncrementPage() {
        let p = this.current_page + 5; //Math.round(this.max_page / 50);
        this._changePage(p, this.temp);
    }
    _dataChange(evt) {
        console.log("_dataChange", evt);
        this.rowsChange.emit(evt);
    }
    _dataSelector(evt, prop) {
        console.log("_dataSelector", evt, prop);
        this.rowsSelect.emit(evt);
    }
    FastDecrementPage() {
        let p = this.current_page - 5; //Math.round(this.max_page / 50);;
        this._changePage(p, this.temp);
    }
    _changePage(n_page, rows, force) {
        if (!rows)
            rows = this.temp;
        //
        if (this.pagination == false) {
            if (force === true) {
                this.temp = MaFilter.FilterByConditions(this.conditions, rows);
                this.temp = this._sortData(this.temp);
                rows = this.temp;
            }
            this.count = rows.length;
        }
        // Calcul du max_page
        this.max_page = 0;
        if (this.count >= 0 && this.limit > 0) {
            this.max_page = Math.floor(this.count / this.limit);
            if ((this.count % this.limit) != 0) {
                this.max_page += 1;
            }
        }
        if (n_page < 0) {
            n_page = 0;
        }
        if (n_page >= this.max_page && this.max_page > 0) {
            n_page = this.max_page - 1;
        }
        // console.log("changePage " + n_page + ' / ' + this.max_page + ' c => ' + this.current_page + ' max_page ' + this.max_page);
        if (this.page >= 0 || this.pagination) {
            if (this.current_page != n_page) {
                this.current_page = n_page;
                this.searchValue = '';
                // console.log("=============> EMIT CHANGE ")
                this.changePage.emit(n_page);
                return;
            }
            this.row_selected = -1;
            this.current_page = n_page;
            this.nb_record = this.count;
            this.startat = 0;
            this.rows_displayed = [];
            for (let i = 0; rows && i < this.limit && i < this.count && i < rows.length; i++) {
                this.rows_displayed.push(rows[i]);
            }
        }
        else {
            // SANS PAGINATION
            // console.error("SANS PAGINATION")
            if (!force && (this.current_page == n_page)) {
                return;
            }
            this.row_selected = -1;
            this.current_page = n_page;
            this.nb_record = 0;
            this.startat = 0;
            this.rows_displayed = [];
            for (let i = 0; rows && i < this.limit && i < rows.length; i++) {
                if (rows.length > (this.current_page * this.limit) + i) {
                    this.rows_displayed.push(rows[this.current_page * this.limit + i]);
                }
            }
            this.nb_record = rows.length;
        }
        // Calcul du nombre de page en bas du datagrid
        this.startat = this.limit * (this.current_page + 1);
        if (this.startat > this.count)
            this.startat = this.count;
        this.pages = [];
        let start_page = this.current_page - Math.round(this.max_nb_page / 2);
        if (start_page < 0)
            start_page = 0;
        for (let p = start_page, nbp = 0; rows && p < this.count / this.limit && nbp < this.max_nb_page; nbp++, p++) {
            this.pages.push(p);
        }
    }
    ngOnInit() {
        //this.pipeLength.transform("bbb");
    }
    _sortData(rows) {
        let sf = this.sortedField.field;
        //console.log('_sortData',this.sortedField)
        return rows.sort((a, b) => {
            let r;
            if (typeof (a[sf]) === 'string' || typeof (b[sf]) === 'string') {
                var c3 = a[sf];
                var c4 = b[sf];
                if (c4 == null) {
                    c4 = '';
                }
                if (c3 == null) {
                    c3 = '';
                }
                r = c3.localeCompare(c4, 'en', { sensitivity: 'base' });
            }
            else {
                if (typeof (a[sf]) === 'number' || typeof (b[sf]) === 'number') {
                    r = a[sf] - b[sf];
                }
                else {
                    if (typeof (a[sf]) === 'boolean' || typeof (b[sf]) === 'boolean') {
                        var c1 = 0;
                        if (a[sf] === true)
                            c1 = 2;
                        if (a[sf] === false)
                            c1 = 1;
                        var c2 = 0;
                        if (b[sf] === true)
                            c2 = 2;
                        if (b[sf] === false)
                            c2 = 1;
                        r = c1 - c2;
                    }
                    else {
                        r = a[sf] < b[sf];
                    }
                }
            }
            //console.log('Compare ' + a[sf] + ' <=> ' + b[sf] + '  = ' + r + ' this.sortedField.reverse' + this.sortedField.reverse)
            if (this.sortedField.reverse) {
                return r * -1;
            }
            return r;
        });
    }
    sortBy(col) {
        // console.log(col);
        if (this.sortedField.field == col.prop) {
            this.sortedField.reverse = !this.sortedField.reverse;
        }
        else {
            this.sortedField.reverse = false;
        }
        this.sortedField.field = col.prop;
        if (this.pagination) {
            this.sort.emit(this.sortedField);
            return;
        }
        else {
            this._changePage(this.current_page, this.rows, true);
        }
    }
    SelectRow(index, row) {
        if (this.canSelect === "row") {
            this.row_selected = index;
            this.cell_selected = null;
            let trueIndex = this.current_page * this.limit + index;
            //let data = this.rows[trueIndex];
            // console.log("SelectRow trueIndex", trueIndex);
            this.select.emit({ index: trueIndex, row: row });
        }
    }
    SelectCell(index, row, col) {
        // console.log("SelectCell Select", index, row, col);
        if (this.canSelect === "cell") {
            this.row_selected = index;
            this.cell_selected = col.prop;
            // console.log("SelectCell Select", index, row, col);
            let trueIndex = this.current_page * this.limit + index;
            //console.log("Data Grid trueIndex", trueIndex);
            this.select.emit({ index: trueIndex, row: row, prop: col.prop, value: row[col.prop], });
        }
    }
    _filterChange(e) {
        this.extFilterChange.emit(e);
    }
    _changeHeaderFilter(e) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this._delayChangeHeaderFilter(e);
        }, 500);
    }
    _delayChangeHeaderFilter(e) {
        let conditions = [];
        this.headerfilter.forEach((item) => {
            //item.filter_value;
            let condition = item.getFilter();
            if (condition) {
                if (conditions.length > 0) {
                    conditions.push('and');
                }
                conditions.push(condition);
            }
            //console.log(item.col.prop + ' => '+item.filter_value);
        });
        // console.log("CONDITIONS", conditions);
        if (this.pagination == false) {
            this.conditions = conditions;
            this._changePage(0, this.rows, true);
            this.filterChange.emit({ where: conditions, data: this.temp });
        }
        else {
            this.filterChange.emit({ where: conditions });
        }
    }
}
MaDataGridComponent.ɵfac = function MaDataGridComponent_Factory(t) { return new (t || MaDataGridComponent)(i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(DOCUMENT)); };
MaDataGridComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MaDataGridComponent, selectors: [["ma-data-grid"]], viewQuery: function MaDataGridComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(MaGridFilterComponent, 7);
        i0.ɵɵviewQuery(DataGridHeadFilterComponent, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.gridfilter = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.headerfilter = _t);
    } }, inputs: { columns: "columns", limit: "limit", canSelect: "canSelect", extFilter: "extFilter", headFilter: "headFilter", pagination: "pagination", page: "page", count: "count", customCSS: "customCSS", myGrid: "myGrid", rows: "rows" }, outputs: { change: "change", select: "select", extFilterChange: "extFilterChange", filterChange: "filterChange", changePage: "changePage", sort: "sort", canSelectChange: "canSelectChange", rowsChange: "rowsChange", rowsSelect: "rowsSelect" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[3, "customCSS", "searchValue", "columns", "searchValueChange", "filterChange", 4, "ngIf"], ["class", "datagrid_page", 4, "ngIf"], [3, "customCSS", "searchValue", "columns", "searchValueChange", "filterChange"], ["gridfilter", ""], [1, "datagrid_page"], [1, "scroller"], [1, "grid_row"], [3, "class", "ngClass", 4, "ngFor", "ngForOf"], [3, "class", 4, "ngIf"], [3, "class", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "row", 2, "padding-top", "5px"], [1, "col", "s3"], [1, "page_number"], [4, "ngIf"], [1, "col", "s8", "div_pagination"], [1, "pagination"], [3, "ngClass", "click", 4, "ngIf"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "click", 4, "ngIf"], [3, "prop", "isHeader", "col", "myGrid", "data"], [3, "click"], ["class", "grid_sort tiny material-icons", 4, "ngIf"], [1, "grid_sort", "tiny", "material-icons"], [3, "col", "changeHeaderFilter", 4, "ngIf"], [3, "col", "changeHeaderFilter"], ["headerfilter", ""], [3, "ngClass", "click"], ["ngSwitchBreak", "", 4, "ngSwitchCase"], ["ngSwitchBreak", ""], [3, "prop", "col", "myGrid", "data"], [3, "template", "prop", "col", "myGrid", "data"], [3, "innerHTML"], [3, "col", "data"], [1, "pointer"], [1, "material-icons", "small"], [1, "a_pagination", "small"]], template: function MaDataGridComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, MaDataGridComponent_ma_data_grid_filter_0_Template, 2, 3, "ma-data-grid-filter", 0);
        i0.ɵɵtemplate(1, MaDataGridComponent_div_1_Template, 19, 13, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.extFilter && ctx.isBrowser);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isBrowser);
    } }, styles: ["[_nghost-%COMP%]{--color-border: #667;--color-defaut: #667}.datagrid_page[_ngcontent-%COMP%]   .CSSclassOdd[_ngcontent-%COMP%]{background-color:#ddd}.datagrid_page[_ngcontent-%COMP%]{width:100%;height:100%}.div_pagination[_ngcontent-%COMP%]   .pointer[_ngcontent-%COMP%]{cursor:default}.div_pagination[_ngcontent-%COMP%]   .page_number[_ngcontent-%COMP%]{padding:0 10px;font-size:1rem;color:var(--color-defaut)}.datagrid_page[_ngcontent-%COMP%]   .div_pagination[_ngcontent-%COMP%]{display:inline-grid;justify-content:flex-end}.div_pagination[_ngcontent-%COMP%]   .a_pagination[_ngcontent-%COMP%], .a_pagination[_ngcontent-%COMP%]:hover{color:var(--color-border);display:inline-block;text-decoration:none;font-size:1rem;padding:0 10px;line-height:30px}.datagrid_page[_ngcontent-%COMP%]   .scroller[_ngcontent-%COMP%]{align-self:center;width:100%;background-color:#fefefe;overflow:auto;scrollbar-color:var(--color-border) #fefefe;scrollbar-width:auto}.grid_table[_ngcontent-%COMP%]   .grid_row_selected[_ngcontent-%COMP%]{background-color:#667;color:#ddd}.grid_table[_ngcontent-%COMP%]   .grid_sort[_ngcontent-%COMP%]{cursor:pointer}.datagrid_page[_ngcontent-%COMP%]   .grid_table[_ngcontent-%COMP%]{width:100%}.grid_table[_ngcontent-%COMP%]   .grid_cell_title[_ngcontent-%COMP%]{border-top:1px solid var(--color-border);color:var(--color-defaut);font-weight:700;text-align:center}.grid_table[_ngcontent-%COMP%]   .grid_cell_selected[_ngcontent-%COMP%]{background-color:#667;color:#ddd}.grid_table[_ngcontent-%COMP%]   .grid_cell_first[_ngcontent-%COMP%]{border-left:10px solid var(--color-border)}.grid_table[_ngcontent-%COMP%]   .grid_cell_end[_ngcontent-%COMP%]{border-right:0px solid var(--color-border)}.grid_table[_ngcontent-%COMP%]   .grid_cell[_ngcontent-%COMP%]{border-right:1px solid var(--color-border)}.grid_table[_ngcontent-%COMP%]   .grid_row_first[_ngcontent-%COMP%]{border-bottom:1px solid var(--color-border)}.grid_table[_ngcontent-%COMP%]   .grid_row_last[_ngcontent-%COMP%]{border-bottom:0px solid var(--color-border)}.grid_table[_ngcontent-%COMP%]   .grid_row[_ngcontent-%COMP%]{border-bottom:1px solid var(--color-border)}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MaDataGridComponent, [{
        type: Component,
        args: [{ selector: 'ma-data-grid', template: "<!-- #gridfilter *ngIf=\"extFilter\" -->\r\n<ma-data-grid-filter #gridfilter *ngIf=\"extFilter && isBrowser\" [customCSS]=\"customCSS\"  [(searchValue)]=\"searchValue\" [columns]=\"columns\"  (filterChange)=\"_filterChange($event)\"></ma-data-grid-filter>\r\n<div class=\"datagrid_page\" *ngIf=\"isBrowser\">\r\n    <div class=\"scroller\">\r\n        <table class=\"{{customCSS}}grid_table\">\r\n            <!-- HEADER -->\r\n            <tr class=\"grid_row\">\r\n                <td class=\"{{customCSS}}grid_cell {{customCSS}}grid_cell_title\"  [ngClass]=\"{grid_cell_first: i==0}\" *ngFor=\"let col of columns;index as i; \">\r\n                    <datagrid-cellheader-container [ngSwitch]=\"true\"  >\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.dataType == 'selector'\"><ma-data-grid-cell-selector [prop]=\"col.prop\" [isHeader]=\"true\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"rows_displayed\"></ma-data-grid-cell-selector><span>{{col.title}}</span></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchDefault >{{col.title}}</datagrid-cell-element>\r\n                    </datagrid-cellheader-container>\r\n                    \r\n                    <span *ngIf=\"col.dataType != 'selector' && col.isRowNumber !== true && col.sorted === true\" (click)=\"sortBy(col)\">\r\n                        <span *ngIf=\"sortedField.field != col.prop\" class=\"grid_sort tiny material-icons\">swap_vert</span>\r\n                        <span *ngIf=\"sortedField.field === col.prop && sortedField.reverse\" class=\"grid_sort tiny material-icons\">arrow_drop_down</span>\r\n                        <span *ngIf=\"sortedField.field === col.prop && !sortedField.reverse\" class=\"grid_sort tiny material-icons\">arrow_drop_up</span>\r\n                    </span> \r\n                </td>\r\n            </tr>\r\n            <!-- Head Filter -->\r\n            <tr class=\"{{customCSS}}grid_row\" *ngIf=\"headFilter\">\r\n                <td class=\"{{customCSS}}grid_cell {{customCSS}}grid_cell_title\"  [ngClass]=\"{grid_cell_first: i==0}\" *ngFor=\"let col of columns;index as i; \">\r\n                    <ma-data-grid-head-filter #headerfilter *ngIf=\"(col.dataType && col.dataType != 'selector' &&  col.headFilter !== false) || (col.headFilter !== false && col.headFilter != null  && col.headFilter.length > 0)\" [col]=\"col\" (changeHeaderFilter)=\"_changeHeaderFilter($event)\"></ma-data-grid-head-filter>\r\n                </td>\r\n            </tr>\r\n            <!-- DATA -->\r\n            <tr class=\"{{customCSS}}grid_row\" *ngFor=\"let row of rows_displayed; \r\n                    last as isLastRow; \r\n                    even as pair; \r\n                    index as i; \r\n                    first as isFirstRow\"\r\n                (click)=\"SelectRow(i,row)\" [ngClass]=\"{'grid_row_selected': i == row_selected && !cell_selected, 'CSSclassEven': pair,'CSSclassOdd': !pair, 'grid_row_first': isFirstRow, 'grid_row_end': isLastRow}\">\r\n    \r\n                <td class=\"{{customCSS}}grid_cell {{col.cssClass}}\" *ngFor=\"let col of columns; \r\n                    index as ncol; \r\n                    count as maxcol; \r\n                    first as isFirstCol\r\n                    last as isLastCol;\" \r\n                    \r\n                    [ngClass]=\"{'grid_cell_selected': i == row_selected && col.prop == cell_selected, 'grid_cell_end': isLastCol,'grid_cell_first': isFirstCol}\"\r\n                    (click)=\"SelectCell(i,row,col)\">\r\n                    <!--  {{col.prop}} repr\u00E9sente le nom de colonne d'un \u00E9l\u00E9ment contenu dans 'colmuns' -- >\r\n                    <div *ngIf=\"col.isRowNumber === true; then RowNumberBlock else dataBlock\"></div>\r\n                    <ng-template #RowNumberBlock>{{i}}</ng-template>\r\n                    <ng-template #dataBlock> {{u[col.prop] | dataGridPipe :u :c}}</ng-template>\r\n                    -->\r\n                    <datagrid-cell-container [ngSwitch]=\"true\"  >\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.dataType == 'selector'\" ngSwitchBreak><ma-data-grid-cell-selector [prop]=\"col.prop\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"row\"></ma-data-grid-cell-selector></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.useTemplate != null\" ngSwitchBreak><ma-data-grid-template-cell-t1 [template]=\"col.useTemplate\" [prop]=\"col.prop\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"row\"></ma-data-grid-template-cell-t1></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.canEdit === true\" ngSwitchBreak><ma-data-grid-celledit-item [prop]=\"col.prop\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"row\"></ma-data-grid-celledit-item></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.isRowNumber === true\" ngSwitchBreak>{{i}}</datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.isRowHTML === true\" ngSwitchBreak><span [innerHTML]=\"row[col.prop]\"></span></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.useTemplate == null && col.canEdit !== true && (col.dataType == 'boolean' || col.dataType == 'bool')\" ngSwitchBreak><ma-data-grid-cell-boolean [col]=\"col\" [data]=\"row\"></ma-data-grid-cell-boolean></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchDefault>{{row[col.prop] | maDataGridPipe :row :col}}</datagrid-cell-element>\r\n                    </datagrid-cell-container>\r\n                </td>\r\n        \r\n            </tr>\r\n        </table>\r\n        \r\n    </div>\r\n    <div class=\"row\" style=\"padding-top: 5px;\">\r\n        <div class=\"col s3 \">\r\n            <div class=\"page_number\">#{{nb_record}} record<span *ngIf=\"nb_record > 1\">s</span></div>\r\n        </div>\r\n        <div class=\"col s8 div_pagination\">\r\n           \r\n            <ul class=\"pagination\">\r\n                <li *ngIf=\"max_page >= 9\" (click)=\"FastDecrementPage()\" [ngClass]=\"{'disabled': current_page == 0,'': current_page != 0}\"><a  class=\"pointer\"><i class=\"material-icons small\">fast_rewind</i></a></li>\r\n                <li *ngIf=\"nb_record > 0\" (click)=\"DecrementPage()\" [ngClass]=\"{'disabled': current_page == 0,'': current_page != 0}\"><a  class=\"pointer\"><i class=\"material-icons small\">chevron_left</i></a></li>\r\n                <li *ngFor=\"let n_page of pages\" (click)=\"_changePage(n_page)\" [ngClass]=\"{'active': current_page == n_page,'': current_page != n_page}\" ><a class=\"pointer\" class=\"a_pagination small \">{{(n_page+1)}}</a></li>\r\n                <li *ngIf=\"nb_record > 0\" (click)=\"IncrementPage()\" [ngClass]=\"{'disabled': current_page == max_page,'': current_page != max_page}\"><a  class=\"pointer\"><i class=\"material-icons small\">chevron_right</i></a></li>\r\n                <li *ngIf=\"max_page >= 9\" (click)=\"FastIncrementPage()\" [ngClass]=\"{'disabled': current_page == max_page,'': current_page != max_page}\"><a class=\"pointer\"><i class=\"material-icons small\">fast_forward</i></a></li>\r\n            </ul>\r\n       \r\n        </div>\r\n    </div>\r\n</div>\r\n    \r\n    ", styles: [":host{--color-border: #667;--color-defaut: #667}.datagrid_page .CSSclassOdd{background-color:#ddd}.datagrid_page{width:100%;height:100%}.div_pagination .pointer{cursor:default}.div_pagination .page_number{padding:0 10px;font-size:1rem;color:var(--color-defaut)}.datagrid_page .div_pagination{display:inline-grid;justify-content:flex-end}.div_pagination .a_pagination,.a_pagination:hover{color:var(--color-border);display:inline-block;text-decoration:none;font-size:1rem;padding:0 10px;line-height:30px}.datagrid_page .scroller{align-self:center;width:100%;background-color:#fefefe;overflow:auto;scrollbar-color:var(--color-border) #fefefe;scrollbar-width:auto}.grid_table .grid_row_selected{background-color:#667;color:#ddd}.grid_table .grid_sort{cursor:pointer}.datagrid_page .grid_table{width:100%}.grid_table .grid_cell_title{border-top:1px solid var(--color-border);color:var(--color-defaut);font-weight:700;text-align:center}.grid_table .grid_cell_selected{background-color:#667;color:#ddd}.grid_table .grid_cell_first{border-left:10px solid var(--color-border)}.grid_table .grid_cell_end{border-right:0px solid var(--color-border)}.grid_table .grid_cell{border-right:1px solid var(--color-border)}.grid_table .grid_row_first{border-bottom:1px solid var(--color-border)}.grid_table .grid_row_last{border-bottom:0px solid var(--color-border)}.grid_table .grid_row{border-bottom:1px solid var(--color-border)}\n"] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { columns: [{
            type: Input
        }], limit: [{
            type: Input
        }], canSelect: [{
            type: Input
        }], extFilter: [{
            type: Input
        }], headFilter: [{
            type: Input
        }], pagination: [{
            type: Input
        }], page: [{
            type: Input
        }], count: [{
            type: Input
        }], customCSS: [{
            type: Input
        }], myGrid: [{
            type: Input
        }], rows: [{
            type: Input
        }], change: [{
            type: Output
        }], select: [{
            type: Output
        }], extFilterChange: [{
            type: Output
        }], filterChange: [{
            type: Output
        }], changePage: [{
            type: Output
        }], sort: [{
            type: Output
        }], canSelectChange: [{
            type: Output
        }], rowsChange: [{
            type: Output
        }], rowsSelect: [{
            type: Output
        }], gridfilter: [{
            type: ViewChild,
            args: [MaGridFilterComponent, { static: true }]
        }], headerfilter: [{
            type: ViewChildren,
            args: [DataGridHeadFilterComponent]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtZGF0YS1ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL21hLWRhdGEtZ3JpZC9zcmMvbGliL21hLWRhdGEtZ3JpZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9tYS1kYXRhLWdyaWQvc3JjL2xpYi9tYS1kYXRhLWdyaWQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQWEsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RixPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFFakgsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFvQixRQUFRLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQTtBQUM5RSxPQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7SUNMOUQsaURBQW1MO0lBQTFGLDBQQUE2QixvTUFBc0MsNEJBQXFCLElBQTNEO0lBQTZELGlCQUFzQjs7O0lBQXpJLDRDQUF1QixtQ0FBQSwyQkFBQTs7O0lBUS9ELDZDQUFrRTtJQUFBLGlEQUFtSjtJQUFBLDRCQUFNO0lBQUEsWUFBYTtJQUFBLGlCQUFPO0lBQUEsaUJBQXdCOzs7O0lBQXpLLGVBQWlCO0lBQWpCLG1DQUFpQixrQkFBQSxnQkFBQSwwQkFBQSxnQ0FBQTtJQUE0RyxlQUFhO0lBQWIsbUNBQWE7OztJQUN4Tyw2Q0FBeUM7SUFBQSxZQUFhO0lBQUEsaUJBQXdCOzs7SUFBckMsZUFBYTtJQUFiLG1DQUFhOzs7SUFJdEQsZ0NBQWtGO0lBQUEseUJBQVM7SUFBQSxp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QUMsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBQTEFURk9STV9JRCwgUXVlcnlMaXN0LCBWaWV3Q2hpbGQsIFZpZXdDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhR3JpZEhlYWRGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS1ncmlkLWhlYWQtZmlsdGVyL2RhdGEtZ3JpZC1oZWFkLWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZEZpbHRlckV2ZW50LCBNYURhdGFHcmlkQ29sdW1uT3B0aW9ucywgTWFEYXRhR3JpZFNlbGVjdE1ldGhvZCwgTWFEYXRhR3JpZFNlbGVjdEV2ZW50LCBNYURhdGFHcmlkSGVhZEZpbHRlckV2ZW50IH0gZnJvbSAnLi9pbnRlcmZhY2VzL21hLWRhdGEtZ3JpZC1vcHRpb25zJztcbmltcG9ydCB7IE1hR3JpZEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vbWEtZ3JpZC1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlckNvbmRpdGlvbnMsIE1hRmlsdGVyIH0gZnJvbSBcIkBhbW4zMS9maWx0ZXItbXVsdGlwbGUtY29uZGl0aW9uc1wiXG5pbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuLy8gaW1wb3J0IHsgUGlwZUxlbmd0aFBpcGUgfSBmcm9tICdzcmMvYXBwL3BpcGVzL3BpcGUtbGVuZ3RoLnBpcGUnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWEtZGF0YS1ncmlkJyxcbiAgLy9wcm92aWRlcnM6IFtQaXBlTGVuZ3RoUGlwZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9tYS1kYXRhLWdyaWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYS1kYXRhLWdyaWQuY29tcG9uZW50LmNzcyddLFxuXG59KVxuZXhwb3J0IGNsYXNzIE1hRGF0YUdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgLyogIFwiY29sdW1uc1wiIGVsZW1lbnQgZCdlbnRyw6llXG4gICAgIFwiY2hhbmdlXCIgZWxlbWVudCBkZSBzb3J0aXIgcGVybWV0dGFudCBkZSBwcmVuZHJlIGVuIGNvbXB0ZVxuICAgICAgICAgICAgICAgICAgIGwnZXZlbnQgT25DaGFuZ2VzXG4gICAgPG1hLWRhdGEtZ3JpZCBbY29sdW1uc109XCJjb2x1bW5zXCIgIFtyb3dzXT1cInJvd3NcIiAoY2hhbmdlKT1cIkNoYW5nZURhdGEoJGV2ZW50KVwiPjwvbWEtZGF0YS1ncmlkPlxuICovXG4gIEBJbnB1dCgpIGNvbHVtbnM6IE1hRGF0YUdyaWRDb2x1bW5PcHRpb25zW10gPSBbXTtcbiAgQElucHV0KCkgbGltaXQ6IG51bWJlciA9IDc7XG4gIEBJbnB1dCgpIGNhblNlbGVjdDogTWFEYXRhR3JpZFNlbGVjdE1ldGhvZDtcbiAgQElucHV0KCkgZXh0RmlsdGVyOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGhlYWRGaWx0ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgcGFnaW5hdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBwYWdlOiBudW1iZXIgPSAtMTtcbiAgQElucHV0KCkgY291bnQ6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIGN1c3RvbUNTUzogc3RyaW5nID0gXCJcIjtcbiAgQElucHV0KCkgbXlHcmlkID0gdGhpcztcblxuICBASW5wdXQoKSByb3dzOiBhbnkgPSBbXTtcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxNYURhdGFHcmlkU2VsZWN0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBleHRGaWx0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1hRGF0YUdyaWRGaWx0ZXJFdmVudD4oKTtcbiAgQE91dHB1dCgpIGZpbHRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY2hhbmdlUGFnZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgc29ydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY2FuU2VsZWN0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxNYURhdGFHcmlkU2VsZWN0TWV0aG9kPigpO1xuICBAT3V0cHV0KCkgcm93c0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcm93c1NlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBWaWV3Q2hpbGQoTWFHcmlkRmlsdGVyQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSBncmlkZmlsdGVyOiBNYUdyaWRGaWx0ZXJDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGRyZW4oRGF0YUdyaWRIZWFkRmlsdGVyQ29tcG9uZW50KSBoZWFkZXJmaWx0ZXI6IFF1ZXJ5TGlzdDxEYXRhR3JpZEhlYWRGaWx0ZXJDb21wb25lbnQ+O1xuXG4gIGdyaWRfY2VsbF9maXJzdCA9IHRoaXMuY3VzdG9tQ1NTICsgJ2dyaWRfY2VsbF9maXJzdCdcbiAgZ3JpZF9yb3dfc2VsZWN0ZWQgPSB0aGlzLmN1c3RvbUNTUyArICdncmlkX3Jvd19zZWxlY3RlZCc7XG4gIGN1cnJlbnRfcGFnZTogbnVtYmVyID0gLTE7XG4gIG1heF9wYWdlOiBudW1iZXIgPSAxO1xuICBtYXhfbmJfcGFnZTogbnVtYmVyID0gNjtcbiAgbmJfcGFnZTogbnVtYmVyID0gMTtcbiAgc3RhcnRhdDogbnVtYmVyID0gMDtcbiAgc2VhcmNoVmFsdWU6IHN0cmluZyA9IFwiY1wiXG4gIGlzQnJvd3NlcjogYm9vbGVhbiA9IGZhbHNlO1xuICByb3dzX2Rpc3BsYXllZDogYW55ID0gW107XG4gIHBhZ2VzID0gW107XG4gIGNvbmRpdGlvbnM6IEZpbHRlckNvbmRpdGlvbnMgPSBbXVxuICBuYl9yZWNvcmQ6IG51bWJlciA9IDA7XG4gIHJvd19zZWxlY3RlZDogbnVtYmVyID0gLTE7XG4gIGNlbGxfc2VsZWN0ZWQ6IG51bWJlciA9IC0xO1xuXG4gIHRlbXA6IGFueVtdO1xuXG4gIHNvcnRlZEZpZWxkID0ge1xuICAgIGZpZWxkOiAnJyxcbiAgICByZXZlcnNlOiB0cnVlXG4gIH07XG5cblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogb2JqZWN0Lypwcml2YXRlIHBpcGVMZW5ndGg6IFBpcGVMZW5ndGhQaXBlKi8sXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnQpIHtcbiAgICAvL2NvbnNvbGUubG9nKCdZTycpXG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpO1xuICB9XG5cbiAgcmVzZXRTZWxlY3Rpb24oKSB7XG4gICAgdGhpcy5jZWxsX3NlbGVjdGVkID0gLTE7XG4gICAgdGhpcy5yb3dfc2VsZWN0ZWQgPSAtMTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMuc2VhcmNoVmFsdWU6IFwiICsgdGhpcy5zZWFyY2hWYWx1ZSlcbiAgICAgIGNvbnNvbGUubG9nKCduZ09uQ2hhbmdlcyAnLCBjaGFuZ2VzKTtcbiAgICAgIGlmIChjaGFuZ2VzLnBhZ2UgJiYgY2hhbmdlcy5wYWdlLmN1cnJlbnRWYWx1ZSA+PSAwKSB7XG4gICAgICB9XG4gICAgICBpZiAoY2hhbmdlcy5jYW5TZWxlY3QgJiYgY2hhbmdlcy5jYW5TZWxlY3QuY3VycmVudFZhbHVlKSB7XG4gICAgICAgIC8vdGhpcy5wYWdlID0gY2hhbmdlcy5wYWdlLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NhblNlbGVjdCAgJywgY2hhbmdlcy5jYW5TZWxlY3QuY3VycmVudFZhbHVlKTtcbiAgICAgICAgdGhpcy5jYW5TZWxlY3RDaGFuZ2UuZW1pdChjaGFuZ2VzLmNhblNlbGVjdC5wcmV2aW91c1ZhbHVlKVxuICAgICAgfVxuICAgICAgaWYgKGNoYW5nZXMubGltaXQgJiYgY2hhbmdlcy5saW1pdC5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5saW1pdCA9IGNoYW5nZXMubGltaXQuY3VycmVudFZhbHVlO1xuICAgICAgfVxuICAgICAgaWYgKGNoYW5nZXMucm93cyAmJiBjaGFuZ2VzLnJvd3MuY3VycmVudFZhbHVlKSB7XG4gICAgICAgIHRoaXMudGVtcCA9IGNoYW5nZXMucm93cy5jdXJyZW50VmFsdWU7XG4gICAgICAgIHRoaXMuX2NoYW5nZVBhZ2UodGhpcy5jdXJyZW50X3BhZ2UsIHRoaXMudGVtcCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImEgLSBuZ09uQ2hhbmdlcyBjdXJyZW50X3BhZ2UgPT4gXCIgKyB0aGlzLmN1cnJlbnRfcGFnZSlcbiAgICB9XG4gIH1cblxuICBJbmNyZW1lbnRQYWdlKCkge1xuICAgIHRoaXMuX2NoYW5nZVBhZ2UodGhpcy5jdXJyZW50X3BhZ2UgKyAxLCB0aGlzLnRlbXApXG4gIH1cblxuICBEZWNyZW1lbnRQYWdlKCkge1xuICAgIHRoaXMuX2NoYW5nZVBhZ2UodGhpcy5jdXJyZW50X3BhZ2UgLSAxLCB0aGlzLnRlbXApXG4gIH1cblxuICBGYXN0SW5jcmVtZW50UGFnZSgpIHtcbiAgICBsZXQgcCA9IHRoaXMuY3VycmVudF9wYWdlICsgNTsgLy9NYXRoLnJvdW5kKHRoaXMubWF4X3BhZ2UgLyA1MCk7XG4gICAgdGhpcy5fY2hhbmdlUGFnZShwLCB0aGlzLnRlbXApXG4gIH1cblxuICBfZGF0YUNoYW5nZShldnQpIHtcbiAgICBjb25zb2xlLmxvZyhcIl9kYXRhQ2hhbmdlXCIsIGV2dCk7XG4gICAgdGhpcy5yb3dzQ2hhbmdlLmVtaXQoZXZ0KTtcbiAgfVxuXG4gIF9kYXRhU2VsZWN0b3IoZXZ0LCBwcm9wKSB7XG4gICAgY29uc29sZS5sb2coXCJfZGF0YVNlbGVjdG9yXCIsIGV2dCwgcHJvcCk7XG5cbiAgICB0aGlzLnJvd3NTZWxlY3QuZW1pdChldnQpO1xuICB9XG5cbiAgRmFzdERlY3JlbWVudFBhZ2UoKSB7XG4gICAgbGV0IHAgPSB0aGlzLmN1cnJlbnRfcGFnZSAtIDU7IC8vTWF0aC5yb3VuZCh0aGlzLm1heF9wYWdlIC8gNTApOztcbiAgICB0aGlzLl9jaGFuZ2VQYWdlKHAsIHRoaXMudGVtcClcbiAgfVxuXG4gIHByaXZhdGUgX2NoYW5nZVBhZ2Uobl9wYWdlOiBudW1iZXIsIHJvd3M/OiBhbnksIGZvcmNlPzogYm9vbGVhbikge1xuICAgIGlmICghcm93cylcbiAgICAgIHJvd3MgPSB0aGlzLnRlbXA7XG5cbiAgICAvL1xuXG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbiA9PSBmYWxzZSkge1xuICAgICAgaWYgKGZvcmNlID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMudGVtcCA9IE1hRmlsdGVyLkZpbHRlckJ5Q29uZGl0aW9ucyh0aGlzLmNvbmRpdGlvbnMsIHJvd3MpO1xuICAgICAgICB0aGlzLnRlbXAgPSB0aGlzLl9zb3J0RGF0YSh0aGlzLnRlbXApO1xuICAgICAgICByb3dzID0gdGhpcy50ZW1wO1xuICAgICAgfVxuICAgICAgdGhpcy5jb3VudCA9IHJvd3MubGVuZ3RoO1xuICAgIH1cbiAgICAvLyBDYWxjdWwgZHUgbWF4X3BhZ2VcbiAgICB0aGlzLm1heF9wYWdlID0gMDtcbiAgICBpZiAodGhpcy5jb3VudCA+PSAwICYmIHRoaXMubGltaXQgPiAwKSB7XG4gICAgICB0aGlzLm1heF9wYWdlID0gTWF0aC5mbG9vcih0aGlzLmNvdW50IC8gdGhpcy5saW1pdCk7XG4gICAgICBpZiAoKHRoaXMuY291bnQgJSB0aGlzLmxpbWl0KSAhPSAwKSB7XG4gICAgICAgIHRoaXMubWF4X3BhZ2UgKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5fcGFnZSA8IDApIHtcbiAgICAgIG5fcGFnZSA9IDA7XG4gICAgfVxuICAgIGlmIChuX3BhZ2UgPj0gdGhpcy5tYXhfcGFnZSAmJiB0aGlzLm1heF9wYWdlID4gMCkge1xuICAgICAgbl9wYWdlID0gdGhpcy5tYXhfcGFnZSAtIDE7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhbmdlUGFnZSBcIiArIG5fcGFnZSArICcgLyAnICsgdGhpcy5tYXhfcGFnZSArICcgYyA9PiAnICsgdGhpcy5jdXJyZW50X3BhZ2UgKyAnIG1heF9wYWdlICcgKyB0aGlzLm1heF9wYWdlKTtcblxuICAgIGlmICh0aGlzLnBhZ2UgPj0gMCB8fCB0aGlzLnBhZ2luYXRpb24pIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRfcGFnZSAhPSBuX3BhZ2UpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50X3BhZ2UgPSBuX3BhZ2U7XG4gICAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSAnJztcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PiBFTUlUIENIQU5HRSBcIilcbiAgICAgICAgdGhpcy5jaGFuZ2VQYWdlLmVtaXQobl9wYWdlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJvd19zZWxlY3RlZCA9IC0xO1xuICAgICAgdGhpcy5jdXJyZW50X3BhZ2UgPSBuX3BhZ2U7XG4gICAgICB0aGlzLm5iX3JlY29yZCA9IHRoaXMuY291bnQ7XG4gICAgICB0aGlzLnN0YXJ0YXQgPSAwO1xuICAgICAgdGhpcy5yb3dzX2Rpc3BsYXllZCA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IHJvd3MgJiYgaSA8IHRoaXMubGltaXQgJiYgaSA8IHRoaXMuY291bnQgJiYgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5yb3dzX2Rpc3BsYXllZC5wdXNoKHJvd3NbaV0pO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcblxuICAgICAgLy8gU0FOUyBQQUdJTkFUSU9OXG4gICAgICAvLyBjb25zb2xlLmVycm9yKFwiU0FOUyBQQUdJTkFUSU9OXCIpXG5cbiAgICAgIGlmICghZm9yY2UgJiYgKHRoaXMuY3VycmVudF9wYWdlID09IG5fcGFnZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5yb3dfc2VsZWN0ZWQgPSAtMTtcbiAgICAgIHRoaXMuY3VycmVudF9wYWdlID0gbl9wYWdlO1xuICAgICAgdGhpcy5uYl9yZWNvcmQgPSAwO1xuICAgICAgdGhpcy5zdGFydGF0ID0gMDtcbiAgICAgIHRoaXMucm93c19kaXNwbGF5ZWQgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IHJvd3MgJiYgaSA8IHRoaXMubGltaXQgJiYgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHJvd3MubGVuZ3RoID4gKHRoaXMuY3VycmVudF9wYWdlICogdGhpcy5saW1pdCkgKyBpKSB7XG4gICAgICAgICAgdGhpcy5yb3dzX2Rpc3BsYXllZC5wdXNoKHJvd3NbdGhpcy5jdXJyZW50X3BhZ2UgKiB0aGlzLmxpbWl0ICsgaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLm5iX3JlY29yZCA9IHJvd3MubGVuZ3RoO1xuXG5cbiAgICB9XG4gICAgLy8gQ2FsY3VsIGR1IG5vbWJyZSBkZSBwYWdlIGVuIGJhcyBkdSBkYXRhZ3JpZFxuICAgIHRoaXMuc3RhcnRhdCA9IHRoaXMubGltaXQgKiAodGhpcy5jdXJyZW50X3BhZ2UgKyAxKTtcbiAgICBpZiAodGhpcy5zdGFydGF0ID4gdGhpcy5jb3VudClcbiAgICAgIHRoaXMuc3RhcnRhdCA9IHRoaXMuY291bnQ7XG4gICAgdGhpcy5wYWdlcyA9IFtdO1xuICAgIGxldCBzdGFydF9wYWdlID0gdGhpcy5jdXJyZW50X3BhZ2UgLSBNYXRoLnJvdW5kKHRoaXMubWF4X25iX3BhZ2UgLyAyKTtcbiAgICBpZiAoc3RhcnRfcGFnZSA8IDApXG4gICAgICBzdGFydF9wYWdlID0gMDtcbiAgICBmb3IgKGxldCBwID0gc3RhcnRfcGFnZSwgbmJwID0gMDsgcm93cyAmJiBwIDwgdGhpcy5jb3VudCAvIHRoaXMubGltaXQgJiYgbmJwIDwgdGhpcy5tYXhfbmJfcGFnZTsgbmJwKyssIHArKykge1xuICAgICAgdGhpcy5wYWdlcy5wdXNoKHApXG4gICAgfVxuXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvL3RoaXMucGlwZUxlbmd0aC50cmFuc2Zvcm0oXCJiYmJcIik7XG4gIH1cblxuICBwcml2YXRlIF9zb3J0RGF0YShyb3dzKSB7XG4gICAgbGV0IHNmID0gdGhpcy5zb3J0ZWRGaWVsZC5maWVsZDtcbiAgICAvL2NvbnNvbGUubG9nKCdfc29ydERhdGEnLHRoaXMuc29ydGVkRmllbGQpXG4gICAgcmV0dXJuIHJvd3Muc29ydCgoYSwgYikgPT4ge1xuXG4gICAgICBsZXQgcjtcblxuICAgICAgaWYgKHR5cGVvZiAoYVtzZl0pID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgKGJbc2ZdKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIGMzOiBzdHJpbmcgPSBhW3NmXTtcbiAgICAgICAgdmFyIGM0OiBzdHJpbmcgPSBiW3NmXTtcbiAgICAgICAgaWYgKGM0ID09IG51bGwpIHtcbiAgICAgICAgICBjNCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjMyA9PSBudWxsKSB7XG4gICAgICAgICAgYzMgPSAnJztcbiAgICAgICAgfVxuICAgICAgICByID0gYzMubG9jYWxlQ29tcGFyZShjNCwgJ2VuJywgeyBzZW5zaXRpdml0eTogJ2Jhc2UnIH0pO1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mIChhW3NmXSkgPT09ICdudW1iZXInIHx8IHR5cGVvZiAoYltzZl0pID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHIgPSBhW3NmXSAtIGJbc2ZdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiAoYVtzZl0pID09PSAnYm9vbGVhbicgfHwgdHlwZW9mIChiW3NmXSkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgdmFyIGMxID0gMDtcbiAgICAgICAgICAgIGlmIChhW3NmXSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgYzEgPSAyO1xuICAgICAgICAgICAgaWYgKGFbc2ZdID09PSBmYWxzZSlcbiAgICAgICAgICAgICAgYzEgPSAxO1xuICAgICAgICAgICAgdmFyIGMyID0gMDtcbiAgICAgICAgICAgIGlmIChiW3NmXSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgYzIgPSAyO1xuICAgICAgICAgICAgaWYgKGJbc2ZdID09PSBmYWxzZSlcbiAgICAgICAgICAgICAgYzIgPSAxO1xuICAgICAgICAgICAgciA9IGMxIC0gYzI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHIgPSBhW3NmXSA8IGJbc2ZdXG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgICAgLy9jb25zb2xlLmxvZygnQ29tcGFyZSAnICsgYVtzZl0gKyAnIDw9PiAnICsgYltzZl0gKyAnICA9ICcgKyByICsgJyB0aGlzLnNvcnRlZEZpZWxkLnJldmVyc2UnICsgdGhpcy5zb3J0ZWRGaWVsZC5yZXZlcnNlKVxuICAgICAgaWYgKHRoaXMuc29ydGVkRmllbGQucmV2ZXJzZSkge1xuICAgICAgICByZXR1cm4gciAqIC0xXG4gICAgICB9XG4gICAgICByZXR1cm4gclxuICAgIH0pO1xuXG4gIH1cblxuICBzb3J0QnkoY29sKSB7XG4gICAgLy8gY29uc29sZS5sb2coY29sKTtcbiAgICBpZiAodGhpcy5zb3J0ZWRGaWVsZC5maWVsZCA9PSBjb2wucHJvcCkge1xuICAgICAgdGhpcy5zb3J0ZWRGaWVsZC5yZXZlcnNlID0gIXRoaXMuc29ydGVkRmllbGQucmV2ZXJzZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNvcnRlZEZpZWxkLnJldmVyc2UgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5zb3J0ZWRGaWVsZC5maWVsZCA9IGNvbC5wcm9wO1xuICAgIGlmICh0aGlzLnBhZ2luYXRpb24pIHtcbiAgICAgIHRoaXMuc29ydC5lbWl0KHRoaXMuc29ydGVkRmllbGQpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMuX2NoYW5nZVBhZ2UodGhpcy5jdXJyZW50X3BhZ2UsIHRoaXMucm93cywgdHJ1ZSk7XG4gICAgfVxuXG4gIH1cblxuICBTZWxlY3RSb3coaW5kZXgsIHJvdykge1xuICAgIGlmICh0aGlzLmNhblNlbGVjdCA9PT0gXCJyb3dcIikge1xuICAgICAgdGhpcy5yb3dfc2VsZWN0ZWQgPSBpbmRleDtcbiAgICAgIHRoaXMuY2VsbF9zZWxlY3RlZCA9IG51bGw7XG4gICAgICBsZXQgdHJ1ZUluZGV4ID0gdGhpcy5jdXJyZW50X3BhZ2UgKiB0aGlzLmxpbWl0ICsgaW5kZXg7XG4gICAgICAvL2xldCBkYXRhID0gdGhpcy5yb3dzW3RydWVJbmRleF07XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIlNlbGVjdFJvdyB0cnVlSW5kZXhcIiwgdHJ1ZUluZGV4KTtcbiAgICAgIHRoaXMuc2VsZWN0LmVtaXQoPE1hRGF0YUdyaWRTZWxlY3RFdmVudD57IGluZGV4OiB0cnVlSW5kZXgsIHJvdzogcm93IH0pO1xuICAgIH1cbiAgfVxuXG4gIFNlbGVjdENlbGwoaW5kZXgsIHJvdywgY29sKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJTZWxlY3RDZWxsIFNlbGVjdFwiLCBpbmRleCwgcm93LCBjb2wpO1xuICAgIGlmICh0aGlzLmNhblNlbGVjdCA9PT0gXCJjZWxsXCIpIHtcbiAgICAgIHRoaXMucm93X3NlbGVjdGVkID0gaW5kZXg7XG4gICAgICB0aGlzLmNlbGxfc2VsZWN0ZWQgPSBjb2wucHJvcDtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiU2VsZWN0Q2VsbCBTZWxlY3RcIiwgaW5kZXgsIHJvdywgY29sKTtcbiAgICAgIGxldCB0cnVlSW5kZXggPSB0aGlzLmN1cnJlbnRfcGFnZSAqIHRoaXMubGltaXQgKyBpbmRleDtcbiAgICAgIC8vY29uc29sZS5sb2coXCJEYXRhIEdyaWQgdHJ1ZUluZGV4XCIsIHRydWVJbmRleCk7XG4gICAgICB0aGlzLnNlbGVjdC5lbWl0KDxNYURhdGFHcmlkU2VsZWN0RXZlbnQ+eyBpbmRleDogdHJ1ZUluZGV4LCByb3c6IHJvdywgcHJvcDogY29sLnByb3AsIHZhbHVlOiByb3dbY29sLnByb3BdLCB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJDaGFuZ2UoZTogTWFEYXRhR3JpZEZpbHRlckV2ZW50KSB7XG4gICAgdGhpcy5leHRGaWx0ZXJDaGFuZ2UuZW1pdChlKTtcbiAgfVxuXG4gIHRpbWVvdXQgPSBudWxsO1xuICBwcml2YXRlIF9jaGFuZ2VIZWFkZXJGaWx0ZXIoZTogYW55KSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9kZWxheUNoYW5nZUhlYWRlckZpbHRlcihlKTtcbiAgICB9LCA1MDApO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVsYXlDaGFuZ2VIZWFkZXJGaWx0ZXIoZTogYW55KSB7XG4gICAgbGV0IGNvbmRpdGlvbnMgPSBbXTtcbiAgICB0aGlzLmhlYWRlcmZpbHRlci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAvL2l0ZW0uZmlsdGVyX3ZhbHVlO1xuICAgICAgbGV0IGNvbmRpdGlvbiA9IGl0ZW0uZ2V0RmlsdGVyKCk7XG4gICAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICAgIGlmIChjb25kaXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25kaXRpb25zLnB1c2goJ2FuZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbmRpdGlvbnMucHVzaChjb25kaXRpb24pO1xuICAgICAgfVxuICAgICAgLy9jb25zb2xlLmxvZyhpdGVtLmNvbC5wcm9wICsgJyA9PiAnK2l0ZW0uZmlsdGVyX3ZhbHVlKTtcbiAgICB9KVxuICAgIC8vIGNvbnNvbGUubG9nKFwiQ09ORElUSU9OU1wiLCBjb25kaXRpb25zKTtcbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uID09IGZhbHNlKSB7XG4gICAgICB0aGlzLmNvbmRpdGlvbnMgPSBjb25kaXRpb25zO1xuICAgICAgdGhpcy5fY2hhbmdlUGFnZSgwLCB0aGlzLnJvd3MsIHRydWUpO1xuICAgICAgdGhpcy5maWx0ZXJDaGFuZ2UuZW1pdCg8TWFEYXRhR3JpZEhlYWRGaWx0ZXJFdmVudD57IHdoZXJlOiBjb25kaXRpb25zLCBkYXRhOiB0aGlzLnRlbXAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlsdGVyQ2hhbmdlLmVtaXQoPE1hRGF0YUdyaWRIZWFkRmlsdGVyRXZlbnQ+eyB3aGVyZTogY29uZGl0aW9ucyB9KTtcbiAgICB9XG5cblxuICB9XG5cbn1cbiIsIjwhLS0gI2dyaWRmaWx0ZXIgKm5nSWY9XCJleHRGaWx0ZXJcIiAtLT5cclxuPG1hLWRhdGEtZ3JpZC1maWx0ZXIgI2dyaWRmaWx0ZXIgKm5nSWY9XCJleHRGaWx0ZXIgJiYgaXNCcm93c2VyXCIgW2N1c3RvbUNTU109XCJjdXN0b21DU1NcIiAgWyhzZWFyY2hWYWx1ZSldPVwic2VhcmNoVmFsdWVcIiBbY29sdW1uc109XCJjb2x1bW5zXCIgIChmaWx0ZXJDaGFuZ2UpPVwiX2ZpbHRlckNoYW5nZSgkZXZlbnQpXCI+PC9tYS1kYXRhLWdyaWQtZmlsdGVyPlxyXG48ZGl2IGNsYXNzPVwiZGF0YWdyaWRfcGFnZVwiICpuZ0lmPVwiaXNCcm93c2VyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2Nyb2xsZXJcIj5cclxuICAgICAgICA8dGFibGUgY2xhc3M9XCJ7e2N1c3RvbUNTU319Z3JpZF90YWJsZVwiPlxyXG4gICAgICAgICAgICA8IS0tIEhFQURFUiAtLT5cclxuICAgICAgICAgICAgPHRyIGNsYXNzPVwiZ3JpZF9yb3dcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInt7Y3VzdG9tQ1NTfX1ncmlkX2NlbGwge3tjdXN0b21DU1N9fWdyaWRfY2VsbF90aXRsZVwiICBbbmdDbGFzc109XCJ7Z3JpZF9jZWxsX2ZpcnN0OiBpPT0wfVwiICpuZ0Zvcj1cImxldCBjb2wgb2YgY29sdW1ucztpbmRleCBhcyBpOyBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGF0YWdyaWQtY2VsbGhlYWRlci1jb250YWluZXIgW25nU3dpdGNoXT1cInRydWVcIiAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGF0YWdyaWQtY2VsbC1lbGVtZW50ICpuZ1N3aXRjaENhc2U9XCJjb2wuZGF0YVR5cGUgPT0gJ3NlbGVjdG9yJ1wiPjxtYS1kYXRhLWdyaWQtY2VsbC1zZWxlY3RvciBbcHJvcF09XCJjb2wucHJvcFwiIFtpc0hlYWRlcl09XCJ0cnVlXCIgW2NvbF09XCJjb2xcIiBbbXlHcmlkXT1cIm15R3JpZFwiIFtkYXRhXT1cInJvd3NfZGlzcGxheWVkXCI+PC9tYS1kYXRhLWdyaWQtY2VsbC1zZWxlY3Rvcj48c3Bhbj57e2NvbC50aXRsZX19PC9zcGFuPjwvZGF0YWdyaWQtY2VsbC1lbGVtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGF0YWdyaWQtY2VsbC1lbGVtZW50ICpuZ1N3aXRjaERlZmF1bHQgPnt7Y29sLnRpdGxlfX08L2RhdGFncmlkLWNlbGwtZWxlbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8L2RhdGFncmlkLWNlbGxoZWFkZXItY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiY29sLmRhdGFUeXBlICE9ICdzZWxlY3RvcicgJiYgY29sLmlzUm93TnVtYmVyICE9PSB0cnVlICYmIGNvbC5zb3J0ZWQgPT09IHRydWVcIiAoY2xpY2spPVwic29ydEJ5KGNvbClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJzb3J0ZWRGaWVsZC5maWVsZCAhPSBjb2wucHJvcFwiIGNsYXNzPVwiZ3JpZF9zb3J0IHRpbnkgbWF0ZXJpYWwtaWNvbnNcIj5zd2FwX3ZlcnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwic29ydGVkRmllbGQuZmllbGQgPT09IGNvbC5wcm9wICYmIHNvcnRlZEZpZWxkLnJldmVyc2VcIiBjbGFzcz1cImdyaWRfc29ydCB0aW55IG1hdGVyaWFsLWljb25zXCI+YXJyb3dfZHJvcF9kb3duPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInNvcnRlZEZpZWxkLmZpZWxkID09PSBjb2wucHJvcCAmJiAhc29ydGVkRmllbGQucmV2ZXJzZVwiIGNsYXNzPVwiZ3JpZF9zb3J0IHRpbnkgbWF0ZXJpYWwtaWNvbnNcIj5hcnJvd19kcm9wX3VwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8IS0tIEhlYWQgRmlsdGVyIC0tPlxyXG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJ7e2N1c3RvbUNTU319Z3JpZF9yb3dcIiAqbmdJZj1cImhlYWRGaWx0ZXJcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInt7Y3VzdG9tQ1NTfX1ncmlkX2NlbGwge3tjdXN0b21DU1N9fWdyaWRfY2VsbF90aXRsZVwiICBbbmdDbGFzc109XCJ7Z3JpZF9jZWxsX2ZpcnN0OiBpPT0wfVwiICpuZ0Zvcj1cImxldCBjb2wgb2YgY29sdW1ucztpbmRleCBhcyBpOyBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWEtZGF0YS1ncmlkLWhlYWQtZmlsdGVyICNoZWFkZXJmaWx0ZXIgKm5nSWY9XCIoY29sLmRhdGFUeXBlICYmIGNvbC5kYXRhVHlwZSAhPSAnc2VsZWN0b3InICYmICBjb2wuaGVhZEZpbHRlciAhPT0gZmFsc2UpIHx8IChjb2wuaGVhZEZpbHRlciAhPT0gZmFsc2UgJiYgY29sLmhlYWRGaWx0ZXIgIT0gbnVsbCAgJiYgY29sLmhlYWRGaWx0ZXIubGVuZ3RoID4gMClcIiBbY29sXT1cImNvbFwiIChjaGFuZ2VIZWFkZXJGaWx0ZXIpPVwiX2NoYW5nZUhlYWRlckZpbHRlcigkZXZlbnQpXCI+PC9tYS1kYXRhLWdyaWQtaGVhZC1maWx0ZXI+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8IS0tIERBVEEgLS0+XHJcbiAgICAgICAgICAgIDx0ciBjbGFzcz1cInt7Y3VzdG9tQ1NTfX1ncmlkX3Jvd1wiICpuZ0Zvcj1cImxldCByb3cgb2Ygcm93c19kaXNwbGF5ZWQ7IFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3QgYXMgaXNMYXN0Um93OyBcclxuICAgICAgICAgICAgICAgICAgICBldmVuIGFzIHBhaXI7IFxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4IGFzIGk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0IGFzIGlzRmlyc3RSb3dcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIlNlbGVjdFJvdyhpLHJvdylcIiBbbmdDbGFzc109XCJ7J2dyaWRfcm93X3NlbGVjdGVkJzogaSA9PSByb3dfc2VsZWN0ZWQgJiYgIWNlbGxfc2VsZWN0ZWQsICdDU1NjbGFzc0V2ZW4nOiBwYWlyLCdDU1NjbGFzc09kZCc6ICFwYWlyLCAnZ3JpZF9yb3dfZmlyc3QnOiBpc0ZpcnN0Um93LCAnZ3JpZF9yb3dfZW5kJzogaXNMYXN0Um93fVwiPlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ7e2N1c3RvbUNTU319Z3JpZF9jZWxsIHt7Y29sLmNzc0NsYXNzfX1cIiAqbmdGb3I9XCJsZXQgY29sIG9mIGNvbHVtbnM7IFxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4IGFzIG5jb2w7IFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50IGFzIG1heGNvbDsgXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3QgYXMgaXNGaXJzdENvbFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3QgYXMgaXNMYXN0Q29sO1wiIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnZ3JpZF9jZWxsX3NlbGVjdGVkJzogaSA9PSByb3dfc2VsZWN0ZWQgJiYgY29sLnByb3AgPT0gY2VsbF9zZWxlY3RlZCwgJ2dyaWRfY2VsbF9lbmQnOiBpc0xhc3RDb2wsJ2dyaWRfY2VsbF9maXJzdCc6IGlzRmlyc3RDb2x9XCJcclxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiU2VsZWN0Q2VsbChpLHJvdyxjb2wpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAge3tjb2wucHJvcH19IHJlcHLDqXNlbnRlIGxlIG5vbSBkZSBjb2xvbm5lIGQndW4gw6lsw6ltZW50IGNvbnRlbnUgZGFucyAnY29sbXVucycgLS0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJjb2wuaXNSb3dOdW1iZXIgPT09IHRydWU7IHRoZW4gUm93TnVtYmVyQmxvY2sgZWxzZSBkYXRhQmxvY2tcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI1Jvd051bWJlckJsb2NrPnt7aX19PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2RhdGFCbG9jaz4ge3t1W2NvbC5wcm9wXSB8IGRhdGFHcmlkUGlwZSA6dSA6Y319PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGF0YWdyaWQtY2VsbC1jb250YWluZXIgW25nU3dpdGNoXT1cInRydWVcIiAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGF0YWdyaWQtY2VsbC1lbGVtZW50ICpuZ1N3aXRjaENhc2U9XCJjb2wuZGF0YVR5cGUgPT0gJ3NlbGVjdG9yJ1wiIG5nU3dpdGNoQnJlYWs+PG1hLWRhdGEtZ3JpZC1jZWxsLXNlbGVjdG9yIFtwcm9wXT1cImNvbC5wcm9wXCIgW2NvbF09XCJjb2xcIiBbbXlHcmlkXT1cIm15R3JpZFwiIFtkYXRhXT1cInJvd1wiPjwvbWEtZGF0YS1ncmlkLWNlbGwtc2VsZWN0b3I+PC9kYXRhZ3JpZC1jZWxsLWVsZW1lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRhZ3JpZC1jZWxsLWVsZW1lbnQgKm5nU3dpdGNoQ2FzZT1cImNvbC51c2VUZW1wbGF0ZSAhPSBudWxsXCIgbmdTd2l0Y2hCcmVhaz48bWEtZGF0YS1ncmlkLXRlbXBsYXRlLWNlbGwtdDEgW3RlbXBsYXRlXT1cImNvbC51c2VUZW1wbGF0ZVwiIFtwcm9wXT1cImNvbC5wcm9wXCIgW2NvbF09XCJjb2xcIiBbbXlHcmlkXT1cIm15R3JpZFwiIFtkYXRhXT1cInJvd1wiPjwvbWEtZGF0YS1ncmlkLXRlbXBsYXRlLWNlbGwtdDE+PC9kYXRhZ3JpZC1jZWxsLWVsZW1lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRhZ3JpZC1jZWxsLWVsZW1lbnQgKm5nU3dpdGNoQ2FzZT1cImNvbC5jYW5FZGl0ID09PSB0cnVlXCIgbmdTd2l0Y2hCcmVhaz48bWEtZGF0YS1ncmlkLWNlbGxlZGl0LWl0ZW0gW3Byb3BdPVwiY29sLnByb3BcIiBbY29sXT1cImNvbFwiIFtteUdyaWRdPVwibXlHcmlkXCIgW2RhdGFdPVwicm93XCI+PC9tYS1kYXRhLWdyaWQtY2VsbGVkaXQtaXRlbT48L2RhdGFncmlkLWNlbGwtZWxlbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGFncmlkLWNlbGwtZWxlbWVudCAqbmdTd2l0Y2hDYXNlPVwiY29sLmlzUm93TnVtYmVyID09PSB0cnVlXCIgbmdTd2l0Y2hCcmVhaz57e2l9fTwvZGF0YWdyaWQtY2VsbC1lbGVtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGF0YWdyaWQtY2VsbC1lbGVtZW50ICpuZ1N3aXRjaENhc2U9XCJjb2wuaXNSb3dIVE1MID09PSB0cnVlXCIgbmdTd2l0Y2hCcmVhaz48c3BhbiBbaW5uZXJIVE1MXT1cInJvd1tjb2wucHJvcF1cIj48L3NwYW4+PC9kYXRhZ3JpZC1jZWxsLWVsZW1lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRhZ3JpZC1jZWxsLWVsZW1lbnQgKm5nU3dpdGNoQ2FzZT1cImNvbC51c2VUZW1wbGF0ZSA9PSBudWxsICYmIGNvbC5jYW5FZGl0ICE9PSB0cnVlICYmIChjb2wuZGF0YVR5cGUgPT0gJ2Jvb2xlYW4nIHx8IGNvbC5kYXRhVHlwZSA9PSAnYm9vbCcpXCIgbmdTd2l0Y2hCcmVhaz48bWEtZGF0YS1ncmlkLWNlbGwtYm9vbGVhbiBbY29sXT1cImNvbFwiIFtkYXRhXT1cInJvd1wiPjwvbWEtZGF0YS1ncmlkLWNlbGwtYm9vbGVhbj48L2RhdGFncmlkLWNlbGwtZWxlbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGFncmlkLWNlbGwtZWxlbWVudCAqbmdTd2l0Y2hEZWZhdWx0Pnt7cm93W2NvbC5wcm9wXSB8IG1hRGF0YUdyaWRQaXBlIDpyb3cgOmNvbH19PC9kYXRhZ3JpZC1jZWxsLWVsZW1lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kYXRhZ3JpZC1jZWxsLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiIHN0eWxlPVwicGFkZGluZy10b3A6IDVweDtcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHMzIFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZV9udW1iZXJcIj4je3tuYl9yZWNvcmR9fSByZWNvcmQ8c3BhbiAqbmdJZj1cIm5iX3JlY29yZCA+IDFcIj5zPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgczggZGl2X3BhZ2luYXRpb25cIj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwicGFnaW5hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGxpICpuZ0lmPVwibWF4X3BhZ2UgPj0gOVwiIChjbGljayk9XCJGYXN0RGVjcmVtZW50UGFnZSgpXCIgW25nQ2xhc3NdPVwieydkaXNhYmxlZCc6IGN1cnJlbnRfcGFnZSA9PSAwLCcnOiBjdXJyZW50X3BhZ2UgIT0gMH1cIj48YSAgY2xhc3M9XCJwb2ludGVyXCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBzbWFsbFwiPmZhc3RfcmV3aW5kPC9pPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpICpuZ0lmPVwibmJfcmVjb3JkID4gMFwiIChjbGljayk9XCJEZWNyZW1lbnRQYWdlKClcIiBbbmdDbGFzc109XCJ7J2Rpc2FibGVkJzogY3VycmVudF9wYWdlID09IDAsJyc6IGN1cnJlbnRfcGFnZSAhPSAwfVwiPjxhICBjbGFzcz1cInBvaW50ZXJcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zIHNtYWxsXCI+Y2hldnJvbl9sZWZ0PC9pPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBuX3BhZ2Ugb2YgcGFnZXNcIiAoY2xpY2spPVwiX2NoYW5nZVBhZ2Uobl9wYWdlKVwiIFtuZ0NsYXNzXT1cInsnYWN0aXZlJzogY3VycmVudF9wYWdlID09IG5fcGFnZSwnJzogY3VycmVudF9wYWdlICE9IG5fcGFnZX1cIiA+PGEgY2xhc3M9XCJwb2ludGVyXCIgY2xhc3M9XCJhX3BhZ2luYXRpb24gc21hbGwgXCI+e3sobl9wYWdlKzEpfX08L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cIm5iX3JlY29yZCA+IDBcIiAoY2xpY2spPVwiSW5jcmVtZW50UGFnZSgpXCIgW25nQ2xhc3NdPVwieydkaXNhYmxlZCc6IGN1cnJlbnRfcGFnZSA9PSBtYXhfcGFnZSwnJzogY3VycmVudF9wYWdlICE9IG1heF9wYWdlfVwiPjxhICBjbGFzcz1cInBvaW50ZXJcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zIHNtYWxsXCI+Y2hldnJvbl9yaWdodDwvaT48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cIm1heF9wYWdlID49IDlcIiAoY2xpY2spPVwiRmFzdEluY3JlbWVudFBhZ2UoKVwiIFtuZ0NsYXNzXT1cInsnZGlzYWJsZWQnOiBjdXJyZW50X3BhZ2UgPT0gbWF4X3BhZ2UsJyc6IGN1cnJlbnRfcGFnZSAhPSBtYXhfcGFnZX1cIj48YSBjbGFzcz1cInBvaW50ZXJcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zIHNtYWxsXCI+ZmFzdF9mb3J3YXJkPC9pPjwvYT48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiAgICBcclxuICAgICJdfQ==