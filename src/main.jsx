import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProviders from './Provider/AuthProviders';
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=''>
    <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <AuthProviders>
        <section >
          <RouterProvider router={router} />
        </section>
        </AuthProviders>
      </QueryClientProvider>
  </React.StrictMode>,
  </div>
)
