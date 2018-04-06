var express = require('express'),
    app = express(),
    port = process.env.port || 8099;

app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/node_modules'));

app.listen(port, function() {
    console.log('Server running on http://localhost:' +  port);
});