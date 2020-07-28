import React from 'react';
import { classes } from 'typestyle';
import * as style from './TodoItem.style';
import { TodoInterface } from '../../models/Todo';

interface ComponentProps {
	todo: TodoInterface;
	markCompleted: (id: string) => void;
	deleteTodo: (id: string) => void;
}

export const TodoItem: React.FC<ComponentProps> = ({ todo, markCompleted, deleteTodo }) => {
	const { id, title, completed } = todo;
	return (
		<div className={style.todoItemBox}>
			<input
				className={style.checkboxStyle}
				type="checkbox"
				checked={completed}
				onChange={markCompleted.bind(undefined, id)}
			/>
			<span className={classes(style.titleStyle, completed && style.completedStyle)}>{title}</span>
			<button className={style.btnDelete} type="button" onClick={deleteTodo.bind(undefined, id)}>
				x
			</button>
		</div>
	);
};

TodoItem.displayName = 'Todotem';
