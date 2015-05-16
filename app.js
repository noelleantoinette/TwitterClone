var express = require('express');
var app = express();
var morgan = require('morgan');
var nodemon = require('nodemon');
var swig = require('swig');
var _ = require('underscore');
var routes = require('./routes/');
var bodyParser = require('body-parser');
var socket = io.connect();

  // When 'new_tweet' events are fired, do something with the packaged tweet
  socket.on('new_tweet', function (tweet) { 
    console.log(tweet);
    alert('Refreshing... check the console...');
    // some logic to add the new tweet to the DOM…
  }); 

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



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
