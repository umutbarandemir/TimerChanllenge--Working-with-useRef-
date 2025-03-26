import React, { useRef, useState } from 'react'
import ResultModal from './ResultModal';

const TimerChallenge = (props) => {

    const timer = useRef()
    const dialog = useRef();

    const [timeRemain,setTimeRemain] = useState(props.targetTime*1000);

    const timerIsActive = (timeRemain > 0) && (timeRemain < props.targetTime*1000);

    if(timeRemain <= 0){
        clearInterval(timer.current);
        dialog.current.showModal();
    }

    function resetTimer(){
        setTimeRemain(props.targetTime*1000);
    }

    function startTimer(){
        timer.current = setInterval(()=>{
            setTimeRemain(previousTimeRemaining => previousTimeRemaining - 10)
        },10);

        setTimerStarted(true);
    }

    function stopTimer(){
        clearInterval(timer.current);
        dialog.current.showModal();
    }

  return (
    <>
    <ResultModal ref={dialog} targetTime={props.targetTime} remainingTime={timeRemain} resetTimer={resetTimer}></ResultModal>
    <section className="challenge">
        <h2>{props.title}</h2>
        <p className="challenge-time">
            {props.targetTime} second{props.targetTime>1 ? "s" :""}
        </p>
        <p>
            <button onClick={timerIsActive ? stopTimer : startTimer }>{timerIsActive ? "Stop" : "Start"} Challenge</button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
            {timerIsActive ? "Time is running ..." : "Timer inactive"}
        </p>
    </section>  
    </>
  );
}

export default TimerChallenge