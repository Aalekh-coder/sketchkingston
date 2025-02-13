import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Provider } from "react-redux"
import store from "./redux/store.js";
import Home from './Pages/Home.jsx';
import Login from './Pages/auth/Login.jsx';
import Sign from './Pages/auth/Sign.jsx';
import Profile from "./Pages/auth/Profile.jsx"
import Explore from './Pages/Market/Explore.jsx';
import CardPreview from './Pages/Market/CardPreview.jsx';
import SellerDashboard from './Pages/SellerDashboard/SellerDashboard.jsx';
import PortfolioCreate from "./Pages/SellerDashboard/PortfolioCreate.jsx"
import ArtGallery from "./Pages/SellerDashboard/ArtGallery.jsx"
// import EditArts from './Pages/SellerDashboard/EditArts.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* <Route path='/theme' element={<SettingsPage/>} /> */}
      <Route index={true} path="/" element={<Home />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/sign' element={<Sign/>} />
      <Route path='/explore' element={<Explore />} />
        <Route path='/explore/:id' element={<CardPreview/>} />
      
      <Route path='/createPortfolio' element={<SellerDashboard/>} />
      <Route path='/createPortfolio/profile' element={<Profile />} />
      <Route path='/createPortfolio/create' element={<PortfolioCreate />} />
      <Route path='/createPortfolio/artGallery' element={<ArtGallery />} />
      {/* <Route path='/createPortfolio/edit/:id' element={<EditArts />} /> */}

      
      
      <Route path='*' element={<div>404 - Page Not found</div>} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
