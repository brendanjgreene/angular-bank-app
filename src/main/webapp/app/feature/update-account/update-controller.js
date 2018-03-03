"use strict";

(function() {

    var UpdateController =  function(accountService, $log, $location, $window, $stateParams) {
        
    	$log.log("updateController Created");
    	var vm = this;
    	vm.test = "test";
    	vm.upAccount=$stateParams.account,
    	
    vm.updateAccount = function(upAccount) {
	   		$log.log("UpdateController updateAccount");
	   		$log.log("UpdateController the upAccount is :" + JSON.stringify(upAccount));
	   		accountService.updateAccount(upAccount).then(function (results){
	   			vm.accountUpdateMessage = results;
	   			$location.path("/account");
	   			$window.location.reload();
	   		}, function (error){
	   			vm.error = true;
	   			vm.errorMessage = error;
	   		})
	   		
      };
        
    };

    angular.module('accountApp').controller('updateController', ['accountService','$log','$location', '$window', '$stateParams', UpdateController]);
}());