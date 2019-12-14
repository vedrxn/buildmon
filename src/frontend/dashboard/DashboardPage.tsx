import React, { useEffect } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { connect } from 'react-redux'
import { getCaptures, getCapturesError } from '../common/actions/getCaptures'
import Content from './content/Content'
import Sidebar from './sidebar/Sidebar'

interface Props {
  captures: any[]
  dispatch: any
  isCapturesLoaded: boolean
}

const DashboardPage = (props: Props) => {
  useEffect(() => {
    props
      .dispatch(getCaptures())
      .catch((error: Error) => props.dispatch(getCapturesError(error)))
  }, [props.dispatch])

  return (
    <Row noGutters>
      <Col>
        <Sidebar
          captures={props.captures}
          isCapturesLoaded={props.isCapturesLoaded}
        />
      </Col>
      <Col>
        <Content
          captures={props.captures}
          isCapturesLoaded={props.isCapturesLoaded}
        />
      </Col>
    </Row>
  )
}

export default connect((state: any) => ({
  captures: state.captures.items,
  isCapturesLoaded: state.captures.loaded
}))(DashboardPage)
