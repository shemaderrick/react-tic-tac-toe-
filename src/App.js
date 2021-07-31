import React, { useState } from 'react'
import './App.css'
import Game from './components/game'
import calculateWinner from './helpers/winner'
export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xisNext, setXisNext] = useState(true)
  const [counter, setCounter] = useState(0)
  const [nextPlayer, setNextPlayer] = useState('Next player is X')
  const winner = calculateWinner(board)
  const handlePlayer = (index) => {
    setNextPlayer(!xisNext ? 'Next player: X' : "Next player: 0")
    let counterCopy = counter + 1
    setCounter(counterCopy)
    const boardCopy = [...board]
    if (winner || boardCopy[index]) {
      setNextPlayer(nextPlayer)
      setCounter(counter)
      return
    }
    boardCopy[index] = xisNext ? 'X' : '0'
    setBoard(boardCopy)
    setXisNext(!xisNext)
  }
  return (
    <>
      <Game handlePlayer={handlePlayer} board={board} winner={winner} counter={counter} nextPlayer={nextPlayer} setBoard={setBoard} setCounter={setCounter} setNextPlayer={setNextPlayer} />
    </>)
}

