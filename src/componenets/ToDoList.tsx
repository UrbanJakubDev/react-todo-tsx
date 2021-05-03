import React from 'react'

interface Props {
	items: { id: number; value: string }[]
	onDeleteTodo: (id: number) => void
	onDeleteAll: () => void
}

const ToDoList: React.FC<Props> = (props) => {
	console.log(props.items)

	return (
		<div className="todo-list">
			<ul>
				{props.items.map((item) => (
					<li
						className="todo-item animated animatedFadeInUp fadeInUp"
						key={item.id}
					>
						<span className="item-text">{item.value}</span>
						<button
							onClick={props.onDeleteTodo.bind(null, item.id)}
						>
							Delete
						</button>
					</li>
				))}
			</ul>
			{props.items.length > 0 ? (
				<button onClick={props.onDeleteAll}>Delete ALL</button>
			) : null}
		</div>
	)
}

export default ToDoList
