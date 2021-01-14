import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {

	componentDidMount() {
		this.props.fetchStream(this.props.match.params.anything);
	}

	render(){
		if(!this.props.stream){
			return <div>loading...</div>;
		}

		return(
			<div>
				<h1>{this.props.stream.title}</h1>
				<h1>{this.props.stream.description}</h1>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.anything] }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);
