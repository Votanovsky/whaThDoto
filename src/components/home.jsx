import React, { useState } from 'react'
import TodoItem from './items/TodoItem'
import CreateTodoField from './items/CreateTodoField'

const data = [
    {
        id: 1,
        title: 'Проснуться рано утром',
        isCompleted: false
    },
    {
        id: 2,
        title: 'Сходить за булочками',
        isCompleted: false
    },
    {
        id: 3,
        title: 'Съесть булочки с кофе',
        isCompleted: false
    },
]

const Home = () => {

    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t.id === id)
        current.isCompleted = !current.isCompleted

        setTodos(copy)

        // console.log(copy);
    }
    const removeTodo = (id) => {
        setTodos([...todos].filter(t => t.id !== id))

        console.log(Math.random());
    }


    return (
        <div
            className="text-xl font-medium text-white"
        >
            <h1 className="text-2xl mb-7">My ToDo List:</h1>
            {todos.map(todo => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo}
                    changeTodo={changeTodo}
                    removeTodo={removeTodo}
                />
            ))}

            <CreateTodoField
                setTodos={setTodos}
            />
        </div>
    )
}

export default Home