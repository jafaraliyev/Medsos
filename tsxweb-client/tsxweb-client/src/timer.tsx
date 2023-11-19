// Timer.js
import React, { useState, useEffect } from 'react';
import './timer.css'; // Create a separate CSS file for Timer styling

const Timer = () => {
    const initialTime = 180; // 3 minutes in seconds
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const resetTimer = () => {
        setTime(initialTime);
    };

    const formatTime = (seconds:number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes)}:${String(remainingSeconds)}`;
    };

    return (
        <div className="timer-container"> {/* Apply styles to this container */}
            <h1>Timer: {formatTime(time)}</h1>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
};

export default Timer;
