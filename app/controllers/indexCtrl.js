licmControllers.controller('IndexController', ["$scope", "Api", function ($scope, Api) {
    Api.getAll().success(function (data) {
        if (data.success) {
            $scope.tutos = data.elements;
        }
    });
}]);
