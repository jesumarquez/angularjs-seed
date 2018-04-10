(function(){
    angular.module('app.customer', [])
    .controller('CustomerCtrl', CustomerCtrl);

    CustomerCtrl.$inject = ['customerSvc'];

    function CustomerCtrl(customerSvc) {
        var vm = this;
        vm.name = '';
        vm.save = save;
        vm.getAll = getAll;

        function getAll() {
            customerSvc.getAll()
            .then(function(res){
                vm.list = res;
            });
        }

        function save() {
            customerSvc.save(vm.name)
                .then(function (res) {
                    vm.name = '';
                    vm.getAll();
                })
        }
    }
})();