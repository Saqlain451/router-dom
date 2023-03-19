import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Product from "./Pages/Product";


const router = createBrowserRouter([
  {
    path : "/",
    element : <Navbar/>,
    children :[
      {
        path : "/contact",
        element : <Contact/>
      },
      {
        path : "/about",
        element : <About/>
      },
      {
        path : "/product",
        element : <Product/>
      },
      {
        path : "/home",
        element : <Home/>
      },
    ]
  },

])
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
