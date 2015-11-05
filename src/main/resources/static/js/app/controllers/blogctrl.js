var app = angular.module("app",[]);

app.controller("blogCtrl", function($scope) {
    $scope.entry = {title : "Title",
                    content : "Content"};
    $log.debug('se creo el $scope');
});
