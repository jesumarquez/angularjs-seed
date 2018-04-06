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

module.exports = router;