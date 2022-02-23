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
    /**
     * Unselect row or cell which has been selected
     */
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
                template: "<!-- #gridfilter *ngIf=\"extFilter\" -->\r\n<ma-data-grid-filter #gridfilter *ngIf=\"extFilter\" [customCSS]=\"customCSS\"  [(searchValue)]=\"searchValue\" [columns]=\"columns\"  (filterChange)=\"_filterChange($event)\"></ma-data-grid-filter>\r\n<div class=\"datagrid_page\">\r\n    <div class=\"scroller\">\r\n        <table class=\"{{customCSS}}grid_table\">\r\n            <!-- HEADER -->\r\n            <tr class=\"grid_row\">\r\n                <td class=\"{{customCSS}}grid_cell {{customCSS}}grid_cell_title\"  [ngClass]=\"{grid_cell_first: i==0}\" *ngFor=\"let col of columns;index as i; \">\r\n                    <datagrid-cellheader-container [ngSwitch]=\"true\"  >\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.dataType == 'selector'\"><ma-data-grid-cell-selector [prop]=\"col.prop\" [isHeader]=\"true\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"rows_displayed\"></ma-data-grid-cell-selector><span>{{col.title}}</span></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchDefault >{{col.title}}</datagrid-cell-element>\r\n                    </datagrid-cellheader-container>\r\n                    \r\n                    <span *ngIf=\"col.dataType != 'selector' && col.sorted === true\" (click)=\"sortBy(col)\">\r\n                        <span *ngIf=\"sortedField.field != col.prop\" class=\"grid_sort tiny material-icons\">unfold_more</span>\r\n                        <span *ngIf=\"sortedField.field === col.prop && sortedField.reverse\" class=\"grid_sort tiny material-icons\">arrow_drop_down</span>\r\n                        <span *ngIf=\"sortedField.field === col.prop && !sortedField.reverse\" class=\"grid_sort tiny material-icons\">arrow_drop_up</span>\r\n                    </span> \r\n                </td>\r\n            </tr>\r\n            <!-- Head Filter -->\r\n            <tr class=\"{{customCSS}}grid_row\" *ngIf=\"headFilter\">\r\n                <td class=\"{{customCSS}}grid_cell {{customCSS}}grid_cell_title\"  [ngClass]=\"{grid_cell_first: i==0}\" *ngFor=\"let col of columns;index as i; \">\r\n                    <ma-data-grid-head-filter #headerfilter *ngIf=\"(col.dataType && col.dataType != 'selector' &&  col.filter !== false) || (col.filter !== false && col.headFilter != null  && col.headFilter.length > 0)\" [col]=\"col\" (changeHeaderFilter)=\"_changeHeaderFilter($event)\"></ma-data-grid-head-filter>\r\n                </td>\r\n            </tr>\r\n            <!-- DATA -->\r\n            <tr class=\"{{customCSS}}grid_row\" *ngFor=\"let row of rows_displayed; \r\n                    last as isLastRow; \r\n                    even as pair; \r\n                    index as i; \r\n                    first as isFirstRow\"\r\n                (click)=\"SelectRow(i,row)\" [ngClass]=\"{'grid_row_selected': i == row_selected && !cell_selected, 'CSSclassEven': pair,'CSSclassOdd': !pair, 'grid_row_first': isFirstRow, 'grid_row_end': isLastRow}\">\r\n    \r\n                <td class=\"{{customCSS}}grid_cell {{col.cssClass}}\" *ngFor=\"let col of columns; \r\n                    index as ncol; \r\n                    count as maxcol; \r\n                    first as isFirstCol\r\n                    last as isLastCol;\" \r\n                    \r\n                    [ngClass]=\"{'grid_cell_selected': i == row_selected && col.prop == cell_selected, 'grid_cell_end': isLastCol,'grid_cell_first': isFirstCol}\"\r\n                    (click)=\"SelectCell(i,row,col)\">\r\n                    <!--  {{col.prop}} repr\u00E9sente le nom de colonne d'un \u00E9l\u00E9ment contenu dans 'colmuns' -- >\r\n                    <div *ngIf=\"col.isRowNumber === true; then RowNumberBlock else dataBlock\"></div>\r\n                    <ng-template #RowNumberBlock>{{i}}</ng-template>\r\n                    <ng-template #dataBlock> {{u[col.prop] | dataGridPipe :u :c}}</ng-template>\r\n                    -->\r\n                    <datagrid-cell-container [ngSwitch]=\"true\"  >\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.dataType == 'selector'\" ngSwitchBreak><ma-data-grid-cell-selector [prop]=\"col.prop\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"row\"></ma-data-grid-cell-selector></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.useTemplate != null\" ngSwitchBreak><ma-data-grid-template-cell-t1 [template]=\"col.useTemplate\" [prop]=\"col.prop\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"row\"></ma-data-grid-template-cell-t1></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.canEdit === true && col.useTemplate == null\" ngSwitchBreak><ma-data-grid-celledit-item [prop]=\"col.prop\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"row\"></ma-data-grid-celledit-item></datagrid-cell-element>\r\n                        <!-- <datagrid-cell-element *ngSwitchCase=\"col.isRowNumber === true\" ngSwitchBreak>{{i}}</datagrid-cell-element> -->\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.isHTML === true\" ngSwitchBreak>\r\n                            <span [innerHTML]=\"row[col.prop] | maDataGridPipe :row :col\"></span>\r\n                        </datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.useTemplate == null && col.canEdit !== true && (col.dataType == 'boolean' || col.dataType == 'boolean?')\" ngSwitchBreak><ma-data-grid-cell-boolean [col]=\"col\" [data]=\"row\"></ma-data-grid-cell-boolean></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchDefault>{{row[col.prop] | maDataGridPipe :row :col}}</datagrid-cell-element>\r\n                    </datagrid-cell-container>\r\n                </td>\r\n        \r\n            </tr>\r\n        </table>\r\n        \r\n    </div>\r\n    <div class=\"row\" style=\"padding-top: 5px;\" *ngIf=\"nb_record >= 0\">\r\n        <div class=\"col s3 \">\r\n            <div class=\"page_number\">#{{nb_record}} record<span *ngIf=\"nb_record > 1\">s</span></div>\r\n        </div>\r\n        <div class=\"col s8 div_pagination\">\r\n           \r\n            <ul class=\"pagination\">\r\n                <li *ngIf=\"max_page >= 9\" (click)=\"FastDecrementPage()\" [ngClass]=\"{'disabled': current_page == 0,'': current_page != 0}\"><a  class=\"pointer\"><i class=\"material-icons small\">fast_rewind</i></a></li>\r\n                <li *ngIf=\"nb_record > 0\" (click)=\"DecrementPage()\" [ngClass]=\"{'disabled': current_page == 0,'': current_page != 0}\"><a  class=\"pointer\"><i class=\"material-icons small\">chevron_left</i></a></li>\r\n                <li *ngFor=\"let n_page of pages\" (click)=\"_changePage(n_page)\" [ngClass]=\"{'active': current_page == n_page,'': current_page != n_page}\" ><a class=\"pointer\" class=\"a_pagination small \">{{(n_page+1)}}</a></li>\r\n                <li *ngIf=\"nb_record > 0\" (click)=\"IncrementPage()\" [ngClass]=\"{'disabled': current_page == max_page,'': current_page != max_page}\"><a  class=\"pointer\"><i class=\"material-icons small\">chevron_right</i></a></li>\r\n                <li *ngIf=\"max_page >= 9\" (click)=\"FastIncrementPage()\" [ngClass]=\"{'disabled': current_page == max_page,'': current_page != max_page}\"><a class=\"pointer\"><i class=\"material-icons small\">fast_forward</i></a></li>\r\n            </ul>\r\n       \r\n        </div>\r\n    </div>\r\n</div>\r\n    \r\n    ",
                styles: [":host{--color-border:#667;--color-defaut:#667}.datagrid_page .CSSclassOdd{background-color:#ddd}.datagrid_page{height:100%;width:100%}.div_pagination .pointer{cursor:default}.div_pagination .page_number{color:var(--color-defaut);font-size:1rem;padding:0 10px}.datagrid_page .div_pagination{display:-ms-inline-grid;display:inline-grid;justify-content:flex-end}.a_pagination:hover,.div_pagination .a_pagination{color:var(--color-border);display:inline-block;font-size:1rem;line-height:30px;padding:0 10px;text-decoration:none}.datagrid_page .scroller{-ms-grid-row-align:center;align-self:center;background-color:#fefefe;overflow:auto;scrollbar-color:var(--color-border) #fefefe;scrollbar-width:auto;width:100%}.grid_table .grid_row_selected{background-color:#667;color:#ddd}.grid_table .grid_sort{cursor:pointer}.datagrid_page .grid_table{width:100%}.grid_table .grid_cell_title{border-top:1px solid var(--color-border);color:var(--color-defaut);font-weight:700;text-align:center}.grid_table .grid_cell_selected{background-color:#667;color:#ddd}.grid_table .grid_cell_first{border-left:1px solid var(--color-border)}.grid_table .grid_cell_end{border-right:0 solid var(--color-border)}.grid_table .grid_cell{border-right:1px solid var(--color-border)}.grid_table .grid_row_first{border-bottom:1px solid var(--color-border)}.grid_table .grid_row_last{border-bottom:0 solid var(--color-border)}.grid_table .grid_row{border-bottom:1px solid var(--color-border)}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtZGF0YS1ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJEOi9NeUhvbWUvYW5kcm9pZC93b3Jrc3BhY2UvZ2l0L21hLW5nLWRhdGEtZ3JpZC9wcm9qZWN0cy9tYS1kYXRhLWdyaWQvc3JjLyIsInNvdXJjZXMiOlsibGliL21hLWRhdGEtZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFhLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBRWpILE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBb0IsUUFBUSxFQUFFLE1BQU0sbUNBQW1DLENBQUE7QUFFOUUsbUVBQW1FO0FBUW5FLE1BQU0sT0FBTyxtQkFBbUI7SUF1RDlCO1FBckRBOzs7O1NBSUM7UUFDUSxZQUFPLEdBQThCLEVBQUUsQ0FBQztRQUN4QyxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLFNBQUksR0FBVyxDQUFDLENBQUMsQ0FBQztRQUNsQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGNBQVMsR0FBWSxFQUFFLENBQUM7UUFDeEIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUVkLFNBQUksR0FBUSxFQUFFLENBQUM7UUFDZCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQXlCLENBQUM7UUFDbkQsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBeUIsQ0FBQztRQUM1RCxp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QUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7U0FDM0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUE0QixFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQzFFO0lBR0gsQ0FBQzs7O1lBdlZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsOEJBQThCO2dCQUM5Qixxd09BQTRDOzthQUc3Qzs7OztzQkFRRSxLQUFLO29CQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUs7d0JBQ0wsS0FBSztxQkFDTCxLQUFLO21CQUVMLEtBQUs7cUJBQ0wsTUFBTTtxQkFDTixNQUFNOzhCQUNOLE1BQU07MkJBQ04sTUFBTTt5QkFDTixNQUFNO21CQUNOLE1BQU07OEJBQ04sTUFBTTt5QkFDTixNQUFNO3lCQUNOLE1BQU07eUJBRU4sU0FBUyxTQUFDLHFCQUFxQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFDakQsWUFBWSxTQUFDLDJCQUEyQjswQkFvQnhDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVyeUxpc3QsIFZpZXdDaGlsZCwgVmlld0NoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFHcmlkSGVhZEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kYXRhLWdyaWQtaGVhZC1maWx0ZXIvZGF0YS1ncmlkLWhlYWQtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYURhdGFHcmlkRmlsdGVyRXZlbnQsIE1hRGF0YUdyaWRDb2x1bW5PcHRpb25zLCBNYURhdGFHcmlkU2VsZWN0TWV0aG9kLCBNYURhdGFHcmlkU2VsZWN0RXZlbnQsIE1hRGF0YUdyaWRIZWFkRmlsdGVyRXZlbnQsIE1hRGF0YUdyaWRTb3J0ZWRGaWVsZCB9IGZyb20gJy4vaW50ZXJmYWNlcy9tYS1kYXRhLWdyaWQtb3B0aW9ucyc7XG5pbXBvcnQgeyBNYUdyaWRGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL21hLWdyaWQtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJDb25kaXRpb25zLCBNYUZpbHRlciB9IGZyb20gXCJAYW1uMzEvZmlsdGVyLW11bHRpcGxlLWNvbmRpdGlvbnNcIlxuXG4vLyBpbXBvcnQgeyBQaXBlTGVuZ3RoUGlwZSB9IGZyb20gJ3NyYy9hcHAvcGlwZXMvcGlwZS1sZW5ndGgucGlwZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYS1kYXRhLWdyaWQnLFxuICAvL3Byb3ZpZGVyczogW1BpcGVMZW5ndGhQaXBlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL21hLWRhdGEtZ3JpZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hLWRhdGEtZ3JpZC5jb21wb25lbnQuY3NzJ10sXG5cbn0pXG5leHBvcnQgY2xhc3MgTWFEYXRhR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICAvKiAgXCJjb2x1bW5zXCIgZWxlbWVudCBkJ2VudHLDqWVcbiAgICAgXCJjaGFuZ2VcIiBlbGVtZW50IGRlIHNvcnRpciBwZXJtZXR0YW50IGRlIHByZW5kcmUgZW4gY29tcHRlXG4gICAgICAgICAgICAgICAgICAgbCdldmVudCBPbkNoYW5nZXNcbiAgICA8bWEtZGF0YS1ncmlkIFtjb2x1bW5zXT1cImNvbHVtbnNcIiAgW3Jvd3NdPVwicm93c1wiIChjaGFuZ2UpPVwiQ2hhbmdlRGF0YSgkZXZlbnQpXCI+PC9tYS1kYXRhLWdyaWQ+XG4gKi9cbiAgQElucHV0KCkgY29sdW1uczogTWFEYXRhR3JpZENvbHVtbk9wdGlvbnNbXSA9IFtdO1xuICBASW5wdXQoKSBsaW1pdDogbnVtYmVyID0gNztcbiAgQElucHV0KCkgY2FuU2VsZWN0OiBNYURhdGFHcmlkU2VsZWN0TWV0aG9kO1xuICBASW5wdXQoKSBleHRGaWx0ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaGVhZEZpbHRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBwYWdpbmF0aW9uOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHBhZ2U6IG51bWJlciA9IC0xO1xuICBASW5wdXQoKSBjb3VudDogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgY3VzdG9tQ1NTOiAgc3RyaW5nID0gXCJcIjtcbiAgQElucHV0KCkgbXlHcmlkID0gdGhpcztcblxuICBASW5wdXQoKSByb3dzOiBhbnkgPSBbXTtcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxNYURhdGFHcmlkU2VsZWN0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBleHRGaWx0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1hRGF0YUdyaWRGaWx0ZXJFdmVudD4oKTtcbiAgQE91dHB1dCgpIGZpbHRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY2hhbmdlUGFnZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgc29ydCA9IG5ldyBFdmVudEVtaXR0ZXI8TWFEYXRhR3JpZFNvcnRlZEZpZWxkPigpO1xuICBAT3V0cHV0KCkgY2FuU2VsZWN0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxNYURhdGFHcmlkU2VsZWN0TWV0aG9kPigpO1xuICBAT3V0cHV0KCkgcm93c0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcm93c1NlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55W10+KCk7XG5cbiAgQFZpZXdDaGlsZChNYUdyaWRGaWx0ZXJDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIGdyaWRmaWx0ZXI6IE1hR3JpZEZpbHRlckNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZHJlbihEYXRhR3JpZEhlYWRGaWx0ZXJDb21wb25lbnQpIGhlYWRlcmZpbHRlcjogUXVlcnlMaXN0PERhdGFHcmlkSGVhZEZpbHRlckNvbXBvbmVudD47XG5cbiAgZ3JpZF9jZWxsX2ZpcnN0ID0gdGhpcy5jdXN0b21DU1MgKyAnZ3JpZF9jZWxsX2ZpcnN0J1xuICBncmlkX3Jvd19zZWxlY3RlZCA9IHRoaXMuY3VzdG9tQ1NTICsgJ2dyaWRfcm93X3NlbGVjdGVkJztcbiAgY3VycmVudF9wYWdlOiBudW1iZXIgPSAtMTtcbiAgbWF4X3BhZ2U6IG51bWJlciA9IDE7XG4gIG1heF9uYl9wYWdlOiBudW1iZXIgPSA2O1xuICBuYl9wYWdlOiBudW1iZXIgPSAxO1xuICBzdGFydGF0OiBudW1iZXIgPSAwO1xuICBzZWFyY2hWYWx1ZTogc3RyaW5nID0gXCJjXCJcbiAgXG4gIHJvd3NfZGlzcGxheWVkOiBhbnkgPSBbXTtcbiAgcGFnZXMgPSBbXTtcbiAgY29uZGl0aW9uczogRmlsdGVyQ29uZGl0aW9ucyA9IFtdXG4gIG5iX3JlY29yZDogbnVtYmVyID0gMDtcbiAgcm93X3NlbGVjdGVkOiBudW1iZXIgPSAtMTtcbiAgY2VsbF9zZWxlY3RlZDogbnVtYmVyID0gLTE7XG5cbiAgdGVtcDogYW55W107XG5cbiAgQElucHV0KCkgc29ydGVkRmllbGQ6IE1hRGF0YUdyaWRTb3J0ZWRGaWVsZCA9IHtcbiAgICBmaWVsZDogJycsXG4gICAgcmV2ZXJzZTogdHJ1ZVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKC8qcHJpdmF0ZSBwaXBlTGVuZ3RoOiBQaXBlTGVuZ3RoUGlwZSovKSB7IFxuICB9XG5cbiAgLyoqXG4gICAqIFVuc2VsZWN0IHJvdyBvciBjZWxsIHdoaWNoIGhhcyBiZWVuIHNlbGVjdGVkXG4gICAqL1xuICByZXNldFNlbGVjdGlvbigpIHtcbiAgICB0aGlzLmNlbGxfc2VsZWN0ZWQgPSAtMTtcbiAgICB0aGlzLnJvd19zZWxlY3RlZCA9IC0xO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5zZWFyY2hWYWx1ZTogXCIgKyB0aGlzLnNlYXJjaFZhbHVlKVxuICAgIC8vIGNvbnNvbGUubG9nKCduZ09uQ2hhbmdlcyAnLCBjaGFuZ2VzKTtcbiAgICBpZiAoY2hhbmdlcy5wYWdlICYmIGNoYW5nZXMucGFnZS5jdXJyZW50VmFsdWUgPj0gMCkge1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5jYW5TZWxlY3QgJiYgY2hhbmdlcy5jYW5TZWxlY3QuY3VycmVudFZhbHVlKSB7XG4gICAgICAvL3RoaXMucGFnZSA9IGNoYW5nZXMucGFnZS5jdXJyZW50VmFsdWU7XG4gICAgICAvLyBjb25zb2xlLmxvZygnY2FuU2VsZWN0ICAnLCBjaGFuZ2VzLmNhblNlbGVjdC5jdXJyZW50VmFsdWUpO1xuICAgICAgdGhpcy5jYW5TZWxlY3RDaGFuZ2UuZW1pdChjaGFuZ2VzLmNhblNlbGVjdC5wcmV2aW91c1ZhbHVlKVxuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5saW1pdCAmJiBjaGFuZ2VzLmxpbWl0LmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy5saW1pdCA9IGNoYW5nZXMubGltaXQuY3VycmVudFZhbHVlO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5yb3dzICYmIGNoYW5nZXMucm93cy5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMudGVtcCA9IGNoYW5nZXMucm93cy5jdXJyZW50VmFsdWU7XG4gICAgICB0aGlzLl9jaGFuZ2VQYWdlKHRoaXMuY3VycmVudF9wYWdlLCB0aGlzLnRlbXAsIHRydWUpO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhcImEgLSBuZ09uQ2hhbmdlcyBjdXJyZW50X3BhZ2UgPT4gXCIgKyB0aGlzLmN1cnJlbnRfcGFnZSlcbiAgfVxuXG4gIEluY3JlbWVudFBhZ2UoKSB7XG4gICAgdGhpcy5fY2hhbmdlUGFnZSh0aGlzLmN1cnJlbnRfcGFnZSArIDEsIHRoaXMudGVtcClcbiAgfVxuXG4gIERlY3JlbWVudFBhZ2UoKSB7XG4gICAgdGhpcy5fY2hhbmdlUGFnZSh0aGlzLmN1cnJlbnRfcGFnZSAtIDEsIHRoaXMudGVtcClcbiAgfVxuXG4gIEZhc3RJbmNyZW1lbnRQYWdlKCkge1xuICAgIGxldCBwID0gdGhpcy5jdXJyZW50X3BhZ2UgKyA1OyAvL01hdGgucm91bmQodGhpcy5tYXhfcGFnZSAvIDUwKTtcbiAgICB0aGlzLl9jaGFuZ2VQYWdlKHAsIHRoaXMudGVtcClcbiAgfVxuXG4gIGRhdGFDaGFuZ2UgKGV2dCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZGF0YUNoYW5nZVwiLGV2dCk7XG4gICAgdGhpcy5yb3dzQ2hhbmdlLmVtaXQoZXZ0KTtcbiAgfVxuXG4gIF9kYXRhU2VsZWN0b3IgKGV2dCxwcm9wKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJfZGF0YVNlbGVjdG9yXCIsZXZ0LHByb3ApO1xuICAgIGlmICh0eXBlb2YoZXZ0KSA9PSAnb2JqZWN0JyAmJiBldnQubGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMucm93c1NlbGVjdC5lbWl0KFtldnRdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3dzU2VsZWN0LmVtaXQoZXZ0KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIEZhc3REZWNyZW1lbnRQYWdlKCkge1xuICAgIGxldCBwID0gdGhpcy5jdXJyZW50X3BhZ2UgLSA1OyAvL01hdGgucm91bmQodGhpcy5tYXhfcGFnZSAvIDUwKTs7XG4gICAgdGhpcy5fY2hhbmdlUGFnZShwLCB0aGlzLnRlbXApXG4gIH1cblxuICBwcml2YXRlIF9jaGFuZ2VQYWdlKG5fcGFnZTogbnVtYmVyLCByb3dzPzogYW55LCBmb3JjZT86IGJvb2xlYW4pIHtcbiAgICBpZiAoIXJvd3MpXG4gICAgICByb3dzID0gdGhpcy50ZW1wO1xuXG4gICAgLy9cblxuICAgIGlmICh0aGlzLnBhZ2luYXRpb24gPT0gZmFsc2UpIHtcbiAgICAgIGlmIChmb3JjZSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnRlbXAgPSBNYUZpbHRlci5GaWx0ZXJCeUNvbmRpdGlvbnModGhpcy5jb25kaXRpb25zLCByb3dzKTtcbiAgICAgICAgdGhpcy50ZW1wID0gdGhpcy5fc29ydERhdGEodGhpcy50ZW1wKTtcbiAgICAgICAgcm93cyA9IHRoaXMudGVtcDtcbiAgICAgIH1cbiAgICAgIHRoaXMuY291bnQgPSByb3dzLmxlbmd0aDtcbiAgICB9XG4gICAgLy8gQ2FsY3VsIGR1IG1heF9wYWdlXG4gICAgdGhpcy5tYXhfcGFnZSA9IDA7XG4gICAgaWYgKHRoaXMuY291bnQgPj0gMCAmJiB0aGlzLmxpbWl0ID4gMCkge1xuICAgICAgdGhpcy5tYXhfcGFnZSA9IE1hdGguZmxvb3IodGhpcy5jb3VudCAvIHRoaXMubGltaXQpO1xuICAgICAgaWYgKCh0aGlzLmNvdW50ICUgdGhpcy5saW1pdCkgIT0gMCkge1xuICAgICAgICB0aGlzLm1heF9wYWdlICs9IDE7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChuX3BhZ2UgPCAwKSB7XG4gICAgICBuX3BhZ2UgPSAwO1xuICAgIH1cbiAgICBpZiAobl9wYWdlID49IHRoaXMubWF4X3BhZ2UgJiYgdGhpcy5tYXhfcGFnZSA+IDApIHtcbiAgICAgIG5fcGFnZSA9IHRoaXMubWF4X3BhZ2UgLSAxO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhcImNoYW5nZVBhZ2UgXCIgKyBuX3BhZ2UgKyAnIC8gJyArIHRoaXMubWF4X3BhZ2UgKyAnIGMgPT4gJyArIHRoaXMuY3VycmVudF9wYWdlICsgJyBtYXhfcGFnZSAnICsgdGhpcy5tYXhfcGFnZSk7XG5cbiAgICBpZiAodGhpcy5wYWdlID49IDAgfHwgdGhpcy5wYWdpbmF0aW9uKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50X3BhZ2UgIT0gbl9wYWdlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudF9wYWdlID0gbl9wYWdlO1xuICAgICAgICB0aGlzLnNlYXJjaFZhbHVlID0gJyc7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT4gRU1JVCBDSEFOR0UgXCIpXG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZS5lbWl0KG5fcGFnZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yb3dfc2VsZWN0ZWQgPSAtMTtcbiAgICAgIHRoaXMuY3VycmVudF9wYWdlID0gbl9wYWdlO1xuICAgICAgdGhpcy5uYl9yZWNvcmQgPSB0aGlzLmNvdW50O1xuICAgICAgdGhpcy5zdGFydGF0ID0gMDtcbiAgICAgIHRoaXMucm93c19kaXNwbGF5ZWQgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyByb3dzICYmIGkgPCB0aGlzLmxpbWl0ICYmIGkgPCB0aGlzLmNvdW50ICYmIGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMucm93c19kaXNwbGF5ZWQucHVzaChyb3dzW2ldKTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIC8vIFNBTlMgUEFHSU5BVElPTlxuICAgICAgLy8gY29uc29sZS5lcnJvcihcIlNBTlMgUEFHSU5BVElPTlwiKVxuICAgICAgXG4gICAgICBpZiAoIWZvcmNlICYmICh0aGlzLmN1cnJlbnRfcGFnZSA9PSBuX3BhZ2UpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMucm93X3NlbGVjdGVkID0gLTE7XG4gICAgICB0aGlzLmN1cnJlbnRfcGFnZSA9IG5fcGFnZTtcbiAgICAgIHRoaXMubmJfcmVjb3JkID0gMDtcbiAgICAgIHRoaXMuc3RhcnRhdCA9IDA7XG4gICAgICB0aGlzLnJvd3NfZGlzcGxheWVkID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyByb3dzICYmIGkgPCB0aGlzLmxpbWl0ICYmIGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChyb3dzLmxlbmd0aCA+ICh0aGlzLmN1cnJlbnRfcGFnZSAqIHRoaXMubGltaXQpICsgaSkge1xuICAgICAgICAgIHRoaXMucm93c19kaXNwbGF5ZWQucHVzaChyb3dzW3RoaXMuY3VycmVudF9wYWdlICogdGhpcy5saW1pdCArIGldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5uYl9yZWNvcmQgPSByb3dzLmxlbmd0aDtcblxuXG4gICAgfVxuICAgIC8vIENhbGN1bCBkdSBub21icmUgZGUgcGFnZSBlbiBiYXMgZHUgZGF0YWdyaWRcbiAgICB0aGlzLnN0YXJ0YXQgPSB0aGlzLmxpbWl0ICogKHRoaXMuY3VycmVudF9wYWdlICsgMSk7XG4gICAgaWYgKHRoaXMuc3RhcnRhdCA+IHRoaXMuY291bnQpXG4gICAgICB0aGlzLnN0YXJ0YXQgPSB0aGlzLmNvdW50O1xuICAgIHRoaXMucGFnZXMgPSBbXTtcbiAgICBsZXQgc3RhcnRfcGFnZSA9IHRoaXMuY3VycmVudF9wYWdlIC0gTWF0aC5yb3VuZCh0aGlzLm1heF9uYl9wYWdlIC8gMik7XG4gICAgaWYgKHN0YXJ0X3BhZ2UgPCAwKVxuICAgICAgc3RhcnRfcGFnZSA9IDA7XG4gICAgZm9yIChsZXQgcCA9IHN0YXJ0X3BhZ2UsIG5icCA9IDA7IHJvd3MgJiYgcCA8IHRoaXMuY291bnQgLyB0aGlzLmxpbWl0ICYmIG5icCA8IHRoaXMubWF4X25iX3BhZ2U7IG5icCsrLCBwKyspIHtcbiAgICAgIHRoaXMucGFnZXMucHVzaChwKVxuICAgIH1cblxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy90aGlzLnBpcGVMZW5ndGgudHJhbnNmb3JtKFwiYmJiXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc29ydERhdGEocm93cykge1xuICAgIGxldCBzZiA9IHRoaXMuc29ydGVkRmllbGQuZmllbGQ7XG4gICAgLy8gY29uc29sZS5sb2coJ19zb3J0RGF0YScsdGhpcy5zb3J0ZWRGaWVsZClcbiAgICByZXR1cm4gcm93cy5zb3J0KChhLCBiKSA9PiB7XG5cbiAgICAgIGxldCByO1xuXG4gICAgICBpZiAodHlwZW9mIChhW3NmXSkgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiAoYltzZl0pID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgYzM6IHN0cmluZyA9IGFbc2ZdO1xuICAgICAgICB2YXIgYzQgOiBzdHJpbmc9IGJbc2ZdO1xuICAgICAgICBpZiAoYzQgPT0gbnVsbCkge1xuICAgICAgICAgIGM0ID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGMzID09IG51bGwpIHtcbiAgICAgICAgICBjMyA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHIgPSBjMy5sb2NhbGVDb21wYXJlKGM0LCAnZW4nLCB7IHNlbnNpdGl2aXR5OiAnYmFzZScgfSk7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0eXBlb2YgKGFbc2ZdKSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIChiW3NmXSkgPT09ICdudW1iZXInICkge1xuICAgICAgICAgIHIgPSBhW3NmXSAtIGJbc2ZdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiAoYVtzZl0pID09PSAnYm9vbGVhbicgfHwgdHlwZW9mIChiW3NmXSkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgdmFyIGMxID0gMDtcbiAgICAgICAgICAgIGlmIChhW3NmXSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgYzEgPSAyO1xuICAgICAgICAgICAgaWYgKGFbc2ZdID09PSBmYWxzZSlcbiAgICAgICAgICAgICAgYzEgPSAxO1xuICAgICAgICAgICAgdmFyIGMyID0gMDtcbiAgICAgICAgICAgIGlmIChiW3NmXSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgYzIgPSAyO1xuICAgICAgICAgICAgaWYgKGJbc2ZdID09PSBmYWxzZSlcbiAgICAgICAgICAgICAgYzIgPSAxO1xuICAgICAgICAgICAgciA9IGMxIC0gYzI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHIgPSBhW3NmXSA8IGJbc2ZdXG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgICAgLy9jb25zb2xlLmxvZygnQ29tcGFyZSAnICsgYVtzZl0gKyAnIDw9PiAnICsgYltzZl0gKyAnICA9ICcgKyByICsgJyB0aGlzLnNvcnRlZEZpZWxkLnJldmVyc2UnICsgdGhpcy5zb3J0ZWRGaWVsZC5yZXZlcnNlKVxuICAgICAgaWYgKHRoaXMuc29ydGVkRmllbGQucmV2ZXJzZSkge1xuICAgICAgICByZXR1cm4gciAqIC0xXG4gICAgICB9XG4gICAgICByZXR1cm4gclxuICAgIH0pO1xuXG4gIH1cblxuICBzb3J0QnkoY29sKSB7XG4gICAgLy8gY29uc29sZS5sb2coY29sKTtcbiAgICBpZiAodGhpcy5zb3J0ZWRGaWVsZC5maWVsZCA9PSBjb2wucHJvcCkge1xuICAgICAgdGhpcy5zb3J0ZWRGaWVsZC5yZXZlcnNlID0gIXRoaXMuc29ydGVkRmllbGQucmV2ZXJzZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNvcnRlZEZpZWxkLnJldmVyc2UgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5zb3J0ZWRGaWVsZC5maWVsZCA9IGNvbC5wcm9wO1xuICAgIGlmICh0aGlzLnBhZ2luYXRpb24pIHtcbiAgICAgIHRoaXMuc29ydC5lbWl0KHRoaXMuc29ydGVkRmllbGQpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMuX2NoYW5nZVBhZ2UodGhpcy5jdXJyZW50X3BhZ2UsIHRoaXMucm93cywgdHJ1ZSk7XG4gICAgfVxuXG4gIH1cblxuICBTZWxlY3RSb3coaW5kZXgsIHJvdykge1xuICAgIGlmICh0aGlzLmNhblNlbGVjdCA9PT0gXCJyb3dcIikge1xuICAgICAgdGhpcy5yb3dfc2VsZWN0ZWQgPSBpbmRleDtcbiAgICAgIHRoaXMuY2VsbF9zZWxlY3RlZCA9IG51bGw7XG4gICAgICBsZXQgdHJ1ZUluZGV4ID0gdGhpcy5jdXJyZW50X3BhZ2UgKiB0aGlzLmxpbWl0ICsgaW5kZXg7XG4gICAgICAvL2xldCBkYXRhID0gdGhpcy5yb3dzW3RydWVJbmRleF07XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIlNlbGVjdFJvdyB0cnVlSW5kZXhcIiwgdHJ1ZUluZGV4KTtcbiAgICAgIHRoaXMuc2VsZWN0LmVtaXQoPE1hRGF0YUdyaWRTZWxlY3RFdmVudD57IGluZGV4OiB0cnVlSW5kZXgsIHJvdzogcm93IH0pO1xuICAgIH1cbiAgfVxuXG4gIFNlbGVjdENlbGwoaW5kZXgsIHJvdywgY29sKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJTZWxlY3RDZWxsIFNlbGVjdFwiLCBpbmRleCwgcm93LCBjb2wpO1xuICAgIGlmICh0aGlzLmNhblNlbGVjdCA9PT0gXCJjZWxsXCIpIHtcbiAgICAgIHRoaXMucm93X3NlbGVjdGVkID0gaW5kZXg7XG4gICAgICB0aGlzLmNlbGxfc2VsZWN0ZWQgPSBjb2wucHJvcDtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiU2VsZWN0Q2VsbCBTZWxlY3RcIiwgaW5kZXgsIHJvdywgY29sKTtcbiAgICAgIGxldCB0cnVlSW5kZXggPSB0aGlzLmN1cnJlbnRfcGFnZSAqIHRoaXMubGltaXQgKyBpbmRleDtcbiAgICAgIC8vY29uc29sZS5sb2coXCJEYXRhIEdyaWQgdHJ1ZUluZGV4XCIsIHRydWVJbmRleCk7XG4gICAgICB0aGlzLnNlbGVjdC5lbWl0KDxNYURhdGFHcmlkU2VsZWN0RXZlbnQ+eyBpbmRleDogdHJ1ZUluZGV4LCByb3c6IHJvdywgcHJvcDogY29sLnByb3AsIHZhbHVlOiByb3dbY29sLnByb3BdLCB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJDaGFuZ2UoZTogTWFEYXRhR3JpZEZpbHRlckV2ZW50KSB7XG4gICAgdGhpcy5leHRGaWx0ZXJDaGFuZ2UuZW1pdChlKTtcbiAgfVxuXG4gIHRpbWVvdXQgPSBudWxsO1xuICBwcml2YXRlIF9jaGFuZ2VIZWFkZXJGaWx0ZXIoZTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ19jaGFuZ2VIZWFkZXJGaWx0ZXInKVxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fZGVsYXlDaGFuZ2VIZWFkZXJGaWx0ZXIoKTtcbiAgICB9LCA1MDApO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVsYXlDaGFuZ2VIZWFkZXJGaWx0ZXIoKSB7XG4gICAgbGV0IGNvbmRpdGlvbnMgPSBbXTtcbiAgICAvLyBjb25zb2xlLmxvZygnX2RlbGF5Q2hhbmdlSGVhZGVyRmlsdGVyJylcbiAgICB0aGlzLmhlYWRlcmZpbHRlci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAvL2l0ZW0uZmlsdGVyX3ZhbHVlO1xuICAgICAgbGV0IGNvbmRpdGlvbiA9IGl0ZW0uZ2V0RmlsdGVyKCk7XG4gICAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICAgIGlmIChjb25kaXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25kaXRpb25zLnB1c2goJ2FuZCcpO1xuICAgICAgICB9XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJHRVQgQ09ORElUSU9OXCIsY29uZGl0aW9uKVxuICAgICAgICBjb25kaXRpb25zLnB1c2goY29uZGl0aW9uKTtcbiAgICAgIH1cbiAgICAgIC8vY29uc29sZS5sb2coaXRlbS5jb2wucHJvcCArICcgPT4gJytpdGVtLmZpbHRlcl92YWx1ZSk7XG4gICAgfSlcbiAgICAvL2NvbnNvbGUubG9nKFwiQ09ORElUSU9OU1wiLCBjb25kaXRpb25zKTtcbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uID09IGZhbHNlKSB7XG4gICAgICB0aGlzLmNvbmRpdGlvbnMgPSBjb25kaXRpb25zO1xuICAgICAgdGhpcy5fY2hhbmdlUGFnZSgwLCB0aGlzLnJvd3MsIHRydWUpO1xuICAgICAgdGhpcy5maWx0ZXJDaGFuZ2UuZW1pdCg8TWFEYXRhR3JpZEhlYWRGaWx0ZXJFdmVudD57IHdoZXJlOiBjb25kaXRpb25zLCBkYXRhOiB0aGlzLnRlbXAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlsdGVyQ2hhbmdlLmVtaXQoPE1hRGF0YUdyaWRIZWFkRmlsdGVyRXZlbnQ+eyB3aGVyZTogY29uZGl0aW9ucyB9KTtcbiAgICB9XG5cblxuICB9XG5cbn1cbiJdfQ==