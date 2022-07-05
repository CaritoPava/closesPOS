const { Client } = require('@googlemaps/google-maps-services-js')
const { circunvalar, ciudadVictoria, treintaDeAgosto } = require('../config/constants')
const { apiKey } = require('../config')

const getDistances = async (coordinatesClient) => {
  try {
    const coordinatesPointOfSales = [circunvalar, ciudadVictoria, treintaDeAgosto]

    const args = {
      params: {
        key: apiKey,
        origins: [coordinatesClient],
        destinations: coordinatesPointOfSales,
        travelMode: 'DRIVING'
      }
    }

    const client = new Client({})
    const distancesAndDurations = client.distancematrix(args)
      .then(dmResponse => dmResponse.data.rows[0].elements)
      .catch(err => err)

    distancesAndDurations
      .then(positions => positions.map((position, index) => position.name = coordinatesPointOfSales[index].name))
      .catch(err => err)

    return distancesAndDurations
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = getDistances