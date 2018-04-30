"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { clientID, clientSecret, callbackURL } = require('../auth.json').google;
exports.vendor = 'google';
exports.Strategy = require('passport-google-oauth2').Strategy;
exports.strategyConfig = {
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
};
