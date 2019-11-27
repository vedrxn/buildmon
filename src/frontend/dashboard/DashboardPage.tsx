import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default () => (
  <Row noGutters>
    <Col>
      <ul className="list-unstyled">captures-list</ul>
    </Col>
    <Col>
      <main>main-content</main>
    </Col>
    <Col>
      <div>details-sidebar</div>
    </Col>
  </Row>
)
