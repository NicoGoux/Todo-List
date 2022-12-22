import {useContext} from 'react';
import {Context} from '../Context';
import {TodoSearchUI} from './TodoSearchUI';

function TodoSearch() {
	const {searchValue, setSearchValue} = useContext(Context);

	const onChangeSearchInput = (event) => {
		console.log(event.target.value);
		setSearchValue(event.target.value);
	};

	return <TodoSearchUI searchValue={searchValue} onChangeSearchInput={onChangeSearchInput} />;
}

export {TodoSearch};
