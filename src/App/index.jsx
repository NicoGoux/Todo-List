import {Fragment} from 'react';
import './App.scss';
import {CreateTodoContainer} from '../CreateTodoContainer';
import {TodoContainer} from '../TodoContainer';
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {useTodoApp} from './hooks/useTodoApp';

function App() {
	const {
		todoList,
		saveTodoList,
		emptyTodos,
		inputValue,
		setInputValue,
		searchValue,
		setSearchValue,
		todoListFiltered,
		openModal,
		setOpenModal,
		matchesWidth,
	} = useTodoApp();

	return (
		<Fragment>
			<CreateTodoContainer
				todoList={todoList}
				saveTodoList={saveTodoList}
				inputValue={inputValue}
				setInputValue={setInputValue}
				openModal={openModal}
				setOpenModal={setOpenModal}
				matchesWidth={matchesWidth}
			/>
			<TodoContainer>
				<h2 className='title'>Your task</h2>
				<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

				<TodoList
					emptyTodos={emptyTodos}
					todoListFiltered={todoListFiltered}
					onEmpty={() => <h2> No se encuentra ningun TODO</h2>}
					render={(todo) => (
						<TodoItem
							key={todo.text}
							todo={todo}
							todoList={todoList}
							saveTodoList={saveTodoList}
						/>
					)}
				/>
				<TodoCounter todoList={todoList} />
			</TodoContainer>
		</Fragment>
	);
}

export {App};
