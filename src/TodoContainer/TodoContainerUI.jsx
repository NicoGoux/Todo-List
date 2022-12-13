import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import './TodoContainer.scss';

function TodoContainerUI({
	todoList,
	setTodoList,
	todoListFiltered,
	setTodoListFiltered,
}) {
	return (
		<div className='TodoContainer'>
			<h2 className='title'>Your task</h2>

			<TodoSearch
				todoList={todoList}
				setTodoListFiltered={setTodoListFiltered}
			/>

			<TodoList
				todoList={todoListFiltered}
				setTodoList={setTodoList}
			></TodoList>

			<TodoCounter todoList={todoList} />
		</div>
	);
}

export {TodoContainerUI};
