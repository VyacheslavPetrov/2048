import React, {useEffect, memo} from "react"
import { connect } from 'react-redux'
import colorMap from '../../ui/cellColor'
import {
  startGame,
  setNewNumber,
  gameArraySelector,
  maxScoreSelector,
  currentScoreSelector,
  isWinSelector,
  getRight,
  getLeft,
  getUp,
  getDown,
  winGame
} from "../../models/2048";


function Twenty48({gameArray, maxScore, currentScore, startGame, setNewNumber, getRight, getLeft, getUp, getDown, winGame, isWin}) {
  useEffect(()=>{
    if(currentScore > 2047 && !isWin){
      winGame()
      alert("YOU WON!")
    }
  }, [currentScore])
  useEffect(()=>{
    if(!window.localStorage.getItem("gameArray")){
      startGame()
    }

  },[setNewNumber, startGame])
  return(
    <div id="2048">
      <p>*2048*</p>
      <div>
        <button id="start2048" onClick={()=>startGame()}>Start Game</button>
        <p>Max Score: {maxScore}</p>
        <p>Score: {currentScore}</p>
      </div>
      <div>
        <button onClick={()=>getUp()}>UP</button>
        <button onClick={()=>getDown()}>DOWN</button>
        <button onClick={()=>getLeft()}>LEFT</button>
        <button onClick={()=>getRight()}>RIGHT</button>
      </div>
      {gameArray.map((row, rowKey)=>{
        return (
          <div className="row" key={rowKey}>
            {row.map((cell, cellKey)=>{
              return(
                <div className="cell" key={cellKey} style={{backgroundColor: colorMap[cell]}}>{cell}</div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
function areEqual(prevProps, nextProps) {
  /*
  возвращает true, если nextProps рендерит
  тот же результат что и prevProps,
  иначе возвращает false
  */
  if(JSON.stringify(prevProps.gameArray) === JSON.stringify(nextProps.gameArray)){
    return true
  }else{
    return false
  }
}
export default connect(state => ({
  gameArray: gameArraySelector(state),
  maxScore: maxScoreSelector(state),
  currentScore: currentScoreSelector(state),
  isWin: isWinSelector(state)
}), {
  startGame, setNewNumber, getRight, getLeft, getUp, getDown, winGame
})(memo(Twenty48, areEqual))