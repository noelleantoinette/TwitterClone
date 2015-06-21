// pull in the Sequelize library
var Sequelize = require('sequelize');

var twitterjsDB = new Sequelize('twitterjs', [username='root'], null, {})

// open the connection to our database
twitterjsDB
    .authenticate()
    .catch(function(err) {
        console.log('Unable to connect to the database:', err);
    })
    .then(function() {
        console.log('Connection has been established successfully.');
    });

var Tweet = require('./tweet')(twitterjsDB);
var User = require('./user')(twitterjsDB);

// adds a UserId foreign key to the `Tweet` table
User.hasMany(Tweet);
Tweet.belongsTo(User);

module.exports = {
    User: User,
    Tweet: Tweet
};




