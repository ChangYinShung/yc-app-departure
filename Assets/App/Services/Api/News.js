/// <reference path="../../vendor/angular-odata-resources/odataresources.js" />

(function (app) {
    'use strict';

    app.factory('News', News);

    News.$inject = ['SharedApiService'];

    function News(SharedApiService) {
        var service = {
            GET: GET,//查詢文章 null 則顯示全部
            Recent: Recent 
        };

        return service;

        ///////////////////////////

        /**
         * @description 顯示全部公告
         */
        function GET() {
            var rest = SharedApiService.GetRestResouces('News');
            var query = rest.getList();
            return SharedApiService.HandlePromise(query);
        }

        function Recent() {
            var odata = SharedApiService.GetOData('News');//$odataresource(Root + 'OData/News/').odata();
            odata.orderBy('CreateDateTime', 'desc');
            odata.expandPredicate('School').finish();
            odata.filter('IsOpen', true).take(5)
            var query = odata.query();
            return SharedApiService.HandlePromise(query.$promise);
        }
    }
})(angular.module('YC.Services.Api'));