// import { AlignRight, BaggageClaim, BookHeart } from 'lucide-react'

// import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
// import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
// import { Link, useNavigate } from 'react-router';
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { useDispatch, useSelector } from 'react-redux';
// import { useLogoutMutation } from '@/store/api/userApiSlice';
// import { logout } from "../store/features/auth/authSlice"
// import toast from 'react-hot-toast';


// const Navbar = () => {
//     const { userInfo } = useSelector(state => state.auth);

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const [logoutApi] = useLogoutMutation()

//     const logoutHandler = async () => {
//         try {
//             await logoutApi().unwrap()
//             dispatch(logout());
//             navigate("/login");
//             toast.success(`${userInfo?.username} logged out successfully`)
//         } catch (error) {
//             console.log(error);
//             toast.error("something went wrong while logout")
//         }
//     }


//     return (
//         <header className="h-[10vh] bg-transparent  flex items-center justify-between px-5 sticky top-0 z-40 w-full border-b ">
//             <div className='font-bold flex'><BookHeart color='red' />Sketchkingston</div>
//             <div className='font-medium lg:flex gap-4 hidden'>
//                 <Link to="/">Home</Link>
//                 <Link to="/products/art">Arts</Link>
//                 <Link to="/products/home-decore">Home Decore</Link>
//                 <Link to="/products/flat-art">Flat art</Link>
//                 <Link to="/products/minimalistic">Minimalist art</Link>
//                 <Link to="/products/vector">Vector art</Link>
//             </div>
//             <div className='flex gap-10 items-center'>
//                 <div className='hidden lg:block'><BaggageClaim /></div>
//                 <div className="hidden lg:block">


//                     <DropdownMenu>
//                         <DropdownMenuTrigger><Avatar>
//                             {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
//                             <AvatarFallback className="font-bold text-lg bg-pink-500">{userInfo?.username[0].toUpperCase()}</AvatarFallback>
//                         </Avatar></DropdownMenuTrigger>
//                         <DropdownMenuContent>
//                             <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                             <DropdownMenuSeparator />
//                             <DropdownMenuItem onClick={logoutHandler}>Logout</DropdownMenuItem>
//                             {userInfo?.isSeller && <Link to="/dashboard"><DropdownMenuItem>Dashboard</DropdownMenuItem></Link>}

//                         </DropdownMenuContent>
//                     </DropdownMenu>

//                 </div>
//             </div>
//             <Sheet >
//                 <SheetTrigger className="lg:hidden"><AlignRight className='bg-yellow-300' size={"20"} /></SheetTrigger>
//                 <SheetContent side="left" className="">
//                     <div className='flex flex-col gap-5 font-medium'>
//                         <Link to="/">Home</Link>
//                         <Link to="/products/art">Arts</Link>
//                         <Link to="/products/home-decore">Home Decore</Link>
//                         <Link to="/products/flat-art">Flat art</Link>
//                         <Link to="/products/minimalistic">Minimalist art</Link>
//                         <Link to="/products/vector">Vector art</Link>

//                         <div className='mt-20 flex flex-col gap-5'>
//                             <div><BaggageClaim /></div>
//                             <div>
//                                 <DropdownMenu>
//                                     <DropdownMenuTrigger><Avatar>
//                                         {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
//                                         <AvatarFallback className="font-bold text-lg bg-pink-500">{userInfo?.username[0].toUpperCase()}</AvatarFallback>
//                                     </Avatar></DropdownMenuTrigger>
//                                     <DropdownMenuContent>
//                                         <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                                         <DropdownMenuSeparator />
//                                         <DropdownMenuItem onClick={logoutHandler}>Logout</DropdownMenuItem>
//                                         {userInfo?.isSeller && <Link to="/dashboard"><DropdownMenuItem>Dashboard</DropdownMenuItem></Link>}

//                                     </DropdownMenuContent>
//                                 </DropdownMenu>
//                             </div>
//                         </div>
//                     </div>
//                 </SheetContent>
//             </Sheet>

//         </header>
//     )
// }

// export default Navbar









import React from "react";
import { motion } from "framer-motion";
import { AlignRight, BaggageClaim, BookHeart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Link, useNavigate } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "@/store/api/userApiSlice";
import { logout } from "../store/features/auth/authSlice";
import toast from "react-hot-toast";

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApi] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApi().unwrap();
      dispatch(logout());
      navigate("/login");
      toast.success(`${userInfo?.username} logged out successfully`);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while logging out");
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="h-[10vh] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-opacity-80 backdrop-blur-md flex items-center justify-between px-5 sticky top-0 z-40 w-full border-b border-gray-200"
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-bold flex items-center text-white"
      >
        <BookHeart className="mr-2" color="white" />
        SketchKingston
      </motion.div>

      {/* Links */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="font-medium lg:flex gap-4 hidden text-white"
      >
        <Link to="/">Home</Link>
        <Link to="/products/art">Arts</Link>
        <Link to="/products/home-decore">Home Decore</Link>
        <Link to="/products/flat-art">Flat Art</Link>
        <Link to="/products/minimalistic">Minimalist Art</Link>
        <Link to="/products/vector">Vector Art</Link>
      </motion.div>

      {/* User Actions */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex gap-10 items-center"
      >
        <div className="hidden lg:block text-white">
          <BaggageClaim />
        </div>
        <div className="hidden lg:block">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarFallback className="font-bold text-lg bg-white">
                  {userInfo?.username[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logoutHandler}>Logout</DropdownMenuItem>
              {userInfo?.isSeller && (
                <Link to="/dashboard">
                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                </Link>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger className="lg:hidden">
          <AlignRight className="bg-yellow-300" size={20} />
        </SheetTrigger>
        <SheetContent side="left" className="">
          <div className="flex flex-col gap-5 font-medium">
            <Link to="/">Home</Link>
            <Link to="/products/art">Arts</Link>
            <Link to="/products/home-decore">Home Decore</Link>
            <Link to="/products/flat-art">Flat Art</Link>
            <Link to="/products/minimalistic">Minimalist Art</Link>
            <Link to="/products/vector">Vector Art</Link>

            <div className="mt-20 flex flex-col gap-5">
              <div>
                <BaggageClaim />
              </div>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar>
                      <AvatarFallback className="font-bold text-lg bg-pink-500">
                        {userInfo?.username[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logoutHandler}>
                      Logout
                    </DropdownMenuItem>
                    {userInfo?.isSeller && (
                      <Link to="/dashboard">
                        <DropdownMenuItem>Dashboard</DropdownMenuItem>
                      </Link>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </motion.header>
  );
};

export default Navbar;