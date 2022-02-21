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
    dataChange(evt) {
        // console.log("dataChange",evt);
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
        // console.log('_sortData',this.sortedField)
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
        // console.log('_changeHeaderFilter')
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this._delayChangeHeaderFilter();
        }, 500);
    }
    _delayChangeHeaderFilter() {
        let conditions = [];
        // console.log('_delayChangeHeaderFilter')
        this.headerfilter.forEach((item) => {
            //item.filter_value;
            let condition = item.getFilter();
            if (condition) {
                if (conditions.length > 0) {
                    conditions.push('and');
                }
                //console.log("GET CONDITION",condition)
                conditions.push(condition);
            }
            //console.log(item.col.prop + ' => '+item.filter_value);
        });
        //console.log("CONDITIONS", conditions);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtZGF0YS1ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJEOi9NeUhvbWUvYW5kcm9pZC93b3Jrc3BhY2UvZ2l0L21hLW5nLWRhdGEtZ3JpZC9wcm9qZWN0cy9tYS1kYXRhLWdyaWQvc3JjLyIsInNvdXJjZXMiOlsibGliL21hLWRhdGEtZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFhLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBRWpILE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBb0IsUUFBUSxFQUFFLE1BQU0sbUNBQW1DLENBQUE7QUFFOUUsbUVBQW1FO0FBUW5FLE1BQU0sT0FBTyxtQkFBbUI7SUF1RDlCO1FBckRBOzs7O1NBSUM7UUFDUSxZQUFPLEdBQThCLEVBQUUsQ0FBQztRQUN4QyxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLFNBQUksR0FBVyxDQUFDLENBQUMsQ0FBQztRQUNsQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGNBQVMsR0FBWSxFQUFFLENBQUM7UUFDeEIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUVkLFNBQUksR0FBUSxFQUFFLENBQUM7UUFDZCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQXlCLENBQUM7UUFDbkQsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBeUIsQ0FBQztRQUM1RCxp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QyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQzNGO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBNEIsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUMxRTtJQUdILENBQUM7OztZQXBWRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLDhCQUE4QjtnQkFDOUIsK3ZPQUE0Qzs7YUFHN0M7Ozs7c0JBUUUsS0FBSztvQkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO3dCQUNMLEtBQUs7cUJBQ0wsS0FBSzttQkFFTCxLQUFLO3FCQUNMLE1BQU07cUJBQ04sTUFBTTs4QkFDTixNQUFNOzJCQUNOLE1BQU07eUJBQ04sTUFBTTttQkFDTixNQUFNOzhCQUNOLE1BQU07eUJBQ04sTUFBTTt5QkFDTixNQUFNO3lCQUVOLFNBQVMsU0FBQyxxQkFBcUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MkJBQ2pELFlBQVksU0FBQywyQkFBMkI7MEJBb0J4QyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUXVlcnlMaXN0LCBWaWV3Q2hpbGQsIFZpZXdDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhR3JpZEhlYWRGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS1ncmlkLWhlYWQtZmlsdGVyL2RhdGEtZ3JpZC1oZWFkLWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFEYXRhR3JpZEZpbHRlckV2ZW50LCBNYURhdGFHcmlkQ29sdW1uT3B0aW9ucywgTWFEYXRhR3JpZFNlbGVjdE1ldGhvZCwgTWFEYXRhR3JpZFNlbGVjdEV2ZW50LCBNYURhdGFHcmlkSGVhZEZpbHRlckV2ZW50LCBNYURhdGFHcmlkU29ydGVkRmllbGQgfSBmcm9tICcuL2ludGVyZmFjZXMvbWEtZGF0YS1ncmlkLW9wdGlvbnMnO1xuaW1wb3J0IHsgTWFHcmlkRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9tYS1ncmlkLWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyQ29uZGl0aW9ucywgTWFGaWx0ZXIgfSBmcm9tIFwiQGFtbjMxL2ZpbHRlci1tdWx0aXBsZS1jb25kaXRpb25zXCJcblxuLy8gaW1wb3J0IHsgUGlwZUxlbmd0aFBpcGUgfSBmcm9tICdzcmMvYXBwL3BpcGVzL3BpcGUtbGVuZ3RoLnBpcGUnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWEtZGF0YS1ncmlkJyxcbiAgLy9wcm92aWRlcnM6IFtQaXBlTGVuZ3RoUGlwZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9tYS1kYXRhLWdyaWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYS1kYXRhLWdyaWQuY29tcG9uZW50LmNzcyddLFxuXG59KVxuZXhwb3J0IGNsYXNzIE1hRGF0YUdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgLyogIFwiY29sdW1uc1wiIGVsZW1lbnQgZCdlbnRyw6llXG4gICAgIFwiY2hhbmdlXCIgZWxlbWVudCBkZSBzb3J0aXIgcGVybWV0dGFudCBkZSBwcmVuZHJlIGVuIGNvbXB0ZVxuICAgICAgICAgICAgICAgICAgIGwnZXZlbnQgT25DaGFuZ2VzXG4gICAgPG1hLWRhdGEtZ3JpZCBbY29sdW1uc109XCJjb2x1bW5zXCIgIFtyb3dzXT1cInJvd3NcIiAoY2hhbmdlKT1cIkNoYW5nZURhdGEoJGV2ZW50KVwiPjwvbWEtZGF0YS1ncmlkPlxuICovXG4gIEBJbnB1dCgpIGNvbHVtbnM6IE1hRGF0YUdyaWRDb2x1bW5PcHRpb25zW10gPSBbXTtcbiAgQElucHV0KCkgbGltaXQ6IG51bWJlciA9IDc7XG4gIEBJbnB1dCgpIGNhblNlbGVjdDogTWFEYXRhR3JpZFNlbGVjdE1ldGhvZDtcbiAgQElucHV0KCkgZXh0RmlsdGVyOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGhlYWRGaWx0ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgcGFnaW5hdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBwYWdlOiBudW1iZXIgPSAtMTtcbiAgQElucHV0KCkgY291bnQ6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIGN1c3RvbUNTUzogIHN0cmluZyA9IFwiXCI7XG4gIEBJbnB1dCgpIG15R3JpZCA9IHRoaXM7XG5cbiAgQElucHV0KCkgcm93czogYW55ID0gW107XG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8TWFEYXRhR3JpZFNlbGVjdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgZXh0RmlsdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxNYURhdGFHcmlkRmlsdGVyRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBmaWx0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNoYW5nZVBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyPE1hRGF0YUdyaWRTb3J0ZWRGaWVsZD4oKTtcbiAgQE91dHB1dCgpIGNhblNlbGVjdENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TWFEYXRhR3JpZFNlbGVjdE1ldGhvZD4oKTtcbiAgQE91dHB1dCgpIHJvd3NDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHJvd3NTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xuXG4gIEBWaWV3Q2hpbGQoTWFHcmlkRmlsdGVyQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSBncmlkZmlsdGVyOiBNYUdyaWRGaWx0ZXJDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGRyZW4oRGF0YUdyaWRIZWFkRmlsdGVyQ29tcG9uZW50KSBoZWFkZXJmaWx0ZXI6IFF1ZXJ5TGlzdDxEYXRhR3JpZEhlYWRGaWx0ZXJDb21wb25lbnQ+O1xuXG4gIGdyaWRfY2VsbF9maXJzdCA9IHRoaXMuY3VzdG9tQ1NTICsgJ2dyaWRfY2VsbF9maXJzdCdcbiAgZ3JpZF9yb3dfc2VsZWN0ZWQgPSB0aGlzLmN1c3RvbUNTUyArICdncmlkX3Jvd19zZWxlY3RlZCc7XG4gIGN1cnJlbnRfcGFnZTogbnVtYmVyID0gLTE7XG4gIG1heF9wYWdlOiBudW1iZXIgPSAxO1xuICBtYXhfbmJfcGFnZTogbnVtYmVyID0gNjtcbiAgbmJfcGFnZTogbnVtYmVyID0gMTtcbiAgc3RhcnRhdDogbnVtYmVyID0gMDtcbiAgc2VhcmNoVmFsdWU6IHN0cmluZyA9IFwiY1wiXG4gIFxuICByb3dzX2Rpc3BsYXllZDogYW55ID0gW107XG4gIHBhZ2VzID0gW107XG4gIGNvbmRpdGlvbnM6IEZpbHRlckNvbmRpdGlvbnMgPSBbXVxuICBuYl9yZWNvcmQ6IG51bWJlciA9IDA7XG4gIHJvd19zZWxlY3RlZDogbnVtYmVyID0gLTE7XG4gIGNlbGxfc2VsZWN0ZWQ6IG51bWJlciA9IC0xO1xuXG4gIHRlbXA6IGFueVtdO1xuXG4gIEBJbnB1dCgpIHNvcnRlZEZpZWxkOiBNYURhdGFHcmlkU29ydGVkRmllbGQgPSB7XG4gICAgZmllbGQ6ICcnLFxuICAgIHJldmVyc2U6IHRydWVcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigvKnByaXZhdGUgcGlwZUxlbmd0aDogUGlwZUxlbmd0aFBpcGUqLykgeyBcbiAgfVxuXG4gIHJlc2V0U2VsZWN0aW9uKCkge1xuICAgIHRoaXMuY2VsbF9zZWxlY3RlZCA9IC0xO1xuICAgIHRoaXMucm93X3NlbGVjdGVkID0gLTE7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLnNlYXJjaFZhbHVlOiBcIiArIHRoaXMuc2VhcmNoVmFsdWUpXG4gICAgLy8gY29uc29sZS5sb2coJ25nT25DaGFuZ2VzICcsIGNoYW5nZXMpO1xuICAgIGlmIChjaGFuZ2VzLnBhZ2UgJiYgY2hhbmdlcy5wYWdlLmN1cnJlbnRWYWx1ZSA+PSAwKSB7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmNhblNlbGVjdCAmJiBjaGFuZ2VzLmNhblNlbGVjdC5jdXJyZW50VmFsdWUpIHtcbiAgICAgIC8vdGhpcy5wYWdlID0gY2hhbmdlcy5wYWdlLmN1cnJlbnRWYWx1ZTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjYW5TZWxlY3QgICcsIGNoYW5nZXMuY2FuU2VsZWN0LmN1cnJlbnRWYWx1ZSk7XG4gICAgICB0aGlzLmNhblNlbGVjdENoYW5nZS5lbWl0KGNoYW5nZXMuY2FuU2VsZWN0LnByZXZpb3VzVmFsdWUpXG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmxpbWl0ICYmIGNoYW5nZXMubGltaXQuY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLmxpbWl0ID0gY2hhbmdlcy5saW1pdC5jdXJyZW50VmFsdWU7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnJvd3MgJiYgY2hhbmdlcy5yb3dzLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy50ZW1wID0gY2hhbmdlcy5yb3dzLmN1cnJlbnRWYWx1ZTtcbiAgICAgIHRoaXMuX2NoYW5nZVBhZ2UodGhpcy5jdXJyZW50X3BhZ2UsIHRoaXMudGVtcCwgdHJ1ZSk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKFwiYSAtIG5nT25DaGFuZ2VzIGN1cnJlbnRfcGFnZSA9PiBcIiArIHRoaXMuY3VycmVudF9wYWdlKVxuICB9XG5cbiAgSW5jcmVtZW50UGFnZSgpIHtcbiAgICB0aGlzLl9jaGFuZ2VQYWdlKHRoaXMuY3VycmVudF9wYWdlICsgMSwgdGhpcy50ZW1wKVxuICB9XG5cbiAgRGVjcmVtZW50UGFnZSgpIHtcbiAgICB0aGlzLl9jaGFuZ2VQYWdlKHRoaXMuY3VycmVudF9wYWdlIC0gMSwgdGhpcy50ZW1wKVxuICB9XG5cbiAgRmFzdEluY3JlbWVudFBhZ2UoKSB7XG4gICAgbGV0IHAgPSB0aGlzLmN1cnJlbnRfcGFnZSArIDU7IC8vTWF0aC5yb3VuZCh0aGlzLm1heF9wYWdlIC8gNTApO1xuICAgIHRoaXMuX2NoYW5nZVBhZ2UocCwgdGhpcy50ZW1wKVxuICB9XG5cbiAgZGF0YUNoYW5nZSAoZXZ0KSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJkYXRhQ2hhbmdlXCIsZXZ0KTtcbiAgICB0aGlzLnJvd3NDaGFuZ2UuZW1pdChldnQpO1xuICB9XG5cbiAgX2RhdGFTZWxlY3RvciAoZXZ0LHByb3ApIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIl9kYXRhU2VsZWN0b3JcIixldnQscHJvcCk7XG4gICAgaWYgKHR5cGVvZihldnQpID09ICdvYmplY3QnICYmIGV2dC5sZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5yb3dzU2VsZWN0LmVtaXQoW2V2dF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvd3NTZWxlY3QuZW1pdChldnQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgRmFzdERlY3JlbWVudFBhZ2UoKSB7XG4gICAgbGV0IHAgPSB0aGlzLmN1cnJlbnRfcGFnZSAtIDU7IC8vTWF0aC5yb3VuZCh0aGlzLm1heF9wYWdlIC8gNTApOztcbiAgICB0aGlzLl9jaGFuZ2VQYWdlKHAsIHRoaXMudGVtcClcbiAgfVxuXG4gIHByaXZhdGUgX2NoYW5nZVBhZ2Uobl9wYWdlOiBudW1iZXIsIHJvd3M/OiBhbnksIGZvcmNlPzogYm9vbGVhbikge1xuICAgIGlmICghcm93cylcbiAgICAgIHJvd3MgPSB0aGlzLnRlbXA7XG5cbiAgICAvL1xuXG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbiA9PSBmYWxzZSkge1xuICAgICAgaWYgKGZvcmNlID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMudGVtcCA9IE1hRmlsdGVyLkZpbHRlckJ5Q29uZGl0aW9ucyh0aGlzLmNvbmRpdGlvbnMsIHJvd3MpO1xuICAgICAgICB0aGlzLnRlbXAgPSB0aGlzLl9zb3J0RGF0YSh0aGlzLnRlbXApO1xuICAgICAgICByb3dzID0gdGhpcy50ZW1wO1xuICAgICAgfVxuICAgICAgdGhpcy5jb3VudCA9IHJvd3MubGVuZ3RoO1xuICAgIH1cbiAgICAvLyBDYWxjdWwgZHUgbWF4X3BhZ2VcbiAgICB0aGlzLm1heF9wYWdlID0gMDtcbiAgICBpZiAodGhpcy5jb3VudCA+PSAwICYmIHRoaXMubGltaXQgPiAwKSB7XG4gICAgICB0aGlzLm1heF9wYWdlID0gTWF0aC5mbG9vcih0aGlzLmNvdW50IC8gdGhpcy5saW1pdCk7XG4gICAgICBpZiAoKHRoaXMuY291bnQgJSB0aGlzLmxpbWl0KSAhPSAwKSB7XG4gICAgICAgIHRoaXMubWF4X3BhZ2UgKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5fcGFnZSA8IDApIHtcbiAgICAgIG5fcGFnZSA9IDA7XG4gICAgfVxuICAgIGlmIChuX3BhZ2UgPj0gdGhpcy5tYXhfcGFnZSAmJiB0aGlzLm1heF9wYWdlID4gMCkge1xuICAgICAgbl9wYWdlID0gdGhpcy5tYXhfcGFnZSAtIDE7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhbmdlUGFnZSBcIiArIG5fcGFnZSArICcgLyAnICsgdGhpcy5tYXhfcGFnZSArICcgYyA9PiAnICsgdGhpcy5jdXJyZW50X3BhZ2UgKyAnIG1heF9wYWdlICcgKyB0aGlzLm1heF9wYWdlKTtcblxuICAgIGlmICh0aGlzLnBhZ2UgPj0gMCB8fCB0aGlzLnBhZ2luYXRpb24pIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRfcGFnZSAhPSBuX3BhZ2UpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50X3BhZ2UgPSBuX3BhZ2U7XG4gICAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSAnJztcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PiBFTUlUIENIQU5HRSBcIilcbiAgICAgICAgdGhpcy5jaGFuZ2VQYWdlLmVtaXQobl9wYWdlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJvd19zZWxlY3RlZCA9IC0xO1xuICAgICAgdGhpcy5jdXJyZW50X3BhZ2UgPSBuX3BhZ2U7XG4gICAgICB0aGlzLm5iX3JlY29yZCA9IHRoaXMuY291bnQ7XG4gICAgICB0aGlzLnN0YXJ0YXQgPSAwO1xuICAgICAgdGhpcy5yb3dzX2Rpc3BsYXllZCA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IHJvd3MgJiYgaSA8IHRoaXMubGltaXQgJiYgaSA8IHRoaXMuY291bnQgJiYgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5yb3dzX2Rpc3BsYXllZC5wdXNoKHJvd3NbaV0pO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcblxuICAgICAgLy8gU0FOUyBQQUdJTkFUSU9OXG4gICAgICAvLyBjb25zb2xlLmVycm9yKFwiU0FOUyBQQUdJTkFUSU9OXCIpXG4gICAgICBcbiAgICAgIGlmICghZm9yY2UgJiYgKHRoaXMuY3VycmVudF9wYWdlID09IG5fcGFnZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5yb3dfc2VsZWN0ZWQgPSAtMTtcbiAgICAgIHRoaXMuY3VycmVudF9wYWdlID0gbl9wYWdlO1xuICAgICAgdGhpcy5uYl9yZWNvcmQgPSAwO1xuICAgICAgdGhpcy5zdGFydGF0ID0gMDtcbiAgICAgIHRoaXMucm93c19kaXNwbGF5ZWQgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IHJvd3MgJiYgaSA8IHRoaXMubGltaXQgJiYgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHJvd3MubGVuZ3RoID4gKHRoaXMuY3VycmVudF9wYWdlICogdGhpcy5saW1pdCkgKyBpKSB7XG4gICAgICAgICAgdGhpcy5yb3dzX2Rpc3BsYXllZC5wdXNoKHJvd3NbdGhpcy5jdXJyZW50X3BhZ2UgKiB0aGlzLmxpbWl0ICsgaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLm5iX3JlY29yZCA9IHJvd3MubGVuZ3RoO1xuXG5cbiAgICB9XG4gICAgLy8gQ2FsY3VsIGR1IG5vbWJyZSBkZSBwYWdlIGVuIGJhcyBkdSBkYXRhZ3JpZFxuICAgIHRoaXMuc3RhcnRhdCA9IHRoaXMubGltaXQgKiAodGhpcy5jdXJyZW50X3BhZ2UgKyAxKTtcbiAgICBpZiAodGhpcy5zdGFydGF0ID4gdGhpcy5jb3VudClcbiAgICAgIHRoaXMuc3RhcnRhdCA9IHRoaXMuY291bnQ7XG4gICAgdGhpcy5wYWdlcyA9IFtdO1xuICAgIGxldCBzdGFydF9wYWdlID0gdGhpcy5jdXJyZW50X3BhZ2UgLSBNYXRoLnJvdW5kKHRoaXMubWF4X25iX3BhZ2UgLyAyKTtcbiAgICBpZiAoc3RhcnRfcGFnZSA8IDApXG4gICAgICBzdGFydF9wYWdlID0gMDtcbiAgICBmb3IgKGxldCBwID0gc3RhcnRfcGFnZSwgbmJwID0gMDsgcm93cyAmJiBwIDwgdGhpcy5jb3VudCAvIHRoaXMubGltaXQgJiYgbmJwIDwgdGhpcy5tYXhfbmJfcGFnZTsgbmJwKyssIHArKykge1xuICAgICAgdGhpcy5wYWdlcy5wdXNoKHApXG4gICAgfVxuXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvL3RoaXMucGlwZUxlbmd0aC50cmFuc2Zvcm0oXCJiYmJcIik7XG4gIH1cblxuICBwcml2YXRlIF9zb3J0RGF0YShyb3dzKSB7XG4gICAgbGV0IHNmID0gdGhpcy5zb3J0ZWRGaWVsZC5maWVsZDtcbiAgICAvLyBjb25zb2xlLmxvZygnX3NvcnREYXRhJyx0aGlzLnNvcnRlZEZpZWxkKVxuICAgIHJldHVybiByb3dzLnNvcnQoKGEsIGIpID0+IHtcblxuICAgICAgbGV0IHI7XG5cbiAgICAgIGlmICh0eXBlb2YgKGFbc2ZdKSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIChiW3NmXSkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciBjMzogc3RyaW5nID0gYVtzZl07XG4gICAgICAgIHZhciBjNCA6IHN0cmluZz0gYltzZl07XG4gICAgICAgIGlmIChjNCA9PSBudWxsKSB7XG4gICAgICAgICAgYzQgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoYzMgPT0gbnVsbCkge1xuICAgICAgICAgIGMzID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgciA9IGMzLmxvY2FsZUNvbXBhcmUoYzQsICdlbicsIHsgc2Vuc2l0aXZpdHk6ICdiYXNlJyB9KTtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHR5cGVvZiAoYVtzZl0pID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgKGJbc2ZdKSA9PT0gJ251bWJlcicgKSB7XG4gICAgICAgICAgciA9IGFbc2ZdIC0gYltzZl1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodHlwZW9mIChhW3NmXSkgPT09ICdib29sZWFuJyB8fCB0eXBlb2YgKGJbc2ZdKSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICB2YXIgYzEgPSAwO1xuICAgICAgICAgICAgaWYgKGFbc2ZdID09PSB0cnVlKVxuICAgICAgICAgICAgICBjMSA9IDI7XG4gICAgICAgICAgICBpZiAoYVtzZl0gPT09IGZhbHNlKVxuICAgICAgICAgICAgICBjMSA9IDE7XG4gICAgICAgICAgICB2YXIgYzIgPSAwO1xuICAgICAgICAgICAgaWYgKGJbc2ZdID09PSB0cnVlKVxuICAgICAgICAgICAgICBjMiA9IDI7XG4gICAgICAgICAgICBpZiAoYltzZl0gPT09IGZhbHNlKVxuICAgICAgICAgICAgICBjMiA9IDE7XG4gICAgICAgICAgICByID0gYzEgLSBjMjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgciA9IGFbc2ZdIDwgYltzZl1cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICAvL2NvbnNvbGUubG9nKCdDb21wYXJlICcgKyBhW3NmXSArICcgPD0+ICcgKyBiW3NmXSArICcgID0gJyArIHIgKyAnIHRoaXMuc29ydGVkRmllbGQucmV2ZXJzZScgKyB0aGlzLnNvcnRlZEZpZWxkLnJldmVyc2UpXG4gICAgICBpZiAodGhpcy5zb3J0ZWRGaWVsZC5yZXZlcnNlKSB7XG4gICAgICAgIHJldHVybiByICogLTFcbiAgICAgIH1cbiAgICAgIHJldHVybiByXG4gICAgfSk7XG5cbiAgfVxuXG4gIHNvcnRCeShjb2wpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhjb2wpO1xuICAgIGlmICh0aGlzLnNvcnRlZEZpZWxkLmZpZWxkID09IGNvbC5wcm9wKSB7XG4gICAgICB0aGlzLnNvcnRlZEZpZWxkLnJldmVyc2UgPSAhdGhpcy5zb3J0ZWRGaWVsZC5yZXZlcnNlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc29ydGVkRmllbGQucmV2ZXJzZSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnNvcnRlZEZpZWxkLmZpZWxkID0gY29sLnByb3A7XG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbikge1xuICAgICAgdGhpcy5zb3J0LmVtaXQodGhpcy5zb3J0ZWRGaWVsZCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5fY2hhbmdlUGFnZSh0aGlzLmN1cnJlbnRfcGFnZSwgdGhpcy5yb3dzLCB0cnVlKTtcbiAgICB9XG5cbiAgfVxuXG4gIFNlbGVjdFJvdyhpbmRleCwgcm93KSB7XG4gICAgaWYgKHRoaXMuY2FuU2VsZWN0ID09PSBcInJvd1wiKSB7XG4gICAgICB0aGlzLnJvd19zZWxlY3RlZCA9IGluZGV4O1xuICAgICAgdGhpcy5jZWxsX3NlbGVjdGVkID0gbnVsbDtcbiAgICAgIGxldCB0cnVlSW5kZXggPSB0aGlzLmN1cnJlbnRfcGFnZSAqIHRoaXMubGltaXQgKyBpbmRleDtcbiAgICAgIC8vbGV0IGRhdGEgPSB0aGlzLnJvd3NbdHJ1ZUluZGV4XTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiU2VsZWN0Um93IHRydWVJbmRleFwiLCB0cnVlSW5kZXgpO1xuICAgICAgdGhpcy5zZWxlY3QuZW1pdCg8TWFEYXRhR3JpZFNlbGVjdEV2ZW50PnsgaW5kZXg6IHRydWVJbmRleCwgcm93OiByb3cgfSk7XG4gICAgfVxuICB9XG5cbiAgU2VsZWN0Q2VsbChpbmRleCwgcm93LCBjb2wpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIlNlbGVjdENlbGwgU2VsZWN0XCIsIGluZGV4LCByb3csIGNvbCk7XG4gICAgaWYgKHRoaXMuY2FuU2VsZWN0ID09PSBcImNlbGxcIikge1xuICAgICAgdGhpcy5yb3dfc2VsZWN0ZWQgPSBpbmRleDtcbiAgICAgIHRoaXMuY2VsbF9zZWxlY3RlZCA9IGNvbC5wcm9wO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJTZWxlY3RDZWxsIFNlbGVjdFwiLCBpbmRleCwgcm93LCBjb2wpO1xuICAgICAgbGV0IHRydWVJbmRleCA9IHRoaXMuY3VycmVudF9wYWdlICogdGhpcy5saW1pdCArIGluZGV4O1xuICAgICAgLy9jb25zb2xlLmxvZyhcIkRhdGEgR3JpZCB0cnVlSW5kZXhcIiwgdHJ1ZUluZGV4KTtcbiAgICAgIHRoaXMuc2VsZWN0LmVtaXQoPE1hRGF0YUdyaWRTZWxlY3RFdmVudD57IGluZGV4OiB0cnVlSW5kZXgsIHJvdzogcm93LCBwcm9wOiBjb2wucHJvcCwgdmFsdWU6IHJvd1tjb2wucHJvcF0sIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckNoYW5nZShlOiBNYURhdGFHcmlkRmlsdGVyRXZlbnQpIHtcbiAgICB0aGlzLmV4dEZpbHRlckNoYW5nZS5lbWl0KGUpO1xuICB9XG5cbiAgdGltZW91dCA9IG51bGw7XG4gIHByaXZhdGUgX2NoYW5nZUhlYWRlckZpbHRlcihlOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnX2NoYW5nZUhlYWRlckZpbHRlcicpXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9kZWxheUNoYW5nZUhlYWRlckZpbHRlcigpO1xuICAgIH0sIDUwMCk7XG4gIH1cblxuICBwcml2YXRlIF9kZWxheUNoYW5nZUhlYWRlckZpbHRlcigpIHtcbiAgICBsZXQgY29uZGl0aW9ucyA9IFtdO1xuICAgIC8vIGNvbnNvbGUubG9nKCdfZGVsYXlDaGFuZ2VIZWFkZXJGaWx0ZXInKVxuICAgIHRoaXMuaGVhZGVyZmlsdGVyLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIC8vaXRlbS5maWx0ZXJfdmFsdWU7XG4gICAgICBsZXQgY29uZGl0aW9uID0gaXRlbS5nZXRGaWx0ZXIoKTtcbiAgICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgICAgaWYgKGNvbmRpdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbmRpdGlvbnMucHVzaCgnYW5kJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIkdFVCBDT05ESVRJT05cIixjb25kaXRpb24pXG4gICAgICAgIGNvbmRpdGlvbnMucHVzaChjb25kaXRpb24pO1xuICAgICAgfVxuICAgICAgLy9jb25zb2xlLmxvZyhpdGVtLmNvbC5wcm9wICsgJyA9PiAnK2l0ZW0uZmlsdGVyX3ZhbHVlKTtcbiAgICB9KVxuICAgIC8vY29uc29sZS5sb2coXCJDT05ESVRJT05TXCIsIGNvbmRpdGlvbnMpO1xuICAgIGlmICh0aGlzLnBhZ2luYXRpb24gPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuY29uZGl0aW9ucyA9IGNvbmRpdGlvbnM7XG4gICAgICB0aGlzLl9jaGFuZ2VQYWdlKDAsIHRoaXMucm93cywgdHJ1ZSk7XG4gICAgICB0aGlzLmZpbHRlckNoYW5nZS5lbWl0KDxNYURhdGFHcmlkSGVhZEZpbHRlckV2ZW50Pnsgd2hlcmU6IGNvbmRpdGlvbnMsIGRhdGE6IHRoaXMudGVtcCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWx0ZXJDaGFuZ2UuZW1pdCg8TWFEYXRhR3JpZEhlYWRGaWx0ZXJFdmVudD57IHdoZXJlOiBjb25kaXRpb25zIH0pO1xuICAgIH1cblxuXG4gIH1cblxufVxuIl19