const {
  clientID,
  clientSecret,
  callbackURL
} = require('../../auth.json').facebook

export let vendor = 'facebook'

export let Strategy = require('passport-facebook').Strategy

export let strategyConfig = {
  clientID,
  clientSecret,
  callbackURL,
  passReqToCallback: true,
  profileFields: [
    'id',
    'name',
    'displayName'
  ],
  session: false
}
