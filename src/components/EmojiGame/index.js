import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {
    previousImojiList: [],
    score: 0,
    isWon: '',
    resultCard: false,
    topScore: 0,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props

    return emojisList.sort(() => Math.random() - 0.5)
  }

  onScore = id => {
    const {previousImojiList, score} = this.state
    if (previousImojiList.includes(id)) {
      this.setState({isWon: false, resultCard: true})
    } else {
      this.setState(prevState => ({
        previousImojiList: [...previousImojiList, id],
        score: prevState.score + 1,
      }))
    }
    if (score === 11) {
      this.setState({resultCard: true, isWon: true})
    }
  }

  onPlayAgain = score => {
    const {topScore} = this.state
    if (score > topScore) {
      this.setState({
        previousImojiList: [],
        resultCard: false,
        score: 0,
        topScore: score,
      })
    } else {
      this.setState({
        previousImojiList: [],
        resultCard: false,
        score: 0,
        topScore: score,
      })
    }
  }

  render() {
    // const isTrue = true
    const {resultCard, isWon, score, topScore} = this.state
    // console.log(score, resultCard)
    const emojiList = this.shuffledEmojisList()

    return (
      <div className="main-container">
        <NavBar score={score} topScore={topScore} />
        {resultCard ? (
          <WinOrLoseCard
            isWon={isWon}
            score={score}
            onPlayAgain={this.onPlayAgain}
          />
        ) : (
          <ul className="unorderList">
            {emojiList.map(eachList => (
              <EmojiCard
                eachList={eachList}
                key={eachList.id}
                onScore={this.onScore}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default EmojiGame
