function Timer() {
    


    return(
        <div className="timer">
            <div className="timer-layout">   
                <div className="input-time">
                <input type="number" />
                <button>Start</button>
                </div>
                <div className="timer-display">00:00</div>
            </div>
            <div className="msg">Your time is up!</div>
        </div>
    )
}

export default Timer