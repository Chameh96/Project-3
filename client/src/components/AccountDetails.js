import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { deleteUser } from '../helpers/api.js'
import { Link, useNavigate } from 'react-router-dom'
import { removeToken } from '../helpers/auth.js'

const AccountDetails = ({ username, email, userId, setIsLoggedIn }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const navigate = useNavigate()

  const handleDelete = (event) => {
    event.preventDefault()
    removeToken()
    setIsLoggedIn(false)
    deleteUser(userId)
    navigate('/')
  }

  return (
    <>
      <div className='accountDetails-container'>
        <h2 className='account-header'>Your account details</h2>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              readonly='readonly'
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicUsername'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type='username'
              placeholder='Password'
              value={username}
              readonly='readonly'
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              value='password'
              readonly='readonly'
            />
          </Form.Group>
          <div className='buttons-account'>
            <Button variant='secondary' onClick={handleShow}>
              delete account
            </Button>{' '}
            <Button variant='secondary'>edit account</Button>{' '}
          </div>
        </Form>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop='static'
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>We&apos;ll miss you!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete your aioli account? This cannot be
            undone.
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Cancel
            </Button>
            <Link to='/'>
              <Button variant='primary' onClick={handleDelete}>
                Delete my account
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default AccountDetails

{
  /* <div className='accountField'>
          <div className='accountField-header'>
            <div>
              <h3>username</h3>
            </div>
            <button></button>
          </div>
          <div className='accountField-input'>
            <form>
              <input id='username' value={username}></input>
            </form>
          </div>
        </div>
        <div className='accountField'>
          <div className='accountField-header'>
            <div>
              <h3>email</h3>
            </div>
            <button></button>
            <div className='accountField-input'>
              <form>
                <input id='email' value={email}></input>
              </form>
            </div>
          </div>
        </div>
        <div className='accountField'>
          <div className='accountField-header'>
            <div>
              <h3>password</h3>
            </div>
            <button></button>
            <div className='accountField-input'>
              <form>
                <input type='password' value='password'></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  ) */
}
