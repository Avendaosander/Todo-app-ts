import React, { useState } from 'react'
import { TodoTitle } from '../type'

interface Props {
	saveTodo: ({ title }: TodoTitle) => void
}

export const FormTodo: React.FC<Props> = ({ saveTodo }) => {
	const [inputValue, setInputValue] = useState('')

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault()
      saveTodo({ title: inputValue})
      setInputValue('')
   }
   
	return (
      <form onSubmit={handleSubmit}>
         <input
            type='text'
            name='title'
            value={inputValue}
            onChange={e => {setInputValue(e.target.value)}}
            autoFocus
            placeholder='¿Qué quieres hacer?'
            className='w-full px-12 py-2 rounded-t-lg italic bg-inherit border-b border-slate-300/50 outline-none focus:ring-1 focus:ring-slate-500'
         />
      </form>
	)
}
