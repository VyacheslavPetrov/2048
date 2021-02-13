import React, {useEffect, memo, useState} from "react"
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import { connect } from 'react-redux'
import colorMap from '../../ui/cellColor'
import { v4 as uuidv4 } from 'uuid';
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
import Button from "../../ui/Button"


function Cell({cell}) {
  return <div className="cell" style={{backgroundColor: colorMap[cell]}}>{cell}</div>
}

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
  const [touchStartPosition, setStartPosition] = useState(null)
  const handleTouchEnd = (event) => {
    const startX = touchStartPosition.screenX
    const startY = touchStartPosition.screenY
    const endX = event.changedTouches[0].screenX
    const endY = event.changedTouches[0].screenY
    if(Math.abs(startX - endX) > Math.abs(startY - endY)){
      if (startX > endX){
        getLeft()
      } else {
        getRight()
      }
    } else {
      if (startY > endY) {
        getUp()
      } else {
        getDown()
      }
    }
  }
  return(
    <div onTouchStart={(event)=>setStartPosition(event.changedTouches[0])}
         id="2048"
         onTouchEnd={(event)=>handleTouchEnd(event)}>
      <p>*2048*</p>
      <div>
        <button id="start2048" onClick={()=>startGame()}>Start Game</button>
        <p>Max Score: {maxScore}</p>
        <p>Score: {currentScore}</p>
      </div>
      <div>
        <Button onClick={()=>getUp()} hotKey='up'>UP</Button>
        <Button onClick={()=>getDown()} hotKey='down'>DOWN</Button>
        <Button onClick={()=>getLeft()} hotKey='left'>LEFT</Button>
        <Button onClick={()=>getRight()} hotKey='right'>RIGHT</Button>
      </div>
        {gameArray.map((row, rowKey)=>{
          return (
                 <TransitionGroup className="row game-array" key={rowKey}>
                  {row.map((cell, key)=>{
                    return(
                      <CSSTransition classNames={cell === 0 ? "" : ""} key={uuidv4()} timeout={100}>
                        <Cell cell={cell}/>
                      </CSSTransition>
                    )
                  })}
                 </TransitionGroup>
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