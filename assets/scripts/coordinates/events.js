'use strict'
const coorApi = require('./api.js')
const coorUi = require('./ui.js')
const fApi = require('../forecasts/api.js')
const fUi = require('../forecasts/ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const checkCoordinates = function (response) {
  return new Promise((resolve, reject) => {
    console.log('checkIfObjObj response is ', response)
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
  // api
  coorApi.getCoordinatesByName(data)
    .then(coorUi.getCoordinatesSuccess)
    .then(checkCoordinates)
    // .then((data) => { console.log('data in .then is ', data) })
    .then(fApi.getLocationForecast)
    .then(fUi.getForecastSuccess)
    .catch(coorUi.getCoordinatesError)
}

module.exports = {
  onFindByName
}
