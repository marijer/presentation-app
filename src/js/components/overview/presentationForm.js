var React = require('react');
var TextInput = require('../common/textInput.js');

var PresentationForm = React.createClass({
	render: function() {
		return (
			<div className="presentation-meta">
				<TextInput 
					name="title"
					placeholder="Title"
					class="presentation-title"
					value={this.props.title}
					onChange={this.props.onChange} />

				<input type="button" value="Opslaan" className="btn btn-default" onClick={this.props.onSave} />
			</div>

		);	
	}
});

module.exports = PresentationForm;