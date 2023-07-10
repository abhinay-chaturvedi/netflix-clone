import React, { useEffect, useState } from 'react'
import './listItem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import { Link } from 'react-router-dom';
const accessToken = "lsjfskfskhfg"
const ListItem = ({ index, item }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    const [movie, setMovie] = useState({});
    
    useEffect(() => {
      const getMovie = async () => {
        try{
          const res =await axios.get(`movies/find/${item}`,
          {
            headers:{
              token:`Bearer ${accessToken}`
            }
          }
          );
          console.log("ListItem.jsx file : ", res);
          setMovie(res.data);
        }catch(err){
          console.log("err in ListItem.jsx : ",err);
        }
      }
      getMovie();
    },[item]);

  return (
    <Link to={{pathname: "/watch", movie:movie}}>
    <div
     className='listItem'
     style={{left: isHovered && index*225-50+index*2.5}}
     onMouseEnter={()=>setIsHovered(true)} 
     onMouseLeave={()=>setIsHovered(false)}
     >
        <img src={movie.img} alt="" />
      
        {isHovered && (
          <>
        <video src={movie.trailer} autoPlay ={true} loop/>
        <div className="itemInfo">
            <div className="icons">
                <PlayArrowIcon className='icon'/>
                <AddIcon className='icon'/>
                <ThumbUpOffAltIcon className='icon'/>
                <ThumbDownOffAltIcon className='icon'/>
            </div>
            <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className='limit'>{movie.limit}</span>
                <span>{movie.year}</span>
            </div>
                <div className="desc">
                    {movie.desc}
                </div>
                <div className="genre">
                    {movie.genre}
                </div>
        </div>
        </>)
        }
       
    </div>
    </Link>
  )
}

export default ListItem