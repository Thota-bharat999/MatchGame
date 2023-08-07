import './index.css'

const MatchItem = props => {
  const {itemDetails, clickButton} = props
  const {thumbnailUrl} = itemDetails

  const onClickUpdateButton = () => {
    clickButton(thumbnailUrl)
  }
  return (
    <li>
      <button
        type="button"
        className="button-tab"
        onClick={onClickUpdateButton}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default MatchItem
