"use strict";

(function() {

    var UpdateController =  function(accountService, $log, $location, $window, $stateParams, $state) {
        
    	$log.log("updateController Created");
    	var vm = this;
    	vm.test = "test";
    	vm.upAccount=$stateParams.account,
    	
    vm.updateAccount = function(upAccount) {
	   		$log.log("UpdateController updateAccount");
	   		$log.log("UpdateController the upAccount is :" + JSON.stringify(upAccount));
	   		accountService.updateAccount(upAccount).then(function (results){
	   			vm.accountUpdateMessage = results;
	   			$log.log("account update message"+ JSON.stringify(vm.accountUpdateMessage))
	   			$state.go("account");
	   		}, function (error){
	   			vm.error = true;
	   			vm.errorMessage = error;
	   		})
	   		
      };
        
    };

    angular.module('accountApp').controller('updateController', ['accountService','$log','$location', '$window', '$stateParams','$state', UpdateController]);
}());