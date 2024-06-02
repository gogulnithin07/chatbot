import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';

import Layout from './Layout';
import {Home} from "../src/pages/Home/Home";
import {History} from "../src/pages/History/History";

const router=createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<Layout/>}>
      <Route path="" element={<Home />} />
   <Route path='history' element={<History/>}/>
   <Route path="*" element={<h1>not found</h1>} />
   </Route> 
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

