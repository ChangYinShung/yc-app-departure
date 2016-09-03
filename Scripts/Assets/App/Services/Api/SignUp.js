

(function (app) {
    'use strict';

    app.factory('SignUp', SignUp);

    SignUp.$inject = ['$q', '$http', 'Restangular', 'notificationService', '$odataresource'];

    function SignUp($q, $http, Restangular, notificationService, $odataresource) {
        var vm = this;
        var apiUrl = Root + 'api/SignUp/';
        var service = {
            GetCreateModel: GetCreateModel,//取得建立資料
            GetByID: GetByID,//取得ID
            GetAll: GetAll,//取得全部
            SaveOrUpdate: SaveOrUpdate,//新增或修改
            Delete: Delete//刪除
        };
        function handlePromise(promise) {
            return promise.then(function (json) {
                return json.data;
            }, function (json) {
                notificationService.displayError("發生錯誤 :  " + json.data.Message);
                return json;
            });
        }

        function GetCreateModel() {
            var url = apiUrl + 'CreateModel';
            var query = $http.get(url);
            return handlePromise(query);
        }
        function GetByID(id) {
            var url = apiUrl + id;
            var query = $http.get(url);
            return handlePromise(query);
        }
        function GetAll() {
            var url = apiUrl;
            var query = $http.get(url);
            return handlePromise(query);
        }

        function SaveOrUpdate(data) {
            var url = apiUrl;
            var query = $http.post(url,data);
            return handlePromise(query);
        }
        function Delete(id) {
            var url = apiUrl + id;
            var query = $http.delete(url);
            return handlePromise(query);
        }


        return service;

    }
})(angular.module('YC.Services.Api'));