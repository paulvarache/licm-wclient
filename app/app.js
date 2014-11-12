var licmApp = angular.module("LICMApp", ["ngRoute", "ngAnimate", "LICMControllers", "LICMServices"]);

licmApp.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "partials/index.html",
            controller: "IndexController"
        })
        .when('/tuto/:id', {
            templateUrl: "partials/details.html",
            controller: "DetailsController"
        })
        .otherwise({
            redirectTo: "/"
        });
}]);
