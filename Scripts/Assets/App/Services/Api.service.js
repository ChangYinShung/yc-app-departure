(function (app) {
    'use strict';
    app.factory('ApiService', ApiService);

    ApiService.$inject = ['Article', 'Activity', 'Speech', 'Slider', 'News', 'Identity', 'Topic', 'School','SignUp'];
    function ApiService(
        Article, Activity, Speech, Slider, News, Identity, Topic, School,SignUp) {

        var service = {
            Article: Article,
            Activity: Activity,
            Speech: Speech,
            Slider: Slider,
            'News': News,
            Identity: Identity,
            Topic: Topic,
            School: School,
            SignUp: SignUp
        };

        return service;

        //////////////

    }
})(angular.module('YC.Services'));