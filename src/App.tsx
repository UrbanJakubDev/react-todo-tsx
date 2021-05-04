import React, { useState } from 'react'
import './App.css'
import ToDoList from './componenets/ToDoList'
import NewTodo from './componenets/NewTodo'
import { ToDo } from './todo.model'


// React Function Component - APP
// Main Componenet
const App: React.FC = () => {

	// Object ToDo
	const [todos, setTodos] = useState<ToDo[]>([
		{id:1, value: 'Finsih the Course', isDone: false},
		{id:2, value: 'Add styling to ToDo', isDone: true},
		{id:3, value: 'Deploy the app', isDone: false}
	])

	// Add ToDo handler function
	const todoAddHandler = (text: string) => {
		if (text === '') {
			alert('Empty string')
			return
		} else {
			setTodos((prevTodos) => [
				...prevTodos,
				{ id: prevTodos.length+1, value: text, isDone: false },
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

	// Mark as done ToDo handler fucntion
	const todoMarkAsDone = (id: number) => {
		// First, make a copy of the existing items
		const [...items] = todos
		// Then find the index of the item you want to modify
		const index = items.findIndex(task => task.id === id)
		// Now you can replace the item with a modified copy of the found item
		const foundItem = items[index]
		items[index] = { ...foundItem, isDone: !foundItem.isDone }
		// Finally, set the items to the modified copy of the original array
		setTodos(items)
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
						onMarkAsDone={todoMarkAsDone}
					/>
				</div>
			</header>
		</div>
	)
}

export default App
