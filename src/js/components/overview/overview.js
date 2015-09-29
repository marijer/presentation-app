"use strict";

var React = require('react');

var Overview = React.createClass({
	getInitialState: function() {
    	return { 
    		value: '',
    		isValidated: false
    	 };
 	},

	render: function() {
		return (
			<div>
				<h1>Overview</h1>
			</div>
		);
	}
});

module.exports = Overview;