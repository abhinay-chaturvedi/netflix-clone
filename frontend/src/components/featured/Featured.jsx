import React, { useEffect, useState } from 'react'
import './featured.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import axios from 'axios';

const Featured = ({ type }) => {
    const [content, setContent] = useState({});
    const accessToken = "kfjsklhf";
    useEffect(() => {
        const getRandomContent = async () => {
            try{
                const res = await axios.get(`movies/random/?type=${type}`,{
                    headers:{
                        token:`Bearer ${accessToken}`
                    }
                });
                console.log("response got in featured component : ", res);
                setContent(res.data[0]);
            }catch(err){
                console.log("errorn in featured component : ",err);
            }
        }
        getRandomContent();
    }, [type]);

  return (
    <div className='featured'>
        {
            type && (
                <div className="category">
                    <span>{ type==="movie"? "Movies": "Series" }</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="romance">Romance</option>
                        <option value="crime">Crime</option>
                        <option value="crime">Crime</option>
                        <option value="crime">Crime</option>
                        <option value="crime">Crime</option>
                        <option value="crime">Crime</option>
                        <option value="crime">Crime</option>
                        <option value="crime">Crime</option>
                        <option value="crime">Crime</option>
                        <option value="crime">Crime</option>
                        <option value="crime">Crime</option>
                        <option value="crime">Crime</option>
                        <option value="crime">Crime</option>
                        <option value="crime">Crime</option>
                        <option value="crime">Crime</option>
                    </select>
                </div>
            )
        }
        <img
         src={content.img} alt="" />
         <div className="info">
            <img src = {content.imgTitle} alt="" />
            <span className="desc">{ content.desc }</span>
            <div className="buttons">
                <button className="play">
                    <PlayArrowIcon/>
                    <span>Play</span> 
                </button>
                <button className="more">
                    <InfoIcon/>
                    <span>Info</span> 
                </button>
            </div>
         </div>
    </div>
  )
}

export default Featured