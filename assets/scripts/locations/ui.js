const store = require('../store')
const locationsTemplate = require('../templates/locations.handlebars')

// Clear form fields
const clearForms = function () {
  $('.form-area input').val('')
}

// Clear fields in modal
const clearUpdateModal = function () {
  $('#update-location-name').val('')
  $('#update-location-lat').val('')
  $('#update-location-long').val('')
  // document.getElementById('update-location-default').checked = false
}

// create full width alert
// location: full-width-alert-container
// context: success, danger
// msgBold: Success, Error
// msgText: alert message to show
// fadeTime: 3000
const createAlert = function (location, context, msgBold, msgText, fadeTime) {
  // console.log('createAlert in locations/ui.js ran')
  $(`${location}`).html(`<div class="alert alert-${context} role="alert">
    <strong><span="msg-bold">${msgBold}</span></strong> <span id="msgText">${msgText}</span>
  </div>`)
  if (fadeTime) {
    $(`${location} .alert-${context}`).delay(fadeTime).fadeOut()
  }
}

const createLocationTable = function (data) {
  // console.log('createLocationTable data is ', data)
  // generate a table row for each file using handlebars
  const locationsHtml = locationsTemplate({ locations: data.locations })
  // add the generated table rows inside the table body element
  $('#locations-table-body').html(locationsHtml)
}

const getAllSuccess = function (response) {
  // console.log('getAllSuccess response is ', response)
  createLocationTable(response)
  store.locations = response.locations
  // console.log('getAllSuccess store is ', store)
}

const getAllError = function () {
  // console.log('getAllError error is ', error)
  createAlert('.full-width-alert-container', 'danger', 'Error', 'Failed to get locations', 3000)
}

const createSuccess = function (response) {
  clearForms()
  // console.log('createSuccess response is ', response)
}

const createError = function (error) {
  clearForms()
  // console.log('createError error is ', error)
  // createAlert params: location, context, msgBold, msgText, fadeTime
  createAlert('.full-width-alert-container', 'danger', 'Error', error, 3000)
}

const deleteSuccess = function () {
  // console.log('deleteSuccess ran')
  // createAlert params: location, context, msgBold, msgText, fadeTime
  createAlert('.full-width-alert-container', 'success', '', 'Delete successful', 3000)
}

const deleteError = function () {
  // console.log('deleteError error is ', error)
  createAlert('.full-width-alert-container', 'danger', 'Error', 'Delete unsuccessful', 3000)
}

const populateUpdateModal = function (location) {
  clearUpdateModal()
  store.update = {location}
  $('#update-location-name').val(location.name)
  $('#update-location-lat').val(location.lat)
  $('#update-location-long').val(location.long)
  // if (location.default === true) {
  //   document.getElementById('update-location-default').checked = true
  // }
}

const updateSuccess = function () {
  clearUpdateModal()
  // createAlert params: location, context, msgBold, msgText, fadeTime
  createAlert('.full-width-alert-container', 'sucess', 'Success', 'Update successful', 3000)
}

const updateError = function (error) {
  clearUpdateModal()
  // console.log('updateError error is ', error)
  // createAlert params: location, context, msgBold, msgText, fadeTime
  createAlert('.full-width-alert-container', 'danger', 'Error', error, 3000)
}

module.exports = {
  getAllSuccess,
  getAllError,
  createSuccess,
  createError,
  deleteSuccess,
  deleteError,
  populateUpdateModal,
  updateSuccess,
  updateError,
  createAlert,
  clearForms
}
