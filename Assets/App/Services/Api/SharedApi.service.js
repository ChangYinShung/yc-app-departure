(function (app) {
    'use strict';

    app.factory('SharedApiService', SharedApiService);

    SharedApiService.$inject = ['$http', '$q', 'Restangular', '$odataresource', '$odata', 'notificationService'];

    function SharedApiService($http, $q, Restangular, $odataresource, $odata, notificationService) {
        var service = {
            HandlePromise: handlePromise,
            GetApiUrl: getApiUrl,
            GetOData: getOData,
            GetRestResouces: getRestResouces
        };
        return service;

        function handlePromise(promise) {
            var defer = $q.defer();
            promise.then(success, error);
            return defer.promise;

            function success(json) {
                if (!json) { defer.resolve(); return; }
                var result;

                if (!!(json.status) && !!(json.statusText))
                    result = json.data;
                else
                    result = json;
                defer.resolve(result);
            }
            function error(json) {
                var message = '伺服器內部發生錯誤' ;
                if (!json || !json.data) {
                    defer.reject(message);
                }
                else {
                    defer.reject(json.data);
                    message = json.data.Message;
                }
                
                notificationService.displayError(message, "發生錯誤");
            }

        }
        function getOData(resourceName) {
            return $odataresource(Root + 'OData/' + resourceName).odata();
        }
        function getApiUrl(resourceName) {
            return Root + 'api/' + resourceName;
        }
        function getRestResouces(resourceName) {
            Restangular.setBaseUrl(Root + '/api');
            return Restangular.all(resourceName);

        }

    }
})(angular.module('YC.Services.Api'));