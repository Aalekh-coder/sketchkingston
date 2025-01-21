import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Login from './page/auth/Login.jsx';
import Sign from './page/auth/Sign.jsx';
import Home from "./page/NavItems/Home.jsx"
import Store from "./page/NavItems/Store.jsx";
import Favourite from "./page/NavItems/Favourite.jsx"
import { Provider } from 'react-redux';
import store from "./redux/store.js"
import Dashboard from './page/NavItems/Dashboard.jsx';
import ProfileEdit from './page/dashboard/Profile.jsx';
import AddProduct from './page/dashboard/AddProduct.jsx';
// import ArtGallery from './page/dashboard/ArtGallery.jsx';
import EditeProduct from './page/dashboard/EditProduct.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/sign' element={<Sign/>} />
      <Route path='/store' element={<Store/>} />
      <Route path='/favorite' element={<Favourite/>} />
      <Route path='/dashboard' element={<Dashboard />} >
        <Route path="profileEdit" element={<ProfileEdit/>} />
        <Route path="add" element={<AddProduct/>} />
        <Route path="yourgallery" >
        <Route path=":id" element={<EditeProduct/>} />
        
        </Route>
      </Route>
      <Route path="*" element={<div>404 - Page Not Found</div>} />
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

      <RouterProvider router={router} />
    </Provider>

  </StrictMode>,
)
