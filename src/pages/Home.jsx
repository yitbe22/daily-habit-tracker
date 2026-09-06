import { useContext } from "react";
import AddForm from "../components/AddForm";
import HabitListItem from "../components/HabitListItem";
import NavBar from "../components/NavBar";
import QuickAdd from "../components/QuickAdd";
import Stat from "../components/Stat";
import Footer from "../components/Footer";
import { PageContext } from "../context/PageContext";
import { getCurrentStreak, getCompletedToday} from "../utils/generalCalculations";


const Home = ({darkMode,toggleDarkMode,setPage}) => {
  
  const {
    habits,
    addHabit,
    isFormOpen, 
    setIsFormOpen,
  } = useContext(PageContext);
 
   const currentStreak = getCurrentStreak(habits);
   const completedToday = getCompletedToday(habits);

   console.log(habits);

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white  overflow-hidden">
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>

      <main className="pt-14 sm:pt-16 md:pt-17 lg:pt-18">
        <Stat onAddHabit={() => setIsFormOpen(true)} 
             streak={currentStreak}
             completedToday={completedToday}/>
        <div className="mx-auto w-full max-w-230 px-4 sm:px-6 md:px-8 py-5 flex flex-col md:flex-row md:justify-between md:items-start gap-5">
          <HabitListItem habits={habits} setPage={setPage} />
          <QuickAdd onAddHabit={addHabit}/>
        </div>
      </main>
      <AddForm 
            isOpen={isFormOpen} 
            onClose={() => setIsFormOpen(false)} 
            onAddHabit={addHabit}/>

      <Footer />
    </div>
  );
};

export default Home;
