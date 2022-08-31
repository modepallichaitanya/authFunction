// Write your JS code here
import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = props => {
  const onClickHome = () => {
    const {history} = props
    history.replace('/')
  }

  return (
    <nav className="nav-header">
      <ul className="nav-menu">
        <li className="nav-menu-item">
          <Link to="/" className="nav-link" onClick={onClickHome}>
            Home
          </Link>
        </li>

        <li className="nav-menu-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
