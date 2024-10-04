import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Register from './componants/register/Register'
import Login from './componants/login/Login'
import HeroSection from './componants/herosection/heroSection'
import Profile from './componants/profile/Profile'
import Layout from './componants/layout/Layout'
import Navbar from './componants/navBar/Navbar'
import Loading from './componants/loading/Loading'
import AddPropertyForm from './componants/addproperty/addproperty'
import { ToastContainer } from 'react-toastify';


function App() {
  const [count, setCount] = useState(0)

  const route = createBrowserRouter([
    {path: "",element: <Layout/>,children:[
      {path: "login",element: <Login/>},
      {path: "signup",element: <Register/>},
      {path: "profile",element: <Profile/>},
    ]}
  ])

  return <>
    <AddPropertyForm></AddPropertyForm>
  {/* <RouterProvider router={route}></RouterProvider> */}
  {/* <Navbar/> */}
  {/* <Profile/> */}
  {/* <Loading/> */}
  {/* <Register/> */}
                        
    </>
}

export default App;