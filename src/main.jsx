import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProviders from './Providers/AuthProviders.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <HelmetProvider>
        <div className='w-full mx-auto md:w-[1280px]'>
          <RouterProvider router={router}
          ></RouterProvider>
        </div>
      </HelmetProvider>
    </AuthProviders>
  </React.StrictMode>,
)
