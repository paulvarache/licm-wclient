licmControllers.controller('DetailsController', ["$scope", "$routeParams", "$location", "Api", function ($scope, $routeParams, $location, Api) {
    $scope.tuto = {};
    if ($routeParams.id) {
        Api.get($routeParams.id).success(function (data) {
            if (data.success) {
                $scope.tuto = data.element;
            }
        });
    } else {
        $scope.backHome();
    }
    $scope.backHome = function () {
        $location.path('/');
    }
}]);
