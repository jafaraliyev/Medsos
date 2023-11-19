// Timer.js
import React, { useState, useEffect } from 'react';
import './timer.css';

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

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };

    return (
        <div className="timer-container"> {/* Apply styles to this container */}
            <h1>Timer: {formatTime(time)}</h1>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
};

export default Timer;
