
///====== ui.bootstrap:  bootstrap directive
//======= ui.router : Router
(function () {
    'use strict';
    angular.module('YC.Common', ['ui.router', 'ui.router.modal', 'ui.router.tabs', 'ui.bootstrap', 'jsonFormatter', 'cfp.hotkeys', 'nemLogging']);
})();

/**
 * @description Plugins
 * angular-lazy-img 圖片讀取
 * oc.lazyLoad : Dynamic loading extra service or plugins
 */
(function () {
    'use strict';
    angular.module('YC.Plugins', ['angularLazyImg', 'oc.lazyLoad']);
})();





/**
 * @description Restangular
 * @description angular-toastr
 * @description angular-local-storage
 */
(function () {
    'use strict';
    angular.module('YC.Services', [ 'toastr', 'restangular', 'ODataResources', 'LocalStorageModule'])
})();

/**
 * @description API Service
 * @author Furthersoft
 */
(function () {
    'use strict';
    angular.module('YC.Services.Api', ['YC.Services'])
})();


(function () {
    'use strict';
    angular.module('YC.Testing', [])
})();

/**
 * @description 尚未整理
 */
(function () {
    'use strict';
    angular.module('YC.Services.Activity', ['YC.Services'])
})();

/**
 * @description 尚未整理
 */
(function () {
    'use strict';
    angular.module('YC.Services.Article', ['YC.Services'])
})();



