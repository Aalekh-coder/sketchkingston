import { useDeleteProductMutation, useGetArtistArtsQuery } from "@/store/api/productApiSlice";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Loader from "@/components/ui/Loader";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {  useState } from "react";
import { Button } from "@/components/ui/button";
import CreateProduct from "./CreateProduct";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const Products = () => {
  const { userInfo } = useSelector(state => state.auth);
  // const { data:products, refetch } = useGetAllProductsQuery();
  const {data:products,refetch} = useGetArtistArtsQuery(userInfo?._id);
  // console.log(data);
  const [currentProductClicked, setCurrentProductClicked] = useState(null);
  const [isEdited, setIsEdited] = useState(false);
  const [deleteProduct] = useDeleteProductMutation()


  async function deleteHandler() {
    try {
      // console.log(currentProductClicked?._id);
      let answer = window.confirm(
        "Are you sure you want to delete this product?"
      );
      if (!answer) return;
      const { data } = await deleteProduct(currentProductClicked._id);
      console.log(data);
      if (data?.success) {
        toast.success(data?.message);
        refetch()
        setCurrentProductClicked(null)
      }
    } catch (error) {
      console.log(error);
      toast.error("some went wrong while delete")
    }
  }
  async function editHandler() {
    try {
      setIsEdited(true)
    } catch (error) {
      console.log(error);
      toast.error("some went wrong while delete")
    }
  }




  return (
    <div className="lg:flex lg:gap-10">
      <div className="lg:w-1/2">

        <Table >
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Art Category</TableHead>
              <TableHead>Art Name</TableHead>
              <TableHead className="">Like</TableHead>
            </TableRow>
          </TableHeader>
         
          <TableBody className="h-[40vh] overflow-y-scroll">
            {products && products.length ? (
              products.map((item) => (
                <TableRow
                  onClick={() => setCurrentProductClicked(item)}
                  key={item._id}
                >
                  <TableCell>
                    <img src={item?.image} alt="" className="w-10 h-10" />
                  </TableCell>
                  <TableCell className="font-medium">{item?.category}</TableCell>
                  <TableCell>{item?.title}</TableCell>
                  <TableCell>{item?.like}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell  className="text-center relative left-56">
                  <Loader />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div>
        {currentProductClicked === null ? null : !isEdited ? <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{currentProductClicked?.title}</CardTitle>
            <CardDescription>{currentProductClicked?.description}</CardDescription>
            <img src={currentProductClicked?.image} className="w-80" />
          </CardHeader>
          <CardContent>
            <p className="text-pink-600">{currentProductClicked?.like} Likes</p>
            <p>Categroy: <span className="font-extrabold">{currentProductClicked?.category}</span></p>
          </CardContent>
          <CardFooter className="flex items-center gap-5">
            <Button className="bg-blue-500" onClick={editHandler}>Edit</Button>
            <Button className="bg-red-500" onClick={deleteHandler}>delete</Button>
          </CardFooter>
        </Card> : <CreateProduct editTitle={currentProductClicked?.title}
          editDescription={currentProductClicked?.description}
          editCategory={currentProductClicked?.category}
          editImage={currentProductClicked?.image}
          isEdited={isEdited}
          currentProductClicked={currentProductClicked}
          refetch={refetch} />
        }
      </div>

    </div>
  );
};

export default Products;