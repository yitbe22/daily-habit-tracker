import { useEffect, useState } from "react";
import AddForm from "../components/AddForm";
import HabitListItem from "../components/HabitListItem";
import NavBar from "../components/NavBar";
import QuickAdd from "../components/QuickAdd";
import Stat from "../components/Stat";
import Footer from "../components/Footer";

const Home = ({darkMode,toggleDarkMode,setPage}) => {
  const [habits ,SetHabits] = useState(()=>{
       const savedHabit = localStorage.getItem('habits');

       return savedHabit? JSON.parse(savedHabit) : [];
  });
  const [isFormOpen, setIsFormOpen] = useState(false);


  useEffect(() => {
      localStorage.setItem('habits', JSON.stringify(habits));
  },[habits])

  const addHabit = (habit) => {
      SetHabits((prevHabit) => [
         ...prevHabit,
         habit,
      ]);
  }


  console.log(habits)

  const toggelHabit = (id) => {
     const today = new Date().toISOString().split("T")[0];

     SetHabits((prevHabit) =>
        prevHabit.map(habit => {
           if(habit.id !== id){
                return habit;
           }
            
            return {
               ...habit,
               completions: {
                 ...habit.completions,
                 [today]: !habit.completions[today],
               },
            };
        })
     );
  };



  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white  overflow-hidden">
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>

      <main className="pt-14 sm:pt-16 md:pt-17 lg:pt-18">
        <Stat onAddHabit={() => setIsFormOpen(true)} />
        <div className="mx-auto w-full max-w-230 px-4 sm:px-6 md:px-8 py-5 flex flex-col md:flex-row md:justify-between md:items-start gap-5">
          <HabitListItem habits={habits} onToggle={toggelHabit} setPage={setPage} />
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
