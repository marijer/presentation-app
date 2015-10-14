var React = require('react');
var UserStore = require('../../stores/userStore');
var UserActions = require('../../actions/userActions');

var Header = React.createClass({
	logout: function() {
		UserActions.logout();
	},

	getInitialState: function() {
		var _user =  UserStore.isLoggedIn() ? UserStore.getUser() : null;

		return {
			user: _user
		};
	},

	componentDidMount: function() {
		UserStore.addChangeListener(this._onChange);
    },

    _onChange: function() {
		var _user = UserStore.isLoggedIn() ? UserStore.getUser() : null;

		this.setState({
			user: _user
		});
    },

	render: function() {
		var innerContent = '';
		if (this.state.user){
			innerContent = <div>{this.state.user.name}</div>
		}

	return (
		<div className="user-login-wrapper logged-in">
			{innerContent}
		</div>
		)
	}
})

module.exports = Header;