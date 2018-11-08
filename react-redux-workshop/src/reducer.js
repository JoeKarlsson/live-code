import * as types from './actions';

const initialState = [];

const posts = (state = initialState, action) => {

	const newState = state;

	switch (action.type) {

	case types.SET_POSTS:
	  return action.posts;

	default:
		return newState;
	}
};

export default posts;
