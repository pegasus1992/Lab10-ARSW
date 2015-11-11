var app = angular.module("app", []);

app.controller("blogCtrl", function ($scope, $log, $http) {
    $scope.entry = {title: "Title",
        content: "Content"};
    $log.debug('se creo el $scope');
    $scope.loadData = function () {
        $http({
            method: "GET",
            url: "blogs"
        }).success(function (data) {
            $scope.entries = data;
        }).error(function (data, status, headers, config) {
            alert("Ha fallado la petición. Estado HTTP:" + status);
        });
    };
    
    $scope.loadData();
    $scope.processForm = function () {
        $log.debug($scope.entry);
        $http({
            method: 'POST',
            url: 'blog',
            data: $scope.entry
        }).success(function (data) {
            console.log(data);
            $scope.loadData();
        });
    };

    $scope.delete = function (index) {
        $http({
            method: 'POST',
            url: 'blog/' + index,
            data: index
        }).success(function (data) {
            console.log(data);
            $scope.loadData();
        });
    }
    $scope.edit = function (index) {


    }

    $scope.search = function (index) {
        $http.get('blog/' + index).success(function (data, status, header, config) {
            //alert("titulo" + data.title+" Contenido: "+data.content);
            //$window.$location.replace("www.google.com");
            $location.replace("www.google.com");
            //location.replace("www.google.com");
        }).error(function (data, status, headers, config) {
            alert("Ha fallado la petición. Estado HTTP:" + status);
        });
    }
});
