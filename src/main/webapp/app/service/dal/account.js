"use strict";

(function () {

    function AccountDal ($log, dal) {

        this.getAccounts = function () {
        	$log.log("AccountDal getAccounts");
            return dal.http.GET("rest/account/json");
        };

        this.saveAccount = function (accountToSave) {
        	$log.log("AccountDal saveAccount");
            return dal.http.POST("rest/account/json", accountToSave);
        };

        this.updateAccount = function (accountToUpdate) {
        	$log.log("AccountDal updateAccount");
            return dal.http.PUT("rest/account/json", accountToUpdate);
        };

        this.deleteAccount = function (accountToDelete) {
        	$log.log("AccountDal deleteAccount");
            return dal.http.DELETE("rest/account/json", accountToDelete);
        };
    }
    
    angular.module("accountApp").service("accountDal", ["$log", "dal", AccountDal]);
}());