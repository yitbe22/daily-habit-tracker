import { HabitStat } from "../components/HabitStat"
import NavBar from "../components/NavBar"

export const HabitDetail = ({darkMode, toggleDarkMode}) => {
  return (
      <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white  overflow-hidden">
          <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>

          <main className="pt-14 sm:pt-16 md:pt-17 lg:pt-18">
             <HabitStat />
          </main>
      </div>
  )
}
