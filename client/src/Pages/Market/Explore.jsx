import Card from "../../Components/Card";
import { useAllProductQuery } from "../../redux/api/productApiSlice"

const Explore = () => {

  const { data } = useAllProductQuery();

  return (
    <div className="mx-2">

      <div className="flex flex-wrap gap-5">
        {
          data?.map((pro) => {
            return <Card key={pro._id} info={pro} />
          })
        }



      </div>
    </div>

  )
}

export default Explore
