import React, { useEffect } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useDispatch, useSelector } from 'react-redux'
import { getCaptures, getCapturesError } from '../common/actions/getCaptures'
import Content from './content/Content'
import Sidebar from './sidebar/Sidebar'

export default () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCaptures())
      // @ts-ignore See https://github.com/reduxjs/redux-thunk/issues/231
      .catch((error: Error) => dispatch(getCapturesError(error)))
  }, [dispatch])

  const captures = useSelector((state: any) => state.captures.items)
  const isCapturesLoaded = useSelector((state: any) => state.captures.loaded)

  return (
    <Row noGutters>
      <Col>
        <Sidebar captures={captures} isCapturesLoaded={isCapturesLoaded} />
      </Col>
      <Col>
        <Content captures={captures} isCapturesLoaded={isCapturesLoaded} />
      </Col>
    </Row>
  )
}
