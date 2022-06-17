import React from 'react'
import { useNavigate } from 'react-router-dom'

import './Navbar.scss'

const Navbar = () => {
     const navigate = useNavigate()
     return (
          <div className='navbar'>
               <div onClick={() => navigate("/")} className="navbar-item">All Orders</div>
               <div onClick={() => navigate("/newrestaurant")} className="navbar-item">New Restaurant</div>
               <div onClick={() => navigate("/newbranch")} className="navbar-item">New Branch</div>
               <div onClick={() => navigate("/newitem")} className="navbar-item">New Item</div>
               <br />
          </div>
     )
}

export default Navbar