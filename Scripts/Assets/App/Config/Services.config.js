(function (app) {
    'use strict';
    app.config(LogConfig);
   
    app.config(RestAPI);
    app.config(StorageConfig);
    app.config(ToastrConfig);





    function LogConfig($logProvider) {
        $logProvider.debugEnabled(true);
    }


    /**
     * @description ModuleName : restangular
     * @link https://github.com/mgonto/restangular
     */
    function RestAPI(RestangularProvider) {
        RestangularProvider.setBaseUrl(Root + '/api');
    }

    /**
     * @description ModuleName: LocalStorageModule
     * @link https://github.com/grevory/angular-local-storage
     */
    function StorageConfig(localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('app')
            .setStorageType('sessionStorage')
            .setNotify(true, true);
    }

    function ToastrConfig(toastrConfig) {
        angular.extend(toastrConfig, {
            autoDismiss: false,
            containerId: 'toast-container',
            newestOnTop: true,
            positionClass: 'toast-top-right',
            preventDuplicates: false,
            preventOpenDuplicates: false,
            tapToDismiss: true,
            timeOut: 2000,
            extendedTimeOut: 500,
            progressBar: true,
        });
    }

})(angular.module('YC.Services'));