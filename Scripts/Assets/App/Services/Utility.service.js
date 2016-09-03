(function (app) {
    'use strict';

    app.factory('UtilityService', UtilityService);

    UtilityService.$inject = ['$http', '$q', 'notificationService'];

    function UtilityService($http, $q, notificationService) {
        var service = {
            $http: $http,
            $q: $q,
            notificationService: notificationService
        };

        return service;

    }
})(angular.module('YC.Services'));