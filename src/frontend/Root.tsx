import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App.tsx'
import reducer from './reducer'

const store = createStore(reducer)

export default () => (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
