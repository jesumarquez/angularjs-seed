(function(){
    angular.module('app.customer', [])
    .controller('CustomerCtrl', CustomerCtrl);

    CustomerCtrl.$inject = ['customerSvc'];

    function CustomerCtrl(customerSvc) {
        var vm = this;
        vm.name = ''; 
        vm.currentId = -1; //customer id en edicion
        vm.action = 'list';

        //metodos
        vm.save = save;
        vm.getAll = getAll;
        vm.edit = edit;
        vm.update = update;
        vm.clear = clear;
        vm.delete = deleteCustomer;

        function getAll() {
            customerSvc.getAll()
            .then(function(res){
                vm.list = res;
            });
        }

        function save() {
            if(vm.name.trim() == '') {
                return;
            }
            
            customerSvc.save(vm.name)
                .then(function (res) {
                    vm.name = '';
                    vm.getAll();
                })
        }

        function edit(customer) {
            vm.name = customer.name;
            vm.currentId = customer.id;
            vm.action = 'edit';
        }

        function update() {
            customerSvc.update(vm.currentId, vm.name)
                .then(function (res) {
                    vm.clear();
                    vm.getAll();
                })
        }

        function clear() {
            vm.currentId = -1;
            vm.action = 'list';
            vm.name = '';
        }

        function deleteCustomer(id) {
            customerSvc.delete(id)
                .then(function (res) {
                   vm.clear();
                   vm.getAll(); 
                });
        }
    }
})();