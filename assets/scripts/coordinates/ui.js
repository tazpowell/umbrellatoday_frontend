'use strict'
const store = require('../store')

const getCoordinatesSuccess = function (response) {
  console.log('getCoordinatesSuccess response is ', response)
  store.coordinates = response
  // debugger
  store.query = {}
  store.query.name = `${response.standard.city}, ${response.standard.countryname}`
  const data = {location: {}}
  // format data to pass to fApi.getLocationForecast()
  data.location.lat = response.latt
  data.location.long = response.longt

  return data
}

const getCoordinatesError = function (error) {
  console.log('getCoordinatesError error is ', error)
}

module.exports = {
  getCoordinatesSuccess,
  getCoordinatesError
}
