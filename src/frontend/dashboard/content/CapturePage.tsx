import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

interface Props {
  capture: any
}

export default (props: Props) => (
  <Row>
    <Col>
      <main>{props.capture.name}</main>
    </Col>
    <Col>
      <div>details-sidebar</div>
    </Col>
  </Row>
)
