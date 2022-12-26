import {useEffect} from 'react';
import {useState} from 'react';
import {useLocalStorage} from './useLocalStorage';
import {useMediaQuery} from './useMediaQuerys';

function useTodoApp() {
	const [emptyTodos, setEmptyTodos] = useState(true);

	const [inputValue, setInputValue] = useState('');

	const [todoList, saveTodoList] = useLocalStorage('TODOS_V1', []);

	const [todoListFiltered, setTodoListFiltered] = useState([...todoList]);

	const [searchValue, setSearchValue] = useState('');

	const [openModal, setOpenModal] = useState(false);

	const matchesWidth = useMediaQuery('(max-width: 860px)');

	useEffect(() => {
		setTodoListFiltered(
			todoList.filter((todo) => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
		);
	}, [searchValue, todoList]); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		setOpenModal(false);
	}, [matchesWidth, todoList]);

	useEffect(() => {
		setEmptyTodos(todoListFiltered.length === 0);
	}, [todoListFiltered]);

	return {
		todoList,
		saveTodoList,
		emptyTodos,
		inputValue,
		setInputValue,
		searchValue,
		setSearchValue,
		todoListFiltered,
		setTodoListFiltered,
		openModal,
		setOpenModal,
		matchesWidth,
	};
}

export {useTodoApp};
