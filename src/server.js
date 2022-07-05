const { serverPort } = require('./config')
const app = require('./app')

app.listen(serverPort, () => {
  console.info(`Server running at http://localhost:${serverPort}`)
})