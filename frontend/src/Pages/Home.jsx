// import Corusel from '@/components/miniComponents/Cousel'
// import DesignGrid from '@/components/miniComponents/DesignGrid'
// import Footer from '@/components/miniComponents/Footer'
// import Hero from '@/components/miniComponents/Hero'
// import React from 'react'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router'



// const Home = () => {
//   const { userInfo } = useSelector(state => state.auth);
//   const navigate = useNavigate()
//   if (userInfo === null) {
//     navigate("/login")
//   } else {
//     return (
//       <div>
//         <Hero />
//         <DesignGrid />
//         <Footer />
//       </div>
//     )
//   }
// }

// export default Home




import Corusel from '@/components/miniComponents/Cousel';
import DesignGrid from '@/components/miniComponents/DesignGrid';
import Footer from '@/components/miniComponents/Footer';
import Hero from '@/components/miniComponents/Hero';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Home = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo === null) {
      navigate('/login');
    }
  }, [userInfo, navigate]);

  if (userInfo === null) {
    return null; // Prevent rendering the component while redirecting
  }

  return (
    <div>
      <Hero />
      <DesignGrid />
      <Footer />
    </div>
  );
};

export default Home;