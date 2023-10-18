import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, onPlayAgain} = props
  const onButtonClick = () => {
    onPlayAgain(score)
  }
  return isWon ? (
    <div className="winloseContainer">
      <div>
        <h1>You Won</h1>
        <p>Best Score</p>
        <h1>{score}/12</h1>
        <button type="button" onClick={onButtonClick}>
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        className="winimage"
        alt="win or lose"
      />
    </div>
  ) : (
    <div className="winloseContainer">
      <div>
        <h1>You lose</h1>
        <p>Score</p>
        <p>{score}/12</p>
        <button type="button" onClick={onButtonClick}>
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        className="winimage"
        alt="win or lose"
      />
    </div>
  )
}

export default WinOrLoseCard
