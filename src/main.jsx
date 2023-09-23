import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayouts from './layouts/MainLayouts/MainLayouts'
import Home from './components/Home/Home'
import Blog from './components/Blog/Blog'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'

const router = createBrowserRouter([
  {
    path:"/",
    element:<MainLayouts></MainLayouts>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path:"/applied-jobs",
        element:<AppliedJobs></AppliedJobs>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
