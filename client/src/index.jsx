import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App.jsx'

const Root = () => (
  <div>
    <App />
  </div>
)

ReactDOM.render(<Root />, document.getElementById('app'))
