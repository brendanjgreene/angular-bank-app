"use strict";

(function () {

    
    function AccountService ($log, accountDal) {

        this.getAccounts = function()
        {
        	$log.log("AccountService getAccounts");
        	return accountDal.getAccounts();
        };
        
        this.saveAccount = function(accountToSave){
        	$log.log("AccountService saveAccount: " + JSON.stringify(accountToSave));
        	return accountDal.saveAccount(accountToSave);
        };
        
        this.updateAccount = function(accountToUpdate){
        	$log.log("AccountService updateAccount: " + JSON.stringify(accountToUpdate));
        	return accountDal.updateAccount(accountToUpdate);
        };
    }
    
    angular.module("accountApp").service("accountService", ['$log','accountDal', AccountService]);

}());