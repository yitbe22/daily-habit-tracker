import { useContext, useEffect, useState } from 'react';
import Home from './pages/Home'
import { HabitDetail } from './pages/HabitDetail';
import { PageContext } from './context/PageContext';
import { PageProvider } from './context/PageProvider';


const Pages = ({darkMode, toggleDarkMode}) => {
    const {page} = useContext(PageContext);

    return page === "home" ?
           <Home darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>:
           <HabitDetail darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
}     


function App() {
  const [darkMode, setDarkMode] = useState(()=> {
      return localStorage.getItem('theme') === 'true';
  });
  
  useEffect(() => {
  localStorage.setItem('theme', darkMode);
   }, [darkMode]);

  const toggleDarkMode = () => {
      setDarkMode((prev) => !prev);
  };

  return <div className={darkMode ? "dark" : ""}>
        <PageProvider>
            <Pages 
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
             />
        </PageProvider>
  </div>
}

export default App
