import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useGetAllProductsQuery } from "@/store/api/productApiSlice";
import { Heart } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import ChatBtn from "../../components/miniComponents/ChatBtn"


import React, { useState } from 'react'
import { Button } from "@/components/ui/button";

const Art = () => {
  const { data: products, isLoading, error } = useGetAllProductsQuery();
  const [likes, setLikes] = useState(null);

  return (
    // <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10 my-10 ">
    //   {
    //     products?.map((item) => {
    //       return <Dialog key={item?._id}>
    //         <DialogTrigger>
    //           {/* <Card className=""> */}
    //             {/* <img src={item?.image || "https://img.freepik.com/premium-vector/girl-skirt-walks-dances-garden-fig-trees-ripe-figs-leaves-trees_1294209-10.jpg"} className="h-96 rounded-lg" /> */}
    //             {/* <CardHeader>
    //               <CardTitle>{item?.title || "Serene Geometry"}</CardTitle>
    //               <CardDescription>{item?.description || "A calming blend of shapes and symmetry."}</CardDescription>
    //             </CardHeader> */}
    //             {/* <CardContent>
    //               <img
    //                 src={item?.image || "https://img.freepik.com/premium-vector/girl-skirt-walks-dances-garden-fig-trees-ripe-figs-leaves-trees_1294209-10.jpg"}
    //                 alt={item?.title || "Serene Geometry"}
    //                 className="w-auto h-auto rounded-lg"
    //               />
    //             </CardContent> */}
    //             {/* <CardFooter className="flex items-center justify-between mb-3">
    //               <p className="flex gap-2"><Heart color="red" />{item?.like || 12} </p>
    //               <p> {item?.category || "Minimalistic"}</p>
    //             </CardFooter> */}
    //           {/* </Card> */}

              
    //         </DialogTrigger>
    //         <DialogContent className="w-[90vw] h-[90vh]">
    //           <div className="">
    //             <img src={item?.image} className="h-96" />
    //             <div className="mt-3">
    //               <p className="text-4xl">{item?.title}</p>
    //               <p className="text-lg light:text-black dark:text-white">{item?.description}</p>
    //               <p className="text-lg light:text-black dark:text-white font-bold">{item?.category}</p>
    //               <p className="flex gap-2"><Heart className="text-pink-700" />{item?.like || 12} </p>
    //               <div className="mt-10">

    //                 <ChatBtn />
    //               </div>

    //             </div>
    //           </div>


    //         </DialogContent>
    //       </Dialog>

    //     })
    //   }


    // </div>

<div className="p-6">
  <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
    {products?.map((img, index) => (
      <div key={index} className="relative mb-4 group overflow-hidden rounded-lg">
        <div className="relative transition-transform duration-300 group-hover:scale-105">
          {/* Heart icon */}
          <Heart 
            className="absolute top-2 left-2 text-red-500 bg-white rounded-full p-1 w-7 h-7 bg-opacity-50 z-10"
          />
          {/* Image */}
          <img
            src={img?.image}
            alt={`Gallery ${index}`}
            className="w-full"
          />
        </div>
      </div>
    ))}
  </div>
</div>





  )
}

export default Art