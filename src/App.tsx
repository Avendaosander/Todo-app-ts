import { useState } from 'react'
import { type TodoTypeCompleted, type TodoID, type FilterValue } from './type'
import { Todos } from './components/Todos'
import { Footer } from './components/Footer'
import { TODO_FILTERS } from './consts'

const mockTodo = [
	{
		id: '1',
		title: 'Aprender las bases de React',
		completed: true
	},
	{
		id: '2',
		title: 'Aprender las bases de JavaScript',
		completed: true
	},
	{
		id: '3',
		title: 'Aprender las bases de TypeScript',
		completed: false
	},
	{
		id: '4',
		title: 'Crear app con React y TypeScript',
		completed: false
	}
]

const App = (): JSX.Element => {
	const [todos, setTodos] = useState(mockTodo)
	const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

	const activeCount = todos.filter(todo => !todo.completed).length
	const completedCount = todos.length - activeCount

	const handleRemove = ({ id }: TodoID): void => {
		const newTodos = todos.filter(todo => todo.id !== id)
		setTodos(newTodos)
	}

	const handleCompleted = ({ id, completed }: TodoTypeCompleted): void => {
		const newTodos = todos.map(todo => {
			if (todo.id === id) {
				return {
					...todo,
					completed
				}
			}

			return todo
		})

		setTodos(newTodos)
	}

	const removeAllCompleted = (): void => {
		const newTodos = todos.filter(todo => !todo.completed)
		setTodos(newTodos)
	}

	const filterChange = (filter: FilterValue): void => {
		setFilterSelected(filter)
	}

	const filteredTodos = todos.filter(todo => {
		if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
		if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
		return todo
	})

	return (
		<>
			<main className='h-screen flex flex-col items-center p-20'>
				<h1 className='text-center font-light text-5xl mb-5'>
					Todo App
					<span className='text-sky-50 bg-sky-600 font-bold text-2xl pt-3 pl-3 pr-1 rounded ml-1'>
						TS
					</span>
				</h1>
				<section className='w-3/5 ring-1 ring-slate-300 rounded-lg shadow-2xl shadow-slate-300'>
					<Todos
						todos={filteredTodos}
						toggleCompleted={handleCompleted}
						removeTodo={handleRemove}
					/>
					<Footer
						activeCount={activeCount}
						completedCount={completedCount}
						filterSelected={filterSelected}
						filterChange={filterChange}
						clearCompleted={removeAllCompleted}
					/>
				</section>
			</main>
		</>
	)
}

export default App
