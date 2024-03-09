import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.css"
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from './Pages/Homepage.jsx'
import About from './Pages/About.jsx'
import NotFound from './Pages/404.jsx'
import Contact from './Pages/Contact.jsx'
import Profile from './Pages/Profile.jsx'
import SingleProfile from './Pages/SingleProfile.jsx'
import NavBar from './Pages/NavBar.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage />,
    errorElement: <NotFound />,
    children : [
      {
        path : '/navbar',
        element : <NavBar />
      }
    ],
  },
  {
    path:"/about",
    element:<About />
  },
  {
    path:"/contact",
    element:<Contact />
  },
  {
    path:"/profile",
    element:<Profile />,
    children : [
      {
        path:"/profile/:profileID",
        element:<SingleProfile />
      },
    ]
  },
  

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
