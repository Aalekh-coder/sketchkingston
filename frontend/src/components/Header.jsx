import { TbLayoutDashboardFilled } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { HiOutlineLogout } from "react-icons/hi";
import { logout } from "../redux/features/auth/authSlice";
import { useLogoutMutation } from "../redux/api/userApiSlice";

const Header = () => {
  const [showHello, setShowHello] = useState(false);

  const toggleHello = () => {
    setShowHello((prev) => !prev);
  };

  const { userInfo } = useSelector((state) => state.auth)
  return (
    <header className="bg-yellow-300 text-white w-full h-[10vh] px-5 flex items-center justify-between">
      <div className="font-bold text-emerald-500">Sketch-kingston👑</div>
      {/* <div className="sm:hidden"><GiHamburgerMenu /></div> */}

      {!userInfo ? <div className="flex gap-5 text-zinc-900 font-bold">
        <Link to="/login">Login</Link>
        <Link to="/register">Signup</Link>
      </div> : <div onClick={toggleHello}>
        <CgProfile size={30} className="text-black" />
      </div>}


      {showHello && (
        <div className="absolute top-[5rem] shadow-md lg:right-[2rem]">
          <div className="border-black h-[7rem] w-[12rem]">
            <div className="text-black hover:bg-gray-100 flex items-center gap-5 text-xl justify-center py-3">Logout <HiOutlineLogout /></div> <hr />
            <div className="text-black hover:bg-gray-100 flex items-center gap-5 text-xl justify-center py-3">Profile <CgProfile /></div>
            {userInfo.isSeller && (
              <>
                <div className="text-black  shadow-md hover:bg-gray-100 flex items-center gap-5 text-xl justify-center py-3">Dashboard <TbLayoutDashboardFilled /></div> <hr />

              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header