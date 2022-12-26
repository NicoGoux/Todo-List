import './TodoSearch.scss';

function TodoSearch({searchValue, setSearchValue}) {
	const onChangeSearchInput = (event) => {
		console.log(event.target.value);
		setSearchValue(event.target.value);
	};

	return (
		<input
			className='TodoSearch'
			type='text'
			placeholder='Task'
			value={searchValue}
			onChange={onChangeSearchInput}
		/>
	);
}

export {TodoSearch};
