import React, { useState } from 'react'
import CapturesList from './CapturesList'
import SidebarControls from './SidebarControls'

interface Props {
  captures: any[]
}

export default (props: Props) => {
  const [query, setQuery] = useState('')

  const regExp = new RegExp(query.trim(), 'i')
  const captures = props.captures.filter(capture => regExp.test(capture.name))

  return (
    <div>
      <SidebarControls
        onQueryChange={event => setQuery(event.currentTarget.value)}
        onQuerySubmit={event => event.preventDefault()}
        query={query}
      />
      <CapturesList captures={captures} />
    </div>
  )
}
