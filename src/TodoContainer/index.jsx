import {useState, useEffect} from 'react';
import {TodoContainerUI} from './TodoContainerUI';

function TodoContainer({todoList, setTodoList}) {
	const [todoListFiltered, setTodoListFiltered] = useState([...todoList]);

	useEffect(() => setTodoListFiltered(todoList), [todoList]);

	return (
		<TodoContainerUI
			todoList={todoList}
			setTodoList={setTodoList}
			todoListFiltered={todoListFiltered}
			setTodoListFiltered={setTodoListFiltered}
		/>
	);
}

export {TodoContainer};
