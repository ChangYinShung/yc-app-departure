(function () {
    'use strict';

    angular
        .module('app')
        .directive('ycNgCropper', ycNgCropper);

    ycNgCropper.$inject = ['$window'];

    function ycNgCropper($window) {
        // Usage:
        //     <yc-ng-cropper></yc-ng-cropper>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'E',
            template: '<button class=" btn btn-primary" ng-click="{editEvent}" ng-show="{{hasImg}}">{{editText}}</button>',
            scope: {
                hasImg: '@',
                editEvent: '&',
                editText:'='
            },
            controller:Controller
            
        };
        return directive;

        function Controller() {
        }

        function link(scope, element, attrs) {
        }
    }

})();