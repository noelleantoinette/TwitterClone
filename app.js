var express = require('express');
var app = express();
var morgan = require('morgan');
var nodemon = require('nodemon');
var swig = require('swig');
var _ = require('underscore');
var routes = require('./routes/');

app.use(morgan('dev'));


app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));



app.use('/', routes);

app.set('view cache', false);
swig.setDefaults({
    cache: false
})


var server = app.listen(3000, function() {

            var host = server.address().address;
            var port = server.address().port;

        })
