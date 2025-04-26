import { Link } from "react-router"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


import Allproduct from "@/Pages/sellerDashboard/Allproduct"
import CreateProduct from "@/Pages/sellerDashboard/CreateProduct"
import Chat from "@/Pages/sellerDashboard/Chat"

const DashboardLayout = () => {

    return (
        <div className='px-5 py-3'>
            <div className='font-bold text-lg'>
                <Link to={"/"} className='underline'>Home</Link>
                <h1 className='text-center font-extrabold'>Dashboard</h1>
            </div>
            <div className=''>
                <Tabs defaultValue="account" className="">
                    <TabsList>
                        <TabsTrigger value="account">All</TabsTrigger>
                        <TabsTrigger value="password">Add</TabsTrigger>
                        <TabsTrigger value="chat">Chats</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account"><Allproduct/></TabsContent>
                    <TabsContent value="password">
                       <CreateProduct/>
                    </TabsContent>
                    <TabsContent value="chat">
                       <Chat/>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default DashboardLayout