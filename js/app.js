
var app = angular.module('app', []);

app.controller('WordCount', ['$scope', function ( $scope ) {
    $scope.text = '';
    $scope.count = $scope.total_count = 0;

    $scope.$watch(function () {
        var text = $scope.text;
        $scope.total_count = new WordCount(text).wordCount();

        // remove quotes
        text = text.replace(/(?:“|").+?(?:"|”)/, '');

        // remove refrences
        text = text.replace(/\(.+?\)/, '');

        $scope.count = new WordCount(text).wordCount();
    });
}]);
