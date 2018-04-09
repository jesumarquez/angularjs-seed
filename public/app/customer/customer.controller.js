(function(){
    angular.module('app.customer', [])
    .controller('CustomerCtrl', CustomerCtrl);

    CustomerCtrl.$inject = [];

    function CustomerCtrl() {
        var vm = this;
    }
})();