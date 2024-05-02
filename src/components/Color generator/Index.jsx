import { useState } from "react"


export default function RandomColor(){
    const[type,setType]=useState("HEX");
    const[color,setColor]=useState('#000000');

    const indexSelector=(length)=>{
        return Math.floor(Math.random()*length)
    }

    const handleCreateRandomHexColor=()=>{
      const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
      let val="#"
      console.log("called")

      for(let i=0;i<6;i++){
         val += hex[indexSelector(hex.length)] ;
      }
      setColor(val)
    }
   
 
    const handleCreateRandomRgbColor=()=>{
        const r=indexSelector(256)
        const g=indexSelector(256)
        const b=indexSelector(256)

        setColor(`rgb(${r},${g},${b})`)

    }
    return <div className="container" style={{
        margin:0,
        padding:0,
        boxSizing:"border-box",
        minWidth:"100vw",
        minHeight:"100vh",
        background:color
    }}> 
    <button onClick={()=>setType('HEX')}>Create HEX Color</button>
    <button onClick={()=>setType('RGB')}>Create RGB Color</button>
    <button onClick={type==="HEX" ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Create Random Color</button>
    <div style={{margin:"40% auto",color:"white",fontFamily:"sans-serif",fontSize:"25px",fontWeight:"800"}}>
        <h3>{type} Color</h3>
        <p>{color}</p>
    </div>
     </div>

}