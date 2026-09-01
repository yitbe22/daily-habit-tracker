import { useState } from "react";
import habitColors from "../data/habitColors";


const QuickAdd = ({onAddHabit}) => {
  const [quickform, setQuickForm] = useState({ name: "", color: "" });

  const handleQuickForm = (e) => {
       e.preventDefault();

       const newHabit = {
           id:crypto.randomUUID(),
           name:quickform.name,
           icon:"target",
           color:quickform.color,
           startDate: new Date().toISOString().split("T")[0],
           completions: {},
       }

       setQuickForm({ name: "", color: ""});

       onAddHabit(newHabit);


  }

  return (
    <div className="w-full max-w-md border-[0.5px] py-4 px-5 border-gray-200 rounded-xl bg-gray-50  dark:border-none dark:bg-slate-900 shadow-2xs ">
      <h1 className="text-lg font-medium pt-2">Quick Add</h1>
      <form onSubmit={handleQuickForm}>
        <label htmlFor="habit-name" className="flex flex-col gap-1 py-2">
          <span className="text-sm text-gray-500">Habit name</span>
          <input
            type="text"
            id="habit-name"
            value={quickform.name}
            onChange={(e) => {
              setQuickForm({ ...quickform, name: e.target.value });
            }}
            placeholder="e.g. Read 10 pages"
            className="rounded-md bg-gray-100 py-1 px-3 border border-gray-300 dark:bg-slate-800 dark:border-slate-800 focus:border-orange-400 focus:outline-none"
            required
          />
        </label>
        <div className="flex flex-col py-2">
          <h4 className="text-sm text-gray-500 py-1">Colors</h4>
          <div className="flex flex-wrap gap-2 py-1">
            {habitColors.map((color) => {
              return (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => {
                    setQuickForm({
                      ...quickform,
                      color: color.name,
                    });
                  }}
                  className={`w-8 h-8 border-2 rounded-full cursor-pointer transition-all duration-200
                                 ${
                                   quickform.color === color.name
                                     ? " border-gray-700  dark:border-gray-200 scale-110"
                                     : "border-transparent"
                                 }
                              `}
                  style={{ backgroundColor: color.value }}
                ></button>
              );
            })}
          </div>
        </div>
        <div className="py-3">
          <button type="submit"  className="w-full bg-amber-500 hover:bg-amber-400 px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300">
            Create Habit
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuickAdd;
