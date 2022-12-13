import React from 'react';
import './App.scss';
import {CreateTodoContainer} from '../CreateTodoContainer';
import {TodoContainer} from '../TodoContainer';

function AppUI({todoList, setTodoList}) {
	return (
		<React.Fragment>
			<CreateTodoContainer
				todoList={todoList}
				setTodoList={setTodoList}
			/>
			<TodoContainer
				todoList={todoList}
				setTodoList={setTodoList}
			></TodoContainer>
		</React.Fragment>
	);
}

export {AppUI};
