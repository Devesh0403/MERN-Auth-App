import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from "./pages/home.jsx"
import About from "./pages/about.jsx"
import Profile from "./pages/profile"
import SignIn from "./pages/signIn"
import SignUp from "./pages/signUp"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>

    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/profile' element={<Profile/>}></Route>
    <Route path='/sign-In' element={<SignIn/>}></Route>
    <Route path='/sign-Up' element={<SignUp/>}></Route>

    </Routes>
    </BrowserRouter>
    
  )
}
