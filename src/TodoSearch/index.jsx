import {useEffect, useState} from 'react';
import {TodoSearchUI} from './TodoSearchUI';

function TodoSearch({todoList, setTodoListFiltered}) {
	const [searchValue, setSearchValue] = useState('');

	const filterFunction = () => {
		setTodoListFiltered(
			todoList.filter((todo) =>
				todo.text.toLowerCase().includes(searchValue.toLowerCase())
			)
		);
	};

	useEffect(() => filterFunction(), [searchValue]); // eslint-disable-line react-hooks/exhaustive-deps

	const onChangeSearchInput = (event) => {
		setSearchValue(event.target.value);
	};

	return (
		<TodoSearchUI
			className='TodoSearch'
			type='text'
			placeholder='Task'
			value={searchValue}
			onChange={onChangeSearchInput}
		/>
	);
}

export {TodoSearch};
