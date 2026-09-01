import { useState } from "react";
import habitIcons from "../data/habitIcons";
import habitColors from "../data/habitColors";
import { X } from "lucide-react";

const AddForm = ({ onClose, isOpen, onAddHabit }) => {
  const [form, setForm] = useState({ name: "", icon: "", color: "" });

  const handleSubmit = (e) => {
     e.preventDefault();

     const newHabit = {
        id: crypto.randomUUID(),
        name: form.name,
        icon:form.icon,
        color:form.color,
        startDate: new Date().toISOString().split("T")[0],
        completions: {},
     }

      setForm({ name: "", icon: "", color: ""});

      onAddHabit(newHabit);
      
      onClose();
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-99 bg-black/50">
      <div
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
             w-[calc(100%-2rem)] max-w-sm
             max-h-[90vh] overflow-y-auto
             border border-gray-200 rounded-xl
             bg-white dark:bg-slate-950 shadow-xl p-4 sm:p-5"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-medium">Add Habit</h1>
          <button className="cursor-pointer" onClick={onClose}>
            <X strokeWidth={1.5} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="habit-name" className="flex flex-col gap-1 py-2">
            <span className="text-sm text-gray-500">Habit name</span>
            <input
              type="text"
              id="habit-name"
              value={form.name}
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
              }}
              placeholder="e.g. Read 10 pages"
              className="rounded-md bg-gray-100 py-1 px-3 border border-gray-300 dark:bg-slate-800 dark:border-slate-800 focus:border-orange-400 focus:outline-none"
              required
            />
          </label>
          <div className="flex flex-col py-2">
            <h4 className="text-sm text-gray-500 py-1">Icons</h4>
            <div className="grid grid-cols-4 gap-2">
              {habitIcons.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    type="button"
                    key={item.name}
                    onClick={() => {
                      setForm({
                        ...form,
                        icon: item.name,
                      });
                    }}
                    className={`flex justify-center items-center p-1.5 rounded-md border transition-colors duration-200
                              ${
                                form.icon === item.name
                                  ? "border-orange-400 text-orange-400"
                                  : "border-gray-300 bg-gray-100 dark:bg-slate-900 dark:border-slate-900"
                              }
                              
                              `}
                  >
                    <Icon size={22} strokeWidth={2} />
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col py-2">
            <h4 className="text-sm text-gray-500 py-1">Colors</h4>
            <div className="flex flex-wrap gap-2 py-1">
              {habitColors.map((color) => {
                return (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => {
                      setForm({
                        ...form,
                        color: color.name,
                      });
                    }}
                    className={`w-8 h-8 border-2 rounded-full cursor-pointer transition-all duration-200
                                 ${
                                   form.color === color.name
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
            <button className="w-full bg-amber-500 hover:bg-amber-400 px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300">
              Create Habit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
