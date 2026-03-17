import { useEffect, useRef, useState } from "react"

function Timer() {
    
    const [isRunning, setIsRunning] = useState(false)
    const [remainingTime, setRemainingTime] = useState(0)
    const endTimeRef = useRef<number | null>(null);
    const intervalIdRef = useRef<number | null>(null)

    useEffect(() => {
            intervalIdRef.current = setTimeout(() => {
                if (endTimeRef.current) {
                    setRemainingTime(endTimeRef.current - Date.now())
                }
            }, 1000);

            return () => {
                if (intervalIdRef.current) {
                    clearInterval(intervalIdRef.current)
                }
            }

    }, [isRunning])

    const handleStart = () => {
        const duration = remainingTime * 1000 * 60
        endTimeRef.current = Date.now() + duration
        setIsRunning(true)
    }
    const handleStop = () => {
        setIsRunning(false)
    }
    const handleReset = () => {
        setIsRunning(false)
        setRemainingTime(0)
        endTimeRef.current = null
    }


    return(
        <div className="timer">
            <div className="timer-layout">   
                <div className="input-time">
                    <input type="number" onChange={(e) => setRemainingTime(Number(e.target.value))}/>
                    <button className="startBtn" onClick={handleStart}>Start</button>
                    <button className="stopBtn" onClick={handleStop}>Stop</button>
                    <button className="resetBtn" onClick={handleReset}>Reset</button>
                </div>
                <div className="timer-display">00:00</div>
            </div>
            <div className="msg">Your time is up!</div>
        </div>
    )
}

export default Timer