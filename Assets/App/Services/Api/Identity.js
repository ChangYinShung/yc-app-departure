(function (app) {
    'use strict';

    app.factory('Identity', Identity);

    Identity.$inject = ['$http','SharedApiService'];

    function Identity($http,SharedApiService) {
        var service = {
            GetCurrent: GetCurrent,
            UpdateCurrent: UpdateCurrent
        };

        
        ///////////////////////////

        /**
         * @description 目前使用者資料
         */
        function GetCurrent() {
            
            var url = SharedApiService.GetApiUrl('Identity/Current');
            var api = $http.get(url);
            return SharedApiService.HandlePromise(api);
        }
        /**
         * @description 編輯目前使用者資料
         */
        function UpdateCurrent(data) {
            var url = SharedApiService.GetApiUrl('Identity/Current');
            var api = $http.put(url, data);
            return SharedApiService.HandlePromise(api);

        }
        return service;
    }
})(angular.module('YC.Services.Api'));