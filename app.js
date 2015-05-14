var express = require( 'express' );
var app = express();
var morgan = require('morgan');
var nodemon = require('nodemon');
var swig = require('swig');

app.use(morgan('dev'));

app.get('/', function(req, res){

	res.send('made it!')
})

var server = app.listen(3000, function(){

var host = server.address().address;
var port = server.address().port;

})

app.engine('html',swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.set('view cache', false);
swig.setDefaults({cache:false})