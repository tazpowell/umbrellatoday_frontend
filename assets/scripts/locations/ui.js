const store = require('../store')
const locationsTemplate = require('../templates/locations.handlebars')

// Clear form fields
const clearForms = function () {
  $('.form-area input').val('')
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

module.exports = {
  getAllSuccess,
  getAllError,
  createSuccess,
  createError
}
