import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const About = () => {
  return (
    <section className='about'>
      <div className='about-text'>
        <h2>About aioli</h2>
        <p>
          aioli was developed by Rose Dunlop, Hannah Hill, and Ed Chamberlain,
          for the third module of General Assembly’s Software Engineering
          Immersive course.
        </p>
        <p>
          The brief was to create a full-stack MERN application that utilises a
          self-built database and incorporates our learnings from the last 8
          weeks.
        </p>
        <p> Enjoy the recipes!</p>
      </div>
      <div className='group-photos'>
        <Container>
          <Row className='squad-photos'>
            <Col xs={6} md={4} className='photos'>
              <a
                href='https://www.linkedin.com/in/rose-dunlop-b0683b21a/'
                target='_blank'
                rel='noreferrer'
              >
                <Image src='https://i.imgur.com/MTcei5E.jpg' roundedCircle />
              </a>
              <p className='name'>Rose Dunlop</p>
            </Col>
            <Col xs={6} md={4} className='photos'>
              <a
                href='https://www.linkedin.com/in/hannah-hill/'
                target='_blank'
                rel='noreferrer'
              >
                <Image src='https://i.imgur.com/TRLFyq9.jpg' roundedCircle />
              </a>
              <p className='name'>Hannah Hill</p>
            </Col>
            <Col xs={6} md={4} className='photos'>
              <a
                href='https://www.linkedin.com/in/edward-chamberlain-8ab05414b/'
                target='_blank'
                rel='noreferrer'
              >
                <Image src='https://i.imgur.com/HMpkjmh.jpg' roundedCircle />
              </a>
              <p className='name'>Ed Chamberlain</p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default About
