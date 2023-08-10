import React from 'react'
import CheckBox from './CheckBox'
import cn from 'classnames'
import {BsTrash} from 'react-icons/bs'

const TodoItem = ({todo, changeTodo, removeTodo}) => {
  return (
    <div 
      className='flex items-center mb-5 bg-slate-800 p-4 rounded-md w-full'
    >
      <button 
        className='flex items-center'
        onClick={()=> changeTodo(todo.id)}
      >
        <CheckBox isCompleted={todo.isCompleted}/>
        <span className={
          cn('', {
            'line-through' : todo.isCompleted
          })
        }>
          {todo.title}
        </span>
      </button>


      <button 
        className='ml-auto w-6 h-6 '
        onClick={()=> removeTodo(todo.id)}
      >
        <BsTrash 
          className='text-slate-500 hover:text-slate-400'
        />
      </button>
    </div>
  )
}

export default TodoItem