import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import AddProducts from './components/AddProducts/AddProducts';
import Cart from './components/Cart/Cart';
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import UpdateCar from './components/AddProducts/UpdateCar';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import AuthProvider from './components/Provider/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Aboutus from './components/Aboutus/Aboutus';
import Contactus from './components/Contactus/Contactus';
import BrandProduct from './components/BrandProduct/BrandProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
        children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/addproducts')
      },
      {
        path:"/about",
        element:<Aboutus></Aboutus>,

      },
      {
        path:"/contact",
        element:<Contactus></Contactus>,

      },
      {
        path:"/add-product",
        element:<PrivateRoute><AddProducts></AddProducts></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/addproducts')
      },
      {
        path:"/updateCar/:id",
        element:<UpdateCar></UpdateCar>,
        loader:({params})=>fetch(`http://localhost:5000/addproducts/${params.id}`)
      },
      {
        path:"/productDetails/:id",
        element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/addproducts/${params.id}`)
      },
      {
        path:"/brand/:brand_name",
        element:<BrandProduct></BrandProduct>,
        // loader:({params})=>fetch(`http://localhost:5000/addproducts/${params.brand_name}`)

      },
      {
        path:"/cart",
        element:<PrivateRoute><Cart></Cart></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/addcarts')
      },
      {
        path:"/signup",
        element:<Signup></Signup>
      },
      {
        path:"/login",
        element:<Login></Login>
      },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
