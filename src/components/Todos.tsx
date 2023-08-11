import { type TodoID, type ListOfTodos, type TodoTypeCompleted } from '../type'
import { Todo } from './Todo'

export interface Props {
	todos: ListOfTodos
   removeTodo: ({ id }: TodoID) => void
   toggleCompleted: ({ id, completed }: TodoTypeCompleted) => void
}

export const Todos: React.FC<Props> = ({ todos, removeTodo, toggleCompleted }) => {
	return (
		<ul>
			{todos.map(todo => (
            <Todo
               key={todo.id}
               id={todo.id}
               title={todo.title}
               completed={todo.completed}
               toggleCompleted={toggleCompleted}
               removeTodo={removeTodo}
            />
			))}
		</ul>
	)
}
