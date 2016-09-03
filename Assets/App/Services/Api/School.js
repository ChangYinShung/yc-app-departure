/**
* @author 豐碩資訊有限公司
* @description  Api
* CodeSnappet v0.1
*/

(function (app) {
    'use strict';

    app.factory('School', School);

    School.$inject = ['SharedApiService'];

    function School(SharedApiService) {
        var service = {
            List: GET,
            GetByID:GetByID
        };

        return service;

        ///////////////////////////

        /**
         * @description 顯示全部
         */
        function GET() {
            var resource = SharedApiService.GetRestResouces('School');
            var action = resource.getList();
            return SharedApiService.HandlePromise(action);
        }
        /**
         * @description 取得學校資訊
         * @param {string} SchoolID 學校ID
         */
        function GetByID(SchoolID) {
            var resource = SharedApiService.GetRestResouces('School').one('', SchoolID);
            var action = resource.get();
            return SharedApiService.HandlePromise(action);
        }
    }
})(angular.module('YC.Services.Api'));