import React from 'react';
import { fetchStreams } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class StreamList extends React.Component {
	componentDidMount() {
		this.props.fetchStreams();
	}

	renderButton(stream) {
		if (stream.userId === this.props.currentUserId) {
			return (
				<div className="right floated content">
					<Link to={`./stream/edit/${stream.id}`} className="ui button primary">
						Edit
					</Link>
					<Link to={`./stream/delete/${stream.id}`} className="ui button negative">
						Delete
					</Link>
				</div>
			);
		}
	}

	renderCreateButton() {
		if (this.props.isSignedIn) {
			return (
				<div style={{ textAlign: 'right' }}>
					<Link to="./stream/new" className="ui button primary">
						Create Stream
					</Link>
				</div>
			);
		}
	}

	renderList() {
		return this.props.streams.map((stream) => {
			return (
				<div className="item" key={stream.id}>
					{this.renderButton(stream)}
					<i className="large middle aligned icon camera" />
					<div  className="content">
						<Link to={`/stream/${stream.id}`} className='header'>
							{stream.title}
						</Link>
						<div className="description">{stream.description}</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<h2>Streams</h2>
				<div className="ui celled list">{this.renderList()}</div>
				{this.renderCreateButton()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		streams: Object.values(state.streams),
		currentUserId: state.userId.userId,
		isSignedIn: state.isSignedIn.isSignedIn
	};
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
