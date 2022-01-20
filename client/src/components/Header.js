import React, { useState } from 'react'
import Nav from './Nav.js'
import SearchBar from './SearchBar.js'
import OffcanvasNav from './Offcanvas.js'
import ModalRegister from './ModalRegister.js'
import ModalLogin from './ModalLogin.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import SearchTop from './SearchTop.js'

const Header = ({
  handleLogout,
  isLoggedIn,
  setIsLoggedIn,
  handleShow,
  handleClose,
  setShowLogin,
  showLogin,
  handleShowRegister,
  handleCloseRegister,
  showRegister,
  setShowRegister
}) => {
  const [showSearchBar, setShowSearchBar] = useState(false)
  const handleClick = () => setShowSearchBar(true)

  return (
    <>
      <header>
        <div className='header-container'>
          <div className='nav-container'>
            <OffcanvasNav
              handleLogout={handleLogout}
              isLoggedIn={isLoggedIn}
              handleShowLogin={handleShow}
              handleShowRegister={handleShowRegister}
            />
            <Nav />
          </div>
          <div className='logo-container'>
            <h1>aioli</h1>
          </div>
          <div className='login-container'>
            <div className='auth-buttons-container'>
              {isLoggedIn ? (
                <>
                  <Link to='/account'>
                    <button className='auth-button account'>Account</button>
                  </Link>
                  <button className='auth-button' onClick={handleLogout}>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    className='auth-button login'
                    variant='primary'
                    onClick={handleShow}
                  >
                    Login
                  </button>
                  <ModalLogin
                    showLogin={showLogin}
                    handleClose={handleClose}
                    setIsLoggedIn={setIsLoggedIn}
                    handleShowRegister={handleShowRegister}
                  />

                  <button className='auth-button' onClick={handleShowRegister}>
                    {' '}
                    Register
                  </button>
                  <ModalRegister
                    showRegister={showRegister}
                    handleCloseRegister={handleCloseRegister}
                    setIsLoggedIn={setIsLoggedIn}
                    handleShow={handleShow}
                  />
                </>
              )}
            </div>
            <div className='search-container'>
              {showSearchBar ? (
                <SearchBar />
              ) : (
                <FontAwesomeIcon
                  icon={faSearch}
                  className='search-icon'
                  onClick={handleClick}
                />
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header


