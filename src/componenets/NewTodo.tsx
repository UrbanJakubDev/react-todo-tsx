import React, { useRef } from 'react'

interface Props {
	onAddTodo: (todoText: string) => void
}

const NewTodo: React.FC<Props> = (props) => {
	const textInputRef = useRef<HTMLInputElement>(null)

	const todoSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault()
		const enteredText = textInputRef.current!.value
		props.onAddTodo(enteredText)
        textInputRef.current!.value = ''
	}

	return (
		<div className='new-todo'>
			<form onSubmit={todoSubmitHandler}>
				<div className='input-box'>
					<label htmlFor="todo-text"></label>
					<input placeholder='Remind me...' type="text" id="todo-text" ref={textInputRef} />
				</div>
				<button type="submit">Add ToDo</button>
			</form>
		</div>
	)
}

export default NewTodo
