"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { clientID, clientSecret, callbackURL } = require('../auth.json').naver;
exports.vendor = 'naver';
exports.Strategy = require('passport-naver').Strategy;
exports.strategyConfig = {
    clientID,
    clientSecret,
    callbackURL,
    passReqToCallback: true,
    session: false
};
