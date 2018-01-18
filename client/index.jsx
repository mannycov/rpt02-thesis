import React from 'react'
import { render } from 'react-dom'
import { createBrowserHistory } from 'history'
import { AppContainer } from 'react-hot-loader'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'

import Root from './Root.jsx'

const history = createBrowserHistory()
const store = createStore(reducers, applyMiddleware(routerMiddleware(history)))

const renderApp = (Component) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter history={history}>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

renderApp(Root)

if (module.hot) {
  module.hot.accept('./reducers.js', () => {
    store.replaceReducer(require('./reducers').default)
    renderApp(Root)
  })
}
