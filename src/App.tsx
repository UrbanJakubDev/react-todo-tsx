import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ToDoList from './componenets/ToDoList'
import NewTodo from './componenets/NewTodo'
import { ToDo } from './todo.model'

//Import axios
const axios = require('axios').default

// Function for generate random num
const getRandomNum = () => {
	let maxValue = 150
	let randValue = Math.floor(Math.random() * Math.floor(maxValue))
	return randValue
}

const App: React.FC = () => {
	// TODO
	const [todos, setTodos] = useState<ToDo[]>([])

	// Add handler
	const todoAddHandler = (text: string) => {
    if (text === ''){
      alert('Empty string')
      return
    } else {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: getRandomNum(), value: text },
      ])

    }
	}

	// Delete Handler
	const todoDeleteHandler = (todoId: number) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== todoId)
		})
	}

  // Delete ALL hander
  const todoDeleteAllHandler = () => {
    setTodos([])
  }

	return (
		<div className="App">
			<header className="App-header">
				<div className="content-container">
					<h1>Todo</h1>
					<NewTodo onAddTodo={todoAddHandler} />
					<ToDoList items={todos} onDeleteTodo={todoDeleteHandler} onDeleteAll={todoDeleteAllHandler} />
  
				</div>
			</header>
		</div>
	)
}

export default App
