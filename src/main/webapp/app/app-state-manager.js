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
        }).state("update", {
            url: "/account/update",
            params: {
                accountId: null,
                accountFirstName: null,
                accountSecondName: null,
                accountNumber: null,
            },
            templateUrl: "app/feature/update-account/update.html"
        }).state("delete", {
            url: "/account/delete",
            templateUrl: "app/feature/account/delete.html"
        })
    });
}());