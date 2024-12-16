import { RiProfileLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { FaArtstation } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { BsCloudUpload } from "react-icons/bs";
const Dashboard = () => {
  const { userInfo } = useSelector((state) => state.auth)

  const location = useLocation();
  const currentLoaction = location.pathname

  return (
    <div className="mx-5 my-5">
      {currentLoaction === "/dashboard" ? <>
        <h1 className="font-bold text-3xl font-roboto-slab">Dashboard</h1>

        <div className="flex gap-5">
          <Link to="profileEdit" className="mt-10 bg-red-400 h-[14rem]  w-[15rem] rounded-xl flex flex-col items-center p-5">
            <RiProfileLine size={40} />
            <p className="font-extrabold">Profile</p>
            <p>{userInfo._id}</p>
            <p>{userInfo.username}</p>
            <p>{userInfo.email}</p>

            <div className="mt-5">
              <div>
                <FaEdit size={24} className="text-white" />
              </div>
            </div>
          </Link>

          <Link to="yourgallery" className="mt-10 bg-blue-400 h-[14rem]  w-[15rem] rounded-xl flex flex-col items-center p-5">
            <div className="flex flex-col items-center mt-12">
              <FaArtstation size={40} />
              <p className="font-extrabold">Art</p>
              <p>50 Arts</p>
            </div>

          </Link>

          <Link to="add" className="mt-10 bg-green-400 h-[14rem] w-[15rem] rounded-xl flex flex-col items-center p-5">
            <div className="flex flex-col items-center mt-12">

            <BsCloudUpload size={40} />
            <p className="font-extrabold">Upload the your art</p>
            <p>Show case your art</p>
            </div>
          </Link>

          <div className="mt-10 bg-emerald-400 h-[14rem]  w-[15rem] rounded-xl flex flex-col items-center p-5">
           <div className="mt-10">
           <FaMoneyCheckDollar size={40} />
              <p className="font-extrabold">Money</p>
              <p className="font-semibold">$ 100</p>
           </div>

          
          </div>

        </div>
      </> : <Outlet />}
    </div>
  )
}

export default Dashboard