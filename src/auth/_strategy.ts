import * as model from '../model'
import { sessToken, JWT } from '../api'

interface Profile {
  id: number
}

export default (vendor: string) => { 
  return async (req: any, accessToken: string, refreshToken: string, profile: Profile, done: Function) => {
    const result = await model.OAuth.findByOAuth(profile.id, vendor)

    let payload

    const token = sessToken.getToken(req)

    if (result && result.user && result.user.id) {
      if (token) {
        done(null, false, { message: 'already registered' })
        return
      } else {
        const { id, email, nickname, isAdmin } = result.user
        payload = { id, email, nickname, isAdmin, vendor, oAuthId: profile.id, requireRegister: false }
      }
    } else {
      if (result && result.oauth) {
        payload = { vendor, oAuthId: profile.id, requireRegister: true }
      } else {
        if (token) {
          let tokenUser = await JWT.verifyToken(token)
          let userInfo = { userId: tokenUser.id, oAuthId: profile.id, vendor}
          
           let [dummy, user] = await Promise.all([
            model.OAuth.createUser(userInfo),
            model.User.findById(tokenUser.id)
          ])

          const { id, email, nickname, isAdmin } = user
          payload = { id, email, nickname, isAdmin, vendor, oAuthId: profile.id, requireRegister: false }
        } else {
          await model.OAuth.createDummyUser({oAuthId: profile.id, vendor})
          payload = { vendor, oAuthId: profile.id, requireRegister: true }
        }
      }
    }

    done(null, payload)
  }
}
