import {Fragment} from 'react';
import {CreateTodoContainerUI} from './CreateTodoContainerUI';

function CreateTodoContainer({
	todoList,
	saveTodoList,
	inputValue,
	setInputValue,
	openModal,
	setOpenModal,
	matchesWidth,
}) {
	const onSubmit = (event) => {
		event.preventDefault();
		if (inputValue === '') {
			return;
		}

		if (todoList.some((todoInList) => todoInList.text === inputValue)) {
			alert('Todo already exist');
			return;
		}
		const newTodo = {text: inputValue, completed: false};
		saveTodoList([...todoList, newTodo]);
		setInputValue('');
	};

	const onClickOpenModalButton = () => {
		setOpenModal(true);
	};

	const onClickCloseModalButton = () => {
		setOpenModal(false);
	};

	const onInputChange = (event) => {
		setInputValue(event.target.value);
	};

	return (
		<Fragment>
			<CreateTodoContainerUI
				onInputChange={onInputChange}
				onSubmit={onSubmit}
				onClickOpenModalButton={onClickOpenModalButton}
				onClickCloseModalButton={onClickCloseModalButton}
				inputValue={inputValue}
				openModal={openModal}
				matchesWidth={matchesWidth}
			/>
		</Fragment>
	);
}

export {CreateTodoContainer};
