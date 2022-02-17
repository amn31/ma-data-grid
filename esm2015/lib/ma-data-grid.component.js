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
    _dataChange(evt) {
        // console.log("_dataChange",evt);
        this.rowsChange.emit(evt);
    }
    _dataSelector(evt, prop) {
        // console.log("_dataSelector",evt,prop);
        if (typeof (evt) == 'object' && evt.length === undefined) {
            this.rowsSelect.emit([evt]);
        }
        else {
            this.rowsSelect.emit(evt);
        }
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
                template: "<!-- #gridfilter *ngIf=\"extFilter\" -->\r\n<ma-data-grid-filter #gridfilter *ngIf=\"extFilter\" [customCSS]=\"customCSS\"  [(searchValue)]=\"searchValue\" [columns]=\"columns\"  (filterChange)=\"_filterChange($event)\"></ma-data-grid-filter>\r\n<div class=\"datagrid_page\">\r\n    <div class=\"scroller\">\r\n        <table class=\"{{customCSS}}grid_table\">\r\n            <!-- HEADER -->\r\n            <tr class=\"grid_row\">\r\n                <td class=\"{{customCSS}}grid_cell {{customCSS}}grid_cell_title\"  [ngClass]=\"{grid_cell_first: i==0}\" *ngFor=\"let col of columns;index as i; \">\r\n                    <datagrid-cellheader-container [ngSwitch]=\"true\"  >\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.dataType == 'selector'\"><ma-data-grid-cell-selector [prop]=\"col.prop\" [isHeader]=\"true\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"rows_displayed\"></ma-data-grid-cell-selector><span>{{col.title}}</span></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchDefault >{{col.title}}</datagrid-cell-element>\r\n                    </datagrid-cellheader-container>\r\n                    \r\n                    <span *ngIf=\"col.dataType != 'selector' && col.sorted === true\" (click)=\"sortBy(col)\">\r\n                        <span *ngIf=\"sortedField.field != col.prop\" class=\"grid_sort tiny material-icons\">swap_vert</span>\r\n                        <span *ngIf=\"sortedField.field === col.prop && sortedField.reverse\" class=\"grid_sort tiny material-icons\">arrow_drop_down</span>\r\n                        <span *ngIf=\"sortedField.field === col.prop && !sortedField.reverse\" class=\"grid_sort tiny material-icons\">arrow_drop_up</span>\r\n                    </span> \r\n                </td>\r\n            </tr>\r\n            <!-- Head Filter -->\r\n            <tr class=\"{{customCSS}}grid_row\" *ngIf=\"headFilter\">\r\n                <td class=\"{{customCSS}}grid_cell {{customCSS}}grid_cell_title\"  [ngClass]=\"{grid_cell_first: i==0}\" *ngFor=\"let col of columns;index as i; \">\r\n                    <ma-data-grid-head-filter #headerfilter *ngIf=\"(col.dataType && col.dataType != 'selector' &&  col.filter !== false) || (col.filter !== false && col.headFilter != null  && col.headFilter.length > 0)\" [col]=\"col\" (changeHeaderFilter)=\"_changeHeaderFilter($event)\"></ma-data-grid-head-filter>\r\n                </td>\r\n            </tr>\r\n            <!-- DATA -->\r\n            <tr class=\"{{customCSS}}grid_row\" *ngFor=\"let row of rows_displayed; \r\n                    last as isLastRow; \r\n                    even as pair; \r\n                    index as i; \r\n                    first as isFirstRow\"\r\n                (click)=\"SelectRow(i,row)\" [ngClass]=\"{'grid_row_selected': i == row_selected && !cell_selected, 'CSSclassEven': pair,'CSSclassOdd': !pair, 'grid_row_first': isFirstRow, 'grid_row_end': isLastRow}\">\r\n    \r\n                <td class=\"{{customCSS}}grid_cell {{col.cssClass}}\" *ngFor=\"let col of columns; \r\n                    index as ncol; \r\n                    count as maxcol; \r\n                    first as isFirstCol\r\n                    last as isLastCol;\" \r\n                    \r\n                    [ngClass]=\"{'grid_cell_selected': i == row_selected && col.prop == cell_selected, 'grid_cell_end': isLastCol,'grid_cell_first': isFirstCol}\"\r\n                    (click)=\"SelectCell(i,row,col)\">\r\n                    <!--  {{col.prop}} repr\u00E9sente le nom de colonne d'un \u00E9l\u00E9ment contenu dans 'colmuns' -- >\r\n                    <div *ngIf=\"col.isRowNumber === true; then RowNumberBlock else dataBlock\"></div>\r\n                    <ng-template #RowNumberBlock>{{i}}</ng-template>\r\n                    <ng-template #dataBlock> {{u[col.prop] | dataGridPipe :u :c}}</ng-template>\r\n                    -->\r\n                    <datagrid-cell-container [ngSwitch]=\"true\"  >\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.dataType == 'selector'\" ngSwitchBreak><ma-data-grid-cell-selector [prop]=\"col.prop\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"row\"></ma-data-grid-cell-selector></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.useTemplate != null\" ngSwitchBreak><ma-data-grid-template-cell-t1 [template]=\"col.useTemplate\" [prop]=\"col.prop\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"row\"></ma-data-grid-template-cell-t1></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.canEdit === true && col.useTemplate == null\" ngSwitchBreak><ma-data-grid-celledit-item [prop]=\"col.prop\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"row\"></ma-data-grid-celledit-item></datagrid-cell-element>\r\n                        <!-- <datagrid-cell-element *ngSwitchCase=\"col.isRowNumber === true\" ngSwitchBreak>{{i}}</datagrid-cell-element> -->\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.isHTML === true\" ngSwitchBreak>\r\n                            <span [innerHTML]=\"row[col.prop] | maDataGridPipe :row :col\"></span>\r\n                        </datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.useTemplate == null && col.canEdit !== true && (col.dataType == 'boolean' || col.dataType == 'bool')\" ngSwitchBreak><ma-data-grid-cell-boolean [col]=\"col\" [data]=\"row\"></ma-data-grid-cell-boolean></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchDefault>{{row[col.prop] | maDataGridPipe :row :col}}</datagrid-cell-element>\r\n                    </datagrid-cell-container>\r\n                </td>\r\n        \r\n            </tr>\r\n        </table>\r\n        \r\n    </div>\r\n    <div class=\"row\" style=\"padding-top: 5px;\" *ngIf=\"nb_record >= 0\">\r\n        <div class=\"col s3 \">\r\n            <div class=\"page_number\">#{{nb_record}} record<span *ngIf=\"nb_record > 1\">s</span></div>\r\n        </div>\r\n        <div class=\"col s8 div_pagination\">\r\n           \r\n            <ul class=\"pagination\">\r\n                <li *ngIf=\"max_page >= 9\" (click)=\"FastDecrementPage()\" [ngClass]=\"{'disabled': current_page == 0,'': current_page != 0}\"><a  class=\"pointer\"><i class=\"material-icons small\">fast_rewind</i></a></li>\r\n                <li *ngIf=\"nb_record > 0\" (click)=\"DecrementPage()\" [ngClass]=\"{'disabled': current_page == 0,'': current_page != 0}\"><a  class=\"pointer\"><i class=\"material-icons small\">chevron_left</i></a></li>\r\n                <li *ngFor=\"let n_page of pages\" (click)=\"_changePage(n_page)\" [ngClass]=\"{'active': current_page == n_page,'': current_page != n_page}\" ><a class=\"pointer\" class=\"a_pagination small \">{{(n_page+1)}}</a></li>\r\n                <li *ngIf=\"nb_record > 0\" (click)=\"IncrementPage()\" [ngClass]=\"{'disabled': current_page == max_page,'': current_page != max_page}\"><a  class=\"pointer\"><i class=\"material-icons small\">chevron_right</i></a></li>\r\n                <li *ngIf=\"max_page >= 9\" (click)=\"FastIncrementPage()\" [ngClass]=\"{'disabled': current_page == max_page,'': current_page != max_page}\"><a class=\"pointer\"><i class=\"material-icons small\">fast_forward</i></a></li>\r\n            </ul>\r\n       \r\n        </div>\r\n    </div>\r\n</div>\r\n    \r\n    ",
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
    headerfilter: [{ type: ViewChildren, args: [DataGridHeadFilterComponent,] }],
    sortedField: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtZGF0YS1ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJEOi9NeUhvbWUvYW5kcm9pZC93b3Jrc3BhY2UvZ2l0L21hLW5nLWRhdGEtZ3JpZC9wcm9qZWN0cy9tYS1kYXRhLWdyaWQvc3JjLyIsInNvdXJjZXMiOlsibGliL21hLWRhdGEtZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFhLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBRWpILE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBb0IsUUFBUSxFQUFFLE1BQU0sbUNBQW1DLENBQUE7QUFFOUUsbUVBQW1FO0FBUW5FLE1BQU0sT0FBTyxtQkFBbUI7SUF1RDlCO1FBckRBOzs7O1NBSUM7UUFDUSxZQUFPLEdBQThCLEVBQUUsQ0FBQztRQUN4QyxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLFNBQUksR0FBVyxDQUFDLENBQUMsQ0FBQztRQUNsQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGNBQVMsR0FBWSxFQUFFLENBQUM7UUFDeEIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUVkLFNBQUksR0FBUSxFQUFFLENBQUM7UUFDZCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQXlCLENBQUM7UUFDbkQsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBeUIsQ0FBQztRQUM1RCxp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O1NBQzNGO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBNEIsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUMxRTtJQUdILENBQUM7OztZQWxWRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLDhCQUE4QjtnQkFDOUIsK3ZPQUE0Qzs7YUFHN0M7Ozs7c0JBUUUsS0FBSztvQkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO3dCQUNMLEtBQUs7cUJBQ0wsS0FBSzttQkFFTCxLQUFLO3FCQUNMLE1BQU07cUJBQ04sTUFBTTs4QkFDTixNQUFNOzJCQUNOLE1BQU07eUJBQ04sTUFBTTttQkFDTixNQUFNOzhCQUNOLE1BQU07eUJBQ04sTUFBTTt5QkFDTixNQUFNO3lCQUVOLFNBQVMsU0FBQyxxQkFBcUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MkJBQ2pELFlBQVksU0FBQywyQkFBMkI7MEJBb0J4QyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUXVlcnlMaXN0LCBWaWV3Q2hpbGQsIFZpZXdDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhR3JpZEhlYWRGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS1ncmlkLWhlYWQtZmlsdGVyL2RhdGEtZ3JpZC1oZWFkLWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZEZpbHRlckV2ZW50LCBNYURhdGFHcmlkQ29sdW1uT3B0aW9ucywgTWFEYXRhR3JpZFNlbGVjdE1ldGhvZCwgTWFEYXRhR3JpZFNlbGVjdEV2ZW50LCBNYURhdGFHcmlkSGVhZEZpbHRlckV2ZW50LCBNYURhdGFHcmlkU29ydGVkRmllbGQgfSBmcm9tICcuL2ludGVyZmFjZXMvbWEtZGF0YS1ncmlkLW9wdGlvbnMnO1xuaW1wb3J0IHsgTWFHcmlkRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9tYS1ncmlkLWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyQ29uZGl0aW9ucywgTWFGaWx0ZXIgfSBmcm9tIFwiQGFtbjMxL2ZpbHRlci1tdWx0aXBsZS1jb25kaXRpb25zXCJcblxuLy8gaW1wb3J0IHsgUGlwZUxlbmd0aFBpcGUgfSBmcm9tICdzcmMvYXBwL3BpcGVzL3BpcGUtbGVuZ3RoLnBpcGUnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWEtZGF0YS1ncmlkJyxcbiAgLy9wcm92aWRlcnM6IFtQaXBlTGVuZ3RoUGlwZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9tYS1kYXRhLWdyaWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYS1kYXRhLWdyaWQuY29tcG9uZW50LmNzcyddLFxuXG59KVxuZXhwb3J0IGNsYXNzIE1hRGF0YUdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgLyogIFwiY29sdW1uc1wiIGVsZW1lbnQgZCdlbnRyw6llXG4gICAgIFwiY2hhbmdlXCIgZWxlbWVudCBkZSBzb3J0aXIgcGVybWV0dGFudCBkZSBwcmVuZHJlIGVuIGNvbXB0ZVxuICAgICAgICAgICAgICAgICAgIGwnZXZlbnQgT25DaGFuZ2VzXG4gICAgPG1hLWRhdGEtZ3JpZCBbY29sdW1uc109XCJjb2x1bW5zXCIgIFtyb3dzXT1cInJvd3NcIiAoY2hhbmdlKT1cIkNoYW5nZURhdGEoJGV2ZW50KVwiPjwvbWEtZGF0YS1ncmlkPlxuICovXG4gIEBJbnB1dCgpIGNvbHVtbnM6IE1hRGF0YUdyaWRDb2x1bW5PcHRpb25zW10gPSBbXTtcbiAgQElucHV0KCkgbGltaXQ6IG51bWJlciA9IDc7XG4gIEBJbnB1dCgpIGNhblNlbGVjdDogTWFEYXRhR3JpZFNlbGVjdE1ldGhvZDtcbiAgQElucHV0KCkgZXh0RmlsdGVyOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGhlYWRGaWx0ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgcGFnaW5hdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBwYWdlOiBudW1iZXIgPSAtMTtcbiAgQElucHV0KCkgY291bnQ6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIGN1c3RvbUNTUzogIHN0cmluZyA9IFwiXCI7XG4gIEBJbnB1dCgpIG15R3JpZCA9IHRoaXM7XG5cbiAgQElucHV0KCkgcm93czogYW55ID0gW107XG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8TWFEYXRhR3JpZFNlbGVjdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgZXh0RmlsdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxNYURhdGFHcmlkRmlsdGVyRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBmaWx0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNoYW5nZVBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyPE1hRGF0YUdyaWRTb3J0ZWRGaWVsZD4oKTtcbiAgQE91dHB1dCgpIGNhblNlbGVjdENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TWFEYXRhR3JpZFNlbGVjdE1ldGhvZD4oKTtcbiAgQE91dHB1dCgpIHJvd3NDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHJvd3NTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xuXG4gIEBWaWV3Q2hpbGQoTWFHcmlkRmlsdGVyQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSBncmlkZmlsdGVyOiBNYUdyaWRGaWx0ZXJDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGRyZW4oRGF0YUdyaWRIZWFkRmlsdGVyQ29tcG9uZW50KSBoZWFkZXJmaWx0ZXI6IFF1ZXJ5TGlzdDxEYXRhR3JpZEhlYWRGaWx0ZXJDb21wb25lbnQ+O1xuXG4gIGdyaWRfY2VsbF9maXJzdCA9IHRoaXMuY3VzdG9tQ1NTICsgJ2dyaWRfY2VsbF9maXJzdCdcbiAgZ3JpZF9yb3dfc2VsZWN0ZWQgPSB0aGlzLmN1c3RvbUNTUyArICdncmlkX3Jvd19zZWxlY3RlZCc7XG4gIGN1cnJlbnRfcGFnZTogbnVtYmVyID0gLTE7XG4gIG1heF9wYWdlOiBudW1iZXIgPSAxO1xuICBtYXhfbmJfcGFnZTogbnVtYmVyID0gNjtcbiAgbmJfcGFnZTogbnVtYmVyID0gMTtcbiAgc3RhcnRhdDogbnVtYmVyID0gMDtcbiAgc2VhcmNoVmFsdWU6IHN0cmluZyA9IFwiY1wiXG4gIFxuICByb3dzX2Rpc3BsYXllZDogYW55ID0gW107XG4gIHBhZ2VzID0gW107XG4gIGNvbmRpdGlvbnM6IEZpbHRlckNvbmRpdGlvbnMgPSBbXVxuICBuYl9yZWNvcmQ6IG51bWJlciA9IDA7XG4gIHJvd19zZWxlY3RlZDogbnVtYmVyID0gLTE7XG4gIGNlbGxfc2VsZWN0ZWQ6IG51bWJlciA9IC0xO1xuXG4gIHRlbXA6IGFueVtdO1xuXG4gIEBJbnB1dCgpIHNvcnRlZEZpZWxkOiBNYURhdGFHcmlkU29ydGVkRmllbGQgPSB7XG4gICAgZmllbGQ6ICcnLFxuICAgIHJldmVyc2U6IHRydWVcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigvKnByaXZhdGUgcGlwZUxlbmd0aDogUGlwZUxlbmd0aFBpcGUqLykgeyBcbiAgfVxuXG4gIHJlc2V0U2VsZWN0aW9uKCkge1xuICAgIHRoaXMuY2VsbF9zZWxlY3RlZCA9IC0xO1xuICAgIHRoaXMucm93X3NlbGVjdGVkID0gLTE7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLnNlYXJjaFZhbHVlOiBcIiArIHRoaXMuc2VhcmNoVmFsdWUpXG4gICAgLy8gY29uc29sZS5sb2coJ25nT25DaGFuZ2VzICcsIGNoYW5nZXMpO1xuICAgIGlmIChjaGFuZ2VzLnBhZ2UgJiYgY2hhbmdlcy5wYWdlLmN1cnJlbnRWYWx1ZSA+PSAwKSB7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmNhblNlbGVjdCAmJiBjaGFuZ2VzLmNhblNlbGVjdC5jdXJyZW50VmFsdWUpIHtcbiAgICAgIC8vdGhpcy5wYWdlID0gY2hhbmdlcy5wYWdlLmN1cnJlbnRWYWx1ZTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjYW5TZWxlY3QgICcsIGNoYW5nZXMuY2FuU2VsZWN0LmN1cnJlbnRWYWx1ZSk7XG4gICAgICB0aGlzLmNhblNlbGVjdENoYW5nZS5lbWl0KGNoYW5nZXMuY2FuU2VsZWN0LnByZXZpb3VzVmFsdWUpXG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmxpbWl0ICYmIGNoYW5nZXMubGltaXQuY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLmxpbWl0ID0gY2hhbmdlcy5saW1pdC5jdXJyZW50VmFsdWU7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnJvd3MgJiYgY2hhbmdlcy5yb3dzLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy50ZW1wID0gY2hhbmdlcy5yb3dzLmN1cnJlbnRWYWx1ZTtcbiAgICAgIHRoaXMuX2NoYW5nZVBhZ2UodGhpcy5jdXJyZW50X3BhZ2UsIHRoaXMudGVtcCwgdHJ1ZSk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKFwiYSAtIG5nT25DaGFuZ2VzIGN1cnJlbnRfcGFnZSA9PiBcIiArIHRoaXMuY3VycmVudF9wYWdlKVxuICB9XG5cbiAgSW5jcmVtZW50UGFnZSgpIHtcbiAgICB0aGlzLl9jaGFuZ2VQYWdlKHRoaXMuY3VycmVudF9wYWdlICsgMSwgdGhpcy50ZW1wKVxuICB9XG5cbiAgRGVjcmVtZW50UGFnZSgpIHtcbiAgICB0aGlzLl9jaGFuZ2VQYWdlKHRoaXMuY3VycmVudF9wYWdlIC0gMSwgdGhpcy50ZW1wKVxuICB9XG5cbiAgRmFzdEluY3JlbWVudFBhZ2UoKSB7XG4gICAgbGV0IHAgPSB0aGlzLmN1cnJlbnRfcGFnZSArIDU7IC8vTWF0aC5yb3VuZCh0aGlzLm1heF9wYWdlIC8gNTApO1xuICAgIHRoaXMuX2NoYW5nZVBhZ2UocCwgdGhpcy50ZW1wKVxuICB9XG5cbiAgX2RhdGFDaGFuZ2UgKGV2dCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiX2RhdGFDaGFuZ2VcIixldnQpO1xuICAgIHRoaXMucm93c0NoYW5nZS5lbWl0KGV2dCk7XG4gIH1cblxuICBfZGF0YVNlbGVjdG9yIChldnQscHJvcCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiX2RhdGFTZWxlY3RvclwiLGV2dCxwcm9wKTtcbiAgICBpZiAodHlwZW9mKGV2dCkgPT0gJ29iamVjdCcgJiYgZXZ0Lmxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnJvd3NTZWxlY3QuZW1pdChbZXZ0XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm93c1NlbGVjdC5lbWl0KGV2dCk7XG4gICAgfVxuICAgIFxuICB9XG5cbiAgRmFzdERlY3JlbWVudFBhZ2UoKSB7XG4gICAgbGV0IHAgPSB0aGlzLmN1cnJlbnRfcGFnZSAtIDU7IC8vTWF0aC5yb3VuZCh0aGlzLm1heF9wYWdlIC8gNTApOztcbiAgICB0aGlzLl9jaGFuZ2VQYWdlKHAsIHRoaXMudGVtcClcbiAgfVxuXG4gIHByaXZhdGUgX2NoYW5nZVBhZ2Uobl9wYWdlOiBudW1iZXIsIHJvd3M/OiBhbnksIGZvcmNlPzogYm9vbGVhbikge1xuICAgIGlmICghcm93cylcbiAgICAgIHJvd3MgPSB0aGlzLnRlbXA7XG5cbiAgICAvL1xuXG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbiA9PSBmYWxzZSkge1xuICAgICAgaWYgKGZvcmNlID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMudGVtcCA9IE1hRmlsdGVyLkZpbHRlckJ5Q29uZGl0aW9ucyh0aGlzLmNvbmRpdGlvbnMsIHJvd3MpO1xuICAgICAgICB0aGlzLnRlbXAgPSB0aGlzLl9zb3J0RGF0YSh0aGlzLnRlbXApO1xuICAgICAgICByb3dzID0gdGhpcy50ZW1wO1xuICAgICAgfVxuICAgICAgdGhpcy5jb3VudCA9IHJvd3MubGVuZ3RoO1xuICAgIH1cbiAgICAvLyBDYWxjdWwgZHUgbWF4X3BhZ2VcbiAgICB0aGlzLm1heF9wYWdlID0gMDtcbiAgICBpZiAodGhpcy5jb3VudCA+PSAwICYmIHRoaXMubGltaXQgPiAwKSB7XG4gICAgICB0aGlzLm1heF9wYWdlID0gTWF0aC5mbG9vcih0aGlzLmNvdW50IC8gdGhpcy5saW1pdCk7XG4gICAgICBpZiAoKHRoaXMuY291bnQgJSB0aGlzLmxpbWl0KSAhPSAwKSB7XG4gICAgICAgIHRoaXMubWF4X3BhZ2UgKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5fcGFnZSA8IDApIHtcbiAgICAgIG5fcGFnZSA9IDA7XG4gICAgfVxuICAgIGlmIChuX3BhZ2UgPj0gdGhpcy5tYXhfcGFnZSAmJiB0aGlzLm1heF9wYWdlID4gMCkge1xuICAgICAgbl9wYWdlID0gdGhpcy5tYXhfcGFnZSAtIDE7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhbmdlUGFnZSBcIiArIG5fcGFnZSArICcgLyAnICsgdGhpcy5tYXhfcGFnZSArICcgYyA9PiAnICsgdGhpcy5jdXJyZW50X3BhZ2UgKyAnIG1heF9wYWdlICcgKyB0aGlzLm1heF9wYWdlKTtcblxuICAgIGlmICh0aGlzLnBhZ2UgPj0gMCB8fCB0aGlzLnBhZ2luYXRpb24pIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRfcGFnZSAhPSBuX3BhZ2UpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50X3BhZ2UgPSBuX3BhZ2U7XG4gICAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSAnJztcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PiBFTUlUIENIQU5HRSBcIilcbiAgICAgICAgdGhpcy5jaGFuZ2VQYWdlLmVtaXQobl9wYWdlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJvd19zZWxlY3RlZCA9IC0xO1xuICAgICAgdGhpcy5jdXJyZW50X3BhZ2UgPSBuX3BhZ2U7XG4gICAgICB0aGlzLm5iX3JlY29yZCA9IHRoaXMuY291bnQ7XG4gICAgICB0aGlzLnN0YXJ0YXQgPSAwO1xuICAgICAgdGhpcy5yb3dzX2Rpc3BsYXllZCA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IHJvd3MgJiYgaSA8IHRoaXMubGltaXQgJiYgaSA8IHRoaXMuY291bnQgJiYgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5yb3dzX2Rpc3BsYXllZC5wdXNoKHJvd3NbaV0pO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcblxuICAgICAgLy8gU0FOUyBQQUdJTkFUSU9OXG4gICAgICAvLyBjb25zb2xlLmVycm9yKFwiU0FOUyBQQUdJTkFUSU9OXCIpXG4gICAgICBcbiAgICAgIGlmICghZm9yY2UgJiYgKHRoaXMuY3VycmVudF9wYWdlID09IG5fcGFnZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5yb3dfc2VsZWN0ZWQgPSAtMTtcbiAgICAgIHRoaXMuY3VycmVudF9wYWdlID0gbl9wYWdlO1xuICAgICAgdGhpcy5uYl9yZWNvcmQgPSAwO1xuICAgICAgdGhpcy5zdGFydGF0ID0gMDtcbiAgICAgIHRoaXMucm93c19kaXNwbGF5ZWQgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IHJvd3MgJiYgaSA8IHRoaXMubGltaXQgJiYgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHJvd3MubGVuZ3RoID4gKHRoaXMuY3VycmVudF9wYWdlICogdGhpcy5saW1pdCkgKyBpKSB7XG4gICAgICAgICAgdGhpcy5yb3dzX2Rpc3BsYXllZC5wdXNoKHJvd3NbdGhpcy5jdXJyZW50X3BhZ2UgKiB0aGlzLmxpbWl0ICsgaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLm5iX3JlY29yZCA9IHJvd3MubGVuZ3RoO1xuXG5cbiAgICB9XG4gICAgLy8gQ2FsY3VsIGR1IG5vbWJyZSBkZSBwYWdlIGVuIGJhcyBkdSBkYXRhZ3JpZFxuICAgIHRoaXMuc3RhcnRhdCA9IHRoaXMubGltaXQgKiAodGhpcy5jdXJyZW50X3BhZ2UgKyAxKTtcbiAgICBpZiAodGhpcy5zdGFydGF0ID4gdGhpcy5jb3VudClcbiAgICAgIHRoaXMuc3RhcnRhdCA9IHRoaXMuY291bnQ7XG4gICAgdGhpcy5wYWdlcyA9IFtdO1xuICAgIGxldCBzdGFydF9wYWdlID0gdGhpcy5jdXJyZW50X3BhZ2UgLSBNYXRoLnJvdW5kKHRoaXMubWF4X25iX3BhZ2UgLyAyKTtcbiAgICBpZiAoc3RhcnRfcGFnZSA8IDApXG4gICAgICBzdGFydF9wYWdlID0gMDtcbiAgICBmb3IgKGxldCBwID0gc3RhcnRfcGFnZSwgbmJwID0gMDsgcm93cyAmJiBwIDwgdGhpcy5jb3VudCAvIHRoaXMubGltaXQgJiYgbmJwIDwgdGhpcy5tYXhfbmJfcGFnZTsgbmJwKyssIHArKykge1xuICAgICAgdGhpcy5wYWdlcy5wdXNoKHApXG4gICAgfVxuXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvL3RoaXMucGlwZUxlbmd0aC50cmFuc2Zvcm0oXCJiYmJcIik7XG4gIH1cblxuICBwcml2YXRlIF9zb3J0RGF0YShyb3dzKSB7XG4gICAgbGV0IHNmID0gdGhpcy5zb3J0ZWRGaWVsZC5maWVsZDtcbiAgICAvL2NvbnNvbGUubG9nKCdfc29ydERhdGEnLHRoaXMuc29ydGVkRmllbGQpXG4gICAgcmV0dXJuIHJvd3Muc29ydCgoYSwgYikgPT4ge1xuXG4gICAgICBsZXQgcjtcblxuICAgICAgaWYgKHR5cGVvZiAoYVtzZl0pID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgKGJbc2ZdKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIGMzOiBzdHJpbmcgPSBhW3NmXTtcbiAgICAgICAgdmFyIGM0IDogc3RyaW5nPSBiW3NmXTtcbiAgICAgICAgaWYgKGM0ID09IG51bGwpIHtcbiAgICAgICAgICBjNCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjMyA9PSBudWxsKSB7XG4gICAgICAgICAgYzMgPSAnJztcbiAgICAgICAgfVxuICAgICAgICByID0gYzMubG9jYWxlQ29tcGFyZShjNCwgJ2VuJywgeyBzZW5zaXRpdml0eTogJ2Jhc2UnIH0pO1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mIChhW3NmXSkgPT09ICdudW1iZXInIHx8IHR5cGVvZiAoYltzZl0pID09PSAnbnVtYmVyJyApIHtcbiAgICAgICAgICByID0gYVtzZl0gLSBiW3NmXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0eXBlb2YgKGFbc2ZdKSA9PT0gJ2Jvb2xlYW4nIHx8IHR5cGVvZiAoYltzZl0pID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHZhciBjMSA9IDA7XG4gICAgICAgICAgICBpZiAoYVtzZl0gPT09IHRydWUpXG4gICAgICAgICAgICAgIGMxID0gMjtcbiAgICAgICAgICAgIGlmIChhW3NmXSA9PT0gZmFsc2UpXG4gICAgICAgICAgICAgIGMxID0gMTtcbiAgICAgICAgICAgIHZhciBjMiA9IDA7XG4gICAgICAgICAgICBpZiAoYltzZl0gPT09IHRydWUpXG4gICAgICAgICAgICAgIGMyID0gMjtcbiAgICAgICAgICAgIGlmIChiW3NmXSA9PT0gZmFsc2UpXG4gICAgICAgICAgICAgIGMyID0gMTtcbiAgICAgICAgICAgIHIgPSBjMSAtIGMyO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByID0gYVtzZl0gPCBiW3NmXVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIC8vY29uc29sZS5sb2coJ0NvbXBhcmUgJyArIGFbc2ZdICsgJyA8PT4gJyArIGJbc2ZdICsgJyAgPSAnICsgciArICcgdGhpcy5zb3J0ZWRGaWVsZC5yZXZlcnNlJyArIHRoaXMuc29ydGVkRmllbGQucmV2ZXJzZSlcbiAgICAgIGlmICh0aGlzLnNvcnRlZEZpZWxkLnJldmVyc2UpIHtcbiAgICAgICAgcmV0dXJuIHIgKiAtMVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJcbiAgICB9KTtcblxuICB9XG5cbiAgc29ydEJ5KGNvbCkge1xuICAgIC8vIGNvbnNvbGUubG9nKGNvbCk7XG4gICAgaWYgKHRoaXMuc29ydGVkRmllbGQuZmllbGQgPT0gY29sLnByb3ApIHtcbiAgICAgIHRoaXMuc29ydGVkRmllbGQucmV2ZXJzZSA9ICF0aGlzLnNvcnRlZEZpZWxkLnJldmVyc2VcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zb3J0ZWRGaWVsZC5yZXZlcnNlID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuc29ydGVkRmllbGQuZmllbGQgPSBjb2wucHJvcDtcbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uKSB7XG4gICAgICB0aGlzLnNvcnQuZW1pdCh0aGlzLnNvcnRlZEZpZWxkKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuXG4gICAgICB0aGlzLl9jaGFuZ2VQYWdlKHRoaXMuY3VycmVudF9wYWdlLCB0aGlzLnJvd3MsIHRydWUpO1xuICAgIH1cblxuICB9XG5cbiAgU2VsZWN0Um93KGluZGV4LCByb3cpIHtcbiAgICBpZiAodGhpcy5jYW5TZWxlY3QgPT09IFwicm93XCIpIHtcbiAgICAgIHRoaXMucm93X3NlbGVjdGVkID0gaW5kZXg7XG4gICAgICB0aGlzLmNlbGxfc2VsZWN0ZWQgPSBudWxsO1xuICAgICAgbGV0IHRydWVJbmRleCA9IHRoaXMuY3VycmVudF9wYWdlICogdGhpcy5saW1pdCArIGluZGV4O1xuICAgICAgLy9sZXQgZGF0YSA9IHRoaXMucm93c1t0cnVlSW5kZXhdO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJTZWxlY3RSb3cgdHJ1ZUluZGV4XCIsIHRydWVJbmRleCk7XG4gICAgICB0aGlzLnNlbGVjdC5lbWl0KDxNYURhdGFHcmlkU2VsZWN0RXZlbnQ+eyBpbmRleDogdHJ1ZUluZGV4LCByb3c6IHJvdyB9KTtcbiAgICB9XG4gIH1cblxuICBTZWxlY3RDZWxsKGluZGV4LCByb3csIGNvbCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiU2VsZWN0Q2VsbCBTZWxlY3RcIiwgaW5kZXgsIHJvdywgY29sKTtcbiAgICBpZiAodGhpcy5jYW5TZWxlY3QgPT09IFwiY2VsbFwiKSB7XG4gICAgICB0aGlzLnJvd19zZWxlY3RlZCA9IGluZGV4O1xuICAgICAgdGhpcy5jZWxsX3NlbGVjdGVkID0gY29sLnByb3A7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIlNlbGVjdENlbGwgU2VsZWN0XCIsIGluZGV4LCByb3csIGNvbCk7XG4gICAgICBsZXQgdHJ1ZUluZGV4ID0gdGhpcy5jdXJyZW50X3BhZ2UgKiB0aGlzLmxpbWl0ICsgaW5kZXg7XG4gICAgICAvL2NvbnNvbGUubG9nKFwiRGF0YSBHcmlkIHRydWVJbmRleFwiLCB0cnVlSW5kZXgpO1xuICAgICAgdGhpcy5zZWxlY3QuZW1pdCg8TWFEYXRhR3JpZFNlbGVjdEV2ZW50PnsgaW5kZXg6IHRydWVJbmRleCwgcm93OiByb3csIHByb3A6IGNvbC5wcm9wLCB2YWx1ZTogcm93W2NvbC5wcm9wXSwgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyQ2hhbmdlKGU6IE1hRGF0YUdyaWRGaWx0ZXJFdmVudCkge1xuICAgIHRoaXMuZXh0RmlsdGVyQ2hhbmdlLmVtaXQoZSk7XG4gIH1cblxuICB0aW1lb3V0ID0gbnVsbDtcbiAgcHJpdmF0ZSBfY2hhbmdlSGVhZGVyRmlsdGVyKGU6IGFueSkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fZGVsYXlDaGFuZ2VIZWFkZXJGaWx0ZXIoZSk7XG4gICAgfSwgNTAwKTtcbiAgfVxuXG4gIHByaXZhdGUgX2RlbGF5Q2hhbmdlSGVhZGVyRmlsdGVyKGU6IGFueSkge1xuICAgIGxldCBjb25kaXRpb25zID0gW107XG4gICAgdGhpcy5oZWFkZXJmaWx0ZXIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgLy9pdGVtLmZpbHRlcl92YWx1ZTtcbiAgICAgIGxldCBjb25kaXRpb24gPSBpdGVtLmdldEZpbHRlcigpO1xuICAgICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgICBpZiAoY29uZGl0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uZGl0aW9ucy5wdXNoKCdhbmQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25kaXRpb25zLnB1c2goY29uZGl0aW9uKTtcbiAgICAgIH1cbiAgICAgIC8vY29uc29sZS5sb2coaXRlbS5jb2wucHJvcCArICcgPT4gJytpdGVtLmZpbHRlcl92YWx1ZSk7XG4gICAgfSlcbiAgICAvLyBjb25zb2xlLmxvZyhcIkNPTkRJVElPTlNcIiwgY29uZGl0aW9ucyk7XG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbiA9PSBmYWxzZSkge1xuICAgICAgdGhpcy5jb25kaXRpb25zID0gY29uZGl0aW9ucztcbiAgICAgIHRoaXMuX2NoYW5nZVBhZ2UoMCwgdGhpcy5yb3dzLCB0cnVlKTtcbiAgICAgIHRoaXMuZmlsdGVyQ2hhbmdlLmVtaXQoPE1hRGF0YUdyaWRIZWFkRmlsdGVyRXZlbnQ+eyB3aGVyZTogY29uZGl0aW9ucywgZGF0YTogdGhpcy50ZW1wIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbHRlckNoYW5nZS5lbWl0KDxNYURhdGFHcmlkSGVhZEZpbHRlckV2ZW50Pnsgd2hlcmU6IGNvbmRpdGlvbnMgfSk7XG4gICAgfVxuXG5cbiAgfVxuXG59XG4iXX0=