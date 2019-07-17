import {
	SIGN_IN,
	SIGN_OUT,
	CREATE_STREAM,
	FETCH_STREAMS,
	FETCH_STREAM,
	DELETE_STREAM,
	EDIT_STREAM
} from './type';
import streamsApi from '../api/streams';
import history from '../history';

export const signIn = (x) => {
	return {
		type: SIGN_IN,
		payload: x
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT
	};
};

export const createStream = (formValue) => {
	return async (dispatch, getState) => {
		const { userId } = getState().userId;
		const response = await streamsApi.post('./streams', { ...formValue, userId });
		dispatch({ type: CREATE_STREAM, payload: response.data });
		history.push('/');
	};
};

export const fetchStreams = () => {
	return async (dispatch) => {
		const response = await streamsApi.get('./streams');
		dispatch({ type: FETCH_STREAMS, payload: response.data });
	};
};

export const fetchStream = (id) => {
	return async (dispatch) => {
		const response = await streamsApi.get(`./streams/${id}`);

		dispatch({ type: FETCH_STREAM, payload: response.data });
	};
};

export const editStrean = (id, formValue) => {
	return async (dispatch) => {
		const response = await streamsApi.patch(`./streams/${id}`, formValue);

		dispatch({ type: EDIT_STREAM, payload: response.data });
		history.push('/');
	};
};

export const deleteStream = (id) => {
	return async (dispatch) => {
		await streamsApi.delete(`./streams/${id}`);

		dispatch({ type: DELETE_STREAM, payload: id });
		history.push('/');
	};
};
