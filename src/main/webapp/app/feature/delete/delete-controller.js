"use strict";

(function() {

    var DeleteController =  function(accountService, $log, $location, $window, $stateParams) {
        
    	$log.log("deleteController Created");
    	var vm = this;
    	vm.test = "test";
    	vm.delAccount=$stateParams.account,
    	
    vm.deleteAccount = function() {
	   		$log.log("DeleteController deleteAccount");
	   		$log.log("DeleteController the Id of the account to be deleted is :" + vm.delAccount.id);
	   		accountService.deleteAccount(vm.delAccount).then(function (results){
	   			vm.accountDeleteMessage = results;
	   			$location.path("/account");
	   			$window.location.reload();
	   		}, function (error){
	   			vm.error = true;
	   			vm.errorMessage = error;
	   		})
	   		
      };
        
    };

    angular.module('accountApp').controller('deleteController', ['accountService','$log','$location', '$window', '$stateParams', DeleteController]);
}());