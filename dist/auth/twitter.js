"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { consumerKey, consumerSecret, callbackURL } = require('../auth.json').twitter;
exports.vendor = 'twitter';
exports.Strategy = require('passport-twitter').Strategy;
exports.strategyConfig = {
    consumerKey,
    consumerSecret,
    callbackURL,
    passReqToCallback: true,
    session: false
};
