import TypeWriterTitle from "../../components/TypeWriter"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fontsource/lobster";
import '@fontsource/bebas-neue'; // Default weight and styles
import { Link } from "react-router"
import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Home = () => {

  const settings = {
    dots: false,
    Infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScholl: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 600,
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "50px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };


  return (
    //     <>
    //       <div>
    //         <div className="h-[20vh] font-bebas text-3xl m-5 mt-10 md:h-1">
    //           <Link to="/" className="bg-emerald-400 p-3 mb-5 rounded-tl-none rounded-3xl">SketchKingSton</Link>
    //           <div className="mt-5 ml-5 sm:text-4xl">
    //             <TypeWriterTitle />
    //           </div>
    //         </div>



    //         <div className=" bg-gradient-to-b from-pink-500 to-blue-500
    // sm:h-[80vh] rounded-2xl sm:w-[90vw] mx-[2rem] md:p-5 md:h-[83vh] lg:flex ">
    //           <Slider {...settings} className="p-5 sm:p-10 md:p-0 w-[30rem] sm:mx-[2.8rem] md:w-[28rem] md:mt-[5rem] md:mx-[7rem] lg:mx-2" >
    //             <img src="./coder.jpg" className="rounded-3xl" />
    //             <img src="./couple.jpg" className="rounded-3xl" />
    //             <img src="./gamegirl.jpg" className="rounded-3xl" />
    //           </Slider>

    //           <div className="hidden lg:block">
    //             <div className="ml-[3rem] mt-[9rem]">
    //               <img className="rounded-xl" src="https://i.pinimg.com/736x/7e/66/0a/7e660ac1b7f35a556ef221441326d593.jpg" width={350} />
    //             </div>

    //           </div>
    //         </div>

    //         <h2 className="text-center font-bold text-5xl mt-[2rem] ">Home Decor</h2>

    //         <div className="h-[88vh] w-[90vw] border-pink-400 border rounded-lg mx-auto mt-5 flex gap-5 p-10 flex-wrap">
    //           <img src="https://i.pinimg.com/736x/91/21/31/912131801d537d5b937bc1809fdc3a1e.jpg" className="h-[15rem] rounded-2xl" />
    //           <img src="https://i.pinimg.com/736x/1c/58/ac/1c58acdd1f5e7b53e1f96ca99dd3ee19.jpg" className="h-[15rem] rounded-2xl" />
    //           <img src="https://i.pinimg.com/736x/fb/6b/c5/fb6bc563a0be96e7a113d972421685e8.jpg" className="h-[15rem] rounded-2xl" />
    //           <img src="https://i.pinimg.com/736x/7e/66/0a/7e660ac1b7f35a556ef221441326d593.jpg" className="h-[15rem] rounded-2xl" />
    //           <img src="https://i.pinimg.com/736x/56/c1/7c/56c17cdf6c1a22cd37eb25bb243700ac.jpg" className="h-[15rem] rounded-2xl" />
    //           <img src="https://i.pinimg.com/736x/35/66/6e/35666e60a6cc55c5dd7e370e66eae931.jpg" className="h-[15rem] rounded-2xl" />
    //           <img src="https://i.pinimg.com/736x/2c/95/c7/2c95c7f1f7431dc39856d1d41b603017.jpg" className="h-[15rem] rounded-2xl" />
    //         </div>
    //         <h2 className="text-center font-bold text-5xl mt-[2rem] ">Vector art</h2>

    //         <div className="mb-5 h-[88vh] w-[90vw] border-pink-400 border rounded-lg mx-auto mt-5 flex gap-5 p-10 flex-wrap">
    //           <img src="https://i.pinimg.com/736x/be/ff/68/beff68a2991b664801fe184b48e71334.jpg" className="h-[15rem] rounded-2xl" />
    //           <img src="https://i.pinimg.com/736x/b1/15/e4/b115e41bf2eed36bf1c4421a8ed0cfb7.jpg" className="h-[15rem] rounded-2xl" />
    //           <img src="https://i.pinimg.com/736x/c8/f7/6d/c8f76df04d1663893e9f34c83c462092.jpg" className="h-[15rem] rounded-2xl" />
    //           <img src="https://i.pinimg.com/736x/60/d9/97/60d997f2bff6e851384a422e62a46b1d.jpg" className="h-[15rem] rounded-2xl" />
    //           <img src="https://i.pinimg.com/736x/51/25/30/5125308d0b86b9dca64acd982d6ecd7d.jpg" className="h-[15rem] rounded-2xl" />
    //           <img src="https://i.pinimg.com/736x/a4/51/69/a4516986869ec620763d784b47dd76d8.jpg" className="h-[15rem] rounded-2xl" />
    //           <img src="https://i.pinimg.com/736x/63/8b/5e/638b5e24881b9a5da1fef126469782ef.jpg" className="h-[15rem] rounded-2xl" />
    //           <img src="https://i.pinimg.com/736x/67/9c/94/679c94ae2b9f01a544fea9a131ca9a4b.jpg" className="h-[15rem] rounded-2xl" />
    //         </div>
    //       </div>

    //       <footer className="bg-orange-600 text-white py-6">
    //         <div className="container mx-auto px-4">
    //           <div className="flex flex-col md:flex-row justify-between items-center">
    //             {/* Brand and Description */}
    //             <div className="text-center md:text-left mb-4 md:mb-0">
    //               <h2 className="text-xl font-bold">SketchKingston</h2>
    //               <p className="text-sm text-white mt-2">
    //                 Transforming ideas into stunning visuals. Your one-stop solution for professional graphic designing needs.
    //               </p>
    //             </div>

    //             {/* Social Icons */}
    //             <div className="flex gap-4 text-2xl">
    //               <a
    //                 href="https://www.linkedin.com/"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //                 className="text-white hover:text-white transition-colors animate-pulse"
    //               >
    //                 <FaLinkedin />
    //               </a>
    //               <a
    //                 href="https://www.instagram.com/"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //                 className="text-white hover:text-white transition-colors animate-pulse"
    //               >
    //                 <RiInstagramFill />
    //               </a>
    //             </div>
    //           </div>

    //           {/* Footer Bottom */}
    //           <div className="mt-6 text-center text-white text-sm">
    //             © {new Date().getFullYear()} SketchKingston. All rights reserved.
    //           </div>
    //         </div>
    //       </footer>



    //     </>
    <div className="container lg:m-10">
      <div className="h-[80vh] w-[90vw] m-auto mt-5">
        <div className="font-bebas text-3xl h-[12vh]">
          <TypeWriterTitle />
        </div>


        <div className="bg-gradient-to-b from-pink-500 to-blue-500 hidden sm:block sm:h-[90vh] rounded-xl lg:w-[45vw] lg:flex">
          <div className="h-[60vh] p-2 sm:w-[60vw] sm:m-auto md:w-[50vw] lg:m-0 lg:w-[43vw] lg:p-8">
            <Slider {...settings} className="" >
              <img src="./coder.jpg" className="rounded-3xl" />
              <img src="./couple.jpg" className="rounded-3xl" />
              <img src="./gamegirl.jpg" className="rounded-3xl" />
              <img src="./shiley.jpg" className="rounded-3xl" />
            </Slider>
          </div>

          
         
        </div>

        <div className="h-[70vh] border mt-5 sm:mt-10">
          <p className="text-center text-2xl" style={{ fontFamily: "Lobster, cursive" }}>Home Decor</p>

          <div className="flex flex-wrap gap-2">
            <img src="https://i.pinimg.com/736x/91/21/31/912131801d537d5b937bc1809fdc3a1e.jpg" className="h-[8rem] rounded-2xl" />
            <img src="https://i.pinimg.com/736x/1c/58/ac/1c58acdd1f5e7b53e1f96ca99dd3ee19.jpg" className="h-[8rem] rounded-2xl" />
            <img src="https://i.pinimg.com/736x/7e/66/0a/7e660ac1b7f35a556ef221441326d593.jpg" className="h-[10rem] rounded-2xl" />
            <img src="https://i.pinimg.com/736x/fb/6b/c5/fb6bc563a0be96e7a113d972421685e8.jpg" className="h-[8rem] rounded-2xl" />
            <img src="https://i.pinimg.com/736x/35/66/6e/35666e60a6cc55c5dd7e370e66eae931.jpg" className="h-[7rem] rounded-2xl" />
            <img src="https://i.pinimg.com/736x/2c/95/c7/2c95c7f1f7431dc39856d1d41b603017.jpg" className="h-[6.8rem] rounded-2xl" />
            <img src="https://i.pinimg.com/736x/56/c1/7c/56c17cdf6c1a22cd37eb25bb243700ac.jpg" className="h-[8rem] rounded-2xl hidden sm:block" />

          </div>
        </div>

      </div>

    </div>

  )
}

export default Home
