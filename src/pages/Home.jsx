import AddForm from "../components/AddForm"
import HabitListItem from "../components/HabitListItem"
import NavBar from "../components/NavBar"
import Stat from "../components/Stat"



const Home = () => {
  return (
    <div className="min-h-screen text-black overflow-hidden">
         <NavBar />

         <main className="pt-14 sm:pt-16 md:pt-17 lg:pt-18">
            <Stat />
            <div className="mx-auto w-full max-w-230 px-6 sm:px-7 md:px-8 py-5 flex flex-col sm:flex-row items-center sm:justify-between sm:items-center md:grow gap-5">
               <HabitListItem/>
               <AddForm/>
            </div>
            
         </main>
         
     </div>
  )
}

export default Home