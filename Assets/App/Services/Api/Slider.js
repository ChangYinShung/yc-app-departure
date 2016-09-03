(function (app) {
    'use strict';

    app.factory('Slider', Slider);

    Slider.$inject = ['SharedApiService'];

    function Slider( SharedApiService) {
        var service = {
            GetTimeline: GetTimeline,
            PutTimeline: PutTimeline
        };
        return service;

        ///////////////////////////

        /**
         * @description 取得所有資料
         */
        function GetTimeline() {
            var resource = SharedApiService.GetRestResouces('Slider').one('Timeline');
            var action = resource.get();
            return SharedApiService.HandlePromise(action);
        }
        function PutTimeline(data) {
            var resource = SharedApiService.GetRestResouces('Slider').all('Timeline');
            var action = resource.customPUT(data);
            return SharedApiService.HandlePromise(action);
        }
    }
})(angular.module('YC.Services.Api'));