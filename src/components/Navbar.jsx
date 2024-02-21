import React, { useState } from 'react'
import './Navbar.css';
import menu_icon from './../assets/menu.png';
import logo from './../assets/logo.png';
import search_icon from './../assets/search.png';
import upload from './../assets/upload.png';
import more from './../assets/more.png';
import notification from './../assets/notification.png';
import profile from './../assets/jack.png';
import { Link, useNavigate } from 'react-router-dom';






const Navbar = ({setSidebar}) => {

   const [search,setSearch] = useState();
   const navigate = useNavigate();
   const handleSearch = () =>{
      navigate(`/search?q=${search}`)
   }



  return (
    <nav className='flex-div'>
       <div className='nav-left flex-div'>
          <img src={menu_icon} alt="" onClick = {() => setSidebar(prev=>prev===false?true:false)} className='menu-icon' />
          <Link to='/'><img src={logo} alt="" className='logo' /></Link>
       </div>
       <div className='nav-middle flex-div'>
          <div className='search-box flex-div'>
              <input type="text" placeholder='Search' value={search} onChange={obj => setSearch(obj.target.value)} />
              <img src={search_icon} alt="" onClick={handleSearch} />
          </div>
       </div>
       <div className='nav-right flex-div'>
           <img src={upload} alt="" />
           <img src={more} alt="" />
           <img src={notification} alt="" />
           <img src={profile} alt="" className='user-icon' />
       </div>
    </nav>
  )
}

export default Navbar
