
var app = angular.module('app', []);

app.controller('WordCount', ['$scope', function ( $scope ) {
    $scope.text = '';
    $scope.count = $scope.total_count = 0;

    $scope.$watch(function () {
        var text = $scope.text;
        $scope.total_count = new WordCount(text).wordCount();

        // remove other characters
        text = text.replace(/[^()a-zA-Z“”" ]\B/g, '');

        // remove quotes
        text = text.replace(/(?:“|").+?(?:"|”)/g, '');

        // remove references
        text = text.replace(/\(.+?\)/g, '');

        $scope.count = new WordCount(text).wordCount();
    });
}]);
