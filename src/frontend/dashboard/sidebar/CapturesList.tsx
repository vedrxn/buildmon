import React from 'react'
import CapturesListItem from './CapturesListItem'

interface Props {
  captures: any[]
}

export default (props: Props) => (
  <ul className="list-unstyled">
    {props.captures.map(capture => (
      <CapturesListItem capture={capture} key={capture.id} />
    ))}
  </ul>
)
