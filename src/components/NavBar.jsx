import { CircleCheck, Sun, Moon } from "lucide-react";

const NavBar = ({darkMode,toggleDarkMode}) => {
  return (
    <nav className={darkMode ? "fixed top-0 z-50 w-full bg-slate-950 shadow-[0_2px_5px_rgba(255,255,255,0.5)]" : "fixed top-0 z-50 w-full bg-slate-950"}>
       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18">
              <div className="flex items-center space-x-1 group cursor-pointer">
                  <CircleCheck className="text-white h-5 w-5 sm:h-6 sm:w-6"/>
                  <span className="text-lg sm:text-xl md:text-2xl font-medium">
                    <span className="text-white">Streak</span>
                    <span className="text-orange-400">Up</span>
                  </span>
              </div>
              <div className="flex items-center space-x-2">
                 <button onClick={toggleDarkMode} className="transition-all duration-300 cursor-pointer rounded-lg p-1 hover:bg-slate-800">
                  {darkMode?  
                  <Sun className="h-5 w-5 text-yellow-400 sm:h-6 sm:w-6"/>: 
                  <Moon className="h-5 w-5 text-slate-200 sm:h-6 sm:w-6"/>}
                </button>
                <a
                    href="https://github.com/yitbe22/daily-habit-tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex items-center justify-center w-9 h-9 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors duration-200"
                  >
                    <img
                      src="https://cdn.simpleicons.org/github/ffffff"
                      alt=""
                      className="w-5 h-5"
                    />
                 </a>         
                
              </div>
           </div>
       </div>
      
    </nav>
  )
}

export default NavBar