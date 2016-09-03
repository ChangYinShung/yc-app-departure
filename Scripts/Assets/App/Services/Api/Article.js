(function (app) {
    'use strict';

    app.factory('Article', Article);

    Article.$inject = ['Restangular', 'notificationService', 'SharedApiService'];

    function Article(Restangular, notificationService, SharedApiService) {
        var vm = this;
        var service = {
            Browse: Browse,//查詢文章 null 則顯示全部
            Recent: Recent // 最近文章
        };
        return service;

        ///////////////////////////

        /**
         * @description 查詢文章 null 則顯示全部
         * @param data: 查詢參數 { page: 1, pageSize: 4, order: 0, topicID: '' }
         */
        function Browse(data) {
            var resouces = SharedApiService.GetRestResouces('Article');
            var query = resouces.all('Browse').post(data);
            return SharedApiService.HandlePromise(query);

        }
        /**
        * @description 取得自訂文章
        * @param count 數量(Int)
        * @param orderBy 排序(Int)  0 : 發布日期 1:閱讀次數
        */
        function Recent(count, orderBy) {
            var data = {
                page: 1,
                pageSize: parseInt(count),
                order: orderBy
            }
            return Browse(data);
        }
    }
})(angular.module('YC.Services.Api'));