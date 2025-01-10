import { Link } from "react-router-dom";
import { FaPaintBrush } from "react-icons/fa";

const ArtNotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center min-h-screen bg-yellow-100 text-yellow-800">
      <div className="text-center">
        <FaPaintBrush size={80} className="text-yellow-500 mb-4 animate-bounce mx-auto" />
        <h1 className="text-4xl font-bold mb-2">Oops! Art Not Found</h1>
        <p className="text-lg mb-6">
          Looks like we couldn’t find the masterpiece you’re looking for.  
          Let’s get back to sketching happiness!
        </p>
        <Link
          to="/"
          className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition duration-200"
        >
          Back to Home
        </Link>
      </div>
      <div className="mt-10">
        <img
          src="/cute-artist-not-found.png"
          alt="Cute artist not found"
          className="w-[300px] sm:w-[400px] mx-auto text-center"
        />
      </div>
    </div>
  );
};

export default ArtNotFound;
