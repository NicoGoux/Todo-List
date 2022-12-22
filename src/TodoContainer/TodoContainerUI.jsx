import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import './TodoContainer.scss';

function TodoContainerUI() {
	return (
		<div className='TodoContainer'>
			<h2 className='title'>Your task</h2>
			<TodoSearch />
			<TodoList />
			<TodoCounter />
		</div>
	);
}

export {TodoContainerUI};
