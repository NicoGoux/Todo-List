import {useContext} from 'react';
import {Fragment} from 'react';
import {CreateTodoContainerUI} from './CreateTodoContainerUI';
import {Context} from '../Context';

function CreateTodoContainer() {
	//TODO implementar el modal

	const {
		todoList,
		saveTodoList,
		inputValue,
		setInputValue,
		openModal,
		setOpenModal,
		matchesWidth,
	} = useContext(Context);

	const onClickAddButton = () => {
		if (inputValue === '') {
			return;
		}
		if (todoList.some((todoInList) => todoInList.text === inputValue)) {
			alert('Todo already exist');
			return;
		}
		const newTodo = {text: inputValue, completed: false};
		saveTodoList([...todoList, newTodo]);
		if (openModal) setOpenModal(false);
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
			{matchesWidth ? (
				<CreateTodoContainerUI
					onInputChange={onInputChange}
					onClickAddButton={onClickAddButton}
					onClickOpenModalButton={onClickOpenModalButton}
					onClickCloseModalButton={onClickCloseModalButton}
				/>
			) : (
				<CreateTodoContainerUI
					onInputChange={onInputChange}
					onClickAddButton={onClickAddButton}
					onClickOpenModalButton={onClickOpenModalButton}
					onClickCloseModalButton={onClickCloseModalButton}
				/>
			)}
		</Fragment>
	);
}

export {CreateTodoContainer};
