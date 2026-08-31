import { useState } from "react";
import AddForm from "../components/AddForm";
import HabitListItem from "../components/HabitListItem";
import NavBar from "../components/NavBar";
import QuickAdd from "../components/QuickAdd";
import Stat from "../components/Stat";

const Home = () => {
  const [habits ,SetHabits] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const addHabit = (habit) => {
      SetHabits((prevHabit) => [
         ...prevHabit,
         habit,
      ]);
  }

  console.log(habits);



  return (
    <div className="min-h-screen text-black overflow-hidden">
      <NavBar />

      <main className="pt-14 sm:pt-16 md:pt-17 lg:pt-18">
        <Stat onAddHabit={() => setIsFormOpen(true)} />
        <div className="mx-auto w-full max-w-230 px-4 sm:px-6 md:px-8 py-5 flex flex-col md:flex-row md:justify-between md:items-start gap-5">
          <HabitListItem habits={habits}/>
          <QuickAdd onAddHabit={addHabit}/>
        </div>
      </main>
      <AddForm 
            isOpen={isFormOpen} 
            onClose={() => setIsFormOpen(false)} 
            onAddHabit={addHabit}/>
    </div>
  );
};

export default Home;
