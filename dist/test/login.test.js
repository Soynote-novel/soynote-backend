"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const model = require('../model');
const { Password } = require('../api');
class Test {
    static isValid() {
        return __awaiter(this, void 0, void 0, function* () {
            const email = 'jioo0224@naver.com';
            const target = yield model.User.findByEmail(email);
            console.log(target);
            const plain = 'registertest';
            const isValid = yield Password.isValid(plain, target.password);
            if (isValid) {
                console.log('login success');
            }
            else {
                console.log('login failure');
            }
        });
    }
}
Test.isValid();
