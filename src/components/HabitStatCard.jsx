

export const HabitStatCard = ({title, value, unit}) => {
  return (
      <div className="border-[0.5px] border-gray-100  rounded-xl py-3 px-4 bg-gray-50 shadow-2xs dark:bg-slate-900  dark:border-none">

       <div className="flex flex-col">
          <p className="text-2xs mb-1">{title}</p> 
          <span className="text-xl font-semibold">{value} 
              <small className="text-xs font-light pl-0.5">{unit}</small>
          </span> 
          
       </div>
    </div>
  )
}
