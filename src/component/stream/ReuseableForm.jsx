import React from 'react';
import { Field, reduxForm } from 'redux-form';

class ReuseForm extends React.Component {
	renderError(meta) {
		if (meta.error && meta.touched) {
			return (
				<div className="ui error message">
					<div className="header">{meta.error}</div>
				</div>
			);
		}
	}

	//<input onChange={a.input.onChange} value={a.input.value} />
	renderInput = (x) => {
		const className = `field ${x.meta.error && x.meta.touched ? 'error' : ''}`;

		return (
			<div className={className}>
				<label>{x.label}</label>
				<input {...x.input} autoComplete="off" />
				{this.renderError(x.meta)}
			</div>
		);
	};

	// onFormSubmit = (e) => {
	//   this.props.createStream(e);
	// };
	onFormSubmit = (e) => {
		this.props.onFormSubmit(e);
	};

	render() {
		return (
			<form className="ui form error" onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
				<Field name="title" label="Enter Title" component={this.renderInput} />
				<Field name="description" label="Enter Description" component={this.renderInput} />
				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}

const validate = (formValues) => {
	const errors = {};

	if (!formValues.title) {
		// only ran if the user didn't put in any tile value
		errors.title = 'You must enter a title';
	}
	if (!formValues.description) {
		errors.description = 'You must enter a description';
	}

	return errors;
};

//  export default connect()(reduxForm({ form: 'streamCreate', validate })(StreamCreate));

// const formWrapped = reduxForm({ form: 'streamCreate', validate })(ReuseForm);
// export default connect(null, { createStream })(formWrapped);

export default reduxForm({ form: 'reuseForm', validate })(ReuseForm);
