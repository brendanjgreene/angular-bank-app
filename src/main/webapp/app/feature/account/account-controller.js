"use strict";

(function() {

    var AccountController =  function(accountService, $log, $location, $window, $state) {
        
    	$log.log("AccountController Created");
    	var vm = this;
        
        vm.isHidden = false;
        
        vm.hideTable = function()
        {
        	vm.isHidden = !vm.isHidden
        };
        
        function init() {
        	accountService.getAccounts().then(function (results) {
           	vm.accounts = results;
           	$log.log("In the account controller the value of the result promise is ");
           	$log.log(JSON.stringify(vm.accounts));
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
       }
       
       init();
       
       vm.updateAccount = function(account) {
    	   		$log.log("AccountController updateAccount");
    	   		$state.go("update", {
    				accountId : account.id,
    				accountFirstName : account.firstName,
    				accountSecondName : account.secondName,
    				accountNumber : account.accountNumber
    			});
           
       };
       vm.deleteAccount = function(id) {
    	   
	   		$log.log("AccountController deleteAccount");
	   		$location.path("/account/delete");
	   		$window.location.reload();
      
       };
            
    };

    angular.module('accountApp').controller('accountController', ['accountService','$log','$location','$window', '$state', AccountController]);
}());