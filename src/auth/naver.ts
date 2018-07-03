const {
  clientID,
  clientSecret,
  callbackURL
} = require('../../auth.json').naver

export let vendor = 'naver'

export let Strategy = require('passport-naver').Strategy

export let strategyConfig = {
  clientID,
  clientSecret,
  callbackURL,
  passReqToCallback: true
}
