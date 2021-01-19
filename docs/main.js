(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\MyHome\android\workspace\angular\ma-data-grid-test\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BATo":
/*!************************************************!*\
  !*** ./src/app/pages/test2/test2.component.ts ***!
  \************************************************/
/*! exports provided: Test2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test2Component", function() { return Test2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_components_cell_usage_cell_usage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/cell-usage/cell-usage.component */ "znqx");
/* harmony import */ var _amn31_ma_data_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amn31/ma-data-grid */ "+axt");
/* harmony import */ var src_app_services_wifi_points_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/wifi-points.service */ "monB");






class Test2Component {
    constructor(wifiPointsService) {
        this.wifiPointsService = wifiPointsService;
        this.limit = 10;
        this.counter = 10;
        this.page = 0;
        this.where = null;
        this.LoadError = '';
        /*
        {
          "emplacement": "Exterieur",
          "commune": "CHARLEVILLE-MEZIERES",
          "geo_point_2d": [
            49.760024,
            4.719275
          ],
          "timestamp": "2019-05-06T22:45:36.503+02:00"
          "localisation": "HÔTEL DE VILLE MEZIERES 2",
          "liaison": "Cuivre",
          "code_insee": "08105",
          "internet": "VDSL",
          "densite": "Normale",
          "modele": "T300",
          "address": "Place de l'Hôtel de Ville",
          "lat": 4.719275,
          "lng": 49.760024,
          "id": 1,
          "hasShortAddress": false
        }
        */
        this.columns = [
            { prop: 'id', title: 'Id', sorted: true, dataType: 'number' },
            {
                prop: 'commune',
                title: 'City', sorted: true, dataType: 'string', cssClass: 'td_small',
                extFilter: true, extFilterSelected: true
            },
            {
                prop: 'usage', title: 'Usage', sorted: true, dataType: 'number',
                useTemplate: src_app_components_cell_usage_cell_usage_component__WEBPACK_IMPORTED_MODULE_1__["CellUsageComponent"]
            },
            { prop: 'isNew', title: 'New', extFilter: true, sorted: true, dataType: 'boolean' },
            { prop: 'lng', title: 'Lng', extFilter: true, sorted: true, dataType: 'number' },
            {
                prop: 'timestamp', title: 'Recorded', sorted: true,
                dataType: 'date'
            },
            {
                prop: 'liaison', title: 'Link', sorted: true,
                isRowHTML: true,
            },
            {
                prop: 'internet', title: 'Type', sorted: true,
                pipe: this.formatData
            },
            {
                prop: 'internet', title: 'Internet', sorted: true,
                headFilter: [{
                        value: 'VDSL',
                        operator: '=',
                        label: 'vdsl'
                    }, {
                        value: 'ADSL',
                        operator: '=',
                        label: 'adsl'
                    }]
            },
            //   
            { prop: 'modele', title: 'Model', sorted: true, extFilter: true, extFilterSelected: false }
        ];
    }
    ngOnInit() {
        console.log("ngOnInit");
        /* Initialize datas on start */
        this.loadPage(0);
        // Create header filters for 'Model' and 'Link'
        // according to datas found
        this.autoHeaderFilter('modele');
        this.autoHeaderFilter('liaison');
    }
    /**
     * Load data the current page according to parameters:
     *
     *  page:    The current page to display
     *  limit:   Max number of rows to display in the datagrid
     *  where:   It's the where clause used according to the header Filter of the datagrid
     *           here the method updateFilter() will be used
     *  sort:    sort is used to sort the data according to that example of query {field: 'id', reverse: true}
     *
     * @param {*} page
     * @memberof Test2Component
     */
    loadPage(page) {
        console.log("this._loadPage()");
        this.wifiPointsService.getPoints({
            where: this.where,
            offset: page * this.limit,
            limit: this.limit,
            sort: this.sort // Example: {field: 'id', reverse: true}
        }).then((data) => {
            this.rows = data.rows;
            this.page = page;
            this.counter = data.count;
            console.log('loadPage DATA ============================= ', data);
        });
    }
    /**
     * Create options headFilter according to distinct values found in datas:
     *
     *  this.columns.{field}.headFilter: [
     *    {
            value: {field_value},
            operator: '=',
            label: {fieldname}
          },
          ...
     *
     * @param {string} field
     * @memberof Test1Component
     */
    autoHeaderFilter(field) {
        this.wifiPointsService.getDistinctValues(field).then((values) => {
            console.log('MaDataGridHeadFilter ' + field, values);
            let d = [];
            values.forEach(element => {
                d.push({ value: element, operator: '=', label: element });
            });
            this.columns.find(elem => elem.prop === field).headFilter = d;
        });
    }
    /**
     * Field named 'Type' will be first letter of field value 'internet'
     *
     * @param {string} value
     * @param {any} row
     * @param {any} col
     * @return {*}  {string}
     * @memberof Test1Component
     */
    formatData(value, row, col) {
        //console.log("formatData "+ row[col.prop], col)
        /*
        if (col.prop == 'internet' && 'ADSL' == value) {
          return '('+row['internet']+')';
        }*/
        if (value)
            return value.split('')[0];
    }
    SelectRowOrCell(event) {
        console.log('SelectRowOrCell', event);
        setTimeout(() => {
            this.datagrid.resetSelection();
        }, 5000);
    }
    /**
     * When user uses head filter this method is called
     *
     * @param {MaDataGridHeadFilterEvent} event
     * @memberof Test2Component
     */
    updateFilter(event) {
        console.log('updateFilter', event.where);
        this.where = event.where;
        this.page = 0;
        this.loadPage(0);
    }
    /**
     * When user uses sort header this method is called
     *
     * @param {MaDataGridFilterEvent} event
     * @memberof Test2Component
     */
    sortBy(event) {
        console.log('sortBy event', event);
        this.sort = event;
        this.loadPage(this.page);
    }
    /**
     * Fire event regarding the datagrid
     *
     * @param {*} page
     * @memberof Test2Component
     */
    changePage(page) {
        console.log('changePage', page);
        this.loadPage(page);
    }
}
Test2Component.ɵfac = function Test2Component_Factory(t) { return new (t || Test2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_wifi_points_service__WEBPACK_IMPORTED_MODULE_3__["WifiPointsService"])); };
Test2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Test2Component, selectors: [["app-test2"]], viewQuery: function Test2Component_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_amn31_ma_data_grid__WEBPACK_IMPORTED_MODULE_2__["MaDataGridComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.datagrid = _t.first);
    } }, decls: 2, vars: 7, consts: [["canSelect", "row", 3, "pagination", "count", "page", "columns", "rows", "limit", "headFilter", "changePage", "sort", "select", "filterChange"], ["datagrid", ""]], template: function Test2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ma-data-grid", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changePage", function Test2Component_Template_ma_data_grid_changePage_0_listener($event) { return ctx.changePage($event); })("sort", function Test2Component_Template_ma_data_grid_sort_0_listener($event) { return ctx.sortBy($event); })("select", function Test2Component_Template_ma_data_grid_select_0_listener($event) { return ctx.SelectRowOrCell($event); })("filterChange", function Test2Component_Template_ma_data_grid_filterChange_0_listener($event) { return ctx.updateFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pagination", true)("count", ctx.counter)("page", ctx.page)("columns", ctx.columns)("rows", ctx.rows)("limit", 10)("headFilter", true);
    } }, directives: [_amn31_ma_data_grid__WEBPACK_IMPORTED_MODULE_2__["MaDataGridComponent"]], styles: [".td_small {\r\n    font-size: x-small;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCOztBQUV0QiIsImZpbGUiOiJ0ZXN0Mi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi9kZWVwLyAudGRfc21hbGwge1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Test2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-test2',
                templateUrl: './test2.component.html',
                styleUrls: ['./test2.component.css']
            }]
    }], function () { return [{ type: src_app_services_wifi_points_service__WEBPACK_IMPORTED_MODULE_3__["WifiPointsService"] }]; }, { datagrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_amn31_ma_data_grid__WEBPACK_IMPORTED_MODULE_2__["MaDataGridComponent"], { static: true }]
        }] }); })();


/***/ }),

/***/ "HMtw":
/*!************************************************!*\
  !*** ./src/app/pages/test3/test3.component.ts ***!
  \************************************************/
/*! exports provided: Test3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test3Component", function() { return Test3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_components_cell_usage_cell_usage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/cell-usage/cell-usage.component */ "znqx");
/* harmony import */ var _amn31_ma_data_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amn31/ma-data-grid */ "+axt");
/* harmony import */ var src_app_services_wifi_points_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/wifi-points.service */ "monB");






class Test3Component {
    constructor(wifiPointsService) {
        this.wifiPointsService = wifiPointsService;
        this.limit = 10;
        this.counter = 10;
        this.page = 0;
        this.where = null;
        this.LoadError = '';
        /*
        {
          "emplacement": "Exterieur",
          "commune": "CHARLEVILLE-MEZIERES",
          "geo_point_2d": [
            49.760024,
            4.719275
          ],
          "timestamp": "2019-05-06T22:45:36.503+02:00"
          "localisation": "HÔTEL DE VILLE MEZIERES 2",
          "liaison": "Cuivre",
          "code_insee": "08105",
          "internet": "VDSL",
          "densite": "Normale",
          "modele": "T300",
          "address": "Place de l'Hôtel de Ville",
          "lat": 4.719275,
          "lng": 49.760024,
          "id": 1,
          "hasShortAddress": false
        }
        */
        this.columns = [
            { prop: 'id', title: 'Id', sorted: true, dataType: 'number' },
            { prop: 'commune',
                title: 'City', sorted: true, dataType: 'string', cssClass: 'td_small',
                extFilter: true, extFilterSelected: true },
            {
                prop: 'usage', title: 'Usage', sorted: true, dataType: 'number',
                useTemplate: src_app_components_cell_usage_cell_usage_component__WEBPACK_IMPORTED_MODULE_1__["CellUsageComponent"]
            },
            { prop: 'isNew', title: 'New', sorted: true, dataType: 'boolean' },
            { prop: 'lng', title: 'Lng', extFilter: true, sorted: true, dataType: 'number' },
            { prop: 'lat', title: 'lat', extFilter: true, sorted: true, dataType: 'number' },
            {
                prop: 'timestamp', title: 'Recorded', sorted: true,
                dataType: 'date'
            },
            {
                prop: 'liaison', title: 'Link', sorted: true, extFilter: true,
                isRowHTML: true,
            },
            {
                prop: 'internet', title: 'Type', sorted: true,
                pipe: this.formatData
            },
            {
                prop: 'internet', title: 'Internet', sorted: true,
                headFilter: [{
                        value: 'VDSL',
                        operator: '=',
                        label: 'vdsl'
                    }, {
                        value: 'ADSL',
                        operator: '=',
                        label: 'adsl'
                    }]
            },
            //   
            { prop: 'modele', title: 'Model', sorted: true, extFilter: true, extFilterSelected: false }
        ];
    }
    ngOnInit() {
        console.log("ngOnInit");
        /* Initialize datas once */
        this.loadPage(0);
        // Create header filters for 'Model' and 'Link'
        // according to datas found
        this.autoHeaderFilter('modele');
        this.autoHeaderFilter('liaison');
    }
    /**
     * Load data the current page according to parameters:
     *
     *  page:    The current page to display
     *  limit:   Max number of rows to display in the datagrid
     *  where:   It's the where clause used according to the header Filter of the datagrid
     *           here the method updateFilter() will be used
     *  sort:    sort is used to sort the data according to that example of query {field: 'id', reverse: true}
     *
     * @param {*} page
     * @memberof Test2Component
     */
    loadPage(page) {
        console.log("this._loadPage()");
        this.wifiPointsService.getPoints({
            where: this.where,
            offset: page * this.limit,
            limit: this.limit,
            sort: this.sort // Example: {field: 'id', reverse: true}
        }).then((data) => {
            this.temp = this.rows = data.rows;
            this.page = page;
            this.counter = data.count;
            console.log('loadPage DATA ============================= ', data);
        });
    }
    /**
     * Create options headFilter according to distinct values found in datas:
     *
     *  this.columns.{field}.headFilter: [
     *    {
            value: {field_value},
            operator: '=',
            label: {fieldname}
          },
          ...
     *
     * @param {string} field
     * @memberof Test1Component
     */
    autoHeaderFilter(field) {
        this.wifiPointsService.getDistinctValues(field).then((values) => {
            console.log('MaDataGridHeadFilter ' + field, values);
            let d = [];
            values.forEach(element => {
                d.push({ value: element, operator: '=', label: element });
            });
            this.columns.find(elem => elem.prop === field).headFilter = d;
        });
    }
    /**
     * Field named 'Type' will be first letter of field value 'internet'
     *
     * @param {string} value
     * @param {any} row
     * @param {any} col
     * @return {*}  {string}
     * @memberof Test1Component
     */
    formatData(value, row, col) {
        //console.log("formatData "+ row[col.prop], col)
        /*
        if (col.prop == 'internet' && 'ADSL' == value) {
          return '('+row['internet']+')';
        }*/
        if (value)
            return value.split('')[0];
    }
    SelectRowOrCell(event) {
        console.log('SelectRowOrCell', event);
        let ptr = this;
        setTimeout(function () {
            ptr.datagrid.resetSelection();
        }, 5000);
    }
    /**
     * When user uses head filter this method is called
     *
     * @param {MaDataGridHeadFilterEvent} event
     * @memberof Test2Component
     */
    updateFilter(event) {
        console.log('updateFilter', event.where);
        this.where = event.where;
        this.loadPage(0);
    }
    /**
     * When user uses sort header this method is called
     *
     * @param {MaDataGridFilterEvent} event
     * @memberof Test2Component
     */
    sortBy(event) {
        console.log('sortBy event', event);
        this.sort = event;
        this.loadPage(this.page);
    }
    /**
     * Fire event regarding the datagrid
     *
     * @param {*} page
     * @memberof Test2Component
     */
    changePage(page) {
        console.log('changePage', page);
        this.loadPage(page);
    }
    /**
     * Basic filter used for external filter
     *
     * @param {MaDataGridFilterEvent} event
     * @memberof Test3Component
     */
    extUpdateFilter(event) {
        console.log('extUpdateFilter', event);
        // Value du search    
        const val = event.text.toLowerCase();
        // filter on data and for each provided fields (Ex:[ 'id', 'City' ])
        const temp = this.temp.filter(function (d) {
            if (!val) {
                return true;
            }
            for (var f of event.fields) {
                if (d[f] && d[f].toString().toLowerCase().indexOf(val) !== -1)
                    return true;
            }
            return false;
        });
        // update the rows
        this.rows = temp;
        console.log("DATA EXTERNAL FILTER ", this.rows);
    }
}
Test3Component.ɵfac = function Test3Component_Factory(t) { return new (t || Test3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_wifi_points_service__WEBPACK_IMPORTED_MODULE_3__["WifiPointsService"])); };
Test3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Test3Component, selectors: [["app-test3"]], viewQuery: function Test3Component_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_amn31_ma_data_grid__WEBPACK_IMPORTED_MODULE_2__["MaDataGridComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.datagrid = _t.first);
    } }, decls: 2, vars: 8, consts: [["canSelect", "row", 3, "pagination", "count", "page", "columns", "rows", "limit", "headFilter", "extFilter", "changePage", "sort", "select", "filterChange", "extFilterChange"], ["datagrid", ""]], template: function Test3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ma-data-grid", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changePage", function Test3Component_Template_ma_data_grid_changePage_0_listener($event) { return ctx.changePage($event); })("sort", function Test3Component_Template_ma_data_grid_sort_0_listener($event) { return ctx.sortBy($event); })("select", function Test3Component_Template_ma_data_grid_select_0_listener($event) { return ctx.SelectRowOrCell($event); })("filterChange", function Test3Component_Template_ma_data_grid_filterChange_0_listener($event) { return ctx.updateFilter($event); })("extFilterChange", function Test3Component_Template_ma_data_grid_extFilterChange_0_listener($event) { return ctx.extUpdateFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pagination", true)("count", ctx.counter)("page", ctx.page)("columns", ctx.columns)("rows", ctx.rows)("limit", 10)("headFilter", true)("extFilter", true);
    } }, directives: [_amn31_ma_data_grid__WEBPACK_IMPORTED_MODULE_2__["MaDataGridComponent"]], styles: [".td_small {\r\n    font-size: x-small;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7O0FBRXRCIiwiZmlsZSI6InRlc3QzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvZGVlcC8gLnRkX3NtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Test3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-test3',
                templateUrl: './test3.component.html',
                styleUrls: ['./test3.component.css']
            }]
    }], function () { return [{ type: src_app_services_wifi_points_service__WEBPACK_IMPORTED_MODULE_3__["WifiPointsService"] }]; }, { datagrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_amn31_ma_data_grid__WEBPACK_IMPORTED_MODULE_2__["MaDataGridComponent"], { static: true }]
        }] }); })();


/***/ }),

/***/ "IZXN":
/*!************************************************!*\
  !*** ./src/app/pages/test4/test4.component.ts ***!
  \************************************************/
/*! exports provided: Test4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test4Component", function() { return Test4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class Test4Component {
    constructor() { }
    ngOnInit() {
    }
}
Test4Component.ɵfac = function Test4Component_Factory(t) { return new (t || Test4Component)(); };
Test4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Test4Component, selectors: [["app-test4"]], decls: 2, vars: 0, template: function Test4Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "test4 works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0NC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Test4Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-test4',
                templateUrl: './test4.component.html',
                styleUrls: ['./test4.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Se+V":
/*!****************************!*\
  !*** ./src/bornes-wifi.ts ***!
  \****************************/
/*! exports provided: POINTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POINTS", function() { return POINTS; });
const POINTS = [{
        "datasetid": "bornes-wifi",
        "recordid": "05bd10a8c2df051bb1165c6247a93abb319e81c3",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "CHARLEVILLE-MEZIERES",
            "adresse": "Place de l'H\u00f4tel de Ville",
            "geo_point_2d": [49.760024, 4.719275],
            "localisation": "H\u00d4TEL DE VILLE MEZIERES 2",
            "liaison": "Cuivre",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.719275, 49.760024]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "6a54aa196f442a3459122edb9e2204c7151367bb",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "CHARLEVILLE-MEZIERES",
            "adresse": "Place de l'H\u00f4tel de Ville",
            "geo_point_2d": [49.760583, 4.719116],
            "localisation": "H\u00d4TEL DE VILLE MEZIERES 1",
            "liaison": "Mesh",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.719116, 49.760583]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "be618f989aaab142f3f95191b5c07c05ab77c57e",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "CHARLEVILLE-MEZIERES",
            "adresse": "Rue Bourbon",
            "geo_point_2d": [49.772291, 4.7179],
            "localisation": "RUE BOURBON / RUE DU THEATRE",
            "liaison": "Fibre optique",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.7179, 49.772291]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "bbbaa0d8236f516f5e3d069aee3dc953c4a7e95e",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "CHARLEVILLE-MEZIERES",
            "adresse": "Rue de la R\u00e9publique",
            "geo_point_2d": [49.772472, 4.720308],
            "localisation": "RUE DE LA REPUPLIQUE / RUE DE LA PAIX",
            "liaison": "Fibre optique",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.720308, 49.772472]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "90a8d4ac5d9bcb32ed0987856f16e7829df02c1b",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "CHARLEVILLE-MEZIERES",
            "adresse": "Rue de la R\u00e9publique",
            "geo_point_2d": [49.771800999999996, 4.719841],
            "localisation": "RUE DE LA REPUPLIQUE / RUE BOURBON",
            "liaison": "Fibre optique",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.719841, 49.771800999999996]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "e7e4d8c3054f4d6cf5cb01d44efd275bb6a6d123",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "CHARLEVILLE-MEZIERES",
            "adresse": "135, rue des Paquis",
            "geo_point_2d": [49.780669, 4.719389],
            "localisation": "CENTRE AQUATIQUE Bernard ALBIN - SOLARIUM",
            "liaison": "Cuivre",
            "code_insee": "08105",
            "internet": "ADSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.719389, 49.780669]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "e4a5909be18ceb14efbd8f11abc3489e820699e2",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "CHARLEVILLE-MEZIERES",
            "adresse": "18, Avenue Jean JAURES",
            "geo_point_2d": [49.770516, 4.720962],
            "localisation": "SALLE DE SPECTACLE LE FORUM",
            "liaison": "Cuivre",
            "code_insee": "08105",
            "internet": "ADSL",
            "densite": "Haute",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.720962, 49.770516]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "9b533a544e103bd74e49f9bc889e8e826e5cf171",
        "fields": {
            "emplacement": "Interieur",
            "commune": "CHARLEVILLE-MEZIERES",
            "adresse": "8, Place de la Pr\u00e9fecture",
            "geo_point_2d": [49.760029, 4.720022],
            "localisation": "BIBLIOTHEQUE PORTE NEUVE",
            "liaison": "Fibre optique",
            "code_insee": "08105",
            "internet": "ADSL",
            "densite": "Normale",
            "modele": "R310"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.720022, 49.760029]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "5295e45f02136c66d430ce0475a3bd508075393b",
        "fields": {
            "emplacement": "Interieur",
            "commune": "CHARLEVILLE-MEZIERES",
            "adresse": "8, rue Ferroul",
            "geo_point_2d": [49.747321, 4.722481],
            "localisation": "BIBLIOTHEQUE RONDE COUTURE",
            "liaison": "Cuivre",
            "code_insee": "08105",
            "internet": "ADSL",
            "densite": "Normale",
            "modele": "R310"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.722481, 49.747321]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "78096ba05f997f955abc409de05bc8816a0a8512",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "SEDAN",
            "adresse": "Place CALONNE",
            "geo_point_2d": [49.699703, 4.944316],
            "localisation": "CENTRE CULTUREL - MJC CALONNE",
            "liaison": "Fibre optique",
            "code_insee": "08409",
            "internet": "VDSL",
            "densite": "Haute",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.944316, 49.699703]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "874595b1989afa675433d5d6091e412608da4309",
        "fields": {
            "emplacement": "Interieur",
            "commune": "CHARLEVILLE-MEZIERES",
            "adresse": "Rue du Daga",
            "geo_point_2d": [49.775155, 4.719052],
            "localisation": "MARCHE COUVERT",
            "liaison": "Cuivre",
            "code_insee": "08105",
            "internet": "ADSL",
            "densite": "Haute",
            "modele": "R510"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.719052, 49.775155]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "466e4d1f4fde2068c1575d6daf0125fb9f1d056b",
        "fields": {
            "emplacement": "Interieur",
            "commune": "CHARLEVILLE-MEZIERES",
            "adresse": "Rue de la Vieille Meuse",
            "geo_point_2d": [49.757503, 4.7065529999999995],
            "localisation": "CAISSE EPARGNE ARENA 1",
            "liaison": "Fibre optique",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "R300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.7065529999999995, 49.757503]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "a0d15fd503619458f78852dda5d7359179a8f627",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "CHARLEVILLE-MEZIERES",
            "adresse": "Rue des Paquis",
            "geo_point_2d": [49.778485, 4.721052],
            "localisation": "CAMPING DU MONT OLYMPE - ACCUEIL",
            "liaison": "Mesh",
            "code_insee": "08105",
            "internet": "ADSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.721052, 49.778485]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "434279161a869fd810ce21663e8fb5e7e03a8cb8",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "SEDAN",
            "adresse": "Quai Paul Bert",
            "geo_point_2d": [49.694029, 4.938448],
            "localisation": "STADE Louis DUGAUGUEZ - TRIBUNE JOURNALISTE",
            "liaison": "Cuivre",
            "code_insee": "08409",
            "internet": "ADSL",
            "densite": "Haute",
            "modele": "T610"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.938448, 49.694029]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "b4e4bc9dca6901430d63f3947d838425f371dc7c",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "SEDAN",
            "adresse": "Place CRUSSY",
            "geo_point_2d": [49.699314, 4.946315],
            "localisation": "SALLE DE SPECTACLE MARCILLET",
            "liaison": "Fibre optique",
            "code_insee": "08409",
            "internet": "VDSL",
            "densite": "Haute",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.946315, 49.699314]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "1d2e222ee8ac4be16bc0203527bce60f73fa4d7a",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "SEDAN",
            "adresse": "Place TURENNES",
            "geo_point_2d": [49.703296, 4.943267],
            "localisation": "MAIRIE",
            "liaison": "Cuivre",
            "code_insee": "08409",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "T310C"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.943267, 49.703296]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "26a4a4854cc892350d256a2bf692fd00c908ed5a",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "SEDAN",
            "adresse": "Place CRUSSY",
            "geo_point_2d": [49.700428, 4.946668],
            "localisation": "PLACE CRUSSY",
            "liaison": "Mesh",
            "code_insee": "08409",
            "internet": "VDSL",
            "densite": "Haute",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.946668, 49.700428]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "a21c6383fdadeaed1c6f962b1da9c48b7534901c",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "CHARLEVILLE-MEZIERES",
            "adresse": "Place de la Gare",
            "geo_point_2d": [49.76794, 4.724742],
            "localisation": "GARE SNCF - PARVIS",
            "liaison": "Fibre optique",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.724742, 49.76794]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "6e0dc3848b0677b920d979e8a33c10405efc8480",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "SEDAN",
            "adresse": "Grande Prairie de TORCY",
            "geo_point_2d": [49.698456, 4.937647],
            "localisation": "HALTE FUVIALE",
            "liaison": "Mesh",
            "code_insee": "08409",
            "internet": "ADSL",
            "densite": "Normale",
            "modele": "T310C"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.937647, 49.698456]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "c84b11999d3cd1dd7b2c23f97c4a7f692b9950b2",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "SEDAN",
            "adresse": "Place d'Armes",
            "geo_point_2d": [49.700703, 4.947208],
            "localisation": "PLACE D'ARMES",
            "liaison": "Fibre optique",
            "code_insee": "08409",
            "internet": "VDSL",
            "densite": "Haute",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.947208, 49.700703]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "5eaa0abb6d6c685cf9e9071ba187a908b7f0c789",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "CHARLEVILLE-MEZIERES",
            "adresse": "Place Ducale",
            "geo_point_2d": [49.773304, 4.719964],
            "localisation": "PLACE DUCALE - COUR DE LA CRIEE",
            "liaison": "Fibre optique",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Haute",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.719964, 49.773304]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "5b14d12cf2a64b69bdf6584381bc7e78806f2a2b",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "CHARLEVILLE-MEZIERES",
            "adresse": "Rue des Paquis",
            "geo_point_2d": [49.777337, 4.7209129999999995],
            "localisation": "CAMPING DU MONT OLYMPE - SANITAIRES",
            "liaison": "Mesh",
            "code_insee": "08105",
            "internet": "ADSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.7209129999999995, 49.777337]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "a62b9d13d9eb0c880461032a7f6973df33fc63a6",
        "fields": {
            "emplacement": "Interieur",
            "commune": "CHARLEVILLE-MEZIERES",
            "adresse": "2, Place Jacques FELIX",
            "geo_point_2d": [49.774764, 4.724162],
            "localisation": "MEDIATHEQUE VOYELLES",
            "liaison": "Fibre optique",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "R310"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.724162, 49.774764]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "9f55c573bb2f8286838d7233d047feb46fc93b92",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "CHARLEVILLE-MEZIERES",
            "adresse": "Place Ducale",
            "geo_point_2d": [49.773004, 4.721265],
            "localisation": "PLACE DUCALE - MUSEE",
            "liaison": "Fibre optique",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Haute",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.721265, 49.773004]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "82c60d77c7ac860660b2debc4f352e774e666326",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "CHARLEVILLE-MEZIERES",
            "adresse": "Cours Briand",
            "geo_point_2d": [49.770574, 4.719361],
            "localisation": "FONTAINE CHARLES DE GONZAGUE",
            "liaison": "Mesh",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.719361, 49.770574]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "c4f97ec066c13078577ac1c6445ad86d6b9f3196",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "SEDAN",
            "adresse": "Corne de Soisson, Rue des Anciens d'Afrique du Nord",
            "geo_point_2d": [49.700386, 4.943135],
            "localisation": "MEDIATHEQUE Georges DELAW 2",
            "liaison": "Fibre optique",
            "code_insee": "08409",
            "internet": "VDSL",
            "densite": "Haute",
            "modele": "T310C"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.943135, 49.700386]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "9425ffb447804186ff5bf9141d0db43013636285",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "SEDAN",
            "adresse": "Grande Prairie de TORCY",
            "geo_point_2d": [49.698226, 4.936549],
            "localisation": "CAMPING MUNICIPAL - SANITAIRE",
            "liaison": "Mesh",
            "code_insee": "08409",
            "internet": "ADSL",
            "densite": "Normale",
            "modele": "T310C"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.936549, 49.698226]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "05c01dd22c3fc1427894fe9e12c1c20252739abf",
        "fields": {
            "emplacement": "Interieur",
            "commune": "CHARLEVILLE-MEZIERES",
            "adresse": "Rue de la Vieille Meuse",
            "geo_point_2d": [49.758152, 4.706408],
            "localisation": "PARC DES EXPOSITIONS - Hall A",
            "liaison": "Cuivre",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "R310"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.706408, 49.758152]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "44b764ae4dd46f6b225afba5ff60f07a3255c594",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "CHARLEVILLE-MEZIERES",
            "adresse": "Place Winston Churchill",
            "geo_point_2d": [49.772227, 4.721443],
            "localisation": "PLACE WINSTON CHURCHILL",
            "liaison": "Fibre optique",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.721443, 49.772227]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "7a7dfd79d9a2f53ad1aacdcf66dbfef52bece6ab",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "SEDAN",
            "adresse": "Parking des Douves",
            "geo_point_2d": [49.701367, 4.949406],
            "localisation": "CH\u00c2TEAU FORT DE SEDAN",
            "liaison": "Cuivre",
            "code_insee": "08409",
            "internet": "ADSL",
            "densite": "Haute",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.949406, 49.701367]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "935f39e705e13e8a71d69356e8fa38535bc91696",
        "fields": {
            "emplacement": "Interieur",
            "commune": "CHARLEVILLE-MEZIERES",
            "adresse": "Rue de la Vieille Meuse",
            "geo_point_2d": [49.758147, 4.706378],
            "localisation": "PARC DES EXPOSITIONS - Hall A",
            "liaison": "Cuivre",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Haute",
            "modele": "R510"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.706378, 49.758147]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "d89be4432d8787cb7e7c740cb98d3383cc0c74a9",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "SEDAN",
            "adresse": "Cour du Ch\u00e2teau",
            "geo_point_2d": [49.701471, 4.949538],
            "localisation": "CH\u00c2TEAU FORT DE SEDAN",
            "liaison": "Cuivre",
            "code_insee": "08409",
            "internet": "ADSL",
            "densite": "Haute",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.949538, 49.701471]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "7b26ad65db65d0d6231d0612ba0d3c55f9768604",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "SEDAN",
            "adresse": "Place de la Gare",
            "geo_point_2d": [49.69504, 4.930517],
            "localisation": "GARE SNCF - PARVIS",
            "liaison": "Cuivre",
            "code_insee": "08409",
            "internet": "ADSL",
            "densite": "Normale",
            "modele": "T310C"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.930517, 49.69504]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "f2b61f4ea12685277d5b9185d2e2aec77617d20d",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "CHARLEVILLE-MEZIERES",
            "adresse": "Passerelle du Mont Olympe",
            "geo_point_2d": [49.776304, 4.722447],
            "localisation": "PASSERELLE DU MONT OLYMPE",
            "liaison": "Fibre optique",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.722447, 49.776304]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "77fb68776f6b26419724e7b129e5b35efbc0c8a8",
        "fields": {
            "emplacement": "Interieur",
            "commune": "CHARLEVILLE-MEZIERES",
            "adresse": "135, rue des Paquis",
            "geo_point_2d": [49.781057, 4.719724],
            "localisation": "CENTRE AQUATIQUE Bernard ALBIN - HALL ENTREE",
            "liaison": "Cuivre",
            "code_insee": "08105",
            "internet": "ADSL",
            "densite": "Normale",
            "modele": "R300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.719724, 49.781057]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "6d68fe0a71dd06715910168ff8b7f3b3995f292e",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "CHARLEVILLE-MEZIERES",
            "adresse": "Rue des Paquis",
            "geo_point_2d": [49.778146, 4.720006],
            "localisation": "CAMPING DU MONT OLYMPE - BASE NAUTIQUE",
            "liaison": "Cuivre",
            "code_insee": "08105",
            "internet": "ADSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.720006, 49.778146]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "08ec27402b640bd4bc045707bde5a3a3b3c85c2f",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "CHARLEVILLE-MEZIERES",
            "adresse": "Avenue Charles BOUTET",
            "geo_point_2d": [49.774526, 4.716719],
            "localisation": "METROPOLIS - NORD EST CINEMA",
            "liaison": "Fibre optique",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.716719, 49.774526]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "bff9d9ec552237bdadf7eed43ca985338de2ba92",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "CHARLEVILLE-MEZIERES",
            "adresse": "Quai Jean Charcot",
            "geo_point_2d": [49.775521, 4.721973],
            "localisation": "MUSEE ARTHUR RIMBAUD",
            "liaison": "Fibre optique",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.721973, 49.775521]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "6e3d9eab4e87481bacd871b0912bb2a237b2aab5",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "SEDAN",
            "adresse": "Grande Prairie de TORCY",
            "geo_point_2d": [49.698723, 4.938538],
            "localisation": "CAMPING MUNICIPAL - ACCUEIL",
            "liaison": "Cuivre",
            "code_insee": "08409",
            "internet": "ADSL",
            "densite": "Normale",
            "modele": "T310C"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.938538, 49.698723]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "d5bd39d666e4b34b26d9fabfef2e0e72720d56d6",
        "fields": {
            "emplacement": "Interieur",
            "commune": "CHARLEVILLE-MEZIERES",
            "adresse": "Rue du Th\u00e9\u00e2tre",
            "geo_point_2d": [49.773302, 4.718837],
            "localisation": "THEATRE MUNICIPAL",
            "liaison": "Cuivre",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "R310"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.718837, 49.773302]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "3d65b52cb1c31ce4d8296b6a34b454a7ac62724d",
        "fields": {
            "emplacement": "Int\u00e9rieur",
            "commune": "SEDAN",
            "adresse": "Corne de Soisson, Rue des Anciens d'Afrique du Nord",
            "geo_point_2d": [49.700499, 4.943193],
            "localisation": "MEDIATHEQUE Georges DELAW 1",
            "liaison": "Cuivre",
            "code_insee": "08409",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "H510"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.943193, 49.700499]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "b368d33b2835265a2e3397f22e08d43009b094d0",
        "fields": {
            "emplacement": "Interieur",
            "commune": "CHARLEVILLE-MEZIERES",
            "adresse": "Rue de la Vieille Meuse",
            "geo_point_2d": [49.757503, 4.70703],
            "localisation": "CAISSE EPARGNE ARENA 2",
            "liaison": "Fibre optique",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "R300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.70703, 49.757503]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "5f0f4cf4eac41eabd5b018956c730e220d0acde7",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "CHARLEVILLE-MEZIERES",
            "adresse": "Place Lucien BAUCHART",
            "geo_point_2d": [49.747972, 4.724178],
            "localisation": "Place BAUCHART",
            "liaison": "Fibre optique",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.724178, 49.747972]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "191a4586ccab371dfbf48dabdb0d7a2e38d4ba1b",
        "fields": {
            "emplacement": "Interieur",
            "commune": "SEDAN",
            "adresse": "Quai Paul Bert",
            "geo_point_2d": [49.693722, 4.93859],
            "localisation": "STADE Louis DUGAUGUEZ - SALLE DE PRESSE",
            "liaison": "Cuivre",
            "code_insee": "08409",
            "internet": "ADSL",
            "densite": "Normale",
            "modele": "R310"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.93859, 49.693722]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "9d37d8fa6732d37f9cd90e2400b125f30f8d2f00",
        "fields": {
            "emplacement": "Interieur",
            "commune": "SEDAN",
            "adresse": "8, Esplanade du Lac",
            "geo_point_2d": [49.69315, 4.9435009999999995],
            "localisation": "CENTRE AQUATIQUE - HALL ENTREE",
            "liaison": "Cuivre",
            "code_insee": "08409",
            "internet": "ADSL",
            "densite": "Normale",
            "modele": "R310"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.9435009999999995, 49.69315]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "42df188e00e0947ab9b10fa3c6d79e51ae07bc14",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "SEDAN",
            "adresse": "Place de la Halle",
            "geo_point_2d": [49.700045, 4.948255],
            "localisation": "PLACE DE LA HALLE",
            "liaison": "Fibre optique",
            "code_insee": "08409",
            "internet": "VDSL",
            "densite": "Haute",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.948255, 49.700045]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    },
    {
        "datasetid": "bornes-wifi",
        "recordid": "05bd10a8c2df051bb1165c6247a93abb319e81c3",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Damouzy",
            "adresse": "Place de l'H\u00f4tel de Ville",
            "geo_point_2d": [49.760024, 4.719275],
            "localisation": "H\u00d4TEL DE VILLE MEZIERES 2",
            "liaison": "Cuivre",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.719275, 49.760024]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "6a54aa196f442a3459122edb9e2204c7151367bb",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Damouzy",
            "adresse": "Place de l'H\u00f4tel de Ville",
            "geo_point_2d": [49.760583, 4.719116],
            "localisation": "H\u00d4TEL DE VILLE MEZIERES 1",
            "liaison": "Mesh",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.719116, 49.760583]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "be618f989aaab142f3f95191b5c07c05ab77c57e",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Damouzy",
            "adresse": "Rue Bourbon",
            "geo_point_2d": [49.772291, 4.7179],
            "localisation": "RUE BOURBON / RUE DU THEATRE",
            "liaison": "Fibre optique",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.7179, 49.772291]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "bbbaa0d8236f516f5e3d069aee3dc953c4a7e95e",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Damouzy",
            "adresse": "Rue de la R\u00e9publique",
            "geo_point_2d": [49.772472, 4.720308],
            "localisation": "RUE DE LA REPUPLIQUE / RUE DE LA PAIX",
            "liaison": "Fibre optique",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.720308, 49.772472]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "90a8d4ac5d9bcb32ed0987856f16e7829df02c1b",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Damouzy",
            "adresse": "Rue de la R\u00e9publique",
            "geo_point_2d": [49.771800999999996, 4.719841],
            "localisation": "RUE DE LA REPUPLIQUE / RUE BOURBON",
            "liaison": "Fibre optique",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.719841, 49.771800999999996]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "e7e4d8c3054f4d6cf5cb01d44efd275bb6a6d123",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Damouzy",
            "adresse": "135, rue des Paquis",
            "geo_point_2d": [49.780669, 4.719239],
            "localisation": "CENTRE AQUATIQUE Bernard ALBIN - SOLARIUM",
            "liaison": "Cuivre",
            "code_insee": "08105",
            "internet": "ADSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.719239, 49.780669]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "e4a5909be18ceb14efbd8f11abc3489e820699e2",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Damouzy",
            "adresse": "18, Avenue Jean JAURES",
            "geo_point_2d": [49.770516, 4.720962],
            "localisation": "SALLE DE SPECTACLE LE FORUM",
            "liaison": "Cuivre",
            "code_insee": "08105",
            "internet": "ADSL",
            "densite": "Haute",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.720962, 49.770516]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "9b533a544e103bd74e49f9bc889e8e826e5cf171",
        "fields": {
            "emplacement": "Interieur",
            "commune": "Damouzy",
            "adresse": "8, Place de la Pr\u00e9fecture",
            "geo_point_2d": [49.760029, 4.720022],
            "localisation": "BIBLIOTHEQUE PORTE NEUVE",
            "liaison": "Fibre optique",
            "code_insee": "08105",
            "internet": "ADSL",
            "densite": "Normale",
            "modele": "R310"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.720022, 49.760029]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "5295e45f02136c66d430ce0475a3bd508075393b",
        "fields": {
            "emplacement": "Interieur",
            "commune": "Damouzy",
            "adresse": "8, rue Ferroul",
            "geo_point_2d": [49.747321, 4.722481],
            "localisation": "BIBLIOTHEQUE RONDE COUTURE",
            "liaison": "Cuivre",
            "code_insee": "08105",
            "internet": "ADSL",
            "densite": "Normale",
            "modele": "R310"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.722481, 49.747321]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "78096ba05f997f955abc409de05bc8816a0a8512",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Nouzon",
            "adresse": "Place CALONNE",
            "geo_point_2d": [49.699703, 4.944316],
            "localisation": "CENTRE CULTUREL - MJC CALONNE",
            "liaison": "Fibre optique",
            "code_insee": "08409",
            "internet": "VDSL",
            "densite": "Haute",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.944316, 49.699703]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "874595b1989afa675433d5d6091e412608da4309",
        "fields": {
            "emplacement": "Interieur",
            "commune": "Damouzy",
            "adresse": "Rue du Daga",
            "geo_point_2d": [49.775155, 4.719052],
            "localisation": "MARCHE COUVERT",
            "liaison": "Cuivre",
            "code_insee": "08105",
            "internet": "ADSL",
            "densite": "Haute",
            "modele": "R510"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.719052, 49.775155]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "466e4d1f4fde2068c1575d6daf0125fb9f1d056b",
        "fields": {
            "emplacement": "Interieur",
            "commune": "Damouzy",
            "adresse": "Rue de la Vieille Meuse",
            "geo_point_2d": [49.757503, 4.7065529999999995],
            "localisation": "CAISSE EPARGNE ARENA 1",
            "liaison": "Fibre optique",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "R300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.7065529999999995, 49.757503]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "a0d15fd503619458f78852dda5d7359179a8f627",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Damouzy",
            "adresse": "Rue des Paquis",
            "geo_point_2d": [49.778485, 4.721052],
            "localisation": "CAMPING DU MONT OLYMPE - ACCUEIL",
            "liaison": "Mesh",
            "code_insee": "08105",
            "internet": "ADSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.721052, 49.778485]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "434279161a869fd810ce21663e8fb5e7e03a8cb8",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Nouzon",
            "adresse": "Quai Paul Bert",
            "geo_point_2d": [49.694029, 4.923448],
            "localisation": "STADE Louis DUGAUGUEZ - TRIBUNE JOURNALISTE",
            "liaison": "Cuivre",
            "code_insee": "08409",
            "internet": "ADSL",
            "densite": "Haute",
            "modele": "T610"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.923448, 49.694029]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "b4e4bc9dca6901430d63f3947d838425f371dc7c",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Nouzon",
            "adresse": "Place CRUSSY",
            "geo_point_2d": [49.699314, 4.946315],
            "localisation": "SALLE DE SPECTACLE MARCILLET",
            "liaison": "Fibre optique",
            "code_insee": "08409",
            "internet": "VDSL",
            "densite": "Haute",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.946315, 49.699314]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "1d2e222ee8ac4be16bc0203527bce60f73fa4d7a",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Nouzon",
            "adresse": "Place TURENNES",
            "geo_point_2d": [49.703296, 4.943267],
            "localisation": "MAIRIE",
            "liaison": "Cuivre",
            "code_insee": "08409",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "T310C"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.943267, 49.703296]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "26a4a4854cc892350d256a2bf692fd00c908ed5a",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Nouzon",
            "adresse": "Place CRUSSY",
            "geo_point_2d": [49.700428, 4.946668],
            "localisation": "PLACE CRUSSY",
            "liaison": "Mesh",
            "code_insee": "08409",
            "internet": "VDSL",
            "densite": "Haute",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.946668, 49.700428]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "a21c6383fdadeaed1c6f962b1da9c48b7534901c",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Damouzy",
            "adresse": "Place de la Gare",
            "geo_point_2d": [49.76794, 4.724742],
            "localisation": "GARE SNCF - PARVIS",
            "liaison": "Fibre optique",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.724742, 49.76794]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "6e0dc3848b0677b920d979e8a33c10405efc8480",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Nouzon",
            "adresse": "Grande Prairie de TORCY",
            "geo_point_2d": [49.698456, 4.937647],
            "localisation": "HALTE FUVIALE",
            "liaison": "Mesh",
            "code_insee": "08409",
            "internet": "ADSL",
            "densite": "Normale",
            "modele": "T310C"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.937647, 49.698456]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "c84b11999d3cd1dd7b2c23f97c4a7f692b9950b2",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Nouzon",
            "adresse": "Place d'Armes",
            "geo_point_2d": [49.700703, 4.947208],
            "localisation": "PLACE D'ARMES",
            "liaison": "Fibre optique",
            "code_insee": "08409",
            "internet": "VDSL",
            "densite": "Haute",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.947208, 49.700703]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "5eaa0abb6d6c685cf9e9071ba187a908b7f0c789",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Damouzy",
            "adresse": "Place Ducale",
            "geo_point_2d": [49.773304, 4.719964],
            "localisation": "PLACE DUCALE - COUR DE LA CRIEE",
            "liaison": "Fibre optique",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Haute",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.719964, 49.773304]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "5b14d12cf2a64b69bdf6584381bc7e78806f2a2b",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Damouzy",
            "adresse": "Rue des Paquis",
            "geo_point_2d": [49.777337, 4.7209129999999995],
            "localisation": "CAMPING DU MONT OLYMPE - SANITAIRES",
            "liaison": "Mesh",
            "code_insee": "08105",
            "internet": "ADSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.7209129999999995, 49.777337]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "a62b9d13d9eb0c880461032a7f6973df33fc63a6",
        "fields": {
            "emplacement": "Interieur",
            "commune": "Damouzy",
            "adresse": "2, Place Jacques FELIX",
            "geo_point_2d": [49.774764, 4.724162],
            "localisation": "MEDIATHEQUE VOYELLES",
            "liaison": "Fibre optique",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "R310"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.724162, 49.774764]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "9f55c573bb2f8286838d7233d047feb46fc93b92",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Damouzy",
            "adresse": "Place Ducale",
            "geo_point_2d": [49.773004, 4.721265],
            "localisation": "PLACE DUCALE - MUSEE",
            "liaison": "Fibre optique",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Haute",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.721265, 49.773004]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "82c60d77c7ac860660b2debc4f352e774e666326",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Damouzy",
            "adresse": "Cours Briand",
            "geo_point_2d": [49.770574, 4.719361],
            "localisation": "FONTAINE CHARLES DE GONZAGUE",
            "liaison": "Mesh",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.719361, 49.770574]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "c4f97ec066c13078577ac1c6445ad86d6b9f3196",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Nouzon",
            "adresse": "Corne de Soisson, Rue des Anciens d'Afrique du Nord",
            "geo_point_2d": [49.700386, 4.943135],
            "localisation": "MEDIATHEQUE Georges DELAW 2",
            "liaison": "Fibre optique",
            "code_insee": "08409",
            "internet": "VDSL",
            "densite": "Haute",
            "modele": "T310C"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.943135, 49.700386]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "9425ffb447804186ff5bf9141d0db43013636285",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Nouzon",
            "adresse": "Grande Prairie de TORCY",
            "geo_point_2d": [49.698226, 4.936549],
            "localisation": "CAMPING MUNICIPAL - SANITAIRE",
            "liaison": "Mesh",
            "code_insee": "08409",
            "internet": "ADSL",
            "densite": "Normale",
            "modele": "T310C"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.936549, 49.698226]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "05c01dd22c3fc1427894fe9e12c1c20252739abf",
        "fields": {
            "emplacement": "Interieur",
            "commune": "Damouzy",
            "adresse": "Rue de la Vieille Meuse",
            "geo_point_2d": [49.758152, 4.706408],
            "localisation": "PARC DES EXPOSITIONS - Hall A",
            "liaison": "Cuivre",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "R310"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.706408, 49.758152]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "44b764ae4dd46f6b225afba5ff60f07a3255c594",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Damouzy",
            "adresse": "Place Winston Churchill",
            "geo_point_2d": [49.772227, 4.721443],
            "localisation": "PLACE WINSTON CHURCHILL",
            "liaison": "Fibre optique",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.721443, 49.772227]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "7a7dfd79d9a2f53ad1aacdcf66dbfef52bece6ab",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Nouzon",
            "adresse": "Parking des Douves",
            "geo_point_2d": [49.701367, 4.949406],
            "localisation": "CH\u00c2TEAU FORT DE Nouzon",
            "liaison": "Cuivre",
            "code_insee": "08409",
            "internet": "ADSL",
            "densite": "Haute",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.949406, 49.701367]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "935f39e705e13e8a71d69356e8fa38535bc91696",
        "fields": {
            "emplacement": "Interieur",
            "commune": "Damouzy",
            "adresse": "Rue de la Vieille Meuse",
            "geo_point_2d": [49.758147, 4.706378],
            "localisation": "PARC DES EXPOSITIONS - Hall A",
            "liaison": "Cuivre",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Haute",
            "modele": "R510"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.706378, 49.758147]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "d89be4432d8787cb7e7c740cb98d3383cc0c74a9",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Nouzon",
            "adresse": "Cour du Ch\u00e2teau",
            "geo_point_2d": [49.701471, 4.949538],
            "localisation": "CH\u00c2TEAU FORT DE Nouzon",
            "liaison": "Cuivre",
            "code_insee": "08409",
            "internet": "ADSL",
            "densite": "Haute",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.949538, 49.701471]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "7b26ad65db65d0d6231d0612ba0d3c55f9768604",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Nouzon",
            "adresse": "Place de la Gare",
            "geo_point_2d": [49.69504, 4.930517],
            "localisation": "GARE SNCF - PARVIS",
            "liaison": "Cuivre",
            "code_insee": "08409",
            "internet": "ADSL",
            "densite": "Normale",
            "modele": "T310C"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.930517, 49.69504]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "f2b61f4ea12685277d5b9185d2e2aec77617d20d",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Damouzy",
            "adresse": "Passerelle du Mont Olympe",
            "geo_point_2d": [49.776304, 4.722447],
            "localisation": "PASSERELLE DU MONT OLYMPE",
            "liaison": "Fibre optique",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.722447, 49.776304]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "77fb68776f6b26419724e7b129e5b35efbc0c8a8",
        "fields": {
            "emplacement": "Interieur",
            "commune": "Damouzy",
            "adresse": "135, rue des Paquis",
            "geo_point_2d": [49.781057, 4.719724],
            "localisation": "CENTRE AQUATIQUE Bernard ALBIN - HALL ENTREE",
            "liaison": "Cuivre",
            "code_insee": "08105",
            "internet": "ADSL",
            "densite": "Normale",
            "modele": "R300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.719724, 49.781057]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "6d68fe0a71dd06715910168ff8b7f3b3995f292e",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Damouzy",
            "adresse": "Rue des Paquis",
            "geo_point_2d": [49.778146, 4.720006],
            "localisation": "CAMPING DU MONT OLYMPE - BASE NAUTIQUE",
            "liaison": "Cuivre",
            "code_insee": "08105",
            "internet": "ADSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.720006, 49.778146]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "08ec27402b640bd4bc045707bde5a3a3b3c85c2f",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Damouzy",
            "adresse": "Avenue Charles BOUTET",
            "geo_point_2d": [49.774526, 4.716719],
            "localisation": "METROPOLIS - NORD EST CINEMA",
            "liaison": "Fibre optique",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.716719, 49.774526]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "bff9d9ec552237bdadf7eed43ca985338de2ba92",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Damouzy",
            "adresse": "Quai Jean Charcot",
            "geo_point_2d": [49.775521, 4.721973],
            "localisation": "MUSEE ARTHUR RIMBAUD",
            "liaison": "Fibre optique",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.721973, 49.775521]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "6e3d9eab4e87481bacd871b0912bb2a237b2aab5",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Nouzon",
            "adresse": "Grande Prairie de TORCY",
            "geo_point_2d": [49.698723, 4.923538],
            "localisation": "CAMPING MUNICIPAL - ACCUEIL",
            "liaison": "Cuivre",
            "code_insee": "08409",
            "internet": "ADSL",
            "densite": "Normale",
            "modele": "T310C"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.923538, 49.698723]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "d5bd39d666e4b34b26d9fabfef2e0e72720d56d6",
        "fields": {
            "emplacement": "Interieur",
            "commune": "Damouzy",
            "adresse": "Rue du Th\u00e9\u00e2tre",
            "geo_point_2d": [49.773302, 4.718837],
            "localisation": "THEATRE MUNICIPAL",
            "liaison": "Cuivre",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "R310"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.718837, 49.773302]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "3d65b52cb1c31ce4d8296b6a34b454a7ac62724d",
        "fields": {
            "emplacement": "Int\u00e9rieur",
            "commune": "Nouzon",
            "adresse": "Corne de Soisson, Rue des Anciens d'Afrique du Nord",
            "geo_point_2d": [49.700499, 4.943193],
            "localisation": "MEDIATHEQUE Georges DELAW 1",
            "liaison": "Cuivre",
            "code_insee": "08409",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "H510"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.943193, 49.700499]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "b368d33b2835265a2e3397f22e08d43009b094d0",
        "fields": {
            "emplacement": "Interieur",
            "commune": "Damouzy",
            "adresse": "Rue de la Vieille Meuse",
            "geo_point_2d": [49.757503, 4.70703],
            "localisation": "CAISSE EPARGNE ARENA 2",
            "liaison": "Fibre optique",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "R300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.70703, 49.757503]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "5f0f4cf4eac41eabd5b018956c730e220d0acde7",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Damouzy",
            "adresse": "Place Lucien BAUCHART",
            "geo_point_2d": [49.747972, 4.724178],
            "localisation": "Place BAUCHART",
            "liaison": "Fibre optique",
            "code_insee": "08105",
            "internet": "VDSL",
            "densite": "Normale",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.724178, 49.747972]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "191a4586ccab371dfbf48dabdb0d7a2e38d4ba1b",
        "fields": {
            "emplacement": "Interieur",
            "commune": "Nouzon",
            "adresse": "Quai Paul Bert",
            "geo_point_2d": [49.693722, 4.92359],
            "localisation": "STADE Louis DUGAUGUEZ - SALLE DE PRESSE",
            "liaison": "Cuivre",
            "code_insee": "08409",
            "internet": "ADSL",
            "densite": "Normale",
            "modele": "R310"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.92359, 49.693722]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "9d37d8fa6732d37f9cd90e2400b125f30f8d2f00",
        "fields": {
            "emplacement": "Interieur",
            "commune": "Nouzon",
            "adresse": "8, Esplanade du Lac",
            "geo_point_2d": [49.69315, 4.9435009999999995],
            "localisation": "CENTRE AQUATIQUE - HALL ENTREE",
            "liaison": "Cuivre",
            "code_insee": "08409",
            "internet": "ADSL",
            "densite": "Normale",
            "modele": "R310"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.9435009999999995, 49.69315]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }, {
        "datasetid": "bornes-wifi",
        "recordid": "42df188e00e0947ab9b10fa3c6d79e51ae07bc14",
        "fields": {
            "emplacement": "Exterieur",
            "commune": "Nouzon",
            "adresse": "Place de la Halle",
            "geo_point_2d": [49.700045, 4.948255],
            "localisation": "PLACE DE LA HALLE",
            "liaison": "Fibre optique",
            "code_insee": "08409",
            "internet": "VDSL",
            "densite": "Haute",
            "modele": "T300"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [4.948255, 49.700045]
        },
        "record_timestamp": "2019-05-06T22:45:36.503+02:00"
    }
];


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_test1_test1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/test1/test1.component */ "Zho1");
/* harmony import */ var _pages_test2_test2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/test2/test2.component */ "BATo");
/* harmony import */ var _pages_test3_test3_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/test3/test3.component */ "HMtw");
/* harmony import */ var _pages_test4_test4_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/test4/test4.component */ "IZXN");








function AppComponent_app_test1_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-test1");
} }
function AppComponent_app_test2_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-test2");
} }
function AppComponent_app_test3_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-test3");
} }
function AppComponent_app_test4_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-test4");
} }
class AppComponent {
    constructor() {
        this.test = '';
        this.title = 'ma-data-grid-test';
    }
    disabledButton(f) {
        if (this.test != f)
            return null;
        return 'disabled';
    }
    ngOnInit() {
        // console.log(window.location.search);
        if (window.location.search.match(/test4/)) {
            this.test = 'test4';
        }
        else if (window.location.search.match(/test2/)) {
            this.test = 'test2';
        }
        else if (window.location.search.match(/test3/)) {
            this.test = 'test3';
        }
        else {
            this.test = 'test1';
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 21, vars: 7, consts: [[2, "margin", "50px"], [2, "margin", "15px", "width", "100%"], ["href", "#", 1, "waves-effect", "waves-light", "btn-small", 3, "click"], [1, "material-icons", "left"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_2_listener() { return ctx.test = "test1"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "star_half");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "pagination=\"false\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_7_listener() { return ctx.test = "test2"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "pagination=\"true\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_12_listener() { return ctx.test = "test3"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "filter_list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "External filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppComponent_app_test1_16_Template, 1, 0, "app-test1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_app_test2_17_Template, 1, 0, "app-test2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_app_test3_18_Template, 1, 0, "app-test3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AppComponent_app_test4_19_Template, 1, 0, "app-test4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.disabledButton("test1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.disabledButton("test2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.disabledButton("test3"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.test == "test1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.test == "test2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.test == "test3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.test == "test4");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _pages_test1_test1_component__WEBPACK_IMPORTED_MODULE_3__["Test1Component"], _pages_test2_test2_component__WEBPACK_IMPORTED_MODULE_4__["Test2Component"], _pages_test3_test3_component__WEBPACK_IMPORTED_MODULE_5__["Test3Component"], _pages_test4_test4_component__WEBPACK_IMPORTED_MODULE_6__["Test4Component"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_test1_test1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/test1/test1.component */ "Zho1");
/* harmony import */ var _amn31_ma_data_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amn31/ma-data-grid */ "+axt");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_cell_usage_cell_usage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/cell-usage/cell-usage.component */ "znqx");
/* harmony import */ var _pages_test2_test2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/test2/test2.component */ "BATo");
/* harmony import */ var _pages_test3_test3_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/test3/test3.component */ "HMtw");
/* harmony import */ var _pages_test4_test4_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/test4/test4.component */ "IZXN");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            // Ajouter par ALAIN
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _amn31_ma_data_grid__WEBPACK_IMPORTED_MODULE_5__["MaDataGridModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_test1_test1_component__WEBPACK_IMPORTED_MODULE_4__["Test1Component"],
        _components_cell_usage_cell_usage_component__WEBPACK_IMPORTED_MODULE_7__["CellUsageComponent"],
        _pages_test2_test2_component__WEBPACK_IMPORTED_MODULE_8__["Test2Component"],
        _pages_test3_test3_component__WEBPACK_IMPORTED_MODULE_9__["Test3Component"],
        _pages_test4_test4_component__WEBPACK_IMPORTED_MODULE_10__["Test4Component"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        // Ajouter par ALAIN
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _amn31_ma_data_grid__WEBPACK_IMPORTED_MODULE_5__["MaDataGridModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_test1_test1_component__WEBPACK_IMPORTED_MODULE_4__["Test1Component"],
                    _components_cell_usage_cell_usage_component__WEBPACK_IMPORTED_MODULE_7__["CellUsageComponent"],
                    _pages_test2_test2_component__WEBPACK_IMPORTED_MODULE_8__["Test2Component"],
                    _pages_test3_test3_component__WEBPACK_IMPORTED_MODULE_9__["Test3Component"],
                    _pages_test4_test4_component__WEBPACK_IMPORTED_MODULE_10__["Test4Component"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    // Ajouter par ALAIN
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _amn31_ma_data_grid__WEBPACK_IMPORTED_MODULE_5__["MaDataGridModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Zho1":
/*!************************************************!*\
  !*** ./src/app/pages/test1/test1.component.ts ***!
  \************************************************/
/*! exports provided: Test1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test1Component", function() { return Test1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _amn31_ma_data_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amn31/ma-data-grid */ "+axt");
/* harmony import */ var src_app_components_cell_usage_cell_usage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/cell-usage/cell-usage.component */ "znqx");
/* harmony import */ var src_app_services_wifi_points_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/wifi-points.service */ "monB");






class Test1Component {
    constructor(wifiPointsService) {
        this.wifiPointsService = wifiPointsService;
        this.limit = 10;
        this.LoadError = '';
        /*
        {
          "emplacement": "Exterieur",
          "commune": "CHARLEVILLE-MEZIERES",
          "geo_point_2d": [
            49.760024,
            4.719275
          ],
          "timestamp": "2019-05-06T22:45:36.503+02:00"
          "localisation": "HÔTEL DE VILLE MEZIERES 2",
          "liaison": "Cuivre",
          "code_insee": "08105",
          "internet": "VDSL",
          "densite": "Normale",
          "modele": "T300",
          "address": "Place de l'Hôtel de Ville",
          "lat": 4.719275,
          "lng": 49.760024,
          "id": 1,
          "hasShortAddress": false
        }
        */
        this.columns = [
            { prop: 'id', title: 'Id', sorted: true, dataType: 'number' },
            { prop: 'commune',
                title: 'City', sorted: true, dataType: 'string', cssClass: 'td_small',
                extFilter: true, extFilterSelected: true },
            {
                prop: 'usage', title: 'Usage', sorted: true, dataType: 'number',
                useTemplate: src_app_components_cell_usage_cell_usage_component__WEBPACK_IMPORTED_MODULE_2__["CellUsageComponent"]
            },
            { prop: 'isNew', title: 'New', extFilter: true, sorted: true, dataType: 'boolean' },
            { prop: 'lng', title: 'Lng', extFilter: true, sorted: true, dataType: 'number' },
            {
                prop: 'timestamp', title: 'Recorded', sorted: true,
                dataType: 'date'
            },
            {
                prop: 'liaison', title: 'Link', sorted: true,
                isRowHTML: true,
            },
            {
                prop: 'internet', title: 'Type', sorted: true,
                pipe: this.formatData
            },
            {
                prop: 'internet', title: 'Internet', sorted: true,
                headFilter: [{
                        value: 'VDSL',
                        operator: '=',
                        label: 'vdsl'
                    }, {
                        value: 'ADSL',
                        operator: '=',
                        label: 'adsl'
                    }]
            },
            //   
            { prop: 'modele', title: 'Model', sorted: true, extFilter: true, extFilterSelected: false }
        ];
    }
    ngOnInit() {
        console.log("ngOnInit");
        /* Initialize datas once */
        this.loadPage();
    }
    loadPage() {
        console.log("this._loadPage()");
        this.LoadError = '';
        // Store data in this.temp and this.rows
        this.wifiPointsService.getAllPoints().then((data) => {
            this.temp = this.rows = data;
            console.log(data);
            // Create header filters for 'Model' and 'Link'
            // according to datas found
            this.autoHeaderFilter('modele');
            this.autoHeaderFilter('liaison');
        }).catch(err => {
        });
    }
    /**
     * Create options headFilter according to distinct values found in datas:
     *
     *  this.columns.{field}.headFilter: [
     *    {
            value: {field_value},
            operator: '=',
            label: {fieldname}
          },
          ...
     *
     * @param {string} field
     * @memberof Test1Component
     */
    autoHeaderFilter(field) {
        this.wifiPointsService.getDistinctValues(field).then((values) => {
            console.log('MaDataGridHeadFilter ' + field, values);
            let d = [];
            values.forEach(element => {
                d.push({ value: element, operator: '=', label: element });
            });
            this.columns.find(elem => elem.prop === field).headFilter = d;
        });
    }
    /**
     * Field named 'Type' will be first letter of field value 'internet'
     *
     * @param {string} value
     * @param {any} row
     * @param {any} col
     * @return {*}  {string}
     * @memberof Test1Component
     */
    formatData(value, row, col) {
        //console.log("formatData "+ row[col.prop], col)
        /*
        if (col.prop == 'internet' && 'ADSL' == value) {
          return '('+row['internet']+')';
        }*/
        if (value)
            return value.split('')[0];
    }
    SelectRowOrCell(event) {
        console.log('SelectRowOrCell', event);
        setTimeout(() => {
            this.datagrid.resetSelection();
        }, 5000);
    }
    extUpdateFilter(event) {
        //const val = event.target.value.toLowerCase();
        const val = event.text.toLowerCase();
        // filter our data
        const temp = this.temp.filter(function (d) {
            if (!val) {
                return true;
            }
            for (var f of event.fields) {
                if (d[f] && d[f].toLowerCase().indexOf(val) !== -1)
                    return true;
            }
        });
        // update the rows
        this.rows = temp;
        console.log("DATA EXTERNAL FILTER ", this.rows);
    }
    updateFilter(event) {
        console.log('updateFilter', event.where);
        console.log("DATA HEADER FILTER", event.data);
    }
}
Test1Component.ɵfac = function Test1Component_Factory(t) { return new (t || Test1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_wifi_points_service__WEBPACK_IMPORTED_MODULE_3__["WifiPointsService"])); };
Test1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Test1Component, selectors: [["app-test1"]], viewQuery: function Test1Component_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_amn31_ma_data_grid__WEBPACK_IMPORTED_MODULE_1__["MaDataGridComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.datagrid = _t.first);
    } }, decls: 2, vars: 6, consts: [["canSelect", "cell", 3, "pagination", "columns", "rows", "limit", "extFilter", "headFilter", "select", "extFilterChange", "filterChange"], ["datagrid", ""]], template: function Test1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ma-data-grid", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function Test1Component_Template_ma_data_grid_select_0_listener($event) { return ctx.SelectRowOrCell($event); })("extFilterChange", function Test1Component_Template_ma_data_grid_extFilterChange_0_listener($event) { return ctx.extUpdateFilter($event); })("filterChange", function Test1Component_Template_ma_data_grid_filterChange_0_listener($event) { return ctx.updateFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pagination", false)("columns", ctx.columns)("rows", ctx.rows)("limit", 10)("extFilter", false)("headFilter", true);
    } }, directives: [_amn31_ma_data_grid__WEBPACK_IMPORTED_MODULE_1__["MaDataGridComponent"]], styles: [".td_small {\r\n    font-size: x-small;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCOztBQUV0QiIsImZpbGUiOiJ0ZXN0MS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi9kZWVwLyAudGRfc21hbGwge1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Test1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-test1',
                templateUrl: './test1.component.html',
                styleUrls: ['./test1.component.css']
            }]
    }], function () { return [{ type: src_app_services_wifi_points_service__WEBPACK_IMPORTED_MODULE_3__["WifiPointsService"] }]; }, { datagrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_amn31_ma_data_grid__WEBPACK_IMPORTED_MODULE_1__["MaDataGridComponent"], { static: true }]
        }] }); })();


/***/ }),

/***/ "monB":
/*!*************************************************!*\
  !*** ./src/app/services/wifi-points.service.ts ***!
  \*************************************************/
/*! exports provided: WifiPointsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WifiPointsService", function() { return WifiPointsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _amn31_filter_multiple_conditions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amn31/filter-multiple-conditions */ "6fjX");
/* harmony import */ var _amn31_filter_multiple_conditions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_amn31_filter_multiple_conditions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bornes_wifi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../bornes-wifi */ "Se+V");





class WifiPointsService {
    constructor() {
        this.data = [];
    }
    getDistinctValues(field) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.data.length == 0) {
                yield this.getAllPoints().then(d => {
                    return this.getDistinctValues(field);
                });
            }
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    var v = [];
                    for (var o of this.data) {
                        if (!(v.find((v) => v == o[field]))) {
                            v.push(o[field]);
                        }
                    }
                    resolve(v);
                }, 200);
            });
        });
    }
    /**
     * Return array of object
     * {
        "emplacement": "Exterieur",
        "commune": "CHARLEVILLE-MEZIERES",
        "geo_point_2d": [
          49.760024,
          4.719275
        ],
        "localisation": "HÔTEL DE VILLE MEZIERES 2",
        "liaison": "<b>Cuivre</b>",
        "code_insee": "08105",
        "internet": "VDSL",
        "densite": "Normale",
        "modele": "T300",
        "address": null,
        "timestamp": "2021-01-01",
        "lat": 4.719275,
        "lng": 49.760024,
        "id": 1,
        "hasShortAddress": false
       }
     *
     * @return {*}  {Promise<any[]>}
     * @memberof WifiPointsService
     */
    getAllPoints() {
        /*
           {
         "datasetid": "bornes-wifi",
         "recordid": "05bd10a8c2df051bb1165c6247a93abb319e81c3",
         "fields": {
           "emplacement": "Exterieur",
           "commune": "CHARLEVILLE-MEZIERES",
           "adresse": "Place de l'H\u00f4tel de Ville",
           "geo_point_2d": [49.760024, 4.719275],
           "localisation": "H\u00d4TEL DE VILLE MEZIERES 2",
           "liaison": "Cuivre",
           "code_insee": "08105",
           "internet": "VDSL",
           "densite": "Normale",
           "modele": "T300"
         },
         "geometry": {
           "type": "Point",
           "coordinates": [4.719275, 49.760024]
         },
         "record_timestamp": "2019-05-06T22:45:36.503+02:00"
         */
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                var d = [];
                for (let item of _bornes_wifi__WEBPACK_IMPORTED_MODULE_3__["POINTS"]) {
                    // Clone object
                    let o = JSON.parse(JSON.stringify(item));
                    o.fields['address'] = o.fields.adresse;
                    if (o.fields['address']) {
                        o.fields['usage'] = o.fields.adresse.length * 2;
                        if (o.fields['usage'] > 100)
                            o.fields['usage'] = 100;
                    }
                    o.fields['timestamp'] = new Date(new Date().getTime() - ((d.length + 1) * 3600 * 24 * 160 * 100)).toISOString().replace(/T.+/, '');
                    delete o.fields['adresse'];
                    o.fields['lat'] = o.geometry.coordinates[0];
                    o.fields['lng'] = o.geometry.coordinates[1];
                    o.fields['id'] = d.length + 1;
                    o.fields['isNew'] = (o.fields['address'] && o.fields['address'].length <= 17);
                    if (o.fields['address'] && o.fields['address'].length <= 13) {
                        o.fields['isNew'] = null;
                    }
                    if (o.fields.liaison.match(/fibre/i)) {
                        o.fields.liaison = 'Fibre';
                    }
                    if (o.fields.liaison == 'Cuivre') {
                        o.fields.liaison = '<b>Cuivre</b>';
                    }
                    if (o.fields['address'] && o.fields['address'].length > 25) {
                        o.fields['address'] = null;
                        o.fields['lng'] = null;
                        o.fields['lat'] = null;
                    }
                    if (d.length == 1) {
                        delete o.fields['lng'];
                        delete o.fields['address'];
                        delete o.fields['liaison'];
                    }
                    d.push(o.fields);
                }
                this.data = d;
                resolve(d);
            }, 500);
        });
    }
    /**
     *  this.wifiPointsService.getPoints({
            where: [ ['id','<',43]],
            offset: 0,
            limit: 10,
            sort: {field: 'id', reverse: true}
          }).then(data => {
          console.log('DATA',data);
        })
    
        Return array of object
      * {
          "emplacement": "Exterieur",
          "commune": "CHARLEVILLE-MEZIERES",
          "geo_point_2d": [
            49.760024,
            4.719275
          ],
          "localisation": "HÔTEL DE VILLE MEZIERES 2",
          "liaison": "<b>Cuivre</b>",
          "code_insee": "08105",
          "internet": "VDSL",
          "densite": "Normale",
          "modele": "T300",
          "address": null,
          "timestamp": "2021-01-01",
          "lat": 4.719275,
          "lng": 49.760024,
          "id": 1,
          "hasShortAddress": false
         }
     *
     * @param {*} options
     * @return {*}  {Promise<any>}
     * @memberof WifiPointsService
     */
    getPoints(options) {
        console.log(options);
        return new Promise((resolve, reject) => {
            this.getAllPoints().then(d => {
                let offset = 0;
                if (options.offset) {
                    offset = options.offset;
                }
                let r = _amn31_filter_multiple_conditions__WEBPACK_IMPORTED_MODULE_1__["MaFilter"].FilterByConditions(options.where, d, options.sort);
                let counter = r.length;
                r.splice(offset + options.limit);
                r.splice(0, offset);
                resolve({ rows: r, count: counter });
            });
        });
    }
}
WifiPointsService.ɵfac = function WifiPointsService_Factory(t) { return new (t || WifiPointsService)(); };
WifiPointsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: WifiPointsService, factory: WifiPointsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](WifiPointsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "znqx":
/*!***************************************************************!*\
  !*** ./src/app/components/cell-usage/cell-usage.component.ts ***!
  \***************************************************************/
/*! exports provided: CellUsageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellUsageComponent", function() { return CellUsageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CellUsageComponent {
    constructor() {
        this.style = '';
    }
    ngOnInit() {
        // console.log(this.data);
        this.style = "width: " + this.data.usage + 'px;';
        if (this.data.usage > 90) {
            this.style += 'background-color: red';
        }
        else if (this.data.usage > 49) {
            this.style += 'background-color: #e69900';
        }
        else {
            this.style += 'background-color: #66ff33';
        }
    }
}
CellUsageComponent.ɵfac = function CellUsageComponent_Factory(t) { return new (t || CellUsageComponent)(); };
CellUsageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CellUsageComponent, selectors: [["app-cell-usage"]], decls: 5, vars: 4, consts: [[1, "cell_usage"]], template: function CellUsageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.usage, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.style);
    } }, styles: [".cell_usage[_ngcontent-%COMP%] {\r\n\tmax-height: 8px;\r\n\tdisplay: inline-block;\r\n\tvertical-align: middle;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlbGwtdXNhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0NBQ0MsZUFBZTtDQUNmLHFCQUFxQjtDQUNyQixzQkFBc0I7QUFDdkIiLCJmaWxlIjoiY2VsbC11c2FnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uY2VsbF91c2FnZSB7XHJcblx0bWF4LWhlaWdodDogOHB4O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CellUsageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cell-usage',
                template: `<div>
        <small> {{data.usage}}% </small>
        <div class="cell_usage" style="{{style}}">&nbsp;</div>

      </div>`,
                styleUrls: ['./cell-usage.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map