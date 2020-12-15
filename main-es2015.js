(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart/chart.component */ "./src/app/chart/chart.component.ts");
/* harmony import */ var _clarity_tree_clarity_tree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clarity-tree/clarity-tree.component */ "./src/app/clarity-tree/clarity-tree.component.ts");
/* harmony import */ var _kendo_tree_kendo_tree_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kendo-tree/kendo-tree.component */ "./src/app/kendo-tree/kendo-tree.component.ts");







const routes = [
    { path: 'clarity', component: _clarity_tree_clarity_tree_component__WEBPACK_IMPORTED_MODULE_3__["ClarityTreeComponent"] },
    { path: 'kendo', component: _kendo_tree_kendo_tree_component__WEBPACK_IMPORTED_MODULE_4__["KendoTreeComponent"] },
    { path: 'chart', component: _chart_chart_component__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'h5-tree-compare';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 0, consts: [["role", "tablist", 1, "nav"], ["role", "presentation", 1, "nav-item"], ["id", "tab1", "type", "button", "routerLink", "/clarity", "routerLinkActive", "active", 1, "btn", "btn-link", "nav-link"], ["id", "tab2", "type", "button", "routerLink", "/kendo", "routerLinkActive", "active", 1, "btn", "btn-link", "nav-link"], ["id", "tab3", "type", "button", "routerLink", "/chart", "routerLinkActive", "active", 1, "btn", "btn-link", "nav-link"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Clarity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Kendo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _progress_kendo_angular_treeview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-treeview */ "./node_modules/@progress/kendo-angular-treeview/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _kendo_tree_kendo_tree_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./kendo-tree/kendo-tree.component */ "./src/app/kendo-tree/kendo-tree.component.ts");
/* harmony import */ var _clarity_tree_clarity_tree_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./clarity-tree/clarity-tree.component */ "./src/app/clarity-tree/clarity-tree.component.ts");
/* harmony import */ var _tree_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tree-data.service */ "./src/app/tree-data.service.ts");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/__ivy_ngcc__/fesm2015/highcharts-angular.js");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chart/chart.component */ "./src/app/chart/chart.component.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_tree_data_service__WEBPACK_IMPORTED_MODULE_10__["TreeDataService"], { provide: _tree_data_service__WEBPACK_IMPORTED_MODULE_10__["TREE_NODES"], useValue: '1000' }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _progress_kendo_angular_treeview__WEBPACK_IMPORTED_MODULE_7__["TreeViewModule"],
            highcharts_angular__WEBPACK_IMPORTED_MODULE_11__["HighchartsChartModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _kendo_tree_kendo_tree_component__WEBPACK_IMPORTED_MODULE_8__["KendoTreeComponent"],
        _clarity_tree_clarity_tree_component__WEBPACK_IMPORTED_MODULE_9__["ClarityTreeComponent"],
        _chart_chart_component__WEBPACK_IMPORTED_MODULE_12__["ChartComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _progress_kendo_angular_treeview__WEBPACK_IMPORTED_MODULE_7__["TreeViewModule"],
        highcharts_angular__WEBPACK_IMPORTED_MODULE_11__["HighchartsChartModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _kendo_tree_kendo_tree_component__WEBPACK_IMPORTED_MODULE_8__["KendoTreeComponent"],
                    _clarity_tree_clarity_tree_component__WEBPACK_IMPORTED_MODULE_9__["ClarityTreeComponent"],
                    _chart_chart_component__WEBPACK_IMPORTED_MODULE_12__["ChartComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _progress_kendo_angular_treeview__WEBPACK_IMPORTED_MODULE_7__["TreeViewModule"],
                    highcharts_angular__WEBPACK_IMPORTED_MODULE_11__["HighchartsChartModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ],
                providers: [_tree_data_service__WEBPACK_IMPORTED_MODULE_10__["TreeDataService"], { provide: _tree_data_service__WEBPACK_IMPORTED_MODULE_10__["TREE_NODES"], useValue: '1000' }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/chart/chart.component.ts":
/*!******************************************!*\
  !*** ./src/app/chart/chart.component.ts ***!
  \******************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/__ivy_ngcc__/fesm2015/highcharts-angular.js");






function ChartComponent_highcharts_chart_13_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "highcharts-chart", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateChange", function ChartComponent_highcharts_chart_13_Template_highcharts_chart_updateChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.updateFlag = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx_r0.Highcharts)("constructorType", ctx_r0.chartConstructor)("options", ctx_r0.chartOptions)("callbackFunction", ctx_r0.chartCallback)("update", ctx_r0.updateFlag)("oneToOne", ctx_r0.oneToOneFlag);
} }
class ChartComponent {
    constructor(http) {
        this.http = http;
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_1__; // required
        this.chartConstructor = 'chart'; // optional string, defaults to 'chart'
        this.chartOptions = {
            series: [],
            title: {
                text: 'Render Times for Clarity and Kendo Tree Views'
            },
            yAxis: {
                title: {
                    text: 'Time To Render (ms)'
                },
                labels: {
                    formatter: function () {
                        return Math.round(this.value) + 'ms';
                    }
                }
            },
            xAxis: {
                title: {
                    text: 'Number of Nodes'
                },
                categories: ['1000', '3000', '5000', '10000'],
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
        }; // required
        this.chartCallback = function (chart) { }; // optional function, defaults to null
        this.updateFlag = false; // optional boolean
        this.oneToOneFlag = true; // optional boolean, defaults to false
        this.runOutsideAngular = false; // optional boolean, defaults to false
    }
    ngOnInit() {
        this.http.get('assets/data.json').subscribe((results) => {
            const kendoCreate = [];
            const clarityCreate = [];
            const kendoExpand = [];
            const clarityExpand = [];
            results.forEach(result => {
                result.count = parseInt(result.count);
                if (result.type === 'Clarity') {
                    if (result.expand) {
                        clarityExpand.push(result);
                    }
                    else {
                        clarityCreate.push(result);
                    }
                }
                else {
                    if (result.expand) {
                        kendoExpand.push(result);
                    }
                    else {
                        kendoCreate.push(result);
                    }
                }
            });
            console.log(kendoCreate, kendoExpand, clarityExpand, clarityCreate);
            console.log(kendoCreate.map(value => value.time));
            this.chartOptions.series = [
                {
                    name: 'Kendo Create',
                    type: 'line',
                    data: kendoCreate.sort((a, b) => a.count - b.count).map(value => value.time)
                },
                {
                    name: 'Kendo Expand',
                    type: 'line',
                    data: kendoExpand.sort((a, b) => a.count - b.count).map(value => value.time)
                },
                {
                    name: 'Clarity Create',
                    type: 'line',
                    data: clarityCreate.sort((a, b) => a.count - b.count).map(value => value.time)
                },
                {
                    name: 'Clarity Expand',
                    type: 'line',
                    data: clarityExpand.sort((a, b) => a.count - b.count).map(value => value.time)
                },
            ];
        });
        this.updateFlag = true;
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartComponent, selectors: [["app-chart"]], decls: 14, vars: 1, consts: [["style", "width: 100%; height: 400px; display: block;", 3, "Highcharts", "constructorType", "options", "callbackFunction", "update", "oneToOne", "updateChange", 4, "ngIf"], [2, "width", "100%", "height", "400px", "display", "block", 3, "Highcharts", "constructorType", "options", "callbackFunction", "update", "oneToOne", "updateChange"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kendo Clarity Tree Comparison");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "There are 4 series of tests run, each with different total nodes. Each test is run with 1000, 3000, 5000, and 10000 nodes. This test is setup with both using a basic asynchronos tree view with the same numer of nodes and nothing else.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Clarity Create - This test calculates the total time to render a Clarity tree with a certain numer of top level nodes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Kendo Create - This test calculates the total time to render a Kendo tree with a certain numer of top level nodes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Clarity Expand - This test calculates the total time to render a Clarity tree and then expand the first level with, each with a certain numer of top level nodes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Kendo Expand - This test calculates the total time to render a Kendo tree and then expand the first level with, each with a certain numer of top level nodes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ChartComponent_highcharts_chart_13_Template, 1, 6, "highcharts-chart", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chartOptions.series.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], highcharts_angular__WEBPACK_IMPORTED_MODULE_4__["HighchartsChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chart',
                templateUrl: './chart.component.html',
                styleUrls: ['./chart.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/clarity-tree/clarity-tree.component.ts":
/*!********************************************************!*\
  !*** ./src/app/clarity-tree/clarity-tree.component.ts ***!
  \********************************************************/
/*! exports provided: ClarityTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClarityTreeComponent", function() { return ClarityTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tree_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tree-data.service */ "./src/app/tree-data.service.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ClarityTreeComponent_clr_tree_node_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-tree-node", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrExpanded", item_r1.id === 1 && ctx_r0.expand === true)("clrExpandable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.text, " ");
} }
class ClarityTreeComponent {
    constructor(service) {
        this.service = service;
        this.data = this.service.getItems();
        this.expand = false;
        this.fetchChildren = (node) => this.service.getItems(node);
        this.hasChildren = (node) => true;
        // setTimeout(() => {
        //   this.expand = true;
        // }, 5000);
    }
}
ClarityTreeComponent.ɵfac = function ClarityTreeComponent_Factory(t) { return new (t || ClarityTreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tree_data_service__WEBPACK_IMPORTED_MODULE_1__["TreeDataService"])); };
ClarityTreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClarityTreeComponent, selectors: [["app-clarity-tree"]], decls: 5, vars: 6, consts: [[3, "clrLazy"], [3, "clrExpanded", "clrExpandable", 4, "clrRecursiveFor", "clrRecursiveForOf", "clrRecursiveForGetChildren"], [3, "clrExpanded", "clrExpandable"]], template: function ClarityTreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Clarity Tree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "clr-tree", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ClarityTreeComponent_clr_tree_node_3_Template, 2, 3, "clr-tree-node", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrLazy", true)("@.disabled", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrRecursiveForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.data))("clrRecursiveForGetChildren", ctx.fetchChildren);
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrTree"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrRecursiveForOf"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrTreeNode"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsYXJpdHktdHJlZS9jbGFyaXR5LXRyZWUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClarityTreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clarity-tree',
                templateUrl: './clarity-tree.component.html',
                styleUrls: ['./clarity-tree.component.css'],
            }]
    }], function () { return [{ type: _tree_data_service__WEBPACK_IMPORTED_MODULE_1__["TreeDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/kendo-tree/kendo-tree.component.ts":
/*!****************************************************!*\
  !*** ./src/app/kendo-tree/kendo-tree.component.ts ***!
  \****************************************************/
/*! exports provided: KendoTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KendoTreeComponent", function() { return KendoTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tree_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tree-data.service */ "./src/app/tree-data.service.ts");
/* harmony import */ var _progress_kendo_angular_treeview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/kendo-angular-treeview */ "./node_modules/@progress/kendo-angular-treeview/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





class KendoTreeComponent {
    constructor(service) {
        this.service = service;
        this.data = this.service.getItems();
        this.expand = false;
        this.fetchChildren = (node) => this.service.getItems();
        this.hasChildren = (node) => true;
        this.isExpanded = (item, index) => {
            return index === "0" && this.expand;
        };
        // setTimeout(() => {
        //   this.expanded = true;
        // }, 5000);
    }
}
KendoTreeComponent.ɵfac = function KendoTreeComponent_Factory(t) { return new (t || KendoTreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tree_data_service__WEBPACK_IMPORTED_MODULE_1__["TreeDataService"])); };
KendoTreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KendoTreeComponent, selectors: [["app-kendo-tree"]], decls: 4, vars: 6, consts: [["kendoTreeViewExpandable", "", "textField", "text", 3, "nodes", "isExpanded", "children", "hasChildren"]], template: function KendoTreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kendo Tree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "kendo-treeview", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nodes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.data))("isExpanded", ctx.isExpanded)("children", ctx.fetchChildren)("hasChildren", ctx.hasChildren);
    } }, directives: [_progress_kendo_angular_treeview__WEBPACK_IMPORTED_MODULE_2__["TreeViewComponent"], _progress_kendo_angular_treeview__WEBPACK_IMPORTED_MODULE_2__["ExpandDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tlbmRvLXRyZWUva2VuZG8tdHJlZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KendoTreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-kendo-tree',
                templateUrl: './kendo-tree.component.html',
                styleUrls: ['./kendo-tree.component.css'],
            }]
    }], function () { return [{ type: _tree_data_service__WEBPACK_IMPORTED_MODULE_1__["TreeDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/tree-data.service.ts":
/*!**************************************!*\
  !*** ./src/app/tree-data.service.ts ***!
  \**************************************/
/*! exports provided: TREE_NODES, TreeDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TREE_NODES", function() { return TREE_NODES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDataService", function() { return TreeDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



const TREE_NODES = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('1000');
class TreeDataService {
    constructor(count) {
        this.count = count;
    }
    getItems(node) {
        const items = [];
        for (let i = 1; i <= Number.parseInt(this.count); i++) {
            const id = (node) ? `${node.id}${i}` : i;
            items.push({ text: "Item " + i, expanded: false, id });
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(items);
    }
}
TreeDataService.ɵfac = function TreeDataService_Factory(t) { return new (t || TreeDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](TREE_NODES)); };
TreeDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TreeDataService, factory: TreeDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [TREE_NODES]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/kendo-clarity-tree/kendo-clarity-tree/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map