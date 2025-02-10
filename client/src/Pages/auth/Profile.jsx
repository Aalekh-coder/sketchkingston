import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { useProfileEditMutation } from "../../redux/api/userApiSlice";
import Loader from "../../Components/Loader";

const ProfileEdit = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);
  const [profileEdit, { isLoading: loadingUpdateProfile }] = useProfileEditMutation();

  useEffect(() => {
    if (userInfo) {
      setUsername(userInfo.username);
      setEmail(userInfo.email);
    }
  }, [userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await profileEdit({
        _id: userInfo._id,
        username,
        email,
        password,
      }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success("Profile updated successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error(error?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Update Profile
        </h2>
        <form onSubmit={submitHandler} className="space-y-6">
          {/* Username Field */}
          <div>
            <label
              htmlFor="username"
              className="block text-lg font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg px-4 py-3"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg px-4 py-3"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password (optional)"
              className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg px-4 py-3"
            />
            <p className="text-sm text-gray-500 mt-2">
              Leave blank to keep your current password.
            </p>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white text-lg py-2 px-6 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Update Profile
            </button>
          </div>

          {/* Loader */}
          {loadingUpdateProfile && (
            <div className="text-center mt-4">
              <Loader />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;
