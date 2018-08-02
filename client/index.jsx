import React from 'react'
import { hydrate } from 'react-dom'
import { createBrowserHistory } from 'history'
import { AppContainer } from 'react-hot-loader'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import './src/override.css'
import Root from './Root.jsx'

const renderApp = (Component) => {
  hydrate(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('root')
  )
}

renderApp(Root)

if (module.hot) {
  module.hot.accept('./Root.jsx', () => {
    renderApp(Root)
  })
}
