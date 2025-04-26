import { ImageUp } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from '../ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
// import { useCreateProductMutation } from '@/store/api/productApiSlice'



const Dashboard = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState("")
    const { userInfo } = useSelector(state => state.auth)
    const { _id } = userInfo
    // const [createProduct, { isLoading }] = useCreateProductMutation()

//     async function submitHandler(e) {
//         e.preventDefault()
//         try {
//             const product = await createProduct({ title, description, category, artist: _id, uploadedImageUrl }).unwrap();
// console.log(product);
//         } catch (error) {
//             console.log(error);
//             toast.error("Error while creating product")
//         }
//     }


    function handleImageFileChange(e) {
        const selectFiles = e.target.files?.[0];
        if (selectFiles) setImage(selectFiles)
    }

    async function uploadImageToCloudinary() {
        const data = new FormData();
        data.append("my_file", image);
        const response = await axios.post("http://localhost:5000/api/products/upload-image", data)
        if (response?.data?.success) {
            setUploadedImageUrl(response?.data?.result?.url);
            toast.success("image upload successfully")
        }
    }

    useEffect(() => {
        if (image !== null) uploadImageToCloudinary()
    }, [image])


    return (
        <>
           

            <div className=''>
                <Tabs defaultValue="account" className="">
                    <TabsList>
                        <TabsTrigger value="account">All</TabsTrigger>
                        <TabsTrigger value="password">Add</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">Make changes to your account here.</TabsContent>
                    <TabsContent value="password" className="md:flex md:justify-between">
                        <form  className='md:w-1/2 px-8'>
                            <div className="mt-5 font-medium ">
                                <Input type="file" id="image-upload" onChange={handleImageFileChange} />
                            </div>
                            <div className="mt-5 font-medium ">
                                <Input placeholder="Title.." value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className="mt-5 font-medium ">
                                <Textarea placeholder="Write about your art.." value={description} onChange={(e) => setDescription(e.target.value)}></Textarea>
                            </div>
                            <div className="mt-5 font-medium ">
                                <Select className="w-64" value={category} onValueChange={(e) => setCategory(e)}>
                                    <SelectTrigger onChange={(e) => e.target}>
                                        <SelectValue placeholder="Category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="home-decore">Home Decore</SelectItem>
                                        <SelectItem value="flat-art">Flat Art</SelectItem>
                                        <SelectItem value="minimalistic">Minimalistic</SelectItem>
                                        <SelectItem value="vector-art">Vector Art</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div ><Button type="submit" className='w-full mt-5'>Add</Button></div>
                        </form>
                        <div className='hidden md:flex md:w-1/2 '>
                            {uploadedImageUrl ?
                                <img className='rounded-lg lg:w-96' src={uploadedImageUrl} alt="" /> : <div className='rounded-lg lg:w-96 lg:h-96 bg-gray-800 animate-pulse flex items-center justify-center' ><ImageUp /></div>}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </>
    )
}

export default Dashboard
