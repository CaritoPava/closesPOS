const { Client } = require('@googlemaps/google-maps-services-js')
const { apiKey } = require('../config')

const getCoordinates = (clientAddress) => {
  const args = {
    params: {
      key: apiKey,
      address: clientAddress
    }
  }

  const client = new Client({})
  const response = client.geocode(args)
    .then(gcResponse => {
      const { location } = gcResponse.data.results[0].geometry;
      return location;
    })
    .catch(err => err)

  return response
}


module.exports = getCoordinates