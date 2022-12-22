import {useContext} from 'react';
import {Context} from '../Context';
import {TodoItem} from './TodoItem';
import './TodoList.scss';

function TodoListUI() {
	const {todoList, saveTodoList, todoListFiltered} = useContext(Context);

	return (
		<ul className='TodoList'>
			{todoListFiltered.map((todo) => (
				<TodoItem
					key={todo.text}
					todo={todo}
					todoListFiltered={todoListFiltered}
					todoList={todoList}
					saveTodoList={saveTodoList}
				/>
			))}
		</ul>
	);
}

export {TodoListUI};
