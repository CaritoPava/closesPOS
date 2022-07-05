const getCoordinates = require('./getCoordinatesService')
const getDistances = require('./getDistancesService')

const closestPOS = async (clientAddress) => {
  try {
    const coordinatesClient = await getCoordinates(clientAddress)
    const distances = await getDistances(coordinatesClient)

    const closestPOS = distances.reduce((acc, curr) => {
      if (acc.distance.value > curr.distance.value) {
        return curr
      }
      return acc
    })

    return closestPOS.name
    // return distances
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = closestPOS