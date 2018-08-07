'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const locEvents = require('./locations/events')
const fEvents = require('./forecasts/events')

$(() => {
  // user auth forms/button
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-pw-form').on('submit', authEvents.onChangePW)
  $('#sign-out-btn').on('click', authEvents.onSignOut)

  // locations
  $('#get-locations-btn').on('click', locEvents.onGetLocations)
  $('#create-location-form').on('submit', locEvents.onCreateLocation)

  // forecats
  $('#check-bos-btn').on('click', fEvents.onGetBostonData)
})
