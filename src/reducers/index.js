import { combineReducers } from 'redux';
import GoogleAuth from './GoogleAuth';
import streamReducers from './streamsReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
	isSignedIn: GoogleAuth,
	userId: GoogleAuth,
	form: formReducer,
	streams: streamReducers
});
