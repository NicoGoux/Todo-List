import {useState} from 'react';
import {TodoItemUI} from './TodoItemUI';

function TodoItem({todo, todoList, setTodoList}) {
	const [checked, setChecked] = useState(todo.completed);

	const onClickCheckBox = () => {
		todo.completed = !todo.completed;
		setChecked(todo.completed);

		// Actualiza el estado de la lista para que se vea reflejado en el contador
		const newTodoList = [...todoList];
		setTodoList(newTodoList);
	};

	const onClickDelete = () => {
		const newTodoList = todoList.filter(
			(todoInList) => todoInList.text !== todo.text
		);
		setTodoList(newTodoList);
	};

	return (
		<TodoItemUI
			todo={todo}
			checked={checked}
			onClickCheckBox={onClickCheckBox}
			onClickDelete={onClickDelete}
		/>
	);
}

export {TodoItem};
