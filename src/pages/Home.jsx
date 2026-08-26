import NavBar from "../components/NavBar"
import Stat from "../components/Stat"



const Home = () => {
  return (
    <div className="min-h-screen text-black overflow-hidden">
         <NavBar />

         <main className="pt-14 sm:pt-16 md:pt-17 lg:pt-18">
            <Stat />
         </main>
         
     </div>
  )
}

export default Home