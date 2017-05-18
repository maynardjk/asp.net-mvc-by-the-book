var AppDispatcher = require('../dispatcher/AppDispatcher');

function receiveTweet(tweet){
	var action = {
		type: 'reveive_tweet',
		tweet: tweet
	};
	
	AppDispatcher.dispatch(action);
}

module.exports = {
	receiveTweet: receiveTweet
};
