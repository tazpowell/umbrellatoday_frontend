'use strict'
const locApi = require('./api.js')
const locUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onGetLocations = function () {
  console.log('onGetLocations ran')
  // event.preventDefault()
  // api
  locApi.getLocations()
    .then(locUi.getAllSuccess)
    .catch(locUi.getAllError)
}

const onCreateLocation = function () {
  console.log('onCreateLocation ran')
  event.preventDefault()
  const data = getFormFields(event.target)
  // debugger
  if (!('default' in data.location)) {
    data.location.default = false
  } else {
    data.location.default = true
  }
  console.log('onCreateLocation data is ', data)
  // api
  locApi.createLocation(data)
    .then(locUi.createSuccess)
    .catch(locUi.createError)
    .then(onGetLocations)
}

module.exports = {
  onGetLocations,
  onCreateLocation
}
