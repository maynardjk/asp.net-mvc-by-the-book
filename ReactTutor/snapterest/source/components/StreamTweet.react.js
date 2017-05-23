var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Tweet = require('./Tweet.react');
var CollectionActionCreators = require('../actions/CollectionActionCreators');

var StreamTweet = React.createClass({
	
	addTweetToCollection: function(tweet){
		CollectionActionCreators.addTweetToCollection(tweet);
	},
	
	getInitialState: function() {
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
			numberOfReceivedTweets: 1,
			numberOfDisplayedTweets: 1
		};
	},
	
	componentDidMount: function(){
		console.log('[Snapterest] StreamTweet: Running componentDidMount()');
		var componentDOMRepresentation = ReactDOM.findDOMNode(this);
		window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;
		window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
	},
	
	componentWillReceiveProps: function(nextProps){
		console.log('[Snapterest] StreamTweet: Running componentWillReveiveProps()');
		var currentTweetLength = this.props.tweet.text.length;
		var nextTweetLength = nextProps.tweet.text.length;
		var isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength);
		var headerText;
		
		this.setState({
			numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing
		});
		
		if (isNumberOfCharactersIncreasing){
			headerText = 'Number of characters is increasing';
		}
		else{
			headerText = 'Latest public foto from Twitter';
		}
		
		this.setState({
			headerText: headerText
		});
		
		window.snapterest.numberOfReceivedTweets++;
	},
	
	shouldComponentUpdate: function(nextProps, nextState){
		console.log('[Snapterest] StreamTweet: Running shouldComponentUpdate()');
		return (nextProps.tweet.text.length > 1);
	},
	
	componentWillUpdate: function(nextProps, nextState) {
		console.log('[Snapterest] StreamTweet: Running componentWillUpdate()');
	},
	
	componentDidUpdate: function(prevProps, prevState){
		console.log('[Snapterest] StreamTweet: Running componentDidUpdate()');
		window.snapterest.numberOfDisplayedTweets++;
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
					tweet = {tweet}
					onImageClick = {this.addTweetToCollection} />
			</section>
		);
	}
});

module.exports = StreamTweet;