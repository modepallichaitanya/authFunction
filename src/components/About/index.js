// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import LogoutButton from '../LogoutButton'
import Header from '../Header'
import './index.css'

const About = () => {
  const accessToken = Cookies.get('jwt_token')

  if (accessToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <div className="not">
        <Header />
        <h1 className="heading">About Route</h1>
        <LogoutButton />
      </div>
    </>
  )
}

export default About
