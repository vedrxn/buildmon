import React, { useState } from 'react'
import SidebarControls from './SidebarControls'

export default () => {
  const [query, setQuery] = useState('')

  return (
    <div>
      <SidebarControls
        onQueryChange={event => setQuery(event.currentTarget.value)}
        query={query}
      />
      <ul className="list-unstyled">captures-list</ul>
    </div>
  )
}
