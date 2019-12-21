import React, { useEffect } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getStats } from '../../common/actions/getStats'

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

  const dispatch = useDispatch()

  useEffect(() => {
    if (!capture.stats.length) {
      return
    }

    dispatch(getStats(capture.stats))
  }, [capture, dispatch])

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
