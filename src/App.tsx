import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

import './App.css';
import { About, Header, AddTodo, TodoList } from './components';
import { TodoInterface } from './models/Todo';
// import { uuid } from './utility';

const firebaseConfig = {
	apiKey: 'AIzaSyCoQQAGvALy4aY40UkpsnUDLiYTSjt3qSc',
	authDomain: 'todolist-dda3a.firebaseapp.com',
	databaseURL: 'https://todolist-dda3a.firebaseio.com',
	projectId: 'todolist-dda3a',
	storageBucket: 'todolist-dda3a.appspot.com',
	messagingSenderId: '167506368109',
	appId: '1:167506368109:web:d7d6541d767f81df719164',
};
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
const todosRef = db.collection('todos');
let userId: string;
const getTodoList = async () => {
	const snapshot = await todosRef.get();
	const data: TodoInterface[] = [];
	snapshot.forEach(doc => {
		userId = doc.id;
		data.push({
			userId: doc.data().userId,
			id: doc.id,
			title: doc.data().title,
			completed: doc.data().completed,
		});
	});
	return data;
};
const addTodo = async (data: any) => {
	await db.collection('todos').add(data);
};
const deleteTodoFromList = async (id: string) => {
	await db.collection('todos').doc(id).delete();
};
const completeTodo = async (id: string, completed: boolean) => {
	await db.collection('todos').doc(id).update({ completed });
};
const App = () => {
	const [todos, setTodos] = React.useState<TodoInterface[]>([]);

	React.useEffect(() => {
		getTodoList().then(response => setTodos(response));
	}, []);

	const markCompleted = (id: string) => {
		setTodos(
			todos.map((todo: TodoInterface) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
					completeTodo(id, todo.completed);
				}
				return todo;
			}),
		);
		

	};

	const deleteTodo = (id: string) => {
		deleteTodoFromList(id);
		setTodos(todos.filter((todo: TodoInterface) => todo.id !== id));
	};

	const addNewTodo = (title: string) => {
		const data = {
			userId,
			title,
			completed: false,
		};
		const dataToSet = { ...data, id: '' };
		addTodo(data);
		setTodos([...todos, dataToSet]);
	};

	return (
		<Router>
			<div className="App">
				<Header />
				<Route
					exact
					path="/"
					render={() => (
						<>
							<AddTodo addNewTodo={addNewTodo} />
							<TodoList todos={todos} markCompleted={markCompleted} deleteTodo={deleteTodo} />
						</>
					)}
				/>
				<Route path="/about" component={About} />
			</div>
		</Router>
	);
};

export default App;
