import { Fragment } from 'react';
import { Modal } from '../Modal';
import './CreateTodoContainer.scss';

function CreateTodoContainerUI({
	onInputChange,
	onSubmit,
	onClickOpenModalButton,
	onClickCloseModalButton,
	inputValue,
	openModal,
	matchesWidth,
}) {
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
							</div>
						</Modal>
					)}
				</Fragment>
			)}
		</Fragment>
	);
}

export { CreateTodoContainerUI };
