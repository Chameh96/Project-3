import React, { useState } from 'react'
import { Offcanvas } from 'react-bootstrap'

const SearchTop = ({ ...props }) => {
  const [show, setShow] = useState(true)

  const handleClose = () => setShow(false)

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default SearchTop
