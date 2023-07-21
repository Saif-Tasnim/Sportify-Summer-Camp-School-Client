import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProviders from './Providers/AuthProviders.jsx';
import { Toaster } from 'react-hot-toast';

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProviders>
      <QueryClientProvider client={queryClient}>

        <HelmetProvider>

          <div className='w-full md:max-w-screen-xl lg:max-w-screen-2xl md:mx-auto lg:mx-auto'>
            <Toaster position="top-center" />
            <RouterProvider router={router}>

            </RouterProvider>

          </div>
        </HelmetProvider>

      </QueryClientProvider>
    </AuthProviders>



  </React.StrictMode>,
)
