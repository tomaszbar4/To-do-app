import './App.css';
import Body from './components/Body';
import { useEffect, useState } from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(() => {
    const value = localStorage.getItem('darkmode')

    return value !== null ? JSON.parse(value) : false
  })

  useEffect(() => {
    localStorage.setItem('darkmode', JSON.stringify(darkMode))
  }, [darkMode])

  function toggleDarkMode() {
    setDarkMode(oldValue => !oldValue)
  }

  return (
    <Body
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
    />
  );
}

export default App;
