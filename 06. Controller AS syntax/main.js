const app = angular.module('app', []);

app.controller('mainCtrl', function ($scope) {
    this.addLesson = function () {
        console.log('new lesson')
    };
    $scope.mainCtrl = this;
});

app.controller('firstCtrl', function () {
    this.myLesson = 'Math'
});

app.controller('secondCtrl', function () {
    this.myLesson = 'Lesson'
});