import { useEffect, useRef, useState } from "react"

function Timer() {
    
    const [isRunning, setIsRunning] = useState(false)
    const [remainingTime, setRemainingTime] = useState(0)
    const [inputMinutes, setInputMinutes] = useState(0)
    const endTimeRef = useRef<number | null>(null);
    const intervalIdRef = useRef<number | null>(null)

    useEffect(() => {
            intervalIdRef.current = setInterval(() => {
                if (!isRunning) return

                if (endTimeRef.current) {
                    const timeLeft = endTimeRef.current - Date.now()
                    
                    if (timeLeft <= 0) {
                        setIsRunning(false)
                        setRemainingTime(0)
                        endTimeRef.current = null

                        if (intervalIdRef.current) {
                            clearInterval(intervalIdRef.current)
                        }
                    } else {
                        setRemainingTime(timeLeft)
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
        const duration = remainingTime > 0 ? remainingTime : inputMinutes * 1000 * 60

        endTimeRef.current = Date.now() + duration
        setRemainingTime(duration)
        setInputMinutes(0)
        setIsRunning(true)
    }
    const handleStop = () => {
        setIsRunning(false)

        if (intervalIdRef.current) {
            clearInterval(intervalIdRef.current)
        }
        if (endTimeRef.current) {
            setRemainingTime(endTimeRef.current - Date.now())
        }
    }
    const handleReset = () => {
        setIsRunning(false)
        setRemainingTime(0)
        endTimeRef.current = null
    }

    const format = () => {
        let minutes = Math.floor(remainingTime / (1000 * 60)).toString().padStart(2, "0")
        let seconds = Math.floor(remainingTime / 1000 % 60).toString().padStart(2, "0")

        return `${minutes}:${seconds}`
    }

    return(
        <div className="timer">
            <div className="timer-layout">   
                <div className="input-time">
                    <input type="number" value={inputMinutes} onChange={(e) => setInputMinutes(Number(e.target.value))}/>
                    <button className="startBtn" onClick={handleStart}>{endTimeRef.current ? "Resume" : "Start"}</button>
                    <button className="stopBtn" onClick={handleStop}>Stop</button>
                    <button className="resetBtn" onClick={handleReset}>Reset</button>
                </div>
                <div className="timer-display">{format()}</div>
            </div>
            <div className="msg">{remainingTime <= 0 ? "Beep beep! Your time is up!": ""}</div>
        </div>
    )
}

export default Timer