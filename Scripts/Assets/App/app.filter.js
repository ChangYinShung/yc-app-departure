///格式化 JSON Date
(function (app) {
    'use strict';
    app.filter("jsDate", function () {
        return function (x) {
            if (x === null) return '';
            return new Date(parseInt(x.substr(6)));
        };
    })
})(angular.module('YC.Common'));


//Rang
(function (app) {
    'use strict';
    app.filter("range", function () {
        return function (input, min, max) {
            min = parseInt(min);
            max = parseInt(max);
        };
    })
})(angular.module('YC.Common'));



