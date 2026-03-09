import ProfilePic from "../assets/cat.png"

function sayHello() {
    return(
        <div className="card">
            <img src={ProfilePic} alt="profile-pic" className="cardImg"/>
            <p>Hello</p>
            <p>I'm Han studying in kyoto</p>
        </div>
    );
}

export default sayHello;