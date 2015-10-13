"use strict";

var React = require('react');

var LoginForm = React.createClass({
	render: function() {
		var classString = "user-login-wrapper";
		var loginContent = <input type="text" name="username" autoComplete="off" autoCorrect="Off" onChange={this.props.handleChange} value={this.props.inputValue} placeholder="whats your name?" autoFocus="true" />;

		return (
			<form onSubmit={this.props.validateForm}>
				<div className={classString}>
					{loginContent}
				</div>
			</form>
		);
	}
});

module.exports = LoginForm;