import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { IoMdLogIn } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../redux/api/userApiSlice";
import { logout } from "../redux/features/auth/authSlice";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [clickHam, setClickHam] = useState(false);
  const [clickProfile, setclickProfile] = useState(false);

  const location = useLocation();

  const isRoot = location.pathname === "/";

  const toggleHam = () => {
    setClickHam(prev => !prev)
  }
  const toggleProfile = () => {
    setclickProfile(prev => !prev)
  }


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login")
    } catch (error) {
      console.log(error);

    }
  }


  const { userInfo } = useSelector((state) => state.auth)

  return (
    <header className="bg-yellow-300 flex items-center justify-between gap-5 px-4 h-[10vh]">
      <div className="text-emerald-900 font-bold lg:text-lg">SketchKingston</div>
      <div className="hidden md:flex md:items-center md:gap-5 md:font-bold lg:mr-[10rem] lg:text-lg">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/store">Store</NavLink>
        <NavLink to="/favorite">Favourite</NavLink>
      </div>
      {!userInfo ? <div className="">
        <div className="md:hidden" onClick={toggleHam}> <GiHamburgerMenu size={21} /></div>

        <div className="hidden md:flex">
          <Link to="/login"><IoMdLogIn size={22} /></Link>
        </div>
      </div>
        : <div className="flex flex-col items-center">
          <CgProfile size={20} onClick={toggleProfile} />
          <p>{userInfo.username}</p>
        </div>}

      {clickHam && isRoot ? <div className="absolute right-3 top-14 bg-yellow-200  rounded-lg">
        <ul className="flex flex-col items-center">
          <li className="hover:bg-yellow-300 rounded-lg p-2">
            <Link to="/login">Login</Link>
          </li>
          <hr />
          <li className="hover:bg-yellow-300 rounded-lg p-2">
            <Link to="/sign">Register</Link>
          </li>
         
        </ul>
      </div> : ""}

      {clickProfile ? <div className="absolute right-3 top-[4.5rem] bg-yellow-200  rounded-lg">
        <ul className="flex flex-col items-center px-5">
          <li className="hover:bg-yellow-200 rounded-lg p-3 px-4">
            <button onClick={logoutHandler}>Logout</button>
          </li>
          

          {
            userInfo?.isSeller ? <div>
              <li className="hover:bg-yellow-200 rounded-lg p-2">
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </div> : ""
          }
        </ul>
      </div> : ""}
    </header>
  )
}

export default Navbar