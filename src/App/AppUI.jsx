import React from 'react';
import './App.scss';
import {CreateTodoContainer} from '../CreateTodoContainer';
import {TodoContainer} from '../TodoContainer';

function AppUI() {
	return (
		<React.Fragment>
			<CreateTodoContainer />
			<TodoContainer />
		</React.Fragment>
	);
}

export {AppUI};
