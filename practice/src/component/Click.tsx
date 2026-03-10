import { useState } from "react"
import EatCatPic from "../assets/cat-eat.png"
import CatPic from "../assets/cat.png"

function Click() {

    // hamburger eating cat
    const [isEating, setIsEating] = useState(false);
    const [eatCount, setEatCount] = useState(0)
    // const [catText, setCatText] = useState("")

    const handleClick = () => {
        setIsEating(true)

        setTimeout(() => {
            setIsEating(false)
        }, 500);

        setEatCount(eatCount + 1)

        //-> using prev as eatCount with condition (second try) <-
        // setEatCount(prev => {
        //     const newEatCount = prev + 1
            
        //     if (newEatCount >= 3) {
        //         setCatText("Im full ~.~") 
        //     } else {
        //         setCatText(`I ate ${newEatCount} hamburger/s`)
        //     }
        //     return newEatCount
        // })

        //-> first try with text display for the eating cat<-
        // if (eatCount >= 3) {
        //     setCatText("Im full ~.~")
        // } else {
        //     setEatCount(eatCount + 1)
        // }
        // setCatText(`I ate ${eatCount} hamburger/s`)
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
            {/* for eating cat */}
            <div className="click-cat">
                <img src={isEating ? EatCatPic : CatPic} alt="cat-pic"
                onClick={handleClick}></img>
                <p>{eatCount >= 3 ? "Im full ~.~" : `I ate ${eatCount} hamburger${eatCount <= 1 ? "" : "s"}`}</p>
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