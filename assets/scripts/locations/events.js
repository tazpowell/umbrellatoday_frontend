'use strict'
const store = require('../store')
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

const onConfirmDeleteLocation = function () {
  console.log('onConfirmDeleteLocation ran')
  const locationID = parseInt(event.target.parentElement.parentElement.getAttribute('data-id'))
  console.log('locationID is ', locationID)
  store.delete = locationID
  const locationToDelete = store.locations.find(x => x.id === locationID).name
  console.log('locationToDelete is ', locationToDelete)
  $('#modal-delete-text').text('Are you sure you want to delete ' + locationToDelete + '?')
}

const onDeleteLocation = function () {
  console.log('onDeleteLocation ran')
  // api
  locApi.deleteLocation(store.delete)
    .then(locUi.deleteSuccess)
    .catch(locUi.deleteError)
    .then(onGetLocations)
}

module.exports = {
  onGetLocations,
  onCreateLocation,
  onConfirmDeleteLocation,
  onDeleteLocation
}
