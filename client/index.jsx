import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import 'semantic-ui-less/semantic.less'

import App from './src/components/App.jsx'

function render (Component) {
  ReactDOM.render(
    <AppContainer text>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./src/components/App.jsx', () => { render(App) })
}
