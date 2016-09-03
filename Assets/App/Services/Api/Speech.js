(function (app) {
    'use strict';

    app.factory('Speech', Speech);

    Speech.$inject = ['SharedApiService'];

    function Speech(SharedApiService) {
        var service = {
            Browse: Browse,//查詢文章 null 則顯示全部
            Recent:Recent // 
        };

        return service;

        ///////////////////////////

        /**
         * @description 查詢演講 null 則顯示全部
         * @param data: 查詢參數 { page: 1, pageSize: 4, order: 0, topicID: '' }
         */
        function Browse(data) {
            var resource = SharedApiService.GetRestResouces('Speech').all('Browse');
            var action = resource.post(data);
            return SharedApiService.HandlePromise(action);
        }

        /**
         * @description 取得自訂演講
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