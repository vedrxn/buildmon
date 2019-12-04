import React, { useState } from 'react'
import CapturesList from './CapturesList'
import SidebarControls from './SidebarControls'

export default () => {
  const [query, setQuery] = useState('')

  return (
    <div>
      <SidebarControls
        onQueryChange={event => setQuery(event.currentTarget.value)}
        query={query}
      />
      <CapturesList captures={[]} />
    </div>
  )
}
