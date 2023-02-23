// Code utilized from 2/15: Stopwatch Implementation.
import React, { useCallback, useEffect, useState } from 'react'
let currentTimer = 0
export default function DurationExcercise(props) {
    let [running, setRunning] = useState(false)
    let [timer, setTimer] = useState(0)
    let [stateText, setStateText] = useState("Start")
    let updateTimer = useCallback(() => {
        if (running) {
            setTimer((timer => timer + 10))
        }
    }, [running])
    useEffect(() => {
        currentTimer = setInterval(updateTimer, 10);
        return () => clearInterval(currentTimer)
    }, [running])
    let startStop = useCallback(() => {
        if (stateText == "Start") {
            setStateText("Reset")
        } else {
            reset()
            setStateText("Start")
        }
        setRunning(!running)
        clearInterval(currentTimer)
    }, [running])
    let reset = useCallback(() =>
        setTimer(0)
    )
    let mins = Math.floor((timer / (1000 * 60)) % 60).toString().padStart(2, "0")
    let secs = Math.floor((timer / 1000) % 60).toString().padStart(2, "0")
    let mills = Math.floor((timer % (1000))).toString().padStart(3, "0")
    let { name } = props
    return (
        <div>
            <h1>{name}</h1>
            <p>
                Timer: {mins}:{secs}:{mills}
            </p>
            <button onClick={startStop}>{stateText}</button>
            <button onClick={() => props.setShowCase("")}>Return</button>
        </div>
    )
}



