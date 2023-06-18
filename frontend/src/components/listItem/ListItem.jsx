import React, { useState } from 'react'
import './listItem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import AddIcon from '@mui/icons-material/Add';

const ListItem = ({index}) => {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://vod-progressive.akamaized.net/exp=1687079544~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4286%2F14%2F371433846%2F1541905617.mp4~hmac=57ad62f191eeb35c3083c268930a4cc01bfbe561af58beba7dcf2543c4f7707d/vimeo-prod-skyfire-std-us/01/4286/14/371433846/1541905617.mp4"
  return (
    <div
     className='listItem'
     style={{left: isHovered && index*225-50+index*2.5}}
     onMouseEnter={()=>setIsHovered(true)} 
     onMouseLeave={()=>setIsHovered(false)}
     >
        <img src="https://www.koimoi.com/wp-content/new-galleries/2022/07/the-kashmir-files-received-this-years-no-1-rating-and-overall-on-2nd-position-for-any-bollywood-movie-so-far-0001.jpg" alt="" />
      
        {isHovered && (
          <>
        <video src={trailer} autoPlay ={true} loop/>
        <div className="itemInfo">
            <div className="icons">
                <PlayArrowIcon className='icon'/>
                <AddIcon className='icon'/>
                <ThumbUpOffAltIcon className='icon'/>
                <ThumbDownOffAltIcon className='icon'/>
            </div>
            <div className="itemInfoTop">
                <span>1 hour 14 minutes</span>
                <span className='limit'>16+</span>
                <span>1999</span>
            </div>
                <div className="desc">
                    Lorem i, blanditiis corrupti similique unde quaerat veniam ipsam voluptas a facere sed eveniet possimus aspernatur omnis praesentium.
                     
                </div>
                <div className="genre">
                    Thriller
                </div>
        </div>
        </>)
        }
       
    </div>
  )
}

export default ListItem