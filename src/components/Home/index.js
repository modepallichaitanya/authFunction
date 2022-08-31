import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header/index'

import LogoutButton from '../LogoutButton'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="not">
        <h1 className="heading"> Home Route</h1>
        <LogoutButton />
      </div>
    </>
  )
}

export default Home
