import React from 'react';
import { TodoItem } from './TodoItem';
import { TodoInterface } from '../../models/Todo';

interface ComponentProps {
	todos: TodoInterface[];
	markCompleted: (id:string) => void;
	deleteTodo: (id: string) => void;
}

export const TodoList: React.FC<ComponentProps> = ({ todos, markCompleted, deleteTodo }) => {
	return (
		<>
			{todos.map(todo => (
				<TodoItem todo={todo} key={todo.id} markCompleted={markCompleted} deleteTodo={deleteTodo} />
			))}
		</>
	);
};

TodoList.displayName = 'TodoList';
