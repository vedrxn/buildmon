import React from 'react'

interface Props {
  capture: any
}

export default (props: Props) => (
  <li>
    <div>{props.capture.id}</div>
  </li>
)