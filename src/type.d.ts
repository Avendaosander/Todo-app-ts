import { TODO_FILTERS } from "./consts"

export interface Todo {
   id: string
   title: string
   completed: boolean
}

export type TodoID = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoTypeCompleted = Pick<Todo, 'id' | 'completed'>

export type ListOfTodos = Todo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]