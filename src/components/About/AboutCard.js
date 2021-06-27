import React from 'react'
import Card from 'react-bootstrap/Card'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            I am <span className="purple">Kiran Krishna N </span>
            from <span className="purple"> Tirupur, Tamil Nadu.</span>
            <br />I am a final year student pursuing Bachelors in Computer
            Science Engineering in CUSAT
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">Basketball</li>
            <li className="about-activity">Cricket</li>
            <li className="about-activity">Badminton</li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
