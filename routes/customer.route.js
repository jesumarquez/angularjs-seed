var express = require('express'),
    router = express.Router(),
    customers = [],
    currentId = 0;

router.get('/', function (req,res) {
    res.json(customers);
});

router.post('/', function (req,res){
    var c = { id: currentId, name: req.body.name };
    customers.push(c);
    res.setHeader('Location', 'api/customer/' + currentId++);
    res.status(201).json(c);
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