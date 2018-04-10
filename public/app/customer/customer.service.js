(function(){
    angular.module('app.customer')
        .factory('customerSvc', customerSvc);
    
    customerSvc.$inject = ['$resource'];

    function customerSvc($resource) {
        return {
            getAll: getAll,
            save: save
        };

        function getAll() {
            return $resource('/api/customers').query().$promise;
        }

        function save(name) {
            return $resource('/api/customers').save({name: name}).$promise;
        }
    }
})();

