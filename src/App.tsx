import React, { useState } from 'react'
import './App.css'
import ToDoList from './componenets/ToDoList'
import NewTodo from './componenets/NewTodo'
import { ToDo } from './todo.model'

// Function for generate random num
const getRandomNum = () => {
	let maxValue = 150
	let randValue = Math.floor(Math.random() * Math.floor(maxValue))
	return randValue
}

// React Function Component - APP
// Main Componenet
const App: React.FC = () => {

	// Object ToDo
	const [todos, setTodos] = useState<ToDo[]>([])

	// Add ToDo handler function
	const todoAddHandler = (text: string) => {
		if (text === '') {
			alert('Empty string')
			return
		} else {
			setTodos((prevTodos) => [
				...prevTodos,
				{ id: getRandomNum(), value: text },
			])
		}
	}

	// Delete ToDo Handler fucntion
	const todoDeleteHandler = (todoId: number) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== todoId)
		})
	}

	// Delete All ToDos Handler function
	const todoDeleteAllHandler = () => {
		setTodos([])
	}


	// Rendering
	return (
		<div className="App">
			<header className="App-header">
				<div className="content-container">
					<h1>ToDo</h1>
					<NewTodo onAddTodo={todoAddHandler} />
					<ToDoList
						items={todos}
						onDeleteTodo={todoDeleteHandler}
						onDeleteAll={todoDeleteAllHandler}
					/>
				</div>
			</header>
		</div>
	)
}

export default App
