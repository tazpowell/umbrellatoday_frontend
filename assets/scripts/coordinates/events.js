'use strict'
const coorApi = require('./api.js')
const coorUi = require('./ui.js')
const fApi = require('../forecasts/api.js')
const fUi = require('../forecasts/ui.js')
const locEvents = require('../locations/events.js')
const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields.js')

const checkCoordinates = function (response) {
  return new Promise((resolve, reject) => {
    // console.log('checkIfObjObj response is ', response)
    // debugger
    if (response.location.lat === '0.00000') {
      const error = 'Invalid search value. Please try again. (coor)'
      reject(error)
    } else if (response.location.long === '0.00000') {
      const error = 'Invalid search value. Please try again. (coor)'
      reject(error)
    }
    resolve(response)
  })
}

const onFindByName = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const name = data.query.name
  // check if name has numbers
  const regex = /\d/g
  if (regex.test(name)) {
    const error = 'Invalid search value. Please try again. (num)'
    coorUi.getCoordinatesError(error)
    return
    // check if name is too long
  } else if (name.length > 40) {
    const error = 'Search value is too long. Please try again.'
    coorUi.getCoordinatesError(error)
    return
  }
  // check if name has symbols
  const invalidSymbols = new RegExp(/[~`()!#$%^&*+=[\]\\';/{}|\\":<>?]/)
  if (invalidSymbols.test(name)) {
    const error = 'Invalid search value. Please try again. (symb)'
    coorUi.getCoordinatesError(error)
    return
  }
  data.query.region = data.query.country
  console.log('data in onFindByName is ', data)
  // api
  coorApi.getCoordinatesByName(data)
    .then(coorUi.getCoordinatesSuccess)
    .then(checkCoordinates)
    // .then((data) => { console.log('data in .then is ', data) })
    .then(fApi.getLocationForecast)
    .then(fUi.getForecastSuccess)
    .catch(coorUi.getCoordinatesError)
}

const runGeolocation = function () {
  return new Promise((resolve, reject) => {
    const data = {location: {}}
    // determine if geolocation is available
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        // console.log('position is: ', position.coords.latitude, position.coords.longitude)
        data.location.lat = position.coords.latitude.toString()
        data.location.long = position.coords.longitude.toString()
        resolve(data)
      })
    } else {
      const error = 'Geolocation not available, please enter coordinates'
      reject(error)
    }
  })
}

const onFindUserPosition = function () {
  runGeolocation()
    .then((data) => {
      // console.log('data after runGeolocation is ', data)
      return data
    })
    .then(locEvents.validateLatLong)
    .then((data) => {
      // console.log('data after validateLatLong is ', data)
      return data
    })
    .then((data) => {
      store.query = {}
      store.query.name = `your current location`
      return data
    })
    .then(fApi.getLocationForecast)
    .then(fUi.getForecastSuccess)
    .catch(fUi.getForecastError)
}

module.exports = {
  onFindByName,
  onFindUserPosition
}
