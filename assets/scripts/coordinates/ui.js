'use strict'
const store = require('../store')
const locUi = require('../locations/ui.js')

const getCoordinatesSuccess = function (response) {
  store.coordinates = response
  store.query = {}
  store.query.name = `${response.standard.city}, ${response.standard.countryname}`
  const data = {location: {}}
  // format data to pass to fApi.getLocationForecast()
  data.location.lat = response.latt
  data.location.long = response.longt

  return data
}

const getCoordinatesError = function (error) {
  locUi.clearForms()
  // console.log('getCoordinatesError error is ', error)
  locUi.createAlert('.full-width-alert-container', 'danger', 'Error', error, 3000)
}

module.exports = {
  getCoordinatesSuccess,
  getCoordinatesError
}
