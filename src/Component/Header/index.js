import './index.css'

const Header = props => {
  const {timer, score} = props
  return (
    <nav>
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-img"
      />
      <ul className="img-container">
        <li>
          <p className="nav-description">
            Score: <span>{score}</span>
          </p>
        </li>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-image"
          />
        </li>
        <li>
          <p className="nav-description">{timer} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Header
