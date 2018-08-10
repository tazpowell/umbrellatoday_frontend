'use strict'
const store = require('../store')
const locApi = require('./api.js')
const locUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const countDecimals = function (num) {
  // if rounding number downward does not equal number
  // then return length of string after .
  if (Math.floor(num) !== num) {
    return num.toString().split('.')[1].length || 0
  }
  return 0
}

const validateLatLong = function (data) {
  return new Promise((resolve, reject) => {
    let lat = data.location.lat
    let long = data.location.long

    // trim empty spaces in lat/long
    lat = lat.replace(/\s+/g, '')
    lat = parseFloat(lat)
    long = long.replace(/\s+/g, '')
    long = parseFloat(long)

    // check if values are numeric
    if (!$.isNumeric(lat)) {
      const error = 'Latitude value is not valid'
      reject(error)
    } else if (!$.isNumeric(long)) {
      const error = 'Longitude value is not valid'
      reject(error)
    }
    // check if lat/long has too many decimal points
    if (countDecimals(lat) >= 6) {
      lat = lat.toFixed(6)
      lat = parseFloat(lat)
    } else if (countDecimals(long) >= 6) {
      long = long.toFixed(6)
      long = parseFloat(long)
    }
    // check if lat/long is too small/large
    if (parseInt(lat) > 90 || parseInt(lat) < -90) {
      const error = 'Latitude value is not valid (90)'
      reject(error)
    } else if (parseInt(long) > 180 || parseInt(long) < -180) {
      const error = 'Longitude value is not valid (180)'
      reject(error)
    }
    data.location.long = long
    data.location.lat = lat

    resolve(data)
  })
}

const onGetLocations = function () {
  // api
  locApi.getLocations()
    .then(locUi.getAllSuccess)
    .catch(locUi.getAllError)
}

const onCreateLocation = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  // if (!('default' in data.location)) {
  //   data.location.default = false
  // } else {
  //   data.location.default = true
  // }
  validateLatLong(data)
    .then(locApi.createLocation)
    .then(locUi.createSuccess)
    .then(onGetLocations)
    .catch(locUi.createError)
}

const onConfirmDeleteLocation = function () {
  const locationID = parseInt(event.target.parentElement.parentElement.getAttribute('data-id'))
  // console.log('locationID is ', locationID)
  store.delete = locationID
  const locationToDelete = store.locations.find(x => x.id === locationID).name
  // console.log('locationToDelete is ', locationToDelete)
  $('#modal-delete-text').text('Are you sure you want to delete ' + locationToDelete + '?')
}

const onDeleteLocation = function () {
  // api
  locApi.deleteLocation(store.delete)
    .then(locUi.deleteSuccess)
    .catch(locUi.deleteError)
    .then(onGetLocations)
}

const onConfirmUpdateLocation = function () {
  const locationID = parseInt(event.target.parentElement.parentElement.getAttribute('data-id'))
  const locationToUpdate = store.locations.find(x => x.id === locationID)
  locUi.populateUpdateModal(locationToUpdate)
}

const onUpdateLocation = function () {
  event.preventDefault()
  const data = getFormFields(event.target.parentElement)
  // if (!('default' in data.location)) {
  //   data.location.default = false
  // } else {
  //   data.location.default = true
  // }
  validateLatLong(data)
    .then(locApi.updateLocation)
    .then(locUi.updateSuccess)
    .then(onGetLocations)
    .catch(locUi.updateError)
}

module.exports = {
  onGetLocations,
  onCreateLocation,
  onConfirmDeleteLocation,
  onDeleteLocation,
  onConfirmUpdateLocation,
  onUpdateLocation,
  validateLatLong
}
