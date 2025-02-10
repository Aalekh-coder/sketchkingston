import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router";
import { useSignMutation } from "../../redux/api/userApiSlice";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";

const Sign = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSeller, setIsSeller] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [sign, { isLoading }] = useSignMutation();

    const { userInfo } = useSelector((state) => state.auth);


    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get("redirect") || "/"

    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    },[navigate, redirect,userInfo])

    const submitHandler = async (e) => {
        e.preventDefault();
    
        try {
          const res = await sign({ username, email, password, isSeller }).unwrap();
          dispatch(setCredentials({ ...res }));
          navigate(redirect);
          toast.success("User successfully registered");
        } catch (err) {
          toast.error(err.data.message);
          console.log(err);
        }
    
      };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Create Your Account
                </h2>
                <form className="space-y-6" onSubmit={submitHandler}>
                    {/* Username */}
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-lg font-medium text-gray-700"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg px-4 py-3"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-lg font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg px-4 py-3"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-lg font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg px-4 py-3"
                            required
                        />
                    </div>

                    {/* Seller Toggle */}
                    <div className="flex items-center justify-between">
                        <label
                            htmlFor="isSeller"
                            className="text-lg font-medium text-gray-700"
                        >
                            Are you a Seller?
                        </label>
                        <input type="checkbox" value={isSeller} onChange={(e) => setIsSeller(e.target.checked)} className="toggle toggle-warning" />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit" disabled={isLoading}
                            className="w-full bg-indigo-600 text-white text-lg py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                           {isLoading? "SignUp..." :"SignUp"}
                        </button>
                    </div>
                </form>

                {/* Additional Links */}
                <p className="text-lg text-gray-500 text-center mt-6">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-indigo-600 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Log In
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Sign