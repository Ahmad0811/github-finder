import {
	SET_LOADING,
	SEARCH_USER,
	GET_REPOS,
	GET_USER,
	CLEAR_USER,
} from '../type';

export default (state, action) => {
	switch (action.type) {
		case SEARCH_USER:
			return {
				...state,
				users: action.payload,
				loading: false,
			};
		case GET_USER:
			return {
				...state,
				user: action.payload,
				loading: false,
			};
		case GET_REPOS:
			return {
				...state,
				repos: action.payload,
				loading: false,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case CLEAR_USER:
			return {
				...state,
				loading: false,
				users: [],
			};
		default:
			return state;
	}
};
