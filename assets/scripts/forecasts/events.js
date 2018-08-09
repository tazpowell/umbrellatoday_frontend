'use strict'
const fApi = require('./api.js')
const fUi = require('./ui.js')
const locEvents = require('../locations/events.js')
const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields.js')

const onGetBostonForecast = function () {
  console.log('onGetBostonForecast ran')
  // api
  fApi.getBostonForecast()
    .then(fUi.getBostonSuccess)
    .catch(fUi.getBostonError)
}

const onGetLocationForecast = function (event) {
  console.log('onGetLocationForecast ran')
  const locationID = parseInt(event.target.parentElement.parentElement.getAttribute('data-id'))
  console.log('locationID is ', locationID)
  const data = {}
  data.location = store.locations.find(x => x.id === locationID)
  store.query = store.locations.find(x => x.id === locationID)
  console.log('store.query is ', store.query)
  console.log('onGetLocationForecast data is ', data)
  // api
  fApi.getLocationForecast(data)
    .then(fUi.getForecastSuccess)
    .catch(fUi.getForecastError)
}

const onFindByLatLong = function () {
  console.log('onFindByLatLong ran')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('onFindByLatLong data is ', data)
  locEvents.validateFormData(data)
    // .then((data) => { console.log('data is ', data) })
    .then(() => {
      store.query = {}
      store.query.name = `${data.location.lat}, ${data.location.long}`
      return data
    })
    .then(fApi.getLocationForecast)
    .then(fUi.getForecastSuccess)
    .catch(fUi.getForecastError)
}

module.exports = {
  onGetBostonForecast,
  onGetLocationForecast,
  onFindByLatLong
}
