require('dotenv').config()

module.exports = {
  serverPort: process.env.SERVER_PORT || 9000,
  apiKey: process.env.API_KEY
}