import React from 'react'
import DoneIcon from '@material-ui/icons/Done'
import ClearIcon from '@material-ui/icons/Clear'
import RestoreIcon from '@material-ui/icons/Restore'
import { ToDo } from '../todo.model'

interface Props {
	items: ToDo[]
	onMarkAsDone: (id: number) => void
	onDeleteTodo: (id: number) => void
	onDeleteAll: () => void
}

const ToDoList: React.FC<Props> = (props) => {

	// COndition for rendering CSS classes to ToDo Item
	const todoItemClsName = (isDone: boolean) => {
		return (
			'todo-item animated animatedFadeInUp fadeInUp ' +
			(isDone === true ? 'todo-item-done' : '')
		)
	}

	return (
		<div className="todo-list">
			<ul>
				{props.items.map((item) => (
					<li className={todoItemClsName(item.isDone)} key={item.id}>
						{item.isDone === false ? (
							<DoneIcon
								style={{ fontSize: 25 }}
								className="todo-btn"
								onClick={props.onMarkAsDone.bind(null, item.id)}
							/>
						) : (
							<RestoreIcon
								style={{ fontSize: 25 }}
								className="todo-btn"
								onClick={props.onMarkAsDone.bind(null, item.id)}
							/>
						)}

						<span className="item-text">{item.value}</span>
						<ClearIcon
							style={{ fontSize: 25 }}
							className="todo-btn"
							onClick={props.onDeleteTodo.bind(null, item.id)}
						/>
					</li>
				))}
			</ul>
			{props.items.length > 0 ? (
				<span className="btn" onClick={props.onDeleteAll}>
					Delete ALL
				</span>
			) : null}
		</div>
	)
}

export default ToDoList
