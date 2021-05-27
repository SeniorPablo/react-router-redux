import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/user-icon.png'
import gravatar from '../utils/gravatar'
import { logoutRequest } from '../redux/actions'

const Header = () => {
    
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const hasUser = Object.keys(user).length > 0

  const handleLogout = () => {
    dispatch(logoutRequest({}))
  }

  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {
            hasUser 
            ? (
              <img src={gravatar(user.email)} alt={user.email} />
            )
            : (
              <img src={userIcon} alt="" />
            )
          }
          <p>Perfil</p>
        </div>
        <ul>
          {
            hasUser
            ? (
              <li>
                <Link to="/">
                  {user.name}
                </Link>
              </li>
            )
            : (
              null
            )
          }
          {
            hasUser
            ? (
              <li>
                <Link to="#logout" onClick={handleLogout}>
                  Cerrar sesión
                </Link>
              </li>
            )
            : (
              <li>
                <Link to="/login">
                  Iniciar sesión
                </Link>
              </li>
            )
          }
        </ul>
      </div>
    </header>
  )
}

export default Header
