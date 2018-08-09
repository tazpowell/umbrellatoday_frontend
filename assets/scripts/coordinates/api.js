'use strict'
const config = require('../config.js')

// GET COORDINATES BY NAME
const getCoordinatesByName = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/coordinates',
    data: data
  })
}

module.exports = {
  getCoordinatesByName
}
