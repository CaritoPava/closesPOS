const express = require('express')
const closestPOS = require('../../services/closetPOS')
const router = express.Router()

router.get('/', (req, res) => {
  console.log(req.query.address)
  const addressWithHastag = req.query.address.replace('_', '#')
  const addressWithHastag1 = addressWithHastag.replace('_', '#')
  closestPOS(addressWithHastag1)
    .then(response => res.json({ message: { closestPOS: response } }))
    .catch(err => res.status(400).json(err.message))
})

module.exports = router