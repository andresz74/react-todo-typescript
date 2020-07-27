import React from 'react';

import * as style from './AddTodo.style';

interface ComponentProps {
	addNewTodo: (title: string) => void;
}

export const AddTodo: React.FC<ComponentProps> = ({ addNewTodo }) => {
	const [title, setTitle] = React.useState<string>('');

	const onChangeTitle = (e: React.FormEvent<HTMLInputElement>) => {
		setTitle(e.currentTarget.value);
	};

	const onSubmitTodo = (e: React.MouseEvent) => {
		e.preventDefault();
		addNewTodo(title);
		setTitle('');
	};

	return (
		<div className={style.addForm}>
			<input
				className={style.addItemEntry}
				type="text"
				placeholder="Add todo..."
				value={title}
				onChange={onChangeTitle}
			/>
			<button className={style.addButton} type="button" onClick={onSubmitTodo}>
				Add
			</button>
		</div>
	);
};

AddTodo.displayName = 'AddTodo';
