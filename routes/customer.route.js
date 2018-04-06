var express = require('express'),
    router = express.Router(),
    customers = [];

router.get('/', function (req,res) {
    res.json(customers);
});

router.post('/', function (req,res){
    customers.push(req.body);
    res.setHeader('Location', 'api/customer/' + req.body.id);
    res.status(201).json(req.body);
});

router.patch('/:id', function (req, res) {
    var customer = customers.find(function(item){
        return item.id == req.params.id;
    });

    if(customer != null) {
        customer.name = req.body.name;
        res.status(204);
    }
    else {
        res.status(404);
    }
    res.end();
});

router.delete('/:id', function (req, res) {
    var index = customers.findIndex(function(item){
        return item.id == req.params.id;
    });

    if(index >= 0) {
        customers.splice(index, 1);
        res.status(204);
    }
    else {
        res.status(404);
    }
    res.end();
});

module.exports = router;