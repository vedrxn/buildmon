import React from 'react'
import { useHistory } from 'react-router-dom'

interface Props {
  capture: any
}

export default (props: Props) => {
  const history = useHistory()

  const url = `/captures/${props.capture.id}`

  return (
    <li onClick={() => history.push(url)}>
      <div>{`${props.capture.name} ${props.capture.id}`}</div>
    </li>
  )
}
