/*  const habits = [
  {
    id: "1",
    name: "Coding",
    color: "blue",
    icon: "coding",
    startDate: "2026-09-01",
    completions: {
      "2026-09-01": true,
      "2026-09-02": true,
      "2026-09-03": true,
      "2026-09-04": true,
      "2026-09-05": true,
      "2026-09-06": true,
    },
  },

  {
    id: "2",
    name: "Exercise",
    color: "green",
    icon: "workout",
    startDate: "2026-09-01",
    completions: {
      "2026-09-01": true,
      "2026-09-02": true,
      "2026-09-04": true,
      "2026-09-06": true,
    },
  },

  {
    id: "3",
    name: "Reading",
    color: "purple",
    icon: "book",
    startDate: "2026-09-02",
    completions: {
      "2026-09-02": true,
      "2026-09-03": true,
      "2026-09-05": true,
    },
  },

  {
    id: "4",
    name: "Meditation",
    color: "orange",
    icon: "meditation",
    startDate: "2026-09-01",
    completions: {
      "2026-09-01": true,
      "2026-09-03": true,
      "2026-09-04": true,
      "2026-09-05": true,
    },
  },

  {
    id: "5",
    name: "Drink Water",
    color: "cyan",
    icon: "water",
    startDate: "2026-09-03",
    completions: {
      "2026-09-03": true,
      "2026-09-04": true,
      "2026-09-05": true,
      "2026-09-06": true,
    },
  },

  {
    id: "6",
    name: "Writing",
    color: "red",
    icon: "writing",
    startDate: "2026-09-01",
    completions: {},
  },
]; */


export const getCurrentStreak = (habits) => {

    let streak = 0;
    let date = new Date();

   while(true){
        const dateKey = date.toISOString().split('T')[0];

        const completed = habits.some(
        habit => habit.completions[dateKey] === true
        );

        if(!completed){
            break;
        }

        streak++;

        date.setDate(date.getDate() - 1);
    }

    return streak;
}

export const getCompletedToday = (habits) => {
    const today = new Date().toISOString().split("T")[0];
    let length = habits.length;

    const completed = habits.filter(habit => 
        habit.completions[today] === true
    ).length;

    return `${completed}/${length}`;

}









    


