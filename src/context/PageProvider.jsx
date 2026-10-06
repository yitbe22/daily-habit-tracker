import { useState,useEffect } from "react";
import { PageContext } from "./PageContext";
import { getHabitStreak } from "../utils/habitCalculations";

export const PageProvider = ({ children }) => {
  const [page, setPage] = useState("home");

  const [habits ,setHabits] = useState(()=>{
       const savedHabit = localStorage.getItem('habits');
       return savedHabit? JSON.parse(savedHabit) : [];
  });

  const [form, setForm] = useState({ name: "", icon: "", color: "" });

  const [selectedHabit, setSelectedHabit] = useState(null);

  const [editing , setEditing] = useState(null);

  const [isFormOpen, setIsFormOpen] = useState(false);

   useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

   const addHabit = (habit) => {
      setHabits((prevHabit) => [
         ...prevHabit,
         habit,
      ]);
  }

  const updateHabit = () => {
      const updatedHabit = {
         ...editing,
         name:form.name,
         color:form.color,
         icon:form.icon
      };
      
       setHabits((currentHabits) => 
          currentHabits.map(habit => 
            habit.id === updatedHabit.id ?
                updatedHabit : habit
              )
       ); 

       setSelectedHabit(updatedHabit);
       setEditing(null);
  };

   const removeHabit = (id) => {
       setHabits((currentHabits) => 
          currentHabits.filter(habit => 
            habit.id !== id)
       ); 

      setSelectedHabit(null);
      setEditing(null);
      setIsFormOpen(false);
      setPage("home");
   }

    const resetForm = () => {
      setForm({name: "", icon: "", color: ""});
      setEditing(null);
    }
  
 
  const toggelHabit = (id) => {
     const today = new Date().toISOString().split("T")[0];

     setHabits((prevHabit) =>
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
    <PageContext.Provider value={{ 
      page, 
      setPage,
      habits,
      editing,
      setEditing,
      resetForm,
      removeHabit,
      addHabit,
      updateHabit,
      toggelHabit,
      setSelectedHabit,
      selectedHabit,
      form,
      setForm,
      isFormOpen,
      setIsFormOpen,
      getHabitStreak,
     }}>
      {children}
    </PageContext.Provider>
  );
};
