var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
    port = process.env.port || 8099,
    customerRouter = require('./routes/customer.route'),
    ignoredPaths = ['/static'];

app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/node_modules'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/customers', customerRouter);

app.all('/*', function(req, res, next) {
    //Redirecting to index only the requests that do not start with ignored paths
    if(!startsWith(req.url, ignoredPaths))
      res.sendFile('index.html', { root: path.resolve(__dirname, 'public') });
    else
      next();
  });
  
function startsWith(string, array) {
    for(i = 0; i < array.length; i++)
        if(string.startsWith(array[i]))
            return true;
    return false;
}

app.listen(port, function() {
    console.log('Server running on http://localhost:' +  port);
});