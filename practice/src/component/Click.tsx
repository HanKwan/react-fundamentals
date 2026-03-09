import { useState } from "react"
import EatCatPic from "../assets/cat-eat.png"
import CatPic from "../assets/cat.png"

function Click() {

    // hamburger eating cat
    const [isEating, setIsEating] = useState(false);
    const [eatCount, setEatCount] = useState(0)
    const [catText, setCatText] = useState("")

    const handleClick = () => {
        setIsEating(true)

        setTimeout(() => {
            setIsEating(false)
        }, 500);

        if (eatCount >= 3) {
            setCatText("Im full ~.~")
        } else {
            setEatCount(eatCount + 1)
        }
        setCatText(`I ate ${eatCount} hamburger/s`)
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
            <div className="click-cat">
                <img src={isEating ? EatCatPic : CatPic} alt="cat-pic"
                onClick={handleClick}></img>
                <p>{catText}</p>
            </div>

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