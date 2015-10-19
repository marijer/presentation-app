var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var TextInput = require('../common/textInput.js');

var PresentationHeader = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
		onChange: React.PropTypes.func.isRequired,
		onSave: React.PropTypes.func.isRequired,
		onDelete: React.PropTypes.func.isRequired
	},

	render: function() {
		return (
			<div className='presentation-meta'>
				<div className='inline-block right1'>
					<input type='button' value='Opslaan' className='btn btn-default' onClick={this.props.onSave} />
				</div>

				<div className='inline-block right1'>
					<TextInput 
						name='title'
						placeholder='Title'
						class='presentation-title'
						value={this.props.title}
						onChange={this.props.onChange} />
				</div>

				<div className='inline-block fl-right'>
					<input type='button' value='Verwijderen' className='btn btn-default' onClick={this.props.onDelete} />
				</div>

			</div>

		);	
	}
});

module.exports = PresentationHeader;