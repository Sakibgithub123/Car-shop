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
        path:"/add-product",
        element:<AddProducts></AddProducts>,
        loader:()=>fetch('http://localhost:5000/addproducts')
      },
      {
        path:"/updateCar/:id",
        element:<UpdateCar></UpdateCar>,
        loader:({params})=>fetch(`http://localhost:5000/addproducts/${params.id}`)
      },
      {
        path:"/productDetails/:id",
        element:<ProductDetails></ProductDetails>,
        loader:({params})=>fetch(`http://localhost:5000/addproducts/${params.id}`)
      },
      {
        path:"/cart",
        element:<Cart></Cart>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
