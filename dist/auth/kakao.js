"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { clientID, callbackURL } = require('../auth.json').kakao;
exports.vendor = 'kakao';
exports.Strategy = require('passport-kakao').Strategy;
exports.strategyConfig = {
    clientID,
    callbackURL,
    passReqToCallback: true,
    session: false
};
