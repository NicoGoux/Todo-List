import {createContext} from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {useLocalStorage} from '../hooks/useLocalStorage';
import {useMediaQuery} from '../hooks/useMediaQuerys';

const Context = createContext();

function Provider(props) {
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
	}, [searchValue]); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => setTodoListFiltered(todoList), [todoList]);

	useEffect(() => {
		setOpenModal(false);
	}, [matchesWidth]);

	return (
		<Context.Provider
			value={{
				todoList,
				saveTodoList,
				inputValue,
				setInputValue,
				searchValue,
				setSearchValue,
				todoListFiltered,
				setTodoListFiltered,
				openModal,
				setOpenModal,
				matchesWidth,
			}}
		>
			{props.children}
		</Context.Provider>
	);
}

export {Context, Provider};
