import { ViewChild, ViewChildren } from '@angular/core';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataGridHeadFilterComponent } from './components/data-grid-head-filter/data-grid-head-filter.component';
import { MaGridFilterComponent } from './ma-grid-filter.component';
import { MaFilter } from "@amn31/filter-multiple-conditions";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./ma-grid-filter.component";
import * as i3 from "./components/data-grid-head-filter/data-grid-head-filter.component";
import * as i4 from "./components/data-grid-template-cell/data-grid-template-cell.component";
import * as i5 from "./components/data-grid-cell-boolean/data-grid-cell-boolean.component";
import * as i6 from "./pipes/data-grid-pipe.pipe";
function MaDataGridComponent_ma_data_grid_filter_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ma-data-grid-filter", 15, 16);
    i0.ɵɵlistener("searchValueChange", function MaDataGridComponent_ma_data_grid_filter_0_Template_ma_data_grid_filter_searchValueChange_0_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.searchValue = $event; })("filterChange", function MaDataGridComponent_ma_data_grid_filter_0_Template_ma_data_grid_filter_filterChange_0_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13._filterChange($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("customCSS", ctx_r0.customCSS)("searchValue", ctx_r0.searchValue)("columns", ctx_r0.columns);
} }
function MaDataGridComponent_td_5_span_2_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 21);
    i0.ɵɵtext(1, "swap_vert");
    i0.ɵɵelementEnd();
} }
function MaDataGridComponent_td_5_span_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 21);
    i0.ɵɵtext(1, "arrow_drop_down");
    i0.ɵɵelementEnd();
} }
function MaDataGridComponent_td_5_span_2_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 21);
    i0.ɵɵtext(1, "arrow_drop_up");
    i0.ɵɵelementEnd();
} }
function MaDataGridComponent_td_5_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 19);
    i0.ɵɵlistener("click", function MaDataGridComponent_td_5_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r22); const col_r14 = i0.ɵɵnextContext().$implicit; const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.sortBy(col_r14); });
    i0.ɵɵtemplate(1, MaDataGridComponent_td_5_span_2_span_1_Template, 2, 0, "span", 20);
    i0.ɵɵtemplate(2, MaDataGridComponent_td_5_span_2_span_2_Template, 2, 0, "span", 20);
    i0.ɵɵtemplate(3, MaDataGridComponent_td_5_span_2_span_3_Template, 2, 0, "span", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r14 = i0.ɵɵnextContext().$implicit;
    const ctx_r16 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r16.sortedField.field != col_r14.prop);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r16.sortedField.field === col_r14.prop && ctx_r16.sortedField.reverse);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r16.sortedField.field === col_r14.prop && !ctx_r16.sortedField.reverse);
} }
const _c0 = function (a0) { return { grid_cell_first: a0 }; };
function MaDataGridComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 17);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, MaDataGridComponent_td_5_span_2_Template, 4, 3, "span", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("", ctx_r1.customCSS, "grid_cell ", ctx_r1.customCSS, "grid_cell_title");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0, i_r15 == 0));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", col_r14.title, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r14.isRowNumber !== true && col_r14.sorted === true);
} }
function MaDataGridComponent_tr_6_td_1_ma_data_grid_head_filter_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ma-data-grid-head-filter", 23, 24);
    i0.ɵɵlistener("changeHeaderFilter", function MaDataGridComponent_tr_6_td_1_ma_data_grid_head_filter_1_Template_ma_data_grid_head_filter_changeHeaderFilter_0_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(3); return ctx_r29._changeHeaderFilter($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r25 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("col", col_r25);
} }
function MaDataGridComponent_tr_6_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 17);
    i0.ɵɵtemplate(1, MaDataGridComponent_tr_6_td_1_ma_data_grid_head_filter_1_Template, 2, 1, "ma-data-grid-head-filter", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    const ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate2("", ctx_r24.customCSS, "grid_cell ", ctx_r24.customCSS, "grid_cell_title");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c0, i_r26 == 0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r25.dataType || col_r25.headFilter);
} }
function MaDataGridComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, MaDataGridComponent_tr_6_td_1_Template, 2, 8, "td", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("", ctx_r2.customCSS, "grid_row");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.columns);
} }
function MaDataGridComponent_tr_7_td_1_datagrid_cell_element_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "datagrid-cell-element");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r35 = i0.ɵɵnextContext(2).index;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i_r35);
} }
function MaDataGridComponent_tr_7_td_1_datagrid_cell_element_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "datagrid-cell-element");
    i0.ɵɵelement(1, "span", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r38 = i0.ɵɵnextContext().$implicit;
    const row_r32 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", row_r32[col_r38.prop], i0.ɵɵsanitizeHtml);
} }
function MaDataGridComponent_tr_7_td_1_datagrid_cell_element_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "datagrid-cell-element");
    i0.ɵɵelement(1, "ma-data-grid-template-cell-t1", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r38 = i0.ɵɵnextContext().$implicit;
    const row_r32 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", col_r38.useTemplate)("data", row_r32);
} }
function MaDataGridComponent_tr_7_td_1_datagrid_cell_element_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "datagrid-cell-element");
    i0.ɵɵelement(1, "ma-data-grid-cell-boolean", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r38 = i0.ɵɵnextContext().$implicit;
    const row_r32 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", col_r38.useTemplate)("col", col_r38)("data", row_r32);
} }
function MaDataGridComponent_tr_7_td_1_datagrid_cell_element_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "datagrid-cell-element");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "maDataGridPipe");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r38 = i0.ɵɵnextContext().$implicit;
    const row_r32 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(2, 1, row_r32[col_r38.prop], row_r32, col_r38));
} }
const _c1 = function (a0, a1, a2) { return { "grid_cell_selected": a0, "grid_cell_end": a1, "grid_cell_first": a2 }; };
function MaDataGridComponent_tr_7_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r59 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 25);
    i0.ɵɵlistener("click", function MaDataGridComponent_tr_7_td_1_Template_td_click_0_listener() { i0.ɵɵrestoreView(_r59); const col_r38 = ctx.$implicit; const ctx_r58 = i0.ɵɵnextContext(); const i_r35 = ctx_r58.index; const row_r32 = ctx_r58.$implicit; const ctx_r57 = i0.ɵɵnextContext(); return ctx_r57.SelectCell(i_r35, row_r32, col_r38); });
    i0.ɵɵelementStart(1, "datagrid-cell-container", 26);
    i0.ɵɵtemplate(2, MaDataGridComponent_tr_7_td_1_datagrid_cell_element_2_Template, 2, 1, "datagrid-cell-element", 27);
    i0.ɵɵtemplate(3, MaDataGridComponent_tr_7_td_1_datagrid_cell_element_3_Template, 2, 1, "datagrid-cell-element", 27);
    i0.ɵɵtemplate(4, MaDataGridComponent_tr_7_td_1_datagrid_cell_element_4_Template, 2, 2, "datagrid-cell-element", 27);
    i0.ɵɵtemplate(5, MaDataGridComponent_tr_7_td_1_datagrid_cell_element_5_Template, 2, 3, "datagrid-cell-element", 27);
    i0.ɵɵtemplate(6, MaDataGridComponent_tr_7_td_1_datagrid_cell_element_6_Template, 3, 5, "datagrid-cell-element", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r38 = ctx.$implicit;
    const isFirstCol_r41 = ctx.first;
    const isLastCol_r42 = ctx.last;
    const i_r35 = i0.ɵɵnextContext().index;
    const ctx_r37 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("", ctx_r37.customCSS, "grid_cell ", col_r38.cssClass, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(10, _c1, i_r35 == ctx_r37.row_selected && col_r38.prop == ctx_r37.cell_selected, isLastCol_r42, isFirstCol_r41));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", col_r38.isRowNumber === true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", col_r38.isRowHTML === true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", col_r38.useTemplate != null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", col_r38.dataType == "boolean");
} }
const _c2 = function (a0, a1, a2, a3, a4) { return { "grid_row_selected": a0, "CSSclassEven": a1, "CSSclassOdd": a2, "grid_row_first": a3, "grid_row_end": a4 }; };
function MaDataGridComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 25);
    i0.ɵɵlistener("click", function MaDataGridComponent_tr_7_Template_tr_click_0_listener() { i0.ɵɵrestoreView(_r62); const i_r35 = ctx.index; const row_r32 = ctx.$implicit; const ctx_r61 = i0.ɵɵnextContext(); return ctx_r61.SelectRow(i_r35, row_r32); });
    i0.ɵɵtemplate(1, MaDataGridComponent_tr_7_td_1_Template, 7, 14, "td", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const isLastRow_r33 = ctx.last;
    const pair_r34 = ctx.even;
    const i_r35 = ctx.index;
    const isFirstRow_r36 = ctx.first;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("", ctx_r3.customCSS, "grid_row");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction5(5, _c2, i_r35 == ctx_r3.row_selected && !ctx_r3.cell_selected, pair_r34, !pair_r34, isFirstRow_r36, isLastRow_r33));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r3.columns);
} }
function MaDataGridComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "s");
    i0.ɵɵelementEnd();
} }
const _c3 = function (a0, a1) { return { "disabled": a0, "": a1 }; };
function MaDataGridComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    const _r64 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 25);
    i0.ɵɵlistener("click", function MaDataGridComponent_li_15_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r64); const ctx_r63 = i0.ɵɵnextContext(); return ctx_r63.FastDecrementPage(); });
    i0.ɵɵelementStart(1, "a", 32);
    i0.ɵɵelementStart(2, "i", 33);
    i0.ɵɵtext(3, "fast_rewind");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c3, ctx_r5.current_page == 0, ctx_r5.current_page != 0));
} }
function MaDataGridComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    const _r66 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 25);
    i0.ɵɵlistener("click", function MaDataGridComponent_li_16_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r66); const ctx_r65 = i0.ɵɵnextContext(); return ctx_r65.DecrementPage(); });
    i0.ɵɵelementStart(1, "a", 32);
    i0.ɵɵelementStart(2, "i", 33);
    i0.ɵɵtext(3, "chevron_left");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c3, ctx_r6.current_page == 0, ctx_r6.current_page != 0));
} }
const _c4 = function (a0, a1) { return { "active": a0, "": a1 }; };
function MaDataGridComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    const _r69 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 25);
    i0.ɵɵlistener("click", function MaDataGridComponent_li_17_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r69); const n_page_r67 = ctx.$implicit; const ctx_r68 = i0.ɵɵnextContext(); return ctx_r68._changePage(n_page_r67); });
    i0.ɵɵelementStart(1, "a", 34);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const n_page_r67 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c4, ctx_r7.current_page == n_page_r67, ctx_r7.current_page != n_page_r67));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(n_page_r67 + 1);
} }
function MaDataGridComponent_li_18_Template(rf, ctx) { if (rf & 1) {
    const _r71 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 25);
    i0.ɵɵlistener("click", function MaDataGridComponent_li_18_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r71); const ctx_r70 = i0.ɵɵnextContext(); return ctx_r70.IncrementPage(); });
    i0.ɵɵelementStart(1, "a", 32);
    i0.ɵɵelementStart(2, "i", 33);
    i0.ɵɵtext(3, "chevron_right");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c3, ctx_r8.current_page == ctx_r8.max_page, ctx_r8.current_page != ctx_r8.max_page));
} }
function MaDataGridComponent_li_19_Template(rf, ctx) { if (rf & 1) {
    const _r73 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 25);
    i0.ɵɵlistener("click", function MaDataGridComponent_li_19_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r73); const ctx_r72 = i0.ɵɵnextContext(); return ctx_r72.FastIncrementPage(); });
    i0.ɵɵelementStart(1, "a", 32);
    i0.ɵɵelementStart(2, "i", 33);
    i0.ɵɵtext(3, "fast_forward");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c3, ctx_r9.current_page == ctx_r9.max_page, ctx_r9.current_page != ctx_r9.max_page));
} }
// import { PipeLengthPipe } from 'src/app/pipes/pipe-length.pipe';
export class MaDataGridComponent {
    constructor() {
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
        this.rows = [];
        this.change = new EventEmitter();
        this.select = new EventEmitter();
        this.extFilterChange = new EventEmitter();
        this.filterChange = new EventEmitter();
        this.changePage = new EventEmitter();
        this.sort = new EventEmitter();
        this.canSelectChange = new EventEmitter();
        this.grid_cell_first = this.customCSS + 'grid_cell_first';
        this.grid_row_selected = this.customCSS + 'grid_row_selected';
        this.current_page = -1;
        this.max_page = 1;
        this.max_nb_page = 6;
        this.nb_page = 1;
        this.startat = 0;
        this.searchValue = "c";
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
    }
    resetSelection() {
        this.cell_selected = -1;
        this.row_selected = -1;
    }
    ngOnChanges(changes) {
        // console.log("this.searchValue: " + this.searchValue)
        // console.log('ngOnChanges ', changes);
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
MaDataGridComponent.ɵfac = function MaDataGridComponent_Factory(t) { return new (t || MaDataGridComponent)(); };
MaDataGridComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MaDataGridComponent, selectors: [["ma-data-grid"]], viewQuery: function MaDataGridComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(MaGridFilterComponent, true);
        i0.ɵɵviewQuery(DataGridHeadFilterComponent, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.gridfilter = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.headerfilter = _t);
    } }, inputs: { columns: "columns", limit: "limit", canSelect: "canSelect", extFilter: "extFilter", headFilter: "headFilter", pagination: "pagination", page: "page", count: "count", customCSS: "customCSS", rows: "rows" }, outputs: { change: "change", select: "select", extFilterChange: "extFilterChange", filterChange: "filterChange", changePage: "changePage", sort: "sort", canSelectChange: "canSelectChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 20, vars: 14, consts: [[3, "customCSS", "searchValue", "columns", "searchValueChange", "filterChange", 4, "ngIf"], [1, "datagrid_page"], [1, "scroller"], [1, "grid_row"], [3, "class", "ngClass", 4, "ngFor", "ngForOf"], [3, "class", 4, "ngIf"], [3, "class", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "row", 2, "padding-top", "5px"], [1, "col", "s3"], [1, "page_number"], [4, "ngIf"], [1, "col", "s8", "div_pagination"], [1, "pagination"], [3, "ngClass", "click", 4, "ngIf"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "customCSS", "searchValue", "columns", "searchValueChange", "filterChange"], ["gridfilter", ""], [3, "ngClass"], [3, "click", 4, "ngIf"], [3, "click"], ["class", "grid_sort tiny material-icons", 4, "ngIf"], [1, "grid_sort", "tiny", "material-icons"], [3, "col", "changeHeaderFilter", 4, "ngIf"], [3, "col", "changeHeaderFilter"], ["headerfilter", ""], [3, "ngClass", "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "innerHTML"], [3, "template", "data"], [3, "template", "col", "data"], [1, "pointer"], [1, "material-icons", "small"], [1, "a_pagination", "small"]], template: function MaDataGridComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, MaDataGridComponent_ma_data_grid_filter_0_Template, 2, 3, "ma-data-grid-filter", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "table");
        i0.ɵɵelementStart(4, "tr", 3);
        i0.ɵɵtemplate(5, MaDataGridComponent_td_5_Template, 3, 9, "td", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, MaDataGridComponent_tr_6_Template, 2, 4, "tr", 5);
        i0.ɵɵtemplate(7, MaDataGridComponent_tr_7_Template, 2, 11, "tr", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 7);
        i0.ɵɵelementStart(9, "div", 8);
        i0.ɵɵelementStart(10, "div", 9);
        i0.ɵɵtext(11);
        i0.ɵɵtemplate(12, MaDataGridComponent_span_12_Template, 2, 0, "span", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 11);
        i0.ɵɵelementStart(14, "ul", 12);
        i0.ɵɵtemplate(15, MaDataGridComponent_li_15_Template, 4, 4, "li", 13);
        i0.ɵɵtemplate(16, MaDataGridComponent_li_16_Template, 4, 4, "li", 13);
        i0.ɵɵtemplate(17, MaDataGridComponent_li_17_Template, 3, 5, "li", 14);
        i0.ɵɵtemplate(18, MaDataGridComponent_li_18_Template, 4, 4, "li", 13);
        i0.ɵɵtemplate(19, MaDataGridComponent_li_19_Template, 4, 4, "li", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.extFilter);
        i0.ɵɵadvance(3);
        i0.ɵɵclassMapInterpolate1("", ctx.customCSS, "grid_table");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.columns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.headFilter);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.rows_displayed);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1("#", ctx.nb_record, " record");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nb_record > 1);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.max_page >= 9);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nb_record > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.pages);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nb_record > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.max_page >= 9);
    } }, directives: [i1.NgIf, i1.NgForOf, i2.MaGridFilterComponent, i1.NgClass, i3.DataGridHeadFilterComponent, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i4.DataGridTemplateCellComponent, i5.DataGridCellBooleanComponent], pipes: [i6.DataGridPipePipe], styles: ["[_nghost-%COMP%]{--color-border:#667;--color-defaut:#667}.datagrid_page[_ngcontent-%COMP%]   .CSSclassOdd[_ngcontent-%COMP%]{background-color:#ddd}.datagrid_page[_ngcontent-%COMP%]{height:100%;width:100%}.div_pagination[_ngcontent-%COMP%]   .pointer[_ngcontent-%COMP%]{cursor:default}.div_pagination[_ngcontent-%COMP%]   .page_number[_ngcontent-%COMP%]{color:var(--color-defaut);font-size:1rem;padding:0 10px}.datagrid_page[_ngcontent-%COMP%]   .div_pagination[_ngcontent-%COMP%]{display:-ms-inline-grid;display:inline-grid;justify-content:flex-end}.a_pagination[_ngcontent-%COMP%]:hover, .div_pagination[_ngcontent-%COMP%]   .a_pagination[_ngcontent-%COMP%]{color:var(--color-border);display:inline-block;font-size:1rem;line-height:30px;padding:0 10px;text-decoration:none}.datagrid_page[_ngcontent-%COMP%]   .scroller[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center;background-color:#fefefe;overflow:auto;scrollbar-color:var(--color-border) #fefefe;scrollbar-width:auto;width:100%}.grid_table[_ngcontent-%COMP%]   .grid_row_selected[_ngcontent-%COMP%]{background-color:#667;color:#ddd}.grid_table[_ngcontent-%COMP%]   .grid_sort[_ngcontent-%COMP%]{cursor:pointer}.datagrid_page[_ngcontent-%COMP%]   .grid_table[_ngcontent-%COMP%]{width:100%}.grid_table[_ngcontent-%COMP%]   .grid_cell_title[_ngcontent-%COMP%]{border-top:1px solid var(--color-border);color:var(--color-defaut);font-weight:700;text-align:center}.grid_table[_ngcontent-%COMP%]   .grid_cell_selected[_ngcontent-%COMP%]{background-color:#667;color:#ddd}.grid_table[_ngcontent-%COMP%]   .grid_cell_first[_ngcontent-%COMP%]{border-left:10px solid var(--color-border)}.grid_table[_ngcontent-%COMP%]   .grid_cell_end[_ngcontent-%COMP%]{border-right:0 solid var(--color-border)}.grid_table[_ngcontent-%COMP%]   .grid_cell[_ngcontent-%COMP%]{border-right:1px solid var(--color-border)}.grid_table[_ngcontent-%COMP%]   .grid_row_first[_ngcontent-%COMP%]{border-bottom:1px solid var(--color-border)}.grid_table[_ngcontent-%COMP%]   .grid_row_last[_ngcontent-%COMP%]{border-bottom:0 solid var(--color-border)}.grid_table[_ngcontent-%COMP%]   .grid_row[_ngcontent-%COMP%]{border-bottom:1px solid var(--color-border)}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MaDataGridComponent, [{
        type: Component,
        args: [{
                selector: 'ma-data-grid',
                //providers: [PipeLengthPipe],
                templateUrl: './ma-data-grid.component.html',
                styleUrls: ['./ma-data-grid.component.css'],
            }]
    }], function () { return []; }, { columns: [{
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
        }], gridfilter: [{
            type: ViewChild,
            args: [MaGridFilterComponent, { static: true }]
        }], headerfilter: [{
            type: ViewChildren,
            args: [DataGridHeadFilterComponent]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtZGF0YS1ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJEOi9NeUhvbWUvYW5kcm9pZC93b3Jrc3BhY2UvZ2l0L21hLW5nLWRhdGFncmlkL3Byb2plY3RzL21hLWRhdGEtZ3JpZC9zcmMvIiwic291cmNlcyI6WyJsaWIvbWEtZGF0YS1ncmlkLmNvbXBvbmVudC50cyIsImxpYi9tYS1kYXRhLWdyaWQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFhLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBRWpILE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBb0IsUUFBUSxFQUFFLE1BQU0sbUNBQW1DLENBQUE7Ozs7Ozs7Ozs7SUNKOUUsbURBQTRMO0lBQWhILDZQQUE2Qix1T0FBQTtJQUE2RCxpQkFBc0I7OztJQUF6SSw0Q0FBdUIsbUNBQUEsMkJBQUE7OztJQVNsRCxnQ0FBa0Y7SUFBQSx5QkFBUztJQUFBLGlCQUFPOzs7SUFDbEcsZ0NBQTBHO0lBQUEsK0JBQWU7SUFBQSxpQkFBTzs7O0lBQ2hJLGdDQUEyRztJQUFBLDZCQUFhO0lBQUEsaUJBQU87Ozs7SUFIbkksZ0NBQ0k7SUFEMEQsK09BQXFCO0lBQy9FLG1GQUFrRjtJQUNsRixtRkFBMEc7SUFDMUcsbUZBQTJHO0lBQy9HLGlCQUFPOzs7O0lBSEcsZUFBcUM7SUFBckMsZ0VBQXFDO0lBQ3JDLGVBQTZEO0lBQTdELGdHQUE2RDtJQUM3RCxlQUE4RDtJQUE5RCxpR0FBOEQ7Ozs7SUFMNUUsOEJBQ0k7SUFBQSxZQUNBO0lBQUEsNEVBQ0k7SUFJUixpQkFBSzs7Ozs7SUFQRCxr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O1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUVHLElBQUk7a0JBQVosS0FBSztZQUNJLE1BQU07a0JBQWYsTUFBTTtZQUNHLE1BQU07a0JBQWYsTUFBTTtZQUNHLGVBQWU7a0JBQXhCLE1BQU07WUFDRyxZQUFZO2tCQUFyQixNQUFNO1lBQ0csVUFBVTtrQkFBbkIsTUFBTTtZQUNHLElBQUk7a0JBQWIsTUFBTTtZQUNHLGVBQWU7a0JBQXhCLE1BQU07WUFFNkMsVUFBVTtrQkFBN0QsU0FBUzttQkFBQyxxQkFBcUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDUCxZQUFZO2tCQUF0RCxZQUFZO21CQUFDLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1ZXJ5TGlzdCwgVmlld0NoaWxkLCBWaWV3Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YUdyaWRIZWFkRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RhdGEtZ3JpZC1oZWFkLWZpbHRlci9kYXRhLWdyaWQtaGVhZC1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1hRGF0YUdyaWRGaWx0ZXJFdmVudCwgTWFEYXRhR3JpZENvbHVtbk9wdGlvbnMsIE1hRGF0YUdyaWRTZWxlY3RNZXRob2QsIE1hRGF0YUdyaWRTZWxlY3RFdmVudCwgTWFEYXRhR3JpZEhlYWRGaWx0ZXJFdmVudCB9IGZyb20gJy4vaW50ZXJmYWNlcy9tYS1kYXRhLWdyaWQtb3B0aW9ucyc7XG5pbXBvcnQgeyBNYUdyaWRGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL21hLWdyaWQtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJDb25kaXRpb25zLCBNYUZpbHRlciB9IGZyb20gXCJAYW1uMzEvZmlsdGVyLW11bHRpcGxlLWNvbmRpdGlvbnNcIlxuLy8gaW1wb3J0IHsgUGlwZUxlbmd0aFBpcGUgfSBmcm9tICdzcmMvYXBwL3BpcGVzL3BpcGUtbGVuZ3RoLnBpcGUnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWEtZGF0YS1ncmlkJyxcbiAgLy9wcm92aWRlcnM6IFtQaXBlTGVuZ3RoUGlwZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9tYS1kYXRhLWdyaWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYS1kYXRhLWdyaWQuY29tcG9uZW50LmNzcyddLFxuXG59KVxuZXhwb3J0IGNsYXNzIE1hRGF0YUdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgLyogIFwiY29sdW1uc1wiIGVsZW1lbnQgZCdlbnRyw6llXG4gICAgIFwiY2hhbmdlXCIgZWxlbWVudCBkZSBzb3J0aXIgcGVybWV0dGFudCBkZSBwcmVuZHJlIGVuIGNvbXB0ZVxuICAgICAgICAgICAgICAgICAgIGwnZXZlbnQgT25DaGFuZ2VzXG4gICAgPG1hLWRhdGEtZ3JpZCBbY29sdW1uc109XCJjb2x1bW5zXCIgIFtyb3dzXT1cInJvd3NcIiAoY2hhbmdlKT1cIkNoYW5nZURhdGEoJGV2ZW50KVwiPjwvbWEtZGF0YS1ncmlkPlxuICovXG4gIEBJbnB1dCgpIGNvbHVtbnM6IE1hRGF0YUdyaWRDb2x1bW5PcHRpb25zW10gPSBbXTtcbiAgQElucHV0KCkgbGltaXQ6IG51bWJlciA9IDc7XG4gIEBJbnB1dCgpIGNhblNlbGVjdDogTWFEYXRhR3JpZFNlbGVjdE1ldGhvZDtcbiAgQElucHV0KCkgZXh0RmlsdGVyOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGhlYWRGaWx0ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgcGFnaW5hdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBwYWdlOiBudW1iZXIgPSAtMTtcbiAgQElucHV0KCkgY291bnQ6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIGN1c3RvbUNTUzogIHN0cmluZyA9IFwiXCI7XG5cbiAgQElucHV0KCkgcm93czogYW55ID0gW107XG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8TWFEYXRhR3JpZFNlbGVjdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgZXh0RmlsdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxNYURhdGFHcmlkRmlsdGVyRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBmaWx0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNoYW5nZVBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNhblNlbGVjdENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TWFEYXRhR3JpZFNlbGVjdE1ldGhvZD4oKTtcblxuICBAVmlld0NoaWxkKE1hR3JpZEZpbHRlckNvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSkgZ3JpZGZpbHRlcjogTWFHcmlkRmlsdGVyQ29tcG9uZW50O1xuICBAVmlld0NoaWxkcmVuKERhdGFHcmlkSGVhZEZpbHRlckNvbXBvbmVudCkgaGVhZGVyZmlsdGVyOiBRdWVyeUxpc3Q8RGF0YUdyaWRIZWFkRmlsdGVyQ29tcG9uZW50PjtcblxuICBncmlkX2NlbGxfZmlyc3QgPSB0aGlzLmN1c3RvbUNTUyArICdncmlkX2NlbGxfZmlyc3QnXG4gIGdyaWRfcm93X3NlbGVjdGVkID0gdGhpcy5jdXN0b21DU1MgKyAnZ3JpZF9yb3dfc2VsZWN0ZWQnO1xuICBjdXJyZW50X3BhZ2U6IG51bWJlciA9IC0xO1xuICBtYXhfcGFnZTogbnVtYmVyID0gMTtcbiAgbWF4X25iX3BhZ2U6IG51bWJlciA9IDY7XG4gIG5iX3BhZ2U6IG51bWJlciA9IDE7XG4gIHN0YXJ0YXQ6IG51bWJlciA9IDA7XG4gIHNlYXJjaFZhbHVlOiBzdHJpbmcgPSBcImNcIlxuICBcbiAgcm93c19kaXNwbGF5ZWQ6IGFueSA9IFtdO1xuICBwYWdlcyA9IFtdO1xuICBjb25kaXRpb25zOiBGaWx0ZXJDb25kaXRpb25zID0gW11cbiAgbmJfcmVjb3JkOiBudW1iZXIgPSAwO1xuICByb3dfc2VsZWN0ZWQ6IG51bWJlciA9IC0xO1xuICBjZWxsX3NlbGVjdGVkOiBudW1iZXIgPSAtMTtcblxuICB0ZW1wOiBhbnlbXTtcblxuICBzb3J0ZWRGaWVsZCA9IHtcbiAgICBmaWVsZDogJycsXG4gICAgcmV2ZXJzZTogdHJ1ZVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKC8qcHJpdmF0ZSBwaXBlTGVuZ3RoOiBQaXBlTGVuZ3RoUGlwZSovKSB7IFxuICAgIC8vY29uc29sZS5sb2coJ1lPJylcbiAgfVxuXG4gIHJlc2V0U2VsZWN0aW9uKCkge1xuICAgIHRoaXMuY2VsbF9zZWxlY3RlZCA9IC0xO1xuICAgIHRoaXMucm93X3NlbGVjdGVkID0gLTE7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLnNlYXJjaFZhbHVlOiBcIiArIHRoaXMuc2VhcmNoVmFsdWUpXG4gICAgLy8gY29uc29sZS5sb2coJ25nT25DaGFuZ2VzICcsIGNoYW5nZXMpO1xuICAgIGlmIChjaGFuZ2VzLnBhZ2UgJiYgY2hhbmdlcy5wYWdlLmN1cnJlbnRWYWx1ZSA+PSAwKSB7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmNhblNlbGVjdCAmJiBjaGFuZ2VzLmNhblNlbGVjdC5jdXJyZW50VmFsdWUpIHtcbiAgICAgIC8vdGhpcy5wYWdlID0gY2hhbmdlcy5wYWdlLmN1cnJlbnRWYWx1ZTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjYW5TZWxlY3QgICcsIGNoYW5nZXMuY2FuU2VsZWN0LmN1cnJlbnRWYWx1ZSk7XG4gICAgICB0aGlzLmNhblNlbGVjdENoYW5nZS5lbWl0KGNoYW5nZXMuY2FuU2VsZWN0LnByZXZpb3VzVmFsdWUpXG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmxpbWl0ICYmIGNoYW5nZXMubGltaXQuY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLmxpbWl0ID0gY2hhbmdlcy5saW1pdC5jdXJyZW50VmFsdWU7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnJvd3MgJiYgY2hhbmdlcy5yb3dzLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy50ZW1wID0gY2hhbmdlcy5yb3dzLmN1cnJlbnRWYWx1ZTtcbiAgICAgIHRoaXMuX2NoYW5nZVBhZ2UodGhpcy5jdXJyZW50X3BhZ2UsIHRoaXMudGVtcCwgdHJ1ZSk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKFwiYSAtIG5nT25DaGFuZ2VzIGN1cnJlbnRfcGFnZSA9PiBcIiArIHRoaXMuY3VycmVudF9wYWdlKVxuICB9XG5cbiAgSW5jcmVtZW50UGFnZSgpIHtcbiAgICB0aGlzLl9jaGFuZ2VQYWdlKHRoaXMuY3VycmVudF9wYWdlICsgMSwgdGhpcy50ZW1wKVxuICB9XG5cbiAgRGVjcmVtZW50UGFnZSgpIHtcbiAgICB0aGlzLl9jaGFuZ2VQYWdlKHRoaXMuY3VycmVudF9wYWdlIC0gMSwgdGhpcy50ZW1wKVxuICB9XG5cbiAgRmFzdEluY3JlbWVudFBhZ2UoKSB7XG4gICAgbGV0IHAgPSB0aGlzLmN1cnJlbnRfcGFnZSArIDU7IC8vTWF0aC5yb3VuZCh0aGlzLm1heF9wYWdlIC8gNTApO1xuICAgIHRoaXMuX2NoYW5nZVBhZ2UocCwgdGhpcy50ZW1wKVxuICB9XG5cbiAgRmFzdERlY3JlbWVudFBhZ2UoKSB7XG4gICAgbGV0IHAgPSB0aGlzLmN1cnJlbnRfcGFnZSAtIDU7IC8vTWF0aC5yb3VuZCh0aGlzLm1heF9wYWdlIC8gNTApOztcbiAgICB0aGlzLl9jaGFuZ2VQYWdlKHAsIHRoaXMudGVtcClcbiAgfVxuXG4gIHByaXZhdGUgX2NoYW5nZVBhZ2Uobl9wYWdlOiBudW1iZXIsIHJvd3M/OiBhbnksIGZvcmNlPzogYm9vbGVhbikge1xuICAgIGlmICghcm93cylcbiAgICAgIHJvd3MgPSB0aGlzLnRlbXA7XG5cbiAgICAvL1xuXG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbiA9PSBmYWxzZSkge1xuICAgICAgaWYgKGZvcmNlID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMudGVtcCA9IE1hRmlsdGVyLkZpbHRlckJ5Q29uZGl0aW9ucyh0aGlzLmNvbmRpdGlvbnMsIHJvd3MpO1xuICAgICAgICB0aGlzLnRlbXAgPSB0aGlzLl9zb3J0RGF0YSh0aGlzLnRlbXApO1xuICAgICAgICByb3dzID0gdGhpcy50ZW1wO1xuICAgICAgfVxuICAgICAgdGhpcy5jb3VudCA9IHJvd3MubGVuZ3RoO1xuICAgIH1cbiAgICAvLyBDYWxjdWwgZHUgbWF4X3BhZ2VcbiAgICB0aGlzLm1heF9wYWdlID0gMDtcbiAgICBpZiAodGhpcy5jb3VudCA+PSAwICYmIHRoaXMubGltaXQgPiAwKSB7XG4gICAgICB0aGlzLm1heF9wYWdlID0gTWF0aC5mbG9vcih0aGlzLmNvdW50IC8gdGhpcy5saW1pdCk7XG4gICAgICBpZiAoKHRoaXMuY291bnQgJSB0aGlzLmxpbWl0KSAhPSAwKSB7XG4gICAgICAgIHRoaXMubWF4X3BhZ2UgKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5fcGFnZSA8IDApIHtcbiAgICAgIG5fcGFnZSA9IDA7XG4gICAgfVxuICAgIGlmIChuX3BhZ2UgPj0gdGhpcy5tYXhfcGFnZSAmJiB0aGlzLm1heF9wYWdlID4gMCkge1xuICAgICAgbl9wYWdlID0gdGhpcy5tYXhfcGFnZSAtIDE7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhbmdlUGFnZSBcIiArIG5fcGFnZSArICcgLyAnICsgdGhpcy5tYXhfcGFnZSArICcgYyA9PiAnICsgdGhpcy5jdXJyZW50X3BhZ2UgKyAnIG1heF9wYWdlICcgKyB0aGlzLm1heF9wYWdlKTtcblxuICAgIGlmICh0aGlzLnBhZ2UgPj0gMCB8fCB0aGlzLnBhZ2luYXRpb24pIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRfcGFnZSAhPSBuX3BhZ2UpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50X3BhZ2UgPSBuX3BhZ2U7XG4gICAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSAnJztcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PiBFTUlUIENIQU5HRSBcIilcbiAgICAgICAgdGhpcy5jaGFuZ2VQYWdlLmVtaXQobl9wYWdlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJvd19zZWxlY3RlZCA9IC0xO1xuICAgICAgdGhpcy5jdXJyZW50X3BhZ2UgPSBuX3BhZ2U7XG4gICAgICB0aGlzLm5iX3JlY29yZCA9IHRoaXMuY291bnQ7XG4gICAgICB0aGlzLnN0YXJ0YXQgPSAwO1xuICAgICAgdGhpcy5yb3dzX2Rpc3BsYXllZCA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IHJvd3MgJiYgaSA8IHRoaXMubGltaXQgJiYgaSA8IHRoaXMuY291bnQgJiYgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5yb3dzX2Rpc3BsYXllZC5wdXNoKHJvd3NbaV0pO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcblxuICAgICAgLy8gU0FOUyBQQUdJTkFUSU9OXG4gICAgICAvLyBjb25zb2xlLmVycm9yKFwiU0FOUyBQQUdJTkFUSU9OXCIpXG4gICAgICBcbiAgICAgIGlmICghZm9yY2UgJiYgKHRoaXMuY3VycmVudF9wYWdlID09IG5fcGFnZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5yb3dfc2VsZWN0ZWQgPSAtMTtcbiAgICAgIHRoaXMuY3VycmVudF9wYWdlID0gbl9wYWdlO1xuICAgICAgdGhpcy5uYl9yZWNvcmQgPSAwO1xuICAgICAgdGhpcy5zdGFydGF0ID0gMDtcbiAgICAgIHRoaXMucm93c19kaXNwbGF5ZWQgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IHJvd3MgJiYgaSA8IHRoaXMubGltaXQgJiYgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHJvd3MubGVuZ3RoID4gKHRoaXMuY3VycmVudF9wYWdlICogdGhpcy5saW1pdCkgKyBpKSB7XG4gICAgICAgICAgdGhpcy5yb3dzX2Rpc3BsYXllZC5wdXNoKHJvd3NbdGhpcy5jdXJyZW50X3BhZ2UgKiB0aGlzLmxpbWl0ICsgaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLm5iX3JlY29yZCA9IHJvd3MubGVuZ3RoO1xuXG5cbiAgICB9XG4gICAgLy8gQ2FsY3VsIGR1IG5vbWJyZSBkZSBwYWdlIGVuIGJhcyBkdSBkYXRhZ3JpZFxuICAgIHRoaXMuc3RhcnRhdCA9IHRoaXMubGltaXQgKiAodGhpcy5jdXJyZW50X3BhZ2UgKyAxKTtcbiAgICBpZiAodGhpcy5zdGFydGF0ID4gdGhpcy5jb3VudClcbiAgICAgIHRoaXMuc3RhcnRhdCA9IHRoaXMuY291bnQ7XG4gICAgdGhpcy5wYWdlcyA9IFtdO1xuICAgIGxldCBzdGFydF9wYWdlID0gdGhpcy5jdXJyZW50X3BhZ2UgLSBNYXRoLnJvdW5kKHRoaXMubWF4X25iX3BhZ2UgLyAyKTtcbiAgICBpZiAoc3RhcnRfcGFnZSA8IDApXG4gICAgICBzdGFydF9wYWdlID0gMDtcbiAgICBmb3IgKGxldCBwID0gc3RhcnRfcGFnZSwgbmJwID0gMDsgcm93cyAmJiBwIDwgdGhpcy5jb3VudCAvIHRoaXMubGltaXQgJiYgbmJwIDwgdGhpcy5tYXhfbmJfcGFnZTsgbmJwKyssIHArKykge1xuICAgICAgdGhpcy5wYWdlcy5wdXNoKHApXG4gICAgfVxuXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvL3RoaXMucGlwZUxlbmd0aC50cmFuc2Zvcm0oXCJiYmJcIik7XG5cbiAgfVxuXG4gIHByaXZhdGUgX3NvcnREYXRhKHJvd3MpIHtcbiAgICBsZXQgc2YgPSB0aGlzLnNvcnRlZEZpZWxkLmZpZWxkO1xuICAgIC8vY29uc29sZS5sb2coJ19zb3J0RGF0YScsdGhpcy5zb3J0ZWRGaWVsZClcbiAgICByZXR1cm4gcm93cy5zb3J0KChhLCBiKSA9PiB7XG5cbiAgICAgIGxldCByO1xuXG4gICAgICBpZiAodHlwZW9mIChhW3NmXSkgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiAoYltzZl0pID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgYzM6IHN0cmluZyA9IGFbc2ZdO1xuICAgICAgICB2YXIgYzQgOiBzdHJpbmc9IGJbc2ZdO1xuICAgICAgICBpZiAoYzQgPT0gbnVsbCkge1xuICAgICAgICAgIGM0ID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGMzID09IG51bGwpIHtcbiAgICAgICAgICBjMyA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHIgPSBjMy5sb2NhbGVDb21wYXJlKGM0LCAnZW4nLCB7IHNlbnNpdGl2aXR5OiAnYmFzZScgfSk7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0eXBlb2YgKGFbc2ZdKSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIChiW3NmXSkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgciA9IGFbc2ZdIC0gYltzZl1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodHlwZW9mIChhW3NmXSkgPT09ICdib29sZWFuJyB8fCB0eXBlb2YgKGJbc2ZdKSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICB2YXIgYzEgPSAwO1xuICAgICAgICAgICAgaWYgKGFbc2ZdID09PSB0cnVlKVxuICAgICAgICAgICAgICBjMSA9IDI7XG4gICAgICAgICAgICBpZiAoYVtzZl0gPT09IGZhbHNlKVxuICAgICAgICAgICAgICBjMSA9IDE7XG4gICAgICAgICAgICB2YXIgYzIgPSAwO1xuICAgICAgICAgICAgaWYgKGJbc2ZdID09PSB0cnVlKVxuICAgICAgICAgICAgICBjMiA9IDI7XG4gICAgICAgICAgICBpZiAoYltzZl0gPT09IGZhbHNlKVxuICAgICAgICAgICAgICBjMiA9IDE7XG4gICAgICAgICAgICByID0gYzEgLSBjMjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgciA9IGFbc2ZdIDwgYltzZl1cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICAvL2NvbnNvbGUubG9nKCdDb21wYXJlICcgKyBhW3NmXSArICcgPD0+ICcgKyBiW3NmXSArICcgID0gJyArIHIgKyAnIHRoaXMuc29ydGVkRmllbGQucmV2ZXJzZScgKyB0aGlzLnNvcnRlZEZpZWxkLnJldmVyc2UpXG4gICAgICBpZiAodGhpcy5zb3J0ZWRGaWVsZC5yZXZlcnNlKSB7XG4gICAgICAgIHJldHVybiByICogLTFcbiAgICAgIH1cbiAgICAgIHJldHVybiByXG4gICAgfSk7XG5cbiAgfVxuXG4gIHNvcnRCeShjb2wpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhjb2wpO1xuICAgIGlmICh0aGlzLnNvcnRlZEZpZWxkLmZpZWxkID09IGNvbC5wcm9wKSB7XG4gICAgICB0aGlzLnNvcnRlZEZpZWxkLnJldmVyc2UgPSAhdGhpcy5zb3J0ZWRGaWVsZC5yZXZlcnNlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc29ydGVkRmllbGQucmV2ZXJzZSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnNvcnRlZEZpZWxkLmZpZWxkID0gY29sLnByb3A7XG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbikge1xuICAgICAgdGhpcy5zb3J0LmVtaXQodGhpcy5zb3J0ZWRGaWVsZCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5fY2hhbmdlUGFnZSh0aGlzLmN1cnJlbnRfcGFnZSwgdGhpcy5yb3dzLCB0cnVlKTtcbiAgICB9XG5cbiAgfVxuXG4gIFNlbGVjdFJvdyhpbmRleCwgcm93KSB7XG4gICAgaWYgKHRoaXMuY2FuU2VsZWN0ID09PSBcInJvd1wiKSB7XG4gICAgICB0aGlzLnJvd19zZWxlY3RlZCA9IGluZGV4O1xuICAgICAgdGhpcy5jZWxsX3NlbGVjdGVkID0gbnVsbDtcbiAgICAgIGxldCB0cnVlSW5kZXggPSB0aGlzLmN1cnJlbnRfcGFnZSAqIHRoaXMubGltaXQgKyBpbmRleDtcbiAgICAgIC8vbGV0IGRhdGEgPSB0aGlzLnJvd3NbdHJ1ZUluZGV4XTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiU2VsZWN0Um93IHRydWVJbmRleFwiLCB0cnVlSW5kZXgpO1xuICAgICAgdGhpcy5zZWxlY3QuZW1pdCg8TWFEYXRhR3JpZFNlbGVjdEV2ZW50PnsgaW5kZXg6IHRydWVJbmRleCwgcm93OiByb3cgfSk7XG4gICAgfVxuICB9XG5cbiAgU2VsZWN0Q2VsbChpbmRleCwgcm93LCBjb2wpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIlNlbGVjdENlbGwgU2VsZWN0XCIsIGluZGV4LCByb3csIGNvbCk7XG4gICAgaWYgKHRoaXMuY2FuU2VsZWN0ID09PSBcImNlbGxcIikge1xuICAgICAgdGhpcy5yb3dfc2VsZWN0ZWQgPSBpbmRleDtcbiAgICAgIHRoaXMuY2VsbF9zZWxlY3RlZCA9IGNvbC5wcm9wO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJTZWxlY3RDZWxsIFNlbGVjdFwiLCBpbmRleCwgcm93LCBjb2wpO1xuICAgICAgbGV0IHRydWVJbmRleCA9IHRoaXMuY3VycmVudF9wYWdlICogdGhpcy5saW1pdCArIGluZGV4O1xuICAgICAgLy9jb25zb2xlLmxvZyhcIkRhdGEgR3JpZCB0cnVlSW5kZXhcIiwgdHJ1ZUluZGV4KTtcbiAgICAgIHRoaXMuc2VsZWN0LmVtaXQoPE1hRGF0YUdyaWRTZWxlY3RFdmVudD57IGluZGV4OiB0cnVlSW5kZXgsIHJvdzogcm93LCBwcm9wOiBjb2wucHJvcCwgdmFsdWU6IHJvd1tjb2wucHJvcF0sIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckNoYW5nZShlOiBNYURhdGFHcmlkRmlsdGVyRXZlbnQpIHtcbiAgICB0aGlzLmV4dEZpbHRlckNoYW5nZS5lbWl0KGUpO1xuICB9XG5cbiAgdGltZW91dCA9IG51bGw7XG4gIHByaXZhdGUgX2NoYW5nZUhlYWRlckZpbHRlcihlOiBhbnkpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX2RlbGF5Q2hhbmdlSGVhZGVyRmlsdGVyKGUpO1xuICAgIH0sIDUwMCk7XG4gIH1cblxuICBwcml2YXRlIF9kZWxheUNoYW5nZUhlYWRlckZpbHRlcihlOiBhbnkpIHtcbiAgICBsZXQgY29uZGl0aW9ucyA9IFtdO1xuICAgIHRoaXMuaGVhZGVyZmlsdGVyLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIC8vaXRlbS5maWx0ZXJfdmFsdWU7XG4gICAgICBsZXQgY29uZGl0aW9uID0gaXRlbS5nZXRGaWx0ZXIoKTtcbiAgICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgICAgaWYgKGNvbmRpdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbmRpdGlvbnMucHVzaCgnYW5kJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uZGl0aW9ucy5wdXNoKGNvbmRpdGlvbik7XG4gICAgICB9XG4gICAgICAvL2NvbnNvbGUubG9nKGl0ZW0uY29sLnByb3AgKyAnID0+ICcraXRlbS5maWx0ZXJfdmFsdWUpO1xuICAgIH0pXG4gICAgLy8gY29uc29sZS5sb2coXCJDT05ESVRJT05TXCIsIGNvbmRpdGlvbnMpO1xuICAgIGlmICh0aGlzLnBhZ2luYXRpb24gPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuY29uZGl0aW9ucyA9IGNvbmRpdGlvbnM7XG4gICAgICB0aGlzLl9jaGFuZ2VQYWdlKDAsIHRoaXMucm93cywgdHJ1ZSk7XG4gICAgICB0aGlzLmZpbHRlckNoYW5nZS5lbWl0KDxNYURhdGFHcmlkSGVhZEZpbHRlckV2ZW50Pnsgd2hlcmU6IGNvbmRpdGlvbnMsIGRhdGE6IHRoaXMudGVtcCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWx0ZXJDaGFuZ2UuZW1pdCg8TWFEYXRhR3JpZEhlYWRGaWx0ZXJFdmVudD57IHdoZXJlOiBjb25kaXRpb25zIH0pO1xuICAgIH1cblxuXG4gIH1cblxufVxuIiwiPCEtLSAjZ3JpZGZpbHRlciAqbmdJZj1cImV4dEZpbHRlclwiIC0tPlxyXG48bWEtZGF0YS1ncmlkLWZpbHRlciAjZ3JpZGZpbHRlciAqbmdJZj1cImV4dEZpbHRlclwiIFtjdXN0b21DU1NdPVwiY3VzdG9tQ1NTXCIgIFsoc2VhcmNoVmFsdWUpXT1cInNlYXJjaFZhbHVlXCIgW2NvbHVtbnNdPVwiY29sdW1uc1wiICAoZmlsdGVyQ2hhbmdlKT1cIl9maWx0ZXJDaGFuZ2UoJGV2ZW50KVwiPjwvbWEtZGF0YS1ncmlkLWZpbHRlcj5cclxuPGRpdiBjbGFzcz1cImRhdGFncmlkX3BhZ2VcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJzY3JvbGxlclwiPlxyXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cInt7Y3VzdG9tQ1NTfX1ncmlkX3RhYmxlXCI+XHJcbiAgICAgICAgICAgIDwhLS0gSEVBREVSIC0tPlxyXG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJncmlkX3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwie3tjdXN0b21DU1N9fWdyaWRfY2VsbCB7e2N1c3RvbUNTU319Z3JpZF9jZWxsX3RpdGxlXCIgIFtuZ0NsYXNzXT1cIntncmlkX2NlbGxfZmlyc3Q6IGk9PTB9XCIgKm5nRm9yPVwibGV0IGNvbCBvZiBjb2x1bW5zO2luZGV4IGFzIGk7IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7Y29sLnRpdGxlfX0gXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJjb2wuaXNSb3dOdW1iZXIgIT09IHRydWUgJiYgY29sLnNvcnRlZCA9PT0gdHJ1ZVwiIChjbGljayk9XCJzb3J0QnkoY29sKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInNvcnRlZEZpZWxkLmZpZWxkICE9IGNvbC5wcm9wXCIgY2xhc3M9XCJncmlkX3NvcnQgdGlueSBtYXRlcmlhbC1pY29uc1wiPnN3YXBfdmVydDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJzb3J0ZWRGaWVsZC5maWVsZCA9PT0gY29sLnByb3AgJiYgc29ydGVkRmllbGQucmV2ZXJzZVwiIGNsYXNzPVwiZ3JpZF9zb3J0IHRpbnkgbWF0ZXJpYWwtaWNvbnNcIj5hcnJvd19kcm9wX2Rvd248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwic29ydGVkRmllbGQuZmllbGQgPT09IGNvbC5wcm9wICYmICFzb3J0ZWRGaWVsZC5yZXZlcnNlXCIgY2xhc3M9XCJncmlkX3NvcnQgdGlueSBtYXRlcmlhbC1pY29uc1wiPmFycm93X2Ryb3BfdXA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwhLS0gSGVhZCBGaWx0ZXIgLS0+XHJcbiAgICAgICAgICAgIDx0ciBjbGFzcz1cInt7Y3VzdG9tQ1NTfX1ncmlkX3Jvd1wiICpuZ0lmPVwiaGVhZEZpbHRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwie3tjdXN0b21DU1N9fWdyaWRfY2VsbCB7e2N1c3RvbUNTU319Z3JpZF9jZWxsX3RpdGxlXCIgIFtuZ0NsYXNzXT1cIntncmlkX2NlbGxfZmlyc3Q6IGk9PTB9XCIgKm5nRm9yPVwibGV0IGNvbCBvZiBjb2x1bW5zO2luZGV4IGFzIGk7IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYS1kYXRhLWdyaWQtaGVhZC1maWx0ZXIgI2hlYWRlcmZpbHRlciAqbmdJZj1cImNvbC5kYXRhVHlwZSB8fCBjb2wuaGVhZEZpbHRlclwiIFtjb2xdPVwiY29sXCIgKGNoYW5nZUhlYWRlckZpbHRlcik9XCJfY2hhbmdlSGVhZGVyRmlsdGVyKCRldmVudClcIj48L21hLWRhdGEtZ3JpZC1oZWFkLWZpbHRlcj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwhLS0gREFUQSAtLT5cclxuICAgICAgICAgICAgPHRyIGNsYXNzPVwie3tjdXN0b21DU1N9fWdyaWRfcm93XCIgKm5nRm9yPVwibGV0IHJvdyBvZiByb3dzX2Rpc3BsYXllZDsgXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdCBhcyBpc0xhc3RSb3c7IFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW4gYXMgcGFpcjsgXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggYXMgaTsgXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3QgYXMgaXNGaXJzdFJvd1wiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiU2VsZWN0Um93KGkscm93KVwiIFtuZ0NsYXNzXT1cInsnZ3JpZF9yb3dfc2VsZWN0ZWQnOiBpID09IHJvd19zZWxlY3RlZCAmJiAhY2VsbF9zZWxlY3RlZCwgJ0NTU2NsYXNzRXZlbic6IHBhaXIsJ0NTU2NsYXNzT2RkJzogIXBhaXIsICdncmlkX3Jvd19maXJzdCc6IGlzRmlyc3RSb3csICdncmlkX3Jvd19lbmQnOiBpc0xhc3RSb3d9XCI+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInt7Y3VzdG9tQ1NTfX1ncmlkX2NlbGwge3tjb2wuY3NzQ2xhc3N9fVwiICpuZ0Zvcj1cImxldCBjb2wgb2YgY29sdW1uczsgXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggYXMgbmNvbDsgXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQgYXMgbWF4Y29sOyBcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdCBhcyBpc0ZpcnN0Q29sXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdCBhcyBpc0xhc3RDb2w7XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydncmlkX2NlbGxfc2VsZWN0ZWQnOiBpID09IHJvd19zZWxlY3RlZCAmJiBjb2wucHJvcCA9PSBjZWxsX3NlbGVjdGVkLCAnZ3JpZF9jZWxsX2VuZCc6IGlzTGFzdENvbCwnZ3JpZF9jZWxsX2ZpcnN0JzogaXNGaXJzdENvbH1cIlxyXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJTZWxlY3RDZWxsKGkscm93LGNvbClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tICB7e2NvbC5wcm9wfX0gcmVwcsOpc2VudGUgbGUgbm9tIGRlIGNvbG9ubmUgZCd1biDDqWzDqW1lbnQgY29udGVudSBkYW5zICdjb2xtdW5zJyAtLSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImNvbC5pc1Jvd051bWJlciA9PT0gdHJ1ZTsgdGhlbiBSb3dOdW1iZXJCbG9jayBlbHNlIGRhdGFCbG9ja1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjUm93TnVtYmVyQmxvY2s+e3tpfX08L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZGF0YUJsb2NrPiB7e3VbY29sLnByb3BdIHwgZGF0YUdyaWRQaXBlIDp1IDpjfX08L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkYXRhZ3JpZC1jZWxsLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwidHJ1ZVwiICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRhZ3JpZC1jZWxsLWVsZW1lbnQgKm5nU3dpdGNoQ2FzZT1cImNvbC5pc1Jvd051bWJlciA9PT0gdHJ1ZVwiPnt7aX19PC9kYXRhZ3JpZC1jZWxsLWVsZW1lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRhZ3JpZC1jZWxsLWVsZW1lbnQgKm5nU3dpdGNoQ2FzZT1cImNvbC5pc1Jvd0hUTUwgPT09IHRydWVcIj48c3BhbiBbaW5uZXJIVE1MXT1cInJvd1tjb2wucHJvcF1cIj48L3NwYW4+PC9kYXRhZ3JpZC1jZWxsLWVsZW1lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRhZ3JpZC1jZWxsLWVsZW1lbnQgKm5nU3dpdGNoQ2FzZT1cImNvbC51c2VUZW1wbGF0ZSAhPSBudWxsXCI+PG1hLWRhdGEtZ3JpZC10ZW1wbGF0ZS1jZWxsLXQxIFt0ZW1wbGF0ZV09XCJjb2wudXNlVGVtcGxhdGVcIiBbZGF0YV09XCJyb3dcIj48L21hLWRhdGEtZ3JpZC10ZW1wbGF0ZS1jZWxsLXQxPjwvZGF0YWdyaWQtY2VsbC1lbGVtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGF0YWdyaWQtY2VsbC1lbGVtZW50ICpuZ1N3aXRjaENhc2U9XCJjb2wuZGF0YVR5cGUgPT0gJ2Jvb2xlYW4nXCI+PG1hLWRhdGEtZ3JpZC1jZWxsLWJvb2xlYW4gW3RlbXBsYXRlXT1cImNvbC51c2VUZW1wbGF0ZVwiIFtjb2xdPVwiY29sXCIgW2RhdGFdPVwicm93XCI+PC9tYS1kYXRhLWdyaWQtY2VsbC1ib29sZWFuPjwvZGF0YWdyaWQtY2VsbC1lbGVtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGF0YWdyaWQtY2VsbC1lbGVtZW50ICpuZ1N3aXRjaERlZmF1bHQ+e3tyb3dbY29sLnByb3BdIHwgbWFEYXRhR3JpZFBpcGUgOnJvdyA6Y29sfX08L2RhdGFncmlkLWNlbGwtZWxlbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8L2RhdGFncmlkLWNlbGwtY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCIgc3R5bGU9XCJwYWRkaW5nLXRvcDogNXB4O1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgczMgXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlX251bWJlclwiPiN7e25iX3JlY29yZH19IHJlY29yZDxzcGFuICpuZ0lmPVwibmJfcmVjb3JkID4gMVwiPnM8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBzOCBkaXZfcGFnaW5hdGlvblwiPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XCJtYXhfcGFnZSA+PSA5XCIgKGNsaWNrKT1cIkZhc3REZWNyZW1lbnRQYWdlKClcIiBbbmdDbGFzc109XCJ7J2Rpc2FibGVkJzogY3VycmVudF9wYWdlID09IDAsJyc6IGN1cnJlbnRfcGFnZSAhPSAwfVwiPjxhICBjbGFzcz1cInBvaW50ZXJcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zIHNtYWxsXCI+ZmFzdF9yZXdpbmQ8L2k+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XCJuYl9yZWNvcmQgPiAwXCIgKGNsaWNrKT1cIkRlY3JlbWVudFBhZ2UoKVwiIFtuZ0NsYXNzXT1cInsnZGlzYWJsZWQnOiBjdXJyZW50X3BhZ2UgPT0gMCwnJzogY3VycmVudF9wYWdlICE9IDB9XCI+PGEgIGNsYXNzPVwicG9pbnRlclwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgc21hbGxcIj5jaGV2cm9uX2xlZnQ8L2k+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IG5fcGFnZSBvZiBwYWdlc1wiIChjbGljayk9XCJfY2hhbmdlUGFnZShuX3BhZ2UpXCIgW25nQ2xhc3NdPVwieydhY3RpdmUnOiBjdXJyZW50X3BhZ2UgPT0gbl9wYWdlLCcnOiBjdXJyZW50X3BhZ2UgIT0gbl9wYWdlfVwiID48YSBjbGFzcz1cInBvaW50ZXJcIiBjbGFzcz1cImFfcGFnaW5hdGlvbiBzbWFsbCBcIj57eyhuX3BhZ2UrMSl9fTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpICpuZ0lmPVwibmJfcmVjb3JkID4gMFwiIChjbGljayk9XCJJbmNyZW1lbnRQYWdlKClcIiBbbmdDbGFzc109XCJ7J2Rpc2FibGVkJzogY3VycmVudF9wYWdlID09IG1heF9wYWdlLCcnOiBjdXJyZW50X3BhZ2UgIT0gbWF4X3BhZ2V9XCI+PGEgIGNsYXNzPVwicG9pbnRlclwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgc21hbGxcIj5jaGV2cm9uX3JpZ2h0PC9pPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpICpuZ0lmPVwibWF4X3BhZ2UgPj0gOVwiIChjbGljayk9XCJGYXN0SW5jcmVtZW50UGFnZSgpXCIgW25nQ2xhc3NdPVwieydkaXNhYmxlZCc6IGN1cnJlbnRfcGFnZSA9PSBtYXhfcGFnZSwnJzogY3VycmVudF9wYWdlICE9IG1heF9wYWdlfVwiPjxhIGNsYXNzPVwicG9pbnRlclwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgc21hbGxcIj5mYXN0X2ZvcndhcmQ8L2k+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuICAgIFxyXG4gICAgIl19