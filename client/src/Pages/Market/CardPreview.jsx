import { useNavigate } from "react-router-dom";
import BackBtn from "../../Components/BackBtn"
import { useProductByIdQuery } from "../../redux/api/productApiSlice"
import { useParams } from "react-router-dom"
import SendBtn from "../../Components/SendBtn"
import {Link} from "react-router-dom"

const CardPreview = () => {
    const navigate = useNavigate();
    const { id } = useParams()
    const {data} = useProductByIdQuery(id);
    
    const info = data?.[0]
    console.log(info);
    

    return (
        <div className="relative flex flex-col items-center justify-center w-full min-h-screen bg-gray-900 p-6">
            {/* Back & Chat Buttons */}
            <div className="absolute top-4 left-4">
                <button
                    onClick={() => navigate(-1)}
                >
                    <BackBtn />
                </button>
            </div>

            <Link to="chat" className="absolute top-4 right-4">
                <SendBtn/>
            </Link>

            {/* Card Content */}
            <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row items-center">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <img
                        src={info?.image}
                        // alt={productName}
                        className="w-full h-[80%] object-cover rounded-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2 p-6 text-white flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4">{info?.productName}</h2>
                    <p className="text-lg text-gray-300 mb-2"><span className="font-bold text-yellow-400">⭐ Reviews:</span> {info?.review}</p>
                    <p className="text-lg text-gray-300"><span className="font-bold text-pink-400">💖 OrderBy:</span>  {info?.orderBy}</p>
                </div>
            </div>
        </div>
    );
};

export default CardPreview;
