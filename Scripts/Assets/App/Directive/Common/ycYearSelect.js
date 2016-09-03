(function () {
    'use strict';
    angular
    .module('YC.Common')
    .directive('ycYearSelect', ycYearSelect);
    ycYearSelect.$inject = ['$window'];

    function ycYearSelect() {
        var directive = {
            link: link,
            scope:{
                selected:'='
            },
            restrict: 'E',
            template: '<select class="form-control" ng-model="selected" ng-options="y for y in years"></select>'
            
        };

        return directive;


    };

    function link(scope, element, attrs) {
        function getYears(offset, range) {
            var currentYear = new Date().getFullYear();
            var years = [];
            for (var i = 0; i < range + 1; i++) {
                years.push(currentYear + offset + i);
            }
            return years;
        }
        scope.years = getYears(+attrs.offset, +attrs.range);
    };


})();