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
        
        this.deleteAccount = function(delAccount){
        	$log.log("AccountService deleteAccount: " + JSON.stringify(delAccount));
        	return accountDal.deleteAccount(delAccount);
        };
    }
    
    angular.module("accountApp").service("accountService", ['$log','accountDal', AccountService]);

}());