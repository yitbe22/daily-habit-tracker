import HabitItem from "./HabitItem";

const HabitListItem = ({habits}) => {
  return (
    <section className="w-full mx-auto">
      <h1 className="text-xl sm:text-2xl font-medium pb-3">Today's Habits</h1>
      <div className="flex flex-col space-y-3 ">
        {habits.map(habit => (
           <HabitItem 
               key={habit.id}
               habit={habit}
                />
        ))}
      </div>
    </section>
  );
};

export default HabitListItem;

// <HabitItem text="Read 10 pages" streak={12} completed={true} />
      
