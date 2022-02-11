import { ViewChild, ViewChildren } from '@angular/core';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataGridHeadFilterComponent } from './components/data-grid-head-filter/data-grid-head-filter.component';
import { MaGridFilterComponent } from './ma-grid-filter.component';
import { MaFilter } from "@amn31/filter-multiple-conditions";
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
MaDataGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'ma-data-grid',
                //providers: [PipeLengthPipe],
                template: "<!-- #gridfilter *ngIf=\"extFilter\" -->\r\n<ma-data-grid-filter #gridfilter *ngIf=\"extFilter\" [customCSS]=\"customCSS\"  [(searchValue)]=\"searchValue\" [columns]=\"columns\"  (filterChange)=\"_filterChange($event)\"></ma-data-grid-filter>\r\n<div class=\"datagrid_page\">\r\n    <div class=\"scroller\">\r\n        <table class=\"{{customCSS}}grid_table\">\r\n            <!-- HEADER -->\r\n            <tr class=\"grid_row\">\r\n                <td class=\"{{customCSS}}grid_cell {{customCSS}}grid_cell_title\"  [ngClass]=\"{grid_cell_first: i==0}\" *ngFor=\"let col of columns;index as i; \">\r\n                    <datagrid-cellheader-container [ngSwitch]=\"true\"  >\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.dataType == 'selector'\"><ma-data-grid-cell-selector [prop]=\"col.prop\" [isHeader]=\"true\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"rows_displayed\"></ma-data-grid-cell-selector><span>{{col.title}}</span></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchDefault >{{col.title}}</datagrid-cell-element>\r\n                    </datagrid-cellheader-container>\r\n                    \r\n                    <span *ngIf=\"col.dataType != 'selector' && col.isRowNumber !== true && col.sorted === true\" (click)=\"sortBy(col)\">\r\n                        <span *ngIf=\"sortedField.field != col.prop\" class=\"grid_sort tiny material-icons\">swap_vert</span>\r\n                        <span *ngIf=\"sortedField.field === col.prop && sortedField.reverse\" class=\"grid_sort tiny material-icons\">arrow_drop_down</span>\r\n                        <span *ngIf=\"sortedField.field === col.prop && !sortedField.reverse\" class=\"grid_sort tiny material-icons\">arrow_drop_up</span>\r\n                    </span> \r\n                </td>\r\n            </tr>\r\n            <!-- Head Filter -->\r\n            <tr class=\"{{customCSS}}grid_row\" *ngIf=\"headFilter\">\r\n                <td class=\"{{customCSS}}grid_cell {{customCSS}}grid_cell_title\"  [ngClass]=\"{grid_cell_first: i==0}\" *ngFor=\"let col of columns;index as i; \">\r\n                    <ma-data-grid-head-filter #headerfilter *ngIf=\"(col.dataType && col.dataType != 'selector' &&  col.headFilter !== false) || (col.headFilter !== false && col.headFilter != null  && col.headFilter.length > 0)\" [col]=\"col\" (changeHeaderFilter)=\"_changeHeaderFilter($event)\"></ma-data-grid-head-filter>\r\n                </td>\r\n            </tr>\r\n            <!-- DATA -->\r\n            <tr class=\"{{customCSS}}grid_row\" *ngFor=\"let row of rows_displayed; \r\n                    last as isLastRow; \r\n                    even as pair; \r\n                    index as i; \r\n                    first as isFirstRow\"\r\n                (click)=\"SelectRow(i,row)\" [ngClass]=\"{'grid_row_selected': i == row_selected && !cell_selected, 'CSSclassEven': pair,'CSSclassOdd': !pair, 'grid_row_first': isFirstRow, 'grid_row_end': isLastRow}\">\r\n    \r\n                <td class=\"{{customCSS}}grid_cell {{col.cssClass}}\" *ngFor=\"let col of columns; \r\n                    index as ncol; \r\n                    count as maxcol; \r\n                    first as isFirstCol\r\n                    last as isLastCol;\" \r\n                    \r\n                    [ngClass]=\"{'grid_cell_selected': i == row_selected && col.prop == cell_selected, 'grid_cell_end': isLastCol,'grid_cell_first': isFirstCol}\"\r\n                    (click)=\"SelectCell(i,row,col)\">\r\n                    <!--  {{col.prop}} repr\u00E9sente le nom de colonne d'un \u00E9l\u00E9ment contenu dans 'colmuns' -- >\r\n                    <div *ngIf=\"col.isRowNumber === true; then RowNumberBlock else dataBlock\"></div>\r\n                    <ng-template #RowNumberBlock>{{i}}</ng-template>\r\n                    <ng-template #dataBlock> {{u[col.prop] | dataGridPipe :u :c}}</ng-template>\r\n                    -->\r\n                    <datagrid-cell-container [ngSwitch]=\"true\"  >\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.dataType == 'selector'\" ngSwitchBreak><ma-data-grid-cell-selector [prop]=\"col.prop\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"row\"></ma-data-grid-cell-selector></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.useTemplate != null\" ngSwitchBreak><ma-data-grid-template-cell-t1 [template]=\"col.useTemplate\" [prop]=\"col.prop\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"row\"></ma-data-grid-template-cell-t1></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.canEdit === true\" ngSwitchBreak><ma-data-grid-celledit-item [prop]=\"col.prop\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"row\"></ma-data-grid-celledit-item></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.isRowNumber === true\" ngSwitchBreak>{{i}}</datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.isRowHTML === true\" ngSwitchBreak><span [innerHTML]=\"row[col.prop]\"></span></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.useTemplate == null && col.canEdit !== true && (col.dataType == 'boolean' || col.dataType == 'bool')\" ngSwitchBreak><ma-data-grid-cell-boolean [col]=\"col\" [data]=\"row\"></ma-data-grid-cell-boolean></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchDefault>{{row[col.prop] | maDataGridPipe :row :col}}</datagrid-cell-element>\r\n                    </datagrid-cell-container>\r\n                </td>\r\n        \r\n            </tr>\r\n        </table>\r\n        \r\n    </div>\r\n    <div class=\"row\" style=\"padding-top: 5px;\">\r\n        <div class=\"col s3 \">\r\n            <div class=\"page_number\">#{{nb_record}} record<span *ngIf=\"nb_record > 1\">s</span></div>\r\n        </div>\r\n        <div class=\"col s8 div_pagination\">\r\n           \r\n            <ul class=\"pagination\">\r\n                <li *ngIf=\"max_page >= 9\" (click)=\"FastDecrementPage()\" [ngClass]=\"{'disabled': current_page == 0,'': current_page != 0}\"><a  class=\"pointer\"><i class=\"material-icons small\">fast_rewind</i></a></li>\r\n                <li *ngIf=\"nb_record > 0\" (click)=\"DecrementPage()\" [ngClass]=\"{'disabled': current_page == 0,'': current_page != 0}\"><a  class=\"pointer\"><i class=\"material-icons small\">chevron_left</i></a></li>\r\n                <li *ngFor=\"let n_page of pages\" (click)=\"_changePage(n_page)\" [ngClass]=\"{'active': current_page == n_page,'': current_page != n_page}\" ><a class=\"pointer\" class=\"a_pagination small \">{{(n_page+1)}}</a></li>\r\n                <li *ngIf=\"nb_record > 0\" (click)=\"IncrementPage()\" [ngClass]=\"{'disabled': current_page == max_page,'': current_page != max_page}\"><a  class=\"pointer\"><i class=\"material-icons small\">chevron_right</i></a></li>\r\n                <li *ngIf=\"max_page >= 9\" (click)=\"FastIncrementPage()\" [ngClass]=\"{'disabled': current_page == max_page,'': current_page != max_page}\"><a class=\"pointer\"><i class=\"material-icons small\">fast_forward</i></a></li>\r\n            </ul>\r\n       \r\n        </div>\r\n    </div>\r\n</div>\r\n    \r\n    ",
                styles: [":host{--color-border:#667;--color-defaut:#667}.datagrid_page .CSSclassOdd{background-color:#ddd}.datagrid_page{height:100%;width:100%}.div_pagination .pointer{cursor:default}.div_pagination .page_number{color:var(--color-defaut);font-size:1rem;padding:0 10px}.datagrid_page .div_pagination{display:-ms-inline-grid;display:inline-grid;justify-content:flex-end}.a_pagination:hover,.div_pagination .a_pagination{color:var(--color-border);display:inline-block;font-size:1rem;line-height:30px;padding:0 10px;text-decoration:none}.datagrid_page .scroller{-ms-grid-row-align:center;align-self:center;background-color:#fefefe;overflow:auto;scrollbar-color:var(--color-border) #fefefe;scrollbar-width:auto;width:100%}.grid_table .grid_row_selected{background-color:#667;color:#ddd}.grid_table .grid_sort{cursor:pointer}.datagrid_page .grid_table{width:100%}.grid_table .grid_cell_title{border-top:1px solid var(--color-border);color:var(--color-defaut);font-weight:700;text-align:center}.grid_table .grid_cell_selected{background-color:#667;color:#ddd}.grid_table .grid_cell_first{border-left:10px solid var(--color-border)}.grid_table .grid_cell_end{border-right:0 solid var(--color-border)}.grid_table .grid_cell{border-right:1px solid var(--color-border)}.grid_table .grid_row_first{border-bottom:1px solid var(--color-border)}.grid_table .grid_row_last{border-bottom:0 solid var(--color-border)}.grid_table .grid_row{border-bottom:1px solid var(--color-border)}"]
            },] }
];
MaDataGridComponent.ctorParameters = () => [];
MaDataGridComponent.propDecorators = {
    columns: [{ type: Input }],
    limit: [{ type: Input }],
    canSelect: [{ type: Input }],
    extFilter: [{ type: Input }],
    headFilter: [{ type: Input }],
    pagination: [{ type: Input }],
    page: [{ type: Input }],
    count: [{ type: Input }],
    customCSS: [{ type: Input }],
    myGrid: [{ type: Input }],
    rows: [{ type: Input }],
    change: [{ type: Output }],
    select: [{ type: Output }],
    extFilterChange: [{ type: Output }],
    filterChange: [{ type: Output }],
    changePage: [{ type: Output }],
    sort: [{ type: Output }],
    canSelectChange: [{ type: Output }],
    rowsChange: [{ type: Output }],
    rowsSelect: [{ type: Output }],
    gridfilter: [{ type: ViewChild, args: [MaGridFilterComponent, { static: true },] }],
    headerfilter: [{ type: ViewChildren, args: [DataGridHeadFilterComponent,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtZGF0YS1ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJDOi9NeVRlbXAvbmcxMGEvcHJvamVjdHMvbWEtZGF0YS1ncmlkL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9tYS1kYXRhLWdyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUVqSCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQW9CLFFBQVEsRUFBRSxNQUFNLG1DQUFtQyxDQUFBO0FBQzlFLG1FQUFtRTtBQVFuRSxNQUFNLE9BQU8sbUJBQW1CO0lBdUQ5QjtRQXJEQTs7OztTQUlDO1FBQ1EsWUFBTyxHQUE4QixFQUFFLENBQUM7UUFDeEMsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixTQUFJLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbEIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixjQUFTLEdBQVksRUFBRSxDQUFDO1FBQ3hCLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFFZCxTQUFJLEdBQVEsRUFBRSxDQUFDO1FBQ2QsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUF5QixDQUFDO1FBQ25ELG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQXlCLENBQUM7UUFDNUQsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FB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QUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7U0FDMUU7SUFHSCxDQUFDOzs7WUEvVUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4Qiw4QkFBOEI7Z0JBQzlCLGtwT0FBNEM7O2FBRzdDOzs7O3NCQVFFLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3FCQUNMLEtBQUs7bUJBRUwsS0FBSztxQkFDTCxNQUFNO3FCQUNOLE1BQU07OEJBQ04sTUFBTTsyQkFDTixNQUFNO3lCQUNOLE1BQU07bUJBQ04sTUFBTTs4QkFDTixNQUFNO3lCQUNOLE1BQU07eUJBQ04sTUFBTTt5QkFFTixTQUFTLFNBQUMscUJBQXFCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzJCQUNqRCxZQUFZLFNBQUMsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUXVlcnlMaXN0LCBWaWV3Q2hpbGQsIFZpZXdDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhR3JpZEhlYWRGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS1ncmlkLWhlYWQtZmlsdGVyL2RhdGEtZ3JpZC1oZWFkLWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZEZpbHRlckV2ZW50LCBNYURhdGFHcmlkQ29sdW1uT3B0aW9ucywgTWFEYXRhR3JpZFNlbGVjdE1ldGhvZCwgTWFEYXRhR3JpZFNlbGVjdEV2ZW50LCBNYURhdGFHcmlkSGVhZEZpbHRlckV2ZW50IH0gZnJvbSAnLi9pbnRlcmZhY2VzL21hLWRhdGEtZ3JpZC1vcHRpb25zJztcbmltcG9ydCB7IE1hR3JpZEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vbWEtZ3JpZC1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlckNvbmRpdGlvbnMsIE1hRmlsdGVyIH0gZnJvbSBcIkBhbW4zMS9maWx0ZXItbXVsdGlwbGUtY29uZGl0aW9uc1wiXG4vLyBpbXBvcnQgeyBQaXBlTGVuZ3RoUGlwZSB9IGZyb20gJ3NyYy9hcHAvcGlwZXMvcGlwZS1sZW5ndGgucGlwZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYS1kYXRhLWdyaWQnLFxuICAvL3Byb3ZpZGVyczogW1BpcGVMZW5ndGhQaXBlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL21hLWRhdGEtZ3JpZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hLWRhdGEtZ3JpZC5jb21wb25lbnQuY3NzJ10sXG5cbn0pXG5leHBvcnQgY2xhc3MgTWFEYXRhR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICAvKiAgXCJjb2x1bW5zXCIgZWxlbWVudCBkJ2VudHLDqWVcbiAgICAgXCJjaGFuZ2VcIiBlbGVtZW50IGRlIHNvcnRpciBwZXJtZXR0YW50IGRlIHByZW5kcmUgZW4gY29tcHRlXG4gICAgICAgICAgICAgICAgICAgbCdldmVudCBPbkNoYW5nZXNcbiAgICA8bWEtZGF0YS1ncmlkIFtjb2x1bW5zXT1cImNvbHVtbnNcIiAgW3Jvd3NdPVwicm93c1wiIChjaGFuZ2UpPVwiQ2hhbmdlRGF0YSgkZXZlbnQpXCI+PC9tYS1kYXRhLWdyaWQ+XG4gKi9cbiAgQElucHV0KCkgY29sdW1uczogTWFEYXRhR3JpZENvbHVtbk9wdGlvbnNbXSA9IFtdO1xuICBASW5wdXQoKSBsaW1pdDogbnVtYmVyID0gNztcbiAgQElucHV0KCkgY2FuU2VsZWN0OiBNYURhdGFHcmlkU2VsZWN0TWV0aG9kO1xuICBASW5wdXQoKSBleHRGaWx0ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaGVhZEZpbHRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBwYWdpbmF0aW9uOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHBhZ2U6IG51bWJlciA9IC0xO1xuICBASW5wdXQoKSBjb3VudDogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgY3VzdG9tQ1NTOiAgc3RyaW5nID0gXCJcIjtcbiAgQElucHV0KCkgbXlHcmlkID0gdGhpcztcblxuICBASW5wdXQoKSByb3dzOiBhbnkgPSBbXTtcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxNYURhdGFHcmlkU2VsZWN0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBleHRGaWx0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1hRGF0YUdyaWRGaWx0ZXJFdmVudD4oKTtcbiAgQE91dHB1dCgpIGZpbHRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY2hhbmdlUGFnZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgc29ydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY2FuU2VsZWN0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxNYURhdGFHcmlkU2VsZWN0TWV0aG9kPigpO1xuICBAT3V0cHV0KCkgcm93c0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcm93c1NlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBWaWV3Q2hpbGQoTWFHcmlkRmlsdGVyQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSBncmlkZmlsdGVyOiBNYUdyaWRGaWx0ZXJDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGRyZW4oRGF0YUdyaWRIZWFkRmlsdGVyQ29tcG9uZW50KSBoZWFkZXJmaWx0ZXI6IFF1ZXJ5TGlzdDxEYXRhR3JpZEhlYWRGaWx0ZXJDb21wb25lbnQ+O1xuXG4gIGdyaWRfY2VsbF9maXJzdCA9IHRoaXMuY3VzdG9tQ1NTICsgJ2dyaWRfY2VsbF9maXJzdCdcbiAgZ3JpZF9yb3dfc2VsZWN0ZWQgPSB0aGlzLmN1c3RvbUNTUyArICdncmlkX3Jvd19zZWxlY3RlZCc7XG4gIGN1cnJlbnRfcGFnZTogbnVtYmVyID0gLTE7XG4gIG1heF9wYWdlOiBudW1iZXIgPSAxO1xuICBtYXhfbmJfcGFnZTogbnVtYmVyID0gNjtcbiAgbmJfcGFnZTogbnVtYmVyID0gMTtcbiAgc3RhcnRhdDogbnVtYmVyID0gMDtcbiAgc2VhcmNoVmFsdWU6IHN0cmluZyA9IFwiY1wiXG4gIFxuICByb3dzX2Rpc3BsYXllZDogYW55ID0gW107XG4gIHBhZ2VzID0gW107XG4gIGNvbmRpdGlvbnM6IEZpbHRlckNvbmRpdGlvbnMgPSBbXVxuICBuYl9yZWNvcmQ6IG51bWJlciA9IDA7XG4gIHJvd19zZWxlY3RlZDogbnVtYmVyID0gLTE7XG4gIGNlbGxfc2VsZWN0ZWQ6IG51bWJlciA9IC0xO1xuXG4gIHRlbXA6IGFueVtdO1xuXG4gIHNvcnRlZEZpZWxkID0ge1xuICAgIGZpZWxkOiAnJyxcbiAgICByZXZlcnNlOiB0cnVlXG4gIH07XG5cbiAgY29uc3RydWN0b3IoLypwcml2YXRlIHBpcGVMZW5ndGg6IFBpcGVMZW5ndGhQaXBlKi8pIHsgXG4gICAgLy9jb25zb2xlLmxvZygnWU8nKVxuICB9XG5cbiAgcmVzZXRTZWxlY3Rpb24oKSB7XG4gICAgdGhpcy5jZWxsX3NlbGVjdGVkID0gLTE7XG4gICAgdGhpcy5yb3dfc2VsZWN0ZWQgPSAtMTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMuc2VhcmNoVmFsdWU6IFwiICsgdGhpcy5zZWFyY2hWYWx1ZSlcbiAgICBjb25zb2xlLmxvZygnbmdPbkNoYW5nZXMgJywgY2hhbmdlcyk7XG4gICAgaWYgKGNoYW5nZXMucGFnZSAmJiBjaGFuZ2VzLnBhZ2UuY3VycmVudFZhbHVlID49IDApIHtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuY2FuU2VsZWN0ICYmIGNoYW5nZXMuY2FuU2VsZWN0LmN1cnJlbnRWYWx1ZSkge1xuICAgICAgLy90aGlzLnBhZ2UgPSBjaGFuZ2VzLnBhZ2UuY3VycmVudFZhbHVlO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2NhblNlbGVjdCAgJywgY2hhbmdlcy5jYW5TZWxlY3QuY3VycmVudFZhbHVlKTtcbiAgICAgIHRoaXMuY2FuU2VsZWN0Q2hhbmdlLmVtaXQoY2hhbmdlcy5jYW5TZWxlY3QucHJldmlvdXNWYWx1ZSlcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubGltaXQgJiYgY2hhbmdlcy5saW1pdC5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMubGltaXQgPSBjaGFuZ2VzLmxpbWl0LmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMucm93cyAmJiBjaGFuZ2VzLnJvd3MuY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLnRlbXAgPSBjaGFuZ2VzLnJvd3MuY3VycmVudFZhbHVlO1xuICAgICAgdGhpcy5fY2hhbmdlUGFnZSh0aGlzLmN1cnJlbnRfcGFnZSwgdGhpcy50ZW1wLCB0cnVlKTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coXCJhIC0gbmdPbkNoYW5nZXMgY3VycmVudF9wYWdlID0+IFwiICsgdGhpcy5jdXJyZW50X3BhZ2UpXG4gIH1cblxuICBJbmNyZW1lbnRQYWdlKCkge1xuICAgIHRoaXMuX2NoYW5nZVBhZ2UodGhpcy5jdXJyZW50X3BhZ2UgKyAxLCB0aGlzLnRlbXApXG4gIH1cblxuICBEZWNyZW1lbnRQYWdlKCkge1xuICAgIHRoaXMuX2NoYW5nZVBhZ2UodGhpcy5jdXJyZW50X3BhZ2UgLSAxLCB0aGlzLnRlbXApXG4gIH1cblxuICBGYXN0SW5jcmVtZW50UGFnZSgpIHtcbiAgICBsZXQgcCA9IHRoaXMuY3VycmVudF9wYWdlICsgNTsgLy9NYXRoLnJvdW5kKHRoaXMubWF4X3BhZ2UgLyA1MCk7XG4gICAgdGhpcy5fY2hhbmdlUGFnZShwLCB0aGlzLnRlbXApXG4gIH1cblxuICBfZGF0YUNoYW5nZSAoZXZ0KSB7XG4gICAgY29uc29sZS5sb2coXCJfZGF0YUNoYW5nZVwiLGV2dCk7XG4gICAgdGhpcy5yb3dzQ2hhbmdlLmVtaXQoZXZ0KTtcbiAgfVxuXG4gIF9kYXRhU2VsZWN0b3IgKGV2dCxwcm9wKSB7XG4gICAgY29uc29sZS5sb2coXCJfZGF0YVNlbGVjdG9yXCIsZXZ0LHByb3ApO1xuXG4gICAgdGhpcy5yb3dzU2VsZWN0LmVtaXQoZXZ0KTtcbiAgfVxuXG4gIEZhc3REZWNyZW1lbnRQYWdlKCkge1xuICAgIGxldCBwID0gdGhpcy5jdXJyZW50X3BhZ2UgLSA1OyAvL01hdGgucm91bmQodGhpcy5tYXhfcGFnZSAvIDUwKTs7XG4gICAgdGhpcy5fY2hhbmdlUGFnZShwLCB0aGlzLnRlbXApXG4gIH1cblxuICBwcml2YXRlIF9jaGFuZ2VQYWdlKG5fcGFnZTogbnVtYmVyLCByb3dzPzogYW55LCBmb3JjZT86IGJvb2xlYW4pIHtcbiAgICBpZiAoIXJvd3MpXG4gICAgICByb3dzID0gdGhpcy50ZW1wO1xuXG4gICAgLy9cblxuICAgIGlmICh0aGlzLnBhZ2luYXRpb24gPT0gZmFsc2UpIHtcbiAgICAgIGlmIChmb3JjZSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnRlbXAgPSBNYUZpbHRlci5GaWx0ZXJCeUNvbmRpdGlvbnModGhpcy5jb25kaXRpb25zLCByb3dzKTtcbiAgICAgICAgdGhpcy50ZW1wID0gdGhpcy5fc29ydERhdGEodGhpcy50ZW1wKTtcbiAgICAgICAgcm93cyA9IHRoaXMudGVtcDtcbiAgICAgIH1cbiAgICAgIHRoaXMuY291bnQgPSByb3dzLmxlbmd0aDtcbiAgICB9XG4gICAgLy8gQ2FsY3VsIGR1IG1heF9wYWdlXG4gICAgdGhpcy5tYXhfcGFnZSA9IDA7XG4gICAgaWYgKHRoaXMuY291bnQgPj0gMCAmJiB0aGlzLmxpbWl0ID4gMCkge1xuICAgICAgdGhpcy5tYXhfcGFnZSA9IE1hdGguZmxvb3IodGhpcy5jb3VudCAvIHRoaXMubGltaXQpO1xuICAgICAgaWYgKCh0aGlzLmNvdW50ICUgdGhpcy5saW1pdCkgIT0gMCkge1xuICAgICAgICB0aGlzLm1heF9wYWdlICs9IDE7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChuX3BhZ2UgPCAwKSB7XG4gICAgICBuX3BhZ2UgPSAwO1xuICAgIH1cbiAgICBpZiAobl9wYWdlID49IHRoaXMubWF4X3BhZ2UgJiYgdGhpcy5tYXhfcGFnZSA+IDApIHtcbiAgICAgIG5fcGFnZSA9IHRoaXMubWF4X3BhZ2UgLSAxO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhcImNoYW5nZVBhZ2UgXCIgKyBuX3BhZ2UgKyAnIC8gJyArIHRoaXMubWF4X3BhZ2UgKyAnIGMgPT4gJyArIHRoaXMuY3VycmVudF9wYWdlICsgJyBtYXhfcGFnZSAnICsgdGhpcy5tYXhfcGFnZSk7XG5cbiAgICBpZiAodGhpcy5wYWdlID49IDAgfHwgdGhpcy5wYWdpbmF0aW9uKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50X3BhZ2UgIT0gbl9wYWdlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudF9wYWdlID0gbl9wYWdlO1xuICAgICAgICB0aGlzLnNlYXJjaFZhbHVlID0gJyc7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT4gRU1JVCBDSEFOR0UgXCIpXG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZS5lbWl0KG5fcGFnZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yb3dfc2VsZWN0ZWQgPSAtMTtcbiAgICAgIHRoaXMuY3VycmVudF9wYWdlID0gbl9wYWdlO1xuICAgICAgdGhpcy5uYl9yZWNvcmQgPSB0aGlzLmNvdW50O1xuICAgICAgdGhpcy5zdGFydGF0ID0gMDtcbiAgICAgIHRoaXMucm93c19kaXNwbGF5ZWQgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyByb3dzICYmIGkgPCB0aGlzLmxpbWl0ICYmIGkgPCB0aGlzLmNvdW50ICYmIGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMucm93c19kaXNwbGF5ZWQucHVzaChyb3dzW2ldKTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIC8vIFNBTlMgUEFHSU5BVElPTlxuICAgICAgLy8gY29uc29sZS5lcnJvcihcIlNBTlMgUEFHSU5BVElPTlwiKVxuICAgICAgXG4gICAgICBpZiAoIWZvcmNlICYmICh0aGlzLmN1cnJlbnRfcGFnZSA9PSBuX3BhZ2UpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMucm93X3NlbGVjdGVkID0gLTE7XG4gICAgICB0aGlzLmN1cnJlbnRfcGFnZSA9IG5fcGFnZTtcbiAgICAgIHRoaXMubmJfcmVjb3JkID0gMDtcbiAgICAgIHRoaXMuc3RhcnRhdCA9IDA7XG4gICAgICB0aGlzLnJvd3NfZGlzcGxheWVkID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyByb3dzICYmIGkgPCB0aGlzLmxpbWl0ICYmIGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChyb3dzLmxlbmd0aCA+ICh0aGlzLmN1cnJlbnRfcGFnZSAqIHRoaXMubGltaXQpICsgaSkge1xuICAgICAgICAgIHRoaXMucm93c19kaXNwbGF5ZWQucHVzaChyb3dzW3RoaXMuY3VycmVudF9wYWdlICogdGhpcy5saW1pdCArIGldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5uYl9yZWNvcmQgPSByb3dzLmxlbmd0aDtcblxuXG4gICAgfVxuICAgIC8vIENhbGN1bCBkdSBub21icmUgZGUgcGFnZSBlbiBiYXMgZHUgZGF0YWdyaWRcbiAgICB0aGlzLnN0YXJ0YXQgPSB0aGlzLmxpbWl0ICogKHRoaXMuY3VycmVudF9wYWdlICsgMSk7XG4gICAgaWYgKHRoaXMuc3RhcnRhdCA+IHRoaXMuY291bnQpXG4gICAgICB0aGlzLnN0YXJ0YXQgPSB0aGlzLmNvdW50O1xuICAgIHRoaXMucGFnZXMgPSBbXTtcbiAgICBsZXQgc3RhcnRfcGFnZSA9IHRoaXMuY3VycmVudF9wYWdlIC0gTWF0aC5yb3VuZCh0aGlzLm1heF9uYl9wYWdlIC8gMik7XG4gICAgaWYgKHN0YXJ0X3BhZ2UgPCAwKVxuICAgICAgc3RhcnRfcGFnZSA9IDA7XG4gICAgZm9yIChsZXQgcCA9IHN0YXJ0X3BhZ2UsIG5icCA9IDA7IHJvd3MgJiYgcCA8IHRoaXMuY291bnQgLyB0aGlzLmxpbWl0ICYmIG5icCA8IHRoaXMubWF4X25iX3BhZ2U7IG5icCsrLCBwKyspIHtcbiAgICAgIHRoaXMucGFnZXMucHVzaChwKVxuICAgIH1cblxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy90aGlzLnBpcGVMZW5ndGgudHJhbnNmb3JtKFwiYmJiXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc29ydERhdGEocm93cykge1xuICAgIGxldCBzZiA9IHRoaXMuc29ydGVkRmllbGQuZmllbGQ7XG4gICAgLy9jb25zb2xlLmxvZygnX3NvcnREYXRhJyx0aGlzLnNvcnRlZEZpZWxkKVxuICAgIHJldHVybiByb3dzLnNvcnQoKGEsIGIpID0+IHtcblxuICAgICAgbGV0IHI7XG5cbiAgICAgIGlmICh0eXBlb2YgKGFbc2ZdKSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIChiW3NmXSkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciBjMzogc3RyaW5nID0gYVtzZl07XG4gICAgICAgIHZhciBjNCA6IHN0cmluZz0gYltzZl07XG4gICAgICAgIGlmIChjNCA9PSBudWxsKSB7XG4gICAgICAgICAgYzQgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoYzMgPT0gbnVsbCkge1xuICAgICAgICAgIGMzID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgciA9IGMzLmxvY2FsZUNvbXBhcmUoYzQsICdlbicsIHsgc2Vuc2l0aXZpdHk6ICdiYXNlJyB9KTtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHR5cGVvZiAoYVtzZl0pID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgKGJbc2ZdKSA9PT0gJ251bWJlcicgKSB7XG4gICAgICAgICAgciA9IGFbc2ZdIC0gYltzZl1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodHlwZW9mIChhW3NmXSkgPT09ICdib29sZWFuJyB8fCB0eXBlb2YgKGJbc2ZdKSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICB2YXIgYzEgPSAwO1xuICAgICAgICAgICAgaWYgKGFbc2ZdID09PSB0cnVlKVxuICAgICAgICAgICAgICBjMSA9IDI7XG4gICAgICAgICAgICBpZiAoYVtzZl0gPT09IGZhbHNlKVxuICAgICAgICAgICAgICBjMSA9IDE7XG4gICAgICAgICAgICB2YXIgYzIgPSAwO1xuICAgICAgICAgICAgaWYgKGJbc2ZdID09PSB0cnVlKVxuICAgICAgICAgICAgICBjMiA9IDI7XG4gICAgICAgICAgICBpZiAoYltzZl0gPT09IGZhbHNlKVxuICAgICAgICAgICAgICBjMiA9IDE7XG4gICAgICAgICAgICByID0gYzEgLSBjMjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgciA9IGFbc2ZdIDwgYltzZl1cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICAvL2NvbnNvbGUubG9nKCdDb21wYXJlICcgKyBhW3NmXSArICcgPD0+ICcgKyBiW3NmXSArICcgID0gJyArIHIgKyAnIHRoaXMuc29ydGVkRmllbGQucmV2ZXJzZScgKyB0aGlzLnNvcnRlZEZpZWxkLnJldmVyc2UpXG4gICAgICBpZiAodGhpcy5zb3J0ZWRGaWVsZC5yZXZlcnNlKSB7XG4gICAgICAgIHJldHVybiByICogLTFcbiAgICAgIH1cbiAgICAgIHJldHVybiByXG4gICAgfSk7XG5cbiAgfVxuXG4gIHNvcnRCeShjb2wpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhjb2wpO1xuICAgIGlmICh0aGlzLnNvcnRlZEZpZWxkLmZpZWxkID09IGNvbC5wcm9wKSB7XG4gICAgICB0aGlzLnNvcnRlZEZpZWxkLnJldmVyc2UgPSAhdGhpcy5zb3J0ZWRGaWVsZC5yZXZlcnNlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc29ydGVkRmllbGQucmV2ZXJzZSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnNvcnRlZEZpZWxkLmZpZWxkID0gY29sLnByb3A7XG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbikge1xuICAgICAgdGhpcy5zb3J0LmVtaXQodGhpcy5zb3J0ZWRGaWVsZCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5fY2hhbmdlUGFnZSh0aGlzLmN1cnJlbnRfcGFnZSwgdGhpcy5yb3dzLCB0cnVlKTtcbiAgICB9XG5cbiAgfVxuXG4gIFNlbGVjdFJvdyhpbmRleCwgcm93KSB7XG4gICAgaWYgKHRoaXMuY2FuU2VsZWN0ID09PSBcInJvd1wiKSB7XG4gICAgICB0aGlzLnJvd19zZWxlY3RlZCA9IGluZGV4O1xuICAgICAgdGhpcy5jZWxsX3NlbGVjdGVkID0gbnVsbDtcbiAgICAgIGxldCB0cnVlSW5kZXggPSB0aGlzLmN1cnJlbnRfcGFnZSAqIHRoaXMubGltaXQgKyBpbmRleDtcbiAgICAgIC8vbGV0IGRhdGEgPSB0aGlzLnJvd3NbdHJ1ZUluZGV4XTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiU2VsZWN0Um93IHRydWVJbmRleFwiLCB0cnVlSW5kZXgpO1xuICAgICAgdGhpcy5zZWxlY3QuZW1pdCg8TWFEYXRhR3JpZFNlbGVjdEV2ZW50PnsgaW5kZXg6IHRydWVJbmRleCwgcm93OiByb3cgfSk7XG4gICAgfVxuICB9XG5cbiAgU2VsZWN0Q2VsbChpbmRleCwgcm93LCBjb2wpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIlNlbGVjdENlbGwgU2VsZWN0XCIsIGluZGV4LCByb3csIGNvbCk7XG4gICAgaWYgKHRoaXMuY2FuU2VsZWN0ID09PSBcImNlbGxcIikge1xuICAgICAgdGhpcy5yb3dfc2VsZWN0ZWQgPSBpbmRleDtcbiAgICAgIHRoaXMuY2VsbF9zZWxlY3RlZCA9IGNvbC5wcm9wO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJTZWxlY3RDZWxsIFNlbGVjdFwiLCBpbmRleCwgcm93LCBjb2wpO1xuICAgICAgbGV0IHRydWVJbmRleCA9IHRoaXMuY3VycmVudF9wYWdlICogdGhpcy5saW1pdCArIGluZGV4O1xuICAgICAgLy9jb25zb2xlLmxvZyhcIkRhdGEgR3JpZCB0cnVlSW5kZXhcIiwgdHJ1ZUluZGV4KTtcbiAgICAgIHRoaXMuc2VsZWN0LmVtaXQoPE1hRGF0YUdyaWRTZWxlY3RFdmVudD57IGluZGV4OiB0cnVlSW5kZXgsIHJvdzogcm93LCBwcm9wOiBjb2wucHJvcCwgdmFsdWU6IHJvd1tjb2wucHJvcF0sIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckNoYW5nZShlOiBNYURhdGFHcmlkRmlsdGVyRXZlbnQpIHtcbiAgICB0aGlzLmV4dEZpbHRlckNoYW5nZS5lbWl0KGUpO1xuICB9XG5cbiAgdGltZW91dCA9IG51bGw7XG4gIHByaXZhdGUgX2NoYW5nZUhlYWRlckZpbHRlcihlOiBhbnkpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX2RlbGF5Q2hhbmdlSGVhZGVyRmlsdGVyKGUpO1xuICAgIH0sIDUwMCk7XG4gIH1cblxuICBwcml2YXRlIF9kZWxheUNoYW5nZUhlYWRlckZpbHRlcihlOiBhbnkpIHtcbiAgICBsZXQgY29uZGl0aW9ucyA9IFtdO1xuICAgIHRoaXMuaGVhZGVyZmlsdGVyLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIC8vaXRlbS5maWx0ZXJfdmFsdWU7XG4gICAgICBsZXQgY29uZGl0aW9uID0gaXRlbS5nZXRGaWx0ZXIoKTtcbiAgICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgICAgaWYgKGNvbmRpdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbmRpdGlvbnMucHVzaCgnYW5kJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uZGl0aW9ucy5wdXNoKGNvbmRpdGlvbik7XG4gICAgICB9XG4gICAgICAvL2NvbnNvbGUubG9nKGl0ZW0uY29sLnByb3AgKyAnID0+ICcraXRlbS5maWx0ZXJfdmFsdWUpO1xuICAgIH0pXG4gICAgLy8gY29uc29sZS5sb2coXCJDT05ESVRJT05TXCIsIGNvbmRpdGlvbnMpO1xuICAgIGlmICh0aGlzLnBhZ2luYXRpb24gPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuY29uZGl0aW9ucyA9IGNvbmRpdGlvbnM7XG4gICAgICB0aGlzLl9jaGFuZ2VQYWdlKDAsIHRoaXMucm93cywgdHJ1ZSk7XG4gICAgICB0aGlzLmZpbHRlckNoYW5nZS5lbWl0KDxNYURhdGFHcmlkSGVhZEZpbHRlckV2ZW50Pnsgd2hlcmU6IGNvbmRpdGlvbnMsIGRhdGE6IHRoaXMudGVtcCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWx0ZXJDaGFuZ2UuZW1pdCg8TWFEYXRhR3JpZEhlYWRGaWx0ZXJFdmVudD57IHdoZXJlOiBjb25kaXRpb25zIH0pO1xuICAgIH1cblxuXG4gIH1cblxufVxuIl19