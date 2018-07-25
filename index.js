import http from 'http'
import app from '../index'

const server = http.createServer(app)
let currentApp = app
server.listen(process.env.PORT, '0.0.0.0' || 8081)

if (module.hot) {
  module.hot.accept('./server', () => {
    server.removeListener('request', currentApp)
    server.on('request', app)
    currentApp = app
  })
}
