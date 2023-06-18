import React, { useState } from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    
    window.onscroll = ()=>{
        setIsScrolled(window.pageYOffset===0?false:true)
        return ()=>(window.onscroll=null);
    }
    
  return (
    <div className={isScrolled?'navbar scroll':'navbar'}>
        <div className="container">
            <div className="left">
                 <img
                  src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png" 
                  alt="" 
                 />
                 <span>Homepage</span>
                 <span>Series</span>
                 <span>Movies</span>
                 <span>New and Popular</span>
                 <span>My List</span>
            </div>
            <div className="right">
                <SearchIcon className='icon'/>
                <span>Kid</span>
                <NotificationsIcon className='icon'/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSevp65kzj8u4QXw_AWnteewL4b-BIHJZGlmA&usqp=CAU" alt="" />
                <div className="profile">
                <ArrowDropDownIcon className='icon'/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar