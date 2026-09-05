import { MoveLeft } from "lucide-react"
import { HabitStatCard } from "./HabitStatCard"
import { useContext } from "react"
import { PageContext } from "../context/PageContext"
import habitIcons from "../data/habitIcons"
import habitColors from "../data/habitColors"


export const HabitStat = ({habit, onEdit}) => {
    const {setPage, setEditing, setForm} = useContext(PageContext);
    
    if (!habit) return null;

    const color = habitColors.find((color) => habit.color === color.name);

    const ConvertIcon = habitIcons.find((icon) => habit.icon === icon.name);
    const Icon = ConvertIcon?.icon;

  return (
    <div className="mx-auto w-full max-w-230 bg-white dark:bg-slate-950  px-6 sm:px-7 md:px-8">
        <button title="Back" onClick={() => setPage('home')} className="py-4 cursor-pointer"><MoveLeft size={24} /></button>
        <div className="flex justify-between items-center">
           <div className="flex items-center space-x-2">
            <div 
                style={{background:color.value}}
                className="border border-gray-200 dark:border-none rounded-xl p-1.5 sm:p-2">{Icon && <Icon size={26}/>}</div>
                <div>
                    <div>
                       <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                        {habit.name}
                       </h1>
                    </div>
                    <div>
                        <p className="text-xs font- text-orange-500">12 day streak!</p>
                    </div>

                </div>
            </div>
            <div>
                <button 
                   onClick = {() => {
                        setEditing(habit);
                        setForm({
                            name: habit.name,
                            icon: habit.icon,
                            color: habit.color,
                        });
                        onEdit();
                   }}
                   className="border border-orange-500 px-2 py-1 rounded-2xl">Edit Habit</button>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
            <HabitStatCard
                 title="Total Completions"
                value="145"
                unit="times" 
            />
            <HabitStatCard
                title="Best Streak"
                value="45"
                unit="days" 
            />
            <HabitStatCard
                title="Success Rate"
                value="92%"
            />

        </div>
    </div>
  )
}
