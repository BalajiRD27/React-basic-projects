import React, { useState } from 'react';
import './qrstyle.css';
import QRCode from 'react-qr-code';

const QR = () => {
const[qrCode,setQrCode]= useState("");
const[input,setInput]=useState("")

function handleQrGenerator(){
    setQrCode(input)
}
  return (
    <div className='qr-container'>
        <h1>QR Code Generator</h1>
        <div>
            <input className='input-qr'
            onChange={(e)=>setInput(e.target.value)}
            type="text" name='qr-code' placeholder='enter your value here' />
            <button disabled={input && input.trim()!=='' ?false :true}
            onClick={handleQrGenerator}>
                Generate
            </button>
        </div>
        <div>
            <QRCode
            value=''
            id='qr-code-value' 
            size={200}
            style={{backgroundColor:'white'}}
            />
        </div>
    </div>
  )
}

export default QR