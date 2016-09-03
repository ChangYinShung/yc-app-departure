(function () {
    'use strict';
    angular
    .module('YC.Common')
    .controller('MonthSelectController', MonthSelectController)
    .directive('ycMonthSelect', ycMonthSelect);
    MonthSelectController.$inject = ['$scope'];
    ycMonthSelect.$inject = ['$window'];

    function ycMonthSelect() {
        var directive = {
            link: link,
            restrict: 'AE',
            replace: true,
            scope: {
                selected: '=',
            },
            template: '<select class=""><option ng-repeat="month in months" value="{{month.value}}" ng-selected="month.value == selected">{{month.text}}</option></select>',
            controller: MonthSelectController
        };

        return directive;
    };

    function link() {

    };

    function MonthSelectController($scope) {
        $scope.months = [];
        $scope.months.push({ value: undefined, text: '全部' });
        $scope.months.push({ value: 1, text: '01' });
        $scope.months.push({ value: 2, text: '02' });
        $scope.months.push({ value: 3, text: '03' });
        $scope.months.push({ value: 4, text: '04' });
        $scope.months.push({ value: 5, text: '05' });
        $scope.months.push({ value: 6, text: '06' });
        $scope.months.push({ value: 7, text: '07' });
        $scope.months.push({ value: 8, text: '08' });
        $scope.months.push({ value: 9, text: '09' });
        $scope.months.push({ value: 10, text: '10' });
        $scope.months.push({ value: 11, text: '11' });
        $scope.months.push({ value: 12, text: '12' });
    }


})();