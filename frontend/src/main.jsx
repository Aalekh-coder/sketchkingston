import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import store from './store/store'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import Home from './Pages/Home'
import { RouterProvider } from 'react-router'
import Layout from './components/Auth/Layout'
import Art from './Pages/Products/Art'
import HomeDecor from './Pages/Products/HomeDecor'
import MinimalistArt from './Pages/Products/MinimalistArt'
import FlatArt from './Pages/Products/FlatArt'
import VectorArt from './Pages/Products/VectorArt'
import ProductLayout from './components/Product/ProductLayout'
import Dashboard from './components/SellerDashboard/Dashboard'
import CreateProduct from './Pages/sellerDashboard/CreateProduct'
import DashboardLayout from './components/SellerDashboard/DashboardLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='/login' element={<Layout><Login /></Layout>} />
      <Route path='/register' element={<Layout><Register /></Layout>} />
      <Route path='/' index={true} element={<Home />} />

      <Route path='/products' element={<ProductLayout/>}>
        <Route path='art' element={<Art/>} />
        <Route path='home-decore' element={<HomeDecor/>} />
        <Route path='flat-art' element={<FlatArt/>} />
        <Route path='minimalistic' element={<MinimalistArt/>} />
        <Route path='vector' element={<VectorArt/>} />
      </Route>

      <Route path='/dashboard' element={<DashboardLayout/>}>
        <Route path='create-product' element={<Dashboard/>} />
        
      </Route>

    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>

      <RouterProvider router={router}>

      </RouterProvider>
    </Provider>
  </>
)
