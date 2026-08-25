import { CircleCheck, Sun } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="fixed bg-slate-950 top-0 w-full z-50">
       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18">
              <div className="flex items-center space-x-1 group cursor-pointer">
                  <CircleCheck className="text-white h-5 w-5 sm:h-6 sm:w-6"/>
                  <span className="text-lg sm:text-xl md:text-2xl font-medium">
                    <span className="text-white">Streak</span>
                    <span className="text-orange-400">Up</span>
                  </span>
              </div>
              <div>
                <Sun className="text-white h-5 w-5 sm:h-6 sm:w-6"/>
              </div>
           </div>
       </div>
    </nav>
  )
}

export default NavBar