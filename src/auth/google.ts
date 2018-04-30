const {
  clientID,
  clientSecret,
  callbackURL
} = require('../auth.json').google

export let vendor = 'google'

export let Strategy = require('passport-google-oauth2').Strategy

export let strategyConfig = {
  clientID,
  clientSecret,
  callbackURL,
  passReqToCallback: true,
  scope: [
    'profile',
    'email',
    'https://www.googleapis.com/auth/plus.login'
  ],
  session: false
}
