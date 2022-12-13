import React from 'react';
import './TodoItem.scss';

function TodoItemUI({todo, checked, onClickCheckBox, onClickDelete}) {
	return (
		<li className='TodoItem'>
			<div className='checkBox' onClick={onClickCheckBox}>
				<div className={`circle ${!checked && 'inactive'}`}></div>
			</div>
			<p className={checked && 'completed'}>{todo.text}</p>
			<div className='deleteTodo' onClick={onClickDelete}>
				X
			</div>
		</li>
	);
}

export {TodoItemUI};
