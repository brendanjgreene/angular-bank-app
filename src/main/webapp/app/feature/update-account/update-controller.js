"use strict";

(function() {

    var UpdateController =  function(accountService, $log) {
        
    	$log.log("updateController Created");
    	var vm = this;
    	vm.test = "test";
    	
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
        
            
    };

    angular.module('accountApp').controller('updateController', ['accountService','$log', UpdateController]);
}());