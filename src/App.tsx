import { useState } from 'react'
import { type TodoTypeCompleted, type TodoID, type FilterValue, type TodoTitle } from './type'
import { Todos } from './components/Todos'
import { Footer } from './components/Footer'
import { TODO_FILTERS } from './consts'
import { Header } from './components/Header'
import { mockTodos } from './mocks/mockTodo'
import { Copyright } from './components/Copyright'

const App = (): JSX.Element => {
	const [todos, setTodos] = useState(mockTodos)
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

	const addTodo = ({ title }: TodoTitle) => {
		const newTodo = {
			id: crypto.randomUUID(),
			title,
			completed: false
		}
		
		const newTodos = [...todos, newTodo]
		setTodos(newTodos)
	}

	return (
		<>
			<main className='relative h-screen flex flex-col items-center p-20'>
				<h1 className='text-center text-6xl mb-5'>
					Todo
					<span className='text-sky-50 bg-sky-600 font-bold text-3xl pt-3 pl-3 pr-1 rounded-md ml-1'>
						TS
					</span>
				</h1>
				<section className='sm:w-[600px] bg-slate-50 dark:bg-slate-800 ring-1 ring-slate-300 dark:ring-slate-500/30 rounded-lg shadow-section-light dark:shadow-section-dark'>
					<Header addTodo={addTodo}/>
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
				<Copyright/>
			</main>
		</>
	)
}

export default App
