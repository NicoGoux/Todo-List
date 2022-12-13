import React from 'react';
import {AppUI} from './AppUI';

const todos = [
	{text: 'Cortar cebolla', completed: false},
	{text: 'Tomar el curso de react', completed: false},
	{text: 'Hacer proyecto de react', completed: true},
	{text: 'Practicar proyecto de react', completed: false},
	{text: 'Revisar proyecto de react', completed: false},
];

function App() {
	const [todoList, setTodoList] = React.useState([...todos]);

	return <AppUI todoList={todoList} setTodoList={setTodoList} />;
}

export {App};
