import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import store from "./redux/store.js"

//components
import Login from "./pages/auth/Login.jsx"
import Register from "./pages/auth/Register.jsx"
import Home from "./pages/Home.jsx"


// Define router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<Login />} /> 
       <Route path="/register" element={<Register />} />
      <Route index={true} path="/" element={<Home />} />
      {/* Fallback route */}
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Route>
  )
);

// Render application
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);