import {useState} from 'react';
import {TodoItemUI} from './TodoItemUI';

function TodoItem({todo, todoListFiltered, todoList, saveTodoList}) {
	const [checked, setChecked] = useState(todo.completed);

	const onClickCheckBox = () => {
		todo.completed = !todo.completed;
		setChecked(todo.completed);

		// Actualiza el estado de la lista para que se vea reflejado en el contador
		const newTodoList = [...todoList];
		saveTodoList(newTodoList);
	};

	const onClickDelete = () => {
		const newTodoList = todoListFiltered.filter(
			(todoInList) => todoInList.text !== todo.text
		);
		saveTodoList(newTodoList);
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
