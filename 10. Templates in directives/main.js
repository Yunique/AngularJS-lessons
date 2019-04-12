const app = angular.module('app', []);

app.directive('greeting', function () {
    return {
        template: '<h1>Hello world, {{name}}</h1>',
        link: function (scope, element, attrs) {
            console.log('fooBar');
            scope.name = '';
        }
    }
});

app.directive('js', function () {
    const myBookmarks = [
        {
            id: 1,
            name: 'AngularJS',
        },
        {
            id: 2,
            name: 'VueJS'
        },
        {
            id: 3,
            name: 'ReactJS'
        }
    ];
    return {
        template: "<div ng-repeat='bookmark in myBookmarks'>{{bookmark.name}}</div>",
        link: function (scope, element, attr) {
            scope.myBookmarks = myBookmarks;
        }
    }
});