const closestPOS = require('../controllers/closestPOS')

const routes = (app) => {
  app.use('/closestpos', closestPOS)
}

module.exports = routes