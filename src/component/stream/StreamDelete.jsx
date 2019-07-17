import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import Modal from '../Modal';
import history from '../../history';
import { Link } from 'react-router-dom';


class StreamEdit extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.anything);
	}

	onDeleteClick = () => {
		this.props.deleteStream(this.props.match.params.anything)
	}

	actions() {
		return(
			<React.Fragment>
				<button onClick={this.onDeleteClick} className='ui primary button'>Delete</button>
        <Link to='/' className='ui button red'>Cancel</Link>
			</React.Fragment>
		);
	}

	renderMessage() {
		if(!this.props.stream) {
			return 'Are you sure you want to delete this stream?'
		}

		return `Are you sure you want to delete this stream with the title : " ${this.props.stream.title} "`
	}

	render() {
		return(
			<div>
				<Modal 
					title="Delete Stream"
					message={this.renderMessage()}
					actions={this.actions()}
					onDissmiss={() => {history.push('/')}}
				/>
			</div>	
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.anything] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamEdit);
