import './TodoList.scss';

function TodoList({children, emptyTodos, onEmpty, todoListFiltered, render}) {
	return (
		<section className='todoListContainer'>
			{emptyTodos && onEmpty()}
			{!emptyTodos && todoListFiltered.map(render)}
			<ul className='TodoList'>{children}</ul>
		</section>
	);
}

export {TodoList};
