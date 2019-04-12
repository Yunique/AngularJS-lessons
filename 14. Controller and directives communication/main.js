const app = angular.module('app', []);

app.controller('mainCtrl', function ($scope) {
    console.log('ctrl scope', $scope)
    $scope.posts = [
        {
            name: 'This is post about cats'
        },
        {
            name: 'This is posts about dogs'
        }
    ];
    $scope.getPosts = function () {
        return $scope.posts;
    };
    $scope.hello = 'Hello';
});

app.directive('post', function () {
    return {
        template: '<div ng-repeat="post in getPosts()">{{post.name}}</div>',
        link: function (scope, element, attrs) {
            console.log('scope', scope);
            scope.hello = 'hi'
        }
    }
});