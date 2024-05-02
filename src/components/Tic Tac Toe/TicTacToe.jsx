import React, { useEffect, useState } from 'react';
import './style.css'

function Square({value,onClick}){
  return <button onClick={onClick} className='square'>{value}</button>
}

const tictactoe = () => {
  const[squares,setSquares]=useState(Array(9).fill(''));
  const [xTurn,setXTurn]=useState(true)
  const [status,setStatus]=useState('')
  const [addClass, setAddClass] = useState(false);

  function handleClick(currentSquare){
    const copySquare=[...squares]
    if(checkWinner(copySquare) || copySquare[currentSquare]){
      return ;
    }
    else{
     copySquare[currentSquare]= xTurn  ? 'X' : copySquare[currentSquare]='O'
    }
    setXTurn(!xTurn);
    setSquares(copySquare);
    checkWinner(squares);
  }
 useEffect(()=>{
  if(!checkWinner(squares) && squares.every((item)=>item !=='')){
    setStatus('This is Draw ! Press Restart to play again')
  }
  else if(checkWinner(squares)){
      setStatus(`The Winner is ${checkWinner(squares)}`)
      setAddClass(!addClass)
  }
  else{
    setStatus(`Now ${xTurn ? 'X' : 'O'}'s turn`)
  }
 },[squares,xTurn])
 
  function checkWinner(squares){
    const winningCombinations=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    for(let i=0;i<winningCombinations.length;i++){
      const [a,b,c]=winningCombinations[i];
      if(squares[a] && squares[a]=== squares[b] && squares[a]=== squares[c])
      {
         return squares[a];  
      }
        }  return null ;
  }
 function handleRestart(){
  setXTurn(true)
  setSquares(Array(9).fill(''))
  setAddClass(!addClass)
 }
  console.log(squares)
  
  return (
    <div className='container'>
      <div className="row">
        <Square value={squares[0]} onClick={()=>handleClick(0)} />
        <Square value={squares[1]} onClick={()=>handleClick(1)}/>
        <Square  value={squares[2]} onClick={()=>handleClick(2)}/>
      </div>
      <div className="row">
        <Square  value={squares[3]} onClick={()=>handleClick(3)}/>
        <Square  value={squares[4]} onClick={()=>handleClick(4)}/>
        <Square  value={squares[5]} onClick={()=>handleClick(5)}/>
      </div>
      <div className="row">
        <Square  value={squares[6]} onClick={()=>handleClick(6)}/>
        <Square  value={squares[7]} onClick={()=>handleClick(7)}/>
        <Square  value={squares[8]} onClick={()=>handleClick(8)}/>
      </div>
      <div className='status'>
        <button onClick={handleRestart} className='restart'>RESTART</button> 
        <h1 className={addClass ? 'statustxt' : 'turntxt'}>{status}</h1>
     </div>
    </div>
  )
}

export default tictactoe