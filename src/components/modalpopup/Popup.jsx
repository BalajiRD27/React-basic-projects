import React, { useState } from 'react'
import PopupTest from './PopupTest';
import './popup.css'

const Popup = () => {
    const[showPopup,setShowPopup] = useState(false)

    function handleToggle(){
        setShowPopup(!showPopup)
    }
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',padding:'1.5rem',flexDirection:'column',textAlign:'center'}}>
        <button onClick={handleToggle}>Open Modal Popup</button>

        {
            showPopup && <PopupTest 
            handleToggle={handleToggle}
            body={<div>This is Customized Body </div>}/>
        }
    </div>
  )
}

export default Popup