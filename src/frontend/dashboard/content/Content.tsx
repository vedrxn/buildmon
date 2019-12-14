import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { connect } from 'react-redux'
import { Redirect, Route, Switch, useParams } from 'react-router-dom'
import CapturePage from './CapturePage'

interface Props {
  captures: any[]
  isCapturesLoaded: boolean
}

interface Params {
  id?: string
}

export default (props: Props) => {
  if (!props.isCapturesLoaded) {
    return <div>Loading</div>
  }

  const params: Params = useParams()

  const capture =
    props.captures.find((capture: any) => capture.id === params.id) ||
    props.captures.find((capture: any) => capture.type === 'Ephemeral')

  return (
    <Switch>
      <Route path="/captures/:id">
        <CapturePage capture={capture} />
      </Route>
      <Route>
        <Redirect to={`/captures/${capture.id}`} />
      </Route>
    </Switch>
  )
}
