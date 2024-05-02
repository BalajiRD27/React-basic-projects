import React, { useEffect, useState } from 'react'
import './style.css'

const Scroll = ({url}) => {

    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(false);
    const[percent,setPercent]=useState()

    async function fetchData(getUrl){
        try{
          setLoading(true)
          const response=await fetch(getUrl);
          const data=await response.json();
          if(data && data.products && data.products.length>0){
            setData(data.products)
            setLoading(false)
          }
        }
        catch(e){
            console.log(e)
        }
    }

    function handleScrollPercentage(){
      console.log(
        document.body.scrollTop,
        document.documentElement.scrollTop,
        document.documentElement.scrollHeight,
        document.documentElement.clientHeight
      )
   
 const howMuchScrolled=document.body.scrollTop || document.documentElement.scrollTop ;
 const height= document.documentElement.scrollHeight-document.documentElement.clientHeight;

 setPercent((howMuchScrolled/height)*100)
    }

 useEffect(()=>{
    fetchData(url)
 },[url])

 useEffect(()=>{
    window.addEventListener('scroll',handleScrollPercentage)

    return()=>{
        window.removeEventListener('scroll',()=>{})
    }
 },[])
 
   console.log(data,percent)

  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      <div style={{position:'fixed',top:'0',width:'100%'}}>
      <h1 style={{textAlign:'center',backgroundColor:'lightskyblue',padding:'1.2rem'}} className='scroll'> Scroll Indicator</h1>
      <div className="percent" style={{height:"8px",backgroundColor:'black',width:`${percent}%`}}></div>
      </div>
      <div className='products'>{
         data && data.map(dat=>
            <div key={dat.id} className='product'>{dat.title}</div>
        )
      }
      </div>
    </div>
  )
}

export default Scroll