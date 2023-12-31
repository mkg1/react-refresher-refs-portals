import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, targetTime}) {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);   
    const timer = useRef();
    const lostModal = useRef();


    function handleStart() {
        setTimerStarted(true);
        timer.current = setTimeout(() => {setTimerExpired(true);         
            lostModal.current.open();
        }, targetTime * 1000)
    }

    function handleStop() {
        clearTimeout(timer.current);
    }

    return (
    <>
    <ResultModal ref={lostModal} targetTime={targetTime} result="lost"/>
    <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button onClick={timerStarted ? handleStop : handleStart}>
                {timerStarted ? 'Stop' : 'Start'} Challenge
            </button>
        </p>
        <p className={timerStarted ? 'active' : undefined}>
            {timerStarted ? 'Time is running' : 'Timer inactive'}
        </p>
    </section>
    </>
    )
}