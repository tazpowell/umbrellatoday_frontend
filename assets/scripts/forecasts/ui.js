'use strict'

// check if precipProbability is 0.5 or greater
const checkPrecipProbability = function (data) {
  console.log('data inside checkPrecipProbability is ', data)
  if (data.precipProbability >= 0.50) {
    console.log('data.precipProbablity is ', data.precipProbability)
    return true
  }
}

const getBostonSuccess = function (response) {
  console.log('getBostonSuccess response is ', response)
  const weekArray = response.daily.data
  console.log('weekArray[0] is ', weekArray[0])
  // loop through weekArray
  // run checkPrecipProbability on each day
  // weekArray.forEach(checkPrecipProbability
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

module.exports = {
  getBostonSuccess,
  getBostonError
}
