module.exports = function(io) {

    var express = require('express');
    var router = express.Router();
    // could use one line instead: var router = require('express').Router();
    var tweetBank = require('../tweetBank');

    var User = require('./../models/index').User;

    var Tweet = require('./../models/index').Tweet;



    // router.get('/', function(req, res) {

    //     Tweet.findAll({
    //             include: [User]
    //         }).error(function(err) {
    //             console.log('got to error')
    //         })
    //         .then(function(tweeties) {
    //             res.render('index', {
    //                 title: 'Twitter.js',
    //                 tweets: tweeties,
    //                 showForm: false
    //             });
    //         });

    //     Tweet.findAll({include: [ 'id' ] }).then(function(tweeties) {
    //         // tweet = tweeties.dataValues.tweet;

    //         console.log('this is tweets from routes', tweeties)

    //     })
    // });

    // ---- original goes to tweetbank
    router.get('/', function(req, res) {
        var tweets = tweetBank.list();
        console.log(tweets)

        res.render('index', {
            title: 'Twitter.js',
            tweets: tweets,
            showForm: false
        });
    });

/// Goes to SQL 

    // router.get('/users/:name', function(req, res) {
    //     var tweeties;
    //     var name = req.params.name;

    //     User.findById(name).then(function(user) {
    //         console.log('user route');
    //         user.getTweets().then(function(tweets) {
    //             console.log('this is tweets in user', tweets[0].tweet);
    //             tweeties = tweets[0].tweet;
    //             return tweets[0].tweet
    //         });
    //     });

    //     res.render('index', {
    //         tweets: tweeties,
    //         showForm: true
    //     })
    // })

    ///  --- oroginal goes to tweetbank
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
        io.sockets.emit('new_tweet', {
            name: name,
            text: text
        });

        //res.redirect('/');
    });

    router.get('')


    return router;
}
