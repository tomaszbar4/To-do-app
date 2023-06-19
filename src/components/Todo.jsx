import React from 'react'
import deleteIcon from '../images/icon-cross.svg'
import checkIcon from '../images/icon-check.svg'

const Todo = ({ darkMode, value, id, completed, toggleCompleted, deleteTodo }) => {

    return (
        <li draggable="true" className={darkMode ? "border-solid border-b-2 border-gray-700 p-4 w-full flex justify-between items-center" : "border-solid border-b-2 border-gray-200 p-4 w-full flex justify-between items-center"}>
            <span className={darkMode ? "flex items-center gap-4" : "flex items-center gap-4 text-gray-900"}><span className={darkMode ? "block w-8 h-8 border-2 border-gray-700 rounded-full cursor-pointer flex justify-center items-center" : "block w-8 h-8 border-2 border-gray-400 rounded-full cursor-pointer flex justify-center items-center"} onClick={toggleCompleted}>{completed && <img src={checkIcon} className="p-1.5 w-full h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />}</span><span className={completed ? "line-through" : ""}>{value}</span></span>
            <span className="cursor-pointer" onClick={deleteTodo}><img src={deleteIcon} /></span>
        </li>
    )
}

export default Todo