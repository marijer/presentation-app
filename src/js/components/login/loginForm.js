"use strict";

var React = require('react');

var LoginForm = React.createClass({
	render: function() {
		var classString = "user-login-wrapper";
		var loginContent = <input type="text" name="username" autoComplete="off" autoCorrect="Off" onChange={this.props.handleChange} value={this.props.inputValue} placeholder="whats your name?" autoFocus="true" />;

		if (this.props.isValidated) {
			if (this.props.animate) {
				classString += " logged-animation";
			} else {
				classString += " logged-in";
			}
			loginContent= <span className="user-label" onClick={this.props.logout}>{this.props.inputValue}</span>;
		}

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