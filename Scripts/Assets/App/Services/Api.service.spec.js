describe('Service : 驗證 API 路徑位址 (未驗證 Status Code)', function () {
    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.http.init);
    afterEach(angular.mock.http.reset);

    var ApiService;
    var $httpBackend, Restangular;
    var $rootScope;
    var valid;
    beforeEach(inject(function ($injector, _$httpBackend_) {
        ApiService = $injector.get('ApiService');
        $httpBackend = _$httpBackend_;
        Restangular = $injector.get('Restangular');
        $rootScope = $injector.get('$rootScope');
    }));

    //////////////

    it("已定義 ApiService", function () {
        expect(ApiService).toBeDefined();
    });

    it('取得文章列表含查詢 : Article.Browse', function (done) {
        var valid = false;

        $httpBackend.expectPOST('/api/Article/Browse').respond(200, $httpBackend.when('POST', '/Api/Article/Browse', { page: 1, pageSize: 4, order: 1 }).passThrough());



        ApiService.Article.Browse({ page: 1, pageSize: 4, order: 1 }).then(function (response) {
            valid = true;
        }, function (response) {
            valid = false;
        });


        $httpBackend.flush();
        setTimeout(function () {
            expect(true).toBe(true);
            done();
        }, 500);
    });

    describe('Activity : 活動', function () {
        beforeEach(function () {
        });

        it('使用者取得 "未完成活動資訊" : Activity.Upcomming', function (done) {
            $httpBackend.when('GET', '/Api/Activity/Upcomming').passThrough();
            $httpBackend.expectGET('/api/Activity/Upcomming').respond(200);
            ApiService.Activity.Upcomming();
            $httpBackend.flush();
            setTimeout(function () {
                expect(true).toBe(true);
                done();
            }, 0);
        });

        it('使用者取得 "已完成活動資訊" : Activity.Past', function (done) {
            $httpBackend.when('GET', '/Api/Activity/Past').passThrough();
            $httpBackend.expectGET('/api/Activity/Past').respond(200);
            ApiService.Activity.Past();
            $httpBackend.flush();
            setTimeout(function () {
                expect(true).toBe(true);
                done();
            }, 0);
        });


    })




});
