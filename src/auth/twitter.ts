const {
  consumerKey,
  consumerSecret,
  callbackURL
} = require('../../auth.json').twitter

export let vendor = 'twitter'

export let Strategy = require('passport-twitter').Strategy

export let strategyConfig = {
  consumerKey,
  consumerSecret,
  callbackURL,
  passReqToCallback: true
}
