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
                template: "<!-- #gridfilter *ngIf=\"extFilter\" -->\r\n<ma-data-grid-filter #gridfilter *ngIf=\"extFilter\" [customCSS]=\"customCSS\"  [(searchValue)]=\"searchValue\" [columns]=\"columns\"  (filterChange)=\"_filterChange($event)\"></ma-data-grid-filter>\r\n<div class=\"datagrid_page\">\r\n    <div class=\"scroller\">\r\n        <table class=\"{{customCSS}}grid_table\">\r\n            <!-- HEADER -->\r\n            <tr class=\"grid_row\">\r\n                <td class=\"{{customCSS}}grid_cell {{customCSS}}grid_cell_title\"  [ngClass]=\"{grid_cell_first: i==0}\" *ngFor=\"let col of columns;index as i; \">\r\n                    <datagrid-cellheader-container [ngSwitch]=\"true\"  >\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.dataType == 'selector'\"><ma-data-grid-cell-selector [prop]=\"col.prop\" [isHeader]=\"true\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"rows_displayed\"></ma-data-grid-cell-selector><span>{{col.title}}</span></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchDefault >{{col.title}}</datagrid-cell-element>\r\n                    </datagrid-cellheader-container>\r\n                    \r\n                    <span *ngIf=\"col.dataType != 'selector' && col.isRowNumber !== true && col.sorted === true\" (click)=\"sortBy(col)\">\r\n                        <span *ngIf=\"sortedField.field != col.prop\" class=\"grid_sort tiny material-icons\">swap_vert</span>\r\n                        <span *ngIf=\"sortedField.field === col.prop && sortedField.reverse\" class=\"grid_sort tiny material-icons\">arrow_drop_down</span>\r\n                        <span *ngIf=\"sortedField.field === col.prop && !sortedField.reverse\" class=\"grid_sort tiny material-icons\">arrow_drop_up</span>\r\n                    </span> \r\n                </td>\r\n            </tr>\r\n            <!-- Head Filter -->\r\n            <tr class=\"{{customCSS}}grid_row\" *ngIf=\"headFilter\">\r\n                <td class=\"{{customCSS}}grid_cell {{customCSS}}grid_cell_title\"  [ngClass]=\"{grid_cell_first: i==0}\" *ngFor=\"let col of columns;index as i; \">\r\n                    <ma-data-grid-head-filter #headerfilter *ngIf=\"(col.dataType && col.dataType != 'selector' ) || col.headFilter\" [col]=\"col\" (changeHeaderFilter)=\"_changeHeaderFilter($event)\"></ma-data-grid-head-filter>\r\n                </td>\r\n            </tr>\r\n            <!-- DATA -->\r\n            <tr class=\"{{customCSS}}grid_row\" *ngFor=\"let row of rows_displayed; \r\n                    last as isLastRow; \r\n                    even as pair; \r\n                    index as i; \r\n                    first as isFirstRow\"\r\n                (click)=\"SelectRow(i,row)\" [ngClass]=\"{'grid_row_selected': i == row_selected && !cell_selected, 'CSSclassEven': pair,'CSSclassOdd': !pair, 'grid_row_first': isFirstRow, 'grid_row_end': isLastRow}\">\r\n    \r\n                <td class=\"{{customCSS}}grid_cell {{col.cssClass}}\" *ngFor=\"let col of columns; \r\n                    index as ncol; \r\n                    count as maxcol; \r\n                    first as isFirstCol\r\n                    last as isLastCol;\" \r\n                    \r\n                    [ngClass]=\"{'grid_cell_selected': i == row_selected && col.prop == cell_selected, 'grid_cell_end': isLastCol,'grid_cell_first': isFirstCol}\"\r\n                    (click)=\"SelectCell(i,row,col)\">\r\n                    <!--  {{col.prop}} repr\u00E9sente le nom de colonne d'un \u00E9l\u00E9ment contenu dans 'colmuns' -- >\r\n                    <div *ngIf=\"col.isRowNumber === true; then RowNumberBlock else dataBlock\"></div>\r\n                    <ng-template #RowNumberBlock>{{i}}</ng-template>\r\n                    <ng-template #dataBlock> {{u[col.prop] | dataGridPipe :u :c}}</ng-template>\r\n                    -->\r\n                    <datagrid-cell-container [ngSwitch]=\"true\"  >\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.dataType == 'selector'\" ngSwitchBreak><ma-data-grid-cell-selector [prop]=\"col.prop\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"row\"></ma-data-grid-cell-selector></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.useTemplate != null\" ngSwitchBreak><ma-data-grid-template-cell-t1 [template]=\"col.useTemplate\" [prop]=\"col.prop\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"row\"></ma-data-grid-template-cell-t1></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.canEdit === true\" ngSwitchBreak><ma-data-grid-celledit-item [prop]=\"col.prop\" [col]=\"col\" [myGrid]=\"myGrid\" [data]=\"row\"></ma-data-grid-celledit-item></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.isRowNumber === true\" ngSwitchBreak>{{i}}</datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.isRowHTML === true\" ngSwitchBreak><span [innerHTML]=\"row[col.prop]\"></span></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchCase=\"col.useTemplate == null && col.canEdit !== true && (col.dataType == 'boolean' || col.dataType == 'bool')\" ngSwitchBreak><ma-data-grid-cell-boolean [col]=\"col\" [data]=\"row\"></ma-data-grid-cell-boolean></datagrid-cell-element>\r\n                        <datagrid-cell-element *ngSwitchDefault>{{row[col.prop] | maDataGridPipe :row :col}}</datagrid-cell-element>\r\n                    </datagrid-cell-container>\r\n                </td>\r\n        \r\n            </tr>\r\n        </table>\r\n        \r\n    </div>\r\n    <div class=\"row\" style=\"padding-top: 5px;\">\r\n        <div class=\"col s3 \">\r\n            <div class=\"page_number\">#{{nb_record}} record<span *ngIf=\"nb_record > 1\">s</span></div>\r\n        </div>\r\n        <div class=\"col s8 div_pagination\">\r\n           \r\n            <ul class=\"pagination\">\r\n                <li *ngIf=\"max_page >= 9\" (click)=\"FastDecrementPage()\" [ngClass]=\"{'disabled': current_page == 0,'': current_page != 0}\"><a  class=\"pointer\"><i class=\"material-icons small\">fast_rewind</i></a></li>\r\n                <li *ngIf=\"nb_record > 0\" (click)=\"DecrementPage()\" [ngClass]=\"{'disabled': current_page == 0,'': current_page != 0}\"><a  class=\"pointer\"><i class=\"material-icons small\">chevron_left</i></a></li>\r\n                <li *ngFor=\"let n_page of pages\" (click)=\"_changePage(n_page)\" [ngClass]=\"{'active': current_page == n_page,'': current_page != n_page}\" ><a class=\"pointer\" class=\"a_pagination small \">{{(n_page+1)}}</a></li>\r\n                <li *ngIf=\"nb_record > 0\" (click)=\"IncrementPage()\" [ngClass]=\"{'disabled': current_page == max_page,'': current_page != max_page}\"><a  class=\"pointer\"><i class=\"material-icons small\">chevron_right</i></a></li>\r\n                <li *ngIf=\"max_page >= 9\" (click)=\"FastIncrementPage()\" [ngClass]=\"{'disabled': current_page == max_page,'': current_page != max_page}\"><a class=\"pointer\"><i class=\"material-icons small\">fast_forward</i></a></li>\r\n            </ul>\r\n       \r\n        </div>\r\n    </div>\r\n</div>\r\n    \r\n    ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtZGF0YS1ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJEOi9NeUhvbWUvYW5kcm9pZC93b3Jrc3BhY2UvZ2l0L21hLW5nLWRhdGFncmlkL3Byb2plY3RzL21hLWRhdGEtZ3JpZC9zcmMvIiwic291cmNlcyI6WyJsaWIvbWEtZGF0YS1ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWEsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFFakgsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFvQixRQUFRLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQTtBQUM5RSxtRUFBbUU7QUFRbkUsTUFBTSxPQUFPLG1CQUFtQjtJQXVEOUI7UUFyREE7Ozs7U0FJQztRQUNRLFlBQU8sR0FBOEIsRUFBRSxDQUFDO1FBQ3hDLFVBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsU0FBSSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsY0FBUyxHQUFZLEVBQUUsQ0FBQztRQUN4QixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBRWQsU0FBSSxHQUFRLEVBQUUsQ0FBQztRQUNkLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBeUIsQ0FBQztRQUNuRCxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUF5QixDQUFDO1FBQzVELGlC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QUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUE0QixFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQzFFO0lBR0gsQ0FBQzs7O1lBL1VGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsOEJBQThCO2dCQUM5Qixrak9BQTRDOzthQUc3Qzs7OztzQkFRRSxLQUFLO29CQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUs7d0JBQ0wsS0FBSztxQkFDTCxLQUFLO21CQUVMLEtBQUs7cUJBQ0wsTUFBTTtxQkFDTixNQUFNOzhCQUNOLE1BQU07MkJBQ04sTUFBTTt5QkFDTixNQUFNO21CQUNOLE1BQU07OEJBQ04sTUFBTTt5QkFDTixNQUFNO3lCQUNOLE1BQU07eUJBRU4sU0FBUyxTQUFDLHFCQUFxQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFDakQsWUFBWSxTQUFDLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1ZXJ5TGlzdCwgVmlld0NoaWxkLCBWaWV3Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YUdyaWRIZWFkRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RhdGEtZ3JpZC1oZWFkLWZpbHRlci9kYXRhLWdyaWQtaGVhZC1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1hRGF0YUdyaWRGaWx0ZXJFdmVudCwgTWFEYXRhR3JpZENvbHVtbk9wdGlvbnMsIE1hRGF0YUdyaWRTZWxlY3RNZXRob2QsIE1hRGF0YUdyaWRTZWxlY3RFdmVudCwgTWFEYXRhR3JpZEhlYWRGaWx0ZXJFdmVudCB9IGZyb20gJy4vaW50ZXJmYWNlcy9tYS1kYXRhLWdyaWQtb3B0aW9ucyc7XG5pbXBvcnQgeyBNYUdyaWRGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL21hLWdyaWQtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJDb25kaXRpb25zLCBNYUZpbHRlciB9IGZyb20gXCJAYW1uMzEvZmlsdGVyLW11bHRpcGxlLWNvbmRpdGlvbnNcIlxuLy8gaW1wb3J0IHsgUGlwZUxlbmd0aFBpcGUgfSBmcm9tICdzcmMvYXBwL3BpcGVzL3BpcGUtbGVuZ3RoLnBpcGUnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWEtZGF0YS1ncmlkJyxcbiAgLy9wcm92aWRlcnM6IFtQaXBlTGVuZ3RoUGlwZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9tYS1kYXRhLWdyaWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYS1kYXRhLWdyaWQuY29tcG9uZW50LmNzcyddLFxuXG59KVxuZXhwb3J0IGNsYXNzIE1hRGF0YUdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgLyogIFwiY29sdW1uc1wiIGVsZW1lbnQgZCdlbnRyw6llXG4gICAgIFwiY2hhbmdlXCIgZWxlbWVudCBkZSBzb3J0aXIgcGVybWV0dGFudCBkZSBwcmVuZHJlIGVuIGNvbXB0ZVxuICAgICAgICAgICAgICAgICAgIGwnZXZlbnQgT25DaGFuZ2VzXG4gICAgPG1hLWRhdGEtZ3JpZCBbY29sdW1uc109XCJjb2x1bW5zXCIgIFtyb3dzXT1cInJvd3NcIiAoY2hhbmdlKT1cIkNoYW5nZURhdGEoJGV2ZW50KVwiPjwvbWEtZGF0YS1ncmlkPlxuICovXG4gIEBJbnB1dCgpIGNvbHVtbnM6IE1hRGF0YUdyaWRDb2x1bW5PcHRpb25zW10gPSBbXTtcbiAgQElucHV0KCkgbGltaXQ6IG51bWJlciA9IDc7XG4gIEBJbnB1dCgpIGNhblNlbGVjdDogTWFEYXRhR3JpZFNlbGVjdE1ldGhvZDtcbiAgQElucHV0KCkgZXh0RmlsdGVyOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGhlYWRGaWx0ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgcGFnaW5hdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBwYWdlOiBudW1iZXIgPSAtMTtcbiAgQElucHV0KCkgY291bnQ6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIGN1c3RvbUNTUzogIHN0cmluZyA9IFwiXCI7XG4gIEBJbnB1dCgpIG15R3JpZCA9IHRoaXM7XG5cbiAgQElucHV0KCkgcm93czogYW55ID0gW107XG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8TWFEYXRhR3JpZFNlbGVjdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgZXh0RmlsdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxNYURhdGFHcmlkRmlsdGVyRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBmaWx0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNoYW5nZVBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNhblNlbGVjdENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TWFEYXRhR3JpZFNlbGVjdE1ldGhvZD4oKTtcbiAgQE91dHB1dCgpIHJvd3NDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHJvd3NTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAVmlld0NoaWxkKE1hR3JpZEZpbHRlckNvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSkgZ3JpZGZpbHRlcjogTWFHcmlkRmlsdGVyQ29tcG9uZW50O1xuICBAVmlld0NoaWxkcmVuKERhdGFHcmlkSGVhZEZpbHRlckNvbXBvbmVudCkgaGVhZGVyZmlsdGVyOiBRdWVyeUxpc3Q8RGF0YUdyaWRIZWFkRmlsdGVyQ29tcG9uZW50PjtcblxuICBncmlkX2NlbGxfZmlyc3QgPSB0aGlzLmN1c3RvbUNTUyArICdncmlkX2NlbGxfZmlyc3QnXG4gIGdyaWRfcm93X3NlbGVjdGVkID0gdGhpcy5jdXN0b21DU1MgKyAnZ3JpZF9yb3dfc2VsZWN0ZWQnO1xuICBjdXJyZW50X3BhZ2U6IG51bWJlciA9IC0xO1xuICBtYXhfcGFnZTogbnVtYmVyID0gMTtcbiAgbWF4X25iX3BhZ2U6IG51bWJlciA9IDY7XG4gIG5iX3BhZ2U6IG51bWJlciA9IDE7XG4gIHN0YXJ0YXQ6IG51bWJlciA9IDA7XG4gIHNlYXJjaFZhbHVlOiBzdHJpbmcgPSBcImNcIlxuICBcbiAgcm93c19kaXNwbGF5ZWQ6IGFueSA9IFtdO1xuICBwYWdlcyA9IFtdO1xuICBjb25kaXRpb25zOiBGaWx0ZXJDb25kaXRpb25zID0gW11cbiAgbmJfcmVjb3JkOiBudW1iZXIgPSAwO1xuICByb3dfc2VsZWN0ZWQ6IG51bWJlciA9IC0xO1xuICBjZWxsX3NlbGVjdGVkOiBudW1iZXIgPSAtMTtcblxuICB0ZW1wOiBhbnlbXTtcblxuICBzb3J0ZWRGaWVsZCA9IHtcbiAgICBmaWVsZDogJycsXG4gICAgcmV2ZXJzZTogdHJ1ZVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKC8qcHJpdmF0ZSBwaXBlTGVuZ3RoOiBQaXBlTGVuZ3RoUGlwZSovKSB7IFxuICAgIC8vY29uc29sZS5sb2coJ1lPJylcbiAgfVxuXG4gIHJlc2V0U2VsZWN0aW9uKCkge1xuICAgIHRoaXMuY2VsbF9zZWxlY3RlZCA9IC0xO1xuICAgIHRoaXMucm93X3NlbGVjdGVkID0gLTE7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLnNlYXJjaFZhbHVlOiBcIiArIHRoaXMuc2VhcmNoVmFsdWUpXG4gICAgY29uc29sZS5sb2coJ25nT25DaGFuZ2VzICcsIGNoYW5nZXMpO1xuICAgIGlmIChjaGFuZ2VzLnBhZ2UgJiYgY2hhbmdlcy5wYWdlLmN1cnJlbnRWYWx1ZSA+PSAwKSB7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmNhblNlbGVjdCAmJiBjaGFuZ2VzLmNhblNlbGVjdC5jdXJyZW50VmFsdWUpIHtcbiAgICAgIC8vdGhpcy5wYWdlID0gY2hhbmdlcy5wYWdlLmN1cnJlbnRWYWx1ZTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjYW5TZWxlY3QgICcsIGNoYW5nZXMuY2FuU2VsZWN0LmN1cnJlbnRWYWx1ZSk7XG4gICAgICB0aGlzLmNhblNlbGVjdENoYW5nZS5lbWl0KGNoYW5nZXMuY2FuU2VsZWN0LnByZXZpb3VzVmFsdWUpXG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmxpbWl0ICYmIGNoYW5nZXMubGltaXQuY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLmxpbWl0ID0gY2hhbmdlcy5saW1pdC5jdXJyZW50VmFsdWU7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnJvd3MgJiYgY2hhbmdlcy5yb3dzLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy50ZW1wID0gY2hhbmdlcy5yb3dzLmN1cnJlbnRWYWx1ZTtcbiAgICAgIHRoaXMuX2NoYW5nZVBhZ2UodGhpcy5jdXJyZW50X3BhZ2UsIHRoaXMudGVtcCwgdHJ1ZSk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKFwiYSAtIG5nT25DaGFuZ2VzIGN1cnJlbnRfcGFnZSA9PiBcIiArIHRoaXMuY3VycmVudF9wYWdlKVxuICB9XG5cbiAgSW5jcmVtZW50UGFnZSgpIHtcbiAgICB0aGlzLl9jaGFuZ2VQYWdlKHRoaXMuY3VycmVudF9wYWdlICsgMSwgdGhpcy50ZW1wKVxuICB9XG5cbiAgRGVjcmVtZW50UGFnZSgpIHtcbiAgICB0aGlzLl9jaGFuZ2VQYWdlKHRoaXMuY3VycmVudF9wYWdlIC0gMSwgdGhpcy50ZW1wKVxuICB9XG5cbiAgRmFzdEluY3JlbWVudFBhZ2UoKSB7XG4gICAgbGV0IHAgPSB0aGlzLmN1cnJlbnRfcGFnZSArIDU7IC8vTWF0aC5yb3VuZCh0aGlzLm1heF9wYWdlIC8gNTApO1xuICAgIHRoaXMuX2NoYW5nZVBhZ2UocCwgdGhpcy50ZW1wKVxuICB9XG5cbiAgX2RhdGFDaGFuZ2UgKGV2dCkge1xuICAgIGNvbnNvbGUubG9nKFwiX2RhdGFDaGFuZ2VcIixldnQpO1xuICAgIHRoaXMucm93c0NoYW5nZS5lbWl0KGV2dCk7XG4gIH1cblxuICBfZGF0YVNlbGVjdG9yIChldnQscHJvcCkge1xuICAgIGNvbnNvbGUubG9nKFwiX2RhdGFTZWxlY3RvclwiLGV2dCxwcm9wKTtcblxuICAgIHRoaXMucm93c1NlbGVjdC5lbWl0KGV2dCk7XG4gIH1cblxuICBGYXN0RGVjcmVtZW50UGFnZSgpIHtcbiAgICBsZXQgcCA9IHRoaXMuY3VycmVudF9wYWdlIC0gNTsgLy9NYXRoLnJvdW5kKHRoaXMubWF4X3BhZ2UgLyA1MCk7O1xuICAgIHRoaXMuX2NoYW5nZVBhZ2UocCwgdGhpcy50ZW1wKVxuICB9XG5cbiAgcHJpdmF0ZSBfY2hhbmdlUGFnZShuX3BhZ2U6IG51bWJlciwgcm93cz86IGFueSwgZm9yY2U/OiBib29sZWFuKSB7XG4gICAgaWYgKCFyb3dzKVxuICAgICAgcm93cyA9IHRoaXMudGVtcDtcblxuICAgIC8vXG5cbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uID09IGZhbHNlKSB7XG4gICAgICBpZiAoZm9yY2UgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy50ZW1wID0gTWFGaWx0ZXIuRmlsdGVyQnlDb25kaXRpb25zKHRoaXMuY29uZGl0aW9ucywgcm93cyk7XG4gICAgICAgIHRoaXMudGVtcCA9IHRoaXMuX3NvcnREYXRhKHRoaXMudGVtcCk7XG4gICAgICAgIHJvd3MgPSB0aGlzLnRlbXA7XG4gICAgICB9XG4gICAgICB0aGlzLmNvdW50ID0gcm93cy5sZW5ndGg7XG4gICAgfVxuICAgIC8vIENhbGN1bCBkdSBtYXhfcGFnZVxuICAgIHRoaXMubWF4X3BhZ2UgPSAwO1xuICAgIGlmICh0aGlzLmNvdW50ID49IDAgJiYgdGhpcy5saW1pdCA+IDApIHtcbiAgICAgIHRoaXMubWF4X3BhZ2UgPSBNYXRoLmZsb29yKHRoaXMuY291bnQgLyB0aGlzLmxpbWl0KTtcbiAgICAgIGlmICgodGhpcy5jb3VudCAlIHRoaXMubGltaXQpICE9IDApIHtcbiAgICAgICAgdGhpcy5tYXhfcGFnZSArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobl9wYWdlIDwgMCkge1xuICAgICAgbl9wYWdlID0gMDtcbiAgICB9XG4gICAgaWYgKG5fcGFnZSA+PSB0aGlzLm1heF9wYWdlICYmIHRoaXMubWF4X3BhZ2UgPiAwKSB7XG4gICAgICBuX3BhZ2UgPSB0aGlzLm1heF9wYWdlIC0gMTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coXCJjaGFuZ2VQYWdlIFwiICsgbl9wYWdlICsgJyAvICcgKyB0aGlzLm1heF9wYWdlICsgJyBjID0+ICcgKyB0aGlzLmN1cnJlbnRfcGFnZSArICcgbWF4X3BhZ2UgJyArIHRoaXMubWF4X3BhZ2UpO1xuXG4gICAgaWYgKHRoaXMucGFnZSA+PSAwIHx8IHRoaXMucGFnaW5hdGlvbikge1xuICAgICAgaWYgKHRoaXMuY3VycmVudF9wYWdlICE9IG5fcGFnZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRfcGFnZSA9IG5fcGFnZTtcbiAgICAgICAgdGhpcy5zZWFyY2hWYWx1ZSA9ICcnO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT0+IEVNSVQgQ0hBTkdFIFwiKVxuICAgICAgICB0aGlzLmNoYW5nZVBhZ2UuZW1pdChuX3BhZ2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMucm93X3NlbGVjdGVkID0gLTE7XG4gICAgICB0aGlzLmN1cnJlbnRfcGFnZSA9IG5fcGFnZTtcbiAgICAgIHRoaXMubmJfcmVjb3JkID0gdGhpcy5jb3VudDtcbiAgICAgIHRoaXMuc3RhcnRhdCA9IDA7XG4gICAgICB0aGlzLnJvd3NfZGlzcGxheWVkID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgcm93cyAmJiBpIDwgdGhpcy5saW1pdCAmJiBpIDwgdGhpcy5jb3VudCAmJiBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnJvd3NfZGlzcGxheWVkLnB1c2gocm93c1tpXSk7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAvLyBTQU5TIFBBR0lOQVRJT05cbiAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJTQU5TIFBBR0lOQVRJT05cIilcbiAgICAgIFxuICAgICAgaWYgKCFmb3JjZSAmJiAodGhpcy5jdXJyZW50X3BhZ2UgPT0gbl9wYWdlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnJvd19zZWxlY3RlZCA9IC0xO1xuICAgICAgdGhpcy5jdXJyZW50X3BhZ2UgPSBuX3BhZ2U7XG4gICAgICB0aGlzLm5iX3JlY29yZCA9IDA7XG4gICAgICB0aGlzLnN0YXJ0YXQgPSAwO1xuICAgICAgdGhpcy5yb3dzX2Rpc3BsYXllZCA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgcm93cyAmJiBpIDwgdGhpcy5saW1pdCAmJiBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocm93cy5sZW5ndGggPiAodGhpcy5jdXJyZW50X3BhZ2UgKiB0aGlzLmxpbWl0KSArIGkpIHtcbiAgICAgICAgICB0aGlzLnJvd3NfZGlzcGxheWVkLnB1c2gocm93c1t0aGlzLmN1cnJlbnRfcGFnZSAqIHRoaXMubGltaXQgKyBpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMubmJfcmVjb3JkID0gcm93cy5sZW5ndGg7XG5cblxuICAgIH1cbiAgICAvLyBDYWxjdWwgZHUgbm9tYnJlIGRlIHBhZ2UgZW4gYmFzIGR1IGRhdGFncmlkXG4gICAgdGhpcy5zdGFydGF0ID0gdGhpcy5saW1pdCAqICh0aGlzLmN1cnJlbnRfcGFnZSArIDEpO1xuICAgIGlmICh0aGlzLnN0YXJ0YXQgPiB0aGlzLmNvdW50KVxuICAgICAgdGhpcy5zdGFydGF0ID0gdGhpcy5jb3VudDtcbiAgICB0aGlzLnBhZ2VzID0gW107XG4gICAgbGV0IHN0YXJ0X3BhZ2UgPSB0aGlzLmN1cnJlbnRfcGFnZSAtIE1hdGgucm91bmQodGhpcy5tYXhfbmJfcGFnZSAvIDIpO1xuICAgIGlmIChzdGFydF9wYWdlIDwgMClcbiAgICAgIHN0YXJ0X3BhZ2UgPSAwO1xuICAgIGZvciAobGV0IHAgPSBzdGFydF9wYWdlLCBuYnAgPSAwOyByb3dzICYmIHAgPCB0aGlzLmNvdW50IC8gdGhpcy5saW1pdCAmJiBuYnAgPCB0aGlzLm1heF9uYl9wYWdlOyBuYnArKywgcCsrKSB7XG4gICAgICB0aGlzLnBhZ2VzLnB1c2gocClcbiAgICB9XG5cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vdGhpcy5waXBlTGVuZ3RoLnRyYW5zZm9ybShcImJiYlwiKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NvcnREYXRhKHJvd3MpIHtcbiAgICBsZXQgc2YgPSB0aGlzLnNvcnRlZEZpZWxkLmZpZWxkO1xuICAgIC8vY29uc29sZS5sb2coJ19zb3J0RGF0YScsdGhpcy5zb3J0ZWRGaWVsZClcbiAgICByZXR1cm4gcm93cy5zb3J0KChhLCBiKSA9PiB7XG5cbiAgICAgIGxldCByO1xuXG4gICAgICBpZiAodHlwZW9mIChhW3NmXSkgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiAoYltzZl0pID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgYzM6IHN0cmluZyA9IGFbc2ZdO1xuICAgICAgICB2YXIgYzQgOiBzdHJpbmc9IGJbc2ZdO1xuICAgICAgICBpZiAoYzQgPT0gbnVsbCkge1xuICAgICAgICAgIGM0ID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGMzID09IG51bGwpIHtcbiAgICAgICAgICBjMyA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHIgPSBjMy5sb2NhbGVDb21wYXJlKGM0LCAnZW4nLCB7IHNlbnNpdGl2aXR5OiAnYmFzZScgfSk7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0eXBlb2YgKGFbc2ZdKSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIChiW3NmXSkgPT09ICdudW1iZXInICkge1xuICAgICAgICAgIHIgPSBhW3NmXSAtIGJbc2ZdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiAoYVtzZl0pID09PSAnYm9vbGVhbicgfHwgdHlwZW9mIChiW3NmXSkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgdmFyIGMxID0gMDtcbiAgICAgICAgICAgIGlmIChhW3NmXSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgYzEgPSAyO1xuICAgICAgICAgICAgaWYgKGFbc2ZdID09PSBmYWxzZSlcbiAgICAgICAgICAgICAgYzEgPSAxO1xuICAgICAgICAgICAgdmFyIGMyID0gMDtcbiAgICAgICAgICAgIGlmIChiW3NmXSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgYzIgPSAyO1xuICAgICAgICAgICAgaWYgKGJbc2ZdID09PSBmYWxzZSlcbiAgICAgICAgICAgICAgYzIgPSAxO1xuICAgICAgICAgICAgciA9IGMxIC0gYzI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHIgPSBhW3NmXSA8IGJbc2ZdXG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgICAgLy9jb25zb2xlLmxvZygnQ29tcGFyZSAnICsgYVtzZl0gKyAnIDw9PiAnICsgYltzZl0gKyAnICA9ICcgKyByICsgJyB0aGlzLnNvcnRlZEZpZWxkLnJldmVyc2UnICsgdGhpcy5zb3J0ZWRGaWVsZC5yZXZlcnNlKVxuICAgICAgaWYgKHRoaXMuc29ydGVkRmllbGQucmV2ZXJzZSkge1xuICAgICAgICByZXR1cm4gciAqIC0xXG4gICAgICB9XG4gICAgICByZXR1cm4gclxuICAgIH0pO1xuXG4gIH1cblxuICBzb3J0QnkoY29sKSB7XG4gICAgLy8gY29uc29sZS5sb2coY29sKTtcbiAgICBpZiAodGhpcy5zb3J0ZWRGaWVsZC5maWVsZCA9PSBjb2wucHJvcCkge1xuICAgICAgdGhpcy5zb3J0ZWRGaWVsZC5yZXZlcnNlID0gIXRoaXMuc29ydGVkRmllbGQucmV2ZXJzZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNvcnRlZEZpZWxkLnJldmVyc2UgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5zb3J0ZWRGaWVsZC5maWVsZCA9IGNvbC5wcm9wO1xuICAgIGlmICh0aGlzLnBhZ2luYXRpb24pIHtcbiAgICAgIHRoaXMuc29ydC5lbWl0KHRoaXMuc29ydGVkRmllbGQpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMuX2NoYW5nZVBhZ2UodGhpcy5jdXJyZW50X3BhZ2UsIHRoaXMucm93cywgdHJ1ZSk7XG4gICAgfVxuXG4gIH1cblxuICBTZWxlY3RSb3coaW5kZXgsIHJvdykge1xuICAgIGlmICh0aGlzLmNhblNlbGVjdCA9PT0gXCJyb3dcIikge1xuICAgICAgdGhpcy5yb3dfc2VsZWN0ZWQgPSBpbmRleDtcbiAgICAgIHRoaXMuY2VsbF9zZWxlY3RlZCA9IG51bGw7XG4gICAgICBsZXQgdHJ1ZUluZGV4ID0gdGhpcy5jdXJyZW50X3BhZ2UgKiB0aGlzLmxpbWl0ICsgaW5kZXg7XG4gICAgICAvL2xldCBkYXRhID0gdGhpcy5yb3dzW3RydWVJbmRleF07XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIlNlbGVjdFJvdyB0cnVlSW5kZXhcIiwgdHJ1ZUluZGV4KTtcbiAgICAgIHRoaXMuc2VsZWN0LmVtaXQoPE1hRGF0YUdyaWRTZWxlY3RFdmVudD57IGluZGV4OiB0cnVlSW5kZXgsIHJvdzogcm93IH0pO1xuICAgIH1cbiAgfVxuXG4gIFNlbGVjdENlbGwoaW5kZXgsIHJvdywgY29sKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJTZWxlY3RDZWxsIFNlbGVjdFwiLCBpbmRleCwgcm93LCBjb2wpO1xuICAgIGlmICh0aGlzLmNhblNlbGVjdCA9PT0gXCJjZWxsXCIpIHtcbiAgICAgIHRoaXMucm93X3NlbGVjdGVkID0gaW5kZXg7XG4gICAgICB0aGlzLmNlbGxfc2VsZWN0ZWQgPSBjb2wucHJvcDtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiU2VsZWN0Q2VsbCBTZWxlY3RcIiwgaW5kZXgsIHJvdywgY29sKTtcbiAgICAgIGxldCB0cnVlSW5kZXggPSB0aGlzLmN1cnJlbnRfcGFnZSAqIHRoaXMubGltaXQgKyBpbmRleDtcbiAgICAgIC8vY29uc29sZS5sb2coXCJEYXRhIEdyaWQgdHJ1ZUluZGV4XCIsIHRydWVJbmRleCk7XG4gICAgICB0aGlzLnNlbGVjdC5lbWl0KDxNYURhdGFHcmlkU2VsZWN0RXZlbnQ+eyBpbmRleDogdHJ1ZUluZGV4LCByb3c6IHJvdywgcHJvcDogY29sLnByb3AsIHZhbHVlOiByb3dbY29sLnByb3BdLCB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJDaGFuZ2UoZTogTWFEYXRhR3JpZEZpbHRlckV2ZW50KSB7XG4gICAgdGhpcy5leHRGaWx0ZXJDaGFuZ2UuZW1pdChlKTtcbiAgfVxuXG4gIHRpbWVvdXQgPSBudWxsO1xuICBwcml2YXRlIF9jaGFuZ2VIZWFkZXJGaWx0ZXIoZTogYW55KSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9kZWxheUNoYW5nZUhlYWRlckZpbHRlcihlKTtcbiAgICB9LCA1MDApO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVsYXlDaGFuZ2VIZWFkZXJGaWx0ZXIoZTogYW55KSB7XG4gICAgbGV0IGNvbmRpdGlvbnMgPSBbXTtcbiAgICB0aGlzLmhlYWRlcmZpbHRlci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAvL2l0ZW0uZmlsdGVyX3ZhbHVlO1xuICAgICAgbGV0IGNvbmRpdGlvbiA9IGl0ZW0uZ2V0RmlsdGVyKCk7XG4gICAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICAgIGlmIChjb25kaXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25kaXRpb25zLnB1c2goJ2FuZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbmRpdGlvbnMucHVzaChjb25kaXRpb24pO1xuICAgICAgfVxuICAgICAgLy9jb25zb2xlLmxvZyhpdGVtLmNvbC5wcm9wICsgJyA9PiAnK2l0ZW0uZmlsdGVyX3ZhbHVlKTtcbiAgICB9KVxuICAgIC8vIGNvbnNvbGUubG9nKFwiQ09ORElUSU9OU1wiLCBjb25kaXRpb25zKTtcbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uID09IGZhbHNlKSB7XG4gICAgICB0aGlzLmNvbmRpdGlvbnMgPSBjb25kaXRpb25zO1xuICAgICAgdGhpcy5fY2hhbmdlUGFnZSgwLCB0aGlzLnJvd3MsIHRydWUpO1xuICAgICAgdGhpcy5maWx0ZXJDaGFuZ2UuZW1pdCg8TWFEYXRhR3JpZEhlYWRGaWx0ZXJFdmVudD57IHdoZXJlOiBjb25kaXRpb25zLCBkYXRhOiB0aGlzLnRlbXAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlsdGVyQ2hhbmdlLmVtaXQoPE1hRGF0YUdyaWRIZWFkRmlsdGVyRXZlbnQ+eyB3aGVyZTogY29uZGl0aW9ucyB9KTtcbiAgICB9XG5cblxuICB9XG5cbn1cbiJdfQ==