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
    	
       
    vm.updateAccount = function(account) {
	   		$log.log("UpdateController updateAccount")
	   		$location.path("/account");
	   		$window.location.reload();
      };
        
            
    };

    angular.module('accountApp').controller('updateController', ['accountService','$log','$location', '$window', '$stateParams', UpdateController]);
}());