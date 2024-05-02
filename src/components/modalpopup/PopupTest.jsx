import React from 'react'

const PopupTest = ({id,header,body,footer,handleToggle}) => {
  return (
    <div  className='modal' id={id || 'Modal'}>
     <div style={{display:'flex',flexDirection:'column',gap:"20px"}} className='modal-content'>
        <div className='modal-header'>
            <span onClick={handleToggle} style={{position:"relative",float:'right',top:0,fontSize:'40px',fontWeight:'bold',color:'red'}} className='span-header'>&times;</span>
            <h2>{ header ? header : 'Header' }</h2>
        </div>
        <div className='modal-body'>
            { body ? body : ( <div> <p>Body Of the content</p> </div> ) }
        </div>
        <div className='modal-footer'>
            {
                footer ? footer : (<div>This is the footer of the content </div>)
            }
        </div>
     </div>
    </div>
  )
}

export default PopupTest