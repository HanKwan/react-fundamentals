import { useEffect, useState } from "react";

function DigitalClock() {
    
    const [time, setTime] = useState(new Date)

    useEffect(() => {
        const setIntervalId = setInterval(() => {
            setTime(new Date)
        }, 1000);

        return () => {
            clearInterval(setIntervalId)
        }
    })

    const formattedTime = () => {
        let hours = time.getHours()
        const minutes = time.getMinutes().toString().padStart(2, "0")
        const seconds = time.getSeconds().toString().padStart(2, "0")

        const amOrPm = hours >= 12 ? "PM" : "AM"

        hours = hours % 12 || 12
        const formattedHours = hours.toString().padStart(2, "0")

        return `${formattedHours}:${minutes}:${seconds} ${amOrPm}`
    }

    return (
        <div className="digital-clock">
            <span>{formattedTime()}</span>
        </div>
    )
}

export default DigitalClock;