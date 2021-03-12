let app = angular.module("kurvenuntersucher", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "components/home/mainView.html",
            controller: "mainCtrl as vm"
        })
});