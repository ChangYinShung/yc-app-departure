(function (app) {
    'use strict';

    app.factory('ActivityModel', ActivityModel);

    ActivityModel.$inject = ['$http'];

    function ActivityModel($http) {
        var SearchModels = {
            ModelQuery: ModelQuery,
            ModelPageInfo: ModelPageInfo
        }
        var service = {
            /**
             * @description *必須* 查詢請先建立以下物件 : ModelQuery、PageInfo
             * @param {function} SearchModels.ModelQuery 查詢
             * @property {function} SearchModels.PageInfo 分頁
             */
            SearchModels: SearchModels
        };

        return service;
        /**
         * @description 查詢物件
         * @param {object} queryParam object { Name='' , TopicID='',SchoolID ='' }
         * 
         */
        function ModelQuery(queryParam) {
            var self = this;
            self.Name = '';
            self.TopicID = '';
            self.SchoolID = '';
            angular.extend(self, queryParam);
        }
        /**
         * @description 分頁所需物件.
         * @param {object} pageInfo  object { pageSize = 15 , pageNo = 1,total=0(ReadOnly) }
         * @property {number} self.pageSize 分頁大小
         * @property {number} self.pageNo 頁碼
         */
        function ModelPageInfo(pageInfo) {
            var self = this;
            self.pageSize = 15;
            self.pageNo = 1;
            self.total = 0;
            angular.extend(self, pageInfo);
        }

        
    }
})(angular.module('YC.Services.Api'));