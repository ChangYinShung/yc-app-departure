(function (app) {
    'use strict';


    app.factory('Activity', Activity);

    Activity.$inject = ['$http', 'SharedApiService', 'ActivityModel', 'ActivityOData'];

    function Activity($http, SharedApiService, ActivityModel, ActivityOData) {
        var service = {
            Upcomming: Upcomming, //取得未完成活動資訊
            Past: Past, //取得已完成活動資訊
            ListByCurrentUserCreate: ListByCurrentUserCreate,//取得使用者建立的活動
            ListByCurrentUserSignUp: ListByCurrentUserSignUp,//取得使用者報名的活動
            Dummy: Dummy,//舉辦活動時建立的初始資料
            Apply: Apply,//管理者審核活動
            UploadImage: UploadImage,//海報圖檔上傳
            CurrentUserSignUp: CurrentUserSignUp,//使用者報名或取消報名活動
            DELETE: DELETE,
            POST: POST,
            GetByID: GetByID,
            GETALL: GETALL,
            SignUp:SignUp,//使用者報名活動


            UpcommingOData: UpcommingOData,
            PastOData: PastOData,
            AllEventOData: AllEventOData,
            CurrentUserSignUpOData : CurrentUserSignUpOData,
            CounterOData: CounterOData
        };

        /**
         * @description 查詢已完成之活動
         */
        function PastOData(SchoolID,Year,run) {
            var query = SharedApiService.GetOData('Activity');
            ActivityOData.Set(query)
                .FilterPast()
                .FilterSearch(SchoolID, Year);
            if (angular.isFunction(run))
                run(query);
            return SharedApiService.HandlePromise(query.query().$promise);
        };

        /**
         * @description 查詢即將進行的活動
         */
        function UpcommingOData(SchoolID,Year,run) {
            var query = SharedApiService.GetOData('Activity');
            ActivityOData.Set(query)
                .FilterUpComming()
                .FilterSearch(SchoolID,Year);
            if (angular.isFunction(run))
                run(query);
            return SharedApiService.HandlePromise(query.query().$promise);
        }
        /**
         * @description 查詢全部活動
         * @param SchoolID {string} 學校ID
         * @param Year {int | string} 年份(不分int or string);
         */
        function AllEventOData(SchoolID, Year,run) {
            var query = SharedApiService.GetOData('Activity');
            ActivityOData.Set(query)
            .FilterByIsOpen(true)
            .FilterSearch(SchoolID,Year);
            if (angular.isFunction(run))
                run(query);
            
            return SharedApiService.HandlePromise(query.query().$promise);

        }

        function CounterOData(SchoolID, Year) {
            var query = SharedApiService.GetOData('Activity');
            ActivityOData.Set(query)
            .FilterByIsOpen(true)
            .FilterSearch(SchoolID, Year)
            query.withInlineCount();
            return SharedApiService.HandlePromise(query.single().$promise);
            
        }
        /**
         * @description 使用者查詢已過報名活動
         */

        function CurrentUserSignUpOData() {
            var query = SharedApiService.GetOData('Activity');
            ActivityOData.Set(query);

            return SharedApiService.HandlePromise(query.query().$promise);
        }

        /**
         * @description 取得未完成活動資訊
         * @returns tpye is Promise
         */
        function Upcomming() {

            var resouces = SharedApiService.GetRestResouces('Activity');
            var query = resouces.all('Upcomming').getList();
            return SharedApiService.HandlePromise(query);
        };


        /**
         * @description 取得即將進行的活動
         * @returns Promise
         */
        function Past() {
            var resouces = SharedApiService.GetRestResouces('Activity');
            var query = resouces.all('Past').getList();
            return SharedApiService.HandlePromise(query);
        }

        /**
         * @description 取得建立資料所需格式
         * @returns object
         */
        function Dummy() {
            var url = SharedApiService.GetApiUrl('Activity/GetCreateModel');
            var query = $http.get(url);
            return SharedApiService.HandlePromise(query);
        }

        function SignUp(id) {
            var url = SharedApiService.GetApiUrl(sprintf('Activity/%s/CurrentUser/SignUp',id));
            return SharedApiService.HandlePromise($http.post(url)).then(function (respond) { return respond;});
        }


        /**
         * @description 查詢目前登入使用者所建立的活動(OData)
         */
        function ListByCurrentUserCreate() {
            var oData = SharedApiService.GetOData('Activity/CurrentUserCreate');
            var query = oData.query();
            return SharedApiService.HandlePromise(query.$promise);
        }
        /**
        * @description 取得目前使用者已報名活動(OData)
        */
        function ListByCurrentUserSignUp() {
            var oData = SharedApiService.GetOData('Activity/CurrentUserSignUp');

            var query = oData.query();
            return SharedApiService.HandlePromise(query.$promise);
        }
        /**
         * @description POST 新增或修改
         * @param {data} swagger's data
         */
        function POST(data) {
            var resouces = SharedApiService.GetRestResouces('Activity');
            data.TopicIDs = _.map(data.Topics, function (x, i) {
                return x.ID;
            });
            var action = resouces.post(data);
            return SharedApiService.HandlePromise(action);
        }

        /**
         * @description DELETE
         * @param {String} ActivityID
         */
        function DELETE(ActivityID) {
            var resouces = SharedApiService.GetRestResouces('Activity');
            var action = resouces.one('', ActivityID).remove();
            return SharedApiService.HandlePromise(action);
        }

        /**
         * @description GET (OData)
         * @param {String} ActivityID
         */
        function GetByID(ActivityID, run) {
            var query = SharedApiService.GetOData('Activity');
            ActivityOData.Set(query)
                .FilterByID(ActivityID)
                .ExpandAll();
            if (angular.isFunction(run))
                run(query);
            var item = query.single();
            item.$promise.then(function (json) {
                json.SchoolID = json.School.ID;
                return json;
            });

            return SharedApiService.HandlePromise(item.$promise);
        }
        function GETALL(run) {
            var query = SharedApiService.GetOData('Activity');
            ActivityOData.Set(query)
                .ExpandAll();
            if (angular.isFunction(run))
                run(query);
            return SharedApiService.HandlePromise(query.query().$promise);
            //var resouces = SharedApiService.GetRestResouces('Activity');
            //var query = resouces.getList();
            //return SharedApiService.HandlePromise(query);
        }
        /**
         * @description 審核通過
         * @param {stringArray} IDs 通過審核的活動IDs  
         */
        function Apply(IDs) {
            var resouces = SharedApiService.GetRestResouces('Activity');
            var action = resouces.one('Apply').customPOST(IDs);
            return SharedApiService.HandlePromise(action);
        }
        /**
         * @description 上傳活動海報Image
         */
        function UploadImage(id, imageData) {
            var url = SharedApiService.GetApiUrl(String.format('Activity/{0}/Image', id));
            var action = $http.put(url, { ImageData: imageData });
            return SharedApiService.HandlePromise(action);

        }
        /**
         * @description 登入者報名或取消報名活動
         * @param {string} id 活動ID
         * @param {bool} isCancel 取消:true,報名:false or null
         */
        function CurrentUserSignUp(id, isCancel) {
            var url = SharedApiService.GetApiUrl(String.format('Activity/{0}/', id));
            if (isCancel)
                url += 'CurrentUser/CancelSignUp/';
            else
                url += 'CurrentUser/SignUp/';
            var action = $http.post(url);
            return SharedApiService.HandlePromise(action);
        }




        return service;

    }
})(angular.module('YC.Services.Api'));