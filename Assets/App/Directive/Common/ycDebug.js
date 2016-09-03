(function() {
    'use strict';

    angular
        .module('YC.Common')
        .controller('Controller', Controller)
        .directive('ycDebug', ycDebug);
    Controller.$inject = ['$scope', 'hotkeys','$q'];
    ycDebug.$inject = ['$window'];
    
    

    function Controller($scope,hotkeys,$q) {
        $scope.debug = true;
        $scope.open = 0;
        addKey(hotkeys, { combo: 'ctrl+up', description: '顯示Controller 資料', callback: callBackUp });
        addKey(hotkeys, { combo: 'ctrl+down', description: '隱藏Controller 資料', callback: callBackDown });
        function addKey(hotkeys, options) {
            var fn = options.callback;
            var keyObj = hotkeys.get(options.combo);

            if (!!keyObj)
                fn = joint([fn, keyObj.callback]);

            hotkeys.add({
                combo: options.combo,
                description: options.description,
                callback: fn
            });
        }
        function callBackUp (event, hotkey) {
            $scope.debug = true;
        }
        function callBackDown(event, hotkey) {
            $scope.debug = false;
        }
        function joint(a) {
            var b; return b = a[a.length - 1], a.pop(), a = a.length > 1 ? joint(a) : a[0], function () { b.apply(new a) }
        }
    }
    
    function ycDebug ($window) {
        // Usage:
        //     <yc-debug json="{}" <yc-debug json='Ctrl' debug=@(HttpContext.Current.IsDebuggingEnabled)></yc-debug>></yc-debug>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'AE',
            transclude:true,
            scope: {
                json: '=',
                open:'@?'
            },
            controller:Controller,

            template: '<div class="alert alert-info" ng-if="debug">' +
                                '<json-formatter json="json" open=open></json-formatter>' +
                                '<div ng-transclude></div>' +
                       '</div>'
        };
        return directive;

        function link(scope, element, attrs, ctrl) {
            //if (scope.$parent === undefined) return;
            //scope.$parent.json = scope.json;
            scope.debug = 'debug' in attrs;
        }
    }

})();