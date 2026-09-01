import { useState } from 'react';
import Home from './pages/Home'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
      setDarkMode((prev) => !prev);
  };
 
  return <div className={darkMode ? "dark" : ""}>
      <Home darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
  </div>
}

export default App
