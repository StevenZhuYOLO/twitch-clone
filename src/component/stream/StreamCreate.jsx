import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import ReuseForm from './ReuseableForm';

class StreamCreate extends React.Component {
	onFormSubmit = (e) => {
		this.props.createStream(e);
	};

	render() {
		return (
			<div>
				<h3>Create a Stream</h3>
				<ReuseForm onFormSubmit={this.onFormSubmit} />
			</div>
		);
	}
}

export default connect(null, { createStream, ReuseForm })(StreamCreate);
