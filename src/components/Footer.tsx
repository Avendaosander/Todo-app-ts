import { FilterValue } from '../type'
import { Filters } from './Filters'

interface Props {
	activeCount: number
	completedCount: number
	filterSelected: FilterValue
	filterChange: (filter: FilterValue) => void
	clearCompleted: () => void
}

export const Footer: React.FC<Props> = ({
	activeCount,
	completedCount,
	filterSelected,
	filterChange,
	clearCompleted
}) => {
	return (
		<footer className='flex justify-between items-center px-5 py-2'>
			<p>{activeCount} tareas pendientes</p>

			<Filters
				filterSelected={filterSelected}
				filterChange={filterChange}
			/>

			<button
				className={`${completedCount === 0 ? 'invisible' : 'visible'} px-2 rounded hover:text-red-500`}
				onClick={() => {
					clearCompleted()
				}}
			>
				Borrar Completados
			</button>
		</footer>
	)
}
