const {
  clientID,
  callbackURL
} = require('../../auth.json').kakao

export let vendor = 'kakao'

export let Strategy = require('passport-kakao').Strategy

export let strategyConfig = {
  clientID,
  callbackURL,
  passReqToCallback: true,
  session: false
}
