import { useEffect, useRef, useState } from "react"

function StopWatch() {

    const [isRunning, setIsRunning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)
    let startTimeRef = useRef(0)
    let intervalIdRef = useRef<number | null>(null)

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 100);
        }

        return () => {
            if (intervalIdRef.current) {
                clearInterval(intervalIdRef.current)
            }
        }
    }, [isRunning])     // missing dependency wont run

    const start = () => {
        setIsRunning(true)
        startTimeRef.current = Date.now() - elapsedTime
    }
    const stop = () => {
        setIsRunning(false)
    }
    const reset = () => {
        setIsRunning(false)
        setElapsedTime(0)
    }    

    const format = () => {
        const hours = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2, "0")
        const minutes = Math.floor(elapsedTime / (1000 * 60) % 60).toString().padStart(2, "0")
        const seconds = Math.floor(elapsedTime / 1000 % 60).toString().padStart(2, "0")
        const miliseconds = Math.floor((elapsedTime % 1000) / 10).toString().padStart(2, "0")
        
        return `${hours}:${minutes}:${seconds}:${miliseconds}`
    }

    return (
        <div className="stop-watch">
            <div className="display">{format()}</div>
            <div className="stop-watch-btn">
                <button className="startBtn" onClick={start}>Start</button>
                <button className="stopBtn" onClick={stop}>Stop</button>
                <button className="resetBtn" onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default StopWatch