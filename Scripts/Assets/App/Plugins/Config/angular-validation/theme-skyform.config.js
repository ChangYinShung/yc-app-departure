/**
* @auther ChangYinShung
* @copyright  豐碩資訊有限公司 @ 2016
* @description  For configuration Setting
*/
(function (app) {
    'use strict';
    app.config(Validation);
    function Validation($validationProvider) {
        $validationProvider.showSuccessMessage = true; //設為 True  : $validationProvider.setSuccessHTML() 才會執行
        $validationProvider.setErrorHTML(function (msg, element, attrs) {
            element.parent().addClass('state-error');
            return '<div class="note note-error">'+ msg+'</div>';
            // remember to return your HTML
            // eg: return '<p class="invalid">' + msg + '</p>';
            // or using filter
            // eg: return '<p class="invalid">{{"' + msg + '"| lowercase}}</p>';
        });

        $validationProvider.setSuccessHTML(function (msg, element, attrs) {
            element.parent().removeClass('state-error');
            return; //不回傳成功文字
            // eg: return '<p class="valid">' + msg + '</p>';
            // or using filter
            // eg: return '<p class="valid">{{"' + msg + '"| lowercase}}</p>';
        });
    }
})(angular.module('validation'));