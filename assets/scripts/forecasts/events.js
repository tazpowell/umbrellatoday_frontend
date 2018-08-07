'use strict'
const fApi = require('./api.js')
const fUi = require('./ui.js')

const onGetBostonData = function () {
  console.log('onGetBostonData ran')
  event.preventDefault()
  // api
  fApi.getBostonData()
    .then(fUi.getBostonSuccess)
    .catch(fUi.getBostonError)
}

module.exports = {
  onGetBostonData
}
