import React, { useState } from 'react'

const CreateTodoField = ({setTodos}) => {

    const [title, setTitle] = useState('')

    const addTodo = (title) => {
        setTodos( prev => [ {
            id: Math.random(),
            title, 
            isCompleted: false
        },
        ...prev,
        ])

        setTitle('')
    }

    return (
        <div
            className='flex items-center mb-5 bg-slate-900 px-4 py-2 rounded-md w-full mt-12 border-2 border-slate-800'
        >
            <input type="text" 
                placeholder='Add a task'
                className='bg-transparent border-0 outline-none w-full h-full'

                onChange={e => setTitle(e.target.value)}
                value={title}
                onKeyDown={e => e.key === 'Enter' && addTodo(title)}
            />
        </div>
    )
}

export default CreateTodoField