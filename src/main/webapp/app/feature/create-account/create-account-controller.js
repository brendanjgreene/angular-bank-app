"use strict";

(function() {

    var CreateController =  function(accountService, $log, $state) {
        
    	$log.log("createController Created");
    	var vm = this;
        
        vm.addAccount = function(newAccount) {
            $log.log("The account to add is: ");
            $log.log(JSON.stringify(newAccount));
            accountService.saveAccount(newAccount).then(function (results) {
                vm.accountAddMessage = results;
                $log.log("account add message"+JSON.stringify(vm.accountAddMessage));
                $state.go("account");
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
        };
            
    };

    angular.module('accountApp').controller('createController', ['accountService','$log','$state', CreateController]);
}());