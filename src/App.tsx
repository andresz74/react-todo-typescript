import React from 'react';
import './App.css';
import { Header, AddTodo, TodoList } from './components';
import { TodoInterface } from './models/Todo';

const App = () => {
	const [todos, setTodos] = React.useState<TodoInterface[]>([]);

	const markCompleted = (id: number) => {
		setTodos(
			todos.map((todo: TodoInterface) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			}),
		);
	};

	const deleteTodo = (id: number) => {
		fetch(`https://jsonplaceholder.typicode.com/todos${id}`, {
			method: 'DELETE',
		})
			.then(response => response.json())
			.then(() => setTodos(todos.filter((todo: TodoInterface) => todo.id !== id)));
	};

	const addNewTodo = (title: string) => {
		fetch('https://jsonplaceholder.typicode.com/todos', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify({ title, completed: false }),
		})
			.then(response => response.json())
			.then(data => setTodos([...todos, data]));
	};

	React.useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
			.then(response => response.json())
			.then(data => setTodos(data));
	}, []);

	return (
		<div className="App">
			<Header />
			<AddTodo addNewTodo={addNewTodo} />
			<TodoList todos={todos} markCompleted={markCompleted} deleteTodo={deleteTodo} />
		</div>
	);
};

export default App;
