(function (app) {
    'use strict';
    app.config(PrettyJSON);

    app.config(NemDebugProvideSetting);
    app.config(NemSimpleLoggerProviderSetting);

    function PrettyJSON(JSONFormatterConfigProvider) {
        JSONFormatterConfigProvider.hoverPreviewEnabled = true;
        JSONFormatterConfigProvider.hoverPreviewArrayCount = 1;
        JSONFormatterConfigProvider.hoverPreviewFieldCount = 1;
    }
    function NemDebugProvideSetting(nemDebugProvider) {
        var debug = nemDebugProvider.debug;
        debug.enable('app:*'); //根 angular's app
    }
    function NemSimpleLoggerProviderSetting($provide, nemSimpleLoggerProvider) {
        return $provide.decorator.apply(null, nemSimpleLoggerProvider.decorator);

    }
})(angular.module('YC.Common'));