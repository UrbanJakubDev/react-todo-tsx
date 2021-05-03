import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

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
						<DeleteIcon
							style={{ fontSize: 25 }}
							className='todo-btn'
							onClick={props.onDeleteTodo.bind(null, item.id)}
						 />
					</li>
				))}
			</ul>
			{props.items.length > 0 ? (
				<span
				className='btn'
				onClick={props.onDeleteAll}
				>Delete ALL</span>) : null}
		</div>
	)
}

export default ToDoList
