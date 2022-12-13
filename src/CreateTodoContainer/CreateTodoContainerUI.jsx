import React from 'react';
import './CreateTodoContainer.scss';

function CreateTodoContainerUI({inputValue, onInputChange, onClickButton}) {
	return (
		<div className='CreateTodoContainer'>
			<h2>Create new task</h2>
			<input
				type='text'
				placeholder='New task'
				value={inputValue}
				onChange={onInputChange}
			/>
			<button
				className={'CreateTodoButton'}
				onClick={onClickButton}
			></button>
			<div className='CreateTodoPicture'></div>
		</div>
	);
}

export {CreateTodoContainerUI};
