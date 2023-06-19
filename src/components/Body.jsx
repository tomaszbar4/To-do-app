import React from 'react'
import Todolist from './Todolist'
import bgDesktopLight from '../images/bg-desktop-light.jpg'
import bgDesktopDark from '../images/bg-desktop-dark.jpg'

const Body = ({ toggleDarkMode, darkMode }) => {
    return (
        <main className="h-screen w-screen relative">
            <header className="h-1/2 w-full bg-cover" style={{ backgroundImage: darkMode ? `url(${bgDesktopDark})` : `url(${bgDesktopLight})` }}></header>
            <section className={darkMode ? "h-1/2 bg-gray-900" : "h-2/3 bg-gray-200"}></section>
            <Todolist
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />
        </main >
    )
}

export default Body