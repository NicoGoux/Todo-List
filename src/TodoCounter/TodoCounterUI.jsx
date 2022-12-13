import './TodoCounter.scss';

function TodoCounterUI({completed, todoList}) {
	return (
		<h2 className='TodoCounter'>
			Has completado {completed()} de {todoList.length}{' '}
		</h2>
	);
}
export {TodoCounterUI};
