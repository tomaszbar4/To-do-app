import React from 'react'
import { useState, useEffect } from 'react'
import iconSun from '../images/icon-sun.svg'
import iconMoon from '../images/icon-moon.svg'
import Todo from './Todo'

const Todolist = ({ darkMode, toggleDarkMode }) => {

    const [todoValue, setTodoValue] = useState('')
    const [todos, setTodos] = useState(() => {
        const todoValues = localStorage.getItem("todos")
        return todoValues !== null ? JSON.parse(todoValues) : []
    })
    const [todosType, setTodosType] = useState('all')

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
        console.log('effect')
    }, [todos])

    function toggleCompleted(id) {
        setTodos(oldTodos => {
            return oldTodos.map(todo => {
                return todo.id === id ? { ...todo, completed: !todo.completed } : todo
            })
        })

    }

    function clearCompleted() {
        setTodos(oldTodos => {
            return todos.filter(todo => {
                return todo.completed === false
            })
        })
    }

    function deleteTodo(id) {
        setTodos(oldTodos => {
            return oldTodos.filter(todo => {
                if (todo.id !== id) return todo
                else if (todo.id === id && todo.completed === false) return todo
            })
        })
    }

    function generateRandomKey() {
        return Math.floor(Math.random() * 100000000)
    }

    const todoEls = todos.map(todo => {
        return (<Todo
            key={todo.id}
            id={todo.id}
            darkMode={darkMode}
            value={todo.value}
            completed={todo.completed}
            toggleCompleted={() => toggleCompleted(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
        />)
    })

    const completedTodos = todoEls.filter(todo => {
        return todo.props.completed === true
    })

    const activeTodos = todoEls.filter(todo => {
        return todo.props.completed === false
    })

    function Todos() {
        if (todosType === 'all') return todoEls
        else if (todosType === 'active') return activeTodos
        else return completedTodos
    }



    function handleSubmit(e) {
        e.preventDefault()
        if (todoValue) {
            setTodos(oldTodos => {
                return [...oldTodos, { darkMode: darkMode, value: todoValue, completed: false, id: generateRandomKey() }]
            })
            setTodoValue('')
        }
    }

    return (
        <section className="w-screen absolute top-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
            <div className="w-10/12 md:w-1/2 lg:w-1/3 flex justify-between">
                <h1 className="text-white uppercase text-3xl font-bold my-8 tracking-widest">Todo</h1>
                <button onClick={toggleDarkMode}><img src={darkMode ? iconMoon : iconSun} /></button>
            </div>
            <form className="w-full flex justify-center items-center" onSubmit={handleSubmit}>
                <input className={darkMode ? "p-4 w-10/12 mb-4 md:w-1/2 lg:w-1/3 outline-0 bg-gray-800 text-white" : "p-4 w-10/12 mb-4 md:w-1/2 lg:w-1/3 outline-0 bg-white"} placeholder="Create a new todo.." value={todoValue} onChange={(e) => setTodoValue(e.target.value)}></input>
            </form>
            <ul className={darkMode ? "w-10/12 md:w-1/2 lg:w-1/3 bg-gray-800 text-white" : "w-10/12 md:w-1/2 lg:w-1/3 bg-white text-black"}>
                {todos.length > 0 ? <Todos /> : <div className={darkMode ? "bg-gray-800 border-solid border-b-2 border-gray-700 text-white p-4" : "bg-white border-solid border-b-2 border-gray-200 p-4"}>No todos on the list.</div>}
                <div className={darkMode ? "p-4 flex justify-between bg-gray-800 text-gray-100" : "p-4 flex justify-between"}>
                    <span>{todos.length} items left</span>
                    <span className="cursor-pointer" onClick={clearCompleted}>Clear completed</span>
                </div>
            </ul>
            <div className={darkMode ? "bg-gray-800 text-gray-100 w-10/12 md:w-1/2 lg:w-1/3 m-4 py-4 flex justify-center gap-4" : "bg-white w-10/12 md:w-1/2 lg:w-1/3 m-4 py-4 flex justify-center gap-4"}>
                <span className={todosType === 'all' ? "cursor-pointer font-bold" : "cursor-pointer"} onClick={() => setTodosType('all')}>All</span>
                <span className={todosType === 'active' ? "cursor-pointer font-bold" : "cursor-pointer"} onClick={() => setTodosType('active')}>Active</span>
                <span className={todosType === 'completed' ? "cursor-pointer font-bold" : "cursor-pointer"} onClick={() => setTodosType('completed')}>Completed</span>
            </div>
        </section>
    )
}

export default Todolist