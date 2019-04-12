const app = angular.module('app', []);

app.directive('fooBar', function () {
    return {
        restrict: 'E',
        transclude: true,
        template: "This is my super directive <div ng-transclude></div>",
        link: function (scope, element, attrs) {
            console.log('This is my super directive');
        }
    }
});

app.controller('mainCtrl', function ($scope) {
    $scope.name = 'Bob'
});