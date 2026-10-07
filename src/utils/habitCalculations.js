export const getHabitStreak = (habit) => {
     let streak = 0;
     let date = new Date();
     const todayKey = new Date().toISOString().split("T")[0];
     const completedToday = habit.completions[todayKey] === true;

     if(!completedToday) {
         date.setDate(date.getDate()-1);
     } 


     while(true){
        const dateKey = date.toISOString().split("T")[0];
         
        const completedHabit = habit.completions[dateKey] === true;

         if(!completedHabit){
            break
         }

         streak++

         date.setDate(date.getDate()-1);
     }

     return streak;
}

export const getBestStreak = (habit) => {
     let currentStreak = 0;
     let bestStreak = 0;
     const dates = Object.keys(habit.completions).sort();

      for (let i = 0; i < dates.length; i++) {
          if(i===0){
               currentStreak = 1;
          } else{
             const previous = new Date(dates[i-1]);
              const current = new Date(dates[i]);
              const diff = current - previous;

              if(diff === 1000*60*60*24){
                    currentStreak++;
                     
                } else {
                    currentStreak = 1;
               }
          }  
            if(currentStreak > bestStreak){
               bestStreak = currentStreak;
               }
     }
 
     return bestStreak;
}

export const getTotalCompletions = (habit) => {
     const total = Object.keys(habit.completions).length;
     return total;
}

export const getSuccessRate = (habit) => {

     const totalCompletions = Object.keys(habit.completions).length;
     const today = new Date();
     const startDate = new Date(habit.startDate);
     const diff = today - startDate;
     const days = Math.floor(diff/ (1000*60*60*24))+1;
    
      if (days <= 0) {
        return 0;
    }

     return Math.floor((totalCompletions/days)*100);
}