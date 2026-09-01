
const StatCard = ({icon: Icon, title, value, unit, iconColor, borderColor}) => {
  return (
    <div className=" flex items-center gap-4 border-[0.5px] border-gray-100  rounded-xl py-3 px-4 bg-gray-50 shadow-2xs dark:bg-slate-900  dark:border-none">
       <div className={`flex items-center justify-center rounded-full h-10 w-10 border dark:border-[0.5px] ${borderColor} `}><Icon size={20} className={`${iconColor}`}/></div>

       <div className="flex flex-col">
          <p className="text-2xs mb-1">{title}</p> 
          <span className="text-xl font-semibold">{value} 
              <small className="text-xs font-light">{unit}</small>
          </span> 
          
       </div>
    </div>
  )
}

export default StatCard