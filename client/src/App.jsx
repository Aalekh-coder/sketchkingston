// import  { useEffect } from "react";
// import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";

function App() {
  // const theme = useSelector((state) => state.theme.theme);

  // useEffect(() => {
  //   document.documentElement.setAttribute("data-theme", theme);
  // }, [theme]);

  return (
    < >
      <ToastContainer />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;