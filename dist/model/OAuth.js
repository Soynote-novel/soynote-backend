"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const table = require('../table');
const SUCCESS = true;
class OAuth {
    static findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = {
                where: { id },
                include: { model: table.User }
            };
            const user = yield table.OAuth.findOne(payload);
            if (user) {
                const result = {
                    oauth: user.dataValues,
                    user: user.dataValues.user ? user.dataValues.user.dataValues : ''
                };
                delete result.oauth.user;
                return result;
            }
        });
    }
    static findByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = {
                where: { userId },
                include: { model: table.User }
            };
            const user = yield table.OAuth.findOne(payload);
            if (user) {
                const result = {
                    oauth: user.dataValues,
                    user: user.dataValues.user ? user.dataValues.user.dataValues : ''
                };
                delete result.oauth.user;
                return result;
            }
        });
    }
    static findByOAuth(oAuthId, vendor) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = {
                where: { oAuthId, vendor },
                include: { model: table.User }
            };
            const user = yield table.OAuth.findOne(payload);
            if (user) {
                const result = {
                    oauth: user.dataValues,
                    user: user.dataValues.user ? user.dataValues.user.dataValues : ''
                };
                delete result.oauth.user;
                return result;
            }
        });
    }
    static createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, oAuthId, vendor } = user;
            const payload = { userId, oAuthId, vendor };
            yield table.OAuth.create(payload);
            return SUCCESS;
        });
    }
    static createDummyUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { oAuthId, vendor } = user;
            const payload = { oAuthId, vendor };
            yield table.OAuth.create(payload);
            return SUCCESS;
        });
    }
    static successRegister(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, oAuthId, vendor } = user;
            const where = {
                where: { oAuthId, vendor }
            };
            let result = yield table.OAuth.findOne(where);
            if (result.dataValues && !result.dataValues.userId) {
                const payload = { userId };
                yield table.OAuth.update(payload, where);
                return SUCCESS;
            }
        });
    }
}
module.exports = OAuth;
