import { Flame } from "lucide-react";
import habitIcons from "../data/habitIcons";

const HabitItem = ({habit}) => {
    const today = new Date().toISOString().split("T")[0];
    const completed = habit.completions[today] || false;

    

    const ConvertIcon = habitIcons.find((icon) => habit.icon === icon.name);
    const Icon = ConvertIcon?.icon;
   
  return (
    <div className="w-full flex items-center justify-between border-[0.5px] border-gray-200 rounded-xl bg-white shadow-2xs px-5 sm:px-6 md:px-7 py-2 sm:py-3 md:py-4">
      <div className="flex gap-2 items-center">
        <div className="border border-gray-200 rounded-xl py-1.5 px-1.5 sm:py-2 sm:px-2">
            {Icon && <Icon size={22} strokeWidth={1.5}/>}
        </div>
        <div>
          <p className="text-sm font-medium">{habit.name}</p>
          {completed ? (
            <p className="text-xs text-green-400 font-light">Completed</p>
          ) : (
            <p className="text-xs text-gray-500 font-light">In progress</p>
          )}
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <div className="flex items-center gap-1 text-sm bg-gray-100 py-1 px-2 rounded-full">
          <Flame size={15} className="text-orange-500" />
            20
        </div>
        <button
          aria-label={completed ? "Mark incomplete" : "Mark complete"}
          className="w-8 h-8 relative rounded-full border-2 border-emerald-500"
        >
          <div
            className={`absolute inset-1 rounded-full ${
              completed ? "bg-emerald-500" : "bg-transparent"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default HabitItem;
