import {useState} from 'react';

function useLocalStorage(itemName, initialValue) {
	const saveItem = (newItem) => {
		const stringifiedItem = JSON.stringify(newItem);
		localStorage.setItem(itemName, stringifiedItem);
		setItem(newItem);
	};

	const localStorageItem = localStorage.getItem(itemName);

	const [item, setItem] = useState(
		JSON.parse(localStorageItem) || initialValue
	);

	return [item, saveItem];
}

export {useLocalStorage};
