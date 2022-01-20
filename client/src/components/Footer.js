import { Link } from 'react-router-dom'
import React from 'react'
import {
  FaFacebookSquare,
  FaInstagram,
  FaGithub,
  FaTwitterSquare,
  FaLinkedin
} from 'react-icons/fa'

const Footer = ({
  handleLogout,
  isLoggedIn,
  handleShow,
  handleShowRegister
}) => {
  return (
    <footer>
      <div className='footer-nav'>
        <ul>
          <Link className='link' to={'/recipes'}>
            Recipes
          </Link>
          <Link className='link' to={'/'}>
            Home
          </Link>
          <Link className='link' to={'/about'}>
            About
          </Link>
          {isLoggedIn ? (
            <>
              <Link to={'/account'}>
                <button className='auth-button-account'>Account</button>
              </Link>
              <button className='auth-button' onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button onClick={handleShow}>Login</button>
              <button onClick={handleShowRegister}>Sign Up</button>
            </>
          )}
        </ul>
      </div>
      <div className='footer-footer'>
        <div className='social'>
          <FaFacebookSquare />
          <FaInstagram />
          <FaGithub />
          <FaTwitterSquare />
          <FaLinkedin />
        </div>
        <p>Created by Ed Chamberlain, Rose Dunlop, and Hannah Hill</p>
      </div>
    </footer>
  )
}

export default Footer
