import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './watch.scss'
import { Link, useLocation } from 'react-router-dom';
const Watch = () => {
  const location = useLocation();
  console.log("location objecty in watch page", location);
  return (
    <div className='watch'>
      <Link to='/'>
        <div className="back">
            <ArrowBackIcon/>
            Home
        </div>
      </Link>
      <video src ={location.movie.video} autoPlay controls progress/>  
    </div>
  )
}

export default Watch