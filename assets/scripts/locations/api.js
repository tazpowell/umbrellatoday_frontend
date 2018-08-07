'use strict'
const config = require('../config.js')
const store = require('../store')

// GET LOCATIONS
const getLocations = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/locations',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getLocations
}
