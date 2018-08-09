'use strict'
const store = require('../store')

// Clear form fields
const clearForms = function () {
  $('.form-area input').val('')
}

// create full width alert
// location: full-width-alert-container
// context: success, danger
// msgBold: Success, Error
// msgText: alert message to show
// fadeTime: 3000
const createAlert = function (location, context, msgBold, msgText, fadeTime) {
  console.log('createAlert in locations/ui.js ran')
  $(`${location}`).html(`<div class="alert alert-${context} role="alert">
    <strong><span="msg-bold">${msgBold}</span></strong> <span id="msgText">${msgText}</span>
  </div>`)
  if (fadeTime) {
    $(`${location} .alert-${context}`).delay(fadeTime).fadeOut()
  }
}

// reset answer
const resetAnswer = function () {
  console.log('resetAnswer ran')
  if ($('.title-content').hasClass('title-bg-yes')) {
    $('.title-content').removeClass('title-bg-yes')
  } else if ($('.title-content').hasClass('title-bg-no')) {
    $('.title-content').removeClass('title-bg-no')
  } else if (!$('.title-content').hasClass('title-bg-null')) {
    $('.title-content').addClass('title-bg-null')
  }
}

// check if precipProbability is 0.5 or greater
const checkPrecipProbability = function (data) {
  // console.log('data inside checkPrecipProbability is ', data)
  console.log('data.precipProbablity is ', data.precipProbability)
  if (data.precipProbability >= 0.50) {
    return true
  }
}

const getBostonSuccess = function (response) {
  resetAnswer()
  $('.answer-location').html('In Boston')
  $('.answer-stat').html('Precipitation probability is ' + response.daily.data[0].precipProbability)
  console.log('getBostonSuccess response is ', response)
  const weekArray = response.daily.data
  console.log('weekArray[0] is ', weekArray[0])
  // loop through weekArray
  // run checkPrecipProbability on each day
  if (checkPrecipProbability(weekArray[0])) {
    // if any return true, show YES
    console.log('answer should be yes')
    // $('.answer-yes').removeClass('hide')
    $('.title-content').removeClass('title-bg-null')
    $('.title-content').addClass('title-bg-yes')
  } else {
    console.log('answer should be no')
    // $('.answer-no').removeClass('hide')
    $('.title-content').removeClass('title-bg-null')
    $('.title-content').addClass('title-bg-no')
  }
}

const getBostonError = function (error) {
  console.log('getBostonError error is ', error)
  createAlert('.full-width-alert-container', 'danger', 'Error', 'Failed to get Boston forecast', 3000)
}

const getForecastSuccess = function (response) {
  resetAnswer()
  clearForms()
  $('.answer-location').html('In ' + store.query.name)
  $('.answer-stat').html('Precipitation probability is ' + response.daily.data[0].precipProbability)
  const weekArray = response.daily.data
  console.log('weekArray[0] is ', weekArray[0])
  // loop through weekArray
  // run checkPrecipProbability on each day
  if (checkPrecipProbability(weekArray[0])) {
    // if any return true, show YES
    $('.title-content').removeClass('title-bg-null')
    $('.title-content').addClass('title-bg-yes')
  } else {
    $('.title-content').removeClass('title-bg-null')
    $('.title-content').addClass('title-bg-no')
  }
}

const getForecastError = function (error) {
  console.log('getForecastError error is ', error)
  createAlert('.full-width-alert-container', 'danger', 'Error', error, 3000)
}

module.exports = {
  getBostonSuccess,
  getBostonError,
  getForecastSuccess,
  getForecastError
}
