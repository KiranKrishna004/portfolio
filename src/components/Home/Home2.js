import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AiFillGithub } from 'react-icons/ai'

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <br />I have my experience in languages like
              <i>
                <b className="purple"> C++, Javascript, Dart and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new{' '}
              <i>
                <b className="purple">Products </b> and also in areas related to{' '}
              </i>
              <b className="purple">Reactjs, Flutter, React Native.</b>
              <br />
              <br />
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/KiranKrishna004"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Home2
