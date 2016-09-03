///angular-toastr
///Require loadCss
(function (app) {
    'use strict';
    app.factory('notificationService', notificationService);
    notificationService.$inject = ['toastr'];
    function notificationService(toastr) {
        var service = {
            displaySuccess: displaySuccess,
            displayError: displayError,
            displayWarning: displayWarning,
            displayInfo: displayInfo
        };

        return service;

        function displaySuccess(message, title) {
            toastr.success(message, title);
        }

        function displayError(error, title) {
            if (Array.isArray(error,title)) {
                error.forEach(function (err) {
                    toastr.error(err);
                });
            } else {
                toastr.error(error,title);
            }
        }

        function displayWarning(message, title) {
            toastr.warning(message,title);
        }

        function displayInfo(message, title) {
            toastr.info(message,title);
        }
    }

})(angular.module('YC.Services'));