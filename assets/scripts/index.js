'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const locEvents = require('./locations/events')
const fEvents = require('./forecasts/events')
const coorEvents = require('./coordinates/events')

$(() => {
  // $('#nav-lookup').tabCollapse()

  // user auth forms/button
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-pw-form').on('submit', authEvents.onChangePW)
  $('#sign-out-btn').on('click', authEvents.onSignOut)

  // locations
  // $('#get-locations-btn').on('click', locEvents.onGetLocations)
  $('#create-location-form').on('submit', locEvents.onCreateLocation)
  $('#location-list').on('click', '.delete-btn', locEvents.onConfirmDeleteLocation)
  $('#deleteModal').on('click', '#confirm-delete-btn', locEvents.onDeleteLocation)
  $('#location-list').on('click', '.update-btn', locEvents.onConfirmUpdateLocation)
  $('#updateModal').on('click', '#confirm-update-btn', locEvents.onUpdateLocation)
  $('#find-by-name-form').on('submit', coorEvents.onFindByName)
  $('#find-by-latlong-form').on('submit', fEvents.onFindByLatLong)
  $('#geo-locate-btn').on('click', coorEvents.onFindUserPosition)

  // forecasts
  $('#check-bos-btn').on('click', fEvents.onGetBostonForecast)
  $('#location-list').on('click', '.check-weather-btn', fEvents.onGetLocationForecast)
})
