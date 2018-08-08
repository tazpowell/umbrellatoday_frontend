'use strict'
const store = require('../store')
const authApi = require('./api.js')
const locEvents = require('../locations/events')

// Clear form fields
const clearForms = function () {
  $('.form-area input').val('')
  // $('.form-area input[type=password]').val('')
}

// Clear messages under form fields
const clearAlerts = function () {
  // console.log('clearAlerts ran')
  $('.alert').html('')
}

// Create alerts
// const showAlert = function (context, msgBold, msgText, fadeTime) {
//   console.log('in ui.showAlert')
//   $('#alert-zone').html(`<div class="alert alert-${context} alert-dismissible" role="alert">
//     <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
//     <strong><span="msg-bold">${msgBold}</span></strong> <span id="msgText">${msgText}</span>
//   </div>`)
//   if (fadeTime) {
//     $(`#alert-zone .alert-${context}`).delay(fadeTime).fadeOut()
//   }
// }

// PASSWORD do not match
const pwNotMatching = function () {
  clearAlerts()
  $('.sign-up-alert-container').html('<div class="alert alert-danger alert-sign-up-error">' +
      'Passwords do not match </div>')
  $('.alert-sign-up-error').delay(3000).fadeOut()
  clearForms()
}

// PASSWORD do not match
const pwMatching = function () {
  clearAlerts()
  $('.change-pw-alert-container').html('<div class="alert alert-danger alert-change-pw-error">' +
      'New password must be different than old </div>')
  $('.alert-change-pw-error').delay(3000).fadeOut()
  clearForms()
}

// SIGN UP error
const signUpError = function () {
  // console.log('signUpError ran')
  clearAlerts()
  $('.sign-up-alert-container').html('<div class="alert alert-danger alert-sign-up-error">' +
      'Sign up was unsuccessful </div>')
  $('.alert-sign-up-error').delay(3000).fadeOut()
  clearForms()
}

// SIGN UP success
const signUpSuccess = function (signUpResponse) {
  clearAlerts()
  store.credentials.email = signUpResponse.user.email

  // on Sign In after a Sign Up
  const onSignInAfterUp = function () {
    authApi.signIn(store)
      .then(signInSuccess)
      .catch(signInError)
  }
  onSignInAfterUp()
  clearForms()
}

// SIGN IN success
const signInSuccess = function (signInResponse) {
  clearAlerts()
  store.user = signInResponse.user
  $('.full-width-alert-container').html('<div class="alert alert-success alert-sign-in-success">' +
      'Sign in successful </div>')
  $('.alert-sign-in-success').delay(3000).fadeOut()
  // $('.navbar-text').html('Signed in as ' + signInResponse.user.email)
  // $('.landing-intro').toggleClass('hide')
  $('.sign-in-sign-up-forms').toggleClass('hide')
  $('.change-pw-sign-out').toggleClass('hide')
  $('.location-modules').toggleClass('hide')
  // $('.navbar-default').toggleClass('hide')
  // $('.full-width-alert-container').toggleClass('landing-view-only')
  clearForms()
  locEvents.onGetLocations()
}

// SIGN IN error
const signInError = function () {
  clearAlerts()
  $('.sign-in-alert-container').html('<div class="alert alert-danger alert-sign-in-error">' +
      'Sign in was unsuccessful </div>')
  $('.alert-sign-in-error').delay(3000).fadeOut()
  clearForms()
}

// Change PW success
const changePWSuccess = function () {
  clearAlerts()
  // console.log('password successfuly updated')
  $('.full-width-alert-container').html('<div class="alert alert-success alert-change-pw-success">' +
  '<button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>' +
      'Password was successfully updated for: ' + store.user.email +
      '</div>')
  $('.alert-change-pw-success').delay(3000).fadeOut()
  $('#change-pw-btn').dropdown('toggle')
  clearForms()
}
// Change PW error
const changePWError = function () {
  clearAlerts()
  $('.change-pw-alert-container').html('<div class="alert alert-danger alert-change-pw-error">' +
      'Password change was unsuccessful </div>')
  $('.alert-change-pw-error').delay(3000).fadeOut()
  // $('.change-pw-alert-danger').html('Password change failed').toggleClass('hide').delay(3000).fadeOut()
  clearForms()
}

// SIGN OUT success
const signOutSuccess = function () {
  clearAlerts()
  // console.log('sign out successful')
  $('.full-width-alert-container').html('<div class="alert alert-success alert-sign-out-success full-width-alert">' +
  '<button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>' +
      'Signed out successfully. </div>')
  $('.alert-sign-out-success').delay(3000).fadeOut()
  delete store.user
  delete store.locations
  delete store.delete
  delete store.query
  clearForms()
  // $('.navbar-text').html('')
  $('.sign-in-sign-up-forms').toggleClass('hide')
  $('.change-pw-sign-out').toggleClass('hide')
  $('.location-modules').toggleClass('hide')
  // $('.full-width-alert-container').toggleClass('landing-view-only')
  console.log('store after signOutSuccess is ', store)
}

// SIGN OUT error
const signOutError = function () {
  clearAlerts()
  $('.full-width-alert-container').html('<div class="alert alert-danger alert-sign-out-error">' +
  '<button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>' +
      'Failed to sign out. </div>')
  $('.alert-sign-out-error').delay(3000).fadeOut()
  // $('.alert-danger-full-width').html('Sign out failed').toggleClass('hide').delay(3000).fadeOut()
  clearForms()
}

module.exports = {
  clearForms,
  clearAlerts,
  pwNotMatching,
  pwMatching,
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  changePWSuccess,
  changePWError,
  signOutSuccess,
  signOutError
}
