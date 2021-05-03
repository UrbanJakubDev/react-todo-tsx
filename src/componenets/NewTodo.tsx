import React, { useRef } from 'react'

// Props Interface
interface Props {
	onAddTodo: (todoText: string) => void
}

// New Todo React Function component
const NewTodo: React.FC<Props> = (props) => {
	// Bind input box with variable
	const textInputRef = useRef<HTMLInputElement>(null)

	// Submit ToDo Handler function
	const todoSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault()
		const enteredText = textInputRef.current!.value
		props.onAddTodo(enteredText)

		// Reset Input box
		textInputRef.current!.value = ''
	}

	return (
		<div className="new-todo">
			<form onSubmit={todoSubmitHandler}>
				<div className="input-box">
					<label htmlFor="todo-text"></label>
					<input
						placeholder="Remind me..."
						type="text"
						id="todo-text"
						ref={textInputRef}
					/>
				</div>
				<button className="btn" type="submit">
					Add ToDo
				</button>
			</form>
		</div>
	)
}

export default NewTodo
