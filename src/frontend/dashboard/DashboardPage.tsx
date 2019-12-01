import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Sidebar from './sidebar/Sidebar'

export default () => (
  <Row noGutters>
    <Col>
      <Sidebar />
    </Col>
    <Col>
      <main>main-content</main>
    </Col>
    <Col>
      <div>details-sidebar</div>
    </Col>
  </Row>
)
