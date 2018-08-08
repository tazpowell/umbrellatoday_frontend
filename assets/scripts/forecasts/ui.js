'use strict'
const store = require('../store')

// reset answer
const resetAnswer = function () {
  console.log('resetAnswer ran')
  if (!$('.answer-yes').hasClass('hide')) {
    $('.answer-yes').addClass('hide')
  } else if (!$('.answer-no').hasClass('hide')) {
    $('.answer-no').addClass('hide')
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
  console.log('getBostonSuccess response is ', response)
  const weekArray = response.daily.data
  console.log('weekArray[0] is ', weekArray[0])
  // loop through weekArray
  // run checkPrecipProbability on each day
  if (checkPrecipProbability(weekArray[0])) {
    // if any return true, show YES
    console.log('answer should be yes')
    $('.answer-yes').removeClass('hide')
  } else {
    console.log('answer should be no')
    $('.answer-no').removeClass('hide')
  }
}

const getBostonError = function (error) {
  console.log('getBostonError error is ', error)
}

const getForecastSuccess = function (response) {
  resetAnswer()
  $('.answer-location').html('In ' + store.query.name)
  // debugger
  const weekArray = response.daily.data
  console.log('weekArray[0] is ', weekArray[0])
  // loop through weekArray
  // run checkPrecipProbability on each day
  if (checkPrecipProbability(weekArray[0])) {
    // if any return true, show YES
    $('.answer-yes').removeClass('hide')
  } else {
    $('.answer-no').removeClass('hide')
  }
}

const getForecastError = function (error) {
  console.log('getForecastError error is ', error)
}

module.exports = {
  getBostonSuccess,
  getBostonError,
  getForecastSuccess,
  getForecastError
}
