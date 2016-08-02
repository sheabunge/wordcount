
var app = angular.module('app', []);

var count_words = function (text) {
    text = text.trim();
    var words = text.split(/\s+/);
    if (words.length == 1 && words[0] === '') {
        return 0;
    }
    return words.length;
};

app.controller('WordCount', ['$scope', function ( $scope ) {
    $scope.text = '';
    $scope.count = $scope.total_count = 0;

    $scope.$watch(function () {
        var text = $scope.text;

        // remove other characters
        text = text.replace(/-/, ' ');
        text = text.replace(/[^()a-zA-Z“”" ]\B/, '');

        $scope.total_count = count_words(text);

        // remove quotes
        text = text.replace(/(?:“|").+?(?:"|”)/, '');

        // remove refrences
        text = text.replace(/\(.+?\)/, '');

        $scope.count = count_words(text);
    });
}]);
