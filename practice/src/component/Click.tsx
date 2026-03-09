import CatPic from "../assets/cat.jpg"

function Click() {

    let count = 0

    const handleClick = (food: string) => {
        
        if (count >= 3) {
            console.log("I'm full ~.~")
        } else {
            count++
            console.log(`I ate ${count} ${food}/s`)
        }

    }

    return(
        <img src={CatPic} alt="cat-pic" className="click-cat"
            onClick={() => handleClick("hamburger")}
        />
    )   
}

export default Click;