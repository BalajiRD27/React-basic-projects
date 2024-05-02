import React, { useState } from 'react';
import './tabstyle.css'

const Tabtest = ({tabsContent,onChange}) => {

    const [currentTabIndex,setCurrentTabIndex]=useState(0);

    function indexChange(index){
        setCurrentTabIndex(index)
        onChange(index)
    }
  return (
    <div className='wrapper'>
        <div className='tablabel'>
        {
            tabsContent.map((tabItem,index)=>{
                return <div className={`tabitem ${index===currentTabIndex ? 'active' : ''}`} onClick={()=>indexChange(index)} style={{color:'black',fontSize:'1.2rem'}} key={tabItem.label}>{tabItem.label}</div>
            })
        }
        </div>
        <div className="tabContent">
          {
            tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
            } 
        </div>
    </div>
  )
}

export default Tabtest