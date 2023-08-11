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
		<li className='w-full flex justify-between items-center gap-2 px-5 py-2 hover:bg-slate-300 border-b border-slate-300/50 group'>
			<div className='flex items-center gap-2'>
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
					className='w-5 h-5 text-green-500 ring-1 ring-slate-400 hover:ring-slate-500 peer-checked:ring-0 peer-checked:bg-none peer-checked:hover:bg-green-200 rounded-full cursor-pointer '
				>
					{completed && <BsCheckCircle className='w-5 h-5' />}
				</label>
				<h2 className='transform duration-700 peer-checked:line-through peer-checked:opacity-50'>
					{title}
				</h2>
			</div>
			<button
				className='text-red-400 text-lg invisible group-hover:visible'
				onClick={() => {
					removeTodo({ id })
				}}
			>
				<AiOutlineClose />
			</button>
		</li>
	)
}
