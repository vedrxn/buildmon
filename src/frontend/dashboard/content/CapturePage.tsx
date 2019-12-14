import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useParams } from 'react-router-dom'

interface Params {
  id?: string
}

interface Props {
  captures: any[]
}

export default (props: Props) => {
  const params: Params = useParams()

  const capture = props.captures.find(
    (capture: any) => capture.id === params.id
  )

  return (
    <Row>
      <Col>
        <main>{`${capture.name} ${capture.id}`}</main>
      </Col>
      <Col>
        <div>details-sidebar</div>
      </Col>
    </Row>
  )
}
