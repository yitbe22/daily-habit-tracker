import { HabitStat } from "../components/HabitStat"
import NavBar from "../components/NavBar"
import AddForm from "../components/AddForm"
import { useContext } from "react"
import { PageContext } from "../context/PageContext"

export const HabitDetail = ({darkMode, toggleDarkMode}) => {
   const {selectedHabit, isFormOpen, setIsFormOpen, updateHabit, editing} = useContext(PageContext);

  return (
      <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white  overflow-hidden">
          <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>

          <main className="pt-14 sm:pt-16 md:pt-17 lg:pt-18">
             <HabitStat habit={selectedHabit} onEdit={() => setIsFormOpen(true)}/>
          </main>
          <AddForm 
            isOpen={isFormOpen} 
            onClose={() => setIsFormOpen(false)} 
            onEdit={updateHabit}
            editing={editing}/>
      </div>
  )
}
