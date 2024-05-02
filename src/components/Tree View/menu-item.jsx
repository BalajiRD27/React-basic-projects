import { useState } from "react"
import MenuList from "./menu-list";
import { FaMinus } from 'react-icons/fa'
import { FaPlus } from "react-icons/fa6";

export default function MenuItem({item}){
    const [displayCurrentChildren,setDisplayCurrentChildren]=useState({})

    function handleToggle(currentLabel){
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [currentLabel] : !displayCurrentChildren[currentLabel]
        })
        console.log(displayCurrentChildren)
    }
    return (
    <li className="menuitem-container" key={item.label}>
     <div style={{display:"flex",gap:'20px',alignItems:'center'}}>
     <p>{item.label}</p>
     {
       item && item.children && item.children.length>0 ? <span onClick={()=>handleToggle(item.label)}>
       {
        displayCurrentChildren[item.label]? <FaMinus size={25} color='white' /> :<FaPlus size={25} color='white' /> 
       }
       </span>: null
     }
     </div>
    {
        item && item.children && item.children.length>0 && displayCurrentChildren[item.label] ?
        <MenuList list={item.children} /> :null
    }
      </li>
    )
}

