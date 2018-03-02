"use strict";

(function () {

    
    function AccountService ($log, accountDal) {

        this.getAccounts = function()
        {
        	$log.log("AccountService getAccounts");
        	return accountDal.getAccounts();
        };
        
        this.saveAccount = function(){
        	$log.log("AccountService saveAccount");
        	return accountDal.saveAccount();
        };
        
    }
    
    angular.module("accountApp").service("accountService", ['$log','accountDal', AccountService]);

}());