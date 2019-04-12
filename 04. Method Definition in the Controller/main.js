const app = angular.module('app', []);
app.controller('firstCtrl', function ($scope, myFactory) {
    $scope.hello = 'Hello world';
    $scope.getBookmark = function () {
        return 'My bookmark'
    };
    $scope.setHello = function (text) {
        $scope.hello = text;
    };

    $scope.myFactory = myFactory;
});

app.factory('myFactory', function () {
    return{
        hello: function() {
            return 'hello world'
        }
    }
})