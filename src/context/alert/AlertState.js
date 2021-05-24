import React, { useReducer } from 'react';

import alertContext from './alertContext';
import alertReducer from './alertReducer';

import { REMOVE_ALERT, SET_ALERT } from '../type';

const AlertState = (props) => {
	const initialState = null;

	const [state, dispatch] = useReducer(alertReducer, initialState);

	//Set Alert

	//Add an allert
	const setAlert = (msg, type) => {
		dispatch({ type: SET_ALERT, payload: { msg, type } });

		setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
	};

	return (
		<alertContext.Provider value={{ alert: state, setAlert }}>
			{props.children}
		</alertContext.Provider>
	);
};

export default AlertState;
