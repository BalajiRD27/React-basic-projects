import React, { useState } from 'react';
import {FaStar} from 'react-icons/fa';
import './style.css'


const Star = ({noOfStars=5}) => {
    const[rating,setRating]=useState(0)
    const[hover,setHover]=useState(0)
    
    const handleClick=(currentIndex)=>{
      setRating(currentIndex)
    }
    const handleMouseMove=(currentIndex)=>{
        setHover(currentIndex)
    }
    const handleMouseLeave=()=>{
        setHover(rating)

    }
  return (
    <div className='star-rating'>
     {
       [...Array(noOfStars)].map((_,index)=>{
        index+=1;
        return <FaStar 
        className={index <= (hover||rating) ? 'active':'inactive'}
        key={index} 
        onClick={()=>handleClick(index)} 
        size={80}
        onMouseMove={()=>handleMouseMove(index)}
        onMouseLeave={()=>handleMouseLeave()}
        />
       })
     }
    </div>
  )
}

export default Star