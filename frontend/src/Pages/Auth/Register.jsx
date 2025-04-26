import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useRegisterMutation } from "@/store/api/userApiSlice";
import { setCredientials } from "@/store/features/auth/authSlice";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isSeller, setIsSeller] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();

  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const [register, { isLoading }] = useRegisterMutation()


  async function onSubmit(e) {
    e.preventDefault();
    console.log(username, email, password, isSeller);

    try {

      const res = await register({ username, email, password, isSeller }).unwrap();
      dispatch(setCredientials({ ...res }));
      navigate(redirect);

      toast.success("User register successfully")
    } catch (error) {
      console.log(error);
      toast.error("Something was error while register")
    }


  }

  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className="text-center">
        <h1 className='text-3xl font-bold tracking-tighter text-foreground'>Create new account</h1>
        <p className='mt-2'>Already have an account</p>
        <Link className="underline text-teal-400 font-bold" to="/login">Login</Link>
      </div>

      <form onSubmit={onSubmit}>
        <div className="mt-2 font-medium ">
          <Label>Username</Label>
          <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="mt-2 font-medium ">
          <Label>Email</Label>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mt-2 font-medium ">
          <Label>Password</Label>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="mt-5 font-medium flex items-center justify-between">
          <Label>I want want to be a Seller</Label>
          <Switch checked={isSeller} onCheckedChange={() => setIsSeller(!isSeller)} />
        </div>
        <Button disabled={isLoading} className="w-full mt-4" type="Submit">Submit</Button>
      </form>

    </div>
  )
}

export default Register