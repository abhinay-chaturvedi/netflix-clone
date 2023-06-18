import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './watch.scss'
const Watch = () => {
    const videoLink = "https://vod-progressive.akamaized.net/exp=1687079544~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4286%2F14%2F371433846%2F1541905617.mp4~hmac=57ad62f191eeb35c3083c268930a4cc01bfbe561af58beba7dcf2543c4f7707d/vimeo-prod-skyfire-std-us/01/4286/14/371433846/1541905617.mp4"
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackIcon/>
            Home
        </div>
            <video src ={videoLink} autoPlay controls progress/>
        
    </div>
  )
}

export default Watch