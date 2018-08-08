'use strict'
const store = require('../store')
const locApi = require('./api.js')
const locUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const validateFormData = function (data) {
  return new Promise((resolve, reject) => {
    if (!$.isNumeric(data.location.lat)) {
      console.log('lat is not a number')
      const error = 'Latitude value is not valid'
      reject(error)
    } else if (!$.isNumeric(data.location.long)) {
      console.log('long is not a number')
      const error = 'Longitude value is not valid'
      reject(error)
    }
    // trim empty spaces in lat/long
    data.location.lat = data.location.lat.replace(/\s+/g, '')
    data.location.long = data.location.long.replace(/\s+/g, '')
    resolve(data)
  })
}

const validateFormData2 = function (data) {
  console.log('data in validateFormData is ', data)
  // check if lat/long values are numbers
  if (!$.isNumeric(data.location.lat)) {
    console.log('lat is not a number')
    // createAlert params: context, msgBold, msgText, fadeTime
    createAlert('full-width-alert-container', 'danger', 'Error', 'Latitude value is not valid', 3000)
    $('.form-area input').val('')
    return
  } else if (!$.isNumeric(data.location.long)) {
    console.log('long is not a number')
    createAlert('full-width-alert-container', 'danger', 'Error', 'Longitude value is not valid', 3000)
    $('.form-area input').val('')
    return
  }
  // trim empty spaces in lat/long
  data.location.lat = data.location.lat.replace(/\s+/g, '')
  data.location.long = data.location.long.replace(/\s+/g, '')

  return data
}

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
  if (!('default' in data.location)) {
    data.location.default = false
  } else {
    data.location.default = true
  }
  validateFormData(data)
    .then(locApi.createLocation)
    .then(locUi.createSuccess)
    .then(onGetLocations)
    .catch(locUi.createError)
  // console.log('data in onCreateLocation is ', data)
  // api
  // locApi.createLocation(data)
    // .then(locUi.createSuccess)
    // .catch(locUi.createError)
    // .then(onGetLocations)
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

const onConfirmUpdateLocation = function () {
  console.log('onConfirmUpdateLocation ran')
  const locationID = parseInt(event.target.parentElement.parentElement.getAttribute('data-id'))
  const locationToUpdate = store.locations.find(x => x.id === locationID)
  locUi.populateUpdateModal(locationToUpdate)
}

const onUpdateLocation = function () {
  console.log('onUpdateLocation ran')
  event.preventDefault()
  const data = getFormFields(event.target.parentElement)
  if (!('default' in data.location)) {
    data.location.default = false
  } else {
    data.location.default = true
  }
  validateFormData(data)
    .then(locApi.updateLocation)
    .then(locUi.updateSuccess)
    .then(onGetLocations)
    .catch(locUi.updateError)
  // api
  // locApi.updateLocation(data)
  //   .then(locUi.updateSuccess)
  //   .catch(locUi.updateError)
  //   .then(onGetLocations)
}

module.exports = {
  onGetLocations,
  onCreateLocation,
  onConfirmDeleteLocation,
  onDeleteLocation,
  onConfirmUpdateLocation,
  onUpdateLocation
}
