import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default App