'use strict'
const coorApi = require('./api.js')
const coorUi = require('./ui.js')
const fApi = require('../forecasts/api.js')
const fUi = require('../forecasts/ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onFindByName = function (event) {
  // console.log('onFindByName ran')
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log('onFindByName data is ', data)
  // api
  coorApi.getCoordinatesByName(data)
    .then(coorUi.getCoordinatesSuccess)
    // .then((data) => { console.log('data in .then is ', data) })
    .then(fApi.getLocationForecast)
    .then(fUi.getForecastSuccess)
    .catch(coorUi.getCoordinatesError)
}

module.exports = {
  onFindByName
}
