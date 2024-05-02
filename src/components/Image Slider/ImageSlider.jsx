import React, { useEffect, useState } from 'react';
import './isstyle.css'
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs'

const ImageSlider = ({url,limit,page}) => {
    const[images,setImages]=useState([]);
    const [currentSlide,setCurrentSlide]=useState(0);
    const[loading,setLoading]= useState(false)
 
    const fetchImages=async (getUrl)=>{
        
     try{
     setLoading(true)
      const response= await fetch(`${getUrl}page=${page}&limit=${limit}`);
      const data=await response.json()
      if(data){
        console.log(data)
        setImages(data);
        setLoading(false)
      }
    }
     catch(e){
        console.log("Error is:"+ e);
        setLoading(false)
     }
    }
    useEffect(()=>{
     if(url !==' ') fetchImages('https://picsum.photos/v2/list?')
    },[url])

    const handlePrev=()=>{
        setCurrentSlide(currentSlide===0?images.length-1:currentSlide-1)
    }
    const handleNext=()=>[
        setCurrentSlide(currentSlide===images.length-1?0:currentSlide+1)
    ]
 if(loading){
    return <div>Loading! Please Wait</div>
 }
 console.log(images)
  return (

    <div className='div'>
        <BsArrowLeftCircleFill onClick={handlePrev} className='arrow left'></BsArrowLeftCircleFill>
        {
            images && images.length ?
            images.map((image,index)=>(
              <img  className={currentSlide===index?'image':'hideimage'} key={image.id} alt={`image from ${image.download_url}`} src={image.download_url} />
            )) :null
        }
        <BsArrowRightCircleFill onClick={handleNext} className='arrow right'></BsArrowRightCircleFill>
        <span className='circleindicators'>
        {
             images && images.length ?
             images.map((image,index)=>( <button className={currentSlide===index?'currentslider':'hidecurrentslider'} onClick={()=>setCurrentSlide(index)} key={image.id}></button> )) :null
        }
        </span>
        </div>
  )
    }

export default ImageSlider