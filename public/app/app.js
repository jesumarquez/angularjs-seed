(function() {
    angular.module('app', [
        'ngRoute',
        'ngResource',
        'app.customer'
    ])
    .config(AppConfig);

    AppConfig.$inject = ['$routeProvider', '$locationProvider'];

    function AppConfig($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/app/welcome/index.html'
            })
            .when('/customer', {
                templateUrl: '/app/customer/customer.html',
                controller: 'CustomerCtrl',
                controllerAs: 'customer'
            });

        $locationProvider.html5Mode(true);
    }
})();