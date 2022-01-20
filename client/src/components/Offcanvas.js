import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Squash as Hamburger } from 'hamburger-react'

const OffcanvasNav = ({
  handleLogout,
  isLoggedIn,
  handleShowLogin,
  handleShowRegister
}) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => (!show ? setShow(true) : setShow(false))

  return (
    <>
      <Hamburger toggled={show} toggle={handleShow} />

      <Offcanvas var='--bs-dark' show={show} onHide={handleClose}>
        <Offcanvas.Header>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <ul className='offcanvas-auth'>
              {isLoggedIn ? (
                <>
                  <Link to='/account'>
                    <button className='auth-button-account'>Account</button>
                  </Link>
                  <button className='auth-button' onClick={handleLogout}>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button className='button-one' onClick={handleShowLogin}>
                    Login
                  </button>
                  <button className='button-two' onClick={handleShowRegister}>
                    Create an account
                  </button>
                </>
              )}
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Link to='/recipes'>Recipes</Link>
              </li>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default OffcanvasNav
