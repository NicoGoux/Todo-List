import {useContext} from 'react';
import {Context} from '../Context';
import {TodoCounterUI} from './TodoCounterUI';

function TodoCounter() {
	const {todoList} = useContext(Context);

	const completed = () => {
		return todoList.filter((todo) => todo.completed === true).length;
	};

	return <TodoCounterUI completed={completed} todoList={todoList}></TodoCounterUI>;
}

export {TodoCounter};
