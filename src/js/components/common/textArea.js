"use strict";

var React = require('react');

var TextInput = React.createClass({
	propTypes: {
		name: React.PropTypes.string.isRequired,
		label: React.PropTypes.string,
		onChange: React.PropTypes.func.isRequired,
		placeholder: React.PropTypes.string,
		value: React.PropTypes.string,
		error: React.PropTypes.string
	},

	render: function() {
		var wrapperClass = 'form-group ' + this.props.class;
		if (this.props.error && this.props.error.length > 0) {
			wrapperClass += " " + 'has-error';
		}

		return (
			<div className={wrapperClass}>
				<label htmlFor={this.props.name}>{this.props.label}</label>
				<div className="field">
					<textarea
						name={this.props.name}
						className="form-control"
						placeholder={this.props.placeholder}
						ref={this.props.name}
						value={this.props.value}	
						onChange={this.props.onChange}/>
				</div>
				<div className="textarea">{this.props.error}</div>
			</div>
		);
	}
});

module.exports = TextInput;