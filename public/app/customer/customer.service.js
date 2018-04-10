(function(){
    angular.module('app.customer')
        .factory('customerSvc', customerSvc);
    
    customerSvc.$inject = ['$resource'];

    function customerSvc($resource) {
        return {
            getAll: getAll,
            save: save,
            update: update,
            delete: deleteCustomer
        };

        function getAll() {
            return $resource('/api/customers').query().$promise;
        }

        function save(name) {
            return $resource('/api/customers').save({name: name}).$promise;
        }

        function update(id, name) {
            return $resource('/api/customers/:id', { id: id }, {
                'update': { method: 'PATCH' }
            }).update({ name: name }).$promise;
        }

        function deleteCustomer(id) {
            return $resource('/api/customers/:id', {id: id}).delete().$promise;
        }
    }
})();

