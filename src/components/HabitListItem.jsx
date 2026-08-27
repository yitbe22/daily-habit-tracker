import HabitItem from "./HabitItem"

const HabitListItem = () => {
  return (
    <section className="w-full mx-auto">
        <h1 className="text-xl sm:text-2xl font-medium py-3">Today's Habits</h1>
        <div className="flex flex-col space-y-3 ">
          <HabitItem text="Read 10 pages" streak={12} completed={true}/>
          <HabitItem text="Read 10 pages" streak={42}/>
          <HabitItem text="Read 10 pages" streak={11}/>
        </div>
    </section>
  )
}

export default HabitListItem