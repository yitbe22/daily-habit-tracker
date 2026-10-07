import { HabitStat } from "../components/HabitStat"
import NavBar from "../components/NavBar"
import AddForm from "../components/AddForm"
import Footer from "../components/Footer"
import { useContext } from "react"
import { PageContext } from "../context/PageContext"

export const HabitDetail = ({darkMode, toggleDarkMode}) => {
   const {selectedHabit, isFormOpen, setIsFormOpen, updateHabit, editing, resetForm} = useContext(PageContext);

  return (
      <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white overflow-hidden flex flex-col">
          <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>

          <main className="pt-14 sm:pt-16 md:pt-17 lg:pt-18 flex-1">
             <HabitStat habit={selectedHabit} onEdit={() => setIsFormOpen(true)} darkMode={darkMode}/>
          </main>
          <AddForm 
            isOpen={isFormOpen} 
            onClose={() => {
               resetForm();
               setIsFormOpen(false)
            }} 
            onEdit={updateHabit}
            editing={editing}/>
         <Footer />
      </div>
  )
}
