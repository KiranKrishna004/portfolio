import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Particle from '../Particle'
import Resumecontent from './ResumeContent'
import pdf from '../../Assets/Resume.pdf'
import { AiOutlineDownload } from 'react-icons/ai'

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Blockchain based E-voting web site"
              date=""
              content={[
                `Built a website that makes use of a blockchain to keep track of each vote
                that's been casted. The frontend is done with ReactJS and TailwindCSS,
                Firebase is implemented so only those with authentication can vote. Worked
                with Ganache and Metamask to deploy and keep track of the blockchain.`,
              ]}
            />
            <Resumecontent
              title="HostelBucket"
              date=""
              content={[
                `Built a Mobile application that provides the detail of all the hostel hosts that
                have been added into our database. Frontend is done by ReactNative.
                Worked with Googlemaps to provide a radius for the user to get result from`,
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Full Stack Open 2020 [University of Helsinki, Finland] "
              date="Present"
              content={['ReactJS']}
            />
            <Resumecontent
              title="Btech Computer Science Engineering [ CUSAT, Kochi ] "
              date="2017 - Present"
              content={[]}
            />
            <Resumecontent
              title="12TH BOARD [ SJN international school, Ooty ]"
              date=""
              content={['Precentage: 80%', 'CBSE']}
            />
            <Resumecontent
              title="10TH BOARD [ SJN international school, Ooty ] "
              date=""
              content={['Precentage: 80%', 'CBSE']}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  )
}

export default Resume
