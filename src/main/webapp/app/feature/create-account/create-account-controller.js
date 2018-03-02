(function() {

    var CreateController =  function(Dal, $log) {
        
    	$log.log("createController Created");
    	var vm = this;
        vm.test = "creat page working"
        
        vm.addAccount = function(newAccount) {
            $log.log("The account to add is: " + newAccount);
            $log.log(newAccount);
            var accounToJson = JSON.stringify(newAccount);
            $log.log(accounToJson);
            Dal.saveAccount(newAccount).then(function (results) {
                vm.accountAddMessage  = results;
                $state.go('accounts');
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
        };
            
    };

    angular.module('accountApp').controller('createController', ['Dal','$log', CreateController]);
}());