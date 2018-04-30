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
const model_1 = require("../model");
module.exports = (vendor) => {
    return (req, accessToken, refreshToken, profile, done) => __awaiter(this, void 0, void 0, function* () {
        const result = yield model_1.default.OAuth.findByOAuth(profile.id, vendor);
        let payload;
        if (result.user && result.user.id) {
            const { id, email, nickname, isAdmin } = result.user;
            payload = { id, email, nickname, isAdmin, vendor, oAuthId: profile.id, requireRegister: false };
        }
        else if (result.user && !result.user) {
            payload = { vendor, oAuthId: profile.id, requireRegister: true };
        }
        else {
            yield model_1.default.OAuth.createDummyUser({ oAuthId: profile.id, vendor });
            payload = { vendor, oAuthId: profile.id, requireRegister: true };
        }
        done(null, payload);
    });
};
