jest.dontMock('../Header.react');

describe('Header component', function(){
	it('Renders provided text header', function(){
		var React = require('react');
		var ReactDOM = require('react-dom');
		var TestUtils = require('react-addons-test-utils');
		var Header = require('../Header.react');
		
		var header = TestUtils.renderIntoDocument(
			<Header text="Testing..." />
		);
		var actualHeaderText = ReactDOM.findDOMNode(header).textContent;
		expect(actualHeaderText).toBe('Testing...');
		
		var defaultHeader = TestUtils.renderIntoDocument(
			<Header />
		);
		var actualDefaultTextHeader = ReactDOM.findDOMNode(defaultHeader).textContent;
		expect(actualDefaultTextHeader).toBe('Default header');
		
	});
});
