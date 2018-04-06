var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = process.env.port || 8099,
    customerRouter = require('./routes/customer.route');

app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/node_modules'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/customer', customerRouter);

app.listen(port, function() {
    console.log('Server running on http://localhost:' +  port);
});