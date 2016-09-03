(function (app) {
    'use strict';
    app.config(OcLazyLoadconfig);
    function OcLazyLoadconfig($ocLazyLoadProvider) {
        var debugMode = true;
        var url = '/FurtherSoftware/App/';
        $ocLazyLoadProvider.config({
            /**
            * @link http://angular-ui.github.io/angular-google-maps
            */
            modules: [
                {
                    debug: debugMode,
                    serie: true,
                    name: 'angular-google-map',
                    files: [
                         //angular,lodash 已安裝
                         url + 'Plugins/Vendor/angular-simple-logger/angular-simple-logger.js',
                         url + 'Plugins/Vendor/angular-google-maps/angular-google-maps.js',
                         url + 'Plugins/Config/angular-google-maps/angularGoogleMaps.config.js'
                    ]
                }, {
                    debug: debugMode,
                    serie: false,
                    name: 'ngCropper',
                    files: [
                        url + 'Plugins/Vendor/ng-cropper/ngCropper.all.css',
                        url + 'Plugins/Vendor/cropperjs/cropper.js',
                        url + 'Plugins/Vendor/ng-cropper/ngCropper.all.js',
                    ]
                }, {
                    debug: debugMode,
                    serie: false,
                    name: 'angularBootstrapMultiselect',
                    files: [
                        url + 'Plugins/Vendor/angular-bootstrap-multiselect/angular-bootstrap-multiselect.js'
                    ]
                }
            ]
        });

    }


})(angular.module('YC.Plugins'));