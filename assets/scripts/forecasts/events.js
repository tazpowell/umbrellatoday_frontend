'use strict'
const fApi = require('./api.js')
const fUi = require('./ui.js')
const store = require('../store')

const onGetBostonForecast = function () {
  console.log('onGetBostonForecast ran')
  // event.preventDefault()
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

module.exports = {
  onGetBostonForecast,
  onGetLocationForecast
}
