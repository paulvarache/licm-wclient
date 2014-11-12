licmServices.factory("Api", ["$http", function ($http) {
    var URI = "http://localhost:3000/api";
    return {
        getAll: function () {
            return $http.get(URI);
        },
        get: function (id) {
            return $http.get(URI + "/" + id);
        }
    }
}]);
