const app = angular.module('app', []);

app.directive('foo', function () {
    return {
        link: function (scope, element, attrs) {
            console.log('This is my directive');
            console.log('scope', scope);
            console.log('element', element);
            console.log('attrs', attrs);
            element.text('This is my magic directive');
            element.on('click', function () {
                if (element.text() === 'This is my magic directive') {
                    element.text('Some magic');
                } else {
                    element.text('This is my magic directive')
                }
            })
        }
    };
});

