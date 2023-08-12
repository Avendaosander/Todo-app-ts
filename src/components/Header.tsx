import { type TodoTitle } from '../type'
import { FormTodo } from './FormTodo'

interface Props {
   addTodo: (title: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ addTodo }) => {
   return (
      <header>
         <FormTodo saveTodo={addTodo}/>
      </header>
   )
}