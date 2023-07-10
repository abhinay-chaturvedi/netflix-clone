import React, { useRef, useState } from 'react'
import ListItem from '../listItem/ListItem'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './list.scss'

const List = ({ list }) => {
    const listRef = useRef();
    const [slideNumber, setSlideNumber]= useState(0);
    const handleClickArrow = (type)=>{

        const distance = listRef.current.getBoundingClientRect().x-50;
        console.log(distance)
        if(type==="left" && slideNumber>0){
            setSlideNumber(slideNumber-1);
            listRef.current.style.transform = `translateX(${230+distance}px)`
        }
        if(type==="right" && slideNumber<5){
            setSlideNumber(slideNumber+1);
            listRef.current.style.transform = `translateX(${-230+distance}px)`
        }
    }
  return (
    <div className='list'>
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIosIcon className='sliderArrow left' onClick= {()=>handleClickArrow("left")}/>
            <div className="listContainer" ref={listRef}>
            <ListItem index={0}/>
           {
            list.content.map((item, i) => {
                return <ListItem index={i} item = {item}/>
            })
           }
            </div>
           <ArrowForwardIosIcon className='sliderArrow right' onClick= {()=>handleClickArrow("right")}/>
        </div>
    </div>
  )
}

export default List