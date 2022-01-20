import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

const ModalRegister = ({ showRegister, handleCloseRegister, handleShow }) => {

  const [data, setData] = useState({
    username: '',
    email: '',
    password: '', 
    passwordConfirmation: ''
  })

  const [isError, setIsError] = useState(false)

  const handleRegister = async (event) => {
    event.preventDefault()

    const config = {
      method: 'post',
      url: '/api/register',
      headers: { 
        'Content-Type': 'application/json'
      },
      data
    }
    try {
      const response = await axios(config)
      console.log(response.data)
      setIsError(false)
      handleCloseRegister()
      handleShow()

      
    } catch (err) {
      console.log(err)
      setIsError(true)
    }
  }

  const handleFormChange = (event) => {
    const { name, value } = event.target 
    setData({
      ...data,
      [name]: value
    })
  }

  const handleOption = () => {
    handleCloseRegister()
    handleShow()
  }

    return (
        <>
           <Modal dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title" centered show={showRegister} onHide={handleCloseRegister} animation={false} className="modal-container">
              <Modal.Header closeButton>
                <Modal.Title className="modal-title">Register an aioli account</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="register-para">
                <p>Create an account with aioli to save recipes, post recipes to your profile and more.</p>
                </div>
                <Form onSubmit={handleRegister}>
                  <Form.Group className="mb-3" controlId="formBasicUsername">
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="username" placeholder="Enter username" name="username" value={data.username} onChange={handleFormChange} />
                  </Form.Group>  
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={data.email} onChange={handleFormChange}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={data.password} onChange={handleFormChange}/>
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>Confirmation Password</Form.Label>
                      <Form.Control type="password" placeholder="Confirm password" name="passwordConfirmation" value={data.passwordConfirmation} onChange={handleFormChange}/>
                  </Form.Group>
                  {isError ? (
                    <div className="error">
                      <p>Error. Please try again.</p>
                    </div>
                  ) : (
                    <></>
                  )} 
                  <Button className="register-button" variant="primary" type="submit">Register</Button>   
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <label>Already a member?</label>
                <Button className="not-member-button" variant="secondary" onClick={handleOption}>Login</Button>
              </Modal.Footer>
            </Modal> 
        </>
    )
}

export default ModalRegister
