var React = require('react');
var TextInput = require('../common/textInput.js');
var TextArea = require('../common/textArea.js');

var SlideForm = React.createClass({
	render: function() {
		return (
			<div className="slide-wrapper">
				<TextInput 
					name="title"
					placeholder="Title"
					class="slide-title"
					value={this.props.slide.title}
					onChange={this.props.onChange} />

				<TextArea 
					name="content"
					placeholder="content"
					class="slide-content top1"
					value={this.props.slide.content}
					onChange={this.props.onChange} />
			</div>
		);	
	}
});

module.exports = SlideForm;