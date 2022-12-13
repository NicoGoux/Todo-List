import React from 'react';
import {CreateTodoContainerUI} from './CreateTodoContainerUI';

function CreateTodoContainer({todoList, setTodoList}) {
	const [inputValue, setInputValue] = React.useState('');

	const onClickButton = () => {
		if (inputValue === '') {
			return;
		}
		if (todoList.some((todoInList) => todoInList.text === inputValue)) {
			alert('Todo already exist');
			return;
		}
		const newTodo = {text: inputValue, completed: false};
		setTodoList([...todoList, newTodo]);
	};

	const onInputChange = (event) => {
		setInputValue(event.target.value);
	};

	return (
		<CreateTodoContainerUI
			inputValue={inputValue}
			onInputChange={onInputChange}
			onClickButton={onClickButton}
		></CreateTodoContainerUI>
	);
}

export {CreateTodoContainer};
