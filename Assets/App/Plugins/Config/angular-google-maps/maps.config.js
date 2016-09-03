/**
* @auther ChangYinShung
* @copyright  豐碩資訊有限公司 @ 2016
* @description  For configuration Setting
*/
(function () {
    'use strict';

    angular
        .module('uiGmapgoogle-maps')
        .config(angularGoogleMaps);
        

    function angularGoogleMaps(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyBEP4u1YZGoRFf3Z9FWhBBTz3PKUTks-no',
            //v: '3', //defaults to latest 3.X anyhow
            libraries: 'places',
            language:'zh-tw'
        });
    }
})();