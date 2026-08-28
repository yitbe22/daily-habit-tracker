import { useState } from "react"
import {
  BookOpen,
  Dumbbell,
  Droplets,
  Heart,
  Brain,
  Moon,
  Sun,
  Footprints,
  Apple,
  Music,
  Code,
  Pencil,
} from "lucide-react";

const habitIcons = [
  { name: "book", icon: BookOpen },
  { name: "workout", icon: Dumbbell },
  { name: "water", icon: Droplets },
  { name: "health", icon: Heart },
  { name: "meditation", icon: Brain },
  { name: "sleep", icon: Moon },
  { name: "morning", icon: Sun },
  { name: "walking", icon: Footprints },
  { name: "food", icon: Apple },
  { name: "music", icon: Music },
  { name: "coding", icon: Code },
  { name: "writing", icon: Pencil },
];

const habitColors = [
  { name: "orange", value: "#f97316" },
  { name: "red", value: "#ef4444" },
  { name: "blue", value: "#3b82f6" },
  { name: "green", value: "#22c55e" },
  { name: "purple", value: "#a855f7" },
  { name: "pink", value: "#ec4899" },
  { name: "yellow", value: "#eab308" },
  { name: "cyan", value: "#06b6d4" },
];

const AddForm = () => {
  const [form, setForm] = useState({name:'', icon:'', color:''});
  return (
    <div className="w-100  border-[0.5px] border-gray-200 rounded-xl bg-white shadow-2xs py-4 px-5">
       <h1 className="text-lg font-medium">Add Habit</h1>
       <form onSubmit="">
            <label htmlFor="habit-name" className="flex flex-col gap-1 py-2">
                   <span className="text-sm text-gray-500">Habit name</span>
                <input 
                     type="text" 
                     id="habit-name" 
                     value={form.name} 
                     onChange={(e)=> {
                          setForm({...form, name: e.target.value})
                     }}
                     placeholder="e.g. Read 10 pages"
                     className="rounded-md bg-gray-100 py-1 px-3 border border-gray-300 focus:border-orange-400 focus:outline-none"
                     required/>
            </label>
            <div className="flex flex-col py-2">
               <h4 className="text-sm text-gray-500 py-1">Icons</h4>
               <div className="grid grid-cols-4 gap-3">
                    {habitIcons.map((item) => {
                    const Icon = item.icon;

                    return (
                        <button
                            type="button"
                            key={item.name}
                            onClick={() => {
                              setForm({
                                  ...form , icon:item.name
                              })
                            }}
                            className={`flex justify-center items-center p-2 rounded-md border transition-colors duration-300
                              ${form.icon === item.name ?
                                  'border-orange-400 bg-orange-100':
                                  'border-gray-300 bg-gray-100'
                              }
                              
                              `}
                        
                        >
                            <Icon size={22} strokeWidth={2} />
                        </button>
                    )

                })}
               </div>
            </div>
            <div className="flex flex-col py-2">
              <h4 className="text-sm text-gray-500 py-1">Colors</h4>
              <div className="flex gap-2 py-1">
                 {habitColors.map((color) => {
                     return (
                        <button
                           key={color.name}
                           type="button"
                           onClick={() => {
                               setForm({
                                   ...form, color:color.name
                               })
                           }}
                            className={`w-8 h-8 border-2 rounded-full cursor-pointer transition-all duration-200
                                 ${
                                    form.color === color.name ?
                                    'border-gray-900 scale-110':
                                    'border-transparent'
                                 }
                              `}

                              style={{backgroundColor: color.value}}
                            > 
                        
        
                        </button>
                     )
                 })}  
              </div>
            </div>
            <div className="py-3">
                <button className="w-full bg-amber-500 hover:bg-amber-400 px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300">Create Habit</button>
            </div>
          
       </form>
    </div>
  )
}

export default AddForm