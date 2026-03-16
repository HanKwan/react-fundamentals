import { useState } from "react"

function Timer() {
    
    const [isRunning, setIsRunning] = useState(false)
    const [endTime, setEndTime] = useState(0)
    
    const handleStart = () => {
        
    } 


    return(
        <div className="timer">
            <div className="timer-layout">   
                <div className="input-time">
                    <input type="number" />
                    <button className="startBtn">Start</button>
                    <button className="stopBtn">Stop</button>
                    <button className="resetBtn">Reset</button>
                </div>
                <div className="timer-display">00:00</div>
            </div>
            <div className="msg">Your time is up!</div>
        </div>
    )
}

export default Timer