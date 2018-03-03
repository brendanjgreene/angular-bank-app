"use strict";

(function() {

    var CreateController =  function(accountService, $log, $location, $window) {
        
    	$log.log("createController Created");
    	var vm = this;
        vm.test = "creat page working"
        
        vm.addAccount = function(newAccount) {
            $log.log("The account to add is: " + newAccount);
            $log.log(newAccount);
            accountService.saveAccount(newAccount).then(function (results) {
            	$log.log("hello");
                vm.accountAddMessage = results;
                $location.path("/account");
                $window.location.reload();
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
        };
            
    };

    angular.module('accountApp').controller('createController', ['accountService','$log','$location', '$window', CreateController]);
}());