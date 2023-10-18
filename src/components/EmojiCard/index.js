import './index.css'

const EmojiCard = props => {
  const {eachList, onScore} = props
  const {emojiName, emojiUrl, id} = eachList
  const onId = () => {
    onScore(id)
  }
  return (
    <button type="button" onClick={onId}>
      <li className="eachList">
        <img src={emojiUrl} alt={emojiName} className="image" />
      </li>
    </button>
  )
}

export default EmojiCard
