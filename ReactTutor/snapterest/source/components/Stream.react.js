var React = require('react');
var SnapkiteStreamClient = require('snapkite-stream-client');
var StreamTweet = require('./StreamTweet.react');
var Header = require('./Header.react');

var Stream = React.createClass({
	
	getInitialState: function(){
		return {
			tweet: null
		};
	},
	
	componentDidMount: function(){
		SnapkiteStreamClient.initializeStream(this.handleNewTweet);
	},
	
	componentWillUnmount: function(){
		SnapkiteStreamClient.destroyStream();
	},
	
	handleNewTweet: function(tweet){
		this.setState({
			tweet: tweet
		});
	},
	
	render: function(){
		var tweet = this.satt.tweet;
		if (tweet){
			return(
				<StreamTweet
					tweet = {tweet}
					onAddTweetToCollection = {this.props.onAddTweetToCollection} />
			);
		}
		
		return (
			<Header text="Waiting for public fotos from Twitter" />
		);
	}
});

module.exports = Stream;
