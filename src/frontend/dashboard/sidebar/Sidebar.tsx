import React, { useState } from 'react'
import CapturesList from './CapturesList'
import SidebarControls from './SidebarControls'

interface Props {
  captures: any[]
}

export default (props: Props) => {
  const [query, setQuery] = useState('')

  return (
    <div>
      <SidebarControls
        onQueryChange={event => setQuery(event.currentTarget.value)}
        query={query}
      />
      <CapturesList captures={props.captures} />
    </div>
  )
}
