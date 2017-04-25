'use strict';

var ApplicationConfiguration = (function () {
    var applicationModuleName = 'nui';
    var registerModule = function (moduleName, dependencies) {
        angular.module(moduleName, dependencies || []);

        angular.module(applicationModuleName).requires.push(moduleName);
    };

    return {
        moduleName: applicationModuleName,
        dependencies: ['ui.router', 'ui.bootstrap', 'blockUI', 'angularSpinner'],
        registerModule: registerModule
    };
})();

// Declares how the application should be bootstrapped. See: http://docs.angularjs.org/guide/module
angular.module(ApplicationConfiguration.moduleName, ApplicationConfiguration.dependencies)
    .config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');
    }]);

angular.element(document).ready(function () {
    // Fixing facebook bug with redirect
    if (window.location.hash === '#_=_') window.location.hash = '#!';

    angular.bootstrap(document, [ApplicationConfiguration.moduleName], { strictDi: true });
});
