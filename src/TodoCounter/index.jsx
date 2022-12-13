import {TodoCounterUI} from './TodoCounterUI';

function TodoCounter({todoList}) {
	const completed = () => {
		return todoList.filter((todo) => todo.completed === true).length;
	};

	return (
		<TodoCounterUI
			completed={completed}
			todoList={todoList}
		></TodoCounterUI>
	);
}

export {TodoCounter};
