"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const router = require('express').Router();
const model = require('../model');
const { Password, JWT, LoginCheck, isNotLogin } = require('../api');
router.post('/login', isNotLogin, (req, res) => __awaiter(this, void 0, void 0, function* () {
    const user = yield model.User.findByEmail(req.body.email);
    if (user === false) {
        const payload = {
            error: 'user not found'
        };
        res.status(404);
        res.jsonp(payload);
        res.end();
        return;
    }
    if (user.isBlocked) {
        const payload = {
            error: 'this is blocked account',
            isBlocked: true
        };
        res.status(403);
        res.jsonp(payload);
        res.end();
        return;
    }
    if (!user.verified) {
        const payload = {
            error: 'this is not verified account',
            notVerified: true
        };
        res.status(403);
        res.jsonp(payload);
        res.end();
        return;
    }
    const { id, email, nickname, password: targetPassword, isAdmin } = user;
    const originPassword = req.body.password;
    const isValidPassword = yield Password.isValid(originPassword, targetPassword);
    if (isValidPassword) {
        const payload = {
            success: true
        };
        const jwtPayload = {
            id, email, nickname, isAdmin
        };
        const token = yield JWT.createToken(jwtPayload);
        res.cookie('sessToken', token, {
            httpOnly: true
        });
        payload.JWT_Token = token;
        res.status(200);
        res.jsonp(payload);
        res.end();
        yield model.RecentIP.log({ user: id, ip: req.ip.replace('::ffff:', '') });
    }
}));
router.get('/check', LoginCheck, (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { id, email, nickname, isAdmin } = req.token;
    const payload = { id, email, nickname, isAdmin };
    res.status('200');
    res.send(payload);
    res.end();
}));
module.exports = router;
