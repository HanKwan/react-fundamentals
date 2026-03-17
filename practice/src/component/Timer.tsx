import { useEffect, useRef, useState } from "react"

function Timer() {
    
    const [isRunning, setIsRunning] = useState(false)
    const [remainingTime, setRemainingTime] = useState(0)
    const [inputMinutes, setInputMinutes] = useState(0)
    const endTimeRef = useRef<number | null>(null);
    const intervalIdRef = useRef<number | null>(null)

    useEffect(() => {
            intervalIdRef.current = setInterval(() => {
                if (endTimeRef.current) {
                    setRemainingTime(endTimeRef.current - Date.now())
                    
                    if (remainingTime <= 0) {
                        setIsRunning(false)
                        setRemainingTime(0)
                        endTimeRef.current = null

                        if (intervalIdRef.current) {
                            clearInterval(intervalIdRef.current)
                        }
                    }
                }
            }, 1000);

            return () => {
                if (intervalIdRef.current) {
                    clearInterval(intervalIdRef.current)
                }
            }

    }, [isRunning])

    const handleStart = () => {
        const duration = inputMinutes * 1000 * 60
        endTimeRef.current = Date.now() + duration
        console.log(duration)
        setRemainingTime(duration)
        setIsRunning(true)
    }
    const handleStop = () => {
        setIsRunning(false)
        if (intervalIdRef.current) {
            clearInterval(intervalIdRef.current)
        }
    }
    const handleReset = () => {
        setIsRunning(false)
        setRemainingTime(0)
        endTimeRef.current = null
    }

    const format = () => {
        let minutes = Math.floor(remainingTime / (1000 * 60))
        let seconds = Math.floor(remainingTime / 1000 % 60)

        return `${minutes}:${seconds}`
    }

    return(
        <div className="timer">
            <div className="timer-layout">   
                <div className="input-time">
                    <input type="number" value={inputMinutes} onChange={(e) => setInputMinutes(Number(e.target.value))}/>
                    <button className="startBtn" onClick={handleStart}>Start</button>
                    <button className="stopBtn" onClick={handleStop}>Stop</button>
                    <button className="resetBtn" onClick={handleReset}>Reset</button>
                </div>
                <div className="timer-display">{format()}</div>
            </div>
            <div className="msg">Your time is up!</div>
        </div>
    )
}

export default Timer