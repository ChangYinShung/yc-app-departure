(function (app) {
    'use strict';

    app.factory('ActivityOData', ActivityOData);

    ActivityOData.$inject = ['$http', 'SharedApiService', '$odata'];

    function ActivityOData($http, SharedApiService, $odata) {
        var query = null;
        var service = {
            Set: set,
            FilterByID: filterByID,
            FilterByIsOpen: filterByIsOpen,
            ExpandTopics: expandTopics,
            ExpandSchool: expandSchool,
            ExpandSignUps: expandSignUps,
            ExpandAll: expandAll,

            /////
            FilterUpComming: filterUpComming,
            FilterPast: filterPast,
            FilterSearch: filterSearch
        };

        return service;
        function set(queryObj) {
            query = queryObj;
            return service;
        }
        function filterByID(id) {
            query.filter('ID', id);
            return service;
        }
        function filterByIsOpen(isOpen) {
            query.filter('IsOpen', '=', isOpen);
            return service;
        }
        function expandTopics() {
            query.expandPredicate('Topics').finish();
            return service;
        }
        function expandSchool() {
            query.expandPredicate('School').finish();
            return service;
        }
        function expandSignUps() {
            query.expandPredicate('SignUps').finish();
            return service;
        }
        function expandAll() {
            expandTopics();
            expandSchool();
            expandSignUps();
            return service;
        }

        /**
         * @description 查詢即將進行的活動
         * 活動為 開啟 且 現在時間 小於 活動舉辦起始日期
         */
        function filterUpComming() {
            var predicate1 = new $odata.Predicate('IsOpen', '=', true);
            var predicate2 = new $odata.Predicate('RunDateTimeRange/Start', '>', new Date());
            var combination = $odata.Predicate.and([predicate1, predicate2]);
            query.filter(combination)
            expandTopics();
            expandSchool();
            return service;
        }

        /**
         * @description 查詢已完成的活動
         * 活動為 開啟 且 現在時間 小於 活動舉辦起始日期
         */
        function filterPast() {
            var predicate1 = new $odata.Predicate('IsOpen', '=', true);
            var predicate2 = new $odata.Predicate('RunDateTimeRange/End', '<', new Date());
            var combination = $odata.Predicate.and([predicate1, predicate2]);
            query.filter(combination)
            expandTopics();
            expandSchool();
            return service;
        }

        /**
         * @description 查詢根據學校與年份
         * @param {string}  SchoolID 學校ID
         */
        function filterSearch(schoolID, year) {
            if (!!schoolID) {
                query.filter('School/ID', '=', schoolID);
            };
            if (!!year)
                query.filter(new $odata.Func('year', 'RunDateTimeRange/Start'), '=', parseInt(year));
            return service;
        }
    }
})(angular.module('YC.Services.Api'));