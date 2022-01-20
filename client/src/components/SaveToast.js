import React, { useState, useEffect } from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'

const SaveToast = ({ showToast, setShowToast }) => {
  

  return (
    <>
          <Toast
            onClose={() => setShowToast(false)}
            show={showToast}
            delay={3000}
            autohide
            >
            <Toast.Header className="toast-head">
              <strong className='me-auto'>Success</strong>
            </Toast.Header>
            <Toast.Body className="toast-bod">Recipe successfully saved to your account!</Toast.Body>
          </Toast>
       
    </>
  )
}

export default SaveToast
