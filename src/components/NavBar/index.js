import './index.css'

const NavBar = props => {
  const {score, topScore} = props
  return (
    <div className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
        alt="emoji logo"
      />
      <h1>Emoji Game</h1>
      <div className="score-container">
        <p>score: {score}</p>
        <p>Top Score: {topScore} </p>
      </div>
    </div>
  )
}

export default NavBar
