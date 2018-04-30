"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { clientID, clientSecret, callbackURL } = require('../auth.json').facebook;
exports.vendor = 'facebook';
exports.Strategy = require('passport-facebook').Strategy;
exports.strategyConfig = {
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
};
