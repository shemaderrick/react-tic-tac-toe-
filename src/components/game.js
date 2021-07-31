import React from 'react'

const Game = ({ handlePlayer, board, winner, counter, nextPlayer, setBoard, setCounter, setNextPlayer }) => {
 return (<>
  <div className="grid-container">
   {board.map((item, index) => {
    return <button key={index} className="square" id={item}
     value={item}
     onClick={(e) => handlePlayer(index)}
    >
     {item}
    </button>
   })}
  </div>
  <div className="status">
   <p>{winner ? 'Winner: ' + winner : counter === 9 ? "Tie" : ""}</p>
   <p>{counter === 9 ? '' : winner ? '' : nextPlayer}</p>
   {winner || counter === 9 ? <button className='reset' onClick={() => { setBoard(Array(9).fill(null)); setCounter(0); setNextPlayer('Next player is X') }}>Reset</button> : ''}
  </div>
 </>)


}

export default Game