var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var UserStore = require('../../stores/userStore');
var UserActions = require('../../actions/userActions');

var Header = React.createClass({
	mixins: [
		Router.Navigation,
		Router.State
	],

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

    logout: function(event) {
		event.preventDefault();

		UserActions.logout();
		this.transitionTo('login');
	},


	render: function() {
		var innerContent = '';
		var backOption = ''

		if (this.state.user){
			innerContent = <div onClick={this.logout}>{this.state.user.name}</div>
		}

		 var path = this.getPath();
		 if(path.indexOf('presentation') > 0 || path.indexOf('add') > 0) {
		 	backOption = <Link to='overview' className='inline-block right1'>
			   			<span>terug</span>
		   			</Link>
		 }

	return (
		<div className='header'>
			<div className='back-option fl-left'>
				{backOption}
			</div>
			<div className='profile fl-right'>
				{innerContent}
			</div>
		</div>
		)
	}
})

module.exports = Header;