import React from 'react';
import {AppUI} from './AppUI';
import {Provider} from '../Context';

function App() {
	return (
		<Provider>
			<AppUI />
		</Provider>
	);
}

export {App};
