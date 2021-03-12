let app = angular.module("kurvenuntersucher", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "components/home/mainView.html",
            controller: "mainCtrl as vm"
        })
        .when("/videos", {
            templateUrl : "components/videos/view.html",
            controller: "vidCtrl as vm"
        })
        .when("/summaries", {
            templateUrl : "components/summaries/view.html",
            controller: "sumCtrl as vm"
        })
        .when("/exercise", {
            templateUrl : "components/exercise/view.html",
            controller: "exerciseCtrl as vm"
        })
        .when("/nerds", {
            templateUrl : "components/nerds/view.html",
            controller: "nerdsCtrl as vm"
        })
        .when("/imprint", {
            templateUrl : "components/imprint/view.html",
            controller: "imprintCtrl as vm"
        })
});