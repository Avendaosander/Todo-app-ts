import { type ListOfTodos } from '../type'

interface Props {
	todos: ListOfTodos
	clearCompleted: () => void
}

export const Footer: React.FC<Props> = ({ todos, clearCompleted }) => {
	return (
		<footer className='flex justify-between items-center px-5 py-2'>
			<p>{todos.length} tareas pendientes</p>



			<button
				onClick={() => {
					clearCompleted()
				}}
			>
				Borrar Completados
			</button>
		</footer>
	)
}
