import {
	type TodoTypeCompleted,
	type TodoID,
	type Todo as TodoType
} from '../type'
import { BsCheckCircle } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'

interface Props extends TodoType {
	removeTodo: ({ id }: TodoID) => void
	toggleCompleted: ({ id, completed }: TodoTypeCompleted) => void
}

export const Todo: React.FC<Props> = ({
	id,
	title,
	completed,
	removeTodo,
	toggleCompleted
}) => {
	return (
		<li className='w-full flex justify-between items-center px-5 py-3 hover:bg-slate-200 dark:hover:bg-slate-700 border-b border-slate-300/50 dark:border-slate-500/30 group'>
			<div className='flex items-center gap-5'>
				<input
					className='peer hidden'
					type='checkbox'
					name='todo'
					id={id}
					defaultChecked={completed}
					onChange={() => {
						toggleCompleted({ id, completed: !completed })
					}}
				/>
				<label
					htmlFor={id}
					className='w-6 h-6 text-green-500 border border-slate-400 hover:border-slate-500 dark:hover:border-slate-300 peer-checked:border-0 peer-checked:bg-none peer-checked:hover:bg-green-200 dark:peer-checked:hover:bg-green-100 rounded-full cursor-pointer '
				>
					{completed && <BsCheckCircle className='w-6 h-6' />}
				</label>
				<h2 className='transform duration-700 peer-checked:line-through peer-checked:opacity-60 text-xl'>
					{title}
				</h2>
			</div>
			<button
				className='text-red-400 dark:text-red-500 text-xl invisible group-hover:visible hover:text-red-600'
				onClick={() => {
					removeTodo({ id })
				}}
			>
				<AiOutlineClose />
			</button>
		</li>
	)
}
