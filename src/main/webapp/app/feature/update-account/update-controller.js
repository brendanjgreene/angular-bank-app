"use strict";

(function() {

    var UpdateController =  function(accountService, $log, $location, $window, $stateParams) {
        
    	$log.log("updateController Created");
    	var vm = this;
    	vm.test = "test";
    	
    	vm.Id=$stateParams.accountId;
    vm.First=$stateParams.accountFirstName;
    vm.Last=$stateParams.accountSecondName;
    vm.Number=$stateParams.accountNumber;
    	
    	function init() {
        	accountService.getAccounts().then(function (results) {
           	vm.accounts = results;
           	$log.log("In the update controller the value of the result promise is ");
           	$log.log(JSON.stringify(vm.accounts));
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
       }
       
       init();
       
       vm.updateAccount = function(account) {
	   		$log.log("UpdateController updateAccount")
	   		$location.path("/account");
	   		$window.location.reload();
      
       };
        
            
    };

    angular.module('accountApp').controller('updateController', ['accountService','$log','$location', '$window', '$stateParams', UpdateController]);
}());