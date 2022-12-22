import {Fragment} from 'react';
import {useContext} from 'react';
import {Modal} from '../Modal';
import {Context} from '../Context';
import './CreateTodoContainer.scss';

function CreateTodoContainerUI({
	onInputChange,
	onSubmit,
	onClickOpenModalButton,
	onClickCloseModalButton,
}) {
	const {inputValue, openModal, matchesWidth} = useContext(Context);

	return (
		<Fragment>
			{!matchesWidth ? (
				<div className='CreateTodoContainer'>
					<h2>Create new task</h2>
					<form onSubmit={onSubmit}>
						<textarea
							className='newTodoInput'
							type='text'
							placeholder='New task'
							value={inputValue}
							onChange={onInputChange}
						/>
						<button type='submit' className={'CreateTodoButton'}></button>
					</form>
					<div className='CreateTodoPicture'></div>
				</div>
			) : (
				<Fragment>
					<button className={'openModalButton'} onClick={onClickOpenModalButton}></button>
					{openModal && (
						<Modal>
							<div className='closeModalButton' onClick={onClickCloseModalButton}>
								X
							</div>
							<h2>Create new task</h2>
							<form onSubmit={onSubmit}>
								<textarea
									className='newTodoInput'
									type='text'
									placeholder='New task'
									value={inputValue}
									onChange={onInputChange}
								/>
								<button type='submit' className={'CreateTodoButton'}></button>
							</form>
						</Modal>
					)}
				</Fragment>
			)}
		</Fragment>
	);
}

export {CreateTodoContainerUI};
