import React, { useRef } from 'react'

const ResultModal = (props) => {

    const formattedRemainingTime = (props.remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - props.remainingTime / (props.targetTime * 1000))*100);

    let result ;

    if(props.remainingTime <= 0){
        result = "Lost";
    }else{
        result = "Won";
    }

  return (
    <dialog className="result-modal" ref={props.ref} onClose={props.resetTimer}>
        <h2>You {result}</h2>
        {(result==="Won") ? <h2>{score}</h2>:""}
        <p>The target time was <strong>{props.targetTime} seconds!!</strong></p>
        {result==="Won" ? <p>You stopped the timer with <strong>{formattedRemainingTime}</strong></p> : <p>You didn't stop the Timer!!!</p>}
        <form method="dialog" onSubmit={props.resetTimer}>
            <button>Close</button>
        </form>
    </dialog>
  )
}

export default ResultModal