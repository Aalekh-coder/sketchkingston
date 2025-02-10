import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/api/userApiSlice"
import { setCredentials } from "../../redux/features/auth/authSlice"
import { toast } from "react-toastify"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth)

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect)
    } catch (error) {
      toast.error(error?.data?.message || error.error)
    }

  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email or Username */}
          <div>
            <label
              htmlFor="emailOrUsername"
              className="block text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              name="emailOrUsername"
              id="emailOrUsername"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg px-4 py-3"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-indigo-600 text-white text-lg py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {isLoading ? "Login..." : "Login"}
            </button>
          </div>
        </form>

        {/* Additional Links */}
        <p className="text-lg text-gray-500 text-center mt-6">
          Don&apos;t have an account?{" "}
          <Link
            to="/sign"
            className="text-indigo-600 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
