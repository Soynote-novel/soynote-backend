"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { Password } = require('../api');
const table = require('../table');
const SUCCESS = true;
class User {
    static findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = {
                where: { id }
            };
            const user = yield table.User.findOne(payload);
            return (!!user) && user.dataValues;
        });
    }
    static findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = {
                where: { email }
            };
            const user = yield table.User.findOne(payload);
            return (!!user) && user.dataValues;
        });
    }
    static findByNick(nickname) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = {
                where: { nickname }
            };
            const user = yield table.User.findOne(payload);
            return (!!user) && user.dataValues;
        });
    }
    static register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password, nickname } = user;
            const payload = {
                email,
                password: yield Password.signature(password),
                nickname
            };
            yield table.User.create(payload);
            return SUCCESS;
        });
    }
    static unregister(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = {
                where: { id }
            };
            yield table.User.destroy(payload);
            return SUCCESS;
        });
    }
}
module.exports = User;
