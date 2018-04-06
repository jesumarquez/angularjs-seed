var express = require('express'),
    app = express(),
    port = process.env.port || 8099,
    customerRouter = require('./routes/customer.route');

app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/node_modules'));

app.use('/api/customer', customerRouter);

app.listen(port, function() {
    console.log('Server running on http://localhost:' +  port);
});