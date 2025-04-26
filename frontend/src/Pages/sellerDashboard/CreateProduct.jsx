import { ImageUp } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Input } from '../../components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from '../../components/ui/textarea'
import { Button } from '../../components/ui/button'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { useCreateProductMutation, useUpdateProductMutation } from '@/store/api/productApiSlice'



const CreateProduct = ({ editTitle,
    editDescription,
    editCategory,
    editImage, isEdited, currentProductClicked, refetch }) => {


    const [title, setTitle] = useState(editTitle || "");
    const [description, setDescription] = useState(editDescription || "");
    const [category, setCategory] = useState(editCategory || "");
    const [image, setImage] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState(editImage || "")
    const { userInfo } = useSelector(state => state.auth)
    const { _id } = userInfo
    const [createProduct, { isLoading }] = useCreateProductMutation();
    const [updateProduct] = useUpdateProductMutation();



    async function submitHandler(e) {
        e.preventDefault()
        try {
            const product = await createProduct({ title, description, category, artist: _id, image: uploadedImageUrl }).unwrap();
            if (product?.success) {
                toast.success("Your art created successfully");
                setTitle("")
                setDescription("")
                setCategory("")
                setUploadedImageUrl("")

            };
        } catch (error) {
            console.log(error);
            toast.error("Error while creating product")
        }
    }

    async function editHandler(e) {
        e.preventDefault();
        try {
            const { data } = await updateProduct({ id: currentProductClicked._id, updatedProduct: { title, description, category, artist: _id, image: uploadedImageUrl } })
            if (data?.success) {
                toast.success("Your art Updated successfully");
                setTitle("")
                setDescription("")
                setCategory("")
                setUploadedImageUrl("")
                refetch

            };
        } catch (error) {
            console.log(error);
            toast.error("Error while Updating product")
        }
    }



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
        <div className="md:flex md:justify-between">
            <form className='md:w-1/2 px-8' onSubmit={isEdited ? editHandler : submitHandler}>
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
                <div ><Button disabled={isLoading} type="submit" className='w-full mt-5'>{isEdited ? "Edit" : "Add"}</Button></div>
            </form>
            <div className='hidden md:flex md:w-1/2 '>
                {uploadedImageUrl ?
                    <img className='rounded-lg lg:w-96' src={uploadedImageUrl} alt="" /> : <div className='rounded-lg lg:w-96 lg:h-96 bg-gray-800 animate-pulse flex items-center justify-center' ><ImageUp /></div>}
            </div>
        </div>
    )
}

export default CreateProduct