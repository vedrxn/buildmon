import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { getCaptures, getCapturesError } from '../common/actions/captures'
import Sidebar from './sidebar/Sidebar'

interface Props {
  captures: any[]
  dispatch: any
}

const DashboardPage = (props: Props) => {
  props.dispatch
  useEffect(() => {
    props
      .dispatch(getCaptures())
      .catch((error: Error) => props.dispatch(getCapturesError(error)))
  }, [props.dispatch])

  return (
    <Row noGutters>
      <Col>
        <Sidebar captures={props.captures} />
      </Col>
      <Col>
        <main>main-content</main>
      </Col>
      <Col>
        <div>details-sidebar</div>
      </Col>
    </Row>
  )
}

export default connect((state: any) => ({
  captures: state.captures.items
}))(DashboardPage)
