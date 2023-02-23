import React from 'react';

export class RunningExercise extends React.Component {
  constructor(props) {
    super(props)
    this.state = { sets: props.sets }
}

  render () {
    let { sets } = this.props
    return (
    <div style={{display:"flex",justifyContent: "center", alignItems:"center"}}>
      <ol>
      {sets.map((set) => (
        <li key={set.id}>
           {set.time}
        </li>
      ))}
      </ol>
    </div>
    )
  }
}
export default RunningExercise;
