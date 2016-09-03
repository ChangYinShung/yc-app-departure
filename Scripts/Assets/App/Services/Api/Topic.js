/**
* @author 豐碩資訊有限公司
* @description  Api
* CodeSnappet v0.1
*/

(function (app) {
    'use strict';

    app.factory('Topic', Topic);

    Topic.$inject = ['SharedApiService'];

    function Topic(SharedApiService) {
        var service = {
            GET: GET
        };

        return service;

        ///////////////////////////

        /**
         * @description 顯示全部
         */
        function GET() {
            var resource = SharedApiService.GetRestResouces('Topic');
            var action = resource.getList();
            return SharedApiService.HandlePromise(action);
        }
    }
})(angular.module('YC.Services.Api'));