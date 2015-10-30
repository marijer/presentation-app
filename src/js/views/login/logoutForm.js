'use strict';

var React = require('react');

var logoutForm = React.createClass({
	propTypes: {
		userName: React.PropTypes.string.isRequired,
		logout: React.PropTypes.func.isRequired,
	},

	render: function() {
		return (
			<div className='logout-wrapper'>
				<div>Je bent ingelogd als <b>{this.props.userName}</b></div>
				<div className='top1'>Wil je uitloggen?</div>

				<button type='button' 
					className='btn btn-new top2' 
					onClick={this.props.logout} >
					Logout
				</button>
			</div>
		)
	}
});

module.exports = logoutForm;