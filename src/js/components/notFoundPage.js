'use strict';

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
	render: function() {
		return(
			<div>
				<h1>Pagina niet gevonden</h1>
				<p><Link to='app'>Back to Home</Link></p>
			</div>
		);
	}
});

module.exports = NotFoundPage;