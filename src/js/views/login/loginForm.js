'use strict';

var React = require('react');
var TextInput = require('../common/textInput.js');

var LoginForm = React.createClass({
	propTypes: {
		userName: React.PropTypes.string,
		handleChange: React.PropTypes.func.isRequired,
		validateForm: React.PropTypes.func.isRequired,
	},

	render: function() {
		return (
			<form onSubmit={this.props.validateForm}>
				<div className='user-login-wrapper'>
					<TextInput 
					name='username'
					autoFocus='true'
					placeholder='Wat is je naam?'
					class='login-input-wrapper'
					value={this.props.userName}
					onChange={this.props.handleChange} />

					<button type='button' 
						className='btn btn-new top1' 
						onClick={this.props.validateForm} >
						Login
					</button>
				</div>
			</form>
		);
	}
});

module.exports = LoginForm;