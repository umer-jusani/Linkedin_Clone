import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import { BioProvider } from './ContextAPI/index.jsx'
// import { BioProvider } from './ContextAPI/index.js'


const router = createBrowserRouter([
  // {
  //   path: '/products',
  //   element: <App />,
  //   children: [
  //     {
  //       path: '/products/:category',
  //       element: <Products />,
  //       children: [
  //         {
  //           children: 
  //         }
  //       ]
  //     }
  //   ]
  // },
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BioProvider>
      <RouterProvider router={router} />
    </BioProvider>
  </StrictMode>,
)
