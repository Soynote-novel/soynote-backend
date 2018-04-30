"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
const fs = require('fs');
const configs = require('../config.json');
class JWTBuilder {
    constructor() {
        this.issuer = configs.jwt.issuer;
        this.privkey = fs.readFileSync(configs.jwt.private);
        this.publkey = fs.readFileSync(config.jwt.public);
        this.subject = configs.jwt.subject;
        this.algorithm = 'RS256';
        this.maxAge = configs.jwt.maxAge;
    }
    createToken(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                algorithm: this.algorithm,
                expiresIn: this.maxAge,
                issuer: this.issuer,
                subject: this.subject
            };
            const result = yield this._createJWT(payload, this.privkey, options);
            return result;
        });
    }
    verifyToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                algorithm: this.algorithm,
                issuer: this.issuer,
                subject: this.subject,
                maxAge: this.maxAge
            };
            const result = yield this._verifyJWT(token, this.publkey, options);
            return result;
        });
    }
    _createJWT(payload, secret, options) {
        return new Promise((resolve, reject) => {
            jwt.sign(payload, secret, options, (error, token) => {
                if (error)
                    reject(error);
                else
                    resolve(token);
            });
        });
    }
    _verifyJWT(token, secret, options) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, secret, options, (error, decoded) => {
                if (error)
                    reject(error);
                else
                    resolve(decoded);
            });
        });
    }
}
exports.default = new JWTBuilder();
