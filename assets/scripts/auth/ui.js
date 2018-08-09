'use strict'
const store = require('../store')
const authApi = require('./api.js')
const locEvents = require('../locations/events')

// Clear form fields
const clearForms = function () {
  $('.form-area input').val('')
}

// Clear messages under form fields
const clearAlerts = function () {
  // console.log('clearAlerts ran')
  $('.alert').html('')
}

// CREATE ALERT
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

// PASSWORD do not match
const pwNotMatching = function () {
  clearAlerts()
  // createAlert params: location, context, msgBold, msgText, fadeTime
  createAlert('.sign-up-alert-container', 'danger', 'Error', 'Passwords do not match', 3000)
  clearForms()
}

// PASSWORD do not match
const pwMatching = function () {
  clearAlerts()
  createAlert('.full-width-alert-container', 'danger', 'Error', 'New password must be different than old', 3000)
  clearForms()
}

// SIGN UP error
const signUpError = function () {
  clearAlerts()
  createAlert('.sign-up-alert-container', 'danger', 'Error', 'Sign up was unsuccessful', 3000)
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
  $('.navbar-text').html('Signed in as ' + signInResponse.user.email)
  $('.sign-in-sign-up-forms').toggleClass('hide')
  $('.change-pw-sign-out').toggleClass('hide')
  $('.location-modules').toggleClass('hide')
  $('.nav-form-item-dropdown').toggleClass('hide')
  $('.nav-sign-out-btn').toggleClass('hide')
  clearForms()
  locEvents.onGetLocations()
}

// SIGN IN error
const signInError = function () {
  clearAlerts()
  createAlert('.sign-in-alert-container', 'danger', 'Error', 'Sign in was unsuccessful', 3000)
  clearForms()
}

// Change PW success
const changePWSuccess = function () {
  clearAlerts()
  createAlert('.full-width-alert-container', 'success', 'Success', `Password updated for: ${store.user.email}`, 3000)
  // $('#change-pw-btn').dropdown('toggle')
  clearForms()
}
// Change PW error
const changePWError = function () {
  clearAlerts()
  createAlert('.full-width-alert-container', 'danger', 'Error', 'Password change was unsuccessful', 3000)
  clearForms()
}

// SIGN OUT success
const signOutSuccess = function () {
  clearAlerts()
  createAlert('.full-width-alert-container', 'success', '', 'Signed out successfully', 3000)
  delete store.user
  delete store.locations
  delete store.delete
  delete store.query
  clearForms()
  $('.navbar-text').html('')
  $('.sign-in-sign-up-forms').toggleClass('hide')
  $('.change-pw-sign-out').toggleClass('hide')
  $('.location-modules').toggleClass('hide')
  $('#locations-table-body').html('')
  $('.nav-form-item-dropdown').toggleClass('hide')
  $('.nav-sign-out-btn').toggleClass('hide')
  // $('.full-width-alert-container').toggleClass('landing-view-only')
  console.log('store after signOutSuccess is ', store)
}

// SIGN OUT error
const signOutError = function () {
  clearAlerts()
  createAlert('.full-width-alert-container', 'danger', 'Error', 'Failed to sign out', 3000)
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
