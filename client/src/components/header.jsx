import React from 'react'
import { Link } from 'react-router-dom'

export default function header() {
  return (
    <div className="bg-slate-200">
    <div className='flex justify-between items-center max-w-6xl p-3 mx-auto'>


    <Link to="/">
    <h1 className='font-bold'>Auth App</h1>
    </Link>
    <ul className='flex gap-4'>
    <Link to="/">
        <li>Home</li>
    </Link>
    <Link to="/about">
        <li>About</li>
    </Link>
    <Link to="/signIn">
        <li>Sign In</li>
    </Link>
    
    </ul>
      
    </div>
    </div>
  )
}
