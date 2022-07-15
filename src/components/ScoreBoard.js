const ScoreBoard = ({score}) => {
  return (
    <div className="scoreboard" style={{padding: '25px'}}>
      <h2>Score:  {score}</h2>
    </div>
  )
}

export default ScoreBoard