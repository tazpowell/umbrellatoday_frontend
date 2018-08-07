'use strict'
const locApi = require('./api.js')
const locUi = require('./ui.js')

const onGetLocations = function () {
  console.log('onGetLocations ran')
  event.preventDefault()
  // api
  locApi.getLocations()
    .then(locUi.getAllSuccess)
    .catch(locUi.getAllError)
}

module.exports = {
  onGetLocations
}
