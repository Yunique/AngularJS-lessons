const app = angular.module('app', []);
app.directive('fooBar', function () {
    const myBookmarks = [
        {
            id: 1,
            name: 'AngularJS'
        },
        {
            id: 2,
            name: 'React'
        }
    ];
    return {
        restrict: 'E',
        templateUrl: "bookmarks.html",
        link: function (scope, element, attrs) {
            console.log('directive');
            scope.myBookmarks = myBookmarks;
        }
    }
});