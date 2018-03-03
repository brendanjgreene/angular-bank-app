"use strict";

(function () {

    angular.module('accountApp').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/dashboard");

        $stateProvider.state("dashboard", {
            url: "/dashboard",
            templateUrl: "app/feature/dashboard/dashboard.html"
        }).state("account", {
            url: "/account",
            templateUrl: "app/feature/account/account.html"
        }).state("add-account", {
            url: "/account/add",
            templateUrl: "app/feature/create-account/create-account.html"
        }).state("update-account", {
            url: "/account/update",
            templateUrl: "app/feature/account/update.html"
        }).state("delete-account", {
            url: "/account/delete",
            templateUrl: "app/feature/account/delete.html"
        })
    });
}());