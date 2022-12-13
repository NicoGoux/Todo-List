import {TodoListUI} from './TodoListUI';

function TodoList({todoList, setTodoList}) {
	return <TodoListUI todoList={todoList} setTodoList={setTodoList} />;
}

export {TodoList};
