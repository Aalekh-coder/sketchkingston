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
        <div className="h-[90vh] w-full flex items-center ">
            <div className="bg-yellow-300 rounded-2xl border h-[80vh] w-[90vw] mx-auto ">
                <div className="font-bold text-2xl text-center mt-14 sm:text-4xl">Login</div>
                <form onSubmit={submitHandler} className="flex flex-col items-center gap-5 mt-5">
                    <div className="flex  flex-col items-start ">
                        <label htmlFor="email" className="font-semibold sm:text-lg">
                            Email Address
                        </label>
                        <input type="email"  id="email" className="rounded-2xl sm:w-[20rem] p-2 text-yellow-800 font-semibold md:w-[30rem]" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="flex  flex-col items-start ">
                        <label htmlFor="password" className="font-semibold sm:text-lg">
                            Password
                        </label>
                        <input type="password" id="password" className="rounded-2xl sm:w-[20rem] p-2 text-yellow-800 font-semibold md:w-[30rem]" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" disabled={isLoading} className="bg-yellow-400 px-10 py-2 rounded-2xl font-bold mt-3 md:py-3 md:px-14 md:text-xl">{isLoading ? "Login..." : "Login"}</button>

                    {isLoading && <Loader />}
                </form>

                <div className="mt-5 text-center cursor-pointer">
                    <Link to="/sign" className="text-yellow-900 font-bold" >
                        New Customer ? <p className="underline">Sign up</p>
                        <Link to={redirect ? `/redirect?redirect=${redirect}` : "/sign"}></Link>
                    </Link>
                </div>


            </div>
        </div>
    )
}

export default Login

