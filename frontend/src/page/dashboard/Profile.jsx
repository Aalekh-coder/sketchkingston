import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { setCredentials } from "../../redux/features/auth/authSlice"
import { useProfileMutation } from "../../redux/api/userApiSlice"
import Loader from "../../components/Loader"




const ProfileEdit = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);
  const [updateProfile, { isLoading: loadingUpdateProfile }] = useProfileMutation();

  useEffect(() => {
    setUsername(userInfo.username);
    setEmail(userInfo.email);
  }, [userInfo.username, userInfo.email]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await updateProfile({
        _id: userInfo._id,
        username,
        email,
        password
      }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success(`${username} details updated Successfully`);
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message || error.message)
    }
  }

  return (
    <div className="container">
      <div className="flex flex-col items-center bg-yellow-50 p-20 rounded-lg w-[50rem] mx-[14rem]">
        <p className="font-bold text-3xl mb-5">Update the Profile details</p>
        <form onSubmit={submitHandler} className="flex flex-col items-center gap-5 mt-5">
          <div className="flex  flex-col items-start ">
            <label htmlFor="username" className="font-semibold sm:text-lg">
              Username
            </label>
            <input type="text" id="username" className="rounded-2xl sm:w-[20rem] p-2 text-yellow-800 font-semibold md:w-[30rem]" value={username}
              onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div className="flex  flex-col items-start ">
            <label htmlFor="email" className="font-semibold sm:text-lg">
              Email Address
            </label>
            <input type="email" id="email" className="rounded-2xl sm:w-[20rem] p-2 text-yellow-800 font-semibold md:w-[30rem]" value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="flex  flex-col items-start ">
            <label htmlFor="password" className="font-semibold sm:text-lg">
              Password
            </label>
            <input type="password" id="password" className="rounded-2xl sm:w-[20rem] p-2 text-yellow-800 font-semibold md:w-[30rem]" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button
                type="submit"
                className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-pink-600
                "
              >
                Update
              </button>

          {loadingUpdateProfile && <Loader />}
        </form>
      </div>
    </div>
  )
}

export default ProfileEdit