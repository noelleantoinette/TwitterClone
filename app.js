var express = require('express');
var app = express();
var morgan = require('morgan');
var nodemon = require('nodemon');
var swig = require('swig');
var _ = require('underscore');
var routes = require('./routes/');
var bodyParser = require('body-parser');
var socketio = require('socket.io');


app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);
app.use(express.static(__dirname + '/public'));

app.set('view cache', false);
swig.setDefaults({
    cache: false
})

var server = app.listen(3000, function() {

            var host = server.address().address;
            var port = server.address().port;

        })

var io = socketio.listen(server);

app.use('/', routes(io));