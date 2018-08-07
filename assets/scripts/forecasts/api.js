'use strict'
const config = require('../config.js')

// GET BOSTON FORECAST
const getBostonForecast = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/forecasts',
    data: {
      location: {
        lat: 42.358430,
        long: -71.059770
      }
    }
  })
}

// GET ANY LOCATION FORECAST
const getLocationForecast = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/forecasts',
    data: data
  })
}

module.exports = {
  getBostonForecast,
  getLocationForecast
}
