import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MySplit from './MySplit'
import Home from '../utils/Home'
const Navbar = () => {

  const navigate = useNavigate()

  return (
    <div className='navbar'>
       <Link className="logo-link"to="/">🏋️ Gym Buddy</Link>
       <div className="split" >
        <button onClick={(e) => navigate('split')}>Split</button>
       </div>
    </div>
  )
}

export default Navbar