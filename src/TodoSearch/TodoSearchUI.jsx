import './TodoSearch.scss';

function TodoSearchUI({searchValue, onChangeSearchInput}) {
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

export {TodoSearchUI};
