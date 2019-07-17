import _ from 'lodash';
import {
	CREATE_STREAM,
	FETCH_STREAMS,
	FETCH_STREAM,
	DELETE_STREAM,
	EDIT_STREAM
} from '../actions/type';

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case CREATE_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case EDIT_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case FETCH_STREAMS:
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		case DELETE_STREAM:
			return _.omit(state, action.payload);
		default:
			return state;
	}
};

// If we are storing state as array
// export const streamReducer = (state = [], action) => {
// 	if (action.type === 'EDIT_STREAM') {
// 		return state.map((a) => {
// 			if (a.id === action.payload.id) {
// 				return action.payload;
// 			} else {
// 				return a;
// 			}
// 		});
// 	} else {
// 		return state;
// 	}
// };
