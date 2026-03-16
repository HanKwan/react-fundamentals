function StopWatch() {
    return (
        <div className="stop-watch">
            <div className="display">00:00:00</div>
            <div className="stop-watch-btn">
                <button className="startBtn">Start</button>
                <button className="stopBtn">Stop</button>
                <button className="resetBtn">Reset</button>
            </div>
        </div>
    )
}

export default StopWatch