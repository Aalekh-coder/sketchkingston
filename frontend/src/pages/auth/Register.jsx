// import { useState } from "react";


// const Register = () => {
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [isSeller, setIsSeller] = useState(false);

 
//     return (
//         <div className="h-[90vh] w-full flex items-center ">
//             <div className="bg-yellow-300 rounded-2xl border h-[80vh] w-[90vw] mx-auto">
//                 <div className="font-bold text-2xl text-center mt-5 sm:text-4xl">SignUp</div>
//                 <form  className="flex flex-col items-center gap-5 mt-5">

//                     <div className="flex  flex-col items-start ">
//                         <label htmlFor="username" className="font-semibold sm:text-lg">
//                             Username
//                         </label>
//                         <input type="text" id="username" value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                             className="rounded-2xl sm:w-[20rem] p-2 text-yellow-800 font-semibold md:w-[30rem]" />
//                     </div>


//                     <div className="flex  flex-col items-start ">
//                         <label htmlFor="email" className="font-semibold sm:text-lg">
//                             Email
//                         </label>
//                         <input type="email" id="email" className="rounded-2xl sm:w-[20rem] p-2 text-yellow-800 font-semibold md:w-[30rem]" value={email}
//                             onChange={(e) => setEmail(e.target.value)} />
//                     </div>

//                     <div className="flex  flex-col items-start ">
//                         <label htmlFor="password" className="font-semibold sm:text-lg">
//                             Password
//                         </label>
//                         <input type="password" id="password" className="rounded-2xl sm:w-[20rem] p-2 text-yellow-800 font-semibold md:w-[30rem]" value={password} onChange={(e) => setPassword(e.target.value)} />
//                     </div>


            

//                     <div className="flex items-center gap-4">
//                         <input type="checkbox" id="seller" className="mt-1" value={isSeller} onChange={e => setIsSeller(e.target.value)} />
//                         <label htmlFor="seller" className="font-semibold sm:text-lg">
//                             I want to be seller
//                         </label>
//                     </div>

//                     <button className="bg-yellow-400 px-10 py-2 rounded-2xl font-bold md:py-3 md:px-14 md:text-xl"  type="submit">Submit</button>
//                 </form>

//             </div>
//         </div>
//     )
// }

// export default Register





import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import {useRegisterMutation} from "../../redux/api/userApiSlice"
import { setCredentials } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";

const Register = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
          const res = await register({ username, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate(redirect);
        toast.success("User successfully registered");
      } catch (err) {
          toast.error(err.data.message);
        console.log(err);
      }
    }
  };

  return (
    <section className="pl-[10rem] flex flex-wrap">
      <div className="mr-[4rem] mt-[5rem]">
        <h1 className="text-2xl font-semibold mb-4">Register</h1>

        <form onSubmit={submitHandler} className="container w-[40rem]">
          <div className="my-[2rem]">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-2 border rounded w-full"
              placeholder="Enter name"
              value={username}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="my-[2rem]">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 border rounded w-full"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="my-[2rem]">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 border rounded w-full"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="my-[2rem]">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-white"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="mt-1 p-2 border rounded w-full"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer my-[1rem]"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>

          {isLoading && <Loader />}
        </form>

        <div className="mt-4">
          <p className="text-white">
            Already have an account?{" "}
            <Link
              to={redirect ? `/login?redirect=${redirect}` : "/login"}
              className="text-pink-500 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1576502200916-3808e07386a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80"
        alt=""
        className="h-[65rem] w-[59%] xl:block md:hidden sm:hidden rounded-lg"
      />
    </section>
  );
};

export default Register;
