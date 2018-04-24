var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', '$window', function ($scope, $window) {
    $scope.rtc = $window.rtc;

}]);
