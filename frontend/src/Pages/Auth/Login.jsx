import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLoginMutation } from "@/store/api/userApiSlice";
import { setCredientials } from "@/store/features/auth/authSlice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router";


const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
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

  async function onSubmit(e) {
    e.preventDefault()
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredientials({ ...res }))
      navigate(redirect);
      toast.success("User login success")
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while login")
    }

  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tighter  text-foreground">Sign in to your account</h1>
        <p className="mt-2">Don't have an account</p>
        <Link className="underline text-teal-400 font-bold" to="/register">Register</Link>
      </div>

      <form onSubmit={onSubmit}>

        <div className="mt-2 font-medium ">
          <Label>Email</Label>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mt-2 font-medium ">
          <Label>Password</Label>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <Button disabled={isLoading} className="w-full mt-4" type="Submit">Submit</Button>
      </form>
    </div>
  )
}

export default Login