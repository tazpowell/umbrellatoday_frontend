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
  document.getElementById('update-location-default').checked = false
}

const createLocationTable = function (data) {
  console.log('createLocationTable data is ', data)
  // generate a table row for each file using handlebars
  const locationsHtml = locationsTemplate({ locations: data.locations })
  // add the generated table rows inside the table body element
  $('#locations-table-body').html(locationsHtml)
}

const getAllSuccess = function (response) {
  console.log('getAllSuccess response is ', response)
  createLocationTable(response)
  store.locations = response.locations
  console.log('getAllSuccess store is ', store)
}

const getAllError = function (error) {
  console.log('getAllError error is ', error)
}

const createSuccess = function (response) {
  clearForms()
  console.log('createSuccess response is ', response)
}

const createError = function (error) {
  clearForms()
  console.log('createError error is ', error)
}

const deleteSuccess = function () {
  console.log('deleteSuccess ran')
  $('.full-width-alert-container').html('<div class="alert alert-success alert-delete-success">' +
      'Delete successful </div>')
  $('.alert-delete-success').delay(3000).fadeOut()
}

const deleteError = function (error) {
  console.log('deleteError error is ', error)
  $('.full-width-alert-container').html('<div class="alert alert-danger alert-delete-error">' +
      'Delete unsuccessful </div>')
  $('.alert-delete-error').delay(3000).fadeOut()
}

const populateUpdateModal = function (location) {
  clearUpdateModal()
  store.update = {location}
  $('#update-location-name').val(location.name)
  $('#update-location-lat').val(location.lat)
  $('#update-location-long').val(location.long)
  if (location.default === true) {
    document.getElementById('update-location-default').checked = true
  }
}

const updateSuccess = function () {
  clearUpdateModal()
  $('.full-width-alert-container').html('<div class="alert alert-success alert-update-success">' +
      'Update successful </div>')
  $('.alert-update-success').delay(3000).fadeOut()
}

const updateError = function (error) {
  console.log('updateError error is ', error)
  $('.full-width-alert-container').html('<div class="alert alert-danger alert-update-error">' +
      'Update unsuccessful </div>')
  $('.alert-update-error').delay(3000).fadeOut()
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
  updateError
}
