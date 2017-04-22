var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Tweet = require('./Tweet.react');

var StreamTweet = React.createClass({
	
	getinitialState: function() {
		console.log('[Snapterest] StreamTweet: Running getInitialState()');
		return {
			numberOfCharactersIsIncreasing: null,
			headerText: null
		};
	},
	
	componentWillMount: function(){
		console.log('[Snapterest] StreamTweet: Running componentWillMount()');
		this.setState({
			numberOfCharactersIsIncreasing: true,
			headerText: 'Latest public foto from Twitter'
		});
		
		window.snapterest = {
			numberOfReveivedTweets: 1,
			numberOfDisplayedTweets: 1
		};
	},
	
	componentDidMount: function(){
		console.log('[Snapterest] StreamTween: Running componentDidMount()');
		var componentDOMRepresentation = ReactDOM.findDOMNode(this);
		window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;
		window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
	},
	
	componentWillUnmount: function(){
		console.log('[Snapterest] StreamTweet: Running componentWillUnmount()');
		delete window.snapterest;
	},
	
	render: function(){
		console.log('[Snapterest] StreamTweet: Running render()');
		
		return(
			<section>
				<Header text = {this.state.headerText} />
				<Tweet
					tweet = {this.props.tweet}
					onImageClick = {this.props.onAddTweetToCollection} />
			</section>
		);
	}
});

module.exports = StreamTweet;