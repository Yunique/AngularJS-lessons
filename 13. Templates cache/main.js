const app = angular.module('app', []);

app.run(function ($templateCache) {
    $templateCache.put('bookmarks.html', '<div ng-repeat="bookmark in myBookmarks">{{bookmark.name}}')
});

app.directive('fooBar', function ($templateCache) {
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
            console.log($templateCache.info())
        }
    }
});