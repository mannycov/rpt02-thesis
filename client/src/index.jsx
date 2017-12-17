import React from 'react'
import ReactDOM from 'react-dom'
// require('./styles.scss');

import App from './components/App.jsx'

const Root = () => (
  <div>
    <App />
  </div>
)

ReactDOM.render(<Root />, document.getElementById('app'));
