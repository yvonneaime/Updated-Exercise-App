// Code utilized from 2/15: Stopwatch Implementation.
import React, { useCallback, useEffect, useState } from 'react'
import RepetitionExercise from '../RepetitionExercise';
import RunningExercise from '/Users/yvonne/github-classroom/dig4639-s23-main-yvonneaime/dig4639_exerciseApp/Updated-Exercise-App/lab6/src/components/RunningExercise/index.js';
let currentTimer = 0
export default function DurationExcercise(props) {
    let [lapSets, setLapSets] = useState([])
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
    let setLapSetsWrapper = useCallback(() =>
        setLapSets(lapSets => [...lapSets, {
            id: (Math.random() + 1).toString(36).substring(7),
            time: timerValue,
        }])
    )

    let mins = Math.floor((timer / (1000 * 60)) % 60).toString().padStart(2, "0")
    let secs = Math.floor((timer / 1000) % 60).toString().padStart(2, "0")
    let mills = Math.floor((timer % (1000))).toString().padStart(3, "0")
    let timerValue = `${mins}:${secs}:${mills}`
    let { name } = props


    return (
        <div>
            <h1>{name}</h1>
            <p>
                Timer: {timerValue}
            </p>
            <button onClick={startStop}>{stateText}</button>
            <button onClick={() => props.setShowCase("")}>Return</button>
            <button onClick={() => {setLapSetsWrapper()}}>Lap</button>
            <RunningExercise sets={lapSets} />
        </div>
    )
}



