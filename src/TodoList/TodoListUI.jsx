import {TodoItem} from './TodoItem';
import './TodoList.scss';

function TodoListUI({todoList, setTodoList}) {
	return (
		<ul className='TodoList'>
			{todoList.map((todo) => (
				<TodoItem
					key={todo.text}
					todo={todo}
					todoList={todoList}
					setTodoList={setTodoList}
				/>
			))}
		</ul>
	);
}

export {TodoListUI};
