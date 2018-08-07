'use strict'
const config = require('../config.js')

// GET BOSTON DATA
const getBostonData = function () {
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

module.exports = {
  getBostonData
}
