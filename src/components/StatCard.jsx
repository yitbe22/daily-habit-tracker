
const StatCard = ({icon: Icon, title, value, unit, iconColor, borderColor}) => {
  return (
    <div className=" flex items-center gap-4 border-[0.5px] border-gray-200  rounded-xl py-3 px-4 bg-white shadow-2xs">
       <div className={`flex items-center justify-center rounded-full h-10 w-10 border ${borderColor} `}><Icon size={20} className={`${iconColor}`}/></div>

       <div className="flex flex-col">
          <p className="text-2xs mb-1">{title}</p> 
          <span className="text-xl font-semibold">{value}</span> 
          <small className="text-xs ">{unit}</small>
       </div>
    </div>
  )
}

export default StatCard