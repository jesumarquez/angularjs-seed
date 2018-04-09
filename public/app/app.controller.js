(function(){
    angular.module('app')
    .controller('MainController', MainController);

    MainController.$inject = [];

    function MainController() {
        var vm = this;
        vm.version = '1.0';
        vm.showAlert = showAlert;

        function showAlert(){
            alert('Version: ' + vm.version);
        }
    }
})();