export interface Todo {
   id: string
   title: string
   completed: boolean
}

export type TodoID = Pick<Todo, 'id'>
export type TodoTypeCompleted = Pick<Todo, 'id' | 'completed'>

export type ListOfTodos = Todo[]