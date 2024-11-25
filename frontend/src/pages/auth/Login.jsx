// import {useEffect, useState } from "react";
// import Loader from "../../components/Loader"
// import {  Link, useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useLoginMutation } from "../../redux/api/userApiSlice";
// import { setCredentials } from "../../redux/features/auth/authSlice";
// import { toast } from "react-toastify";


// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const [login, { isLoading }] = useLoginMutation();
//     const { userInfo } = useSelector((state) => state.auth);

//     const { search } = useLocation();
//     const sp = new URLSearchParams(search);
//     const redirect = sp.get("redirect") || "/";

//     const submitHandler = async (e) => {
//         e.preventDefault();
//         try {
//           const res = await login({ email, password }).unwrap();
//           console.log(res);
//           dispatch(setCredentials({ ...res }));
//           navigate(redirect);
//         } catch (err) {
//           toast.error(err?.data?.message || err.error);
//         }
//       };
  
//     useEffect(() => {
//       if (userInfo) {
//         navigate(redirect);
//       }
//     }, [navigate, redirect, userInfo]);

//     return (
//         <div className="h-[90vh] w-full flex items-center ">
//             <div className="bg-yellow-300 rounded-2xl border h-[80vh] w-[90vw] mx-auto ">
//                 <div className="font-bold text-2xl text-center mt-14 sm:text-4xl">Login</div>
//                 <form  action={submitHandler} className="flex flex-col items-center gap-5 mt-5">
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
//                     <button type="submit" disabled={isLoading} className="bg-yellow-400 px-10 py-2 rounded-2xl font-bold mt-3 md:py-3 md:px-14 md:text-xl">{isLoading ? "Login..." : "Login"}</button>
                    
//                     {isLoading && <Loader/>}
//                 </form>

//                 <div className="mt-4">
//                     <p className="text-white">
//                         New Customer ? {" "}
//                         <Link to={redirect? `/redirect?redirect=${redirect}` : "/register"}></Link>
//                     </p>
//                 </div>

                
//             </div>
//         </div>
//     )
// }

// export default Login


import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { useLoginMutation } from "../../redux/api/userApiSlice";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

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
    try {
      const res = await login({ email, password }).unwrap();
      console.log(res);
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div>
      <section className="pl-[10rem] flex flex-wrap">
        <div className="mr-[4rem] mt-[5rem]">
          <h1 className="text-2xl font-semibold mb-4">Sign In</h1>

          <form onSubmit={submitHandler} className="container w-[40rem]">
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

            <div className="mb-4">
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

            <button
              disabled={isLoading}
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer my-[1rem]"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>

            {isLoading && <Loader />}
          </form>

          <div className="mt-4">
            <p className="text-white">
              New Customer?{" "}
              <Link
                to={redirect ? `/register?redirect=${redirect}` : "/register"}
                className="text-pink-500 hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
          alt=""
          className="h-[65rem] w-[59%] xl:block md:hidden sm:hidden rounded-lg"
        />
      </section>
    </div>
  );
};

export default Login;
