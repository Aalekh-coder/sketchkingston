import TypeWriterTitle from "../../components/TypeWriter"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fontsource/lobster";
import '@fontsource/bebas-neue'; // Default weight and styles

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

    <div className="container lg:m-10">
      <div className="h-[80vh] w-[90vw] m-auto mt-5 mb-5">
        <div className="font-bebas text-3xl h-[12vh]">
          <TypeWriterTitle />
        </div>


        <div className="bg-gradient-to-b from-pink-500 to-blue-500 sm:block sm:h-[90vh] rounded-xl lg:w-[45vw] lg:flex">
          <div className="h-[60vh] p-2 sm:w-[60vw] sm:m-auto md:w-[50vw] lg:m-0 lg:w-[43vw] lg:p-8">
            <Slider {...settings} className="" >
              <img src="./coder.jpg" className="rounded-3xl" />
              <img src="./couple.jpg" className="rounded-3xl" />
              <img src="./gamegirl.jpg" className="rounded-3xl" />
              <img src="./shiley.jpg" className="rounded-3xl" />
            </Slider>
          </div>

          
         
        </div>

        <div className="h-[70vh] mt-5 sm:mt-10">
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
        <div className="h-[70vh] mt-14 sm:m-0">
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
