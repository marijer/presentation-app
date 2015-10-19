var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var TextInput = require('../common/textInput.js');

var PresentationHeader = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
		isDirty: React.PropTypes.bool.isRequired,
		onChange: React.PropTypes.func.isRequired,
		onSave: React.PropTypes.func.isRequired,
		onKill: React.PropTypes.func.isRequired
	},

	render: function() {
		return (
			<div className='sub-header'>
				<div className='inline-block right1'>
					<button type='button' 
						className='btn btn-save' 
						disabled={!this.props.isDirty} 
						onClick={this.props.onSave} >
						Opslaan
					</button>
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
					<button type='button' 
							className='btn btn-delete' 
							onClick={this.props.onKill} >
						Verwijderen
					</button>		
				</div>

			</div>
		);	
	}
});

module.exports = PresentationHeader;