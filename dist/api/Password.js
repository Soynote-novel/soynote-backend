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
const cryptos = require('crypto').createHash('sha256');
const bcrypt = require('bcrypt');
const createHash = (plain) => cryptos.update(plain).digest('hex');
class Password {
    static signature(plain) {
        return __awaiter(this, void 0, void 0, function* () {
            const hash = yield bcrypt.hash(createHash(plain), 12);
            return hash;
        });
    }
    static isValid(plain, target) {
        return __awaiter(this, void 0, void 0, function* () {
            const isEqual = yield bcrypt.compare(createHash(plain), target);
            return isEqual;
        });
    }
}
exports.default = Password;
