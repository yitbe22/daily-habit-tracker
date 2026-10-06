import { MoveLeft,Flame } from "lucide-react"
import { HabitStatCard } from "./HabitStatCard"
import { useContext } from "react"
import { PageContext } from "../context/PageContext"
import habitIcons from "../utils/habitIcons"
import habitColors from "../utils/habitColors"
import { getTotalCompletions,getSuccessRate,getBestStreak } from "../utils/habitCalculations"
import ActivityHeatmap from "./ActivityHeatmap"

export const HabitStat = ({habit, onEdit}) => {
    const {setPage, setEditing, setForm, getHabitStreak, resetForm} = useContext(PageContext);
    
    if (!habit) return null;

    const color = habitColors.find((color) => habit.color === color.name);

    const ConvertIcon = habitIcons.find((icon) => habit.icon === icon.name);
    const Icon = ConvertIcon?.icon;

    const totalCompletions = getTotalCompletions(habit);
    const successRate = getSuccessRate(habit);
    const bestStreak = getBestStreak(habit);

  return (
    <div className="mx-auto w-full max-w-230 bg-white dark:bg-slate-950  px-6 sm:px-7 md:px-8">
        <button title="Back" onClick={() => {
            resetForm();
            setPage('home');

        }} className="py-4 cursor-pointer"><MoveLeft size={24} /></button>
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
                    <div className="flex items-center gap-1 text-sm  text-orange-500">
                      <Flame size={15} className="shrink-0" />
                      <span>{getHabitStreak(habit)}</span>
                      <h4 className="whitespace-nowrap">day streak!</h4> 
                    </div>
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
                   className="border border-orange-500 px-2 py-1 rounded-2xl cursor-pointer hover:bg-amber-500">Edit Habit</button>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
            <HabitStatCard
                title="Total Completions"
                value={totalCompletions}
                unit="times" 
            />
            <HabitStatCard
                title="Best Streak"
                value={bestStreak}
                unit="days" 
            />
            <HabitStatCard
                title="Success Rate"
                value={successRate}
                unit="%"
            />

        </div>
        <ActivityHeatmap />
    </div>
  )
}
