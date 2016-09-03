(function (app) {
    'use strict';


    app.factory('helperService', helperService);

    helperService.$inject = ['$log'];

    function helperService($log) {
        var service = {
            isUndefinedOrNull: isUndefinedOrNull
        };

        return service;

        function isUndefinedOrNull(obj) {
            return !angular.isDefined(obj) || obj === null;
        }
    }
})(angular.module('YC.Services'));