import React, { useEffect, useState } from 'react';
import './style.css' ;

const Load = () => {
    const[products,setProducts]=useState([]);
    const[loading,setLoading]=useState(false);
    const[count,setCount]=useState(0);
    const[disable,setDisable]=useState(false)

    const fetchImages =async()=>{
        try{
        setLoading(true)
        const response=await fetch(`https://dummyjson.com/products?limit=10&skip=${count ===0 ? 0 : count*20}`)
        const result =await response.json();
        if(result && result.products && result.products.length){
           setProducts((prevdata)=>[...prevdata,...result.products])
           console.log(result)
           setLoading(false)
     }
        }
        catch(e){
            console.log(e)
        }
    }
    const handleClick=()=>{
        setCount(count+1)
        console.log(count)
    }

    useEffect(()=>{
        fetchImages();
    },[count])

    useEffect(()=>{
        if(products && products.length===100){
          setDisable(true)
        }
    },[products])

  return (
    <div className='load-container'>
        <div className="product-container">
            { products && products.length ? products.map(item=> (
                     <div key={item.id} className="item">
                       <img src={item.thumbnail} alt={item.title} />
                       <h3>{item.title}</h3>
                     </div>
                      )
                ) : null
        }
        </div>
        <div>
         <button disabled={disable} onClick={()=>handleClick()} className='loadbtn'>Load More Products</button>
         {
          disable ? <p>You have reached 100 Products</p> :null
         }
        </div>
    </div>
  )
}

export default Load