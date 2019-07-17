import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStrean } from '../../actions';
import ReuseForm from './ReuseableForm';
import _ from 'lodash';

class StreamEdit extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.anything);
	}

	onFormSubmit = (e) => {
		this.props.editStrean(this.props.match.params.anything, e);
	};

	render() {
		if (!this.props.stream) {
			return <div>Loading</div>;
		}
		return (
			<div>
				<h3>Edit a Stream</h3>
				<ReuseForm
					// initialValues={{
					// 	title: this.props.stream.title,
					// 	description: this.props.stream.description
					// }}   <-- This is good too

					// initialValues={this.props.stream}
					// if we do above, we will update id and userId as well. Not good practice when using external api which validates what post request. They might not like you change id and userId, hence, error mesage and etc

					initialValues={_.pick(this.props.stream, 'title', 'description')}
					onFormSubmit={this.onFormSubmit}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.anything] };
};

export default connect(mapStateToProps, { fetchStream, editStrean })(StreamEdit);
