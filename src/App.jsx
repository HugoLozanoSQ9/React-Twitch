import NavBar from "./components/NavBar"
import AsideRigth from "./components/AsideRigth"
import MainContent from "./components/MainContent"
export default function App() {


  return (
    <main className="w-full min-h-screen bg-[#0e0e10] grid grid-cols-[3rem_1fr] grid-rows-[3.2rem_1fr] lg:grid-cols-[15rem_1fr] ">

      <NavBar />
      <AsideRigth />
      <MainContent />

      

    </main>
  )
}

