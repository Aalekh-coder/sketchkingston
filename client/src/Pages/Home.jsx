// import { useEffect } from "react";
import { Link } from "react-router";
import { homeDecor, portraitArt, hero } from "../../DB/index"
import TypeWriterTitle from "../Components/TypeWriter";
import {useSelector} from "react-redux"

const Home = () => {
  const { userInfo } = useSelector((state) => state.auth);


  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${hero[0]})`,
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
            <div className="mb-5 text-2xl text-white">
             <TypeWriterTitle/>
            </div>
           { !userInfo?
              <Link to="sign" className="bg-yellow-500 p-3 rounded-lg text-white">Get Started</Link> :
              <Link to="explore" className="bg-yellow-500 p-3 rounded-lg text-white">Explore Arts</Link>
            }
          </div>
        </div>
      </div>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">Home Decor</h2>
          <p className="text-center text-gray-600 mb-12">
            Elevate your space with our exclusive collection of home decor art pieces. Perfect for living rooms, bedrooms, and more.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {homeDecor.map((image, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={image.img}
                  alt={`Art ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-black">{image.title}</h3>
                  {/* <p className="text-sm text-gray-500">Size: 12x12 inches</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-white py-12">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">Portrait Art</h2>
          <p className="text-center text-gray-600 mb-12">
            Discover stunning portrait art, crafted to capture emotions and create lasting memories.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {portraitArt.map((ima, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={ima.img}
                  alt={`Portrait ${index + 1}`}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-black">{ima.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">About SketchKingston</h3>
              <p className="text-sm text-gray-400">
                SketchKingston is your go-to destination for personalized art and custom designs. We bring your visions to life with creativity and passion.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-sm text-gray-400">
                Email: contact@sketchkingston.com
              </p>
              <p className="text-sm text-gray-400">Phone: +123 456 7890</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8">
          © 2025 SketchKingston. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
