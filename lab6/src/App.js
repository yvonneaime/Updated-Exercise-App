import './App.css';
import React from 'react'
import DurationExcercise from './components/DurationExcercise/index.js';
import RepetitionExercise from './components/RepetitionExercise/index.js'
import { useState } from 'react'

function ExcerciseDirector(event, props) {
  switch (event.target.id) {
    case "pushups":
    case "jumpingjacks":
    case "running":
    case "situps":
      props.setShowCase(event.target.id)
      break
    default:
      break
  }
}

function ExcerciseFunction(props) {
  const exerciseList = ["Push Ups", "Bicycling", "Jumping Jacks", "Running", "Sit Ups"]
  function wrapper(event) {
    props.setShowCase(event.target.id)
    ExcerciseDirector(event, props)
  }
  const exercises = exerciseList.map((exercise, i) =>
    <div key={i}>
      <button key={i} id={exercise.replace(/ /g, '').toLowerCase()} onClick={(event) => wrapper(event)
      }>{exercise}</button></div>
  );
  return (
    <div id="excerise-content">
      <h1>｡๋⋆✩⋆☁︎ ﾟ☾｡⋆  Go Workout!  ⋆ﾟ✩°⋆｡๋࣭ ⭑ﾟ </h1>
      <p>Please select an exercise.</p>
      {exercises}
    </div>
  )
}

function App() {
  let [showcaseState, setShowcaseState] = useState("")
  return (
    <div className="App">
      {showcaseState == "" ? <ExcerciseFunction setShowCase={setShowcaseState} ></ExcerciseFunction> : undefined}
      {showcaseState == "pushups" ? <RepetitionExercise name={"Push Ups"} setShowCase={setShowcaseState}></RepetitionExercise> : undefined}
      {showcaseState == "jumpingjacks" ? <RepetitionExercise name={"Jumping Jacks"} setShowCase={setShowcaseState} ></RepetitionExercise> : undefined}
      {showcaseState == "situps" ? <RepetitionExercise name={"Sit Ups"} setShowCase={setShowcaseState}></RepetitionExercise> : undefined}
      {showcaseState == "running" ?<DurationExcercise name={"Running"} setShowCase={setShowcaseState}></DurationExcercise> : undefined}
      {showcaseState == "bicycling" ? <DurationExcercise name={"Bicycling"} setShowCase={setShowcaseState}></DurationExcercise> : undefined}
    </div>
  );
}

export default App;
