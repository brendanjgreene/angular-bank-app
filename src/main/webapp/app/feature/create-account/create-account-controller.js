"use strict";

(function() {

    var CreateController =  function(accountService, $log) {
        
    	$log.log("createController Created");
    	var vm = this;
        vm.test = "creat page working"
        
        vm.addAccount = function(newAccount) {
            $log.log("The account to add is: " + newAccount);
            $log.log(newAccount);
            var accounToJson = JSON.stringify(newAccount);
            $log.log(accounToJson);
            accountService.saveAccount(accounToJson).then(function (results) {
            	$log.log("hello");
                vm.accountAddMessage  = results;
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
        };
            
    };

    angular.module('accountApp').controller('createController', ['accountService','$log', CreateController]);
}());