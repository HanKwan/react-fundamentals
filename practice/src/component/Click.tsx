import { useState } from "react"
import CatPic from "../assets/cat.jpg"

function Click() {

    // simple click event
    let bur = 0
    const handleClick = (food: string) => {
        
        if (bur >= 3) {
            console.log("I'm full ~.~")
        } else {
            bur++
            console.log(`I ate ${bur} ${food}/s`)
        }
    }


    // counter using useStat
    const [count, setCount] = useState(0);
    
    const decBtn = () => {
        setCount(count - 1)     
    }
    const resetBtn = () => {
        setCount(0)
    }
    const incBtn = () => {
        setCount(count + 1)
    }

    return(
        <>
            {/* for click event */}
            <img src={CatPic} alt="cat-pic" className="click-cat"
            onClick={() => handleClick("hamburger")}></img>

            {/* for counter using useStat */}
            <div className="counter">
                <div>{count}</div>
                <button onClick={decBtn}>Decrease</button>
                <button onClick={resetBtn}>Reset</button>
                <button onClick={incBtn}>Increase</button>
            </div>
        </>
        
    )   
}

export default Click;