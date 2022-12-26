function TodoCounter({todoList}) {
	const completed = () => {
		return todoList.filter((todo) => todo.completed === true).length;
	};

	return (
		<h2 className='TodoCounter'>
			Has completado {completed()} de {todoList.length}{' '}
		</h2>
	);
}

export {TodoCounter};
