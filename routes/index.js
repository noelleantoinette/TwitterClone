module.exports = function(io){

var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function(req, res) {
    var tweets = tweetBank.list();
    res.render('index', {
        title: 'Twitter.js',
        tweets: tweets,
        showForm: false
    });
});

router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    var personTweet = tweetBank.find({
        name: name

    });

    res.render('index', {
        tweets: personTweet,
        showForm: true,
        name:name
    })
})

router.get('/users/:name/tweets/:id', function(req, res) {
    var name = req.params.name;
    var id = Number(req.params.id);
    var personTweet = tweetBank.find({
        id: id
    });

    res.render('index', {
        tweets: personTweet,
        showForm: true
    })
})

router.post('/submit', function(req, res) {
	
  var name = req.body.name;
  var text = req.body.text;
  console.log(req.body, 'this is tweet')
  tweetBank.add(name, text);
  io.sockets.emit('new_tweet', { name: name, text: text});

  //res.redirect('/');
});

router.get('')


return router;
}


